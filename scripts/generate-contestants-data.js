#!/usr/bin/env node

/**
 * Build script to generate optimized contestants data
 * Run this during build process to create static JSON file
 */

const fs = require('fs')
const path = require('path')
const { createClient } = require('@sanity/client')

// Sanity client configuration
const client = createClient({
  projectId: 'p6ro2n3d',
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: false, // Don't use CDN for build-time data
  token: 'skNCx8hyjpHdJA0VhetT1tq3kslzVm7HHip7LvzpKzrla4ibwJfZUVsnsse3rrgRuce7koLOtfuGeZ7RTwSdjvHdtCu1tRHPEVI7De7eHFB1j6D6E24xHKWQqXtpoPabJbRdifluUALTeXKGj5lPc4y5IntAg72pa4DlaJuon2aVnQFJx3WA',
})

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Fetch contestants from Sanity
 */
async function fetchContestantsFromSanity() {
  try {
    console.log('🔄 Fetching contestants from Sanity...')
    
    const query = `*[_type == "contestant" && !(_id in path("drafts.**"))] | order(name asc) {
      _id,
      name,
      age,
      profession,
      hometown,
      status,
      entryDate,
      eliminationDate,
      imageUrl,
      "slug": slug.current,
      biography,
      socialMedia
    }`
    
    const contestants = await client.fetch(query)
    console.log(`✅ Fetched ${contestants.length} contestants`)
    
    return contestants
  } catch (error) {
    console.error('❌ Error fetching contestants from Sanity:', error.message)
    throw error
  }
}

/**
 * Process and organize contestants data
 */
function processContestantsData(contestants) {
  console.log('🔄 Processing contestants data...')
  
  // Separate active and eliminated contestants
  const activeContestants = contestants.filter(c => c.status === 'active')
  const eliminatedContestants = contestants.filter(c => c.status === 'eliminated')
  
  // Shuffle all arrays for randomization
  const shuffledAll = shuffleArray(contestants)
  const shuffledActive = shuffleArray(activeContestants)
  const shuffledEliminated = shuffleArray(eliminatedContestants)
  
  const processedData = {
    contestants: shuffledAll,
    activeContestants: shuffledActive,
    eliminatedContestants: shuffledEliminated,
    stats: {
      total: contestants.length,
      active: activeContestants.length,
      eliminated: eliminatedContestants.length
    },
    generatedAt: new Date().toISOString(),
    buildVersion: process.env.npm_package_version || '1.0.0'
  }
  
  console.log(`✅ Processed data: ${processedData.stats.total} total, ${processedData.stats.active} active, ${processedData.stats.eliminated} eliminated`)
  
  return processedData
}

/**
 * Write data to JSON file
 */
function writeDataToFile(data) {
  try {
    // Ensure src/data directory exists
    const dataDir = path.join(process.cwd(), 'src', 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
      console.log('📁 Created src/data directory')
    }
    
    // Write the JSON file
    const filePath = path.join(dataDir, 'contestants.json')
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    
    console.log(`✅ Generated contestants data file: ${filePath}`)
    console.log(`📊 File size: ${(fs.statSync(filePath).size / 1024).toFixed(2)} KB`)
    
    return filePath
  } catch (error) {
    console.error('❌ Error writing data file:', error.message)
    throw error
  }
}

/**
 * Check if existing contestants data is available and recent
 */
function checkExistingData() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'contestants.json')
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      console.log(`📄 Found existing data generated at: ${data.generatedAt}`)
      return data
    }
    return null
  } catch (error) {
    console.log('⚠️  Error reading existing data:', error.message)
    return null
  }
}

/**
 * Main function
 */
async function generateContestantsData() {
  console.log('🚀 Starting contestants data generation...')
  
  try {
    // Fetch data from Sanity
    const contestants = await fetchContestantsFromSanity()
    
    if (!contestants || contestants.length === 0) {
      throw new Error('No contestants data found')
    }
    
    // Process the data
    const processedData = processContestantsData(contestants)
    
    // Write to file
    const filePath = writeDataToFile(processedData)
    
    console.log('✅ Build script completed successfully!')
    console.log(`📄 Generated: ${filePath}`)
    console.log(`⏰ Generated at: ${processedData.generatedAt}`)
    
  } catch (error) {
    console.error('❌ Build script failed:', error.message)
    
    // Check if we have existing data to fall back to
    const existingData = checkExistingData()
    if (existingData) {
      console.log('✅ Using existing contestants data as fallback')
      console.log(`📄 Existing data: ${existingData.stats.total} contestants`)
      console.log(`⏰ Generated at: ${existingData.generatedAt}`)
      console.log('🔄 Build can continue with existing data')
      return // Success - existing data available
    }
    
    console.error('❌ No fallback data available. Build failed.')
    process.exit(1)
  }
}

// Run the script if called directly
if (require.main === module) {
  generateContestantsData()
}

module.exports = { generateContestantsData }
