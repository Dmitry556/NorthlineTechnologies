'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

// Fade in from bottom with slight movement
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0
  }
}

export const fadeInUpTransition = {
  duration: 0.4,
  ease: [0.2, 0.8, 0.2, 1] as const
}

// Staggered children animation
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Scale on hover
export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: [0.2, 0.8, 0.2, 1]
  }
}

// Button hover elevation
export const buttonHover = {
  y: -2,
  transition: {
    duration: 0.15,
    ease: [0.2, 0.8, 0.2, 1]
  }
}

interface AnimateInViewProps extends MotionProps {
  children: ReactNode
  className?: string
}

// Animate when component comes into view
export function AnimateInView({ children, className, ...props }: AnimateInViewProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.2, 0.8, 0.2, 1]
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Staggered container for multiple children
export function StaggerContainer({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item
export function StaggerItem({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  )
}