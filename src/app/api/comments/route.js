import { NextResponse } from 'next/server'
import { getComments, addComment, validateComment } from '../../../lib/comments-store'

export const dynamic = 'force-dynamic'

const COMMENT_COOKIE = 'bb10_last_comment_at'
const COMMENT_COOLDOWN_MS = 20 * 1000 // basic anti-spam throttle, no login required

export async function GET() {
  try {
    const comments = await getComments()
    return NextResponse.json({ comments })
  } catch (error) {
    console.error('Error fetching comments:', error)
    return NextResponse.json({ comments: [] }, { status: 200 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const validated = validateComment(body)

    if (validated.error) {
      return NextResponse.json({ error: validated.error }, { status: 400 })
    }

    const lastCommentAt = request.cookies.get(COMMENT_COOKIE)?.value
    if (lastCommentAt) {
      const elapsed = Date.now() - Number(lastCommentAt)
      if (elapsed < COMMENT_COOLDOWN_MS) {
        const secondsLeft = Math.ceil((COMMENT_COOLDOWN_MS - elapsed) / 1000)
        return NextResponse.json(
          { error: `Please wait ${secondsLeft}s before posting again.` },
          { status: 429 }
        )
      }
    }

    const comment = await addComment(validated)

    const response = NextResponse.json({ comment })
    response.cookies.set(COMMENT_COOKIE, String(Date.now()), {
      maxAge: COMMENT_COOLDOWN_MS / 1000,
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
    })
    return response
  } catch (error) {
    console.error('Error posting comment:', error)
    return NextResponse.json({ error: 'Could not post your comment. Please try again.' }, { status: 500 })
  }
}
