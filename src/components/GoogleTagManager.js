'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function GoogleTagManager() {
  const [shouldLoadGTM, setShouldLoadGTM] = useState(false)
  const GTM_ID = 'GTM-MX2WVXWS'

  // Lazy load GTM after user interaction or 4 seconds delay
  useEffect(() => {
    const loadGTM = () => setShouldLoadGTM(true)
    
    // Load after user interaction
    const handleInteraction = () => {
      loadGTM()
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
      document.removeEventListener('keydown', handleInteraction)
    }

    // Load after 4 seconds if no interaction
    const timer = setTimeout(loadGTM, 4000)

    // Add event listeners for user interaction
    document.addEventListener('click', handleInteraction, { passive: true })
    document.addEventListener('scroll', handleInteraction, { passive: true })
    document.addEventListener('touchstart', handleInteraction, { passive: true })
    document.addEventListener('keydown', handleInteraction, { passive: true })

    return () => {
      clearTimeout(timer)
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
      document.removeEventListener('keydown', handleInteraction)
    }
  }, [])

  // Only render script when needed
  if (!shouldLoadGTM) return null

  return (
    <Script id="google-tag-manager" strategy="lazyOnload">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
  )
}