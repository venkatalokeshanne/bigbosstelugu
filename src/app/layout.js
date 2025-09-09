import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyVoteButton from '../components/StickyVoteButton'
import GoogleAnalytics from '../components/GoogleAnalytics'
import GoogleTagManager from '../components/GoogleTagManager'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'], 
  variable: '--font-poppins' 
})

// Viewport configuration (separate from metadata as per Next.js 14+ requirement)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata = {
  metadataBase: new URL('https://bigbossteluguvotes.in'),
  title: {
    default: 'Bigg Boss Telugu 9 Voting Online 2025 | Vote for Your Favorite Contestant',
    template: '%s | Bigg Boss Telugu 9 Voting'
  },
  description: 'Vote for your favorite Bigg Boss Telugu Season 9 contestants online. Live voting polls, eviction predictions, latest updates and contestant profiles. Official BB Telugu 9 voting guide.',
  keywords: [
    'Bigg Boss Telugu 9 Voting',
    'BB Telugu 9 Vote Online', 
    'Bigg Boss Telugu Season 9',
    'Telugu Reality Show Voting',
    'Hotstar Voting',
    'StrawPoll Voting',
    'BB Telugu 9 Contestants',
    'Bigg Boss Telugu 9 Elimination',
    'BB Telugu 9 Latest Updates',
    'Nagarjuna Bigg Boss Telugu',
    'Telugu Bigg Boss Vote',
    'BB Telugu 9 Winner Prediction',
    'Bigg Boss Telugu 9 Live Updates',
    'BB Telugu Season 9 Voting Poll'
  ],
  authors: [{ name: 'Bigg Boss Telugu 9 Team' }],
  creator: 'Bigg Boss Telugu 9 Voting',
  publisher: 'Bigg Boss Telugu 9 Voting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Entertainment',
  classification: 'Reality TV Show Voting',
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
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bigbossteluguvotes.in',
    siteName: 'Bigg Boss Telugu 9 Voting',
    title: 'Bigg Boss Telugu 9 Voting Online 2025 | Vote Now',
    description: 'Vote for your favorite Bigg Boss Telugu Season 9 contestants online. Live voting polls, eviction predictions, and latest updates.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bigg Boss Telugu 9 Voting Online - Vote for Your Favorite Contestant',
        type: 'image/jpeg',
      },
      {
        url: '/logo.png',
        width: 400,
        height: 400,
        alt: 'Bigg Boss Telugu 9 Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BigBossTeluguVoting',
    creator: '@BigBossTeluguVoting',
    title: 'Bigg Boss Telugu 9 Voting Online 2025',
    description: 'Vote for your favorite Bigg Boss Telugu Season 9 contestants online. Live polls, updates & predictions.',
    images: {
      url: '/images/og-image.jpg',
      alt: 'Bigg Boss Telugu 9 Voting Online',
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  alternates: {
    canonical: 'https://bigbossteluguvotes.in',
    languages: {
      'en-US': 'https://bigbossteluguvotes.in',
      'te-IN': 'https://bigbossteluguvotes.in/te',
    },
  },
  other: {
    'google-site-verification': 'your-google-site-verification-code',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'application-name': 'BB Telugu 9 Voting',
    'apple-mobile-web-app-title': 'BB Telugu 9 Voting',
    'theme-color': '#dc2626',
    'msapplication-TileColor': '#dc2626',
    'msapplication-navbutton-color': '#dc2626',
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Website",
        "@id": "https://bigbossteluguvotes.in/#website",
        "url": "https://bigbossteluguvotes.in/",
        "name": "Bigg Boss Telugu 9 Voting",
        "alternateName": "BBT9 Voting",
        "description": "Official fan website for Bigg Boss Telugu Season 9 voting, contestant updates, and latest news",
        "publisher": {
          "@id": "https://bigbossteluguvotes.in/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://bigbossteluguvotes.in/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": ["te-IN", "en-US"],
        "isAccessibleForFree": true,
        "copyrightYear": 2024,
        "genre": "Reality TV Voting Platform",
        "sameAs": [
          "https://www.hotstar.com/in/shows/bigg-boss-telugu",
          "https://twitter.com/StarMaa",
          "https://www.facebook.com/StarMaa"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://bigbossteluguvotes.in/#organization",
        "name": "Bigg Boss Telugu 9 Voting",
        "url": "https://bigbossteluguvotes.in/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://bigbossteluguvotes.in/#/schema/logo",
          "url": "https://bigbossteluguvotes.in/logo.png",
          "contentUrl": "https://bigbossteluguvotes.in/logo.png",
          "width": 512,
          "height": 512,
          "caption": "Bigg Boss Telugu 9 Voting"
        },
        "image": {
          "@id": "https://bigbossteluguvotes.in/#/schema/logo"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["Telugu", "English", "Hindi"]
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "knowsAbout": [
          "Reality TV",
          "Entertainment", 
          "Telugu Television",
          "Voting Systems",
          "Bigg Boss Telugu"
        ],
        "sameAs": [
          "https://www.hotstar.com/in/shows/bigg-boss-telugu",
          "https://twitter.com/StarMaa",
          "https://www.facebook.com/StarMaa",
          "https://www.instagram.com/starmaa"
        ]
      },
      {
        "@type": "TVSeries",
        "name": "Bigg Boss Telugu Season 9",
        "alternateName": ["BB Telugu 9", "BBT9", "Bigg Boss Telugu 9"],
        "description": "Reality TV show where contestants compete for the title in a house with 24/7 surveillance. Hosted by Nagarjuna Akkineni.",
        "genre": ["Reality TV", "Game Show", "Entertainment"],
        "numberOfSeasons": 9,
        "startDate": "2024-09-01",
        "inLanguage": ["te-IN", "en-US"],
        "contentRating": "TV-14",
        "countryOfOrigin": {
          "@type": "Country",
          "name": "India"
        },
        "actor": {
          "@type": "Person",
          "name": "Nagarjuna Akkineni",
          "jobTitle": "Host"
        },
        "creator": {
          "@type": "Organization",
          "name": "Endemol Shine India"
        },
        "productionCompany": {
          "@type": "Organization",
          "name": "Endemol Shine India"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "bestRating": "5",
          "ratingCount": "15000"
        },
        "sameAs": [
          "https://www.hotstar.com/in/shows/bigg-boss-telugu",
          "https://en.wikipedia.org/wiki/Bigg_Boss_Telugu"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How to vote in Bigg Boss Telugu 9?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can vote for your favorite Bigg Boss Telugu 9 contestants through Disney+ Hotstar app or by visiting our official voting website. Each user gets limited votes per day."
            }
          },
          {
            "@type": "Question", 
            "name": "Is Bigg Boss Telugu 9 voting free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, voting for Bigg Boss Telugu 9 is completely free. You can vote through the Disney+ Hotstar app or official voting platforms without any charges."
            }
          },
          {
            "@type": "Question",
            "name": "When does voting close each week?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Voting for Bigg Boss Telugu 9 typically closes on Friday nights before the weekend episodes. Exact timings are announced during the show."
            }
          },
          {
            "@type": "Question",
            "name": "Who is the host of Bigg Boss Telugu 9?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nagarjuna Akkineni is the host of Bigg Boss Telugu 9, continuing his role from previous seasons of the popular reality show."
            }
          }
        ]
      }
    ]
  }

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Theme and Mobile Optimization */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-navbutton-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-title" content="BB Telugu 9 Voting" />
        <meta name="application-name" content="BB Telugu 9 Voting" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="target" content="_self" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        <meta name="subject" content="Bigg Boss Telugu 9 Voting Platform" />
        <meta name="summary" content="Official voting platform for Bigg Boss Telugu 9 reality show" />
        <meta name="topic" content="Reality TV Voting" />
        <meta name="identifier-URL" content="https://bigbossteluguvotes.in" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Entertainment" />
        <meta name="resource-type" content="document" />
        <meta name="abstract" content="Vote for your favorite Bigg Boss Telugu 9 contestants online with official voting platform" />
        <meta name="language" content="Telugu, English" />
        <meta name="owner" content="Bigg Boss Telugu 9 Voting Team" />
        <meta name="url" content="https://bigbossteluguvotes.in" />
        <meta name="og:locality" content="Hyderabad" />
        <meta name="og:region" content="Telangana" />
        <meta name="og:country-name" content="India" />
        
        {/* Performance and Caching */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta httpEquiv="Expires" content={new Date(Date.now() + 31536000000).toUTCString()} />
        
        {/* Preconnect and DNS Prefetch for Performance - Reduce Unused JS */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://strawpoll.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        
        {/* Preload Critical Resources */}
        <link 
          rel="modulepreload" 
          href="/_next/static/chunks/pages/_app.js" 
          as="script" 
          crossOrigin="anonymous" 
        />
        
        {/* Resource Hints for Third-party Scripts */}
        <link rel="prefetch" href="https://strawpoll.com/dist/main.css?v=255" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.strawpoll.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Prefetch Non-Critical Resources */}
        <link rel="prefetch" href="/manifest.json" />
        
        {/* Scripts */}
        <script async src="https://cdn.strawpoll.com/dist/widgets.js" charSet="utf-8"></script>
        <GoogleTagManager />
        <GoogleAnalytics />
        <Analytics />
      </head>
      <body className="min-h-screen bg-gray-900 dark:bg-gray-900 text-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MX2WVXWS"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyVoteButton />
      </body>
    </html>
  )
}
