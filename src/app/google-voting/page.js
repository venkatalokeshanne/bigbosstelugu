import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Google Voting | Vote via Google Assistant BB Telugu 9',
  description: 'Learn how to vote for Bigg Boss Telugu 9 contestants using Google Assistant. Complete guide for Google voting, voice commands, and step-by-step instructions for BB Telugu Season 9.',
  keywords: [
    'Bigg Boss Telugu 9 Google voting', 'BB Telugu 9 Google Assistant', 'voice voting BB Telugu',
    'Google Assistant Bigg Boss voting', 'BB Telugu 9 voice vote', 'Google voting guide'
  ]
}

export default function GoogleVoting() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/google-voting',
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
          title="Bigg Boss Telugu 9 Google Voting Guide"
          description="Complete guide to vote for BB Telugu 9 contestants using Google Assistant"
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Google Assistant Voting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Vote for your favorite Bigg Boss Telugu 9 contestants using voice commands with Google Assistant
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">How to Vote Using Google Assistant</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Step-by-Step Process</h3>
                <ol className="text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                    Ensure Google Assistant is enabled on your device
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                    Say "Hey Google" or "Ok Google" to activate
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                    Use one of the voice commands listed below
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                    Follow the audio prompts to select your contestant
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">5</span>
                    Confirm your vote when prompted
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Voice Commands</h3>
                <div className="space-y-3">
                  <div className="bg-green-500/20 p-3 rounded-lg border border-green-400">
                    <p className="text-green-300 font-semibold">"Hey Google, I want to vote for Bigg Boss Telugu"</p>
                  </div>
                  <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-400">
                    <p className="text-blue-300 font-semibold">"Ok Google, Bigg Boss Telugu voting"</p>
                  </div>
                  <div className="bg-purple-500/20 p-3 rounded-lg border border-purple-400">
                    <p className="text-purple-300 font-semibold">"Hey Google, vote for BB Telugu 9"</p>
                  </div>
                  <div className="bg-orange-500/20 p-3 rounded-lg border border-orange-400">
                    <p className="text-orange-300 font-semibold">"Ok Google, Bigg Boss Telugu Season 9 vote"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Requirements</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Android/iOS device with Google Assistant</li>
                <li>• Active internet connection</li>
                <li>• Google account signed in</li>
                <li>• Voice recognition enabled</li>
                <li>• Clear pronunciation</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Advantages</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Hands-free voting experience</li>
                <li>• Quick and convenient</li>
                <li>• Works while multitasking</li>
                <li>• Accessibility friendly</li>
                <li>• No app download required</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Tips for Success</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Speak clearly and slowly</li>
                <li>• Use quiet environment</li>
                <li>• Wait for Google to respond</li>
                <li>• Confirm contestant selection</li>
                <li>• Try again if not recognized</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Troubleshooting Google Voting</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Common Issues</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="text-red-300 font-semibold">Google doesn't understand</h4>
                    <p className="text-gray-300 text-sm">Try speaking more clearly or use different voice commands</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="text-yellow-300 font-semibold">No voting response</h4>
                    <p className="text-gray-300 text-sm">Check internet connection and try again</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="text-blue-300 font-semibold">Wrong contestant selected</h4>
                    <p className="text-gray-300 text-sm">Clearly state the contestant's full name</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Solutions</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Check microphone permissions</li>
                  <li>• Update Google Assistant app</li>
                  <li>• Ensure stable internet connection</li>
                  <li>• Try different voice commands</li>
                  <li>• Use alternative voting methods if issues persist</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-xl p-8 border border-green-400 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Alternative Voting Methods</h2>
            <p className="text-gray-300 mb-6">
              If Google voting doesn't work for you, try these other official voting methods:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/voting-guide" className="bg-white/10 p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                <h4 className="text-white font-semibold mb-2">Disney+ Hotstar</h4>
                <p className="text-gray-300 text-sm">Official voting through mobile app</p>
              </Link>
              <Link href="/missed-call-voting" className="bg-white/10 p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                <h4 className="text-white font-semibold mb-2">Missed Call</h4>
                <p className="text-gray-300 text-sm">Free voting via phone calls</p>
              </Link>
              <Link href="/" className="bg-white/10 p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                <h4 className="text-white font-semibold mb-2">Online Polls</h4>
                <p className="text-gray-300 text-sm">Vote through our website</p>
              </Link>
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
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Voting
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
