import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Latest News Updates | BB Telugu Season 9 Daily News',
  description: 'Stay updated with latest Bigg Boss Telugu 9 news, daily updates, contestant developments, and show highlights. Get real-time BB Telugu Season 9 news.',
  keywords: ['Bigg Boss Telugu 9 news', 'BB Telugu latest updates', 'daily news updates']
}

export default function NewsUpdates() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <SEOEnhancer title="Bigg Boss Telugu 9 Latest News Updates" description="Latest news and updates for BB Telugu 9" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Latest News Updates</h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
          <p className="text-gray-300">Latest news updates will be posted here regularly. Stay tuned!</p>
        </div>
        <div className="text-center">
          <Link href="/news" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full mr-4">View News</Link>
          <Link href="/" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full">Back to Voting</Link>
        </div>
      </div>
    </div>
  )
}
