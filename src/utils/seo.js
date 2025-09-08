// SEO utilities for generating structured data and meta tags

export function generateStructuredData(data) {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": data.type,
    "name": data.name,
    "description": data.description,
    "url": data.url || "https://bigbosstelugu9voting.com",
  }

  switch (data.type) {
    case 'TVSeries':
      return {
        ...baseStructure,
        "@type": "TVSeries",
        "genre": data.genre || "Reality TV",
        "numberOfSeasons": data.numberOfSeasons || 9,
        "inLanguage": "te",
        "countryOfOrigin": {
          "@type": "Country",
          "name": "India"
        },
        "creator": {
          "@type": "Organization",
          "name": "Endemol Shine India"
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
            "url": "https://bigbosstelugu9voting.com/logo.png"
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
        "url": "https://bigbosstelugu9voting.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://bigbosstelugu9voting.com/search?q={search_term_string}",
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
  const baseUrl = 'https://bigbosstelugu9voting.com'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const ogImage = image ? `${baseUrl}${image}` : `${baseUrl}/images/og-image.jpg`

  return {
    title,
    description,
    keywords,
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
        },
      ],
      locale: 'en_US',
      type,
      ...(publishedAt && { publishedTime: publishedAt }),
      ...(modifiedAt && { modifiedTime: modifiedAt }),
      ...(author && { 
        authors: Array.isArray(author) ? author : [author] 
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@StarMaa',
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
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
      "item": crumb.url ? `https://bigbosstelugu9voting.com${crumb.url}` : undefined
    }))
  }
}
