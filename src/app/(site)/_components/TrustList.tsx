import { Container } from './Container'

const companies = [
  'Clearpath Analytics',
  'Bright Commerce', 
  'Dataflow Systems',
  'MedConnect',
  'Rapid Deploy',
  'Summit Software'
]

// Simple SVG logos - using text for now, would be replaced with actual logos
function CompanyLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center p-4 h-16 grayscale opacity-70 hover:opacity-100 transition-opacity duration-[var(--nl-motion)]">
      <span className="text-sm font-medium text-[var(--nl-muted)]">
        {name}
      </span>
    </div>
  )
}

export function TrustList() {
  return (
    <div className="py-12 border-y border-[var(--nl-keyline)]">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-sm font-medium text-[var(--nl-muted)] uppercase tracking-wide">
            Trusted by Growing Companies
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {companies.map((company) => (
            <CompanyLogo key={company} name={company} />
          ))}
        </div>
      </Container>
    </div>
  )
}