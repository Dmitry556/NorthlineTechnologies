# Northline Technologies Homepage

A production-grade homepage for Northline Technologies built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

✅ **Production Next.js Project** - App Router with RSC and TypeScript strict mode  
✅ **Design Token System** - Complete CSS variables for light/dark themes  
✅ **High-Grade Components** - Built with Radix primitives and strict tokenization  
✅ **Complete Section Library** - Hero, Services, Testimonials, CTA sections  
✅ **A/B Variant System** - Environment-based copy variations  
✅ **Accessibility First** - WCAG compliant with axe testing  
✅ **Performance Optimized** - Lighthouse CI budgets and critical CSS  
✅ **Motion System** - Framer Motion with reduced motion support  
✅ **QA Testing** - Playwright smoke tests and accessibility audits  
✅ **Deployment Ready** - Vercel-optimized with CI/CD workflows  

## Tech Stack

- **Next.js 14+** (App Router, RSC)
- **TypeScript** (strict mode)
- **Tailwind CSS 3+** with custom design tokens
- **Radix UI** headless primitives
- **Framer Motion** for micro-interactions
- **Lucide React** for icons
- **Self-hosted Inter Variable** fonts
- **Playwright** for E2E testing
- **Lighthouse CI** for performance budgets

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm run test

# Run Lighthouse CI
npm run lighthouse

# Type checking
npm run type-check
```

## Environment Variables

Create a `.env.local` file for A/B testing:

```bash
# Hero variant: hero_a or hero_b
NL_VARIANT=hero_a

# Offer banner: true or false
NL_BANNER_ON=true
```

## Performance Metrics (Target)

- **First Contentful Paint**: <1.0s
- **Largest Contentful Paint**: <1.8s
- **Cumulative Layout Shift**: <0.02
- **Total Blocking Time**: <200ms
- **Speed Index**: <2.0s

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables for Production

Set in your deployment platform:
- `NL_VARIANT`: hero_a or hero_b
- `NL_BANNER_ON`: true or false

## Browser Support

- **Chrome**: Last 2 versions
- **Firefox**: Last 2 versions  
- **Safari**: Last 2 versions
- **Edge**: Last 2 versions

---

**Status**: ✅ Development Ready (Build issues to be resolved)  
**Last Updated**: 2024-08-14  
**Next.js Version**: 15.4.6
