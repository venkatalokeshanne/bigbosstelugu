// Static data client — replaces the former Sanity CMS integration.
// All content is served from local JSON files under src/data.
import contestantsData from '../data/contestants.json'
import newsData from '../data/news.json'
import faqsData from '../data/faqs.json'
import liveUpdatesData from '../data/live-updates.json'
import votingSettingsData from '../data/voting-settings.json'

// Chainable stub matching the subset of the Sanity image builder API used
// across the app (`.width().height().fit().url()`). Images are already
// plain local paths (e.g. "/images/contestants/foo.jpg"), so this simply
// returns that path unchanged.
export function urlFor(source) {
  const url = typeof source === 'string' ? source : (source?.url || source?.imageUrl || source?.asset?.url || '')
  const builder = {
    width: () => builder,
    height: () => builder,
    fit: () => builder,
    url: () => url,
  }
  return builder
}

export const formatTimeAgo = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now - date) / 1000)

  if (diffInSeconds < 60) return 'Just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
  return `${Math.floor(diffInSeconds / 86400)}d ago`
}

export const fetchContestants = async () => {
  return contestantsData.contestants
}

export const fetchActiveContestants = async () => {
  return contestantsData.contestants.filter(c => c.status === 'active')
}

export const fetchContestant = async (slug) => {
  return contestantsData.contestants.find(c => c.slug === slug) || null
}

export const fetchContestantBySlug = fetchContestant

export const fetchNews = async () => {
  return newsData
}

export const fetchFeaturedNews = async () => {
  return newsData.filter(article => article.isFeatured)
}

export const fetchNewsArticle = async (slug) => {
  return newsData.find(article => article.slug === slug) || null
}

export const fetchRelatedNews = async (category, excludeId) => {
  return newsData
    .filter(article => article.category === category && article._id !== excludeId)
    .slice(0, 3)
}

export const fetchLiveUpdates = async () => {
  return liveUpdatesData
}

export const fetchBreakingUpdates = async () => {
  return liveUpdatesData.filter(update => update.priority === 'breaking')
}

export const fetchFAQs = async () => {
  return faqsData
}

export const fetchActiveVotingSettings = async () => {
  return votingSettingsData.votingSettings || {
    eliminationWeek: 'Week 1 Elimination',
    votingQuestion: 'Who should be saved from elimination this week?',
    strawpollId: 'ajnE1Xj40nW',
    votingStatus: 'live'
  }
}
