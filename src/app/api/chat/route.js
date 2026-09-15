import { NextResponse } from 'next/server'
import { getRecentMessages, addMessage, validateChatMessage } from '../../../lib/chat-store'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

const CHAT_COOKIE = 'bb10_last_chat_at'
const CHAT_COOLDOWN_MS = 10 * 1000 // one message per browser every 10s, to curb spam

const NO_CACHE_HEADERS = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
  'Pragma': 'no-cache',
}

export async function GET() {
  try {
    const messages = await getRecentMessages()
    return NextResponse.json({ messages }, { headers: NO_CACHE_HEADERS })
  } catch (error) {
    console.error('Error fetching chat messages:', error)
    return NextResponse.json(
      { error: 'chat_unavailable', message: 'Could not load chat right now.' },
      { status: 500, headers: NO_CACHE_HEADERS }
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const lastChatAt = request.cookies.get(CHAT_COOKIE)?.value
    if (lastChatAt) {
      const elapsed = Date.now() - Number(lastChatAt)
      if (elapsed < CHAT_COOLDOWN_MS) {
        return NextResponse.json(
          { error: 'rate_limited', message: 'Slow down — you are sending messages too fast.' },
          { status: 429, headers: NO_CACHE_HEADERS }
        )
      }
    }

    const validated = validateChatMessage(body)
    if (validated.error) {
      return NextResponse.json({ error: validated.error }, { status: 400, headers: NO_CACHE_HEADERS })
    }

    const message = await addMessage(validated)

    const response = NextResponse.json({ message }, { headers: NO_CACHE_HEADERS })
    response.cookies.set(CHAT_COOKIE, String(Date.now()), {
      maxAge: CHAT_COOLDOWN_MS / 1000,
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
    })
    return response
  } catch (error) {
    console.error('Error posting chat message:', error)
    return NextResponse.json(
      { error: 'chat_failed', message: 'Could not send your message. Please try again.' },
      { status: 500, headers: NO_CACHE_HEADERS }
    )
  }
}
