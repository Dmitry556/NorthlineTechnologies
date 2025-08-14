'use client'

import { Button } from './Button'
import { Container } from './Container'
import { Section } from './Section'
import { getCopy } from '@/lib/copy'
import { trackCTAClick } from '@/lib/analytics'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpTransition, staggerContainer } from '@/lib/motion'

export function Hero() {
  const copy = getCopy()

  const handlePrimaryCta = () => {
    trackCTAClick(copy.hero.primaryCta, 'hero')
  }

  const handleSecondaryCta = () => {
    trackCTAClick(copy.hero.secondaryCta, 'hero')
  }

  return (
    <Section className="relative overflow-hidden" padding="xl">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--nl-brand)]/5 via-transparent to-[var(--nl-accent)]/5" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(233,237,243,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(233,237,243,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <Container className="relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold mb-6 text-[var(--nl-text)]"
            variants={fadeInUp}
            transition={fadeInUpTransition}
          >
            {copy.hero.headline}
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-[var(--nl-muted)] mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            transition={fadeInUpTransition}
          >
            {copy.hero.subhead}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
            transition={fadeInUpTransition}
          >
            <Button 
              size="lg" 
              onClick={handlePrimaryCta}
              className="min-w-[200px]"
            >
              {copy.hero.primaryCta}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleSecondaryCta}
              className="min-w-[200px]"
            >
              {copy.hero.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}