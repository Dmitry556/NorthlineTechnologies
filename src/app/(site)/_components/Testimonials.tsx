import { Container } from './Container'
import { Section } from './Section'

const testimonials = [
  {
    quote: "Northline took our infrastructure from constant fires to complete stability. We haven't had an incident in eight months. Our engineers can finally focus on building products instead of maintaining servers.",
    author: "Jennifer Walsh",
    title: "CTO",
    company: "Rapid Deploy",
    initials: "JW"
  },
  {
    quote: "We went from idea to production in three weeks. Northline handled everything technical while we focused on customers. Best decision we made as a young company.",
    author: "David Kim", 
    title: "Founder",
    company: "Bright Commerce",
    initials: "DK"
  }
]

export function Testimonials() {
  return (
    <Section background="elevated" padding="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--nl-text)]">
            Trusted by Growing Companies
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-[var(--nl-radius-lg)] border border-[var(--nl-border)] bg-[var(--nl-surface)] shadow-[var(--nl-shadow)]"
            >
              <blockquote className="text-lg text-[var(--nl-text)] mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--nl-brand)]/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-[var(--nl-brand)]">
                    {testimonial.initials}
                  </span>
                </div>
                
                <div>
                  <div className="font-semibold text-[var(--nl-text)]">
                    {testimonial.author}
                  </div>
                  <div className="text-[var(--nl-muted)] text-sm">
                    {testimonial.title} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}