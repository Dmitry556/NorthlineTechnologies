'use client'

import { Button } from './Button'
import { Container } from './Container'
import { Section } from './Section'
import { Check } from 'lucide-react'
import { trackCTAClick } from '@/lib/analytics'

const included = [
  "Full infrastructure audit and setup",
  "Cloud environment configuration", 
  "Security baseline implementation",
  "Team onboarding (up to 25 users)",
  "24/7 monitoring from day one",
  "Direct engineer access"
]

export function OfferSection() {
  const handleCTAClick = () => {
    trackCTAClick('Claim your free month', 'offer_section')
  }

  return (
    <Section id="offer" background="surface" padding="lg">
      <Container size="narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--nl-text)]">
            Limited Intro Offer: First Month Free
          </h2>
          
          <p className="text-xl text-[var(--nl-muted)] leading-relaxed">
            Get your complete IT infrastructure set up at no charge. We&apos;ll migrate your systems, 
            configure your cloud environment, and handle all technical setup. Pay nothing for 30 days.
          </p>
        </div>

        <div className="bg-[var(--nl-bg)] border border-[var(--nl-border)] rounded-[var(--nl-radius-lg)] p-8 mb-8">
          <h3 className="text-xl font-semibold mb-6 text-[var(--nl-text)]">
            What&apos;s included:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--nl-success)]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check size={12} className="text-[var(--nl-success)]" />
                </div>
                <span className="text-[var(--nl-text)]">{item}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--nl-keyline)] pt-6 text-center">
            <Button size="lg" onClick={handleCTAClick} className="min-w-[240px] mb-4">
              Claim your free month
            </Button>
            
            <p className="text-sm text-[var(--nl-muted)]">
              Only 3 spots available this quarter
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-[var(--nl-muted)] space-y-1">
          <p>No contracts. Cancel anytime during your trial.</p>
          <p>Keep all documentation and configurations if you leave.</p>
        </div>
      </Container>
    </Section>
  )
}