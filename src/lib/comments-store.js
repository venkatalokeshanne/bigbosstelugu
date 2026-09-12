import { Pool } from 'pg'

const MAX_NAME_LENGTH = 40
const MAX_MESSAGE_LENGTH = 500
const MAX_COMMENTS = 300

// Always backed by Supabase Postgres (via the Vercel integration) — no
// fallback storage. POSTGRES_URL must be configured in every environment
// this runs in, local development included.
function buildConnectionString() {
  const raw = process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL
  if (!raw) {
    throw new Error('POSTGRES_URL is not configured — comments require a database connection.')
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
// caller builds the reply tree.
export async function getComments(limit = MAX_COMMENTS) {
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

export async function addComment({ name, message, parentId }) {
  const { rows } = await getPool().query(
    'INSERT INTO comments (name, message, parent_id) VALUES ($1, $2, $3) RETURNING id, name, message, parent_id, created_at',
    [name, message, parentId]
  )
  const r = rows[0]
  return { id: r.id, name: r.name, message: r.message, parentId: r.parent_id, createdAt: r.created_at }
}
