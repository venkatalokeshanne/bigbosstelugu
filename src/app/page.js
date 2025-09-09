import Hero from '../components/Hero'
import VotingSection from '../components/VotingSection'
import ContestantGrid from '../components/ContestantGrid'
import { generateStructuredData } from '../utils/seo'

// Dynamic imports for better performance
import dynamic from 'next/dynamic'

const HowToVote = dynamic(() => import('../components/HowToVote'), {
  loading: () => <div className="min-h-[200px] bg-gray-900/50 animate-pulse rounded-lg"></div>
})
const LiveUpdates = dynamic(() => import('../components/LiveUpdates'), {
  loading: () => <div className="min-h-[300px] bg-gray-900/50 animate-pulse rounded-lg"></div>
})
const FAQSection = dynamic(() => import('../components/FAQSection'), {
  loading: () => <div className="min-h-[400px] bg-gray-900/50 animate-pulse rounded-lg"></div>
})
const NewsSection = dynamic(() => import('../components/NewsSection'), {
  loading: () => <div className="min-h-[500px] bg-gray-900/50 animate-pulse rounded-lg"></div>
})

export const metadata = {
  title: 'Bigg Boss Telugu 9 Voting Online 2025 | Vote for Your Favorite Contestant',
  description: 'Vote for your favorite Bigg Boss Telugu Season 9 contestants online. Live voting polls, eviction predictions, latest updates and contestant profiles. Official BB Telugu 9 voting guide.',
  keywords: 'Bigg Boss Telugu 9 Voting, BB Telugu 9 Vote Online, Bigg Boss Telugu Season 9, Telugu Reality Show Voting, Hotstar Voting, StrawPoll Voting, BB Telugu 9 Poll Results',
  alternates: {
    canonical: 'https://bigbossteluguvotes.in',
  },
  openGraph: {
    title: 'Bigg Boss Telugu 9 Voting Online 2025 | Vote Now',
    description: 'Vote for your favorite Bigg Boss Telugu Season 9 contestants online. Live voting polls and latest updates.',
    url: 'https://bigbossteluguvotes.in',
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
