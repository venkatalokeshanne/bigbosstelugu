// Script to fetch real data from Sanity CMS
const { createClient } = require('@sanity/client')

// Sanity client configuration
const client = createClient({
  projectId: 'p6ro2n3d',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-10-01',
  token: 'skNCx8hyjpHdJA0VhetT1tq3kslzVm7HHip7LvzpKzrla4ibwJfZUVsnsse3rrgRuce7koLOtfuGeZ7RTwSdjvHdtCu1tRHPEVI7De7eHFB1j6D6E24xHKWQqXtpoPabJbRdifluUALTeXKGj5lPc4y5IntAg72pa4DlaJuon2aVnQFJx3WA',
})

const fetchRealData = async () => {
  console.log('Fetching real data from Sanity...\n')

  try {
    // Get all contestants
    const contestants = await client.fetch(`*[_type == "contestant"]`)
    console.log('=== CONTESTANTS ===')
    console.log(`Found ${contestants.length} contestants:`)
    contestants.forEach((contestant, index) => {
      console.log(`${index + 1}. ${contestant.name}`)
      console.log(`   - Age: ${contestant.age}`)
      console.log(`   - Profession: ${contestant.profession}`)
      console.log(`   - Status: ${contestant.status}`)
      console.log(`   - Votes: ${contestant.votes || 0}`)
      console.log(`   - Bio: ${contestant.bio}`)
      console.log('')
    })

    // Get all news
    const news = await client.fetch(`*[_type == "news"]`)
    console.log('=== NEWS ===')
    console.log(`Found ${news.length} news articles:`)
    news.forEach((article, index) => {
      console.log(`${index + 1}. ${article.title}`)
      console.log(`   - Category: ${article.category}`)
      console.log(`   - Author: ${article.author}`)
      console.log('')
    })

    // Get all live updates
    const liveUpdates = await client.fetch(`*[_type == "liveUpdate"]`)
    console.log('=== LIVE UPDATES ===')
    console.log(`Found ${liveUpdates.length} live updates:`)
    liveUpdates.forEach((update, index) => {
      console.log(`${index + 1}. ${update.title}`)
      console.log(`   - Type: ${update.updateType}`)
      console.log(`   - Priority: ${update.priority}`)
      console.log('')
    })

    // Get all FAQs
    const faqs = await client.fetch(`*[_type == "faq"]`)
    console.log('=== FAQs ===')
    console.log(`Found ${faqs.length} FAQs:`)
    faqs.forEach((faq, index) => {
      console.log(`${index + 1}. ${faq.question}`)
      console.log(`   - Category: ${faq.category}`)
      console.log('')
    })

  } catch (error) {
    console.error('❌ Error fetching data:', error)
  }
}

// Run the fetch function
fetchRealData()
