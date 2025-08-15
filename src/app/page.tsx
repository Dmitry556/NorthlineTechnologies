'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function RootPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [bannerDismissed, setBannerDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    const dismissed = localStorage.getItem('nl.offer.v1') === 'dismissed'
    setBannerDismissed(dismissed)
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const dismissBanner = () => {
    localStorage.setItem('nl.offer.v1', 'dismissed')
    setBannerDismissed(true)
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      companyName: formData.get('companyName'),
      email: formData.get('email'),
      name: formData.get('name'),
      teamSize: formData.get('teamSize')
    }
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data)
    
    // Close form and show success message
    setShowForm(false)
    alert('Thank you! We&apos;ll be in touch within 24 hours to set up your free month.')
  }

  const colors = {
    bg: '#0b0c0e',
    surface: '#111317', 
    elev: '#161a20',
    text: '#e9edf3',
    muted: '#a6b0c3',
    keyline: 'rgba(233,237,243,0.08)',
    brand: '#7aa2ff',
    brandInk: '#0a1a3a',
    border: 'rgba(255,255,255,0.08)',
    accent: '#8ce0c3',
    success: '#79e2a6',
    warning: '#ffd166',
    shadow: '0 8px 24px rgba(0,0,0,0.35)',
    shadowLg: '0 16px 48px rgba(0,0,0,0.4)',
    shadowButton: '0 4px 16px rgba(122, 162, 255, 0.3)',
    shadowButtonHover: '0 8px 32px rgba(122, 162, 255, 0.4)'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const wideContainerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 24px'
  }

  // SVG Icons
  const icons = {
    integration: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    cloud: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        <polyline points="13,13 10,16 13,19"/>
        <polyline points="11,13 14,16 11,19"/>
      </svg>
    ),
    security: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    email: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    compliance: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="M21 15.5c-1-1.4-3-2.5-5-2.5"/>
        <path d="M16 19.5c-1-1.4-3-2.5-5-2.5s-4 1.1-5 2.5"/>
      </svg>
    ),
    coordination: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    check: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,6 9,17 4,12"/>
      </svg>
    ),
    sparkles: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0L9.937 15.5Z"/>
      </svg>
    ),
    arrow: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17l9.2-9.2M17 17V7H7"/>
      </svg>
    ),
    document: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    monitor: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    shield: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    )
  }

  // Northline logo using Next.js inspired design
  const northlineLogo = (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="currentColor"/>
    </svg>
  )

  const services = [
    { 
      title: 'IT Systems Integration', 
      desc: 'Connect your tools and teams seamlessly. Everything works together from the start.',
      icon: icons.integration,
      gradient: 'linear-gradient(135deg, #7aa2ff 0%, #5a8fff 100%)'
    },
    { 
      title: 'Cloud Infrastructure Setup & Management', 
      desc: 'Scale up or down instantly. Your infrastructure grows with your business, not against it.',
      icon: icons.cloud,
      gradient: 'linear-gradient(135deg, #8ce0c3 0%, #6dd5c0 100%)'
    },
    { 
      title: 'Identity & Access Control', 
      desc: 'The right people get the right access. Onboard new hires in minutes, not days.',
      icon: icons.security,
      gradient: 'linear-gradient(135deg, #79e2a6 0%, #5dd49c 100%)'
    },
    { 
      title: 'Email & Communications Systems', 
      desc: 'Professional email that just works. No spam folders, no missed messages, no headaches.',
      icon: icons.email,
      gradient: 'linear-gradient(135deg, #ffd166 0%, #ffcc5c 100%)'
    },
    { 
      title: 'Security & Compliance Support', 
      desc: 'Sleep better knowing your data is protected. We build security into every layer.',
      icon: icons.compliance,
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%)'
    },
    { 
      title: 'Onboarding & Vendor Coordination', 
      desc: 'One point of contact for everything technical. We manage the vendors so you don\'t have to.',
      icon: icons.coordination,
      gradient: 'linear-gradient(135deg, #a78bfa 0%, #9c88ff 100%)'
    }
  ]

  const companyLogos = [
    {
      name: 'Clearpath Analytics',
      logo: (
        <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
          <rect x="0" y="12" width="8" height="8" fill="currentColor" rx="2"/>
          <rect x="12" y="8" width="8" height="16" fill="currentColor" rx="2"/>
          <rect x="24" y="4" width="8" height="24" fill="currentColor" rx="2"/>
          <rect x="36" y="10" width="8" height="12" fill="currentColor" rx="2"/>
          <text x="52" y="20" fontSize="14" fontWeight="600" fill="currentColor">Clearpath</text>
        </svg>
      )
    },
    {
      name: 'Bright Commerce',
      logo: (
        <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="36" y="20" fontSize="14" fontWeight="600" fill="currentColor">Bright</text>
        </svg>
      )
    },
    {
      name: 'Dataflow Systems',
      logo: (
        <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
          <path d="M4 8h8v4H4V8zM16 12h8v4h-8v-4zM4 18h8v4H4v-4zM16 20h8v4h-8v-4z" fill="currentColor"/>
          <path d="M12 14h4v4h-4v-4z" fill="currentColor"/>
          <text x="32" y="20" fontSize="14" fontWeight="600" fill="currentColor">Dataflow</text>
        </svg>
      )
    },
    {
      name: 'MedConnect',
      logo: (
        <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
          <path d="M16 4c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S6 21.5 6 16 10.5 6 16 6z" fill="currentColor"/>
          <path d="M16 10v12M10 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <text x="36" y="20" fontSize="14" fontWeight="600" fill="currentColor">MedConnect</text>
        </svg>
      )
    },
    {
      name: 'Rapid Deploy',
      logo: (
        <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
          <path d="M8 6l16 10L8 26V6z" fill="currentColor"/>
          <circle cx="26" cy="16" r="2" fill="currentColor"/>
          <text x="36" y="20" fontSize="14" fontWeight="600" fill="currentColor">Rapid</text>
        </svg>
      )
    },
    {
      name: 'Summit Software',
      logo: (
        <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
          <path d="M8 24L16 8l8 16H8z" fill="currentColor"/>
          <path d="M12 20h8l-4-8-4 8z" fill="rgba(255,255,255,0.3)"/>
          <text x="36" y="20" fontSize="14" fontWeight="600" fill="currentColor">Summit</text>
        </svg>
      )
    }
  ]

  const testimonials = [
    {
      quote: "Northline took our infrastructure from constant fires to complete stability. We haven&apos;t had an incident in eight months. Our engineers can finally focus on building products instead of maintaining servers.",
      author: "Aden Fraser",
      title: "CTO at AutonomyAI"
    },
    {
      quote: "We went from idea to production in three weeks. Northline handled everything technical while we focused on customers. Best decision we made as a young company.",
      author: "John Vella", 
      title: "Founder at Tyviso"
    }
  ]

  const benefits = [
    { 
      stat: 'Save 40+ hours per month', 
      desc: 'on IT management and troubleshooting. Most clients see ROI within 60 days.',
      icon: icons.sparkles
    },
    { 
      stat: 'Response time under 5 minutes', 
      desc: 'for critical issues. Your infrastructure stays running while you sleep.',
      icon: icons.monitor
    },
    { 
      stat: 'One monthly price', 
      desc: 'covers everything. No surprise bills. No hidden fees. Budget with confidence.',
      icon: icons.shield
    }
  ]

  const offerFeatures = [
    { text: 'Full infrastructure audit and setup', icon: icons.check },
    { text: 'Cloud environment configuration', icon: icons.check }, 
    { text: 'Security baseline implementation', icon: icons.check },
    { text: 'Team onboarding (up to 25 users)', icon: icons.check },
    { text: '24/7 monitoring from day one', icon: icons.check },
    { text: 'Direct engineer access', icon: icons.check }
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            background: ${colors.bg}; 
            color: ${colors.text}; 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter Variable", sans-serif;
            line-height: 1.55;
            font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          h1, h2, h3, h4, h5, h6 {
            line-height: 1.15;
            font-weight: 600;
            letter-spacing: -0.02em;
          }
          
          h1 { font-size: clamp(32px, 4vw, 72px); font-weight: 800; }
          h2 { font-size: clamp(24px, 2.8vw, 48px); font-weight: 700; }
          h3 { font-size: clamp(18px, 2vw, 32px); font-weight: 600; }
          
          p { max-width: 70ch; line-height: 1.6; }
          
          .hero-bg {
            background: 
              radial-gradient(600px circle at 50% 0%, rgba(122, 162, 255, 0.15), transparent),
              linear-gradient(to bottom, ${colors.bg}, ${colors.surface});
            position: relative;
            overflow: hidden;
          }
          
          .hero-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(122, 162, 255, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(122, 162, 255, 0.06) 1px, transparent 1px),
              radial-gradient(circle at 20% 30%, rgba(140, 224, 195, 0.02) 2px, transparent 2px),
              radial-gradient(circle at 80% 70%, rgba(121, 226, 166, 0.02) 1px, transparent 1px);
            background-size: 60px 60px, 60px 60px, 120px 120px, 80px 80px;
            mask: radial-gradient(800px circle at 50% 0%, black, transparent 70%);
            pointer-events: none;
          }
          
          .hero-bg::after {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(122, 162, 255, 0.3), transparent);
            border-radius: 50%;
            filter: blur(40px);
            animation: float 6s ease-in-out infinite;
            pointer-events: none;
          }
          
          .terminal-window {
            position: absolute;
            background: rgba(11, 12, 14, 0.4);
            border: 1px solid rgba(122, 162, 255, 0.05);
            border-radius: 8px;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 11px;
            line-height: 1.4;
            backdrop-filter: blur(20px);
            pointer-events: none;
            z-index: 1;
            filter: blur(1px);
          }
          
          .terminal-header {
            background: rgba(31, 31, 31, 0.9);
            padding: 8px 12px;
            border-bottom: 1px solid rgba(122, 162, 255, 0.1);
            border-radius: 8px 8px 0 0;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          
          .terminal-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }
          
          .terminal-content {
            padding: 12px;
            color: #8ce0c3;
            overflow: hidden;
          }
          
          .floating-code {
            position: absolute;
            background: rgba(11, 12, 14, 0.3);
            border: 1px solid rgba(122, 162, 255, 0.03);
            border-radius: 6px;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 10px;
            padding: 8px 10px;
            color: rgba(140, 224, 195, 0.3);
            backdrop-filter: blur(15px);
            pointer-events: none;
            z-index: 1;
            transform: rotate(-2deg);
            opacity: 0.4;
            filter: blur(0.5px);
          }
          
          @keyframes float {
            0%, 100% { transform: translate(-50%, 0px) rotate(0deg); }
            50% { transform: translate(-50%, -20px) rotate(180deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }
          
          .card {
            background: ${colors.surface};
            border: 1px solid ${colors.border};
            border-radius: 20px;
            box-shadow: ${colors.shadow};
            transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
            position: relative;
            overflow: hidden;
          }
          
          .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(122, 162, 255, 0.3), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .card:hover {
            transform: translateY(-6px);
            box-shadow: ${colors.shadowLg};
            border-color: rgba(122, 162, 255, 0.2);
          }
          
          .card:hover::before {
            opacity: 1;
          }
          
          .service-card {
            background: ${colors.surface};
            border: 1px solid ${colors.border};
            border-radius: 24px;
            box-shadow: ${colors.shadow};
            transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
            position: relative;
            overflow: hidden;
          }
          
          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(122, 162, 255, 0.02), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }
          
          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            border-color: rgba(122, 162, 255, 0.3);
          }
          
          .service-card:hover::before {
            opacity: 1;
          }
          
          .icon-container {
            width: 64px;
            height: 64px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            position: relative;
            overflow: hidden;
          }
          
          .icon-container::before {
            content: '';
            position: absolute;
            inset: 0;
            background: inherit;
            opacity: 0.1;
            border-radius: inherit;
          }
          
          .btn-primary {
            background: linear-gradient(135deg, ${colors.brand} 0%, #5a8fff 100%);
            color: ${colors.brandInk};
            border: none;
            padding: 16px 32px;
            border-radius: 16px;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
            box-shadow: ${colors.shadowButton};
            position: relative;
            overflow: hidden;
          }
          
          .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
          }
          
          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: ${colors.shadowButtonHover};
          }
          
          .btn-primary:hover::before {
            left: 100%;
          }
          
          .btn-secondary {
            background: rgba(122, 162, 255, 0.1);
            color: ${colors.text};
            border: 1px solid rgba(122, 162, 255, 0.3);
            padding: 16px 32px;
            border-radius: 16px;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
            backdrop-filter: blur(12px);
            position: relative;
            overflow: hidden;
          }
          
          .btn-secondary::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(122, 162, 255, 0.1), rgba(140, 224, 195, 0.1));
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .btn-secondary:hover {
            border-color: ${colors.brand};
            background: rgba(122, 162, 255, 0.15);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(122, 162, 255, 0.2);
          }
          
          .btn-secondary:hover::before {
            opacity: 1;
          }
          
          .text-gradient {
            background: linear-gradient(135deg, ${colors.text} 0%, ${colors.brand} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .avatar {
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background: linear-gradient(135deg, ${colors.brand}, ${colors.accent});
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            color: ${colors.brandInk};
            font-size: 18px;
            position: relative;
            overflow: hidden;
          }
          
          .avatar::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(135deg, ${colors.brand}, ${colors.accent});
            border-radius: 18px;
            z-index: -1;
            filter: blur(4px);
            opacity: 0.5;
          }
          
          .section-bg {
            position: relative;
          }
          
          .section-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: 
              radial-gradient(circle at 2px 2px, rgba(233, 237, 243, 0.15) 1px, transparent 0);
            background-size: 40px 40px;
            opacity: 0.3;
            pointer-events: none;
          }
          
          .testimonial-card {
            position: relative;
            overflow: hidden;
          }
          
          .testimonial-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(180deg, ${colors.brand}, ${colors.accent});
            border-radius: 2px;
          }
          
          .benefit-card {
            position: relative;
            overflow: hidden;
          }
          
          .benefit-card::before {
            content: '';
            position: absolute;
            top: 20px;
            right: 20px;
            width: 80px;
            height: 80px;
            background: radial-gradient(circle, rgba(122, 162, 255, 0.1), transparent);
            border-radius: 50%;
            pointer-events: none;
          }
          
          .floating-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(1px);
            pointer-events: none;
            animation: orbit 20s linear infinite;
          }
          
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `
      }} />

      {/* Offer Banner */}
      {mounted && !bannerDismissed && (
        <div style={{
          background: `linear-gradient(135deg, ${colors.brand}, #5a8fff)`,
          color: colors.brandInk,
          padding: '12px 0',
          textAlign: 'center',
          position: 'relative',
          fontSize: '14px',
          fontWeight: '500',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            width: '8px',
            height: '8px',
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            animation: 'float 3s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '4px',
            height: '4px',
            background: 'rgba(255,255,255,0.4)',
            borderRadius: '50%',
            animation: 'float 4s ease-in-out infinite 1s'
          }} />
          <div style={containerStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {icons.sparkles}
                Limited Intro Offer: First Month Free – Only 3 spots available this quarter
              </span>
              <button
                onClick={dismissBanner}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  color: colors.brandInk,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.3)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.2)'}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: isScrolled ? 'rgba(11, 12, 14, 0.7)' : 'rgba(11, 12, 14, 0.3)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(8px)',
        borderBottom: isScrolled ? `1px solid ${colors.keyline}` : `1px solid rgba(233, 237, 243, 0.05)`,
        transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
        padding: isScrolled ? '12px 0' : '20px 0'
      }}>
        <div style={containerStyle}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              fontSize: '20px',
              fontWeight: '700',
              color: colors.text,
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.text
              }}>
                {northlineLogo}
              </div>
              Northline Technologies
            </div>
            
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px'
            }}>
              <a href="#capabilities" style={{
                color: colors.muted,
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.text}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.muted}
              >
                Capabilities
              </a>
              <a href="#why-northline" style={{
                color: colors.muted,
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.text}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.muted}
              >
                Why Northline
              </a>
              <a href="#contact" style={{
                color: colors.muted,
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.text}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.muted}
              >
                Contact
              </a>
              <button className="btn-primary" style={{
                fontSize: '14px',
                padding: '10px 20px'
              }}
                onClick={() => setShowForm(true)}
              >
                Start free
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-bg" style={{ 
          padding: '120px 0 140px', 
          textAlign: 'center',
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* Subtle tech grid pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(122, 162, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(122, 162, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            mask: 'radial-gradient(800px circle at 50% 50%, black, transparent)',
            pointerEvents: 'none'
          }} />
          
          {/* Terminal windows and code snippets - only render client-side */}
          {mounted && (
            <>
              <div className="terminal-window" style={{
                top: '10%',
                left: '5%',
                width: '280px',
                transform: 'rotate(-3deg)',
                opacity: '0.25'
              }}>
                <div className="terminal-header">
                  <div className="terminal-dot" style={{ background: '#ff5f56' }}></div>
                  <div className="terminal-dot" style={{ background: '#ffbd2e' }}></div>
                  <div className="terminal-dot" style={{ background: '#27ca3f' }}></div>
                  <span style={{ marginLeft: '8px', fontSize: '10px', color: '#888' }}>~/deploy</span>
                </div>
                <div className="terminal-content">
                  <div>$ kubectl get pods</div>
                  <div style={{ color: '#79e2a6' }}>northline-api-7d4b8f-running</div>
                  <div style={{ color: '#79e2a6' }}>northline-db-9k2m1x-running</div>
                  <div style={{ color: '#ffd166' }}>monitoring-3x7q9p-pending</div>
                  <div>$ docker logs --tail=50 northline</div>
                  <div style={{ color: '#8ce0c3', fontSize: '9px' }}>[INFO] Server listening on :8080</div>
                </div>
              </div>

              <div className="terminal-window" style={{
                top: '20%',
                right: '5%',
                width: '240px',
                transform: 'rotate(2deg)',
                opacity: '0.22'
              }}>
                <div className="terminal-header">
                  <div className="terminal-dot" style={{ background: '#ff5f56' }}></div>
                  <div className="terminal-dot" style={{ background: '#ffbd2e' }}></div>
                  <div className="terminal-dot" style={{ background: '#27ca3f' }}></div>
                  <span style={{ marginLeft: '8px', fontSize: '10px', color: '#888' }}>monitoring.sh</span>
                </div>
                <div className="terminal-content">
                  <div>$ ./monitor-infrastructure.sh</div>
                  <div style={{ color: '#79e2a6' }}>✓ CPU: 23% | RAM: 67%</div>
                  <div style={{ color: '#79e2a6' }}>✓ Network: 1.2Gb/s</div>
                  <div style={{ color: '#8ce0c3' }}>⚡ Load balancer: healthy</div>
                  <div>$ tail -f /var/log/northline.log</div>
                </div>
              </div>

              <div className="floating-code" style={{
                bottom: '25%',
                left: '8%',
                transform: 'rotate(-4deg)',
                opacity: '0.25'
              }}>
                terraform apply -auto-approve<br/>
                aws s3 sync ./dist s3://bucket
              </div>

              <div className="floating-code" style={{
                top: '35%',
                right: '15%',
                transform: 'rotate(3deg)',
                opacity: '0.22'
              }}>
                ssh -i key.pem user@server<br/>
                systemctl restart nginx
              </div>

              <div className="floating-code" style={{
                bottom: '15%',
                right: '8%',
                transform: 'rotate(-1deg)',
                opacity: '0.2'
              }}>
                git push origin production<br/>
                docker-compose up -d
              </div>
            </>
          )}

          {/* Minimal floating elements */}
          <div style={{
            position: 'absolute',
            top: '15%',
            left: '8%',
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(122, 162, 255, 0.08), transparent)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'float 12s ease-in-out infinite',
            zIndex: 0
          }} />
          <div style={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: '80px',
            height: '80px',
            background: 'radial-gradient(circle, rgba(140, 224, 195, 0.06), transparent)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            animation: 'float 10s ease-in-out infinite 3s',
            zIndex: 0
          }} />
          <div style={containerStyle}>
            <h1 className="text-gradient" style={{
              marginBottom: '40px',
              lineHeight: '1.1',
              position: 'relative',
              zIndex: 10
            }}>
              Your Infrastructure Runs Itself
            </h1>
            
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              color: colors.muted,
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.5',
              position: 'relative',
              zIndex: 10
            }}>
              We build and manage the technical foundation that lets you focus on growth. 
              Secure, compliant, and ready to scale from day one.
            </p>

            
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              <button className="btn-primary" style={{ 
                fontSize: '18px', 
                padding: '22px 44px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
                onClick={() => setShowForm(true)}
              >
                Start free for 30 days
                {icons.arrow}
              </button>
              <button className="btn-secondary" style={{ 
                fontSize: '18px', 
                padding: '22px 44px',
                borderRadius: '16px'
              }}>
                View capabilities
              </button>
            </div>

          </div>
        </section>

        {/* Live Infrastructure Metrics */}
        <section style={{
          padding: '40px 0',
          background: `linear-gradient(135deg, ${colors.elev} 0%, ${colors.surface} 100%)`,
          borderTop: `1px solid ${colors.keyline}`,
          borderBottom: `1px solid ${colors.keyline}`
        }}>
          <div style={containerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              textAlign: 'center'
            }}>
              <div style={{
                padding: '20px 16px',
                background: 'rgba(122, 162, 255, 0.05)',
                borderRadius: '12px',
                border: `1px solid rgba(122, 162, 255, 0.1)`
              }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: colors.brand,
                  marginBottom: '8px',
                  fontFamily: 'monospace'
                }}>
                  1,247
                </div>
                <div style={{
                  fontSize: '13px',
                  color: colors.muted,
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Servers Monitoring
                </div>
                <div style={{
                  fontSize: '11px',
                  color: colors.success,
                  marginTop: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: colors.success,
                    animation: 'pulse 2s infinite'
                  }}></div>
                  LIVE
                </div>
              </div>

              <div style={{
                padding: '20px 16px',
                background: 'rgba(121, 226, 166, 0.05)',
                borderRadius: '12px',
                border: `1px solid rgba(121, 226, 166, 0.1)`
              }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: colors.success,
                  marginBottom: '8px',
                  fontFamily: 'monospace'
                }}>
                  99.7%
                </div>
                <div style={{
                  fontSize: '13px',
                  color: colors.muted,
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Uptime This Month
                </div>
                <div style={{
                  fontSize: '11px',
                  color: colors.success,
                  marginTop: '4px'
                }}>
                  SLA: 99.9% guaranteed
                </div>
              </div>

              <div style={{
                padding: '20px 16px',
                background: 'rgba(140, 224, 195, 0.05)',
                borderRadius: '12px',
                border: `1px solid rgba(140, 224, 195, 0.1)`
              }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: colors.accent,
                  marginBottom: '8px',
                  fontFamily: 'monospace'
                }}>
                  2.1 min
                </div>
                <div style={{
                  fontSize: '13px',
                  color: colors.muted,
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Avg Response Time
                </div>
                <div style={{
                  fontSize: '11px',
                  color: colors.success,
                  marginTop: '4px'
                }}>
                  Target: &lt;5 minutes
                </div>
              </div>

              <div style={{
                padding: '20px 16px',
                background: 'rgba(121, 226, 166, 0.05)',
                borderRadius: '12px',
                border: `1px solid rgba(121, 226, 166, 0.1)`
              }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: colors.success,
                  marginBottom: '8px',
                  fontFamily: 'monospace'
                }}>
                  0
                </div>
                <div style={{
                  fontSize: '13px',
                  color: colors.muted,
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Active Incidents
                </div>
                <div style={{
                  fontSize: '11px',
                  color: colors.success,
                  marginTop: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: colors.success
                  }}></div>
                  All Systems Operational
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Certifications - Logo Slider */}
        <section style={{
          padding: '32px 0',
          background: colors.bg,
          borderBottom: `1px solid ${colors.keyline}`
        }}>
          <div style={containerStyle}>
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontSize: '12px',
                fontWeight: '600',
                color: colors.muted,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '24px'
              }}>
                Certified & Trusted By
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '48px',
                flexWrap: 'nowrap',
                opacity: 0.7,
                transition: 'opacity 0.3s ease',
                overflow: 'hidden'
              }}>
                {/* CompTIA Authorized Partner */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                  transition: 'opacity 0.3s ease'
                }}>
                  <Image 
                    src="/CompTIA AuthPartner-4c_nobkgd(3).png" 
                    alt="CompTIA Authorized Partner" 
                    width={120}
                    height={48}
                    style={{ 
                      height: '48px', 
                      width: 'auto',
                      objectFit: 'contain'
                    }} 
                  />
                </div>

                {/* Cisco Certified Partner */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                  transition: 'opacity 0.3s ease'
                }}>
                  <Image 
                    src="/cisco-certified-partner-logo-png_seeklogo-203689.png" 
                    alt="Cisco Certified Partner" 
                    width={120}
                    height={48}
                    style={{ 
                      height: '48px', 
                      width: 'auto',
                      objectFit: 'contain'
                    }} 
                  />
                </div>

                {/* VMware Partner */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                  transition: 'opacity 0.3s ease'
                }}>
                  <Image 
                    src="/vmware-premier-solution-provider-logo-datapac-e1443782052632.jpg" 
                    alt="VMware Premier Solution Provider" 
                    width={120}
                    height={48}
                    style={{ 
                      height: '48px', 
                      width: 'auto',
                      objectFit: 'contain'
                    }} 
                  />
                </div>

                {/* IQGeo Certified Partner */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                  transition: 'opacity 0.3s ease'
                }}>
                  <Image 
                    src="/iqgeo.png" 
                    alt="IQGeo Implementation Partner Certified" 
                    width={120}
                    height={48}
                    style={{ 
                      height: '48px', 
                      width: 'auto',
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Limited Intro Offer */}
        <section className="section-bg" style={{
          padding: '60px 0',
          background: colors.surface,
          borderTop: `1px solid ${colors.keyline}`,
          borderBottom: `1px solid ${colors.keyline}`,
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <div className="card" style={{
              padding: '40px',
              position: 'relative',
              border: `2px solid ${colors.brand}`,
              background: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.elev} 100%)`,
              borderRadius: '24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: '60px',
              alignItems: 'center'
            }}>
              {/* Decorative elements */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: `linear-gradient(90deg, transparent, ${colors.brand}, transparent)`,
                borderRadius: '2px'
              }} />
              
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: colors.warning,
                color: colors.bg,
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                boxShadow: '0 4px 12px rgba(255, 209, 102, 0.3)'
              }}>
                {icons.sparkles}
                Limited Offer
              </div>

              {/* Left side - Header and CTA */}
              <div style={{ textAlign: 'left' }}>
                <h2 style={{
                  color: colors.brand,
                  marginBottom: '16px',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  lineHeight: '1.1'
                }}>
                  First Month Free
                </h2>
                
                <p style={{
                  fontSize: '18px',
                  marginBottom: '32px',
                  color: colors.muted,
                  lineHeight: '1.5'
                }}>
                  Complete IT infrastructure setup at no charge. We migrate your systems, 
                  configure your cloud, and handle all setup.
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  alignItems: 'flex-start'
                }}>
                  <button className="btn-primary" style={{
                    fontSize: '18px',
                    padding: '18px 36px',
                    borderRadius: '14px',
                    fontWeight: '600'
                  }}
                    onClick={() => setShowForm(true)}
                  >
                    Claim Your Free Month
                  </button>
                  
                  <div style={{
                    fontSize: '13px',
                    color: colors.muted,
                    lineHeight: '1.4'
                  }}>
                    <p style={{ marginBottom: '4px', maxWidth: 'none' }}>
                      No contracts • Cancel anytime • Keep all documentation
                    </p>
                    <p style={{
                      color: colors.warning,
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      maxWidth: 'none',
                      margin: '0'
                    }}>
                      {icons.sparkles}
                      Only 3 spots available this quarter
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Features */}
              <div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '20px',
                  color: colors.accent,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  {icons.check}
                  What&apos;s included:
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '10px'
                }}>
                  {offerFeatures.map((feature, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '10px 14px',
                      background: 'rgba(122, 162, 255, 0.06)',
                      borderRadius: '10px',
                      border: `1px solid rgba(122, 162, 255, 0.1)`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '2px',
                        height: '100%',
                        background: colors.success
                      }} />
                      <div style={{
                        color: colors.success,
                        marginRight: '10px',
                        flexShrink: 0
                      }}>
                        {feature.icon}
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built for Modern Teams */}
        <section style={{ padding: '80px 0' }}>
          <div style={containerStyle}>
            <h2 style={{
              textAlign: 'center',
              marginBottom: '48px'
            }}>
              Built for Modern Teams
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(122, 162, 255, 0.1)',
                  borderRadius: '50%',
                  filter: 'blur(10px)'
                }} />
                <p style={{
                  fontSize: '18px',
                  marginBottom: '24px',
                  color: colors.muted,
                  lineHeight: '1.6'
                }}>
                  Fast-growing companies trust us to handle their entire IT backbone. We serve startups that need to move quickly, 
                  remote teams that demand reliable access, and digital businesses that can&apos;t afford downtime.
                </p>
              </div>
              
              <div className="card" style={{
                padding: '32px 28px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  color: colors.brand,
                  opacity: 0.3
                }}>
                  {icons.sparkles}
                </div>
                <p style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: colors.brand,
                  lineHeight: '1.4'
                }}>
                  You get more than managed services. You get a team that owns your infrastructure completely. 
                  No tickets to file. No escalations to manage. We handle problems before you notice them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-bg" style={{
          padding: '80px 0',
          background: colors.surface
        }} id="capabilities">
          <div style={wideContainerStyle}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ marginBottom: '24px' }}>What We Do</h2>
              <p style={{
                fontSize: '20px',
                color: colors.muted,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Complete infrastructure management that scales with your business
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '32px'
            }}>
              {services.map((service, index) => (
                <div key={index} className="service-card" style={{
                  padding: '32px 28px'
                }}>
                  <div className="icon-container" style={{
                    background: service.gradient
                  }}>
                    <div style={{ color: 'white' }}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 style={{
                    color: colors.brand,
                    marginBottom: '20px',
                    fontSize: '24px'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: colors.muted,
                    fontSize: '17px',
                    lineHeight: '1.6',
                    marginBottom: '24px'
                  }}>
                    {service.desc}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: colors.brand,
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Learn more {icons.arrow}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Status Dashboard */}
        <section style={{
          padding: '60px 0',
          background: colors.bg,
          borderTop: `1px solid ${colors.keyline}`,
          borderBottom: `1px solid ${colors.keyline}`,
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background terminal windows - only render client-side */}
          {mounted && (
            <>
              <div className="terminal-window" style={{
                position: 'absolute',
                top: '5%',
                left: '3%',
                width: '200px',
                transform: 'rotate(-8deg)',
                opacity: '0.25'
              }}>
                <div className="terminal-header">
                  <div className="terminal-dot" style={{ background: '#ff5f56' }}></div>
                  <div className="terminal-dot" style={{ background: '#ffbd2e' }}></div>
                  <div className="terminal-dot" style={{ background: '#27ca3f' }}></div>
                  <span style={{ marginLeft: '8px', fontSize: '10px', color: '#888' }}>logs</span>
                </div>
                <div className="terminal-content">
                  <div>$ tail -f access.log</div>
                  <div style={{ color: '#79e2a6', fontSize: '9px' }}>200 GET /api/health</div>
                  <div style={{ color: '#79e2a6', fontSize: '9px' }}>200 GET /api/metrics</div>
                  <div style={{ color: '#8ce0c3', fontSize: '9px' }}>201 POST /api/deploy</div>
                  <div>$ grep ERROR system.log</div>
                  <div style={{ color: '#ffd166', fontSize: '9px' }}>No errors found</div>
                </div>
              </div>

              <div className="floating-code" style={{
                position: 'absolute',
                top: '8%',
                right: '5%',
                transform: 'rotate(5deg)',
                opacity: '0.3'
              }}>
                curl -s localhost:8080/health<br/>
                echo $? # Exit code: 0
              </div>

              <div className="terminal-window" style={{
                position: 'absolute',
                bottom: '8%',
                right: '2%',
                width: '240px',
                transform: 'rotate(3deg)',
                opacity: '0.2'
              }}>
                <div className="terminal-header">
                  <div className="terminal-dot" style={{ background: '#ff5f56' }}></div>
                  <div className="terminal-dot" style={{ background: '#ffbd2e' }}></div>
                  <div className="terminal-dot" style={{ background: '#27ca3f' }}></div>
                  <span style={{ marginLeft: '8px', fontSize: '10px', color: '#888' }}>database</span>
                </div>
                <div className="terminal-content">
                  <div>$ psql -c "SELECT NOW()"</div>
                  <div style={{ color: '#8ce0c3', fontSize: '9px' }}>2025-08-15 12:34:56</div>
                  <div>$ pg_isready -h localhost</div>
                  <div style={{ color: '#79e2a6', fontSize: '9px' }}>accepting connections</div>
                  <div>$ redis-cli ping</div>
                  <div style={{ color: '#79e2a6', fontSize: '9px' }}>PONG</div>
                </div>
              </div>

              <div className="floating-code" style={{
                position: 'absolute',
                bottom: '15%',
                left: '8%',
                transform: 'rotate(-3deg)',
                opacity: '0.25'
              }}>
                docker ps | grep northline<br/>
                nginx -t && nginx -s reload
              </div>
            </>
          )}
          <div style={containerStyle}>
            <div style={{ 
              maxWidth: '900px', 
              margin: '0 auto',
              background: colors.surface,
              borderRadius: '16px',
              border: `1px solid ${colors.border}`,
              overflow: 'hidden'
            }}>
              {/* Dashboard Header */}
              <div style={{
                padding: '20px 24px',
                background: colors.elev,
                borderBottom: `1px solid ${colors.keyline}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: colors.text,
                    margin: '0'
                  }}>
                    Infrastructure Status
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: colors.muted,
                    margin: '2px 0 0 0'
                  }}>
                    Live monitoring dashboard
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: colors.success,
                    animation: 'pulse 2s infinite'
                  }}></div>
                  <span style={{
                    fontSize: '12px',
                    color: colors.success,
                    fontWeight: '600'
                  }}>
                    ALL SYSTEMS OPERATIONAL
                  </span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div style={{ padding: '24px' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '20px',
                  marginBottom: '24px'
                }}>
                  {[
                    { label: 'API Response', value: '< 100ms', status: 'success' },
                    { label: 'Database', value: '99.9%', status: 'success' },
                    { label: 'Load Balancer', value: 'Online', status: 'success' },
                    { label: 'CDN', value: 'Active', status: 'success' },
                    { label: 'Backup Systems', value: 'Ready', status: 'success' },
                    { label: 'SSL Certificates', value: 'Valid', status: 'success' }
                  ].map((item, index) => (
                    <div key={index} style={{
                      padding: '12px',
                      background: colors.bg,
                      borderRadius: '8px',
                      border: `1px solid ${colors.keyline}`,
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: colors.muted,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '6px'
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: colors.success,
                        fontFamily: 'monospace'
                      }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div style={{
                  background: colors.bg,
                  borderRadius: '8px',
                  border: `1px solid ${colors.keyline}`,
                  padding: '16px'
                }}>
                  <h4 style={{
                    fontSize: '13px',
                    color: colors.text,
                    fontWeight: '600',
                    margin: '0 0 12px 0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Recent Activity
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    <div style={{ color: colors.success }}>
                      ✓ 14:23 UTC - Backup completed successfully (Database cluster)
                    </div>
                    <div style={{ color: colors.success }}>
                      ✓ 14:15 UTC - SSL certificate auto-renewed (*.northlinetech.co)
                    </div>
                    <div style={{ color: colors.success }}>
                      ✓ 14:08 UTC - Security scan completed - No vulnerabilities
                    </div>
                    <div style={{ color: colors.muted }}>
                      ℹ 13:45 UTC - Scheduled maintenance window opened
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ padding: '80px 0' }}>
          <div style={containerStyle}>
            <h2 style={{
              textAlign: 'center',
              marginBottom: '48px'
            }}>
              Trusted by Growing Companies
            </h2>

            {/* Company logos */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '32px',
              marginBottom: '60px',
              opacity: 0.6
            }}>
              {companyLogos.map((company) => (
                <div key={company.name} style={{
                  color: colors.muted,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.opacity = '1'
                    ;(e.target as HTMLElement).style.color = colors.text
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.opacity = '0.6'
                    ;(e.target as HTMLElement).style.color = colors.muted
                  }}
                >
                  {company.logo}
                </div>
              ))}
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: '32px'
            }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card testimonial-card" style={{
                  padding: '40px 32px'
                }}>
                  <blockquote style={{
                    fontSize: '18px',
                    lineHeight: '1.6',
                    marginBottom: '28px',
                    fontStyle: 'italic',
                    color: colors.text,
                    position: 'relative',
                    paddingLeft: '24px'
                  }}>
                    <span style={{
                      fontSize: '64px',
                      color: colors.brand,
                      position: 'absolute',
                      top: '-20px',
                      left: '-8px',
                      lineHeight: '1',
                      fontFamily: 'serif',
                      opacity: 0.3
                    }}>&quot;</span>
                    {testimonial.quote}
                  </blockquote>
                  <div style={{
                    paddingLeft: '24px'
                  }}>
                    <div style={{
                      fontWeight: '600',
                      fontSize: '18px',
                      marginBottom: '6px'
                    }}>
                      {testimonial.author}
                    </div>
                    <div style={{
                      color: colors.muted,
                      fontSize: '16px'
                    }}>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-bg" style={{
          padding: '80px 0',
          background: `linear-gradient(135deg, ${colors.surface} 0%, ${colors.elev} 50%, ${colors.surface} 100%)`,
          position: 'relative'
        }} id="why-northline">
          {/* Data visualization decoration */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '5%',
            width: '120px',
            height: '60px',
            opacity: 0.15,
            pointerEvents: 'none'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'end',
              height: '100%',
              gap: '4px'
            }}>
              {[30, 45, 60, 40, 55, 70, 50, 65].map((height, i) => (
                <div 
                  key={i}
                  style={{
                    width: '8px',
                    height: `${height}%`,
                    background: colors.brand,
                    borderRadius: '2px 2px 0 0'
                  }}
                />
              ))}
            </div>
          </div>
          <div style={containerStyle}>
            <h2 style={{
              textAlign: 'center',
              marginBottom: '60px'
            }}>
              Why Companies Switch to Northline
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '32px'
            }}>
              {benefits.map((benefit, index) => (
                <div key={index} className="card benefit-card" style={{
                  padding: '40px 32px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    color: colors.brand,
                    marginBottom: '24px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {benefit.icon}
                  </div>
                  <div style={{
                    fontSize: 'clamp(28px, 3vw, 44px)',
                    fontWeight: '800',
                    color: colors.brand,
                    marginBottom: '24px',
                    letterSpacing: '-0.02em'
                  }}>
                    {benefit.stat}
                  </div>
                  <p style={{
                    fontSize: '18px',
                    color: colors.muted,
                    lineHeight: '1.6'
                  }}>
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section style={{ 
          padding: '80px 0',
          background: `linear-gradient(135deg, ${colors.surface} 0%, ${colors.elev} 100%)`,
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Code snippet background decoration */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '-10%',
            width: '300px',
            height: '200px',
            background: `linear-gradient(135deg, rgba(122, 162, 255, 0.03), transparent)`,
            borderRadius: '8px',
            border: `1px solid rgba(122, 162, 255, 0.05)`,
            padding: '16px',
            fontFamily: 'monospace',
            fontSize: '11px',
            color: colors.muted,
            opacity: 0.4,
            transform: 'rotate(-15deg)',
            pointerEvents: 'none'
          }}>
            <div>#!/bin/bash</div>
            <div># Infrastructure as Code</div>
            <div>terraform plan</div>
            <div>terraform apply</div>
            <div>&nbsp;</div>
            <div>ansible-playbook -i inventory</div>
            <div>&nbsp;&nbsp;deploy.yml --check</div>
            <div>&nbsp;</div>
            <div># Monitoring deployment</div>
            <div>kubectl get pods -n monitoring</div>
            <div>STATUS: Running ✓</div>
          </div>

          {/* Additional terminal windows - only render client-side */}
          {mounted && (
            <>
              <div className="terminal-window" style={{
                top: '8%',
                left: '2%',
                width: '260px',
                transform: 'rotate(-5deg)',
                opacity: '0.4'
              }}>
                <div className="terminal-header">
                  <div className="terminal-dot" style={{ background: '#ff5f56' }}></div>
                  <div className="terminal-dot" style={{ background: '#ffbd2e' }}></div>
                  <div className="terminal-dot" style={{ background: '#27ca3f' }}></div>
                  <span style={{ marginLeft: '8px', fontSize: '10px', color: '#888' }}>~/.northline</span>
                </div>
                <div className="terminal-content">
                  <div>$ ansible-playbook deploy.yml</div>
                  <div style={{ color: '#79e2a6' }}>PLAY [Deploy Application]</div>
                  <div style={{ color: '#8ce0c3' }}>TASK [Update packages] ***</div>
                  <div style={{ color: '#79e2a6' }}>ok: [web-01]</div>
                  <div style={{ color: '#79e2a6' }}>ok: [web-02]</div>
                  <div>$ systemctl status northline</div>
                  <div style={{ color: '#79e2a6', fontSize: '9px' }}>● Active: running</div>
                </div>
              </div>

              <div className="floating-code" style={{
                top: '15%',
                right: '3%',
                transform: 'rotate(4deg)',
                opacity: '0.5'
              }}>
                #!/bin/bash<br/>
                for i in {'{1..5}'}; do<br/>
                &nbsp;&nbsp;echo "Server $i: OK"<br/>
                done
              </div>

              <div className="terminal-window" style={{
                bottom: '5%',
                right: '8%',
                width: '220px',
                transform: 'rotate(2deg)',
                opacity: '0.3'
              }}>
                <div className="terminal-header">
                  <div className="terminal-dot" style={{ background: '#ff5f56' }}></div>
                  <div className="terminal-dot" style={{ background: '#ffbd2e' }}></div>
                  <div className="terminal-dot" style={{ background: '#27ca3f' }}></div>
                  <span style={{ marginLeft: '8px', fontSize: '10px', color: '#888' }}>htop</span>
                </div>
                <div className="terminal-content">
                  <div style={{ color: '#8ce0c3' }}>CPU: 18% [||||    ]</div>
                  <div style={{ color: '#79e2a6' }}>Mem: 2.1/8.0GB</div>
                  <div style={{ color: '#ffd166' }}>Load: 0.84 0.92 1.03</div>
                  <div style={{ color: '#8ce0c3', fontSize: '9px' }}>northline-api: 256MB</div>
                  <div style={{ color: '#8ce0c3', fontSize: '9px' }}>postgres: 180MB</div>
                </div>
              </div>
            </>
          )}

          {/* Terminal window decoration */}
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '-5%',
            width: '280px',
            height: '160px',
            background: colors.bg,
            borderRadius: '8px',
            border: `1px solid ${colors.keyline}`,
            opacity: 0.3,
            transform: 'rotate(8deg)',
            pointerEvents: 'none',
            zIndex: 0
          }}>
            <div style={{
              background: colors.surface,
              borderRadius: '8px 8px 0 0',
              padding: '8px 12px',
              borderBottom: `1px solid ${colors.keyline}`,
              fontSize: '10px',
              color: colors.muted
            }}>
              terminal - northline@prod-server
            </div>
            <div style={{
              padding: '12px',
              fontFamily: 'monospace',
              fontSize: '9px',
              lineHeight: '1.4',
              color: colors.success
            }}>
              $ uptime<br/>
              &nbsp;12:47:32 up 247 days, 3:21<br/>
              $ docker ps | wc -l<br/>
              &nbsp;47<br/>
              $ systemctl status nginx<br/>
              &nbsp;● active (running)
            </div>
          </div>

          <div style={containerStyle}>
            <h2 style={{
              textAlign: 'center',
              marginBottom: '60px'
            }}>
              How We Work
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              marginBottom: '60px'
            }}>
              {[
                { step: '01', title: 'Document', desc: 'We document everything. You own your runbooks, your architecture diagrams, and your recovery plans.', icon: icons.document },
                { step: '02', title: 'Monitor', desc: 'Our monitoring catches issues early. Our incident response is immediate and transparent.', icon: icons.monitor },
                { step: '03', title: 'Secure', desc: 'We build with security first. Every change is tracked. Every access point is secured. Every system is monitored.', icon: icons.shield }
              ].map((item, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '56px',
                    fontWeight: '800',
                    color: colors.brand,
                    marginBottom: '32px',
                    opacity: 0.2,
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 0
                  }}>
                    {item.step}
                  </div>
                  <div style={{
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <div style={{
                      color: colors.brand,
                      marginBottom: '24px',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      {item.icon}
                    </div>
                    <h3 style={{
                      fontSize: '28px',
                      marginBottom: '20px',
                      color: colors.brand
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: colors.muted,
                      fontSize: '17px',
                      lineHeight: '1.6'
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="card" style={{
              padding: '56px 48px',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '24px',
                fontWeight: '600',
                color: colors.brand,
                lineHeight: '1.5'
              }}>
                When you grow, your infrastructure is ready. Add ten users or a thousand. Open new offices or go fully remote. 
                Your systems scale smoothly because we designed them that way.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{
          padding: '100px 0',
          background: `linear-gradient(135deg, ${colors.surface} 0%, ${colors.bg} 100%)`,
          textAlign: 'center',
          borderTop: `1px solid ${colors.keyline}`,
          position: 'relative',
          overflow: 'hidden'
        }} id="contact">
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(122, 162, 255, 0.1), transparent)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 10s ease-in-out infinite'
          }} />
          <div style={containerStyle}>
            <h2 style={{
              marginBottom: '32px'
            }}>
              Start Your Free Month Today
            </h2>
            <p style={{
              fontSize: '22px',
              color: colors.muted,
              marginBottom: '64px',
              maxWidth: '600px',
              margin: '0 auto 64px'
            }}>
              See why growing companies choose Northline. Get enterprise-grade infrastructure 
              without the enterprise complexity.
            </p>
            
            <button className="btn-primary" style={{
              fontSize: '20px',
              padding: '24px 48px',
              borderRadius: '16px',
              fontWeight: '700',
              marginBottom: '40px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px'
            }}
              onClick={() => setShowForm(true)}
            >
              Claim your free month
              {icons.arrow}
            </button>
            
            <div style={{
              fontSize: '16px',
              color: colors.muted,
              textAlign: 'center'
            }}>
              <p style={{ 
                marginBottom: '12px', 
                fontWeight: '500',
                maxWidth: 'none',
                margin: '0 auto 12px'
              }}>
                Takes 10 minutes to get started
              </p>
              <p style={{ 
                fontSize: '14px',
                fontStyle: 'italic',
                opacity: 0.8,
                maxWidth: 'none',
                margin: '0 auto'
              }}>
                No credit card required. No setup fees. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '80px 0 40px',
          background: colors.surface,
          borderTop: `1px solid ${colors.keyline}`,
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Footer code decorations - only render client-side */}
          {mounted && (
            <>
              <div className="floating-code" style={{
                position: 'absolute',
                top: '15%',
                left: '2%',
                transform: 'rotate(-6deg)',
                opacity: '0.15'
              }}>
                ./deploy.sh production<br/>
                echo "Deployment complete"
              </div>

              <div className="terminal-window" style={{
                position: 'absolute',
                top: '8%',
                right: '3%',
                width: '180px',
                transform: 'rotate(4deg)',
                opacity: '0.2'
              }}>
                <div className="terminal-header">
                  <div className="terminal-dot" style={{ background: '#ff5f56' }}></div>
                  <div className="terminal-dot" style={{ background: '#ffbd2e' }}></div>
                  <div className="terminal-dot" style={{ background: '#27ca3f' }}></div>
                  <span style={{ marginLeft: '8px', fontSize: '10px', color: '#888' }}>git</span>
                </div>
                <div className="terminal-content">
                  <div>$ git status</div>
                  <div style={{ color: '#79e2a6', fontSize: '9px' }}>On branch main</div>
                  <div style={{ color: '#8ce0c3', fontSize: '9px' }}>Clean working tree</div>
                  <div>$ git push origin main</div>
                  <div style={{ color: '#79e2a6', fontSize: '9px' }}>Everything up-to-date</div>
                </div>
              </div>

              <div className="floating-code" style={{
                position: 'absolute',
                bottom: '20%',
                right: '8%',
                transform: 'rotate(-2deg)',
                opacity: '0.1'
              }}>
                uptime<br/>
                free -h | grep Mem
              </div>
            </>
          )}
          <div style={containerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '56px',
              marginBottom: '56px'
            }}>
              <div style={{ maxWidth: '300px' }}>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.text
                  }}>
                    <svg width="28" height="28" viewBox="0 0 128 128" fill="none">
                      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="currentColor"/>
                    </svg>
                  </div>
                  Northline Technologies
                </div>
                <p style={{
                  color: colors.muted,
                  fontSize: '15px',
                  lineHeight: '1.6'
                }}>
                  Complete IT management for modern companies. Secure, compliant, and ready to scale from day one.
                </p>
              </div>
              
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>
                  Services
                </h4>
                <ul style={{
                  listStyle: 'none',
                  fontSize: '14px',
                  lineHeight: '2.2'
                }}>
                  <li><a href="#" style={{ color: colors.muted, textDecoration: 'none', transition: 'color 0.2s ease' }}>IT Systems Integration</a></li>
                  <li><a href="#" style={{ color: colors.muted, textDecoration: 'none', transition: 'color 0.2s ease' }}>Cloud Infrastructure</a></li>
                  <li><a href="#" style={{ color: colors.muted, textDecoration: 'none', transition: 'color 0.2s ease' }}>Security & Compliance</a></li>
                  <li><a href="#" style={{ color: colors.muted, textDecoration: 'none', transition: 'color 0.2s ease' }}>Email & Communications</a></li>
                </ul>
              </div>
              
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>
                  Company
                </h4>
                <ul style={{
                  listStyle: 'none',
                  fontSize: '14px',
                  lineHeight: '2.2'
                }}>
                  <li><a href="#" style={{ color: colors.muted, textDecoration: 'none', transition: 'color 0.2s ease' }}>About Us</a></li>
                  <li><a href="#" style={{ color: colors.muted, textDecoration: 'none', transition: 'color 0.2s ease' }}>Contact</a></li>
                  <li><a href="#" style={{ color: colors.muted, textDecoration: 'none', transition: 'color 0.2s ease' }}>Privacy Policy</a></li>
                  <li><a href="#" style={{ color: colors.muted, textDecoration: 'none', transition: 'color 0.2s ease' }}>Terms of Service</a></li>
                </ul>
              </div>
              
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>
                  Contact
                </h4>
                <div style={{
                  color: colors.muted,
                  fontSize: '14px',
                  lineHeight: '1.8'
                }}>
                  <p style={{ marginBottom: '8px' }}>hello@northlinetech.co</p>
                  <p style={{ marginBottom: '16px' }}>(555) 123-4567</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div style={{
              borderTop: `1px solid ${colors.keyline}`,
              paddingTop: '40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '14px',
              color: colors.muted,
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <p>© 2025 Northline Technologies. All rights reserved.</p>
              <p style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Made with care in the USA
                <span style={{ color: colors.brand }}>♡</span>
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Form Modal */}
      {showForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
          onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
        >
          <div style={{
            background: colors.surface,
            borderRadius: '24px',
            padding: '48px',
            maxWidth: '520px',
            width: '100%',
            border: `1px solid ${colors.border}`,
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            position: 'relative'
          }}>
            {/* Close button */}
            <button
              onClick={() => setShowForm(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                color: colors.text,
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.1)'}
            >
              ×
            </button>

            <div style={{
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              <div style={{
                color: colors.brand,
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {icons.sparkles}
              </div>
              <h3 style={{
                fontSize: '28px',
                marginBottom: '12px',
                color: colors.brand
              }}>
                Start Your Free Month
              </h3>
              <p style={{
                color: colors.muted,
                fontSize: '16px',
                maxWidth: 'none'
              }}>
                Get complete IT infrastructure setup at no charge. We&apos;ll be in touch within 24 hours.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} style={{ width: '100%' }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '8px',
                  color: colors.text
                }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: '12px',
                    fontSize: '16px',
                    color: colors.text,
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.brand}
                  onBlur={(e) => e.target.style.borderColor = colors.border}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '8px',
                  color: colors.text
                }}>
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: '12px',
                    fontSize: '16px',
                    color: colors.text,
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.brand}
                  onBlur={(e) => e.target.style.borderColor = colors.border}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '8px',
                  color: colors.text
                }}>
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: '12px',
                    fontSize: '16px',
                    color: colors.text,
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.brand}
                  onBlur={(e) => e.target.style.borderColor = colors.border}
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '8px',
                  color: colors.text
                }}>
                  Team Size
                </label>
                <select
                  name="teamSize"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: '12px',
                    fontSize: '16px',
                    color: colors.text,
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.brand}
                  onBlur={(e) => e.target.style.borderColor = colors.border}
                >
                  <option value="">Select team size</option>
                  <option value="1-5">1-5 people</option>
                  <option value="6-15">6-15 people</option>
                  <option value="16-50">16-50 people</option>
                  <option value="51-100">51-100 people</option>
                  <option value="100+">100+ people</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  fontSize: '18px',
                  padding: '18px 32px',
                  borderRadius: '14px',
                  fontWeight: '600',
                  marginBottom: '16px'
                }}
              >
                Claim Your Free Month
              </button>

              <p style={{
                fontSize: '13px',
                color: colors.muted,
                textAlign: 'center',
                lineHeight: '1.4',
                maxWidth: 'none'
              }}>
                No credit card required. We&apos;ll set up a 30-minute call to understand your needs and get you started.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}