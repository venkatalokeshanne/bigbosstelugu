'use client'

import { useState, useEffect } from 'react'
import { fetchLiveUpdates } from '../lib/sanity-client'

export default function LiveUpdates() {
  const [updates, setUpdates] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const liveUpdates = await fetchLiveUpdates()
        setUpdates(liveUpdates)
      } catch (error) {
        console.error('Error fetching live updates:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getTypeIcon = (type) => {
    switch (type) {
      case 'task': return '🎯'
      case 'drama': return '⚡'
      case 'captain': return '👑'
      case 'secret': return '🤫'
      case 'nomination': return '🗳️'
      default: return '📺'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'task': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'drama': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'captain': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'secret': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'nomination': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'breaking': return 'bg-red-500 text-white animate-pulse'
      case 'high': return 'bg-orange-500 text-white'
      case 'medium': return 'bg-blue-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return 'Just now'
    
    const now = new Date()
    const updateTime = new Date(timestamp)
    const diffInMs = now - updateTime
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    if (diffInMinutes < 60) {
      return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes} minutes ago`
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
    } else {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
    }
  }

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-block p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl">
              <div className="animate-spin w-12 h-12 border-4 border-red-400 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-white text-lg">Loading live updates...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full mb-6">
            <span className="text-red-400 font-semibold">LIVE FROM THE HOUSE</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            What's Happening in Bigg Boss Telugu 9 House Today 2025?
            <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Live Updates & Breaking News Hyderabad
            </span>
          </h2>
          <h3 className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
            BBT9 Real-time House Updates | Star MAA Live Episodes Telugu
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the game with real-time house updates, breaking news, and 
            exclusive behind-the-scenes content from the Bigg Boss Telugu 9 house.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Live Updates Card */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  House Updates
                </h3>
              </div>
              <div className="flex items-center space-x-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                <span className="text-red-400 font-semibold text-sm">LIVE FEED</span>
              </div>
            </div>

            <div className="space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar">
              {updates.map((update, index) => (
                <div key={update._id} className="group relative">
                  <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300">
                    {/* Priority Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{getTypeIcon(update.updateType)}</div>
                        <div>
                          {update.priority === 'breaking' && (
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                                BREAKING
                              </span>
                              {update.isLive && (
                                <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                                  LIVE
                                </span>
                              )}
                            </div>
                          )}
                          <h4 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">
                            {update.title}
                          </h4>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                        {update.isLive ? 'Live' : formatTimeAgo(update.timestamp)}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {update.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(update.updateType)}`}>
                        {update.updateType?.toUpperCase()}
                      </span>
                      {index < 2 && (
                        <span className="text-yellow-400 text-xs font-medium">🔥 Trending</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Connection Line */}
                  {index < updates.length - 1 && (
                    <div className="absolute left-8 bottom-0 w-0.5 h-4 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
                Load More Updates
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.8);
        }
      `}</style>
    </section>
  )
}
