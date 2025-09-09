/**
 * Optimized voting settings data loader
 * Loads pre-generated static JSON data for maximum performance
 */

import votingData from '../data/voting-settings.json'

/**
 * Get voting settings with performance optimization
 * @returns {Object} Voting settings data
 */
export function getOptimizedVotingSettings() {
  try {
    if (!votingData || !votingData.votingSettings) {
      console.warn('Voting settings data not found, using fallback')
      return {
        eliminationWeek: 'Week 3 Elimination',
        votingQuestion: 'Who should be saved from elimination this week?',
        strawpollId: 'ajnE1Xj40nW',
        votingStatus: 'live',
        isActive: true
      }
    }

    return votingData.votingSettings
  } catch (error) {
    console.error('Error loading voting settings:', error)
    
    // Return fallback settings
    return {
      eliminationWeek: 'Week 3 Elimination',
      votingQuestion: 'Who should be saved from elimination this week?',
      strawpollId: 'ajnE1Xj40nW',
      votingStatus: 'live',
      isActive: true
    }
  }
}

/**
 * Get full voting data with metadata
 * @returns {Object} Complete voting data including metadata
 */
export function getVotingDataWithMetadata() {
  try {
    return votingData || {
      votingSettings: getOptimizedVotingSettings(),
      generatedAt: new Date().toISOString(),
      source: 'fallback'
    }
  } catch (error) {
    console.error('Error loading voting data:', error)
    return {
      votingSettings: getOptimizedVotingSettings(),
      generatedAt: new Date().toISOString(),
      source: 'error-fallback'
    }
  }
}

/**
 * Check if voting is currently active
 * @returns {boolean} Whether voting is active
 */
export function isVotingActive() {
  try {
    const settings = getOptimizedVotingSettings()
    
    if (!settings.isActive) return false
    if (settings.votingStatus !== 'live') return false
    
    // Check date range if available
    if (settings.endDate) {
      const endDate = new Date(settings.endDate)
      const now = new Date()
      if (now > endDate) return false
    }
    
    return true
  } catch (error) {
    console.error('Error checking voting status:', error)
    return true // Default to active if there's an error
  }
}
