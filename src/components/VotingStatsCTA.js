export default function VotingStatsCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_70%)]"></div>

      <div className="container-custom relative z-10">
        {/* Poll Stats */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-gray-900/60 to-purple-900/40 backdrop-blur-sm rounded-3xl px-8 py-8 border border-white/10">
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

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-red-600/10 to-pink-600/10"></div>
            <div className="relative z-10">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-400/30">
                  <span className="text-5xl">🎯</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-red-200 bg-clip-text text-transparent mb-6">
                  Every BB Telugu 10 Vote Matters!
                </h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Your favorite Bigg Boss Telugu 10 contestant needs YOUR support to stay in the house.
                  Don't wait - vote for BB Telugu 10 now and make a difference in their journey!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="#vote-section"
                  className="bg-gradient-to-r from-purple-600 to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-purple-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
                >
                  🗳️ Vote BB Telugu 10 Above
                </a>
                <a
                  href="https://www.hotstar.com/in/shows/bigg-boss-telugu/vote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  📺 Official BB Telugu 10 Hotstar Vote
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
