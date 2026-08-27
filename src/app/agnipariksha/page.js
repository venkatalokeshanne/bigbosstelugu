import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Agnipariksha Telugu Season 10 | Pre-Show Premiere, Cast & Where to Watch',
  description: 'Everything about Bigg Boss Agnipariksha Telugu Season 10 - the official pre-show that premiered August 15, 2026 on JioHotstar and Star Maa, its personalities, and how it leads into Bigg Boss Telugu 10 starting September 6, 2026.',
  keywords: [
    'Bigg Boss Agnipariksha Telugu Season 10', 'Agnipariksha Telugu premiere date', 'Bigg Boss Telugu 10 pre-show',
    'Bigg Boss Agnipariksha JioHotstar', 'Bigg Boss Agnipariksha Star Maa', 'Bigg Boss Telugu 10 audition show'
  ]
}

export default function Agnipariksha() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/agnipariksha',
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
          title="Bigg Boss Agnipariksha Telugu Season 10"
          description="Official pre-show for Bigg Boss Telugu 10, premiered August 15, 2026 on JioHotstar and Star Maa"
        />

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Bigg Boss Agnipariksha Telugu Season 10
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The official pre-show that paves the way for Bigg Boss Telugu 10 - here&apos;s what it is, when it aired, and how it connects to the main season.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">What Is Agnipariksha Telugu?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              &quot;Bigg Boss Agnipariksha Telugu Season 10&quot; is the official audition and promotional pre-show
              that ran ahead of the main Bigg Boss Telugu 10 season. &quot;Agnipariksha&quot; (meaning &quot;trial by fire&quot;)
              put aspiring contestants and familiar media personalities through tasks and challenges, building
              buzz for the season and giving the makers a public platform to test potential housemates before
              the main show&apos;s grand premiere.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The pre-show premiered on <strong className="text-yellow-400">August 15, 2026</strong> and streamed
              on <strong className="text-yellow-400">JioHotstar</strong>, with select coverage also airing on
              <strong className="text-yellow-400"> Star Maa</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Where to Watch</h2>
              <ul className="text-gray-300 space-y-3">
                <li>• <strong className="text-orange-300">JioHotstar</strong> - primary streaming platform</li>
                <li>• <strong className="text-orange-300">Star Maa</strong> - television coverage</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Featured Personalities</h2>
              <p className="text-gray-300 mb-3">
                The Agnipariksha pre-show featured well-known Telugu media personalities as part of the
                promotional and audition process, including:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Sreemukhi</li>
                <li>• Abijeet</li>
                <li>• Bindu Madhavi</li>
                <li>• Navdeep</li>
              </ul>
              <p className="text-gray-400 text-sm mt-3">
                Note: appearing in Agnipariksha does not confirm a spot in the main Bigg Boss Telugu 10 house -
                see our probable contestants article for more on speculation around the final cast.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">How It Connects to Bigg Boss Telugu 10</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Agnipariksha functions as the on-ramp to the main season. It builds anticipation, tests
              on-camera personalities, and gives Star Maa and JioHotstar a way to promote the season&apos;s
              theme - <strong className="text-yellow-400">&quot;Dasavatharam&quot; (The Ten Avatars)</strong> -
              before the show itself begins.
            </p>
            <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
              <h3 className="text-blue-300 font-semibold mb-2">Key Dates</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Agnipariksha premiere: <strong className="text-white">August 15, 2026</strong></li>
                <li>Bigg Boss Telugu 10 grand premiere: <strong className="text-white">September 6, 2026</strong></li>
                <li>Daily episodes begin: <strong className="text-white">September 7, 2026</strong></li>
                <li>Host: <strong className="text-white">Nagarjuna Akkineni</strong> (8th consecutive season)</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/probable-contestants"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 mr-4"
            >
              See Probable Contestants
            </Link>
            <Link
              href="/show-timings"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Season 10 Show Timings
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
