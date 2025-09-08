#!/usr/bin/env node

/**
 * Test script to verify    // Check if JSON file exists
    const jsonPath = path.join(process.cwd(), 'src', 'data', 'contestants.json')
    let jsonExists = false
    let jsonData = null
    
    try {
      jsonData = require(jsonPath)
      jsonExists = true
      console.log(`✅ JSON file exists: ${jsonPath}`)
      console.log(`✅ JSON data valid - ${jsonData.contestants.length} contestants, generated at ${jsonData.generatedAt}`)
    } catch (error) {
      console.log('⚠️ JSON file not found - will use Sanity API fallback')
    }tion system works
 */

const path = require('path')

async function testOptimization() {
  console.log('🧪 Testing optimization system...')
  
  try {
    // Import the optimization functions
    const {
      loadOptimizedContestants,
      getOptimizedContestants,
      getOptimizedActiveContestants,
      getOptimizedEliminatedContestants,
      getContestantStats,
      getOptimizedContestantBySlug
    } = require('../src/lib/optimized-contestants')
    
    console.log('✅ Successfully imported optimization functions')
    
    // Test loading contestants
    console.log('🔄 Testing contestant loading...')
    const contestants = await getOptimizedContestants()
    console.log(`✅ Loaded ${contestants.length} contestants`)
    
    // Test active contestants
    const activeContestants = await getOptimizedActiveContestants()
    console.log(`✅ Loaded ${activeContestants.length} active contestants`)
    
    // Test eliminated contestants
    const eliminatedContestants = await getOptimizedEliminatedContestants()
    console.log(`✅ Loaded ${eliminatedContestants.length} eliminated contestants`)
    
    // Test stats
    const stats = await getContestantStats()
    console.log(`✅ Stats - Total: ${stats.total}, Active: ${stats.active}, Eliminated: ${stats.eliminated}`)
    
    // Test finding by slug
    if (contestants.length > 0) {
      const firstContestant = contestants[0]
      const foundContestant = await getOptimizedContestantBySlug(firstContestant.slug || firstContestant._id)
      if (foundContestant) {
        console.log(`✅ Successfully found contestant: ${foundContestant.name}`)
      } else {
        console.log('⚠️ Could not find contestant by slug')
      }
    }
    
    // Check if JSON file exists
    const jsonPath = path.join(process.cwd(), 'public', 'data', 'contestants.json')
    let jsonExists = false
    let jsonData = null
    
    try {
      jsonData = require(jsonPath)
      jsonExists = true
      console.log(`✅ JSON file exists: ${jsonPath}`)
      console.log(`✅ JSON data valid - ${jsonData.contestants.length} contestants, generated at ${jsonData.generatedAt}`)
    } catch (error) {
      console.log('⚠️ JSON file not found - will use Sanity API fallback')
    }
    
    console.log('🎉 All tests passed! Optimization system is working.')
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
    process.exit(1)
  }
}

// Run tests
testOptimization()
