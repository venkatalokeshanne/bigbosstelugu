import Link from 'next/link'

const sitemapGroups = [
  {
    category: 'Main',
    links: [
      { href: '/', title: 'Home', description: 'Bigg Boss Telugu 10 voting platform home' },
      { href: '/contestants', title: 'All Contestants', description: 'Complete list of BB Telugu 10 contestants with profiles' },
      { href: '/voting', title: 'Live Voting & Comments', description: 'Vote and join the fan discussion' },
      { href: '/voting-guide', title: 'How to Vote Guide', description: 'Step-by-step voting instructions for all platforms' },
      { href: '/voting-trends', title: 'Voting Trends', description: 'Live vote-share analysis by contestant' },
    ],
  },
  {
    category: 'Voting Methods',
    links: [
      { href: '/google-voting', title: 'Google Online Voting', description: 'Vote through Google search polls' },
      { href: '/missed-call-voting', title: 'Missed Call Voting', description: 'Vote through missed call numbers' },
      { href: '/sms-voting', title: 'SMS Voting Numbers', description: 'Vote via SMS with official numbers' },
    ],
  },
  {
    category: 'Show Info & Updates',
    links: [
      { href: '/show-timings', title: 'Show Timings & Schedule', description: 'BB Telugu 10 telecast timings on Star Maa' },
      { href: '/week1-updates', title: 'Week 1 Updates', description: 'First week highlights, nominations, and eliminations' },
      { href: '/elimination-predictions', title: 'Elimination Predictions', description: 'Who might get eliminated this week' },
      { href: '/watch-online-international', title: 'Watch Online (International)', description: 'How to stream BB Telugu 10 from abroad' },
    ],
  },
  {
    category: 'Contestants & News',
    links: [
      { href: '/contestant-photos', title: 'Contestant Photo Gallery', description: 'Official photos of all contestants' },
      { href: '/news', title: 'Latest News', description: 'Breaking news and updates about the show' },
      { href: '/news-updates', title: 'News Updates', description: 'More news and updates coverage' },
      { href: '/press-releases', title: 'Press Releases', description: 'Official announcements and press releases' },
      { href: '/notifications', title: 'Notifications', description: 'Subscribe to voting and elimination alerts' },
    ],
  },
  {
    category: 'Help & Legal',
    links: [
      { href: '/faq', title: 'Frequently Asked Questions', description: 'Common questions about voting and the show' },
      { href: '/contact-support', title: 'Contact Support', description: 'Get help with voting and technical issues' },
      { href: '/contact', title: 'Contact Us', description: 'Get in touch with the team' },
      { href: '/accessibility', title: 'Accessibility', description: 'Accessibility features for all users' },
      { href: '/privacy', title: 'Privacy Policy', description: 'How we handle your data' },
      { href: '/terms', title: 'Terms & Conditions', description: 'Terms of use for this website' },
    ],
  },
]

export default function SitemapSection() {
  return (
    <section className="py-16 bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Bigg Boss Telugu 10 Complete Site Map
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Navigate through every section of our BB Telugu 10 voting platform — contestants, voting methods, news, and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-bold text-purple-300 mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      title={link.description}
                      className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
