import Link from 'next/link'
import Image from 'next/image'
import { 
  getOptimizedActiveContestants, 
  getOptimizedEliminatedContestants,
  getContestantStats 
} from '../../lib/optimized-contestants'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Contestants | Meet All Participants 2025',
  description: 'Meet all Bigg Boss Telugu Season 9 contestants. View profiles, vote for your favorites, and get latest updates on all participants from the house.',
  keywords: 'Bigg Boss Telugu 9 contestants, BB Telugu 9 participants, contestant profiles, voting, Telugu reality show',
  openGraph: {
    title: 'All Bigg Boss Telugu 9 Contestants - Profiles & Voting',
    description: 'Discover all contestants of Bigg Boss Telugu 9. Vote for your favorites and follow their journey.',
    images: ['/images/contestants/group-photo.jpg'],
  }
}

export default async function ContestantsPage() {
  // Use optimized functions that return pre-shuffled data
  const [activeContestants, eliminatedContestants, stats] = await Promise.all([
    getOptimizedActiveContestants(),
    getOptimizedEliminatedContestants(),
    getContestantStats()
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/30 to-black py-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6">
              <span className="text-purple-400 font-semibold">SEASON 9 • ALL CONTESTANTS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Meet the
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                CONTESTANTS
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              15 brave souls entered the Bigg Boss Telugu 9 house with dreams of glory. 
              Get to know them, follow their incredible journey, and vote for your favorites to keep them in the game.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                  {activeContestants.length}
                </div>
                <div className="text-gray-300 text-sm">Active</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-black bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  {eliminatedContestants.length}
                </div>
                <div className="text-gray-300 text-sm">Eliminated</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  FREE
                </div>
                <div className="text-gray-300 text-sm">Voting</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-1 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  LIVE
                </div>
                <div className="text-gray-300 text-sm">Show</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Contestants */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              🏠 Active Contestants
            </h2>
            <p className="text-gray-400 text-lg">
              These brave warriors are still fighting for the ultimate title
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
            {activeContestants.map((contestant, index) => (
              <Link
                key={contestant._id}
                href={`/contestants/${contestant.slug || contestant.name?.toLowerCase().replace(/\s+/g, '-') || contestant._id}`}
                className="group"
              >
                <div className="relative">
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
        </div>
      </section>

      {/* Eliminated Contestants */}
      {eliminatedContestants.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-red-900/10 to-black">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white mb-4">
                👋 Eliminated Contestants
              </h2>
              <p className="text-gray-400 text-lg">
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
                      {contestant.imageUrl ? (
                        <Image
                          src={contestant.imageUrl}
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
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-black">
        <div className="container-custom text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-red-600/10 to-pink-600/10"></div>
            <div className="relative z-10">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-400/30">
                  <span className="text-5xl">🗳️</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-red-200 bg-clip-text text-transparent mb-6">
                  Support Your Favorite!
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Your vote can change their destiny in the Bigg Boss house. 
                  Cast your vote now and help them survive another week!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/#vote-section" 
                  className="bg-gradient-to-r from-purple-600 to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-purple-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
                >
                  🗳️ Vote Now - FREE
                </Link>
                <Link
                  href="https://www.hotstar.com/in/shows/bigg-boss-telugu/vote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  📺 Official Hotstar Vote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
