// SEO Optimized Heading Components for consistent H tag hierarchy

export function SEOHeading1({ children, className = "", ...props }) {
  return (
    <h1 className={`text-5xl md:text-7xl font-black leading-tight ${className}`} {...props}>
      {children}
    </h1>
  )
}

export function SEOHeading2({ children, className = "", ...props }) {
  return (
    <h2 className={`text-4xl md:text-6xl font-bold ${className}`} {...props}>
      {children}
    </h2>
  )
}

export function SEOHeading3({ children, className = "", ...props }) {
  return (
    <h3 className={`text-2xl md:text-3xl font-bold ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function SEOHeading4({ children, className = "", ...props }) {
  return (
    <h4 className={`text-xl md:text-2xl font-semibold ${className}`} {...props}>
      {children}
    </h4>
  )
}

export function SEOHeading5({ children, className = "", ...props }) {
  return (
    <h5 className={`text-lg md:text-xl font-medium ${className}`} {...props}>
      {children}
    </h5>
  )
}

export function SEOHeading6({ children, className = "", ...props }) {
  return (
    <h6 className={`text-base md:text-lg font-medium ${className}`} {...props}>
      {children}
    </h6>
  )
}

// SEO-optimized keyword-rich headings
export const seoHeadings = {
  homepage: {
    h1: "Bigg Boss Telugu 9 Voting - Vote Online for Your Favorite Contestant",
    h2: {
      voting: "Vote Bigg Boss Telugu 9 Contestants Online",
      contestants: "Bigg Boss Telugu 9 Contestants Profiles", 
      news: "Bigg Boss Telugu 9 Breaking News & Updates",
      howToVote: "How to Vote Bigg Boss Telugu 9 Online - Complete Voting Guide",
      faq: "Bigg Boss Telugu 9 Voting - Frequently Asked Questions",
      liveUpdates: "Bigg Boss Telugu 9 Live Updates & Latest News"
    }
  },
  contestants: {
    h1: "Bigg Boss Telugu 9 Contestants List - Complete Profiles & Voting",
    h2: {
      active: "Active Bigg Boss Telugu 9 Contestants",
      eliminated: "Eliminated Contestants - Bigg Boss Telugu 9",
      voting: "Vote for Bigg Boss Telugu 9 Contestants Online"
    }
  },
  news: {
    h1: "Bigg Boss Telugu 9 News & Updates - Latest Episodes & Eliminations",
    h2: {
      featured: "Featured Bigg Boss Telugu 9 News Stories",
      latest: "Latest Bigg Boss Telugu 9 News Articles",
      updates: "Live Updates from Bigg Boss Telugu 9 House"
    }
  },
  individual: {
    // Dynamic based on contestant name
    h1: (name) => `${name} - Bigg Boss Telugu 9 Contestant Profile & Voting`,
    h2: {
      profile: "Contestant Profile & Biography",
      journey: "Journey in Bigg Boss Telugu 9 House",
      vote: "Vote for This Contestant"
    }
  }
}

// H tag validation function for SEO best practices
export function validateHeadingHierarchy(headings) {
  const issues = []
  
  // Check for H1
  const h1Count = headings.filter(h => h.tag === 'h1').length
  if (h1Count === 0) {
    issues.push('No H1 tag found - critical for SEO')
  } else if (h1Count > 1) {
    issues.push('Multiple H1 tags found - should be only one per page')
  }
  
  // Check hierarchy
  const tagNumbers = headings.map(h => parseInt(h.tag.slice(1)))
  for (let i = 1; i < tagNumbers.length; i++) {
    if (tagNumbers[i] > tagNumbers[i-1] + 1) {
      issues.push(`Heading hierarchy jump from H${tagNumbers[i-1]} to H${tagNumbers[i]}`)
    }
  }
  
  return {
    isValid: issues.length === 0,
    issues,
    recommendations: generateSEORecommendations(headings)
  }
}

function generateSEORecommendations(headings) {
  const recommendations = []
  
  // Check for keyword optimization
  const h1 = headings.find(h => h.tag === 'h1')
  if (h1 && !h1.text.toLowerCase().includes('bigg boss telugu 9')) {
    recommendations.push('Include main keyword "Bigg Boss Telugu 9" in H1 tag')
  }
  
  // Check for voting keywords
  const hasVotingKeywords = headings.some(h => 
    h.text.toLowerCase().includes('vote') || 
    h.text.toLowerCase().includes('voting')
  )
  if (!hasVotingKeywords) {
    recommendations.push('Include voting-related keywords in headings')
  }
  
  // Check for location-specific keywords
  const hasTeluguKeywords = headings.some(h => 
    h.text.toLowerCase().includes('telugu')
  )
  if (!hasTeluguKeywords) {
    recommendations.push('Include "Telugu" keyword for regional SEO')
  }
  
  return recommendations
}

export default {
  SEOHeading1,
  SEOHeading2,
  SEOHeading3,
  SEOHeading4,
  SEOHeading5,
  SEOHeading6,
  seoHeadings,
  validateHeadingHierarchy
}
