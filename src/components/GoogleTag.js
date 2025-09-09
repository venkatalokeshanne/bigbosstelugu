'use client'

import Script from 'next/script'

export default function GoogleTag({ measurementId, config = {} }) {
  // Use provided measurement ID or environment variable
  const GA_MEASUREMENT_ID = measurementId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  
  // Don't render if no measurement ID is provided or in development with placeholder
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return null
  }

  // Default configuration
  const defaultConfig = {
    page_title: 'document.title',
    page_location: 'window.location.href',
    anonymize_ip: true,
    cookie_flags: 'secure;samesite=lax',
    send_page_view: true,
    ...config
  }

  return (
    <>
      {/* Google Tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', ${JSON.stringify(defaultConfig)});
        `}
      </Script>
    </>
  )
}