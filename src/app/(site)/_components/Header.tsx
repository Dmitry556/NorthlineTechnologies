'use client'

import { useState, useEffect } from 'react'
import { Button } from './Button'
import { Container } from './Container'
import { cn } from '@/lib/utils'
import { trackCTAClick } from '@/lib/analytics'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (item: string) => {
    const element = document.getElementById(item.toLowerCase().replace(' ', '-'))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCTAClick = (cta: string) => {
    trackCTAClick(cta, 'header')
  }

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[var(--nl-bg)]/95 backdrop-blur-md border-b border-[var(--nl-keyline)] shadow-sm" 
          : "bg-transparent"
      )}
    >
      <Container>
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          isScrolled ? "py-3" : "py-4"
        )}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold text-[var(--nl-text)]">
              Northline Technologies
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Capabilities', 'Why Northline', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-[var(--nl-muted)] hover:text-[var(--nl-text)] transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost"
              size="sm"
              onClick={() => handleCTAClick('View capabilities')}
              className="hidden sm:inline-flex"
            >
              View capabilities
            </Button>
            <Button 
              size="sm"
              onClick={() => handleCTAClick('Start free')}
            >
              Start free
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}