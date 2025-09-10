export default function SitemapSection() {
  const sitemapLinks = [
    // Main Pages
    { href: '/', title: 'Bigg Boss Telugu 9 Voting Home', description: 'Main voting platform for BB Telugu 9' },
    { href: '/contestants', title: 'All Contestants List', description: 'Complete list of BB Telugu 9 contestants with profiles' },
    { href: '/voting-guide', title: 'How to Vote Guide', description: 'Step-by-step voting instructions for all platforms' },
    { href: '/results', title: 'Voting Results', description: 'Live voting results and elimination updates' },
    { href: '/episodes', title: 'Episode Highlights', description: 'Daily episode highlights and summaries' },
    
    // Voting Methods
    { href: '/hotstar-voting', title: 'Hotstar Voting Guide', description: 'Complete guide for voting through Disney+ Hotstar app' },
    { href: '/missed-call-voting', title: 'Missed Call Voting', description: 'Vote through missed call numbers - free method' },
    { href: '/google-voting', title: 'Google Online Voting', description: 'Vote through Google search polls' },
    { href: '/sms-voting', title: 'SMS Voting Numbers', description: 'Vote via SMS with official numbers' },
    
    // Show Information
    { href: '/show-timings', title: 'Show Timings & Schedule', description: 'BB Telugu 9 telecast timings on Star Maa' },
    { href: '/host-nagarjuna', title: 'Host Akkineni Nagarjuna', description: 'About the host of Bigg Boss Telugu 9' },
    { href: '/house-tour', title: 'Bigg Boss House Tour', description: 'Inside look at the BB Telugu 9 house' },
    { href: '/rules-format', title: 'Game Rules & Format', description: 'BB Telugu 9 game rules and format explained' },
    
    // Weekly Updates
    { href: '/week1-updates', title: 'Week 1 Updates', description: 'First week highlights, nominations, and eliminations' },
    { href: '/nominations', title: 'This Week Nominations', description: 'Current week nominated contestants list' },
    { href: '/elimination-predictions', title: 'Elimination Predictions', description: 'Who might get eliminated this week' },
    { href: '/captaincy-tasks', title: 'Captaincy Tasks', description: 'Weekly captaincy task updates and results' },
    
    // Contestant Profiles
    { href: '/contestant-biographies', title: 'Contestant Biographies', description: 'Detailed profiles of all BB Telugu 9 contestants' },
    { href: '/contestant-photos', title: 'Contestant Photo Gallery', description: 'Official photos and images of contestants' },
    { href: '/contestant-videos', title: 'Contestant Video Profiles', description: 'Video introductions and highlights' },
    { href: '/evicted-contestants', title: 'Evicted Contestants List', description: 'List of eliminated contestants with reasons' },
    
    // Live Updates
    { href: '/live-updates', title: 'Live Updates Feed', description: 'Real-time updates from BB Telugu 9 house' },
    { href: '/social-media-buzz', title: 'Social Media Buzz', description: 'Latest social media trends and reactions' },
    { href: '/news-updates', title: 'Latest News', description: 'Breaking news and updates about the show' },
    { href: '/press-releases', title: 'Official Press Releases', description: 'Official announcements and press releases' },
    
    // Analysis & Insights
    { href: '/voting-trends', title: 'Voting Trends Analysis', description: 'Analysis of voting patterns and trends' },
    { href: '/winner-predictions', title: 'Winner Predictions', description: 'Expert predictions and analysis for potential winners' },
    { href: '/audience-polls', title: 'Audience Opinion Polls', description: 'Public opinion polls and surveys' },
    { href: '/performance-analysis', title: 'Contestant Performance Analysis', description: 'Weekly performance analysis of contestants' },
    
    // Help & Support
    { href: '/faq', title: 'Frequently Asked Questions', description: 'Common questions about voting and the show' },
    { href: '/voting-problems', title: 'Voting Issues Help', description: 'Solutions for common voting problems' },
    { href: '/contact-support', title: 'Contact Support', description: 'Get help with voting and technical issues' },
    { href: '/terms-conditions', title: 'Terms & Conditions', description: 'Voting terms and conditions' },
    
    // Special Features
    { href: '/mobile-app', title: 'Mobile App Download', description: 'Download BB Telugu 9 voting mobile app' },
    { href: '/notifications', title: 'SMS/Email Alerts', description: 'Subscribe to voting and elimination alerts' },
    { href: '/international-voting', title: 'International Voting Guide', description: 'How to vote from outside India' },
    { href: '/accessibility', title: 'Accessibility Features', description: 'Voting accessibility for all users' }
  ]

  return (
    <section className="py-16 bg-gray-900/50">
      <div className="container-custom">
        {/* Hidden SEO-friendly sitemap */}
        <div className="sr-only">
          <h2>Bigg Boss Telugu 9 Complete Site Map</h2>
          <p>Navigate through all sections of our comprehensive BB Telugu 9 voting platform</p>
          
          <div className="grid grid-cols-1 gap-4">
            {sitemapLinks.map((link, index) => (
              <div key={index}>
                <h3>
                  <a 
                    href={link.href}
                    title={link.description}
                    rel="bookmark"
                  >
                    {link.title}
                  </a>
                </h3>
                <p>{link.description}</p>
              </div>
            ))}
          </div>
          
          {/* Additional SEO Content */}
          <div>
            <h3>Related Search Terms</h3>
            <p>
              bigg boss telugu 9 voting online, bb telugu 9 vote today, bigg boss telugu season 9 contestants list, 
              star maa bigg boss telugu vote, hotstar bb telugu voting, bigg boss telugu 9 elimination this week, 
              nagarjuna bigg boss telugu host, bb telugu 9 missed call voting numbers, bigg boss telugu live streaming, 
              bb telugu 9 winner prediction, bigg boss telugu voting results today, star maa tv show timings, 
              disney plus hotstar bigg boss telugu, bb telugu 9 nominations list, bigg boss telugu house location, 
              bb telugu voting from usa, international bigg boss telugu voting, bb telugu 9 episode highlights, 
              bigg boss telugu social media updates, bb telugu 9 captaincy task, bigg boss telugu finale date, 
              bb telugu 9 prize money, bigg boss telugu previous seasons, bb telugu voting tips and tricks
            </p>
          </div>
          
          <div>
            <h3>Regional Keywords</h3>
            <p>
              hyderabad bigg boss telugu voting, telangana bb telugu 9, andhra pradesh bigg boss voting, 
              chennai bb telugu fans, bangalore bigg boss telugu viewers, mumbai bb telugu voting, 
              delhi bigg boss telugu community, kolkata bb telugu audience, pune bigg boss telugu fans, 
              vijayawada bb telugu voting, visakhapatnam bigg boss telugu, guntur bb telugu fans, 
              warangal bigg boss voting, karimnagar bb telugu viewers, nizamabad bigg boss fans, 
              tirupati bb telugu voting, rajamahendravaram bigg boss telugu, nellore bb telugu fans, 
              kadapa bigg boss voting, anantapur bb telugu viewers, kurnool bigg boss fans
            </p>
          </div>
        </div>
        
        {/* Visible Quick Links Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sitemapLinks.slice(0, 12).map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                title={link.description}
              >
                <span className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors">
                  {link.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
