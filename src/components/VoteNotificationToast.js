'use client'

import { useEffect, useRef, useState } from 'react'
import contestantsData from '../data/contestants.json'
import nominationsData from '../data/nominations.json'

const POLL_MS = 8 * 1000
const VISIBLE_MS = 4 * 1000

const MESSAGE_TEMPLATES = [
  (name) => `${name} just got a new vote!`,
  (name) => `Someone voted for ${name} 🔥`,
  (name) => `${name}'s vote count just went up!`,
  (name) => `A fan just backed ${name} 🗳️`,
]

const NAMES_BY_SLUG = Object.fromEntries(
  contestantsData.contestants.map((c) => [c.slug, c.name])
)

export default function VoteNotificationToast() {
  const [toast, setToast] = useState(null)
  const previousVotes = useRef(null)
  const queue = useRef([])
  const dismissTimer = useRef(null)

  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch('/api/votes')
        if (!res.ok) return
        const data = await res.json()
        const votes = data.votes || {}

        if (previousVotes.current) {
          nominationsData.nominees.forEach((slug) => {
            const before = previousVotes.current[slug] || 0
            const after = votes[slug] || 0
            if (after > before) {
              const name = NAMES_BY_SLUG[slug] || 'A contestant'
              const template = MESSAGE_TEMPLATES[Math.floor(Math.random() * MESSAGE_TEMPLATES.length)]
              queue.current.push(template(name))
            }
          })
        }

        previousVotes.current = votes
        showNextIfIdle()
      } catch {
        // ignore — this is a non-critical UI flourish
      }
    }

    const showNextIfIdle = () => {
      if (dismissTimer.current || queue.current.length === 0) return
      const next = queue.current.shift()
      setToast(next)
      dismissTimer.current = setTimeout(() => {
        setToast(null)
        dismissTimer.current = null
        showNextIfIdle()
      }, VISIBLE_MS)
    }

    poll()
    const interval = setInterval(poll, POLL_MS)
    return () => {
      clearInterval(interval)
      if (dismissTimer.current) clearTimeout(dismissTimer.current)
    }
  }, [])

  if (!toast) return null

  return (
    <div className="fixed bottom-24 left-6 z-40 max-w-[calc(100vw-3rem)] animate-[fadeInUp_0.3s_ease-out]">
      <div className="flex items-center gap-2.5 rounded-full bg-gray-900/95 border border-purple-400/30 shadow-2xl shadow-purple-500/20 px-4 py-2.5 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></span>
        <span className="text-sm text-white font-medium truncate">{toast}</span>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
