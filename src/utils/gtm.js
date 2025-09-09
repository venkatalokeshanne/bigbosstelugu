/**
 * Google Tag Manager Data Layer utilities
 * Use these functions to track events and send data to GTM
 */

/**
 * Push an event to the data layer
 * @param {string} event - Event name
 * @param {object} data - Additional event data
 */
export function gtmPushEvent(event, data = {}) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event,
      ...data
    })
  }
}

/**
 * Track voting events
 * @param {string} contestantName - Name of the contestant being voted for
 * @param {string} votingMethod - Method used for voting (e.g., 'strawpoll', 'hotstar', 'website')
 * @param {string} source - Source of the vote (e.g., 'sticky-button', 'contestant-page', 'voting-section')
 */
export function trackVote(contestantName, votingMethod, source = 'website') {
  gtmPushEvent('vote_contestant', {
    contestantName,
    votingMethod,
    voteSource: source,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track page navigation
 * @param {string} pageName - Name of the page
 * @param {string} pageUrl - URL of the page
 */
export function trackPageView(pageName, pageUrl) {
  gtmPushEvent('page_view', {
    pageName,
    pageUrl,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track external link clicks
 * @param {string} linkUrl - URL of the external link
 * @param {string} linkText - Text of the link
 * @param {string} section - Section where the link was clicked
 */
export function trackExternalLink(linkUrl, linkText, section) {
  gtmPushEvent('external_link_click', {
    linkUrl,
    linkText,
    section,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track form interactions
 * @param {string} formName - Name of the form
 * @param {string} action - Action performed ('start', 'submit', 'abandon')
 */
export function trackForm(formName, action) {
  gtmPushEvent('form_interaction', {
    formName,
    action,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track search events
 * @param {string} searchTerm - Search term used
 * @param {number} resultsCount - Number of results returned
 */
export function trackSearch(searchTerm, resultsCount = 0) {
  gtmPushEvent('search', {
    searchTerm,
    resultsCount,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track social sharing
 * @param {string} platform - Social platform (e.g., 'facebook', 'twitter', 'whatsapp')
 * @param {string} contentType - Type of content shared (e.g., 'contestant', 'news', 'vote')
 * @param {string} contentId - ID or name of the content
 */
export function trackSocialShare(platform, contentType, contentId) {
  gtmPushEvent('social_share', {
    platform,
    contentType,
    contentId,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track video interactions
 * @param {string} videoTitle - Title of the video
 * @param {string} action - Action performed ('play', 'pause', 'complete', '25%', '50%', '75%')
 * @param {number} progress - Progress percentage (0-100)
 */
export function trackVideo(videoTitle, action, progress = 0) {
  gtmPushEvent('video_interaction', {
    videoTitle,
    action,
    progress,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track user engagement
 * @param {string} engagementType - Type of engagement ('scroll_depth', 'time_on_page', 'click_depth')
 * @param {number} value - Numerical value of the engagement
 * @param {string} unit - Unit of measurement ('percentage', 'seconds', 'clicks')
 */
export function trackEngagement(engagementType, value, unit) {
  gtmPushEvent('user_engagement', {
    engagementType,
    value,
    unit,
    timestamp: new Date().toISOString()
  })
}