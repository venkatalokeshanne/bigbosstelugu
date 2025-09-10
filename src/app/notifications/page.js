import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Notifications | BB Telugu Season 9 Alerts and Updates',
  description: 'Subscribe to Bigg Boss Telugu 9 notifications for voting reminders, episode alerts, elimination updates, and important announcements for BB Telugu Season 9.',
  keywords: ['Bigg Boss Telugu 9 notifications', 'BB Telugu alerts', 'voting reminders']
}

export default function Notifications() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <SEOEnhancer title="Bigg Boss Telugu 9 Notifications" description="Notification settings for BB Telugu 9 updates" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Notifications & Alerts</h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
          <p className="text-gray-300">Notification settings and alerts for episodes, voting, and important updates will be available here.</p>
        </div>
        <div className="text-center">
          <Link href="/" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full">Back to Voting</Link>
        </div>
      </div>
    </div>
  )
}
