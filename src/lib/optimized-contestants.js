import staticContestantsData from '../data/contestants.json'

// Cache for the contestants data
let contestantsCache = null

/**
 * Load contestants data from the imported JSON file
 * Falls back to Sanity API if JSON doesn't exist (development mode)
 */
export async function loadOptimizedContestants() {
  // Return cached data if available
  if (contestantsCache) {
    return contestantsCache
  }

  try {
    // Try to load from imported static data first
    if (staticContestantsData) {
      console.log('Using pre-generated static contestants data')
      contestantsCache = staticContestantsData
      return staticContestantsData
    }
    
    // If no static data, fall back to Sanity API
    throw new Error('No static data available, using Sanity API fallback')
    
  } catch (error) {
    console.log('⚠️  Optimized JSON not found, falling back to Sanity API...')
    
    try {
      // Fallback to direct Sanity API call (for development)
      const { fetchContestants } = await import('../lib/sanity-client')
      const contestants = await fetchContestants()
      
      // Shuffle function for randomization
      const shuffleArray = (array) => {
        const shuffled = [...array]
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }
        return shuffled
      }
      
      const activeContestants = shuffleArray(contestants.filter(c => c.status === 'active'))
      const eliminatedContestants = shuffleArray(contestants.filter(c => c.status === 'eliminated'))
      
      const fallbackData = {
        contestants,
        activeContestants,
        eliminatedContestants,
        stats: {
          total: contestants.length,
          active: activeContestants.length,
          eliminated: eliminatedContestants.length
        },
        generatedAt: new Date().toISOString()
      }
      
      // Cache the fallback data
      contestantsCache = fallbackData
      
      return fallbackData
    } catch (sanityError) {
      console.error('Sanity API also failed, using empty fallback:', sanityError)
      
      // Return minimal fallback data if everything fails
      const emptyFallback = {
        contestants: [],
        activeContestants: [],
        eliminatedContestants: [],
        stats: {
          total: 0,
          active: 0,
          eliminated: 0
        },
        generatedAt: new Date().toISOString()
      }
      
      contestantsCache = emptyFallback
      return emptyFallback
    }
  }
}

/**
 * Get all contestants (shuffled)
 */
export async function getOptimizedContestants() {
  const data = await loadOptimizedContestants()
  return data.contestants
}

/**
 * Get active contestants (pre-shuffled)
 */
export async function getOptimizedActiveContestants() {
  const data = await loadOptimizedContestants()
  return data.activeContestants
}

/**
 * Get eliminated contestants (pre-shuffled)
 */
export async function getOptimizedEliminatedContestants() {
  const data = await loadOptimizedContestants()
  return data.eliminatedContestants
}

/**
 * Get contestant stats
 */
export async function getContestantStats() {
  const data = await loadOptimizedContestants()
  return data.stats
}

/**
 * Find contestant by slug from optimized data
 */
export async function getOptimizedContestantBySlug(slug) {
  const data = await loadOptimizedContestants()
  return data.contestants.find(contestant => 
    contestant.slug === slug || 
    contestant.name?.toLowerCase().replace(/\s+/g, '-') === slug ||
    contestant._id === slug
  )
}
