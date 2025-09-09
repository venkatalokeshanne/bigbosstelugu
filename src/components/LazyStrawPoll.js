'use client'

import { useState, useRef, useEffect } from 'react'
import FallbackVoting from './FallbackVoting'

export default function LazyStrawPoll({ pollId, className = '' }) {
  const [isVisible, setIsVisible] = useState(false)
  const [showFallback, setShowFallback] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`w-full relative ${className}`}
      id={`strawpoll_${pollId}`}
    >
      {isVisible ? (
        <>
          {showFallback ? (
            <div className={className}>
              <FallbackVoting />
              <div className="mt-4 text-center">
                <button 
                  onClick={() => setShowFallback(false)}
                  className="text-blue-400 hover:text-blue-300 text-sm underline"
                >
                  Show external poll instead
                </button>
              </div>
            </div>
          ) : (
            <>
              <iframe 
                title={`StrawPoll Embed - ${pollId}`}
                id={`strawpoll_iframe_${pollId}`}
                src={`https://strawpoll.com/embed/${pollId}`}
                className="w-full border-none block"
                style={{
                  height: '600px',
                  minHeight: '500px',
                  maxHeight: 'none'
                }}
                frameBorder="0"
                allowFullScreen
                allow="web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
                loading="lazy"
              />
            </>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-96 bg-gray-800 rounded-lg">
          <div className="text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-gray-400">Scroll down to load the voting poll</p>
          </div>
        </div>
      )}
    </div>
  )
}
