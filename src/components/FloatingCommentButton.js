'use client'

import { useState, useEffect } from 'react'

function formatCount(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}K`
  return String(n)
}

export default function FloatingCommentButton() {
  const [count, setCount] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    fetch('/api/comments')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.comments) setCount(data.comments.length)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible || count === null) return null

  const handleClick = () => {
    const section = document.getElementById('comments-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.href = '/voting#comments-section'
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label={`View ${count} comments`}
      className="fixed bottom-6 left-6 z-40 flex flex-col items-center group"
    >
      <span className="mb-1 text-sm font-bold text-teal-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
        {formatCount(count)}
      </span>
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 shadow-2xl shadow-teal-500/30 transition-transform duration-300 group-hover:scale-110">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
        </svg>
      </span>
    </button>
  )
}
