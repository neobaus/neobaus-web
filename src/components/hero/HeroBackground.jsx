'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function HeroBackground() {
  const backgroundRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !backgroundRef.current) return

    const orbs = backgroundRef.current.querySelectorAll('.floating-orb')
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        y: 'random(-50, 50)',
        x: 'random(-50, 50)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      })
    })
  }, [])

  return (
    <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent animate-pulse"></div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            `linear-gradient(to right, rgba(var(--primary-rgb, 59, 130, 246), 0.03) 1px, transparent 1px),\n             linear-gradient(to bottom, rgba(var(--primary-rgb, 59, 130, 246), 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Floating Orbs */}
      <div className="floating-orb absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="floating-orb absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="floating-orb absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="floating-orb absolute bottom-40 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      {/* Animated Radial Gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(var(--primary-rgb, 59, 130, 246), 0.1), transparent 50%)',
          animation: 'radialPulse 15s ease-in-out infinite',
        }}
      ></div>
    </div>
  )
}
