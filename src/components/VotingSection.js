'use client'

import { useState, useEffect } from 'react'
import { getOptimizedVotingSettings, isVotingActive } from '../lib/optimized-voting'
import ContestantVoting from './ContestantVoting'

export default function VotingSection() {
  const [votingSettings, setVotingSettings] = useState({
    eliminationWeek: 'Loading...',
    votingQuestion: 'Loading...',
    strawpollId: 'ajnE1Xj40nW',
    votingStatus: 'live'
  })

  // Load voting settings on component mount
  useEffect(() => {
    try {
      const settings = getOptimizedVotingSettings()
      const active = isVotingActive()

      setVotingSettings({
        ...settings,
        isActive: active
      })
    } catch (error) {
      console.error('Error loading voting settings:', error)
      // Keep default fallback settings
    }
  }, [])

  return (
    <section id="vote-section" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_70%)]"></div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header - LCP Optimized */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-red-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-semibold">LIVE VOTING NOW OPEN</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vote Bigg Boss Telugu 10 Online Free 2026
          </h2>
          <h3 className="text-lg md:text-xl text-purple-300 font-medium mb-4">
            BB Telugu 10 Voting Guide Hyderabad | Star MAA Disney+ Hotstar
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your vote decides the fate of your favorite BB Telugu 10 contestant! Join millions in shaping
            <span className="text-purple-400 font-medium"> Bigg Boss Telugu 10</span> destiny.
          </p>
        </div>

        {/* Main Voting Card - Performance Optimized */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/70 rounded-3xl overflow-hidden border border-gray-700/50 shadow-xl">
            {/* Card Header - Simplified */}
            <div className="relative bg-purple-600/90 px-8 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between text-white">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold uppercase tracking-wider">{votingSettings.eliminationWeek}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                    🗳️ Live Voting Poll
                  </h3>
                  <p className="text-purple-100 text-lg">{votingSettings.votingQuestion}</p>
                </div>

                {/* Countdown Timer */}
                <div className="bg-black/40 rounded-2xl p-6 border border-white/20">
                  <div className="text-center">
                    <div className="text-sm text-purple-200 mb-2 uppercase tracking-wider">Vote Now</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Poll Container - Optimized */}
            <div className="bg-gray-900/60 relative py-8">
              {/* Native Contestant Voting Widget */}
              <ContestantVoting />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
