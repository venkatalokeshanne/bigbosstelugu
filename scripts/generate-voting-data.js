#!/usr/bin/env node

/**
 * Build script to generate optimized voting settings data
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
 * Fetch voting settings from Sanity
 */
async function fetchVotingDataFromSanity() {
  try {
    console.log('🔄 Fetching voting settings from Sanity...')
    
    const query = `*[_type == "votingSettings" && !(_id in path("drafts.**")) && isActive == true] | order(_createdAt desc) [0] {
      _id,
      eliminationWeek,
      votingQuestion,
      strawpollId,
      votingStatus,
      isActive,
      startDate,
      endDate,
      _createdAt,
      _updatedAt
    }`
    
    const votingSettings = await client.fetch(query)
    console.log(`✅ Fetched voting settings:`, votingSettings ? 'Found' : 'No settings found')
    
    return votingSettings
  } catch (error) {
    console.error('❌ Error fetching voting settings from Sanity:', error.message)
    throw error
  }
}

/**
 * Process voting settings data with fallbacks
 */
function processVotingData(votingSettings) {
  console.log('🔄 Processing voting settings data...')
  
  // Default fallback settings
  const defaultSettings = {
    eliminationWeek: 'Week 3 Elimination',
    votingQuestion: 'Who should be saved from elimination this week?',
    strawpollId: 'ajnE1Xj40nW',
    votingStatus: 'live',
    isActive: true,
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days from now
  }
  
  // Merge with fetched settings or use defaults
  const processedData = {
    votingSettings: votingSettings ? {
      ...defaultSettings,
      ...votingSettings,
      // Ensure critical fields are never null/undefined
      eliminationWeek: votingSettings.eliminationWeek || defaultSettings.eliminationWeek,
      votingQuestion: votingSettings.votingQuestion || defaultSettings.votingQuestion,
      strawpollId: votingSettings.strawpollId || defaultSettings.strawpollId,
      votingStatus: votingSettings.votingStatus || defaultSettings.votingStatus
    } : defaultSettings,
    generatedAt: new Date().toISOString(),
    buildVersion: process.env.npm_package_version || '1.0.0',
    source: votingSettings ? 'sanity' : 'fallback'
  }
  
  console.log(`✅ Processed voting settings:`)
  console.log(`  - Week: ${processedData.votingSettings.eliminationWeek}`)
  console.log(`  - Question: ${processedData.votingSettings.votingQuestion}`)
  console.log(`  - Poll ID: ${processedData.votingSettings.strawpollId}`)
  console.log(`  - Status: ${processedData.votingSettings.votingStatus}`)
  console.log(`  - Source: ${processedData.source}`)
  
  return processedData
}

/**
 * Write voting data to JSON file
 */
function writeVotingDataToFile(data) {
  try {
    // Ensure src/data directory exists
    const dataDir = path.join(process.cwd(), 'src', 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
      console.log('📁 Created src/data directory')
    }
    
    // Write the JSON file
    const filePath = path.join(dataDir, 'voting-settings.json')
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    
    console.log(`✅ Generated voting settings file: ${filePath}`)
    console.log(`📊 File size: ${(fs.statSync(filePath).size / 1024).toFixed(2)} KB`)
    
    return filePath
  } catch (error) {
    console.error('❌ Error writing voting data file:', error.message)
    throw error
  }
}

/**
 * Main function
 */
async function generateVotingData() {
  console.log('🚀 Starting voting settings data generation...')
  
  try {
    // Fetch data from Sanity (with graceful fallback)
    const votingSettings = await fetchVotingDataFromSanity()
    
    // Process the data (always succeeds with fallbacks)
    const processedData = processVotingData(votingSettings)
    
    // Write to file
    const filePath = writeVotingDataToFile(processedData)
    
    console.log('✅ Voting settings build script completed successfully!')
    console.log(`📄 Generated: ${filePath}`)
    console.log(`⏰ Generated at: ${processedData.generatedAt}`)
    
  } catch (error) {
    console.error('❌ Voting settings build script failed:', error.message)
    
    // Generate fallback data even if Sanity fails
    console.log('🔄 Generating fallback voting settings...')
    const fallbackData = processVotingData(null)
    writeVotingDataToFile(fallbackData)
    console.log('✅ Fallback voting settings generated')
  }
}

// Run the script if called directly
if (require.main === module) {
  generateVotingData()
}

module.exports = { generateVotingData }
