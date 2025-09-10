import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Voting Trends 2025 | BB Telugu 9 Vote Analysis | Real-time Voting Results',
  description: 'Track Bigg Boss Telugu 9 voting trends and patterns. Get real-time voting analysis, contestant popularity charts, and weekly voting statistics for BB Telugu Season 9.',
  keywords: [
    'Bigg Boss Telugu 9 voting trends', 'BB Telugu 9 vote analysis', 'Bigg Boss Telugu voting patterns',
    'BB Telugu 9 voting statistics', 'Bigg Boss Telugu contestant popularity', 'voting trends analysis'
  ]
}

export default function VotingTrends() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/voting-trends',
    type: 'WebPage'
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <SEOEnhancer 
          title="Bigg Boss Telugu 9 Voting Trends"
          description="Comprehensive analysis of voting trends and patterns for Bigg Boss Telugu Season 9"
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Bigg Boss Telugu 9 Voting Trends
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover real-time voting patterns, contestant popularity trends, and detailed analysis of BB Telugu 9 voting behavior
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Weekly Trends</h3>
              <p className="text-gray-300 mb-4">
                Track how voting patterns change week by week throughout the season.
              </p>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4">
                <p className="text-white font-semibold">Coming Soon</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Contestant Popularity</h3>
              <p className="text-gray-300 mb-4">
                See which contestants are gaining or losing popularity based on voting data.
              </p>
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-4">
                <p className="text-white font-semibold">Analysis Available</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Vote Distribution</h3>
              <p className="text-gray-300 mb-4">
                Understand how votes are distributed across different contestants.
              </p>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4">
                <p className="text-white font-semibold">Live Data</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">How to Interpret Voting Trends</h2>
            <div className="space-y-4 text-gray-300">
              <p>• <strong className="text-white">Rising Trends:</strong> Contestants showing upward movement in voting percentages</p>
              <p>• <strong className="text-white">Stable Patterns:</strong> Consistent voting behavior over multiple weeks</p>
              <p>• <strong className="text-white">Peak Analysis:</strong> Identifying voting spikes during special episodes</p>
              <p>• <strong className="text-white">Geographic Distribution:</strong> Regional voting preferences and patterns</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Back to Voting
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
