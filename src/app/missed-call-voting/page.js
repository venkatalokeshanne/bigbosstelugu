import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Missed Call Voting | Free BB Telugu 9 Phone Voting Numbers',
  description: 'Vote for Bigg Boss Telugu 9 contestants using missed call voting method. Get all contestant phone numbers, voting procedure, and step-by-step guide for BB Telugu Season 9.',
  keywords: [
    'Bigg Boss Telugu 9 missed call voting', 'BB Telugu 9 phone numbers', 'missed call voting numbers',
    'BB Telugu 9 free voting', 'Bigg Boss Telugu phone voting', 'contestant voting numbers'
  ]
}

export default function MissedCallVoting() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/missed-call-voting',
    type: 'HowTo'
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <SEOEnhancer 
          title="Bigg Boss Telugu 9 Missed Call Voting"
          description="Complete guide for missed call voting in Bigg Boss Telugu Season 9"
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Missed Call Voting Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Vote for your favorite Bigg Boss Telugu 9 contestants using the free missed call voting method
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">How Missed Call Voting Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Step-by-Step Process</h3>
                <ol className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                    Wait for the nomination episode to air
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                    Note the voting numbers shown on TV screen
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                    Dial the number of your favorite nominated contestant
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                    Cut the call before it gets connected (missed call)
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">5</span>
                    Repeat for multiple votes (if allowed)
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Important Notes</h3>
                <div className="space-y-4">
                  <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
                    <h4 className="text-blue-300 font-semibold mb-2">Free Voting Method</h4>
                    <p className="text-gray-300 text-sm">Missed call voting is completely free. Standard call charges may apply but are minimal.</p>
                  </div>
                  <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-400">
                    <h4 className="text-yellow-300 font-semibold mb-2">Voting Window</h4>
                    <p className="text-gray-300 text-sm">Voting opens after nomination episode and closes before elimination.</p>
                  </div>
                  <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-400">
                    <h4 className="text-purple-300 font-semibold mb-2">Multiple Votes</h4>
                    <p className="text-gray-300 text-sm">You can call multiple times throughout the voting period.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Contestant Voting Numbers</h2>
            <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-400 mb-6">
              <p className="text-yellow-300 font-semibold mb-2">⚠️ Important Notice</p>
              <p className="text-gray-300 text-sm">
                Missed call voting numbers are announced during episodes and change each week based on nominations. 
                Please check the latest episode or official social media for current numbers.
              </p>
            </div>
            
            <div className="text-gray-300">
              <p className="mb-4">Voting numbers are typically displayed during:</p>
              <ul className="space-y-2 ml-6">
                <li>• Nomination episodes</li>
                <li>• Daily episodes throughout the week</li>
                <li>• Weekend episodes with host</li>
                <li>• Official social media posts</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Advantages</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• ✅ Completely free voting method</li>
                <li>• ✅ No app download required</li>
                <li>• ✅ Works on any mobile phone</li>
                <li>• ✅ No internet connection needed</li>
                <li>• ✅ Can vote multiple times</li>
                <li>• ✅ Easy for everyone to use</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Things to Remember</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• 📞 Don't let the call connect</li>
                <li>• 📺 Check numbers during episodes</li>
                <li>• ⏰ Vote within the voting window</li>
                <li>• 🎯 Only nominated contestants can receive votes</li>
                <li>• 📱 One vote per missed call</li>
                <li>• 🔄 Numbers change every week</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Troubleshooting</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Common Issues</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-400 pl-4">
                    <h5 className="text-red-300 font-semibold">Number not working</h5>
                    <p className="text-gray-300 text-sm">Check if you're using the latest numbers from current episode</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="text-yellow-300 font-semibold">Call gets connected</h5>
                    <p className="text-gray-300 text-sm">Cut the call immediately. The vote is registered on dial, not connection</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Solutions</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Verify numbers from official sources</li>
                  <li>• Try calling at different times</li>
                  <li>• Check if voting window is still open</li>
                  <li>• Use alternative voting methods if issues persist</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/voting-guide"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 mr-4"
            >
              Complete Voting Guide
            </Link>
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 px-8 rounded-full hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Voting
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
