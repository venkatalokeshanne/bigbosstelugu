import fs from 'fs'
import path from 'path'
import { Pool } from 'pg'

const COMMENTS_FILE = path.join(process.cwd(), 'src', 'data', 'comments.json')
const MAX_NAME_LENGTH = 40
const MAX_MESSAGE_LENGTH = 500
const MAX_COMMENTS = 300

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

// ---- File-based fallback (local dev, or any non-DB deployment) ----
let memoryStore = null
let usingMemoryFallback = false

function readCommentsFile() {
  if (usingMemoryFallback) return memoryStore

  try {
    const raw = fs.readFileSync(COMMENTS_FILE, 'utf-8')
    const data = JSON.parse(raw)
    if (!Array.isArray(data.comments)) throw new Error('Malformed comments file')
    return data
  } catch (error) {
    return { comments: [] }
  }
}

function writeCommentsFile(data) {
  if (usingMemoryFallback) {
    memoryStore = data
    return
  }

  try {
    fs.writeFileSync(COMMENTS_FILE, JSON.stringify(data, null, 2) + '\n', 'utf-8')
  } catch (error) {
    console.error('Filesystem is not writable, switching to in-memory comment storage:', error.message)
    usingMemoryFallback = true
    memoryStore = data
  }
}

// Strip any markup so comments can never inject HTML/scripts when rendered.
function sanitize(text) {
  return text.replace(/<[^>]*>/g, '').trim()
}

export function validateComment({ name, message, parentId }) {
  const cleanMessage = sanitize(String(message || ''))
  const cleanName = sanitize(String(name || '')) || 'BB Fan'
  const cleanParentId = parentId != null ? Number(parentId) : null

  if (!cleanMessage) return { error: 'Comment cannot be empty.' }
  if (cleanMessage.length > MAX_MESSAGE_LENGTH) return { error: `Comment must be under ${MAX_MESSAGE_LENGTH} characters.` }
  if (cleanName.length > MAX_NAME_LENGTH) return { error: `Name must be under ${MAX_NAME_LENGTH} characters.` }
  if (cleanParentId != null && !Number.isFinite(cleanParentId)) return { error: 'Invalid reply target.' }

  return { name: cleanName, message: cleanMessage, parentId: cleanParentId }
}

// Returns a flat list (oldest first) with a `parentId` on each row; the
// caller builds the reply tree — keeps this store simple regardless of
// backend.
export async function getComments(limit = MAX_COMMENTS) {
  if (hasDb) {
    const { rows } = await getPool().query(
      'SELECT id, name, message, parent_id, created_at FROM comments ORDER BY created_at ASC LIMIT $1',
      [limit]
    )
    return rows.map(r => ({
      id: r.id,
      name: r.name,
      message: r.message,
      parentId: r.parent_id,
      createdAt: r.created_at,
    }))
  }

  const data = readCommentsFile()
  return data.comments
    .slice()
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .slice(-limit)
}

export async function addComment({ name, message, parentId }) {
  if (hasDb) {
    const { rows } = await getPool().query(
      'INSERT INTO comments (name, message, parent_id) VALUES ($1, $2, $3) RETURNING id, name, message, parent_id, created_at',
      [name, message, parentId]
    )
    const r = rows[0]
    return { id: r.id, name: r.name, message: r.message, parentId: r.parent_id, createdAt: r.created_at }
  }

  const data = readCommentsFile()
  const comment = {
    id: Date.now(),
    name,
    message,
    parentId: parentId ?? null,
    createdAt: new Date().toISOString(),
  }
  data.comments.push(comment)
  writeCommentsFile(data)
  return comment
}
