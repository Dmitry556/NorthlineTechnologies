export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--nl-bg)] text-[var(--nl-text)]">
      <header className="py-4 text-center">
        <h1 className="text-4xl font-bold">Northline Technologies</h1>
        <p className="text-xl text-[var(--nl-muted)] mt-2">Your Infrastructure Runs Itself</p>
      </header>
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Complete IT Management</h2>
          <p className="text-lg text-[var(--nl-muted)] mb-8">
            We build and manage the technical foundation that lets you focus on growth. 
            Secure, compliant, and ready to scale from day one.
          </p>
          <button className="bg-[var(--nl-brand)] text-[var(--nl-brand-ink)] px-8 py-3 rounded-[var(--nl-radius)] font-medium">
            Start free for 30 days
          </button>
        </div>
      </main>
    </div>
  )
}