// Complete seed data for Bigg Boss Telugu 9
const { createClient } = require('@sanity/client')

// Sanity client configuration
const client = createClient({
  projectId: 'p6ro2n3d',
  dataset: 'production',
  useCdn: false, // Use false for write operations
  apiVersion: '2023-10-01',
  token: 'skNCx8hyjpHdJA0VhetT1tq3kslzVm7HHip7LvzpKzrla4ibwJfZUVsnsse3rrgRuce7koLOtfuGeZ7RTwSdjvHdtCu1tRHPEVI7De7eHFB1j6D6E24xHKWQqXtpoPabJbRdifluUALTeXKGj5lPc4y5IntAg72pa4DlaJuon2aVnQFJx3WA',
})

const seedData = async () => {
  console.log('Starting to seed Sanity data...')

  // Sample contestants data
  const contestants = [
    {
      _type: 'contestant',
      name: 'Rohan Sahgal',
      slug: { _type: 'slug', current: 'rohan-sahgal' },
      age: 28,
      profession: 'Actor',
      hometown: 'Hyderabad',
      status: 'active',
      votes: 15234,
      entryDate: '2024-09-01',
      bio: 'Popular television actor known for his versatile roles.',
      socialMedia: {
        instagram: '@rohansahgal',
        twitter: '@rohansahgal'
      }
    },
    {
      _type: 'contestant',
      name: 'Meera Jasmine',
      slug: { _type: 'slug', current: 'meera-jasmine' },
      age: 32,
      profession: 'Actress',
      hometown: 'Chennai',
      status: 'active',
      votes: 18756,
      entryDate: '2024-09-01',
      bio: 'Acclaimed actress with numerous awards.',
      socialMedia: {
        instagram: '@meerajasmine',
        twitter: '@meerajasmine'
      }
    },
    {
      _type: 'contestant',
      name: 'Gangavva',
      slug: { _type: 'slug', current: 'gangavva' },
      age: 58,
      profession: 'YouTuber',
      hometown: 'Telangana Village',
      status: 'active',
      votes: 22341,
      entryDate: '2024-09-01',
      bio: 'Popular village YouTuber and social media sensation.',
      socialMedia: {
        youtube: 'My Village Show'
      }
    },
    {
      _type: 'contestant',
      name: 'Vishwa',
      slug: { _type: 'slug', current: 'vishwa' },
      age: 26,
      profession: 'Singer',
      hometown: 'Vizag',
      status: 'active',
      votes: 12890,
      entryDate: '2024-09-08',
      bio: 'Rising playback singer with melodious voice.',
      socialMedia: {
        instagram: '@vishwaofficial'
      }
    },
    {
      _type: 'contestant',
      name: 'Prerana',
      slug: { _type: 'slug', current: 'prerana' },
      age: 24,
      profession: 'Model',
      hometown: 'Hyderabad',
      status: 'eliminated',
      votes: 8543,
      entryDate: '2024-09-01',
      eliminationDate: '2024-09-22',
      bio: 'Fashion model and beauty pageant winner.',
      socialMedia: {
        instagram: '@preranamodel'
      }
    }
  ]

  // Sample news data
  const news = [
    {
      _type: 'news',
      title: 'Bigg Boss Telugu 9: Shocking Elimination in Week 3',
      slug: { _type: 'slug', current: 'shocking-elimination-week-3' },
      excerpt: 'The latest elimination has left viewers and housemates in complete shock as a strong contestant bids farewell.',
      content: 'In a surprising turn of events, the third week of Bigg Boss Telugu 9 witnessed an unexpected elimination...',
      category: 'elimination',
      author: 'BB Telugu Team',
      publishedAt: new Date().toISOString(),
      isPublished: true,
      isFeatured: true
    },
    {
      _type: 'news',
      title: 'New Task Creates Major Drama in Bigg Boss House',
      slug: { _type: 'slug', current: 'new-task-major-drama' },
      excerpt: 'The latest weekly task has stirred up conflicts and formed new alliances among the contestants.',
      content: 'The captaincy task introduced this week has created unprecedented drama in the house...',
      category: 'task',
      author: 'Entertainment Desk',
      publishedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      isPublished: true,
      isFeatured: false
    },
    {
      _type: 'news',
      title: 'Nagarjuna Announces Special Weekend Surprise',
      slug: { _type: 'slug', current: 'nagarjuna-weekend-surprise' },
      excerpt: 'Host Nagarjuna has announced a special surprise for the contestants this weekend episode.',
      content: 'Fans are eagerly waiting for the weekend episode as Nagarjuna hints at a major surprise...',
      category: 'announcement',
      author: 'BB Telugu Team',
      publishedAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      isPublished: true,
      isFeatured: true
    }
  ]

  // Sample live updates
  const liveUpdates = [
    {
      _type: 'liveUpdate',
      title: 'Heated Argument in Kitchen Area',
      description: 'Contestants clash over kitchen duties allocation during dinner preparation.',
      updateType: 'drama',
      isLive: true,
      priority: 'high',
      timestamp: new Date().toISOString()
    },
    {
      _type: 'liveUpdate',
      title: 'New Captain Announced',
      description: 'After intense competition, this week\'s house captain has been decided.',
      updateType: 'announcement',
      isLive: false,
      priority: 'medium',
      timestamp: new Date(Date.now() - 3600000).toISOString() // 1 hour ago
    },
    {
      _type: 'liveUpdate',
      title: 'Secret Task in Progress',
      description: 'A contestant is currently executing a secret task assigned by Bigg Boss.',
      updateType: 'task',
      isLive: true,
      priority: 'high',
      timestamp: new Date(Date.now() - 1800000).toISOString() // 30 mins ago
    }
  ]

  // Sample FAQ data
  const faqs = [
    {
      _type: 'faq',
      question: 'How do I vote for my favorite contestant in Bigg Boss Telugu 9?',
      answer: 'You can vote through the official Disney+ Hotstar app or website. Download the app, log in or create an account, search for Bigg Boss Telugu 9, and click on the voting section. Each user gets 50 free votes per day.',
      category: 'voting',
      order: 1,
      isActive: true
    },
    {
      _type: 'faq',
      question: 'Is voting free for Bigg Boss Telugu 9?',
      answer: 'Yes, voting is completely free! Disney+ Hotstar provides 50 free votes per day for each registered user. You don\'t need to pay anything to support your favorite contestant.',
      category: 'voting',
      order: 2,
      isActive: true
    },
    {
      _type: 'faq',
      question: 'When does the voting period start and end each week?',
      answer: 'Voting typically opens after the nomination episode (usually Monday) and closes on Friday evening before the elimination episode. The exact timing may vary, so check the Hotstar app for current voting status.',
      category: 'voting',
      order: 3,
      isActive: true
    },
    {
      _type: 'faq',
      question: 'Who is the host of Bigg Boss Telugu 9?',
      answer: 'Nagarjuna Akkineni is the host of Bigg Boss Telugu 9, continuing his successful journey as the host of this popular reality show.',
      category: 'general',
      order: 4,
      isActive: true
    }
  ]

  try {
    // Create contestants
    console.log('Creating contestants...')
    for (const contestant of contestants) {
      await client.create(contestant)
    }

    // Create news articles
    console.log('Creating news articles...')
    for (const article of news) {
      await client.create(article)
    }

    // Create live updates
    console.log('Creating live updates...')
    for (const update of liveUpdates) {
      await client.create(update)
    }

    // Create FAQs
    console.log('Creating FAQs...')
    for (const faq of faqs) {
      await client.create(faq)
    }

    console.log('✅ Successfully seeded all data to Sanity!')
  } catch (error) {
    console.error('❌ Error seeding data:', error)
  }
}

// Run the seed function
seedData()
