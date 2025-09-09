'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getOptimizedActiveContestants } from '../lib/optimized-contestants'

export default function Hero() {
  const [contestants, setContestants] = useState([])
  const [featuredContestant, setFeaturedContestant] = useState(null)
  const [loading, setLoading] = useState(true)

  // Function to scroll to voting section
  const scrollToVoting = () => {
    const votingSection = document.querySelector('#vote-section')
    if (votingSection) {
      votingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    } else {
      // Fallback: scroll to approximate position if ID not found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOptimizedActiveContestants()
        setContestants(data)
        if (data.length > 0) {
          // Set the first contestant as featured initially
          setFeaturedContestant(data[0])
        }
      } catch (error) {
        console.error('Error fetching contestants:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Auto-rotate through ALL contestants every 3 seconds
  useEffect(() => {
    if (contestants.length > 0) {
      const interval = setInterval(() => {
        setFeaturedContestant(prev => {
          const currentIndex = contestants.findIndex(c => c._id === prev?._id)
          const nextIndex = (currentIndex + 1) % contestants.length
          return contestants[nextIndex]
        })
      }, 3000) // Changed to 3 seconds for faster rotation through all contestants

      return () => clearInterval(interval)
    }
  }, [contestants])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Simplified Background - Performance Optimized */}
      <div className="absolute inset-0 opacity-10">
        {contestants.slice(0, 4).map((contestant, index) => (
          <div
            key={contestant._id}
            className={`absolute w-24 h-24 rounded-full overflow-hidden`}
            style={{
              left: `${20 + (index % 2) * 60}%`,
              top: `${25 + Math.floor(index / 2) * 50}%`,
            }}
          >
            {contestant.imageUrl && (
              <Image
                src={contestant.imageUrl}
                alt={contestant.name}
                width={96}
                height={96}
                className="object-cover w-full h-full filter grayscale"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      {/* Simplified Background Elements - Performance Optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400/10 rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-16 h-16 bg-pink-400/10 rounded-full"></div>
        
        {/* Static Voting Icons */}
        <div className="absolute top-1/4 left-1/4 text-3xl opacity-20">🗳️</div>
        <div className="absolute bottom-1/4 right-1/4 text-2xl opacity-15">⭐</div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-8 pb-20">
          
          {/* Left Side - Main Content */}
          <div className="text-center lg:text-left">
            {/* Season Badge */}
            <div className="inline-flex items-center gap-3 bg-red-500/20 border border-white/10 rounded-full px-6 py-3 mb-8">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-lg">SEASON 9 • 2025</span>
            </div>

            {/* Main Heading - SEO Optimized H1 - Performance Enhanced */}
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-6 leading-tight">
              <span className="text-blue-400 block">
                BIGG BOSS TELUGU 9
              </span>
              <span className="text-orange-400 block">
                VOTING ONLINE 2025
              </span>
              <span className="text-white text-xs md:text-sm xl:text-base font-light block mt-2">
                Vote Your Favorite BBT9 Contestant Free
              </span>
            </h1>

            {/* Dynamic Tagline */}
            <div className="mb-8">
              {featuredContestant && (
                <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in">
                  Currently featuring <span className="text-purple-400 font-bold">{featuredContestant.name}</span>
                </p>
              )}
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Your vote decides the fate of your favorite contestants. Join millions in the ultimate reality show battle!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <Link 
                href="#vote-section" 
                className="group relative px-8 py-6 bg-gradient-to-r from-purple-600 via-red-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-500 overflow-hidden whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-red-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  🗳️ Vote Now • FREE
                  <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="#contestants" 
                className="px-8 py-6 bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-500 flex items-center justify-center whitespace-nowrap"
              >
                👥 Meet All {contestants.length} Contestants
              </Link>
            </div>

            {/* Live Stats - Hidden on mobile, shown on medium screens and up */}
            <div className="hidden md:grid md:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-1">
                  {contestants.length}
                </div>
                <div className="text-gray-300 text-sm font-medium">Active</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                  2.5M+
                </div>
                <div className="text-gray-300 text-sm font-medium">Votes</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-1 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  LIVE
                </div>
                <div className="text-gray-300 text-sm font-medium">Status</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  FREE
                </div>
                <div className="text-gray-300 text-sm font-medium">Voting</div>
              </div>
            </div>
          </div>

          {/* Right Side - Featured Contestant Showcase */}
          <div className="relative lg:block">
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <div className="w-32 h-32 border-4 border-purple-300/30 rounded-full animate-spin border-t-purple-500"></div>
              </div>
            ) : featuredContestant ? (
              <div className="relative">
                {/* Main Featured Card */}
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-purple-500/10">
                  {/* Featured Badge */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-purple-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                    ⭐ FEATURED NOW
                  </div>
                  
                  {/* Contestant Image */}
                  <div className="relative mb-6">
                    <div className="w-64 h-64 mx-auto relative overflow-hidden rounded-2xl shadow-2xl shadow-purple-500/20">
                      {featuredContestant.imageUrl && (
                        <Image
                          src={featuredContestant.imageUrl}
                          alt={featuredContestant.name}
                          width={256}
                          height={256}
                          className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Floating Vote Count */}
                  </div>

                  {/* Contestant Info */}
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">{featuredContestant.name}</h2>
                    <p className="text-purple-300 text-lg mb-3">{featuredContestant.profession}</p>
                    <p className="text-gray-300 text-sm mb-4">From {featuredContestant.hometown}</p>
                    
                    {/* Biography Preview */}
                    {featuredContestant.biography && (
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {featuredContestant.biography}
                      </p>
                    )}

                    {/* Vote Button for Featured */}
                    <button 
                      onClick={scrollToVoting}
                      className="w-full bg-gradient-to-r from-purple-500 to-red-500 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-purple-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-300/50"
                    >
                      Vote for {featuredContestant.name.split(' ')[0]} 🗳️
                    </button>
                  </div>
                </div>

                {/* All Contestant Thumbnails - Left Side */}
                <div className="absolute -left-12 md:-left-12 lg:-left-12 -left-2 inset-y-0 flex flex-col justify-evenly items-center py-20">
                  {contestants
                    .filter(contestant => contestant._id !== featuredContestant._id)
                    .slice(0, Math.ceil((contestants.length - 1) / 2))
                    .map((contestant, index) => (
                    <div
                      key={contestant._id}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/20 hover:border-purple-400/50 cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25"
                      onClick={() => setFeaturedContestant(contestant)}
                      title={contestant.name}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {contestant.imageUrl && (
                        <Image
                          src={contestant.imageUrl}
                          alt={contestant.name}
                          width={56}
                          height={56}
                          className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* All Contestant Thumbnails - Right Side */}
                <div className="absolute -right-12 md:-right-12 lg:-right-12 -right-2 inset-y-0 flex flex-col justify-evenly items-center py-20">
                  {contestants
                    .filter(contestant => contestant._id !== featuredContestant._id)
                    .slice(Math.ceil((contestants.length - 1) / 2))
                    .map((contestant, index) => (
                    <div
                      key={contestant._id}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/20 hover:border-purple-400/50 cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25"
                      onClick={() => setFeaturedContestant(contestant)}
                      title={contestant.name}
                      style={{ animationDelay: `${(index + Math.ceil((contestants.length - 1) / 2)) * 0.2}s` }}
                    >
                      {contestant.imageUrl && (
                        <Image
                          src={contestant.imageUrl}
                          alt={contestant.name}
                          width={56}
                          height={56}
                          className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center text-white text-xl">No contestants available</div>
            )}
          </div>
        </div>

        {/* Live Stats - Mobile only, positioned after Contestant Showcase */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8 px-4">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-1">
              {contestants.length}
            </div>
            <div className="text-gray-300 text-sm font-medium">Active</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
              2.5M+
            </div>
            <div className="text-gray-300 text-sm font-medium">Votes</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl font-black bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-1 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              LIVE
            </div>
            <div className="text-gray-300 text-sm font-medium">Status</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
              FREE
            </div>
            <div className="text-gray-300 text-sm font-medium">Voting</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors cursor-pointer">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-red-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/50 text-xs mt-2 font-medium">Scroll Down</p>
      </div>
    </section>
  )
}
