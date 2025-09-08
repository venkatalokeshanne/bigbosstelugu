'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  getOptimizedActiveContestants, 
  getOptimizedEliminatedContestants 
} from '../lib/optimized-contestants'

export default function ContestantGrid() {
  const [activeContestants, setActiveContestants] = useState([])
  const [eliminatedContestants, setEliminatedContestants] = useState([])
  const [loading, setLoading] = useState(true)
  const allbbContestants = [...activeContestants, ...eliminatedContestants]
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use optimized functions that return pre-shuffled data
        const [active, eliminated] = await Promise.all([
          getOptimizedActiveContestants(),
          getOptimizedEliminatedContestants()
        ])
        
        setActiveContestants(active)
        setEliminatedContestants(eliminated)
      } catch (error) {
        console.error('Error fetching contestants:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-block p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl">
              <div className="animate-spin w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-white text-lg">Loading contestants...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-400 font-semibold">SEASON 9 CONTESTANTS</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Who Are Bigg Boss Telugu 9 Contestants 2025?
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Complete Profiles & Background Details Hyderabad
            </span>
          </h2>
          <h3 className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
            BBT9 Cast Members | Star MAA Reality Show Participants Telugu
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {allbbContestants.length} brave contestants entered the house with dreams of glory. Get to know them, 
            follow their journey, and vote for your favorites.
          </p>
        </div>

        {/* Active Contestants Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16">
          {activeContestants.map((contestant, index) => (
            <Link 
              key={contestant._id}
              href={`/contestants/${contestant.slug || contestant.name?.toLowerCase().replace(/\s+/g, '-') || contestant._id}`}
              className="group"
            >
              <div className="relative">
                {/* Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                  {/* Image Container */}
                  <div className="aspect-square relative overflow-hidden">
                    {contestant.imageUrl ? (
                      <Image
                        src={contestant.imageUrl}
                        alt={`${contestant.name} - Bigg Boss Telugu 9 Contestant`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <span className="text-6xl">👤</span>
                      </div>
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center space-x-1 bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white text-xs font-semibold">ACTIVE</span>
                      </div>
                    </div>
                

                    {/* Hover Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-center">
                        <p className="text-white/90 text-sm font-medium mb-1">{contestant.profession}</p>
                        {contestant.hometown && (
                          <p className="text-white/70 text-xs">{contestant.hometown}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-white mb-2 truncate">
                      {contestant.name}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">
                        {contestant.age ? `${contestant.age} years` : 'Age N/A'}
                      </span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-gray-300 font-medium">
                          {contestant.profession ? contestant.profession.slice(0, 12) + (contestant.profession.length > 12 ? '...' : '') : 'Contestant'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Eliminated Contestants Section */}
        {eliminatedContestants.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Eliminated Contestants
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                These contestants have left the house but their journey continues in our hearts
              </p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {eliminatedContestants.map((contestant) => (
                <Link 
                  key={contestant._id}
                  href={`/contestants/${contestant.slug || contestant.name?.toLowerCase().replace(/\s+/g, '-') || contestant._id}`}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 opacity-70 hover:opacity-100">
                    <div className="aspect-square relative overflow-hidden">
                      {contestant.profileImage ? (
                        <Image
                          src={urlFor(contestant.profileImage).width(200).height(200).url()}
                          alt={`${contestant.name} - Eliminated`}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 16vw, 12vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center grayscale">
                          <span className="text-4xl">👤</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/50"></div>
                      
                      {/* Eliminated Badge */}
                      <div className="absolute top-2 left-2">
                        <div className="bg-red-500/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <span className="text-white text-xs font-semibold">OUT</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3">
                      <h4 className="font-medium text-white text-sm truncate mb-1">
                        {contestant.name}
                      </h4>
                      <p className="text-red-400 text-xs">Eliminated</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to know more about the contestants?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Dive deeper into their stories, backgrounds, and journey in the Bigg Boss house
            </p>
            <Link 
              href="/contestants" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              View All Profiles
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
