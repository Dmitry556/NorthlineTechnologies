type EventData = {
  event: string
  properties?: Record<string, unknown>
}

export function track(eventData: EventData) {
  if (typeof window === 'undefined') return
  
  // Simple first-party analytics - just log for now
  // In production, you'd send to your analytics endpoint
  console.log('[Analytics]', eventData)
  
  // Example: Track to local storage for basic analytics
  const events = JSON.parse(localStorage.getItem('nl_events') || '[]')
  events.push({
    ...eventData,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent
  })
  
  // Keep only last 100 events
  if (events.length > 100) {
    events.splice(0, events.length - 100)
  }
  
  localStorage.setItem('nl_events', JSON.stringify(events))
}

export function trackPageView(path: string) {
  track({
    event: 'page_view',
    properties: { path }
  })
}

export function trackCTAClick(ctaText: string, location: string) {
  track({
    event: 'cta_click',
    properties: { 
      cta_text: ctaText,
      location 
    }
  })
}

export function trackOfferDismiss() {
  track({
    event: 'offer_banner_dismiss'
  })
}