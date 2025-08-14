import { Container } from './Container'
import { Section } from './Section'
import { FileText, Monitor, Zap } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: "Document Everything",
    description: "You own your runbooks, architecture diagrams, and recovery plans."
  },
  {
    icon: Monitor, 
    title: "Monitor & Respond",
    description: "Our monitoring catches issues early. Our incident response is immediate and transparent."
  },
  {
    icon: Zap,
    title: "Scale Smoothly", 
    description: "When you grow, your infrastructure is ready. Add users or offices seamlessly."
  }
]

export function Steps() {
  return (
    <Section background="elevated" padding="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[var(--nl-text)]">
            How We Work
          </h2>
          <p className="text-xl text-[var(--nl-muted)] max-w-3xl mx-auto leading-relaxed">
            We build with security first. Your infrastructure follows practices aligned with major compliance frameworks. 
            Every change is tracked. Every access point is secured. Every system is monitored.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-[var(--nl-keyline)]" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="text-center relative">
                {/* Step Number */}
                <div className="w-8 h-8 rounded-full bg-[var(--nl-brand)] text-[var(--nl-brand-ink)] text-sm font-bold flex items-center justify-center mx-auto mb-4 relative z-10">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-[var(--nl-radius-lg)] bg-[var(--nl-brand)]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-[var(--nl-brand)]" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-[var(--nl-text)]">
                  {step.title}
                </h3>
                
                <p className="text-[var(--nl-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}