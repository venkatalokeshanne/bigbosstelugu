import Link from 'next/link'

const links = [
  {
    href: '/contestants',
    title: 'Meet All 16 Contestants',
    description: 'Full profiles, ages, hometowns and career details for every Bigg Boss Telugu 10 contestant.',
  },
  {
    href: '/voting-guide',
    title: 'Complete Voting Guide',
    description: 'Step-by-step instructions for voting via Hotstar, SMS, missed call, and online polls.',
  },
  {
    href: '/voting-trends',
    title: 'Live Voting Trends',
    description: "See how votes are currently split across this week's nominated contestants.",
  },
  {
    href: '/news',
    title: 'Latest BB Telugu 10 News',
    description: 'Daily highlights, task results, and house drama from inside Bigg Boss Telugu 10.',
  },
  {
    href: '/faq',
    title: 'Voting FAQs',
    description: 'Answers to the most common questions about how and when to vote each week.',
  },
  {
    href: '/watch-online-international',
    title: 'Watch From Outside India',
    description: 'A guide for NRI and international fans to stream Bigg Boss Telugu 10 live.',
  },
]

export default function ExploreMoreSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Explore More on Bigg Boss Telugu 10
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to follow the season — contestant profiles, how to vote, live trends, and the latest news.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {link.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
