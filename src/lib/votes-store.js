import { Pool } from 'pg'
import nominationsData from '../data/nominations.json'

// The nominee list changes every week (see src/data/nominations.json).
// Voting is scoped to the current week's nominees only, and counts start
// fresh each week — a contestant nominated again in a later week starts
// back at 0.
const CURRENT_WEEK = nominationsData.week
const VALID_SLUGS = new Set(nominationsData.nominees)

// Always backed by Supabase Postgres (via the Vercel integration) — no
// fallback storage. POSTGRES_URL must be configured in every environment
// this runs in, local development included.
//
// pg's connection-string SSL parsing treats Supabase's self-signed pooler
// certificate as untrusted under 'sslmode=require'; swap in 'no-verify' so
// the connection still uses TLS without failing certificate verification.
function buildConnectionString() {
  const raw = process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL
  if (!raw) {
    throw new Error('POSTGRES_URL is not configured — voting requires a database connection.')
  }
  return raw.replace('sslmode=require', 'sslmode=no-verify')
}

let pool = null
function getPool() {
  if (!pool) {
    pool = new Pool({ connectionString: buildConnectionString() })
  }
  return pool
}

async function ensureWeeklyVotesTable(pool) {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS weekly_votes (
       week INTEGER NOT NULL,
       slug TEXT NOT NULL,
       count INTEGER NOT NULL DEFAULT 0,
       updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
       PRIMARY KEY (week, slug)
     )`
  )
}

function emptyVotes() {
  const votes = {}
  VALID_SLUGS.forEach(slug => { votes[slug] = 0 })
  return votes
}

export async function getVotes() {
  const pool = getPool()
  await ensureWeeklyVotesTable(pool)
  const { rows } = await pool.query('SELECT slug, count FROM weekly_votes WHERE week = $1', [CURRENT_WEEK])
  const votes = emptyVotes()
  rows.forEach(row => {
    if (VALID_SLUGS.has(row.slug)) votes[row.slug] = Number(row.count)
  })
  return { votes, updatedAt: new Date().toISOString(), week: CURRENT_WEEK }
}

export async function castVote(slug) {
  if (!VALID_SLUGS.has(slug)) {
    throw new Error('This contestant is not nominated this week')
  }

  const pool = getPool()
  await ensureWeeklyVotesTable(pool)
  await pool.query(
    `INSERT INTO weekly_votes (week, slug, count, updated_at) VALUES ($1, $2, 1, now())
     ON CONFLICT (week, slug) DO UPDATE SET count = weekly_votes.count + 1, updated_at = now()`,
    [CURRENT_WEEK, slug]
  )
  // Per-vote timestamped log, kept separately from the running weekly counts
  // so recent activity (e.g. votes in the last 24h) can be queried.
  await ensureVoteEventsTable(pool)
  await pool.query('INSERT INTO vote_events (week, slug) VALUES ($1, $2)', [CURRENT_WEEK, slug])
  return getVotes()
}

async function ensureVoteEventsTable(pool) {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS vote_events (
       id BIGSERIAL PRIMARY KEY,
       slug TEXT NOT NULL,
       created_at TIMESTAMPTZ NOT NULL DEFAULT now()
     )`
  )
  // The table may already exist from before weekly nominations were added.
  await pool.query('ALTER TABLE vote_events ADD COLUMN IF NOT EXISTS week INTEGER NOT NULL DEFAULT 1')
}

export async function getRecentVoteCount(hours = 24) {
  const pool = getPool()
  await ensureVoteEventsTable(pool)
  const { rows } = await pool.query(
    `SELECT slug, COUNT(*)::int AS count FROM vote_events
     WHERE created_at > now() - ($1 || ' hours')::interval
     GROUP BY slug`,
    [hours]
  )
  const bySlug = {}
  let total = 0
  rows.forEach(r => { bySlug[r.slug] = r.count; total += r.count })
  return { bySlug, total, sinceHours: hours }
}
