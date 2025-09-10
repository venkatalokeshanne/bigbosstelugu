import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Elimination Predictions | BB Telugu 9 Who Will Be Eliminated',
  description: 'Bigg Boss Telugu 9 elimination predictions based on voting trends, contestant performance, and audience polls. Get weekly elimination forecasts for BB Telugu Season 9.',
  keywords: ['Bigg Boss Telugu 9 elimination predictions', 'BB Telugu elimination forecast', 'who will be eliminated']
}

export default function EliminationPredictions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <SEOEnhancer title="Bigg Boss Telugu 9 Elimination Predictions" description="Weekly elimination predictions for BB Telugu 9" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Elimination Predictions</h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
          <p className="text-gray-300">Elimination predictions will be updated weekly based on voting trends.</p>
        </div>
        <div className="text-center">
          <Link href="/" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full">Back to Voting</Link>
        </div>
      </div>
    </div>
  )
}
