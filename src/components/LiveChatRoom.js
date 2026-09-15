'use client'

import { useEffect, useRef } from 'react'
import { useLiveChat } from '../hooks/useLiveChat'

export default function LiveChatRoom() {
  const { messages, name, setName, text, setText, loading, loadError, sending, error, sendMessage } = useLiveChat()
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="animate-spin w-10 h-10 border-4 border-purple-400 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="mb-2">⚠️ Live chat is temporarily unavailable.</p>
        <p className="text-sm text-gray-500">Please refresh the page in a moment.</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        Live now — messages appear instantly
      </div>

      <div
        ref={listRef}
        className="h-80 overflow-y-auto rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3 mb-4"
      >
        {messages.length === 0 ? (
          <p className="text-center text-gray-500 text-sm py-8">Be the first to say something!</p>
        ) : (
          messages.map((m) => (
            <div key={m.id} className="text-sm">
              <span className="font-semibold text-purple-300">{m.name}</span>
              <span className="text-gray-300">: {m.message}</span>
            </div>
          ))
        )}
      </div>

      {error && (
        <div className="mb-4 rounded-xl p-3 text-center text-sm bg-red-500/20 text-red-300 border border-red-500/30">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (optional)"
          maxLength={40}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
        />
        <div className="flex gap-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message…"
            maxLength={300}
            className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
          />
          <button
            type="submit"
            disabled={sending || !text.trim()}
            className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-5 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
