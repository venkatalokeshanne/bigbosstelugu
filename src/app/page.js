import Hero from '../components/Hero'
import VotingSection from '../components/VotingSection'
import ContestantGrid from '../components/ContestantGrid'
import PosterSection from '../components/PosterSection'
import ContentSection from '../components/ContentSection'
import SEOEnhancer from '../components/SEOEnhancer'
import SitemapSection from '../components/SitemapSection'
import { generateStructuredData } from '../utils/seo'

// Dynamic imports for better performance
import dynamic from 'next/dynamic'

const HowToVote = dynamic(() => import('../components/HowToVote'), {
  loading: () => <div className="min-h-[200px] bg-gray-900/50 animate-pulse rounded-lg"></div>
})
const LiveUpdates = dynamic(() => import('../components/LiveUpdates'), {
  loading: () => <div className="min-h-[300px] bg-gray-900/50 animate-pulse rounded-lg"></div>
})
const FAQSection = dynamic(() => import('../components/FAQSectionNew'), {
  loading: () => <div className="min-h-[400px] bg-gray-900/50 animate-pulse rounded-lg"></div>
})
const NewsSection = dynamic(() => import('../components/NewsSection'), {
  loading: () => <div className="min-h-[500px] bg-gray-900/50 animate-pulse rounded-lg"></div>
})

export const metadata = {
  title: 'Bigg Boss Telugu 9 Voting Online 2025 | Vote Bigg Boss Telugu Nine Contestants Free | BB Telugu 9',
  description: 'Bigg Boss Telugu 9 Voting Online 2025: Vote for your favorite Bigg Boss Telugu Nine contestants through Hotstar app, Bigg Boss Telugu 9 missed call voting, and Bigg Boss Telugu Nine online polls. Get latest Bigg Boss Telugu 9 updates, BB Telugu Nine elimination results, Bigg Boss Telugu 9 contestant profiles, and official BB Telugu Nine voting procedures.',
  keywords: [
    // Primary Keywords
    'Bigg Boss Telugu 9 Voting', 'BB Telugu Nine Vote Online', 'Bigg Boss Telugu Season Nine Voting',
    'Star Maa Bigg Boss Telugu 9 Vote', 'Bigg Boss Telugu Nine Vote Results', 'BBT Nine Voting Online',
    'Bigg Boss Telugu 9 Online Voting', 'BB Telugu 9 Vote Free', 'Bigg Boss Telugu Nine Free Voting',
    
    // Voting Related Keywords
    'Bigg Boss Telugu 9 Hotstar Voting', 'BB Telugu Nine Missed Call Voting', 'Bigg Boss Telugu 9 Google Vote',
    'Bigg Boss Telugu Nine Vote Count', 'BB Telugu 9 Voting Poll Results', 'Bigg Boss Telugu Nine Vote Status',
    'Bigg Boss Telugu 9 Official Voting', 'BB Telugu Nine Voting Process', 'Bigg Boss Telugu 9 Vote Methods',
    
    // Location Based Keywords
    'Bigg Boss Telugu 9 Vote Hyderabad', 'BB Telugu Nine Voting Telangana', 'Bigg Boss Telugu 9 Vote India',
    'Bigg Boss Telugu Nine Vote USA', 'BB Telugu 9 International Voting', 'Bigg Boss Telugu Nine Global Vote',
    
    // Contestant Related Keywords
    'Bigg Boss Telugu 9 Contestants List', 'BB Telugu Nine Elimination', 'Bigg Boss Telugu 9 Nomination',
    'Bigg Boss Telugu Nine Winner Prediction', 'BB Telugu 9 Contestant Voting', 'Bigg Boss Telugu Nine Participants',
    
    // Show Related Keywords
    'Akkineni Nagarjuna Bigg Boss Telugu 9 Host', 'Star Maa Bigg Boss Telugu Nine', 'Disney Plus Hotstar BB Telugu 9',
    'Bigg Boss Telugu Nine Episodes', 'BB Telugu 9 Live Streaming', 'Bigg Boss Telugu Nine Show',
    
    // Long-tail Keywords
    'How to Vote Bigg Boss Telugu 9', 'Bigg Boss Telugu Nine Voting Process 2025',
    'BB Telugu 9 Vote Deadline', 'Bigg Boss Telugu Nine Official Voting',
    'Watch Bigg Boss Telugu 9 Online Free', 'BB Telugu Nine Live Updates',
    
    // Trending Keywords
    'Bigg Boss Telugu 9 Latest Updates', 'BB Telugu Nine Vote Today', 'Bigg Boss Telugu 9 Current Status',
    'BB Telugu Nine This Week Elimination', 'Bigg Boss Telugu 9 Vote Percentage', 'BB Telugu Nine Winner'
  ].join(', '),
  authors: [{ name: 'Bigg Boss Telugu Voting Team' }],
  creator: 'BigBossTeluguVotes',
  publisher: 'BigBossTeluguVotes.in',
  category: 'Entertainment',
  classification: 'Reality TV Show Voting Platform',
  alternates: {
    canonical: 'https://bigbossteluguvotes.in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Bigg Boss Telugu 9 Voting Online | BB Telugu Nine Official Vote',
    title: 'Bigg Boss Telugu 9 Voting Online 2025 | Vote Your Favorite BB Telugu Nine Contestant Free',
    description: 'Vote for Bigg Boss Telugu 9 contestants online through Hotstar app, BB Telugu Nine missed call numbers, and official Bigg Boss Telugu Nine voting platforms. Get BB Telugu 9 live updates, elimination results, and voting guides.',
    url: 'https://bigbossteluguvotes.in',
    images: [
      {
        url: '/images/bigboss.jpg',
        width: 1200,
        height: 630,
        alt: 'Bigg Boss Telugu 9 Official Voting Platform - Vote BB Telugu Nine Online Free',
        type: 'image/jpeg',
      },
      {
        url: '/images/bb-telugu-9-contestants.jpg',
        width: 800,
        height: 600,
        alt: 'Bigg Boss Telugu 9 Contestants - Vote for Your Favorite BB Telugu Nine Participant',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BiggBossTeluguNine',
    creator: '@BBTeluguNineVoting',
    title: 'Bigg Boss Telugu 9 Voting Online 2025 | Vote BB Telugu Nine Free',
    description: 'Vote for BB Telugu Nine contestants through Hotstar, Bigg Boss Telugu 9 missed call voting, and BB Telugu Nine online polls. Live Bigg Boss Telugu 9 updates and elimination results.',
    images: ['/images/bigboss.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#1f2937',
    'msapplication-TileColor': '#1f2937',
    'application-name': 'BB Telugu 9 Voting',
    'mobile-web-app-capable': 'yes',
  },
}

export default function HomePage() {
  const structuredData = generateStructuredData({
    type: 'TVSeries',
    name: 'Bigg Boss Telugu Season 9',
    description: 'Reality TV show where contestants compete for the title in a house with 24/7 surveillance. Hosted by Akkineni Nagarjuna, featuring 15 contestants competing for 100 days.',
    genre: ['Reality TV', 'Entertainment', 'Competition'],
    numberOfSeasons: 9,
    startDate: '2025-09-07',
    endDate: '2025-12-16',
    broadcaster: 'Star Maa',
    streamingPlatform: 'Disney+ Hotstar'
  })

  // Additional Structured Data for Better SEO
  const votingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Bigg Boss Telugu 9 Voting Platform",
    "description": "Official voting platform for Bigg Boss Telugu Season 9. Vote for your favorite contestants through multiple methods.",
    "url": "https://bigbossteluguvotes.in",
    "applicationCategory": "Entertainment",
    "operatingSystem": ["Windows", "macOS", "Android", "iOS"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "15420",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bigg Boss Telugu 9 Voting",
    "url": "https://bigbossteluguvotes.in",
    "logo": "https://bigbossteluguvotes.in/images/bigboss.jpg",
    "description": "The ultimate platform for Bigg Boss Telugu 9 voting, updates, and contestant information.",
    "sameAs": [
      "https://www.facebook.com/BiggBossTeluguVoting",
      "https://twitter.com/BiggBossTelugu",
      "https://www.instagram.com/biggbossteluguinsider"
    ]
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bigbossteluguvotes.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bigg Boss Telugu 9",
        "item": "https://bigbossteluguvotes.in"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Voting",
        "item": "https://bigbossteluguvotes.in/#vote-section"
      }
    ]
  }

  return (
    <>
      {/* Main TV Series Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Voting Application Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(votingStructuredData) }}
      />
      
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="geo.region" content="IN-TS" />
      <meta name="geo.placename" content="Hyderabad, Telangana, India" />
      <meta name="ICBM" content="17.3850, 78.4867" />
      <meta name="language" content="English, Telugu" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />
      <meta name="expires" content="never" />
      <meta name="pragma" content="no-cache" />
      <meta name="cache-control" content="no-cache" />
      
      {/* Social Media Tags */}
      <meta property="fb:app_id" content="your-facebook-app-id" />
      <meta name="twitter:domain" content="bigbossteluguvotes.in" />
      <meta name="twitter:label1" content="Genre" />
      <meta name="twitter:data1" content="Reality TV Show" />
      <meta name="twitter:label2" content="Host" />
      <meta name="twitter:data2" content="Akkineni Nagarjuna" />
      
      {/* App Store Optimization */}
      <meta name="apple-itunes-app" content="app-id=your-app-id, app-argument=https://bigbossteluguvotes.in" />
      <meta name="google-play-app" content="app-id=your.package.name" />
      
      {/* Additional SEO Enhancement */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Hidden SEO H Tags for Voting & Vote Checking - Maximum Coverage */}
      <div className="sr-only">
        <h2>Bigg Boss Telugu 9 Official Voting Platform 2025</h2>
        <h3>BBT9 Vote Online Free Check Voting Results Hyderabad</h3>
        
        {/* Primary Voting Keywords */}
        <h4>How to Vote Bigg Boss Telugu 9 Contestants Online</h4>
        <h4>Check Bigg Boss Telugu 9 Voting Results Live</h4>
        <h4>BB Telugu 9 Vote Count Real Time Updates</h4>
        <h4>Bigg Boss Telugu 9 Voting Poll Results Today</h4>
        <h4>How to Check My Vote Bigg Boss Telugu 9</h4>
        <h4>BBT9 Voting Percentage Contestant Wise</h4>
        <h4>Bigg Boss Telugu 9 Vote Online Disney+ Hotstar</h4>
        <h4>Check Bigg Boss Telugu 9 Elimination Voting</h4>
        <h4>BB Telugu 9 Live Voting Poll Results</h4>
        <h4>How to Vote Multiple Times Bigg Boss Telugu 9</h4>
        
        {/* Voting Platforms & Methods */}
        <h4>Bigg Boss Telugu 9 Voting App Download</h4>
        <h4>Check BBT9 Contestant Vote Count Live</h4>
        <h4>Bigg Boss Telugu 9 SMS Voting Number</h4>
        <h4>Vote Bigg Boss Telugu 9 Missed Call Number</h4>
        <h4>BBT9 Online Voting Website Official</h4>
        <h4>Check Bigg Boss Telugu 9 Voting Trends</h4>
        <h4>How to Vote Bigg Boss Telugu 9 from Mobile</h4>
        <h4>BB Telugu 9 Voting Process Step by Step</h4>
        <h4>Bigg Boss Telugu 9 Free Voting Methods</h4>
        <h4>Check BBT9 Elimination Voting Results</h4>
        
        {/* Vote Verification & Status */}
        <h4>Bigg Boss Telugu 9 Vote Counting Process</h4>
        <h4>How to Check Bigg Boss Telugu 9 Vote Status</h4>
        <h4>BBT9 Voting Deadline Time Today</h4>
        <h4>Bigg Boss Telugu 9 Vote Confirmation SMS</h4>
        <h4>Check BB Telugu 9 Contestant Ranking Votes</h4>
        <h4>How to Vote Bigg Boss Telugu 9 International</h4>
        <h4>BBT9 Voting Rules and Regulations</h4>
        <h4>Bigg Boss Telugu 9 Vote Verification Process</h4>
        <h4>Check BBT9 Weekly Voting Results</h4>
        <h4>How to Cancel Vote Bigg Boss Telugu 9</h4>
        
        {/* Advanced Voting Features */}
        <h4>BB Telugu 9 Voting History Check</h4>
        <h4>Bigg Boss Telugu 9 Vote Limit Per Day</h4>
        <h4>Check BBT9 Contestant Vote Percentage</h4>
        <h4>How to Vote Bigg Boss Telugu 9 WhatsApp</h4>
        <h4>BBT9 Voting Technical Issues Solutions</h4>
        <h4>Bigg Boss Telugu 9 Vote Through Website</h4>
        <h4>Check BB Telugu 9 Real Time Vote Count</h4>
        <h4>How to Vote Bigg Boss Telugu 9 Star MAA</h4>
        <h4>BBT9 Voting Demographics Analysis</h4>
        <h4>Bigg Boss Telugu 9 Vote Manipulation Check</h4>
        
        {/* Long-tail Voting Keywords */}
        <h4>Check BBT9 Voting Statistics Today</h4>
        <h4>How to Vote Bigg Boss Telugu 9 Safely</h4>
        <h4>BB Telugu 9 Voting Platform Comparison</h4>
        <h4>Bigg Boss Telugu 9 Vote Tracking System</h4>
        <h4>Check BBT9 Contestant Vote Share</h4>
        <h4>How to Vote Bigg Boss Telugu 9 Effectively</h4>
        <h4>BBT9 Voting Tips and Tricks</h4>
        <h4>Bigg Boss Telugu 9 Vote Impact Analysis</h4>
        <h4>Check BB Telugu 9 Voting Accuracy</h4>
        <h4>How to Vote Bigg Boss Telugu 9 Fast</h4>
        
        {/* Regional & Platform Specific */}
        <h4>Bigg Boss Telugu 9 Voting Hyderabad Telangana</h4>
        <h4>BBT9 Vote Online Free No Registration</h4>
        <h4>Star MAA Bigg Boss Telugu 9 Official Vote</h4>
        <h4>Disney+ Hotstar BBT9 Voting Process</h4>
        <h4>How to Vote BBT9 from Overseas</h4>
        <h4>Bigg Boss Telugu 9 NRI Voting Options</h4>
        <h4>BBT9 Voting for Android Users</h4>
        <h4>Bigg Boss Telugu 9 iPhone Voting App</h4>
        <h4>How to Vote BBT9 Without Internet</h4>
        <h4>Bigg Boss Telugu 9 Offline Voting Methods</h4>
        
        {/* Voting Analytics & Insights */}
        <h4>BBT9 Most Voted Contestant Today</h4>
        <h4>Bigg Boss Telugu 9 Least Votes Contestant</h4>
        <h4>Check BBT9 Voting Leader Board</h4>
        <h4>BB Telugu 9 Vote Distribution Analysis</h4>
        <h4>Bigg Boss Telugu 9 Voting Patterns Study</h4>
        <h4>BBT9 Regional Voting Preferences</h4>
        <h4>How to Predict BBT9 Elimination Voting</h4>
        <h4>Bigg Boss Telugu 9 Vote Swing Analysis</h4>
        <h4>BBT9 Age Group Voting Demographics</h4>
        <h4>Bigg Boss Telugu 9 Gender Voting Trends</h4>
        
        {/* Contestant Specific Voting */}
        <h4>How to Vote Individual BBT9 Contestants</h4>
        <h4>Bigg Boss Telugu 9 Contestant Vote Comparison</h4>
        <h4>BBT9 Strongest Contestant Voting Wise</h4>
        <h4>Check Weakest BBT9 Contestant Votes</h4>
        <h4>Bigg Boss Telugu 9 Dark Horse Voting</h4>
        <h4>BBT9 Favorite Contestant Voting Poll</h4>
        <h4>How to Vote BBT9 Underdog Contestants</h4>
        <h4>Bigg Boss Telugu 9 Celebrity Voting Influence</h4>
        <h4>BBT9 Social Media Voting Campaigns</h4>
        <h4>Check BBT9 Contestant Fan Base Votes</h4>
        
        {/* Emergency & Troubleshooting */}
        <h4>BBT9 Voting Not Working Solutions</h4>
        <h4>How to Fix Bigg Boss Telugu 9 Vote Error</h4>
        <h4>BBT9 Voting App Crash Solutions</h4>
        <h4>Bigg Boss Telugu 9 Vote Not Counted</h4>
        <h4>How to Report BBT9 Voting Issues</h4>
        <h4>BB Telugu 9 Voting Server Down Fix</h4>
        <h4>Bigg Boss Telugu 9 Double Vote Problem</h4>
        <h4>BBT9 Voting Payment Issues Help</h4>
        <h4>How to Get BBT9 Vote Refund</h4>
        <h4>Bigg Boss Telugu 9 Voting Customer Support</h4>
        
        {/* Future & Predictions */}
        <h4>BBT9 Next Elimination Voting Prediction</h4>
        <h4>Bigg Boss Telugu 9 Finale Voting Strategy</h4>
        <h4>How to Vote BBT9 Winner Prediction</h4>
        <h4>BB Telugu 9 Top 5 Voting Analysis</h4>
        <h4>Bigg Boss Telugu 9 Semi Final Voting</h4>
        <h4>BBT9 Grand Finale Vote Count</h4>
        <h4>How to Vote BBT9 Champion</h4>
        <h4>Bigg Boss Telugu 9 Winner Vote Share</h4>
        <h4>BBT9 Runner Up Voting Chances</h4>
        <h4>Check BBT9 Title Winner Voting Trends</h4>
      </div>
      
      <SEOEnhancer />
      <Hero />
      <ContentSection />
      <PosterSection />
      <VotingSection />
      <ContestantGrid />
      <HowToVote />
      <LiveUpdates />
      <NewsSection />
      <FAQSection />
      <SitemapSection />
    </>
  )
}
