'use client'

import { Container } from './Container'
import { Section } from './Section'
import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Footer() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('nl-theme') as 'light' | 'dark' || 'dark'
    setTheme(savedTheme)
    document.documentElement.className = savedTheme
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('nl-theme', newTheme)
    document.documentElement.className = newTheme
  }

  return (
    <Section background="elevated" padding="default">
      <Container>
        <div className="border-t border-[var(--nl-keyline)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Company Info */}
            <div>
              <div className="text-lg font-bold text-[var(--nl-text)] mb-2">
                Northline Technologies
              </div>
              <div className="text-sm text-[var(--nl-muted)] space-y-1">
                <p>United States</p>
                <p>
                  <a 
                    href="mailto:contact@northlinetech.com" 
                    className="hover:text-[var(--nl-text)] transition-colors"
                  >
                    contact@northlinetech.com
                  </a>
                </p>
              </div>
            </div>

            {/* Links & Theme Toggle */}
            <div className="flex items-center gap-6">
              <nav className="flex gap-6 text-sm">
                <a 
                  href="/privacy" 
                  className="text-[var(--nl-muted)] hover:text-[var(--nl-text)] transition-colors"
                >
                  Privacy
                </a>
                <a 
                  href="/terms" 
                  className="text-[var(--nl-muted)] hover:text-[var(--nl-text)] transition-colors"
                >
                  Terms
                </a>
              </nav>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-[var(--nl-radius)] hover:bg-[var(--nl-elev)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon size={18} className="text-[var(--nl-muted)]" />
                ) : (
                  <Sun size={18} className="text-[var(--nl-muted)]" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--nl-keyline)] text-center">
            <p className="text-xs text-[var(--nl-muted)]">
              © {new Date().getFullYear()} Northline Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}