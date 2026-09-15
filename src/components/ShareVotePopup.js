'use client'

import { useState } from 'react'

export default function ShareVotePopup({ contestantName, onClose }) {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/voting`
    : 'https://www.bigbossteluguvotes.in/voting'

  const shareText = contestantName
    ? `I just voted for ${contestantName} on Bigg Boss Telugu 10! Cast your vote too:`
    : `I just voted on Bigg Boss Telugu 10! Cast your vote too:`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard API unavailable — ignore, the link is still visible to copy manually
    }
  }

  const handleComment = () => {
    onClose()
    const section = document.getElementById('comments-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.href = '/voting#comments-section'
    }
  }

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm px-4 pb-4 sm:pb-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-purple-400/30 shadow-2xl shadow-purple-500/20 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        <div className="text-center mb-5">
          <div className="text-3xl mb-2">🎉</div>
          <h3 className="text-lg font-bold text-white mb-1">Thanks for voting!</h3>
          <p className="text-sm text-gray-400">
            Every vote counts — share with friends so {contestantName || 'your favorite'} gets more support.
          </p>
          <p className="text-xs text-purple-300 font-semibold mt-2">
            ⏰ You can vote again in 1 hour — come back and vote once every hour!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-green-500/15 border border-green-500/30 text-green-300 font-semibold py-2.5 text-sm hover:bg-green-500/25 transition-colors"
          >
            💬 WhatsApp
          </a>
          <a
            href={twitterHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-300 font-semibold py-2.5 text-sm hover:bg-sky-500/25 transition-colors"
          >
            🐦 Twitter
          </a>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white font-semibold py-2.5 text-sm hover:bg-white/15 transition-colors mb-4"
        >
          {copied ? '✓ Link copied!' : '🔗 Copy voting link'}
        </button>

        <button
          type="button"
          onClick={handleComment}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 text-sm hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          💭 Tell us why in the comments
        </button>
      </div>
    </div>
  )
}
