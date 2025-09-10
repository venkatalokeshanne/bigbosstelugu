import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 SMS Voting | Text Message Voting for BB Telugu 9',
  description: 'Vote for Bigg Boss Telugu 9 contestants using SMS text messages. Complete guide for SMS voting numbers, procedure, and steps for BB Telugu Season 9.',
  keywords: ['Bigg Boss Telugu 9 SMS voting', 'BB Telugu text voting', 'SMS vote numbers']
}

export default function SmsVoting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <SEOEnhancer title="Bigg Boss Telugu 9 SMS Voting" description="SMS voting guide for BB Telugu 9" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">SMS Voting Guide</h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
          <p className="text-gray-300">SMS voting information will be updated soon. Please check back later.</p>
        </div>
        <div className="text-center">
          <Link href="/" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full">Back to Voting</Link>
        </div>
      </div>
    </div>
  )
}
