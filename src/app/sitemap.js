export default function sitemap() {
  const baseUrl = 'https://bigbosstelugu9voting.com'

  // Static pages
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
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Contestant pages
  const contestants = [
    'abhishek', 'priya', 'ravi', 'sneha', 'kiran', 
    'meera', 'arjun', 'kavya'
  ]

  const contestantPages = contestants.map((contestant) => ({
    url: `${baseUrl}/contestants/${contestant}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // News pages
  const newsArticles = [
    'week-3-eviction-results',
    'luxury-budget-task-controversy', 
    'secret-room-twist-revealed'
  ]

  const newsPages = newsArticles.map((slug) => ({
    url: `${baseUrl}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }))

  return [...staticPages, ...contestantPages, ...newsPages]
}
