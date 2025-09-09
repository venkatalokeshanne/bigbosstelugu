'use client'

import { useState, useEffect } from 'react'
import { getOptimizedVotingSettings, isVotingActive } from '../lib/optimized-voting'
import LazyStrawPoll from './LazyStrawPoll'

export default function VotingSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [votingSettings, setVotingSettings] = useState({
    eliminationWeek: 'Loading...',
    votingQuestion: 'Loading...',
    strawpollId: 'ajnE1Xj40nW',
    votingStatus: 'live'
  })
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
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
      
      console.log('Voting settings loaded:', settings)
    } catch (error) {
      console.error('Error loading voting settings:', error)
      // Keep default fallback settings
    }
  }, [])

  // Auto-resize iframe effect
  useEffect(() => {
    const resizeStrawPollIframe = () => {
      const iframe = document.getElementById('strawpoll_iframe_ajnE1Xj40nW');
      const container = document.getElementById('strawpoll_ajnE1Xj40nW');
      
      if (iframe && container) {
        const screenWidth = window.innerWidth;
        let targetHeight = 900; // Default for desktop
        
        // Mobile-first responsive approach
        if (screenWidth < 640) {
          targetHeight = 1100; // Mobile - extra height for better display
          iframe.style.minHeight = '900px';
          // Ensure container takes full width on mobile
          container.style.padding = '0 16px';
          container.style.margin = '0';
        } else if (screenWidth < 768) {
          targetHeight = 1000; // Small tablet
          iframe.style.minHeight = '800px';
          container.style.padding = '0 24px';
        } else if (screenWidth < 1024) {
          targetHeight = 950; // Large tablet
          iframe.style.minHeight = '750px';
          container.style.padding = '0 32px';
        } else {
          targetHeight = 900; // Desktop
          iframe.style.minHeight = '700px';
          container.style.padding = '0 32px';
        }
        
        iframe.style.height = `${targetHeight}px`;
        iframe.style.width = '100%';
        
        // Optimize for mobile viewport
        if (screenWidth < 640) {
          // Ensure no horizontal scrolling on mobile
          iframe.style.maxWidth = '100%';
          iframe.style.overflowX = 'hidden';
        }
        
        // Try to get actual content height if possible
        try {
          if (iframe.contentWindow) {
            setTimeout(() => {
              try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                if (iframeDoc && iframeDoc.body) {
                  const contentHeight = Math.max(
                    iframeDoc.body.scrollHeight,
                    iframeDoc.body.offsetHeight,
                    iframeDoc.documentElement.clientHeight,
                    iframeDoc.documentElement.scrollHeight,
                    iframeDoc.documentElement.offsetHeight
                  );
                  
                  if (contentHeight > 400 && contentHeight < 2500) {
                    const extraSpace = screenWidth < 640 ? 200 : 100;
                    iframe.style.height = (contentHeight + extraSpace) + 'px';
                  }
                }
              } catch (e) {
                // CORS restriction - keep the responsive height
                console.log('Using responsive fallback height');
              }
            }, 2000);
          }
        } catch (error) {
          console.log('Iframe resize fallback applied');
        }
      }
    };

    // Resize on window resize with debouncing
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeStrawPollIframe, 250);
    };
    
    window.addEventListener('resize', debouncedResize);
    window.addEventListener('orientationchange', debouncedResize);
    
    // Initial resize after component mount
    setTimeout(resizeStrawPollIframe, 1000);
    setTimeout(resizeStrawPollIframe, 3000);
    setTimeout(resizeStrawPollIframe, 5000);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('orientationchange', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
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
            Vote Bigg Boss Telugu 9 Online Free 2025
          </h2>
          <h3 className="text-lg md:text-xl text-purple-300 font-medium mb-4">
            BBT9 Voting Guide Hyderabad | Star MAA Disney+ Hotstar
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your vote decides the fate of your favorite contestant! Join millions in shaping 
            <span className="text-purple-400 font-medium"> Bigg Boss Telugu 9</span> destiny.
          </p>
        </div>

        {/* Main Voting Card - Performance Optimized */}
        <div className="max-w-6xl mx-auto mb-20">
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
            <div className="bg-gray-900/60 relative">
              
              {/* StrawPoll Embed - Lazy Loaded and Optimized */}
              <LazyStrawPoll 
                pollId="ajnE1Xj40nW" 
                className="px-4 sm:px-6 md:px-8"
              />
            </div>

            {/* Poll Stats - Redesigned */}
            <div className="bg-gradient-to-r from-gray-900/60 to-purple-900/40 backdrop-blur-sm px-8 py-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    1.2M+
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Total Votes</div>
                  <div className="mt-2 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    LIVE
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Poll Status</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    1 week
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Time Left</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    FREE
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Unlimited</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Call to Action - Enhanced */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-red-600/10 to-pink-600/10"></div>
            <div className="relative z-10">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-400/30">
                  <span className="text-5xl">🎯</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-red-200 bg-clip-text text-transparent mb-6">
                  Every Vote Matters!
                </h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Your favorite contestant needs YOUR support to stay in the house. 
                  Don't wait - vote now and make a difference in their journey!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="#strawpoll_ajnE1Xj40nW" 
                  className="bg-gradient-to-r from-purple-600 to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-purple-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
                >
                  🗳️ Vote in Poll Above
                </a>
                <a
                  href="https://www.hotstar.com/in/shows/bigg-boss-telugu/vote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  📺 Official Hotstar Vote
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Free Voting</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
