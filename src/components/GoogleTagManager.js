'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function GoogleTagManager() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const GTM_ID = 'GTM-MX2WVXWS'

  // Prevent hydration mismatch by delaying script loading
  useEffect(() => {
    // Delay initial load to prevent hydration issues
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!shouldLoad || hasInteracted) return

    // Load on user interaction (scroll, click, or touch)
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
      }
    }

    const events = ['scroll', 'click', 'touchstart', 'mousemove']
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { passive: true, once: true })
    })

    // Auto-load after 4 seconds if no interaction
    const autoLoadTimer = setTimeout(() => {
      if (!hasInteracted) {
        setHasInteracted(true)
      }
    }, 4000)

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction)
      })
      clearTimeout(autoLoadTimer)
    }
  }, [shouldLoad, hasInteracted])

  // Don't render anything until client-side to prevent hydration mismatch
  if (!shouldLoad) {
    return null
  }

  return (
    <>
      {hasInteracted && (
        <>
          {/* Google Tag Manager Head Script */}
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
            onLoad={() => {
              console.log('Google Tag Manager loaded')
            }}
            onError={(e) => {
              console.error('Google Tag Manager failed to load:', e)
            }}
          />
        </>
      )}
    </>
  )
}