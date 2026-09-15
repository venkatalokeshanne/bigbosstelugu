import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 10 Week 2 Updates | BB Telugu Season 10 Second Week Highlights',
  description: 'Complete coverage of Bigg Boss Telugu 10 Week 2 episodes, eliminations, nominations, and contestant performances. Get all the latest BB Telugu Season 10 second week updates.',
  keywords: [
    'Bigg Boss Telugu 10 week 2', 'BB Telugu 10 second week', 'Bigg Boss Telugu season 10 week 2 updates',
    'BB Telugu 10 week 2 elimination', 'Bigg Boss Telugu 10 week 2 nominations', 'second week highlights'
  ]
}

export default function Week2Updates() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/week2-updates',
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
          title="Bigg Boss Telugu 10 Week 2 Updates"
          description="Complete coverage of the second week of Bigg Boss Telugu Season 10"
        />

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Bigg Boss Telugu 10 Week 2 Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete coverage of the second week episodes, captaincy battles, fresh nominations, and shifting house alliances
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Day 8-10 Highlights</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Captaincy task sparks early drama</li>
                <li>• New alliances form after Week 1 eviction</li>
                <li>• Surprise secret task shakes up house dynamics</li>
                <li>• Contestants adjust to house routine and chores</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Day 11-14 Highlights</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Second nomination process</li>
                <li>• Weekend Mirchi with host Nagarjuna reviews Week 1</li>
                <li>• Fans react to early friendships and rivalries</li>
                <li>• Second elimination ceremony</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Week 2 Key Moments</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-400 pl-4">
                <h4 className="text-xl font-semibold text-white mb-2">Captaincy Task</h4>
                <p className="text-gray-300">Contestants competed fiercely for the captain's role, leading to heated exchanges and early strategy plays.</p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="text-xl font-semibold text-white mb-2">Secret Task Twist</h4>
                <p className="text-gray-300">A surprise secret task shook up house dynamics, forcing contestants to rethink their alliances mid-week.</p>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="text-xl font-semibold text-white mb-2">Second Nominations</h4>
                <p className="text-gray-300">The Week 2 nomination process revealed who the house sees as threats, setting up another tense elimination.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Contestant Performance Week 2</h2>
            <p className="text-gray-300 mb-4">
              Track how each contestant performed during their second week in the Bigg Boss Telugu 10 house:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-500/20 p-4 rounded-lg border border-green-400">
                <h4 className="text-green-300 font-semibold">Rising Favorites</h4>
                <p className="text-gray-300 text-sm">Contestants gaining momentum with viewers</p>
              </div>
              <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-400">
                <h4 className="text-yellow-300 font-semibold">Steady Performers</h4>
                <p className="text-gray-300 text-sm">Contestants holding their ground</p>
              </div>
              <div className="bg-red-500/20 p-4 rounded-lg border border-red-400">
                <h4 className="text-red-300 font-semibold">Under Pressure</h4>
                <p className="text-gray-300 text-sm">Contestants facing nomination scrutiny</p>
              </div>
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
              href="/contestants"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View Contestants
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
