'use client'

import { useEffect, useRef } from 'react'

// Runs `callback` every `intervalMs`, but only while the tab is visible, and
// once immediately when a hidden tab becomes visible again. Background tabs
// otherwise keep hitting the API, which burns edge-request quota for nothing.
export function useVisiblePolling(callback, intervalMs) {
  const cbRef = useRef(callback)
  cbRef.current = callback

  useEffect(() => {
    let timer = null

    const start = () => {
      if (timer) return
      timer = setInterval(() => cbRef.current(), intervalMs)
    }
    const stop = () => {
      if (timer) clearInterval(timer)
      timer = null
    }
    const onVisibility = () => {
      if (document.hidden) {
        stop()
      } else {
        cbRef.current()
        start()
      }
    }

    if (!document.hidden) start()
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [intervalMs])
}
