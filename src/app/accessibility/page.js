import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Accessibility Statement | Bigg Boss Telugu 9 Voting Website Accessibility Features',
  description: 'Learn about accessibility features on BigBossTeluguVotes.in. Our commitment to making Bigg Boss Telugu 9 voting accessible to all users with disabilities.',
  keywords: [
    'accessibility statement', 'Bigg Boss Telugu accessibility', 'website accessibility features',
    'inclusive voting', 'disability friendly voting', 'screen reader compatible'
  ]
}

export default function Accessibility() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/accessibility',
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
          title="Accessibility Statement - Bigg Boss Telugu Voting"
          description="Information about accessibility features and our commitment to inclusive design"
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Accessibility Statement
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are committed to ensuring digital accessibility for people with disabilities and continuously improving the user experience for everyone.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  BigBossTeluguVotes.in is committed to ensuring that our website is accessible to all users, 
                  including those with visual, hearing, motor, or cognitive disabilities. We strive to provide 
                  an inclusive voting experience for Bigg Boss Telugu 9.
                </p>
                <p>
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards 
                  and follow accessibility best practices in our design and development process.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Accessibility Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Visual Accessibility</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• High contrast color scheme</li>
                    <li>• Scalable fonts and responsive design</li>
                    <li>• Alternative text for images</li>
                    <li>• Screen reader compatibility</li>
                    <li>• Keyboard navigation support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Navigation & Interaction</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Clear heading structure</li>
                    <li>• Focus indicators for interactive elements</li>
                    <li>• Skip to main content links</li>
                    <li>• Consistent navigation patterns</li>
                    <li>• Error identification and suggestions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Assistive Technology Support</h2>
              <div className="text-gray-300 space-y-4">
                <p>Our website is designed to work with:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Screen readers (JAWS, NVDA, VoiceOver)</li>
                  <li>• Voice recognition software</li>
                  <li>• Keyboard-only navigation</li>
                  <li>• Browser zoom up to 200%</li>
                  <li>• High contrast mode</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Feedback & Support</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We welcome feedback about the accessibility of our website. If you encounter 
                  any accessibility barriers or have suggestions for improvement, please let us know:
                </p>
                <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
                  <p className="text-blue-300 font-semibold mb-2">Contact Information:</p>
                  <p>Email: accessibility@bigbossteluguvotes.in</p>
                  <p>We typically respond to accessibility feedback within 2 business days.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Ongoing Improvements</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We regularly review and improve our website's accessibility. Our ongoing efforts include:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Regular accessibility audits and testing</li>
                  <li>• User testing with people with disabilities</li>
                  <li>• Staff training on accessibility best practices</li>
                  <li>• Continuous updates based on user feedback</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Alternative Voting Methods</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have difficulty using our website, alternative voting methods for Bigg Boss Telugu 9 include:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-500/20 p-4 rounded-lg border border-green-400">
                    <h4 className="text-green-300 font-semibold mb-2">Hotstar App</h4>
                    <p className="text-sm">Vote through Disney+ Hotstar mobile app</p>
                  </div>
                  <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-400">
                    <h4 className="text-yellow-300 font-semibold mb-2">Missed Call</h4>
                    <p className="text-sm">Use missed call voting numbers</p>
                  </div>
                  <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
                    <h4 className="text-blue-300 font-semibold mb-2">Google Assistant</h4>
                    <p className="text-sm">Voice-activated voting through Google</p>
                  </div>
                </div>
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
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
