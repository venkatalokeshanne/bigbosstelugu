import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Voting Guide | How to Vote BB Telugu Season 9 Step-by-Step',
  description: 'Complete step-by-step voting guide for Bigg Boss Telugu 9. Learn how to vote through Hotstar app, missed call, Google Assistant, and online methods for BB Telugu Season 9.',
  keywords: [
    'Bigg Boss Telugu 9 voting guide', 'how to vote BB Telugu 9', 'Bigg Boss Telugu voting steps',
    'BB Telugu 9 voting methods', 'Hotstar voting guide', 'missed call voting guide'
  ]
}

export default function VotingGuide() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/voting-guide',
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
          title="Bigg Boss Telugu 9 Voting Guide"
          description="Complete guide on how to vote for your favorite contestants in Bigg Boss Telugu Season 9"
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Bigg Boss Telugu 9 Voting Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete step-by-step guide to vote for your favorite contestants in Bigg Boss Telugu Season 9
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                Disney+ Hotstar Voting
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
                  <h4 className="text-blue-300 font-semibold mb-2">Official Voting Method</h4>
                  <p className="text-sm">This is the primary official voting method for Bigg Boss Telugu 9</p>
                </div>
                <h4 className="text-lg font-semibold text-white">Steps to Vote:</h4>
                <ol className="space-y-2 ml-4">
                  <li>• Download Disney+ Hotstar app on your mobile device</li>
                  <li>• Create an account or log in with existing credentials</li>
                  <li>• Search for "Bigg Boss Telugu 9" or navigate to the show page</li>
                  <li>• Look for the "Vote Now" button during nomination period</li>
                  <li>• Select your favorite contestant from the nominated list</li>
                  <li>• Confirm your vote (up to 50 votes per day)</li>
                </ol>
                <div className="bg-green-500/20 p-3 rounded-lg border border-green-400">
                  <p className="text-green-300 text-sm"><strong>Pro Tip:</strong> Premium subscribers get additional voting privileges</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                Missed Call Voting
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-400">
                  <h4 className="text-yellow-300 font-semibold mb-2">Alternative Voting Method</h4>
                  <p className="text-sm">Free voting method using missed calls to specific numbers</p>
                </div>
                <h4 className="text-lg font-semibold text-white">How to Vote:</h4>
                <ol className="space-y-2 ml-4">
                  <li>• Wait for nomination episode to air</li>
                  <li>• Note down the missed call numbers for each contestant</li>
                  <li>• Call the number of your favorite nominated contestant</li>
                  <li>• Disconnect the call before it connects (missed call)</li>
                  <li>• You can cast multiple votes using this method</li>
                  <li>• Standard call charges may apply</li>
                </ol>
                <div className="bg-orange-500/20 p-3 rounded-lg border border-orange-400">
                  <p className="text-orange-300 text-sm"><strong>Note:</strong> Numbers are displayed during episodes and on official social media</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                Google Assistant Voting
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-400">
                  <h4 className="text-purple-300 font-semibold mb-2">Voice-Activated Voting</h4>
                  <p className="text-sm">Use voice commands to vote through Google Assistant</p>
                </div>
                <h4 className="text-lg font-semibold text-white">Voice Commands:</h4>
                <ul className="space-y-2 ml-4">
                  <li>• "Hey Google, I want to vote for Bigg Boss Telugu"</li>
                  <li>• "Ok Google, Bigg Boss Telugu voting"</li>
                  <li>• Follow the voice prompts to select your contestant</li>
                  <li>• Confirm your vote when prompted</li>
                </ul>
                <div className="bg-indigo-500/20 p-3 rounded-lg border border-indigo-400">
                  <p className="text-indigo-300 text-sm"><strong>Requirements:</strong> Google Assistant enabled device with internet connection</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                Online Polls & Surveys
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="bg-teal-500/20 p-4 rounded-lg border border-teal-400">
                  <h4 className="text-teal-300 font-semibold mb-2">Unofficial Voting</h4>
                  <p className="text-sm">Participate in online polls and surveys for trends and predictions</p>
                </div>
                <h4 className="text-lg font-semibold text-white">Available Platforms:</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Our website voting polls</li>
                  <li>• Social media platform polls</li>
                  <li>• Entertainment news websites</li>
                  <li>• Fan community surveys</li>
                </ul>
                <div className="bg-red-500/20 p-3 rounded-lg border border-red-400">
                  <p className="text-red-300 text-sm"><strong>Important:</strong> These polls don't affect actual elimination results</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Important Voting Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Voting Rules</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Maximum 50 votes per person per day</li>
                  <li>• Voting opens after nomination episode</li>
                  <li>• Voting closes before weekend episodes</li>
                  <li>• Only nominated contestants can receive votes</li>
                  <li>• Votes cannot be changed once cast</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Best Practices</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Vote consistently throughout the week</li>
                  <li>• Use multiple voting methods if available</li>
                  <li>• Check official sources for voting numbers</li>
                  <li>• Vote early to avoid last-minute issues</li>
                  <li>• Keep track of nomination status</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Vote?</h2>
            <p className="text-gray-300 mb-6">
              Choose your preferred voting method and support your favorite Bigg Boss Telugu 9 contestant. 
              Remember, every vote counts towards keeping your favorite contestant in the house!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contestants"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                View Contestants
              </Link>
              <Link 
                href="/faq"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Voting FAQ
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 px-8 rounded-full hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Voting Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
