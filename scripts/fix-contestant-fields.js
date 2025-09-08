// Script to update real contestants with correct field names (biography, currentVoteCount)
const { createClient } = require('@sanity/client')

// Sanity client configuration
const client = createClient({
  projectId: 'p6ro2n3d',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-10-01',
  token: 'skNCx8hyjpHdJA0VhetT1tq3kslzVm7HHip7LvzpKzrla4ibwJfZUVsnsse3rrgRuce7koLOtfuGeZ7RTwSdjvHdtCu1tRHPEVI7De7eHFB1j6D6E24xHKWQqXtpoPabJbRdifluUALTeXKGj5lPc4y5IntAg72pa4DlaJuon2aVnQFJx3WA',
})

// Enhanced contestant data with correct field names
const contestantUpdates = {
  'Bharani Shankar': {
    age: 35,
    hometown: 'Hyderabad',
    biography: 'Popular television actor known for his versatile roles in Telugu serials and comedy shows.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/barani.png'
  },
  'Demon Pawan': {
    age: 28,
    hometown: 'Warangal',
    biography: 'Social media influencer and content creator who became popular through viral comedy videos.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/pavan.png'
  },
  'Flora Saini (Asha Saini)': {
    age: 42,
    hometown: 'Chandigarh',
    biography: 'Versatile actress who has worked in Telugu, Tamil, Kannada, and Hindi films with memorable performances.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/flora.png'
  },
  'Harita Harish': {
    age: 24,
    hometown: 'Vijayawada',
    biography: 'Young contestant who gained attention through Agnipariksha competition and social media presence.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-08',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/harish.png'
  },
  'Jabardasth Emmanuel': {
    age: 32,
    hometown: 'Hyderabad',
    biography: 'Popular comedian from Telugu TV skit shows like Jabardasth and Patas.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/emmanuel.png'
  },
  'Kalyan Padala': {
    age: 29,
    hometown: 'Guntur',
    biography: 'Energetic contestant who impressed through Agnipariksha and secured his spot in the house.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-08',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/kalyan.png'
  },
  'Manish Maryada': {
    age: 26,
    hometown: 'Karimnagar',
    biography: 'Content creator and actor who built a strong following through entertaining social media content.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/manish.png'
  },
  'Priya Shetty': {
    age: 25,
    hometown: 'Bangalore',
    biography: 'Public-voted contestant who earned her place through audience support and vibrant personality.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-08',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/priya.png'
  },
  'Ramu Rathod': {
    age: 45,
    hometown: 'Nizamabad',
    biography: 'Talented folk singer known for preserving traditional Telugu music and cultural heritage.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/rathod.png'
  },
  'Rithu Chowdary': {
    age: 23,
    hometown: 'Hyderabad',
    biography: 'Young social media influencer with a strong presence on Instagram and TikTok.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/ritu.png'
  },
  'Sanjjanaa Galrani': {
    age: 35,
    hometown: 'Bangalore',
    biography: 'Accomplished actress known for her work in Telugu and Kannada cinema with versatile roles.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/sanajana.png'
  },
  'Shrasti Verma': {
    age: 28,
    hometown: 'Mumbai',
    biography: 'Talented choreographer turned actress who has worked on various Telugu film projects.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/shrasti.png'
  },
  'Srija Dammu': {
    age: 22,
    hometown: 'Visakhapatnam',
    biography: 'Instagram influencer and content creator known for lifestyle and fashion content.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-08',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/srija.png'
  },
  'Suman Setty': {
    age: 38,
    hometown: 'Hyderabad',
    biography: 'Veteran comedian who has entertained audiences through numerous Telugu films and comedy shows.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/suman.png'
  },
  'Thanuja Puttaswamy': {
    age: 33,
    hometown: 'Bangalore',
    biography: 'Television actress known for her roles in popular Kannada and Telugu serial dramas.',
    currentVoteCount: Math.floor(Math.random() * 25000) + 10000,
    entryDate: '2024-09-01',
    publishedAt: '2025-09-08T00:00:00.000Z',
    imageUrl: '/images/contestants/thanuja.png'
  }
}

const updateContestantsWithCorrectFields = async () => {
  console.log('🚀 Updating contestants with correct field names (biography, currentVoteCount)...\n')

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
          },
          socialMedia: {
            instagram: `@${slug.replace(/-/g, '')}`,
            twitter: `@${slug.replace(/-/g, '')}`
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
    
    console.log('\n🎉 All contestants updated with correct field names!')
    
    // Fetch and display updated data
    const updatedContestants = await client.fetch(`*[_type == "contestant"] | order(currentVoteCount desc)`)
    console.log('\n=== UPDATED CONTESTANTS ===')
    updatedContestants.forEach((contestant, index) => {
      console.log(`${index + 1}. ${contestant.name}`)
      console.log(`   - Age: ${contestant.age}`)
      console.log(`   - Hometown: ${contestant.hometown}`)
      console.log(`   - Vote Count: ${contestant.currentVoteCount}`)
      console.log(`   - Status: ${contestant.status}`)
      console.log(`   - Biography: ${contestant.biography?.substring(0, 50)}...`)
      console.log('')
    })
    
  } catch (error) {
    console.error('❌ Error updating contestants:', error)
  }
}

// Run the update
updateContestantsWithCorrectFields()
