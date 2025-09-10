import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Show Timings | BB Telugu Season 9 Episode Schedule',
  description: 'Complete Bigg Boss Telugu 9 show timings, episode schedule, and streaming details. Watch BB Telugu Season 9 on Star Maa and Disney+ Hotstar with accurate timings.',
  keywords: [
    'Bigg Boss Telugu 9 timings', 'BB Telugu 9 schedule', 'Bigg Boss Telugu show time',
    'BB Telugu 9 episode timing', 'Star Maa Bigg Boss timings', 'Hotstar BB Telugu timing'
  ]
}

export default function ShowTimings() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/show-timings',
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
          title="Bigg Boss Telugu 9 Show Timings"
          description="Complete schedule and timing details for Bigg Boss Telugu Season 9 episodes"
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Bigg Boss Telugu 9 Timings
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete schedule and episode timings for Bigg Boss Telugu Season 9 on Star Maa and Disney+ Hotstar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Daily Episodes</h2>
              <div className="space-y-4">
                <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
                  <h3 className="text-blue-300 font-semibold mb-2">Monday to Friday</h3>
                  <p className="text-white text-xl font-bold">9:30 PM IST</p>
                  <p className="text-gray-300 text-sm">Regular daily episodes showcasing house activities</p>
                </div>
                <div className="bg-green-500/20 p-4 rounded-lg border border-green-400">
                  <h3 className="text-green-300 font-semibold mb-2">Saturday</h3>
                  <p className="text-white text-xl font-bold">9:00 PM IST</p>
                  <p className="text-gray-300 text-sm">Special episode with host Akkineni Nagarjuna</p>
                </div>
                <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-400">
                  <h3 className="text-purple-300 font-semibold mb-2">Sunday</h3>
                  <p className="text-white text-xl font-bold">9:00 PM IST</p>
                  <p className="text-gray-300 text-sm">Elimination episode with results</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Where to Watch</h2>
              <div className="space-y-4">
                <div className="bg-red-500/20 p-4 rounded-lg border border-red-400">
                  <h3 className="text-red-300 font-semibold mb-2">Star Maa TV</h3>
                  <p className="text-gray-300">Live TV broadcast of all episodes</p>
                  <p className="text-yellow-400 text-sm">Primary television channel</p>
                </div>
                <div className="bg-orange-500/20 p-4 rounded-lg border border-orange-400">
                  <h3 className="text-orange-300 font-semibold mb-2">Disney+ Hotstar</h3>
                  <p className="text-gray-300">Live streaming and on-demand</p>
                  <p className="text-yellow-400 text-sm">Available after TV broadcast</p>
                </div>
                <div className="bg-teal-500/20 p-4 rounded-lg border border-teal-400">
                  <h3 className="text-teal-300 font-semibold mb-2">Star Maa HD</h3>
                  <p className="text-gray-300">High definition broadcast</p>
                  <p className="text-yellow-400 text-sm">Same timing as Star Maa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Weekly Schedule Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left p-4 text-white">Day</th>
                    <th className="text-left p-4 text-white">Time</th>
                    <th className="text-left p-4 text-white">Episode Type</th>
                    <th className="text-left p-4 text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">Monday</td>
                    <td className="p-4 font-semibold">9:30 PM</td>
                    <td className="p-4">Daily Episode</td>
                    <td className="p-4">60 minutes</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">Tuesday</td>
                    <td className="p-4 font-semibold">9:30 PM</td>
                    <td className="p-4">Daily Episode</td>
                    <td className="p-4">60 minutes</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">Wednesday</td>
                    <td className="p-4 font-semibold">9:30 PM</td>
                    <td className="p-4">Daily Episode</td>
                    <td className="p-4">60 minutes</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">Thursday</td>
                    <td className="p-4 font-semibold">9:30 PM</td>
                    <td className="p-4">Nomination Episode</td>
                    <td className="p-4">60 minutes</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">Friday</td>
                    <td className="p-4 font-semibold">9:30 PM</td>
                    <td className="p-4">Daily Episode</td>
                    <td className="p-4">60 minutes</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">Saturday</td>
                    <td className="p-4 font-semibold">9:00 PM</td>
                    <td className="p-4">Special Episode</td>
                    <td className="p-4">90 minutes</td>
                  </tr>
                  <tr>
                    <td className="p-4">Sunday</td>
                    <td className="p-4 font-semibold">9:00 PM</td>
                    <td className="p-4">Elimination Episode</td>
                    <td className="p-4">90 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Time Zones</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>IST:</strong> 9:30 PM (Mon-Fri), 9:00 PM (Weekends)</li>
                <li>• <strong>USA EST:</strong> 11:00 AM (Mon-Fri), 10:30 AM (Weekends)</li>
                <li>• <strong>UK GMT:</strong> 4:00 PM (Mon-Fri), 3:30 PM (Weekends)</li>
                <li>• <strong>Australia AEST:</strong> 3:00 AM (Mon-Fri), 2:30 AM (Weekends)</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Streaming Details</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Live:</strong> Disney+ Hotstar Premium</li>
                <li>• <strong>On-Demand:</strong> Available after TV broadcast</li>
                <li>• <strong>Subtitles:</strong> English subtitles available</li>
                <li>• <strong>Quality:</strong> HD streaming available</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Special Episodes</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Grand Premiere:</strong> Extended 2-hour episode</li>
                <li>• <strong>Grand Finale:</strong> 3-4 hour special episode</li>
                <li>• <strong>Festival Specials:</strong> Extended episodes</li>
                <li>• <strong>Midweek Specials:</strong> Occasional extended episodes</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Don't Miss Any Episode!</h2>
            <p className="text-gray-300 mb-6">
              Set reminders for your favorite episodes and never miss the drama, voting, and eliminations of Bigg Boss Telugu 9.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
                Set TV Reminder
              </button>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
                Hotstar Watchlist
              </button>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 mr-4"
            >
              Start Voting
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
