import Hero from '../components/Hero'
import VotingSection from '../components/VotingSection'
import ContestantGrid from '../components/ContestantGrid'
import HowToVote from '../components/HowToVote'
import LiveUpdates from '../components/LiveUpdates'
import FAQSection from '../components/FAQSection'
import NewsSection from '../components/NewsSection'
import { generateStructuredData } from '../utils/seo'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Voting Online 2025 | Vote for Your Favorite Contestant',
  description: 'Vote for your favorite Bigg Boss Telugu Season 9 contestants online. Live voting polls, eviction predictions, latest updates and contestant profiles. Official BB Telugu 9 voting guide.',
  keywords: 'Bigg Boss Telugu 9 Voting, BB Telugu 9 Vote Online, Bigg Boss Telugu Season 9, Telugu Reality Show Voting, Hotstar Voting, StrawPoll Voting, BB Telugu 9 Poll Results',
  alternates: {
    canonical: 'https://bigbosstelugu9voting.com',
  },
  openGraph: {
    title: 'Bigg Boss Telugu 9 Voting Online 2025 | Vote Now',
    description: 'Vote for your favorite Bigg Boss Telugu Season 9 contestants online. Live voting polls and latest updates.',
    url: 'https://bigbosstelugu9voting.com',
    type: 'website',
  },
}

export default function HomePage() {
  const structuredData = generateStructuredData({
    type: 'TVSeries',
    name: 'Bigg Boss Telugu Season 9',
    description: 'Reality TV show where contestants compete for the title in a house with 24/7 surveillance',
    genre: 'Reality TV',
    numberOfSeasons: 9,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <VotingSection />
      <ContestantGrid />
      <HowToVote />
      <LiveUpdates />
      <NewsSection />
      <FAQSection />
    </>
  )
}
