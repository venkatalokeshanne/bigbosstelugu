'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import contestantsData from '../data/contestants.json'

const VOTE_COOLDOWN_MS = 24 * 60 * 60 * 1000
const LOCAL_KEY = 'bb10_vote_state'

export default function ContestantVoting() {
  const contestants = useMemo(
    () => contestantsData.contestants.filter(c => c.status === 'active'),
    []
  )

  const [votes, setVotes] = useState({})
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [submittingSlug, setSubmittingSlug] = useState(null)
  const [message, setMessage] = useState(null)
  const [votedState, setVotedState] = useState(null) // { slug, votedAt }

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY)
      if (raw) setVotedState(JSON.parse(raw))
    } catch {
      // ignore malformed local storage
    }

    fetchVotes()
  }, [])

  const fetchVotes = async () => {
    try {
      const res = await fetch('/api/votes')
      const data = await res.json()
      setVotes(data.votes || {})
      setTotal(data.total || 0)
    } catch (error) {
      console.error('Error loading votes:', error)
    } finally {
      setLoading(false)
    }
  }

  const cooldownRemaining = votedState
    ? Math.max(0, VOTE_COOLDOWN_MS - (Date.now() - votedState.votedAt))
    : 0
  const hasActiveCooldown = cooldownRemaining > 0

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
        setMessage({ type: 'error', text: data.message || 'You have already voted today. Come back tomorrow!' })
        return
      }

      setVotes(data.votes)
      setTotal(data.total)
      const newState = { slug, votedAt: Date.now() }
      setVotedState(newState)
      localStorage.setItem(LOCAL_KEY, JSON.stringify(newState))
      setMessage({ type: 'success', text: `Your vote for ${contestants.find(c => c.slug === slug)?.name} has been counted!` })
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

  return (
    <div className="px-4 sm:px-6 md:px-8">
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

      {hasActiveCooldown && (
        <div className="mb-6 rounded-2xl p-4 text-center bg-purple-500/10 border border-purple-500/20 text-purple-200">
          You voted for{' '}
          <span className="font-bold">{contestants.find(c => c.slug === votedState.slug)?.name}</span>. You can
          vote again in {formatHours(cooldownRemaining)}.
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {contestants.map((contestant) => {
          const count = votes[contestant.slug] || 0
          const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : '0.0'
          const isThisSubmitting = submittingSlug === contestant.slug
          const isVotedFor = votedState?.slug === contestant.slug && hasActiveCooldown

          return (
            <div
              key={contestant.slug}
              className={`bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                isVotedFor ? 'border-purple-400/60 ring-2 ring-purple-400/40' : 'border-white/10'
              }`}
            >
              <div className="aspect-square relative">
                {contestant.imageUrl ? (
                  <Image
                    src={contestant.imageUrl}
                    alt={contestant.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-4xl">👤</div>
                )}
              </div>
              <div className="p-3">
                <h4 className="text-white font-bold text-sm truncate mb-1">{contestant.name}</h4>

                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span>{percentage}%</span>
                  <span>{count.toLocaleString()} votes</span>
                </div>

                <button
                  onClick={() => handleVote(contestant.slug)}
                  disabled={hasActiveCooldown || !!submittingSlug}
                  className={`w-full py-2 rounded-xl font-bold text-xs transition-all duration-300 ${
                    isVotedFor
                      ? 'bg-purple-500/30 text-purple-200 cursor-default'
                      : hasActiveCooldown || submittingSlug
                      ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-red-600 text-white hover:from-purple-700 hover:to-red-700'
                  }`}
                >
                  {isThisSubmitting ? 'Voting…' : isVotedFor ? '✓ Voted' : 'Vote'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
