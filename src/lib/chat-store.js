import { Pool } from 'pg'

const MAX_NAME_LENGTH = 40
const MAX_MESSAGE_LENGTH = 300
const RECENT_LIMIT = 50

// Always backed by Supabase Postgres — no fallback storage, same as
// votes-store.js and comments-store.js.
function buildConnectionString() {
  const raw = process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL
  if (!raw) {
    throw new Error('POSTGRES_URL is not configured — chat requires a database connection.')
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

let tableEnsured = false
async function ensureChatTable(pool) {
  if (tableEnsured) return
  await pool.query(
    `CREATE TABLE IF NOT EXISTS chat_messages (
       id BIGSERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       message TEXT NOT NULL,
       created_at TIMESTAMPTZ NOT NULL DEFAULT now()
     )`
  )
  // Realtime only pushes changes for tables added to this publication.
  await pool.query(
    `DO $$
     BEGIN
       IF NOT EXISTS (
         SELECT 1 FROM pg_publication_tables
         WHERE pubname = 'supabase_realtime' AND tablename = 'chat_messages'
       ) THEN
         ALTER PUBLICATION supabase_realtime ADD TABLE chat_messages;
       END IF;
     END $$;`
  )
  tableEnsured = true
}

function sanitize(text) {
  return text.replace(/<[^>]*>/g, '').trim()
}

export function validateChatMessage({ name, message }) {
  const cleanMessage = sanitize(String(message || ''))
  const cleanName = sanitize(String(name || '')) || 'BB Fan'

  if (!cleanMessage) return { error: 'Message cannot be empty.' }
  if (cleanMessage.length > MAX_MESSAGE_LENGTH) return { error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` }
  if (cleanName.length > MAX_NAME_LENGTH) return { error: `Name must be under ${MAX_NAME_LENGTH} characters.` }

  return { name: cleanName, message: cleanMessage }
}

export async function getRecentMessages(limit = RECENT_LIMIT) {
  const pool = getPool()
  await ensureChatTable(pool)
  const { rows } = await pool.query(
    'SELECT id, name, message, created_at FROM chat_messages ORDER BY created_at DESC LIMIT $1',
    [limit]
  )
  return rows.reverse().map(r => ({ id: r.id, name: r.name, message: r.message, createdAt: r.created_at }))
}

export async function addMessage({ name, message }) {
  const pool = getPool()
  await ensureChatTable(pool)
  const { rows } = await pool.query(
    'INSERT INTO chat_messages (name, message) VALUES ($1, $2) RETURNING id, name, message, created_at',
    [name, message]
  )
  const r = rows[0]
  return { id: r.id, name: r.name, message: r.message, createdAt: r.created_at }
}
