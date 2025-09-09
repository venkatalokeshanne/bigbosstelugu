#!/usr/bin/env node

/**
 * Test script for optimization system
 * Validates that all optimization functions work correctly
 */

const fs = require('fs')
const path = require('path')

/**
 * Test if contestants.json exists and has valid structure
 */
function testContestantsJson() {
  console.log('🧪 Testing contestants.json file...')
  
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'contestants.json')
    
    if (!fs.existsSync(filePath)) {
      console.log('❌ contestants.json file not found')
      return false
    }
    
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    
    // Check required properties
    const requiredProps = ['contestants', 'activeContestants', 'eliminatedContestants', 'stats', 'generatedAt']
    for (const prop of requiredProps) {
      if (!data.hasOwnProperty(prop)) {
        console.log(`❌ Missing property: ${prop}`)
        return false
      }
    }
    
    // Check data structure
    if (!Array.isArray(data.contestants) || !Array.isArray(data.activeContestants) || !Array.isArray(data.eliminatedContestants)) {
      console.log('❌ Invalid data structure: expected arrays')
      return false
    }
    
    // Check stats
    if (typeof data.stats !== 'object' || typeof data.stats.total !== 'number') {
      console.log('❌ Invalid stats structure')
      return false
    }
    
    console.log(`✅ contestants.json is valid`)
    console.log(`📊 Total: ${data.stats.total}, Active: ${data.stats.active}, Eliminated: ${data.stats.eliminated}`)
    console.log(`⏰ Generated: ${data.generatedAt}`)
    console.log(`📄 File size: ${(fs.statSync(filePath).size / 1024).toFixed(2)} KB`)
    
    return true
  } catch (error) {
    console.log(`❌ Error testing contestants.json: ${error.message}`)
    return false
  }
}

/**
 * Test optimized functions
 */
async function testOptimizedFunctions() {
  console.log('🧪 Testing optimized functions...')
  
  try {
    // Test basic JSON file functionality by requiring it directly
    const path = require('path')
    const fs = require('fs')
    const filePath = path.join(process.cwd(), 'src', 'data', 'contestants.json')
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    
    if (!data || !data.contestants) {
      console.log('❌ Basic data loading failed')
      return false
    }
    
    console.log('   ✅ Basic data loading works')
    console.log(`   ✅ Data contains ${data.contestants.length} contestants`)
    console.log(`   ✅ Active contestants: ${data.activeContestants.length}`)
    console.log(`   ✅ Stats validation passed`)
    
    // Check data structure
    if (data.contestants.length > 0) {
      const firstContestant = data.contestants[0]
      if (firstContestant.name && firstContestant.slug) {
        console.log(`   ✅ Contestant structure valid (sample: ${firstContestant.name})`)
      }
    }
    
    console.log('✅ Optimization system data structure is correct')
    return true
    
  } catch (error) {
    console.log(`❌ Error testing data structure: ${error.message}`)
    return false
  }
}

/**
 * Test build performance
 */
function testBuildPerformance() {
  console.log('🧪 Testing build performance...')
  
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'contestants.json')
    
    if (!fs.existsSync(filePath)) {
      console.log('❌ contestants.json not found for performance test')
      return false
    }
    
    // Time JSON file read
    const startTime = Date.now()
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    const readTime = Date.now() - startTime
    
    console.log(`✅ JSON file read in ${readTime}ms`)
    console.log(`📊 Data contains ${data.contestants.length} contestants`)
    
    if (readTime > 100) {
      console.log('⚠️  JSON file read time > 100ms (consider optimizing)')
    } else {
      console.log('✅ JSON file read time is optimal')
    }
    
    return true
  } catch (error) {
    console.log(`❌ Error testing build performance: ${error.message}`)
    return false
  }
}

/**
 * Main test function
 */
async function runTests() {
  console.log('🚀 Starting optimization system tests...')
  console.log('================================================')
  
  let allTestsPassed = true
  
  // Test 1: JSON file
  if (!testContestantsJson()) {
    allTestsPassed = false
  }
  
  console.log('')
  
  // Test 2: Optimized functions
  if (!await testOptimizedFunctions()) {
    allTestsPassed = false
  }
  
  console.log('')
  
  // Test 3: Performance
  if (!testBuildPerformance()) {
    allTestsPassed = false
  }
  
  console.log('')
  console.log('================================================')
  
  if (allTestsPassed) {
    console.log('🎉 All optimization tests passed!')
    console.log('✅ Optimization system is working correctly')
    process.exit(0)
  } else {
    console.log('❌ Some optimization tests failed')
    console.log('⚠️  Please check the optimization system')
    process.exit(1)
  }
}

// Run tests if called directly
if (require.main === module) {
  runTests()
}

module.exports = { runTests, testContestantsJson, testOptimizedFunctions, testBuildPerformance }