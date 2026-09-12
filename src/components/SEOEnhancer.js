'use client'

import { useEffect } from 'react'

export default function SEOEnhancer() {
  useEffect(() => {
    // Add canonical link if not present
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link')
      canonical.rel = 'canonical'
      canonical.href = window.location.href
      document.head.appendChild(canonical)
    }

    // Add preload for critical resources
    const preloadResources = [
      { href: '/images/bigboss.jpg', as: 'image', type: 'image/jpeg' }
    ]

    preloadResources.forEach(({ href, as, type, crossOrigin }) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const preload = document.createElement('link')
        preload.rel = 'preload'
        preload.href = href
        preload.as = as
        if (type) preload.type = type
        if (crossOrigin) preload.crossOrigin = crossOrigin
        document.head.appendChild(preload)
      }
    })

    // Add performance hints
    const performanceHints = [
      { rel: 'dns-prefetch', href: '//www.hotstar.com' },
      { rel: 'dns-prefetch', href: '//images.hotstar.com' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }
    ]

    performanceHints.forEach(({ rel, href }) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const hint = document.createElement('link')
        hint.rel = rel
        hint.href = href
        document.head.appendChild(hint)
      }
    })

    // Add Open Graph meta tags dynamically
    const ogTags = [
      { property: 'og:updated_time', content: new Date().toISOString() },
      { property: 'og:section', content: 'Reality TV' },
      { property: 'og:tag', content: 'Bigg Boss Telugu 10' },
      { property: 'article:author', content: 'Bigg Boss Telugu 10 Team' },
      { property: 'article:section', content: 'Entertainment' },
      { property: 'article:tag', content: 'Bigg Boss Telugu 10, BB Telugu 10, Reality TV, Voting, Entertainment' }
    ]

    ogTags.forEach(({ property, content }) => {
      if (!document.querySelector(`meta[property="${property}"]`)) {
        const meta = document.createElement('meta')
        meta.setAttribute('property', property)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    })

    // Add additional meta tags for better SEO
    const additionalMetas = [
      { name: 'news_keywords', content: 'Bigg Boss Telugu 10, BB Telugu 10, Voting, Reality TV, Entertainment, Nagarjuna, Star Maa, Hotstar, Telugu Show' },
      { name: 'content-language', content: 'en-US' },
      { name: 'audience', content: 'all' },
      { name: 'rating', content: 'safe for kids' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'target', content: 'all' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'apple-mobile-web-app-title', content: 'BB Telugu 10 Vote' },
      { name: 'application-name', content: 'Bigg Boss Telugu 10 Voting' },
      { name: 'msapplication-tooltip', content: 'Vote for Bigg Boss Telugu 10 contestants online' }
    ]

    additionalMetas.forEach(({ name, content }) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta')
        meta.setAttribute('name', name)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    })

  }, [])

  return null
}
