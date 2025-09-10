import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Week 1 Updates | BB Telugu Season 9 First Week Highlights',
  description: 'Complete coverage of Bigg Boss Telugu 9 Week 1 episodes, eliminations, nominations, and contestant performances. Get all the latest BB Telugu Season 9 first week updates.',
  keywords: [
    'Bigg Boss Telugu 9 week 1', 'BB Telugu 9 first week', 'Bigg Boss Telugu season 9 week 1 updates',
    'BB Telugu 9 week 1 elimination', 'Bigg Boss Telugu 9 week 1 nominations', 'first week highlights'
  ]
}

export default function Week1Updates() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/week1-updates',
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
          title="Bigg Boss Telugu 9 Week 1 Updates"
          description="Complete coverage of the first week of Bigg Boss Telugu Season 9"
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Bigg Boss Telugu 9 Week 1 Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete coverage of the first week episodes, contestant introductions, initial nominations, and house dynamics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Day 1-3 Highlights</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Contestant entries and house tour</li>
                <li>• First impressions and initial interactions</li>
                <li>• House rules explanation by host Nagarjuna</li>
                <li>• First luxury budget task</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Day 4-7 Highlights</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• First nomination process</li>
                <li>• Weekend episodes with Nagarjuna</li>
                <li>• Contestant performances and tasks</li>
                <li>• First elimination ceremony</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Week 1 Key Moments</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-400 pl-4">
                <h4 className="text-xl font-semibold text-white mb-2">Grand Premiere</h4>
                <p className="text-gray-300">All contestants entered the house with great fanfare and introduced themselves to the audience.</p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="text-xl font-semibold text-white mb-2">First Task</h4>
                <p className="text-gray-300">Contestants participated in their first group task to determine house captain and initial dynamics.</p>
              </div>
              
              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="text-xl font-semibold text-white mb-2">Initial Nominations</h4>
                <p className="text-gray-300">The first nomination process revealed early alliances and conflicts among contestants.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Contestant Performance Week 1</h2>
            <p className="text-gray-300 mb-4">
              Track how each contestant performed during their first week in the Bigg Boss Telugu 9 house:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-500/20 p-4 rounded-lg border border-green-400">
                <h4 className="text-green-300 font-semibold">Strong Start</h4>
                <p className="text-gray-300 text-sm">Contestants who made positive impressions</p>
              </div>
              <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-400">
                <h4 className="text-yellow-300 font-semibold">Neutral Performance</h4>
                <p className="text-gray-300 text-sm">Contestants taking time to adapt</p>
              </div>
              <div className="bg-red-500/20 p-4 rounded-lg border border-red-400">
                <h4 className="text-red-300 font-semibold">Controversial Moments</h4>
                <p className="text-gray-300 text-sm">Contestants involved in conflicts</p>
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
