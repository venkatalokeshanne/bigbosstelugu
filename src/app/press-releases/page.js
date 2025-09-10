import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Press Releases | BB Telugu Season 9 Official News',
  description: 'Latest press releases and official announcements for Bigg Boss Telugu 9. Get authentic news updates, contestant announcements, and show updates from BB Telugu Season 9.',
  keywords: [
    'Bigg Boss Telugu 9 press releases', 'BB Telugu official news', 'Bigg Boss Telugu announcements',
    'BB Telugu 9 official updates', 'press announcements', 'official news'
  ]
}

export default function PressReleases() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/press-releases',
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
          title="Bigg Boss Telugu 9 Press Releases"
          description="Official press releases and announcements for Bigg Boss Telugu Season 9"
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Press Releases
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Official press releases, announcements, and authentic news updates for Bigg Boss Telugu Season 9
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
            <p className="text-gray-300 mb-4">
              This section will feature official press releases and announcements from the Bigg Boss Telugu 9 production team.
              Stay tuned for the latest updates and official news.
            </p>
            <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
              <p className="text-blue-300 font-semibold">Official press releases will be published here as they become available.</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 mr-4"
            >
              Back to Voting
            </Link>
            <Link 
              href="/news"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Latest News
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
