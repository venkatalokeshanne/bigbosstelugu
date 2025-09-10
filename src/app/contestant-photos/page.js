import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Contestant Photos | BB Telugu Season 9 Pictures Gallery',
  description: 'View Bigg Boss Telugu 9 contestant photos, pictures, and image gallery. High-quality photos of all BB Telugu Season 9 participants and memorable moments.',
  keywords: ['Bigg Boss Telugu 9 photos', 'BB Telugu contestant pictures', 'contestant photo gallery']
}

export default function ContestantPhotos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <SEOEnhancer title="Bigg Boss Telugu 9 Contestant Photos" description="Photo gallery of BB Telugu 9 contestants" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Contestant Photos</h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
          <p className="text-gray-300">High-quality contestant photos and gallery will be available here soon.</p>
        </div>
        <div className="text-center">
          <Link href="/contestants" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full mr-4">View Contestants</Link>
          <Link href="/" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full">Back to Voting</Link>
        </div>
      </div>
    </div>
  )
}
