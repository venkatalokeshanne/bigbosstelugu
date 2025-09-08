/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bigbosstelugu9voting.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  transform: async (config, path) => {
    // Custom priority and changefreq based on page type
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'hourly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }

    if (path.startsWith('/contestants/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    if (path.startsWith('/news/')) {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
  additionalPaths: async (config) => {
    const result = []
    
    // Add contestant pages
    const contestants = [
      'abhishek', 'priya', 'ravi', 'sneha', 'kiran', 
      'meera', 'arjun', 'kavya'
    ]
    
    contestants.forEach((contestant) => {
      result.push({
        loc: `/contestants/${contestant}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      })
    })

    // Add news pages
    const newsArticles = [
      'week-3-eviction-results',
      'luxury-budget-task-controversy', 
      'secret-room-twist-revealed'
    ]
    
    newsArticles.forEach((slug) => {
      result.push({
        loc: `/news/${slug}`,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      })
    })

    return result
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://bigbosstelugu9voting.com/sitemap.xml',
    ],
  },
}
