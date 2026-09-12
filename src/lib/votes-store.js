import { Pool } from 'pg'
import contestantsData from '../data/contestants.json'

const VALID_SLUGS = new Set(contestantsData.contestants.map(c => c.slug))

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

function emptyVotes() {
  const votes = {}
  VALID_SLUGS.forEach(slug => { votes[slug] = 0 })
  return votes
}

export async function getVotes() {
  const { rows } = await getPool().query('SELECT slug, count FROM votes')
  const votes = emptyVotes()
  rows.forEach(row => {
    if (VALID_SLUGS.has(row.slug)) votes[row.slug] = Number(row.count)
  })
  return { votes, updatedAt: new Date().toISOString() }
}

export async function castVote(slug) {
  if (!VALID_SLUGS.has(slug)) {
    throw new Error('Unknown contestant slug')
  }

  await getPool().query(
    `INSERT INTO votes (slug, count, updated_at) VALUES ($1, 1, now())
     ON CONFLICT (slug) DO UPDATE SET count = votes.count + 1, updated_at = now()`,
    [slug]
  )
  return getVotes()
}
