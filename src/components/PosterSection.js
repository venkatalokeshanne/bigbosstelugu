'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/sanity-client'

export default function PosterSection({ title = "Latest Posters", className = "" }) {
  const [posters, setPosters] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    fetchPosters()
  }, [])

  const fetchPosters = async () => {
    try {
      const response = await fetch('/api/posters')
      if (response.ok) {
        const data = await response.json()
        console.log('PosterSection - Fetched posters:', data.posters?.length || 0)
        console.log('PosterSection - Poster details:', data.posters?.map(p => ({ key: p._key, hasUrl: !!p.imageUrl, hasAsset: !!p.asset?.url })))
        setPosters(data.posters || [])
      }
    } catch (error) {
      console.error('Error fetching posters:', error)
      // Fallback data for testing
      setPosters([
        {
          _id: '1',
          asset: { url: '/placeholder-poster.jpg' }
        },
        {
          _id: '2',
          asset: { url: '/placeholder-poster.jpg' }
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const posterWidth = container.children[0]?.offsetWidth || 320
      const gap = 24 // 6 in Tailwind = 24px
      const scrollPosition = index * (posterWidth + gap)
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  const nextPoster = () => {
    const nextIndex = (currentIndex + 1) % posters.length
    scrollToIndex(nextIndex)
  }

  const prevPoster = () => {
    const prevIndex = (currentIndex - 1 + posters.length) % posters.length
    scrollToIndex(prevIndex)
  }

  // Auto-scroll effect
  useEffect(() => {
    if (posters.length > 1) {
      const interval = setInterval(nextPoster, 5000) // Auto-scroll every 5 seconds
      return () => clearInterval(interval)
    }
  }, [posters.length, currentIndex])

  if (loading) {
    return (
      <section className={`py-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 ${className}`}>
        <div className="container-custom">
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>
        </div>
      </section>
    )
  }

  if (!posters.length) {
    return (
      <section className={`py-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 ${className}`}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-gray-400">No posters available at the moment.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 ${className}`}>
      <div className="container-custom">

        <div className="relative">
          {/* Navigation Buttons */}
          {posters.length > 1 && (
            <>
              <button
                onClick={prevPoster}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous poster"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextPoster}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Next poster"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Poster Container - Optimized for 1080x1350 and 720x1280 images */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {console.log('PosterSection - Rendering posters count:', posters.length)}
            {posters.map((poster, index) => {
              console.log(`PosterSection - Rendering poster ${index + 1}:`, { key: poster._key, hasUrl: !!poster.imageUrl, hasAsset: !!poster.asset?.url })
              return (
              <div
                key={poster._key || poster._id || index}
                className="flex-shrink-0 group cursor-pointer w-[280px] sm:w-[300px] md:w-[320px]"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/30 transition-all duration-500 group-hover:scale-105">
                  <div className="relative" style={{ aspectRatio: '0.8' }}>
                    {poster.asset?.url ? (
                      <Image
                        src={urlFor(poster).width(640).height(800).fit('fill').url()}
                        alt={`Poster ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 320px"
                        priority={index < 2}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-gray-400 text-sm mb-1">Upload poster image</p>
                          <p className="text-gray-500 text-xs">1080×1350 or 720×1280</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              )}
            )}
          </div>

          {/* Dots Indicator */}
          {posters.length > 1 && (
            <div className="flex justify-center mt-8 space-x-3">
              {posters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-purple-500 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to poster ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Optimize for specific image dimensions 1080x1350 and 720x1280 */
        @media (max-width: 640px) {
          .poster-container {
            width: 280px;
            height: 350px;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .poster-container {
            width: 300px;
            height: 375px;
          }
        }
        @media (min-width: 769px) {
          .poster-container {
            width: 320px;
            height: 400px;
          }
        }
      `}</style>
    </section>
  )
}
