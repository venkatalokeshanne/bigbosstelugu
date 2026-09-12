import { NextResponse } from 'next/server'
import { getVotes, castVote } from '../../../lib/votes-store'

export const dynamic = 'force-dynamic'

const VOTE_COOKIE = 'bb10_last_vote_at'
const VOTE_COOLDOWN_MS = 24 * 60 * 60 * 1000 // one vote per browser per day

export async function GET() {
  try {
    const data = await getVotes()
    const total = Object.values(data.votes).reduce((sum, n) => sum + n, 0)
    return NextResponse.json({ votes: data.votes, total, updatedAt: data.updatedAt })
  } catch (error) {
    console.error('Error fetching votes:', error)
    return NextResponse.json({ error: 'votes_unavailable', message: 'Could not load votes right now.' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const slug = body?.slug

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json({ error: 'Missing contestant slug' }, { status: 400 })
    }

    const lastVoteAt = request.cookies.get(VOTE_COOKIE)?.value
    if (lastVoteAt) {
      const elapsed = Date.now() - Number(lastVoteAt)
      if (elapsed < VOTE_COOLDOWN_MS) {
        const hoursLeft = Math.ceil((VOTE_COOLDOWN_MS - elapsed) / (60 * 60 * 1000))
        return NextResponse.json(
          { error: 'already_voted', message: `You can vote again in about ${hoursLeft} hour(s).` },
          { status: 429 }
        )
      }
    }

    const data = await castVote(slug)
    const total = Object.values(data.votes).reduce((sum, n) => sum + n, 0)

    const response = NextResponse.json({ votes: data.votes, total, updatedAt: data.updatedAt })
    response.cookies.set(VOTE_COOKIE, String(Date.now()), {
      maxAge: VOTE_COOLDOWN_MS / 1000,
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
    })
    return response
  } catch (error) {
    console.error('Error casting vote:', error)
    return NextResponse.json({ error: 'vote_failed', message: 'Could not record your vote. Please try again.' }, { status: 500 })
  }
}
