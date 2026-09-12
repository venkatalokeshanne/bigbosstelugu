import fs from 'fs'
import path from 'path'
import { Pool } from 'pg'
import contestantsData from '../data/contestants.json'

const VOTES_FILE = path.join(process.cwd(), 'src', 'data', 'votes.json')

const VALID_SLUGS = new Set(contestantsData.contestants.map(c => c.slug))

// Use Supabase Postgres (via the Vercel integration) whenever a connection
// string is configured — this is what makes votes persist on Vercel's
// read-only serverless filesystem. Falls back to a local JSON file (with an
// in-memory fallback if even that isn't writable) for local development,
// where no database is configured.
//
// pg's connection-string SSL parsing treats Supabase's self-signed pooler
// certificate as untrusted under 'sslmode=require'; swap in 'no-verify' so
// the connection still uses TLS without failing certificate verification.
function buildConnectionString() {
  const raw = process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL
  if (!raw) return null
  return raw.replace('sslmode=require', 'sslmode=no-verify')
}

const CONNECTION_STRING = buildConnectionString()
const hasDb = Boolean(CONNECTION_STRING)

let pool = null
function getPool() {
  if (!pool) {
    pool = new Pool({ connectionString: CONNECTION_STRING })
  }
  return pool
}

function emptyVotes() {
  const votes = {}
  VALID_SLUGS.forEach(slug => { votes[slug] = 0 })
  return votes
}

// ---- File-based fallback (local dev, or any non-DB deployment) ----
let memoryStore = null
let usingMemoryFallback = false

function readVotesFile() {
  if (usingMemoryFallback) return memoryStore

  try {
    const raw = fs.readFileSync(VOTES_FILE, 'utf-8')
    const data = JSON.parse(raw)
    if (!data.votes) throw new Error('Malformed votes file')
    return data
  } catch (error) {
    console.error('Error reading votes file, rebuilding from contestants list:', error)
    return { votes: emptyVotes(), updatedAt: new Date().toISOString() }
  }
}

function writeVotesFile(data) {
  if (usingMemoryFallback) {
    memoryStore = data
    return
  }

  try {
    fs.writeFileSync(VOTES_FILE, JSON.stringify(data, null, 2) + '\n', 'utf-8')
  } catch (error) {
    console.error('Filesystem is not writable, switching to in-memory vote storage:', error.message)
    usingMemoryFallback = true
    memoryStore = data
  }
}

export async function getVotes() {
  if (hasDb) {
    const { rows } = await getPool().query('SELECT slug, count FROM votes')
    const votes = emptyVotes()
    rows.forEach(row => {
      if (VALID_SLUGS.has(row.slug)) votes[row.slug] = Number(row.count)
    })
    return { votes, updatedAt: new Date().toISOString() }
  }

  const data = readVotesFile()
  // Ensure every current contestant has an entry, without dropping historical ones
  let changed = false
  VALID_SLUGS.forEach(slug => {
    if (!(slug in data.votes)) {
      data.votes[slug] = 0
      changed = true
    }
  })
  if (changed) writeVotesFile(data)
  return data
}

export async function castVote(slug) {
  if (!VALID_SLUGS.has(slug)) {
    throw new Error('Unknown contestant slug')
  }

  if (hasDb) {
    await getPool().query(
      `INSERT INTO votes (slug, count, updated_at) VALUES ($1, 1, now())
       ON CONFLICT (slug) DO UPDATE SET count = votes.count + 1, updated_at = now()`,
      [slug]
    )
    return getVotes()
  }

  const data = await getVotes()
  data.votes[slug] = (data.votes[slug] || 0) + 1
  data.updatedAt = new Date().toISOString()
  writeVotesFile(data)
  return data
}
