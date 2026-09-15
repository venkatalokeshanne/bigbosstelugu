// Pushes a custom event into the GTM dataLayer so it can be turned into a
// GA4 conversion/goal or a GTM trigger without any further code changes.
// Safe to call before GTM has loaded — dataLayer.push just queues the event.
export function pushGTMEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...params })
}
