// SEO utilities for generating structured data and meta tags

export function generateStructuredData(data) {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": data.type,
    "name": data.name,
    "description": data.description,
    "url": data.url || "https://bigbossteluguvotes.in",
  }

  switch (data.type) {
    case 'TVSeries':
      return {
        ...baseStructure,
        "@type": "TVSeries",
        "genre": data.genre || "Reality TV",
        "numberOfSeasons": data.numberOfSeasons || 9,
        "inLanguage": ["te-IN", "en-US"],
        "countryOfOrigin": {
          "@type": "Country",
          "name": "India"
        },
        "creator": {
          "@type": "Organization",
          "name": "Endemol Shine India"
        },
        "actor": {
          "@type": "Person",
          "name": "Nagarjuna Akkineni",
          "jobTitle": "Host"
        },
        "startDate": "2024-09-01",
        "contentRating": "TV-14",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "bestRating": "5",
          "ratingCount": "10000"
        }
      }

    case 'Person':
      return {
        ...baseStructure,
        "@type": "Person",
        "image": data.image,
        "jobTitle": data.profession,
        "birthPlace": data.hometown,
        "knowsAbout": ["Reality TV", "Entertainment"],
        "sameAs": data.social ? Object.values(data.social) : []
      }

    case 'NewsArticle':
      return {
        ...baseStructure,
        "@type": "NewsArticle",
        "headline": data.title,
        "image": data.image,
        "datePublished": data.publishedAt,
        "dateModified": data.modifiedAt || data.publishedAt,
        "author": {
          "@type": "Person",
          "name": data.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Bigg Boss Telugu 9 Voting",
          "logo": {
            "@type": "ImageObject",
            "url": "https://bigbossteluguvotes.in/logo.png"
          }
        },
        "articleSection": data.category,
        "keywords": data.tags?.join(', '),
        "wordCount": data.content?.split(' ').length
      }

    case 'FAQPage':
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.questions?.map(q => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      }

    case 'WebSite':
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Bigg Boss Telugu 9 Voting",
        "url": "https://bigbossteluguvotes.in",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://bigbossteluguvotes.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "sameAs": [
          "https://twitter.com/StarMaa",
          "https://www.facebook.com/StarMaa",
          "https://www.instagram.com/starmaa"
        ]
      }

    default:
      return baseStructure
  }
}

export function generateMetaTags({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedAt,
  modifiedAt,
  author
}) {
  const baseUrl = 'https://bigbossteluguvotes.in'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const ogImage = image ? `${baseUrl}${image}` : `${baseUrl}/logo.png`

  return {
    title,
    description,
    keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords,
    
    // Viewport and mobile optimization
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    
    // Basic SEO meta tags
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Open Graph optimization
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Bigg Boss Telugu 9 Voting',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
        {
          url: ogImage,
          width: 1080,
          height: 1080,
          alt: title,
          type: 'image/png',
        }
      ],
      locale: 'te_IN',
      alternateLocale: ['en_US', 'hi_IN'],
      type,
      ...(publishedAt && { publishedTime: publishedAt }),
      ...(modifiedAt && { modifiedTime: modifiedAt }),
      ...(author && { 
        authors: Array.isArray(author) ? author : [author] 
      }),
    },
    
    // Twitter Card optimization
    twitter: {
      card: 'summary_large_image',
      site: '@StarMaa',
      creator: '@StarMaa',
      title,
      description,
      images: [ogImage],
    },
    
    // Canonical and alternates
    alternates: {
      canonical: fullUrl,
      languages: {
        'te-IN': fullUrl,
        'en-US': fullUrl,
        'x-default': fullUrl
      }
    },
    
    // Additional meta tags for better SEO
    other: {
      'theme-color': '#ff6b35',
      'msapplication-TileColor': '#ff6b35',
      'msapplication-config': '/browserconfig.xml',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'BB Telugu 9',
      'application-name': 'Bigg Boss Telugu 9 Voting',
      'msapplication-tooltip': 'Vote for your favorite Bigg Boss Telugu 9 contestant',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
      'apple-touch-fullscreen': 'yes',
    }
  }
}

export function generateBreadcrumbStructuredData(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url ? `https://bigbossteluguvotes.in${crumb.url}` : undefined
    }))
  }
}

// Generate comprehensive SEO keywords
export function generateSEOKeywords(contestantName = '', category = 'general') {
  const baseKeywords = [
    "Bigg Boss Telugu 9 Voting",
    "BB Telugu 9 Vote Online", 
    "Bigg Boss Telugu 9 Elimination",
    "BBT9 Voting Results",
    "Telugu Reality Show Voting",
    "Nagarjuna Bigg Boss Host",
    "Star MAA Voting",
    "Disney+ Hotstar Bigg Boss",
    "Telugu TV Show Vote",
    "Reality TV Voting India",
    "Bigg Boss Telugu Season 9",
    "BBT9 Contestants Vote",
    "Bigg Boss Telugu Live Voting",
    "Telugu Entertainment Voting",
    "Star MAA Reality Show",
    "Bigg Boss Telugu 9 Online",
    "BBT9 Live Stream",
    "Telugu Bigg Boss 2024",
    "Elimination Vote Telugu",
    "Reality Show Telugu"
  ]

  const categoryKeywords = {
    contestant: [
      `${contestantName} Bigg Boss Telugu`,
      `Vote for ${contestantName} BBT9`,
      `${contestantName} Elimination Vote`,
      `${contestantName} Bigg Boss Contestant`,
      `Support ${contestantName} Voting`,
      `${contestantName} BBT9 Profile`,
      `${contestantName} Bigg Boss Telugu 9`
    ],
    general: [
      "How to Vote Bigg Boss Telugu 9",
      "BBT9 Voting Process",
      "Bigg Boss Telugu 9 Online Vote",
      "Free Bigg Boss Voting",
      "Bigg Boss Telugu Voting App",
      "Star MAA Bigg Boss Vote",
      "Disney Hotstar BBT9 Vote"
    ],
    news: [
      "Bigg Boss Telugu 9 Latest News",
      "BBT9 Updates Today",
      "Bigg Boss Telugu 9 Elimination News",
      "Telugu Reality TV News",
      "BBT9 Episode Updates",
      "Bigg Boss Telugu 9 Highlights"
    ],
    home: [
      "Bigg Boss Telugu 9 Official Voting",
      "BBT9 Voting Website",
      "Vote BBT9 Contestants Online",
      "Bigg Boss Telugu 9 Voting Portal",
      "Star MAA BBT9 Official Vote"
    ]
  }

  return [
    ...baseKeywords,
    ...(categoryKeywords[category] || categoryKeywords.general)
  ]
}

// Generate Organization structured data
export function generateOrganizationData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bigg Boss Telugu 9 Voting",
    "url": "https://bigbossteluguvotes.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bigbossteluguvotes.in/logo.png",
      "width": 512,
      "height": 512
    },
    "sameAs": [
      "https://www.hotstar.com/in/shows/bigg-boss-telugu",
      "https://twitter.com/StarMaa",
      "https://www.facebook.com/StarMaa",
      "https://www.instagram.com/starmaa"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Telugu", "English", "Hindi"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "Reality TV",
      "Entertainment",
      "Telugu Television",
      "Voting Systems",
      "Bigg Boss Telugu"
    ]
  }
}

// Generate Website structured data
export function generateWebsiteData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bigg Boss Telugu 9 Voting",
    "alternateName": "BBT9 Voting",
    "url": "https://bigbossteluguvotes.in",
    "description": "Official voting platform for Bigg Boss Telugu 9. Vote for your favorite contestants online.",
    "inLanguage": ["te-IN", "en-US"],
    "isAccessibleForFree": true,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://bigbossteluguvotes.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bigg Boss Telugu 9 Voting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bigbossteluguvotes.in/logo.png"
      }
    },
    "copyrightYear": 2024,
    "genre": "Reality TV Voting Platform"
  }
}

// Generate FAQ structured data
export function generateFAQData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to vote in Bigg Boss Telugu 9?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can vote for your favorite Bigg Boss Telugu 9 contestants through Disney+ Hotstar app or by visiting our official voting website. Each user gets limited votes per day."
        }
      },
      {
        "@type": "Question", 
        "name": "Is Bigg Boss Telugu 9 voting free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, voting for Bigg Boss Telugu 9 is completely free. You can vote through the Disney+ Hotstar app or official voting platforms without any charges."
        }
      },
      {
        "@type": "Question",
        "name": "When does voting close each week?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voting for Bigg Boss Telugu 9 typically closes on Friday nights before the weekend episodes. Exact timings are announced during the show."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the host of Bigg Boss Telugu 9?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nagarjuna Akkineni is the host of Bigg Boss Telugu 9, continuing his role from previous seasons of the popular reality show."
        }
      }
    ]
  }
}
