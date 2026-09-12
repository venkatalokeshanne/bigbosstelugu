import fs from 'fs'
import path from 'path'
import contestantsData from '../data/contestants.json'

const VOTES_FILE = path.join(process.cwd(), 'src', 'data', 'votes.json')
const KV_HASH_KEY = 'bb10:votes'

const VALID_SLUGS = new Set(contestantsData.contestants.map(c => c.slug))

// Use Vercel KV (Upstash Redis) whenever the project has a KV store linked —
// this is what makes votes persist on Vercel's read-only serverless
// filesystem. Falls back to a local JSON file (with an in-memory fallback if
// even that isn't writable) for local development, where no KV store exists.
const hasKv = Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)

let kv = null
if (hasKv) {
  // Lazy require so local dev without KV env vars never touches the client.
  kv = require('@vercel/kv').kv
}

function emptyVotes() {
  const votes = {}
  VALID_SLUGS.forEach(slug => { votes[slug] = 0 })
  return votes
}

// ---- File-based fallback (local dev, or any non-KV deployment) ----
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
  if (hasKv) {
    const raw = (await kv.hgetall(KV_HASH_KEY)) || {}
    const votes = emptyVotes()
    VALID_SLUGS.forEach(slug => {
      if (raw[slug] != null) votes[slug] = Number(raw[slug])
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

  if (hasKv) {
    await kv.hincrby(KV_HASH_KEY, slug, 1)
    return getVotes()
  }

  const data = await getVotes()
  data.votes[slug] = (data.votes[slug] || 0) + 1
  data.updatedAt = new Date().toISOString()
  writeVotesFile(data)
  return data
}
