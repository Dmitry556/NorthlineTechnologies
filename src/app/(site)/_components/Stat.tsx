'use client'

import { useEffect } from 'react'
import { Container } from './Container'
import { Section } from './Section'

interface StatItemProps {
  value: string
  label: string
  description: string
}

function StatItem({ value, label, description }: StatItemProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Could add animation trigger here
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(`stat-${label}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [label])

  return (
    <div id={`stat-${label}`} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-[var(--nl-text)] mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-[var(--nl-text)] mb-1">
        {label}
      </div>
      <div className="text-sm text-[var(--nl-muted)]">
        {description}
      </div>
    </div>
  )
}

const stats = [
  {
    value: "40+",
    label: "Hours Saved Monthly",
    description: "On IT management and troubleshooting"
  },
  {
    value: "<5min",
    label: "Response Time", 
    description: "For critical issues"
  },
  {
    value: "60 days",
    label: "ROI Timeline",
    description: "Most clients see return on investment"
  }
]

export function Stats() {
  return (
    <Section id="why-northline" background="surface" padding="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--nl-text)]">
            Why Companies Switch to Northline
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[var(--nl-muted)] max-w-2xl mx-auto">
            <strong className="text-[var(--nl-text)]">One monthly price</strong> covers everything. 
            No surprise bills. No hidden fees. Budget with confidence.
          </p>
        </div>
      </Container>
    </Section>
  )
}