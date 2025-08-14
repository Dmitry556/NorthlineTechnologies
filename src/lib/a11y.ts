// Accessibility utilities and helpers

export function createId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

export function announceToScreenReader(message: string) {
  if (typeof window === 'undefined') return
  
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'polite')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

export function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  
  const firstFocusable = focusableElements[0] as HTMLElement
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement
  
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault()
          lastFocusable.focus()
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault()
          firstFocusable.focus()
        }
      }
    }
    
    if (e.key === 'Escape') {
      // Allow parent components to handle escape
      element.dispatchEvent(new CustomEvent('close'))
    }
  }
  
  element.addEventListener('keydown', handleKeyDown)
  
  return () => {
    element.removeEventListener('keydown', handleKeyDown)
  }
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}