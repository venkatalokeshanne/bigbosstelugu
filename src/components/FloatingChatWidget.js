'use client'

import { useState, useEffect, useRef } from 'react'
import { useLiveChat } from '../hooks/useLiveChat'

export default function FloatingChatWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [unread, setUnread] = useState(0)
  const { messages, name, setName, text, setText, loading, loadError, sending, error, sendMessage } = useLiveChat()
  const listRef = useRef(null)
  const prevCount = useRef(0)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  useEffect(() => {
    if (messages.length > prevCount.current && !isOpen) {
      setUnread((u) => u + (messages.length - prevCount.current))
    }
    prevCount.current = messages.length
  }, [messages, isOpen])

  useEffect(() => {
    if (isOpen) {
      setUnread(0)
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight
      }
    }
  }, [isOpen, messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage()
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start">
      {isOpen && (
        <div className="mb-3 w-[320px] max-w-[calc(100vw-3rem)] rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-purple-400/30 shadow-2xl shadow-purple-500/20 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-white font-semibold text-sm">Live Fan Chat</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-gray-400 hover:text-white transition-colors text-lg leading-none"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin w-8 h-8 border-4 border-purple-400 border-t-transparent rounded-full"></div>
            </div>
          ) : loadError ? (
            <div className="text-center py-10 px-4 text-gray-400 text-sm">
              ⚠️ Chat is temporarily unavailable.
            </div>
          ) : (
            <>
              <div ref={listRef} className="h-64 overflow-y-auto px-4 py-3 space-y-2.5">
                {messages.length === 0 ? (
                  <p className="text-center text-gray-500 text-xs py-8">Be the first to say something!</p>
                ) : (
                  messages.map((m) => (
                    <div key={m.id} className="text-xs">
                      <span className="font-semibold text-purple-300">{m.name}</span>
                      <span className="text-gray-300">: {m.message}</span>
                    </div>
                  ))
                )}
              </div>

              {error && (
                <div className="mx-4 mb-2 rounded-lg p-2 text-center text-xs bg-red-500/20 text-red-300 border border-red-500/30">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="px-4 pb-4 pt-1 space-y-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (optional)"
                  maxLength={40}
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type a message…"
                    maxLength={300}
                    className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
                  />
                  <button
                    type="submit"
                    disabled={sending || !text.trim()}
                    className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-3 py-1.5 text-xs disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    Send
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? 'Close live chat' : 'Open live chat'}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/30 transition-transform duration-300 hover:scale-110"
      >
        {unread > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-[11px] font-bold">
            {unread > 9 ? '9+' : unread}
          </span>
        )}
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.02 2 11c0 2.63 1.28 4.99 3.34 6.66L4 22l4.62-1.5C9.66 20.83 10.8 21 12 21c5.52 0 10-4.02 10-9s-4.48-10-10-10zm-4 9.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm4 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm4 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
          </svg>
        )}
      </button>
    </div>
  )
}
