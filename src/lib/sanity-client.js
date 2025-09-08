import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration
export const client = createClient({
  projectId: 'p6ro2n3d',
  dataset: 'production', 
  useCdn: true,
  apiVersion: '2023-10-01',
  token: 'skNCx8hyjpHdJA0VhetT1tq3kslzVm7HHip7LvzpKzrla4ibwJfZUVsnsse3rrgRuce7koLOtfuGeZ7RTwSdjvHdtCu1tRHPEVI7De7eHFB1j6D6E24xHKWQqXtpoPabJbRdifluUALTeXKGj5lPc4y5IntAg72pa4DlaJuon2aVnQFJx3WA',
})

// Initialize the image URL builder
const builder = imageUrlBuilder(client)

// Helper function to generate image URLs
export function urlFor(source) {
  return builder.image(source)
}


// GROQ queries for different content types
export const queries = {
  // Get all contestants
  contestants: `*[_type == "contestant" && !(_id in path("drafts.**"))] | order(currentVoteCount desc) {
    _id,
    name,
    "slug": slug.current,
    age,
    profession,
    imageUrl,
    biography,
    hometown,
    status,
    currentVoteCount,
    entryDate,
    eliminationDate,
    socialMedia
  }`,

  // Get active contestants only
  activeContestants: `*[_type == "contestant" && status == "active" && !(_id in path("drafts.**"))] | order(currentVoteCount desc) {
    _id,
    name,
    "slug": slug.current,
    age,
    profession,
    imageUrl,
    biography,
    hometown,
    status,
    currentVoteCount,
    entryDate,
    socialMedia
  }`,

  // Get single contestant by slug
  contestant: `*[_type == "contestant" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    name,
    "slug": slug.current,
    age,
    profession,
    imageUrl,
    biography,
    hometown,
    status,
    currentVoteCount,
    entryDate,
    eliminationDate,
    socialMedia
  }`,

  // Get all news articles
  news: `*[_type == "news" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    category,
    author,
    publishedAt,
    isPublished,
    isFeatured,
    featuredImage
  }`,

  // Get featured news
  featuredNews: `*[_type == "news" && isFeatured == true && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    category,
    author,
    featuredImage
  }`,

  // Get single news article by slug
  newsArticle: `*[_type == "news" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    category,
    author,
    publishedAt,
    isPublished,
    isFeatured,
    featuredImage,
    tags
  }`,

  // Get single news article by slug
  newsArticle: `*[_type == "news" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    category,
    author,
    publishedAt,
    modifiedAt,
    isPublished,
    isFeatured,
    featuredImage,
    tags
  }`,

  // Get live updates
  liveUpdates: `*[_type == "liveUpdate" && !(_id in path("drafts.**"))] | order(timestamp desc) {
    _id,
    title,
    description,
    updateType,
    isLive,
    priority,
    timestamp
  }`,

  // Get FAQs
  faqs: `*[_type == "faq" && isActive == true && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    question,
    answer,
    category,
    order
  }`,

  // Get breaking updates
  breakingUpdates: `*[_type == "liveUpdate" && priority == "breaking" && !(_id in path("drafts.**"))] | order(timestamp desc) {
    _id,
    title,
    description,
    updateType,
    isLive,
    priority,
    timestamp
  }`
}

// Helper functions to format time
export const formatTimeAgo = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now - date) / 1000)
  
  if (diffInSeconds < 60) return 'Just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
  return `${Math.floor(diffInSeconds / 86400)}d ago`
}

// Fetch functions
export const fetchContestants = async () => {
  try {
    const contestants = await client.fetch(queries.contestants)
    return contestants
  } catch (error) {
    console.error('Error fetching contestants:', error)
    return []
  }
}

export const fetchActiveContestants = async () => {
  try {
    const contestants = await client.fetch(queries.activeContestants)
    return contestants
  } catch (error) {
    console.error('Error fetching active contestants:', error)
    return []
  }
}

export const fetchContestant = async (slug) => {
  try {
    const contestant = await client.fetch(queries.contestant, { slug })
    return contestant
  } catch (error) {
    console.error('Error fetching contestant:', error)
    return null
  }
}

export const fetchContestantBySlug = fetchContestant

export const fetchNews = async () => {
  try {
    const news = await client.fetch(queries.news)
    return news
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}

export const fetchFeaturedNews = async () => {
  try {
    const news = await client.fetch(queries.featuredNews)
    return news
  } catch (error) {
    console.error('Error fetching featured news:', error)
    return []
  }
}

export const fetchNewsArticle = async (slug) => {
  try {
    const article = await client.fetch(queries.newsArticle, { slug })
    return article
  } catch (error) {
    console.error('Error fetching news article:', error)
    return null
  }
}

export const fetchLiveUpdates = async () => {
  try {
    const updates = await client.fetch(queries.liveUpdates)
    return updates
  } catch (error) {
    console.error('Error fetching live updates:', error)
    return []
  }
}

export const fetchBreakingUpdates = async () => {
  try {
    const updates = await client.fetch(queries.breakingUpdates)
    return updates
  } catch (error) {
    console.error('Error fetching breaking updates:', error)
    return []
  }
}

export const fetchFAQs = async () => {
  try {
    const faqs = await client.fetch(queries.faqs)
    return faqs
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    return []
  }
}

export const fetchRelatedNews = async (category, excludeId) => {
  try {
    const relatedNews = await client.fetch(
      `*[_type == "news" && category == $category && _id != $excludeId && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...3] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        category,
        author,
        featuredImage
      }`,
      { category, excludeId }
    )
    return relatedNews
  } catch (error) {
    console.error('Error fetching related news:', error)
    return []
  }
}
