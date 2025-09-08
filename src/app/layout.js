import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyVoteButton from '../components/StickyVoteButton'
import GoogleAnalytics from '../components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'], 
  variable: '--font-poppins' 
})

export const metadata = {
  metadataBase: new URL('https://bigbosstelugu9voting.com'),
  title: 'Bigg Boss Telugu 9 Voting Online 2025 | Vote for Your Favorite Contestant',
  description: 'Vote for your favorite Bigg Boss Telugu Season 9 contestants online. Live voting polls, eviction predictions, latest updates and contestant profiles. Official BB Telugu 9 voting guide.',
  keywords: 'Bigg Boss Telugu 9 Voting, BB Telugu 9 Vote Online, Bigg Boss Telugu Season 9, Telugu Reality Show Voting, Hotstar Voting, StrawPoll Voting',
  author: 'Bigg Boss Telugu 9 Voting',
  robots: 'index, follow',
  openGraph: {
    title: 'Bigg Boss Telugu 9 Voting Online 2025 | Vote Now',
    description: 'Vote for your favorite Bigg Boss Telugu Season 9 contestants online. Live voting polls, eviction predictions, and latest updates.',
    url: 'https://bigbosstelugu9voting.com',
    siteName: 'Bigg Boss Telugu 9 Voting',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bigg Boss Telugu 9 Voting Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bigg Boss Telugu 9 Voting Online 2025',
    description: 'Vote for your favorite Bigg Boss Telugu Season 9 contestants online.',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  alternates: {
    canonical: 'https://bigbosstelugu9voting.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script async src="https://cdn.strawpoll.com/dist/widgets.js" charSet="utf-8"></script>
        <GoogleAnalytics />
      </head>
      <body className="min-h-screen bg-gray-900 dark:bg-gray-900 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyVoteButton />
      </body>
    </html>
  )
}
