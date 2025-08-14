import { Container } from './Container'
import { Section } from './Section'
import { Server, Shield, Users, Mail, Lock, Settings } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/lib/motion'

const services = [
  {
    icon: Settings,
    title: "IT Systems Integration",
    description: "Connect your tools and teams seamlessly. Everything works together from the start."
  },
  {
    icon: Server,
    title: "Cloud Infrastructure Setup & Management", 
    description: "Scale up or down instantly. Your infrastructure grows with your business, not against it."
  },
  {
    icon: Users,
    title: "Identity & Access Control",
    description: "The right people get the right access. Onboard new hires in minutes, not days."
  },
  {
    icon: Mail,
    title: "Email & Communications Systems",
    description: "Professional email that just works. No spam folders, no missed messages, no headaches."
  },
  {
    icon: Shield,
    title: "Security & Compliance Support",
    description: "Sleep better knowing your data is protected. We build security into every layer."
  },
  {
    icon: Lock,
    title: "Onboarding & Vendor Coordination",
    description: "One point of contact for everything technical. We manage the vendors so you don't have to."
  }
]

export function Services() {
  return (
    <Section id="capabilities" background="surface" padding="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--nl-text)]">
            What We Do
          </h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <StaggerItem key={service.title}>
                <div className="p-6 rounded-[var(--nl-radius-lg)] border border-[var(--nl-border)] bg-[var(--nl-bg)] hover:bg-[var(--nl-elev)] transition-colors duration-[var(--nl-motion)]">
                  <div className="w-12 h-12 rounded-[var(--nl-radius)] bg-[var(--nl-brand)]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[var(--nl-brand)]" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-[var(--nl-text)]">
                    {service.title}
                  </h3>
                  
                  <p className="text-[var(--nl-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </Container>
    </Section>
  )
}