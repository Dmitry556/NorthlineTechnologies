import { Container } from './Container'
import { Section } from './Section'

export function BuiltFor() {
  return (
    <Section padding="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[var(--nl-text)]">
              Built for Modern Teams
            </h2>
            
            <p className="text-xl text-[var(--nl-muted)] mb-6 leading-relaxed">
              Fast-growing companies trust us to handle their entire IT backbone. We serve startups that need to move quickly, 
              remote teams that demand reliable access, and digital businesses that can&apos;t afford downtime.
            </p>
          </div>

          <div className="bg-[var(--nl-surface)] border border-[var(--nl-border)] rounded-[var(--nl-radius-lg)] p-8">
            <p className="text-lg text-[var(--nl-text)] leading-relaxed">
              You get more than managed services. You get a team that owns your infrastructure completely. 
              No tickets to file. No escalations to manage. We handle problems before you notice them.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}