'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyVoteButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <>
      {/* Modern Floating Vote Button - Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <div className="relative">
          {isExpanded && (
            <div className="absolute bottom-20 right-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 w-72 transform transition-all duration-300 animate-fade-in">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2 animate-bounce">🗳️</div>
                <h2 className="font-bold text-gray-900 text-lg mb-1">Quick Vote</h2>
                <p className="text-sm text-gray-600">Choose your voting method</p>
              </div>
              
              <div className="space-y-3">
                <Link
                  href="/#vote-section"
                  className="group block text-center bg-gradient-to-r from-purple-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-red-600 transition-all duration-300 transform hover:scale-[1.02]"
                  onClick={() => setIsExpanded(false)}
                >
                  <span className="flex items-center justify-center gap-2">
                    🗳️ Vote on Site
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="https://www.hotstar.com/in/shows/bigg-boss-telugu/vote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02]"
                  onClick={() => setIsExpanded(false)}
                >
                  <span className="flex items-center justify-center gap-2">
                    📺 Disney+ Hotstar
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </Link>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-600 font-medium">
                    💬 SMS: <span className="font-mono bg-white px-2 py-1 rounded text-purple-600">BB [Name] to 58888</span>
                  </p>
                </div>
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative bg-gradient-to-r from-purple-600 via-red-600 to-pink-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 flex items-center justify-center transform hover:scale-110 animate-pulse"
            aria-label="Vote Now"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-red-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            <span className="relative text-2xl transform group-hover:scale-110 transition-transform duration-300">
              {isExpanded ? '✕' : '🗳️'}
            </span>
          </button>
        </div>
      </div>

      {/* Modern Floating Vote Panel - Desktop */}
      <div className="hidden md:block fixed right-4 bottom-8 z-40">
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-4 w-52 hover:shadow-purple-500/10 transition-all duration-500">
          <div className="text-center mb-4">
            <div className="text-3xl mb-2 animate-bounce">🗳️</div>
            <h2 className="font-bold text-white text-lg mb-1">Quick Vote</h2>
            <p className="text-gray-300 text-xs">Support your favorite</p>
          </div>
          
          <div className="space-y-3">
            <Link
              href="/#vote-section"
              className="group block text-center bg-gradient-to-r from-purple-500 to-red-500 text-white px-3 py-2.5 rounded-xl font-semibold text-xs shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-red-600 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center gap-2">
                🗳️ Vote on Site
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </span>
            </Link>
            <Link
              href="https://www.hotstar.com/in/shows/bigg-boss-telugu/vote"
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2.5 rounded-xl font-semibold text-xs shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center gap-2">
                📺 Hotstar
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </Link>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center border border-white/20">
              <p className="text-xs text-gray-300 font-medium">
                💬 SMS: <span className="font-mono bg-purple-600/20 px-1 py-0.5 rounded text-purple-200 text-xs">BB [Name] to 58888</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
