'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import contestantsData from '../data/contestants.json'
import nominationsData from '../data/nominations.json'
import ShareVotePopup from './ShareVotePopup'

const VOTE_COOLDOWN_MS = 60 * 60 * 1000
const LOCAL_KEY = 'bb10_vote_state'
const LIVE_REFRESH_MS = 15 * 1000

export default function ContestantVoting() {
  const contestants = useMemo(() => {
    const nomineeSlugs = new Set(nominationsData.nominees)
    return contestantsData.contestants.filter(c => nomineeSlugs.has(c.slug))
  }, [])

  const [votes, setVotes] = useState({})
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [submittingSlug, setSubmittingSlug] = useState(null)
  const [message, setMessage] = useState(null)
  const [votedState, setVotedState] = useState(null) // { slug, votedAt }
  const [loadError, setLoadError] = useState(false)
  const [sharePopupContestant, setSharePopupContestant] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY)
      if (raw) setVotedState(JSON.parse(raw))
    } catch {
      // ignore malformed local storage
    }

    fetchVotes()

    // Keep results live while the section is on screen, so counts move
    // without the visitor needing to refresh or vote themselves.
    const interval = setInterval(fetchVotes, LIVE_REFRESH_MS)
    return () => clearInterval(interval)
  }, [])

  const fetchVotes = async () => {
    try {
      const res = await fetch('/api/votes', { cache: 'no-store' })
      if (!res.ok) throw new Error('Failed to load votes')
      const data = await res.json()
      setVotes(data.votes || {})
      setTotal(data.total || 0)
    } catch (error) {
      console.error('Error loading votes:', error)
      setLoadError(true)
    } finally {
      setLoading(false)
    }
  }

  const cooldownRemaining = votedState
    ? Math.max(0, VOTE_COOLDOWN_MS - (Date.now() - votedState.votedAt))
    : 0
  const hasActiveCooldown = cooldownRemaining > 0
  // Results stay hidden until this visitor votes, then update live (the
  // polling interval above keeps refetching) rather than freezing at the
  // moment they voted.
  const showResults = hasActiveCooldown

  const handleVote = async (slug) => {
    if (hasActiveCooldown || submittingSlug) return

    setSubmittingSlug(slug)
    setMessage(null)

    try {
      const res = await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
      const data = await res.json()

      if (!res.ok) {
        setMessage({ type: 'error', text: data.message || 'You have already voted this hour. Try again shortly!' })
        return
      }

      setVotes(data.votes)
      setTotal(data.total)
      const newState = { slug, votedAt: Date.now() }
      setVotedState(newState)
      localStorage.setItem(LOCAL_KEY, JSON.stringify(newState))
      const votedName = contestants.find(c => c.slug === slug)?.name
      setMessage({ type: 'success', text: `Your vote for ${votedName} has been counted!` })
      setSharePopupContestant(votedName)
    } catch (error) {
      console.error('Error casting vote:', error)
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' })
    } finally {
      setSubmittingSlug(null)
    }
  }

  const formatHours = (ms) => {
    const hours = Math.floor(ms / (60 * 60 * 1000))
    const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000))
    if (hours > 0) return `${hours}h ${minutes}m`
    return `${minutes}m`
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="mb-2">⚠️ Voting is temporarily unavailable.</p>
        <p className="text-sm text-gray-500">Please refresh the page in a moment.</p>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-2xl mx-auto">
      {message && (
        <div
          className={`mb-6 rounded-2xl p-4 text-center font-semibold ${
            message.type === 'success'
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-purple-300">
        Week {nominationsData.week} Nominees
      </div>
      <div className="mb-6 flex items-center justify-between text-sm text-gray-400">
        <span className="flex items-center gap-1.5">
          {hasActiveCooldown && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>}
          {hasActiveCooldown ? 'Live results' : 'Tap a contestant to vote'}
        </span>
        <span>{total.toLocaleString()} total votes</span>
      </div>

      <div className="space-y-3 mb-6">
        {contestants.map((contestant) => {
          const count = votes[contestant.slug] || 0
          const percentage = total > 0 ? (count / total) * 100 : 0
          const isVotedFor = votedState?.slug === contestant.slug && hasActiveCooldown
          const isThisSubmitting = submittingSlug === contestant.slug

          return (
            <button
              key={contestant.slug}
              type="button"
              onClick={() => handleVote(contestant.slug)}
              disabled={hasActiveCooldown || !!submittingSlug}
              className={`relative flex items-center gap-4 w-full text-left rounded-2xl border overflow-hidden transition-all duration-300 ${
                isVotedFor
                  ? 'border-purple-400/60 ring-2 ring-purple-400/40'
                  : 'border-white/10 bg-white/5'
              } ${
                hasActiveCooldown || submittingSlug
                  ? 'cursor-not-allowed'
                  : 'cursor-pointer hover:bg-white/10 hover:border-purple-400/30'
              }`}
            >
              {/* Result fill bar (behind content) */}
              {showResults && (
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transition-all duration-700"
                  style={{ width: `${percentage}%` }}
                ></div>
              )}

              <div className="relative flex items-center gap-4 w-full p-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative bg-gray-800">
                  {contestant.imageUrl ? (
                    <Image
                      src={contestant.imageUrl}
                      alt={contestant.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xl">👤</div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold truncate">{contestant.name}</span>
                    {isVotedFor && <span className="text-purple-300 text-xs font-bold flex-shrink-0">✓ Your vote</span>}
                    {isThisSubmitting && <span className="text-gray-400 text-xs flex-shrink-0">Voting…</span>}
                  </div>
                  {showResults && (
                    <span className="text-gray-400 text-xs">{count.toLocaleString()} votes</span>
                  )}
                </div>

                {showResults && (
                  <span className="text-white font-bold text-lg flex-shrink-0">{percentage.toFixed(1)}%</span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {hasActiveCooldown && (
        <div className="text-center rounded-2xl p-4 bg-purple-500/10 border border-purple-500/20 text-purple-200">
          Thanks for voting! You can vote again in {formatHours(cooldownRemaining)}.
        </div>
      )}

      {sharePopupContestant && (
        <ShareVotePopup
          contestantName={sharePopupContestant}
          onClose={() => setSharePopupContestant(null)}
        />
      )}
    </div>
  )
}
