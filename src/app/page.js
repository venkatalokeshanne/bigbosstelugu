import Hero from '../components/Hero'
import VotingSection from '../components/VotingSection'
import CommentsSection from '../components/CommentsSection'
import VotingStatsCTA from '../components/VotingStatsCTA'
import ContestantGrid from '../components/ContestantGrid'
import PosterSection from '../components/PosterSection'
import ContentSection from '../components/ContentSection'
import SEOEnhancer from '../components/SEOEnhancer'
import SitemapSection from '../components/SitemapSection'
import ExploreMoreSection from '../components/ExploreMoreSection'
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
  title: 'Bigg Boss Telugu 10 Voting Online 2026 | Vote Bigg Boss Telugu 10 Contestants Free | BB Telugu 10',
  description: 'Bigg Boss Telugu 10 Voting Online 2026: Vote for your favorite Bigg Boss Telugu 10 contestants through Hotstar app, Bigg Boss Telugu 10 missed call voting, and Bigg Boss Telugu 10 online polls. Get latest Bigg Boss Telugu 10 updates, BB Telugu 10 elimination results, Bigg Boss Telugu 10 contestant profiles, and official BB Telugu 10 voting procedures.',
  keywords: [
    // Primary Keywords
    'Bigg Boss Telugu 10 Voting', 'BB Telugu 10 Vote Online', 'Bigg Boss Telugu Season 10 Voting',
    'Star Maa Bigg Boss Telugu 10 Vote', 'Bigg Boss Telugu 10 Vote Results', 'BBT10 Voting Online',
    'Bigg Boss Telugu 10 Online Voting', 'BB Telugu 10 Vote Free', 'Bigg Boss Telugu 10 Free Voting',
    
    // Voting Related Keywords
    'Bigg Boss Telugu 10 Hotstar Voting', 'BB Telugu 10 Missed Call Voting', 'Bigg Boss Telugu 10 Google Vote',
    'Bigg Boss Telugu 10 Vote Count', 'BB Telugu 10 Voting Poll Results', 'Bigg Boss Telugu 10 Vote Status',
    'Bigg Boss Telugu 10 Official Voting', 'BB Telugu 10 Voting Process', 'Bigg Boss Telugu 10 Vote Methods',
    
    // Location Based Keywords
    'Bigg Boss Telugu 10 Vote Hyderabad', 'BB Telugu 10 Voting Telangana', 'Bigg Boss Telugu 10 Vote India',
    'Bigg Boss Telugu 10 Vote USA', 'BB Telugu 10 International Voting', 'Bigg Boss Telugu 10 Global Vote',
    
    // Contestant Related Keywords
    'Bigg Boss Telugu 10 Contestants List', 'BB Telugu 10 Elimination', 'Bigg Boss Telugu 10 Nomination',
    'Bigg Boss Telugu 10 Winner Prediction', 'BB Telugu 10 Contestant Voting', 'Bigg Boss Telugu 10 Participants',
    
    // Show Related Keywords
    'Akkineni Nagarjuna Bigg Boss Telugu 10 Host', 'Star Maa Bigg Boss Telugu 10', 'Disney Plus Hotstar BB Telugu 10',
    'Bigg Boss Telugu 10 Episodes', 'BB Telugu 10 Live Streaming', 'Bigg Boss Telugu 10 Show',
    
    // Long-tail Keywords
    'How to Vote Bigg Boss Telugu 10', 'Bigg Boss Telugu 10 Voting Process 2026',
    'BB Telugu 10 Vote Deadline', 'Bigg Boss Telugu 10 Official Voting',
    'Watch Bigg Boss Telugu 10 Online Free', 'BB Telugu 10 Live Updates',
    
    // Trending Keywords
    'Bigg Boss Telugu 10 Latest Updates', 'BB Telugu 10 Vote Today', 'Bigg Boss Telugu 10 Current Status',
    'BB Telugu 10 This Week Elimination', 'Bigg Boss Telugu 10 Vote Percentage', 'BB Telugu 10 Winner'
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
    siteName: 'Bigg Boss Telugu 10 Voting Online | BB Telugu 10 Official Vote',
    title: 'Bigg Boss Telugu 10 Voting Online 2026 | Vote Your Favorite BB Telugu 10 Contestant Free',
    description: 'Vote for Bigg Boss Telugu 10 contestants online through Hotstar app, BB Telugu 10 missed call numbers, and official Bigg Boss Telugu 10 voting platforms. Get BB Telugu 10 live updates, elimination results, and voting guides.',
    url: 'https://bigbossteluguvotes.in',
    images: [
      {
        url: '/images/bigboss.jpg',
        width: 1200,
        height: 630,
        alt: 'Bigg Boss Telugu 10 Official Voting Platform - Vote BB Telugu 10 Online Free',
        type: 'image/jpeg',
      },
      {
        url: '/images/bb-telugu-9-contestants.jpg',
        width: 800,
        height: 600,
        alt: 'Bigg Boss Telugu 10 Contestants - Vote for Your Favorite BB Telugu 10 Participant',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BiggBossTelugu10',
    creator: '@BBTelugu10Voting',
    title: 'Bigg Boss Telugu 10 Voting Online 2026 | Vote BB Telugu 10 Free',
    description: 'Vote for BB Telugu 10 contestants through Hotstar, Bigg Boss Telugu 10 missed call voting, and BB Telugu 10 online polls. Live Bigg Boss Telugu 10 updates and elimination results.',
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
    'application-name': 'BB Telugu 10 Voting',
    'mobile-web-app-capable': 'yes',
  },
}

export default function HomePage() {
  const structuredData = generateStructuredData({
    type: 'TVSeries',
    name: 'Bigg Boss Telugu Season 10',
    description: 'Reality TV show where contestants compete for the title in a house with 24/7 surveillance. Hosted by Akkineni Nagarjuna, featuring 15 contestants competing for 100 days.',
    genre: ['Reality TV', 'Entertainment', 'Competition'],
    numberOfSeasons: 10,
    startDate: '2026-09-07',
    endDate: '2026-12-16',
    broadcaster: 'Star Maa',
    streamingPlatform: 'Disney+ Hotstar'
  })

  // Additional Structured Data for Better SEO
  const votingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Bigg Boss Telugu 10 Voting Platform",
    "description": "Official voting platform for Bigg Boss Telugu Season 10. Vote for your favorite contestants through multiple methods.",
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
    "name": "Bigg Boss Telugu 10 Voting",
    "url": "https://bigbossteluguvotes.in",
    "logo": "https://bigbossteluguvotes.in/images/bigboss.jpg",
    "description": "The ultimate platform for Bigg Boss Telugu 10 voting, updates, and contestant information.",
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
        "name": "Bigg Boss Telugu 10",
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
      <meta name="twitter:domain" content="bigbossteluguvotes.in" />
      <meta name="twitter:label1" content="Genre" />
      <meta name="twitter:data1" content="Reality TV Show" />
      <meta name="twitter:label2" content="Host" />
      <meta name="twitter:data2" content="Akkineni Nagarjuna" />
      
      {/* Additional SEO Enhancement */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      
      <SEOEnhancer />
      <Hero />
      <ContentSection />
      <PosterSection />
      <VotingSection />
      <CommentsSection />
      <VotingStatsCTA />
      <ContestantGrid />
      <HowToVote />
      <LiveUpdates />
      <NewsSection />
      <FAQSection />
      <ExploreMoreSection />
      <SitemapSection />
    </>
  )
}
