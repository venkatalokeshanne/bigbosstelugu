import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getOptimizedContestantBySlug, getOptimizedContestants } from '../../../lib/optimized-contestants'
import { generateViewport, generateStructuredData } from '../../../utils/seo'
import contestantProfiles from '../../../data/contestant-profiles.json'

export const viewport = generateViewport()

export async function generateStaticParams() {
  try {
    const contestants = await getOptimizedContestants()
    return contestants.map((contestant) => ({
      slug: contestant.slug,
    }))
  } catch (error) {
    console.error('Error generating static params for contestants:', error)
    return []
  }
}

export async function generateMetadata({ params }) {
  try {
    const contestant = await getOptimizedContestantBySlug(params.slug)
    
    if (!contestant) {
      return {
        title: 'Contestant Not Found',
      }
    }

    return {
      title: `${contestant.name} - Bigg Boss Telugu 10 Contestant | Profile & Updates`,
      description: `Get to know ${contestant.name}, ${contestant.age ? `${contestant.age}-year-old ` : ''}${contestant.profession || 'contestant'} from ${contestant.hometown || 'Telugu states'}. Vote and support your favorite BB Telugu 10 contestant.`,
      keywords: `${contestant.name}, ${contestant.name} Bigg Boss Telugu 10, vote ${contestant.name}, BB Telugu 10 ${contestant.name}, ${contestant.name} age, ${contestant.name} biography, ${contestant.name} family, ${contestant.name} net worth, ${contestant.name} salary${contestant.realName ? `, ${contestant.realName}` : ''}`,
      openGraph: {
        title: `${contestant.name} - Bigg Boss Telugu 10`,
        description: `Vote for ${contestant.name} in Bigg Boss Telugu 10`,
        images: [
          {
            url: contestant.imageUrl || '/images/contestants/default.jpg',
            width: 800,
            height: 600,
            alt: `${contestant.name} - Bigg Boss Telugu 10 Contestant`,
          },
        ],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Contestant Not Found',
    }
  }
}

export default async function ContestantPage({ params }) {
  let contestant
  
  try {
    // Ensure params.slug exists and is valid
    if (!params?.slug || typeof params.slug !== 'string') {
      console.error('Invalid slug parameter:', params)
      notFound()
    }

    contestant = await getOptimizedContestantBySlug(params.slug)
    
    if (!contestant) {
      console.error(`Contestant not found for slug: ${params.slug}`)
      notFound()
    }
  } catch (error) {
    console.error('Error fetching contestant:', error)
    notFound()
  }

  const isActive = contestant.status === 'active'
  const profile = contestantProfiles[contestant.slug]
  const faqStructuredData = profile?.faqs?.length
    ? generateStructuredData({
        type: 'FAQPage',
        questions: profile.faqs.map(f => ({ question: f.q, answer: f.a })),
      })
    : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/30 to-black">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Contestant Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative overflow-hidden rounded-3xl shadow-2xl shadow-purple-500/20">
                {contestant.imageUrl ? (
                  <Image
                    src={contestant.imageUrl}
                    alt={`${contestant.name} - Bigg Boss Telugu 10 Contestant`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <span className="text-9xl">👤</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm ${
                    isActive 
                      ? 'bg-green-500/90 text-white' 
                      : 'bg-red-500/90 text-white'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-white animate-pulse' : 'bg-white'
                    }`}></div>
                    <span className="text-sm font-semibold">
                      {isActive ? 'ACTIVE' : 'ELIMINATED'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contestant Info */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6">
                <span className="text-purple-400 font-semibold">BIGG BOSS TELUGU 10</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                {contestant.name} - Bigg Boss Telugu 10 Contestant Profile 2026
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-purple-300 font-semibold mb-6">
                Vote {contestant.name} BBT10 | Biography Age Profession Hyderabad Telugu
              </h2>
              
              <div className="mb-8 space-y-4">
                {contestant.profession && (
                  <p className="text-2xl text-purple-300 font-semibold">
                    {contestant.profession}
                  </p>
                )}

                {contestant.realName && (
                  <p className="text-gray-400 text-sm">
                    Real name: <span className="text-gray-300">{contestant.realName}</span>
                  </p>
                )}
                
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-gray-300">
                  {contestant.age && (
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">🎂</span>
                      <span>{contestant.age} years old</span>
                    </div>
                  )}
                  
                  {contestant.hometown && (
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">📍</span>
                      <span>From {contestant.hometown}</span>
                    </div>
                  )}
                </div>
              </div>

              {contestant.biography && (
                <div className="mb-8">
                  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                    {contestant.biography}
                  </p>
                </div>
              )}

              {(contestant.reportedSalary || contestant.netWorth) && (
                <div className="mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-2xl">
                  <h3 className="text-lg font-bold text-white mb-3">💰 Reported Earnings</h3>
                  {contestant.reportedSalary && (
                    <p className="text-gray-300 mb-2">
                      <span className="text-purple-400 font-semibold">Bigg Boss remuneration: </span>
                      {contestant.reportedSalary}
                    </p>
                  )}
                  {contestant.netWorth && (
                    <p className="text-gray-300">
                      <span className="text-purple-400 font-semibold">Net worth: </span>
                      {contestant.netWorth}
                    </p>
                  )}
                  <p className="text-gray-500 text-xs mt-3 italic">
                    Figures are drawn from media reports, not official contracts, and are not confirmed by the Bigg Boss production team.
                  </p>
                </div>
              )}

              {/* Vote Section */}
              {isActive && (
                <div className="mb-8">
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Support {contestant.name.split(' ')[0]}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Help {contestant.name.split(' ')[0]} stay in the Bigg Boss house by voting now!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/#vote-section"
                        className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-purple-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 text-center"
                      >
                        🗳️ Vote Now - FREE
                      </Link>
                      <Link
                        href="https://www.hotstar.com/in/shows/bigg-boss-telugu/vote"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 text-center"
                      >
                        📺 Vote on Hotstar
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                    #{contestant.currentRank || 'N/A'}
                  </div>
                  <div className="text-gray-300 text-sm">Rank</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center col-span-2 md:col-span-1">
                  <div className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-1">
                    {isActive ? 'ACTIVE' : 'OUT'}
                  </div>
                  <div className="text-gray-300 text-sm">Status</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extended Profile */}
      {profile && (
        <div className="py-20 border-t border-white/10">
          <div className="container-custom max-w-4xl mx-auto space-y-16">

            {/* Quick Facts */}
            {profile.quickFacts?.length > 0 && (
              <section>
                <h2 className="text-3xl font-black text-white mb-6">
                  {contestant.name} Quick Facts
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-white/10">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-white/10">
                      {profile.quickFacts.map(([label, value]) => (
                        <tr key={label} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 font-semibold text-purple-300 w-1/3">{label}</td>
                          <td className="px-6 py-4 text-gray-300">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Career */}
            {profile.career && (
              <section>
                <h2 className="text-3xl font-black text-white mb-6">
                  {contestant.name} Career
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">{profile.career}</p>
              </section>
            )}

            {/* Family */}
            {profile.family && (
              <section>
                <h2 className="text-3xl font-black text-white mb-6">
                  {contestant.name} Family
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">{profile.family}</p>
              </section>
            )}

            {/* Bigg Boss Journey */}
            {profile.biggBoss && (
              <section>
                <h2 className="text-3xl font-black text-white mb-6">
                  {contestant.name} on Bigg Boss Telugu 10
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">{profile.biggBoss}</p>
              </section>
            )}

            {/* FAQs */}
            {profile.faqs?.length > 0 && (
              <section>
                <h2 className="text-3xl font-black text-white mb-6">
                  Frequently Asked Questions about {contestant.name}
                </h2>
                <div className="space-y-4">
                  {profile.faqs.map((faq, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-white mb-2">Q. {faq.q}</h3>
                      <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      )}

      {/* Back to All Contestants */}
      <div className="py-20">
        <div className="container-custom text-center">
          <Link
            href="/#contestants"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-purple-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Contestants
          </Link>
        </div>
      </div>
    </div>
  )
}
