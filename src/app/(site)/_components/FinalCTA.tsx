'use client'

import { Button } from './Button'
import { Container } from './Container'
import { Section } from './Section'
import { trackCTAClick } from '@/lib/analytics'

export function FinalCTA() {
  const handleCTAClick = () => {
    trackCTAClick('Claim your free month', 'final_cta')
  }

  return (
    <Section background="surface" padding="lg">
      <Container size="narrow">
        <div className="text-center p-12 rounded-[var(--nl-radius-lg)] border border-[var(--nl-border)] bg-gradient-to-br from-[var(--nl-brand)]/5 to-[var(--nl-accent)]/5">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--nl-text)]">
            Start Your Free Month Today
          </h2>
          
          <p className="text-xl text-[var(--nl-muted)] mb-8 max-w-2xl mx-auto">
            See why growing companies choose Northline. Get enterprise-grade infrastructure without the enterprise complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button size="lg" onClick={handleCTAClick} className="min-w-[240px]">
              Claim your free month
            </Button>
          </div>

          <p className="text-sm text-[var(--nl-muted)]">
            Takes 10 minutes to get started
          </p>
          
          <p className="text-xs text-[var(--nl-muted)] mt-2">
            No credit card required. No setup fees. Cancel anytime.
          </p>
        </div>
      </Container>
    </Section>
  )
}