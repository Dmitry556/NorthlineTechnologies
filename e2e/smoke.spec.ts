import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Homepage Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/site')
  })

  test('displays hero section correctly', async ({ page }) => {
    // Check hero headline is visible
    await expect(page.getByRole('heading', { name: /Your Infrastructure Runs Itself|Focus on Growth, Not Infrastructure/ })).toBeVisible()
    
    // Check CTAs are present and clickable
    await expect(page.getByRole('button', { name: /Start free|Get started free/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /View capabilities|See how it works/ })).toBeVisible()
  })

  test('has accessible navigation', async ({ page }) => {
    // Check header navigation
    await expect(page.getByRole('navigation')).toBeVisible()
    
    // Check skip link works
    const skipLink = page.getByRole('link', { name: 'Skip to main content' })
    await skipLink.focus()
    await expect(skipLink).toBeVisible()
  })

  test('offer banner can be dismissed and persists', async ({ page }) => {
    // Look for offer banner
    const offerBanner = page.getByRole('banner').filter({ hasText: 'Limited Intro Offer' })
    
    if (await offerBanner.isVisible()) {
      // Dismiss banner
      await page.getByRole('button', { name: 'Dismiss offer banner' }).click()
      await expect(offerBanner).not.toBeVisible()
      
      // Reload page and check it stays dismissed
      await page.reload()
      await expect(offerBanner).not.toBeVisible()
    }
  })

  test('services section renders correctly', async ({ page }) => {
    // Scroll to services section
    await page.locator('#capabilities').scrollIntoViewIfNeeded()
    
    // Check services grid is visible
    await expect(page.getByRole('heading', { name: 'What We Do' })).toBeVisible()
    
    // Check at least one service card exists
    await expect(page.locator('[class*="grid"] > *').first()).toBeVisible()
  })

  test('testimonials section is visible', async ({ page }) => {
    await page.locator('text=Trusted by Growing Companies').scrollIntoViewIfNeeded()
    
    // Check testimonials are present
    await expect(page.locator('blockquote').first()).toBeVisible()
  })

  test('final CTA is visible and functional', async ({ page }) => {
    await page.locator('text=Start Your Free Month Today').scrollIntoViewIfNeeded()
    
    // Check final CTA section
    await expect(page.getByRole('heading', { name: 'Start Your Free Month Today' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Claim your free month' })).toBeVisible()
  })

  test('navigation buttons scroll to sections', async ({ page }) => {
    // Test capabilities link
    const capabilitiesLink = page.getByRole('button', { name: 'Capabilities' })
    if (await capabilitiesLink.isVisible()) {
      await capabilitiesLink.click()
      await page.waitForTimeout(1000) // Wait for smooth scroll
      
      // Check if capabilities section is in view
      const capabilitiesSection = page.locator('#capabilities')
      await expect(capabilitiesSection).toBeInViewport()
    }
  })

  test('theme toggle works', async ({ page }) => {
    // Find theme toggle button
    const themeToggle = page.getByRole('button', { name: 'Toggle theme' })
    await themeToggle.scrollIntoViewIfNeeded()
    
    // Get initial theme class
    const html = page.locator('html')
    const initialClass = await html.getAttribute('class')
    
    // Click theme toggle
    await themeToggle.click()
    
    // Check theme changed
    const newClass = await html.getAttribute('class')
    expect(newClass).not.toBe(initialClass)
  })

  test('passes accessibility audit', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('#skip-link') // Skip link might be hidden initially
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('has proper page title and meta', async ({ page }) => {
    await expect(page).toHaveTitle(/Northline Technologies/)
    
    // Check meta description exists
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute('content', /Complete IT management/)
  })

  test('handles keyboard navigation', async ({ page }) => {
    // Start from top
    await page.keyboard.press('Tab')
    
    // Should focus skip link first
    const skipLink = page.getByRole('link', { name: 'Skip to main content' })
    await expect(skipLink).toBeFocused()
    
    // Continue tabbing through interactive elements
    await page.keyboard.press('Tab')
    
    // Should eventually reach a focusable element
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
  })

  test('loads without console errors', async ({ page }) => {
    const errors: string[] = []
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })
    
    page.on('pageerror', error => {
      errors.push(error.message)
    })
    
    await page.reload()
    await page.waitForLoadState('networkidle')
    
    // Filter out common non-critical errors
    const criticalErrors = errors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('404') &&
      !error.includes('Analytics')
    )
    
    expect(criticalErrors).toHaveLength(0)
  })
})