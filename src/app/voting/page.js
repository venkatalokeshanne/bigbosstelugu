import Link from 'next/link'
import VotingSection from '../../components/VotingSection'
import CommentsSection from '../../components/CommentsSection'
import VotingStatsCTA from '../../components/VotingStatsCTA'
import { generateMetaTags, generateStructuredData, generateViewport } from '../../utils/seo'

export const metadata = generateMetaTags({
  title: 'Bigg Boss Telugu 10 Voting | Vote Online Free & Join the Discussion',
  description: 'Vote for your favorite Bigg Boss Telugu 10 contestant and see live poll results. Join the conversation with other fans in the comments below.',
  keywords: [
    'Bigg Boss Telugu 10 voting', 'BB Telugu 10 vote online', 'Bigg Boss Telugu 10 live poll',
    'Bigg Boss Telugu 10 comments', 'BB Telugu 10 fan discussion', 'vote BB Telugu 10 free'
  ],
  url: '/voting',
})

export const viewport = generateViewport()

export default function VotingPage() {
  const structuredData = generateStructuredData({
    type: 'WebPage',
    name: 'Bigg Boss Telugu 10 Voting',
    description: 'Vote for your favorite Bigg Boss Telugu 10 contestant and join the fan discussion.',
    url: '/voting',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container-custom pt-16 pb-4">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-white font-semibold">LIVE VOTING & FAN DISCUSSION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Bigg Boss Telugu 10 Voting
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cast your vote for your favorite Bigg Boss Telugu 10 contestant and share your thoughts
              with fellow fans below.
            </p>
          </div>
        </div>

        <VotingSection />
        <CommentsSection />
        <VotingStatsCTA />

        <div className="text-center pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}
