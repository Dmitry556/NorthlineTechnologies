export type HeroVariant = 'hero_a' | 'hero_b'
export type BannerVariant = 'banner_on' | 'banner_off'

export const copyVariants = {
  hero: {
    hero_a: {
      headline: "Your Infrastructure Runs Itself",
      subhead: "We build and manage the technical foundation that lets you focus on growth. Secure, compliant, and ready to scale from day one.",
      primaryCta: "Start free for 30 days",
      secondaryCta: "View capabilities"
    },
    hero_b: {
      headline: "Focus on Growth, Not Infrastructure", 
      subhead: "Complete IT management that scales with your business. Security, compliance, and reliability handled by experts so you can build what matters.",
      primaryCta: "Get started free",
      secondaryCta: "See how it works"
    }
  },
  offer: {
    banner_on: {
      show: true,
      headline: "Limited Intro Offer: First Month Free",
      cta: "Claim your free month"
    },
    banner_off: {
      show: false,
      headline: "",
      cta: ""
    }
  }
}

export function getVariant(): { hero: HeroVariant, banner: BannerVariant } {
  const heroVariant = (process.env.NL_VARIANT?.includes('hero_b') ? 'hero_b' : 'hero_a') as HeroVariant
  const bannerVariant = (process.env.NL_BANNER_ON === 'false' ? 'banner_off' : 'banner_on') as BannerVariant
  
  return {
    hero: heroVariant,
    banner: bannerVariant
  }
}

export function getCopy() {
  const variants = getVariant()
  return {
    hero: copyVariants.hero[variants.hero],
    offer: copyVariants.offer[variants.banner]
  }
}