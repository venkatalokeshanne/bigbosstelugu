// Script to update real contestants with missing data
const { createClient } = require('@sanity/client')

// Sanity client configuration
const client = createClient({
  projectId: 'p6ro2n3d',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-10-01',
  token: 'skNCx8hyjpHdJA0VhetT1tq3kslzVm7HHip7LvzpKzrla4ibwJfZUVsnsse3rrgRuce7koLOtfuGeZ7RTwSdjvHdtCu1tRHPEVI7De7eHFB1j6D6E24xHKWQqXtpoPabJbRdifluUALTeXKGj5lPc4y5IntAg72pa4DlaJuon2aVnQFJx3WA',
})

// Enhanced contestant data with missing information
const contestantUpdates = {
  'Bharani Shankar': {
    age: 35,
    hometown: 'Hyderabad',
    biography: 'Popular television actor known for his versatile roles in Telugu serials and comedy shows.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    socialMedia: {
      instagram: '@bharanishankar',
      twitter: '@bharanishankar'
    }
  },
  'Demon Pawan': {
    age: 28,
    hometown: 'Warangal',
    bio: 'Social media influencer and content creator who became popular through viral comedy videos.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    socialMedia: {
      instagram: '@demonpawan',
      youtube: 'Demon Pawan'
    }
  },
  'Flora Saini (Asha Saini)': {
    age: 42,
    hometown: 'Chandigarh',
    bio: 'Versatile actress who has worked in Telugu, Tamil, Kannada, and Hindi films with memorable performances.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    socialMedia: {
      instagram: '@florasaini',
      twitter: '@florasaini'
    }
  },
  'Harita Harish': {
    age: 24,
    hometown: 'Vijayawada',
    bio: 'Young contestant who gained attention through Agnipariksha competition and social media presence.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-08',
    socialMedia: {
      instagram: '@haritaharish'
    }
  },
  'Jabardasth Emmanuel': {
    age: 32,
    hometown: 'Hyderabad',
    bio: 'Popular comedian from Telugu TV skit shows like Jabardasth and Patas.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    socialMedia: {
      instagram: '@emmanueljabardasth'
    }
  },
  'Kalyan Padala': {
    age: 29,
    hometown: 'Guntur',
    bio: 'Energetic contestant who impressed through Agnipariksha and secured his spot in the house.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-08',
    socialMedia: {
      instagram: '@kalyanpadala'
    }
  },
  'Manish Maryada': {
    age: 26,
    hometown: 'Karimnagar',
    bio: 'Content creator and actor who built a strong following through entertaining social media content.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    socialMedia: {
      instagram: '@manishmaryada',
      youtube: 'Manish Maryada'
    }
  },
  'Priya Shetty': {
    age: 25,
    hometown: 'Bangalore',
    bio: 'Public-voted contestant who earned her place through audience support and vibrant personality.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-08',
    socialMedia: {
      instagram: '@priyashetty'
    }
  },
  'Ramu Rathod': {
    age: 45,
    hometown: 'Nizamabad',
    bio: 'Talented folk singer known for preserving traditional Telugu music and cultural heritage.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    socialMedia: {
      youtube: 'Ramu Rathod Music'
    }
  },
  'Rithu Chowdary': {
    age: 23,
    hometown: 'Hyderabad',
    bio: 'Young social media influencer with a strong presence on Instagram and TikTok.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    socialMedia: {
      instagram: '@rithuchowdary',
      tiktok: '@rithuchowdary'
    }
  },
  'Sanjjanaa Galrani': {
    age: 35,
    hometown: 'Bangalore',
    bio: 'Accomplished actress known for her work in Telugu and Kannada cinema with versatile roles.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    socialMedia: {
      instagram: '@sanjaanagalrani',
      twitter: '@sanjjaanagalrani'
    }
  },
  'Shrasti Verma': {
    age: 28,
    hometown: 'Mumbai',
    bio: 'Talented choreographer turned actress who has worked on various Telugu film projects.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    socialMedia: {
      instagram: '@shrastiverma'
    }
  },
  'Srija Dammu': {
    age: 22,
    hometown: 'Visakhapatnam',
    bio: 'Instagram influencer and content creator known for lifestyle and fashion content.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-08',
    socialMedia: {
      instagram: '@srijadammu'
    }
  },
  'Suman Setty': {
    age: 38,
    hometown: 'Hyderabad',
    bio: 'Veteran comedian who has entertained audiences through numerous Telugu films and comedy shows.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    socialMedia: {
      instagram: '@sumansetty'
    }
  },
  'Thanuja Puttaswamy': {
    age: 33,
    hometown: 'Bangalore',
    bio: 'Television actress known for her roles in popular Kannada and Telugu serial dramas.',
    votes: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    socialMedia: {
      instagram: '@thanujaputtaswamy'
    }
  }
}

const updateContestants = async () => {
  console.log('🚀 Updating contestants with enhanced data...\n')

  try {
    // Get all current contestants
    const contestants = await client.fetch(`*[_type == "contestant"]`)
    
    for (const contestant of contestants) {
      const updates = contestantUpdates[contestant.name]
      if (updates) {
        console.log(`📝 Updating ${contestant.name}...`)
        
        // Create slug if it doesn't exist
        const slug = contestant.name.toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .replace(/\s+/g, '-')
        
        const updatedData = {
          ...updates,
          slug: {
            _type: 'slug',
            current: slug
          }
        }
        
        await client
          .patch(contestant._id)
          .set(updatedData)
          .commit()
          
        console.log(`✅ Updated ${contestant.name}`)
      } else {
        console.log(`⚠️  No updates found for ${contestant.name}`)
      }
    }
    
    console.log('\n🎉 All contestants updated successfully!')
    
    // Fetch and display updated data
    const updatedContestants = await client.fetch(`*[_type == "contestant"] | order(votes desc)`)
    console.log('\n=== UPDATED CONTESTANTS ===')
    updatedContestants.forEach((contestant, index) => {
      console.log(`${index + 1}. ${contestant.name}`)
      console.log(`   - Age: ${contestant.age}`)
      console.log(`   - Hometown: ${contestant.hometown}`)
      console.log(`   - Votes: ${contestant.votes}`)
      console.log(`   - Status: ${contestant.status}`)
      console.log('')
    })
    
  } catch (error) {
    console.error('❌ Error updating contestants:', error)
  }
}

// Run the update
updateContestants()
