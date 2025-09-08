const { writeFileSync } = require('fs')
const { join } = require('path')
const { client } = require('../src/lib/sanity-client')

// GROQ query for all contestant data
const contestantsQuery = `*[_type == "contestant" && !(_id in path("drafts.**"))] {
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
  currentRank,
  entryDate,
  eliminationDate,
  socialMedia
}`

async function generateContestantsData() {
  try {
    console.log('🔄 Fetching contestants data from Sanity...')
    
    const contestants = await client.fetch(contestantsQuery)
    
    // Shuffle function for randomization
    const shuffleArray = (array) => {
      const shuffled = [...array]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
    }
    
    // Separate and shuffle contestants
    const activeContestants = shuffleArray(contestants.filter(c => c.status === 'active'))
    const eliminatedContestants = shuffleArray(contestants.filter(c => c.status === 'eliminated'))
    
    const optimizedData = {
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

    // Write to src/data directory for easy access
    const outputPath = join(process.cwd(), 'src', 'data', 'contestants.json')
    
    // Ensure directory exists
    const { mkdirSync } = require('fs')
    const { dirname } = require('path')
    mkdirSync(dirname(outputPath), { recursive: true })
    
    writeFileSync(outputPath, JSON.stringify(optimizedData, null, 2))
    
    console.log(`✅ Generated contestants data: ${contestants.length} contestants`)
    console.log(`   - Active: ${activeContestants.length}`)
    console.log(`   - Eliminated: ${eliminatedContestants.length}`)
    console.log(`   - Output: ${outputPath}`)
    
  } catch (error) {
    console.error('❌ Error generating contestants data:', error)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  generateContestantsData()
}

module.exports = { generateContestantsData }
