'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function GoogleAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

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

    // Auto-load after 3 seconds if no interaction
    const autoLoadTimer = setTimeout(() => {
      if (!hasInteracted) {
        setHasInteracted(true)
      }
    }, 3000)

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
          {/* Google Analytics gtag script */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-TGDG975RBL"
            strategy="afterInteractive"
            onLoad={() => {
              // Initialize gtag
              window.dataLayer = window.dataLayer || []
              function gtag() {
                window.dataLayer.push(arguments)
              }
              window.gtag = gtag
              gtag('js', new Date())
              gtag('config', 'G-TGDG975RBL', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              })
            }}
            onError={(e) => {
              console.error('Google Analytics failed to load:', e)
            }}
          />
        </>
      )}
    </>
  )
}
