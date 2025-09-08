// Sample contestants data
export const contestants = [
  {
    id: 'abhishek',
    name: 'Abhishek',
    fullName: 'Abhishek Kumar',
    age: 28,
    profession: 'Actor',
    image: '/api/placeholder?text=Secret%20Room&width=600&height=400',
    bio: 'Popular Telugu actor known for his roles in romantic dramas and comedy films.',
    hometown: 'Hyderabad',
    status: 'active', // active, eliminated, winner
    votes: 125000,
    social: {
      instagram: '@abhishek_official',
      twitter: '@abhishekactor'
    }
  },
  {
    id: 'priya',
    name: 'Priya',
    fullName: 'Priya Sharma',
    age: 25,
    profession: 'Model',
    image: '/api/placeholder?text=Priya&width=400&height=500',
    bio: 'Fashion model and social media influencer with a huge following.',
    hometown: 'Visakhapatnam',
    status: 'active',
    votes: 98000,
    social: {
      instagram: '@priya_model',
      twitter: '@priyasharma'
    }
  },
  {
    id: 'ravi',
    name: 'Ravi',
    fullName: 'Ravi Teja',
    age: 32,
    profession: 'Singer',
    image: '/api/placeholder?text=Ravi&width=400&height=500',
    bio: 'Playback singer who has sung for over 100 Telugu films.',
    hometown: 'Vijayawada',
    status: 'active',
    votes: 87000,
    social: {
      instagram: '@ravi_singer',
      twitter: '@raviteja_music'
    }
  },
  {
    id: 'sneha',
    name: 'Sneha',
    fullName: 'Sneha Reddy',
    age: 27,
    profession: 'Dancer',
    image: '/api/placeholder?text=Sneha&width=400&height=500',
    bio: 'Classical dancer and choreographer specializing in Kuchipudi.',
    hometown: 'Tirupati',
    status: 'active',
    votes: 76000,
    social: {
      instagram: '@sneha_dancer',
      twitter: '@snehareddy'
    }
  },
  {
    id: 'kiran',
    name: 'Kiran',
    fullName: 'Kiran Kumar',
    age: 30,
    profession: 'Comedian',
    image: '/api/placeholder?text=Kiran&width=400&height=500',
    bio: 'Stand-up comedian and television host known for his witty humor.',
    hometown: 'Warangal',
    status: 'active',
    votes: 65000,
    social: {
      instagram: '@kiran_comedy',
      twitter: '@kirancomedian'
    }
  },
  {
    id: 'meera',
    name: 'Meera',
    fullName: 'Meera Nair',
    age: 26,
    profession: 'Actress',
    image: '/api/placeholder?text=Meera&width=400&height=500',
    bio: 'Television actress popular for her roles in daily serials.',
    hometown: 'Kurnool',
    status: 'active',
    votes: 54000,
    social: {
      instagram: '@meera_actress',
      twitter: '@meeranair'
    }
  },
  {
    id: 'arjun',
    name: 'Arjun',
    fullName: 'Arjun Varma',
    age: 29,
    profession: 'Fitness Trainer',
    image: '/api/placeholder?text=Arjun&width=400&height=500',
    bio: 'Fitness expert and bodybuilder with a passion for healthy living.',
    hometown: 'Guntur',
    status: 'eliminated',
    votes: 45000,
    social: {
      instagram: '@arjun_fitness',
      twitter: '@arjunvarma'
    }
  },
  {
    id: 'kavya',
    name: 'Kavya',
    fullName: 'Kavya Krishna',
    age: 24,
    profession: 'YouTuber',
    image: '/api/placeholder?text=Kavya&width=400&height=500',
    bio: 'Content creator and social media personality with millions of followers.',
    hometown: 'Nellore',
    status: 'active',
    votes: 43000,
    social: {
      instagram: '@kavya_youtube',
      twitter: '@kavyakrishna'
    }
  }
]

// News articles data
export const newsArticles = [
  {
    id: 'week-3-eviction-results',
    title: 'Week 3 Eviction Results: Shocking Elimination Leaves Housemates Stunned',
    slug: 'week-3-eviction-results',
    excerpt: 'In a surprising turn of events, one of the strongest contestants was eliminated in Week 3, changing the entire game dynamics.',
    content: `The third week of Bigg Boss Telugu 9 witnessed one of the most shocking eliminations in the show's history. Despite having a strong fan following and consistent performance in tasks, the contestant was voted out due to strategic gameplay by other housemates.

The elimination ceremony, hosted by Nagarjuna, revealed the voting patterns and highlighted how alliances are forming and breaking inside the house. The evicted contestant expressed gratitude to fans and shared insights about the experience.

Key highlights from Week 3:
- Major argument between two strong contestants
- Formation of new alliances
- Surprise captain selection
- Emotional breakdown during confession room sessions

The remaining contestants now face tougher challenges as they move into the fourth week with reduced numbers and increased competition.`,
    author: 'BB Telugu Team',
    publishedAt: '2025-01-15T18:00:00Z',
    category: 'Evictions',
    tags: ['eviction', 'week3', 'elimination', 'voting results'],
    image: 'https://via.placeholder.com/800x450/dc2626/ffffff?text=Week+3+Eviction',
    readTime: '3 min read'
  },
  {
    id: 'luxury-budget-task-controversy',
    title: 'Luxury Budget Task Sparks Major Controversy in Bigg Boss House',
    slug: 'luxury-budget-task-controversy',
    excerpt: 'This week\'s luxury budget task led to heated arguments and rule violations, creating tension among contestants.',
    content: `The latest luxury budget task in Bigg Boss Telugu 9 has become the center of a major controversy. The task, designed to test teamwork and strategy, quickly turned into a battlefield with contestants accusing each other of cheating and rule violations.

The task required contestants to work in teams to complete various challenges while maintaining their assigned roles. However, disagreements over strategy and execution led to heated arguments and even physical confrontations.

Bigg Boss had to intervene multiple times to restore order, and several contestants received warnings for their behavior. The incident has significantly impacted relationships inside the house, with some friendships hanging by a thread.

Impact on house dynamics:
- Trust issues between former allies
- Formation of opposing groups
- Increased tension during daily interactions
- Strategic gameplay reaching new levels

The controversy is expected to influence the upcoming nominations and voting patterns as viewers react to contestants' behavior during the task.`,
    author: 'Entertainment Desk',
    publishedAt: '2025-01-12T14:30:00Z',
    category: 'Tasks',
    tags: ['luxury budget', 'task', 'controversy', 'arguments'],
    image: 'https://via.placeholder.com/800x450/dc2626/ffffff?text=Task+Controversy',
    readTime: '4 min read'
  },
  {
    id: 'secret-room-twist-revealed',
    title: 'Secret Room Twist: Eliminated Contestant Returns with Special Powers',
    slug: 'secret-room-twist-revealed',
    excerpt: 'Bigg Boss introduces a game-changing twist as a previously eliminated contestant returns with special nomination powers.',
    content: `In a shocking twist that nobody saw coming, Bigg Boss Telugu 9 has introduced the secret room concept, bringing back a previously eliminated contestant with special powers that could change the entire game.

The returning contestant was secretly monitoring the house activities and now has the power to directly nominate two contestants for elimination. This twist has sent shockwaves through the house, with current contestants scrambling to understand the new dynamics.

The secret room revelation happened during the weekend episode, with host Nagarjuna explaining the new rules and powers. The returning contestant will have immunity for two weeks and can influence nominations significantly.

New powers include:
- Direct nomination rights for two contestants
- Immunity from eliminations for 2 weeks  
- Access to secret information about other contestants
- Special voting privileges in captain selection

This twist is expected to completely reshape alliances and strategies as contestants must now account for this new variable in their game plans. Fans are divided on social media about the fairness of this twist.`,
    author: 'Reality TV Correspondent',
    publishedAt: '2025-01-10T20:15:00Z',
    category: 'Twists',
    tags: ['secret room', 'twist', 'elimination', 'special powers'],
    image: 'https://via.placeholder.com/800x450/dc2626/ffffff?text=Secret+Room',
    readTime: '5 min read'
  }
]

// FAQ data
export const faqData = [
  {
    question: "How can I vote for Bigg Boss Telugu 9 contestants?",
    answer: "You can vote through multiple methods: 1) Disney+ Hotstar app (official voting), 2) SMS voting by sending contestant name to 58888, 3) Online polls on our website. Official Hotstar votes carry the most weight."
  },
  {
    question: "Is voting free? How many times can I vote?",
    answer: "Hotstar voting is free for premium subscribers. SMS voting has standard charges. You can vote multiple times per day, but there may be limits on official platforms. Our website polls allow unlimited voting."
  },
  {
    question: "When does voting close each week?",
    answer: "Voting typically closes on Friday at 11:59 PM before the weekend elimination episode. Exact timings may vary, so check the official announcements."
  },
  {
    question: "Which contestants are currently nominated for elimination?",
    answer: "Nominated contestants change weekly based on house nominations. Check our homepage for the latest nomination list and voting polls for the current week."
  },
  {
    question: "How are elimination results decided?",
    answer: "Eliminations are based on a combination of public voting (major factor), house nominations, and sometimes special tasks or twists introduced by Bigg Boss."
  },
  {
    question: "Can I change my vote after casting it?",
    answer: "On official platforms like Hotstar, you can vote multiple times which effectively changes your preference. On our polls, you can vote again to update your choice."
  },
  {
    question: "Are the voting results shown publicly?",
    answer: "Complete voting percentages are not usually revealed publicly. However, our website shows trend indicators and poll results to give you an idea of contestant popularity."
  },
  {
    question: "What happens if there's a tie in voting?",
    answer: "In case of a voting tie, Bigg Boss may use house captain's decision, previous week's performance, or introduce a special task to break the tie."
  }
]
