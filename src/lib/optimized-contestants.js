import staticContestantsData from '../data/contestants.json'

/**
 * Load contestants data from the static JSON file.
 */
export async function loadOptimizedContestants() {
  return {
    ...staticContestantsData,
    activeContestants: staticContestantsData.contestants.filter(c => c.status === 'active'),
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
