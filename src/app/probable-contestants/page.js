import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 10 Probable Contestants List | Rumoured Names & Speculation',
  description: 'Bigg Boss Telugu 10 probable contestants list - rumoured and speculated names from media reports ahead of the September 6, 2026 premiere. No official cast has been confirmed yet.',
  keywords: [
    'Bigg Boss Telugu 10 probable contestants', 'Bigg Boss Telugu 10 contestants list', 'BB Telugu 10 rumoured contestants',
    'Bigg Boss Telugu 10 cast', 'Bigg Boss Telugu Season 10 contestants speculation'
  ]
}

export default function ProbableContestants() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/probable-contestants',
    type: 'Article'
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <SEOEnhancer
          title="Bigg Boss Telugu 10 Probable Contestants List"
          description="Rumoured and speculated contestants for Bigg Boss Telugu 10 - unofficial, based on media reports"
        />

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Bigg Boss Telugu 10 Probable Contestants List
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A roundup of the names being talked about in the Telugu media ahead of the Bigg Boss Telugu 10
              grand premiere on September 6, 2026.
            </p>
          </div>

          <div className="bg-red-500/20 border border-red-400 rounded-xl p-6 mb-10 max-w-3xl mx-auto">
            <p className="text-red-200 font-semibold text-center">
              ⚠️ Unconfirmed / Speculative Content: As of this writing, the makers of Bigg Boss Telugu 10 have
              not officially confirmed any contestant. Everything below is compiled from media reports and
              rumours circulating ahead of the season, not an official cast announcement. This article will
              be updated as names are officially confirmed.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Names Being Speculated in Media Reports</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Various Telugu entertainment outlets have reported the following names as possible contestants
              for Bigg Boss Telugu 10. None of these have been confirmed by the makers, Star Maa, or JioHotstar:
            </p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Deepika Rangaraju</li>
              <li>Uppal Balu</li>
              <li>Kalyan</li>
              <li>Pallavi Gowda</li>
              <li>Rocking Rakesh</li>
              <li>Pandu Master</li>
              <li>Jyothi</li>
              <li>Express Hari</li>
              <li>Tejaswini Gowda</li>
              <li>Chandrahas</li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              Names sourced from reports including Siasat and Sakshi Post. Spellings and identities may vary
              across outlets since none of these are official confirmations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">How the Speculation Builds</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Social media buzz around popular Telugu TV and film personalities</li>
                <li>• Appearances (or non-appearances) in the Bigg Boss Agnipariksha Telugu Season 10 pre-show</li>
                <li>• Reports from entertainment journalists tracking the makers&apos; auditions</li>
                <li>• Past patterns of contestants drawn from Jabardasth-style comedy shows and small-screen serials</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">What We Know for Certain</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Host: <strong className="text-white">Nagarjuna Akkineni</strong> (8th consecutive season)</li>
                <li>• Grand premiere: <strong className="text-white">September 6, 2026</strong></li>
                <li>• Daily episodes: from <strong className="text-white">September 7, 2026</strong></li>
                <li>• Season theme: <strong className="text-white">&quot;Dasavatharam&quot; (The Ten Avatars)</strong></li>
                <li>• Streaming/TV: <strong className="text-white">JioHotstar and Star Maa</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">We&apos;ll Update This As Names Are Confirmed</h2>
            <p className="text-gray-300">
              This page will be revised once Bigg Boss Telugu 10&apos;s official contestants are announced or
              revealed on the grand premiere. Until then, treat every name above as unverified speculation.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/agnipariksha"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 mr-4"
            >
              About Agnipariksha
            </Link>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
