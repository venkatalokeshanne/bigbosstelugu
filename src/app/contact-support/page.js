import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Contact Support | Bigg Boss Telugu 9 Voting Help and Support',
  description: 'Get help with Bigg Boss Telugu 9 voting issues, technical support, and general inquiries. Contact our support team for BB Telugu Season 9 assistance.',
  keywords: [
    'Bigg Boss Telugu support', 'BB Telugu voting help', 'contact support',
    'BB Telugu 9 technical support', 'voting assistance', 'help center'
  ]
}

export default function ContactSupport() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/contact-support',
    type: 'ContactPage'
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <SEOEnhancer 
          title="Contact Support - Bigg Boss Telugu 9"
          description="Get technical support and assistance for voting and website issues"
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Contact Support
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Need help with voting or have questions about Bigg Boss Telugu 9? Our support team is here to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Quick Help</h2>
              <div className="space-y-4">
                <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
                  <h3 className="text-blue-300 font-semibold mb-2">Voting Issues</h3>
                  <p className="text-gray-300 text-sm">Problems with Hotstar voting, missed call voting, or Google Assistant voting</p>
                </div>
                <div className="bg-green-500/20 p-4 rounded-lg border border-green-400">
                  <h3 className="text-green-300 font-semibold mb-2">Technical Support</h3>
                  <p className="text-gray-300 text-sm">Website issues, loading problems, or mobile compatibility issues</p>
                </div>
                <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-400">
                  <h3 className="text-purple-300 font-semibold mb-2">General Inquiries</h3>
                  <p className="text-gray-300 text-sm">Questions about contestants, show timings, or voting procedures</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Email Support</h3>
                  <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-400">
                    <p className="text-yellow-300 font-semibold">support@bigbossteluguvotes.in</p>
                    <p className="text-gray-300 text-sm">Response time: Within 24 hours</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Response Times</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>Urgent Issues:</strong> Within 2-4 hours</li>
                    <li>• <strong>General Questions:</strong> Within 24 hours</li>
                    <li>• <strong>Technical Issues:</strong> Within 12 hours</li>
                    <li>• <strong>Voting Problems:</strong> Same day response</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Reported Issues</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Common Problems</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="text-red-300 font-semibold">Hotstar voting not working</h4>
                    <p className="text-gray-300 text-sm">Check your premium subscription and app updates</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="text-yellow-300 font-semibold">Missed call voting fails</h4>
                    <p className="text-gray-300 text-sm">Verify you're using current week's voting numbers</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="text-blue-300 font-semibold">Website loading issues</h4>
                    <p className="text-gray-300 text-sm">Clear browser cache and cookies</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Quick Solutions</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Update your mobile app to the latest version</li>
                  <li>• Check internet connection stability</li>
                  <li>• Verify voting numbers from official sources</li>
                  <li>• Try alternative voting methods</li>
                  <li>• Contact support if issues persist</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Submit a Support Request</h2>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-blue-400">
              <p className="text-white font-semibold mb-4">When contacting support, please include:</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Detailed description of the issue</li>
                <li>• Device type and operating system</li>
                <li>• Browser version (for website issues)</li>
                <li>• Screenshots or error messages if available</li>
                <li>• When the issue first occurred</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Support Request
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/faq"
              className="inline-block bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 px-8 rounded-full hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 mr-4"
            >
              Check FAQ First
            </Link>
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Back to Voting
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
