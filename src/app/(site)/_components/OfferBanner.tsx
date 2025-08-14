'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from './Button'
import { Container } from './Container'
import { trackOfferDismiss, trackCTAClick } from '@/lib/analytics'

const STORAGE_KEY = 'nl.offer.v1'

export function OfferBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      setIsVisible(true)
    }
    setIsLoaded(true)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem(STORAGE_KEY, 'true')
    trackOfferDismiss()
  }

  const handleCtaClick = () => {
    trackCTAClick('Start free', 'offer_banner')
    // Scroll to offer section
    const offerSection = document.getElementById('offer')
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isLoaded || !isVisible) {
    return null
  }

  return (
    <div 
      className="bg-[var(--nl-brand)] text-[var(--nl-brand-ink)] border-b border-[var(--nl-brand)]/20 relative"
      role="banner"
      aria-live="polite"
    >
      <Container>
        <div className="flex items-center justify-between py-3 gap-4">
          <div className="flex-1 text-center lg:text-left">
            <span className="text-sm font-medium">
              Limited Intro Offer: First Month Free — Only 3 spots available this quarter
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="secondary"
              onClick={handleCtaClick}
              className="bg-white/10 hover:bg-white/20 text-[var(--nl-brand-ink)] border-white/20"
            >
              Start free
            </Button>
            <button
              onClick={handleDismiss}
              className="text-[var(--nl-brand-ink)]/70 hover:text-[var(--nl-brand-ink)] transition-colors p-1 rounded-sm"
              aria-label="Dismiss offer banner"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}