import { getOptimizedContestants } from '../lib/optimized-contestants'

export default async function sitemap() {
  const baseUrl = 'https://bigbossteluguvotes.in'
  
  // Get all contestants for dynamic routes
  let contestants = []
  try {
    contestants = await getOptimizedContestants()
  } catch (error) {
    console.error('Error fetching contestants for sitemap:', error)
  }

  // Static pages with optimized priorities and frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contestants`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-vote`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/voting-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]

  // Dynamic contestant pages
  const contestantPages = contestants.map((contestant) => ({
    url: `${baseUrl}/contestants/${contestant.slug || contestant._id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }))

  // News articles (enhanced with more realistic content)
  const newsArticles = [
    'bigg-boss-telugu-9-grand-launch',
    'week-1-nominations-revealed',
    'luxury-budget-task-highlights',
    'elimination-predictions-week-3',
    'contestants-latest-updates',
    'nagarjuna-host-special-moments',
    'secret-room-twist-unveiled',
    'voting-trends-analysis',
    'contestant-profiles-complete-guide',
    'eviction-results-live-updates'
  ]

  const newsPages = newsArticles.map((slug) => ({
    url: `${baseUrl}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticPages, ...contestantPages, ...newsPages]
}
