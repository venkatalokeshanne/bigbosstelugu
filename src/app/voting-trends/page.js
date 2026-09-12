import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import LiveVoteTrendsTable from '../../components/LiveVoteTrendsTable'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 10 Voting Trends 2026 | BB Telugu 10 Vote Analysis | Real-time Voting Results',
  description: 'Track Bigg Boss Telugu 10 voting trends and patterns. Get real-time voting analysis, contestant popularity charts, and weekly voting statistics for BB Telugu Season 10.',
  keywords: [
    'Bigg Boss Telugu 10 voting trends', 'BB Telugu 10 vote analysis', 'Bigg Boss Telugu voting patterns',
    'BB Telugu 10 voting statistics', 'Bigg Boss Telugu contestant popularity', 'voting trends analysis'
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
          title="Bigg Boss Telugu 10 Voting Trends"
          description="Comprehensive analysis of voting trends and patterns for Bigg Boss Telugu Season 10"
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Bigg Boss Telugu 10 Voting Trends
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover real-time voting patterns, contestant popularity trends, and detailed analysis of BB Telugu 10 voting behavior
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Bigg Boss Telugu 10 Live Vote Share by Contestant</h2>
            <p className="text-gray-300 mb-6">
              This ranking updates live from our own fan poll below and reflects votes cast on this site only —
              it is not the official Bigg Boss Telugu 10 vote count from Disney+ Hotstar or JioHotstar.
            </p>
            <LiveVoteTrendsTable />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">How to Interpret Voting Trends</h2>
            <div className="space-y-4 text-gray-300">
              <p>• <strong className="text-white">Rising Trends:</strong> Contestants showing upward movement in voting percentages</p>
              <p>• <strong className="text-white">Stable Patterns:</strong> Consistent voting behavior over multiple weeks</p>
              <p>• <strong className="text-white">Peak Analysis:</strong> Identifying voting spikes during special episodes</p>
              <p>• <strong className="text-white">Official vs Fan Voting:</strong> Only Disney+ Hotstar / JioHotstar app votes and official missed-call numbers count toward the real Bigg Boss Telugu 10 elimination result</p>
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
