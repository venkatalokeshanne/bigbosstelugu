'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function GoogleAnalytics() {
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false)
  const GA_MEASUREMENT_ID = 'G-TGDG975RBL'

  // Lazy load analytics after user interaction or 3 seconds delay
  useEffect(() => {
    const loadAnalytics = () => setShouldLoadAnalytics(true)
    
    // Load after user interaction
    const handleInteraction = () => {
      loadAnalytics()
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }

    // Load after 3 seconds if no interaction
    const timer = setTimeout(loadAnalytics, 3000)

    // Add event listeners for user interaction
    document.addEventListener('click', handleInteraction, { passive: true })
    document.addEventListener('scroll', handleInteraction, { passive: true })
    document.addEventListener('touchstart', handleInteraction, { passive: true })

    return () => {
      clearTimeout(timer)
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }
  }, [])

  // Only render scripts when needed
  if (!shouldLoadAnalytics) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}
