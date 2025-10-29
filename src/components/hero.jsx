'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from "@/components/ui/button"

export function Hero() {
  const widgetRef = useRef(null)
  const headlineRef = useRef(null)
  const backgroundRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !backgroundRef.current) return

    // Animate floating orbs
    const orbs = backgroundRef.current.querySelectorAll('.floating-orb')
    
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        y: "random(-50, 50)",
        x: "random(-50, 50)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      })
    })
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !widgetRef.current) return

    const src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js'

    // If script already present, try to init if needed
    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
        try { window.UnicornStudio.init(); window.UnicornStudio.isInitialized = true } catch (e) {}
      }
      return
    }

    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onload = () => {
      try {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init()
          window.UnicornStudio.isInitialized = true
          }
      } catch (e) {}
    }
    document.body.appendChild(s)

    // keep the script around (don't remove on unmount) to avoid reloading on navigation
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !headlineRef.current) return

    // GSAP headline animation
    const chars = headlineRef.current.querySelectorAll('.char')
    
    // Set initial state
    gsap.set(chars, { y: -100, opacity: 0 })

    // Animate characters with stagger
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.05,
      delay: 0.5
    })
  }, [])
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-8 pb-8">
      {/* Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-primary/10"></div>
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-primary/5 to-transparent animate-pulse"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(var(--primary-rgb, 59, 130, 246), 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(var(--primary-rgb, 59, 130, 246), 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating Orbs */}
        <div className="floating-orb absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute bottom-40 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        
        {/* Animated Radial Gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(var(--primary-rgb, 59, 130, 246), 0.1), transparent 50%)',
            animation: 'radialPulse 15s ease-in-out infinite'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-1 w-full">
            <h1 
              ref={headlineRef}
              className="font-bold text-foreground leading-none tracking-tight text-center lg:text-left overflow-hidden w-full"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 10rem)',
                letterSpacing: '-0.02em'
              }}
            >
              <div className="overflow-hidden block w-full">
                <span className="inline-block whitespace-nowrap">
                  {"AI Integrations &".split('').map((char, index) => (
                    <span key={index} className="char inline-block">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </div>
              <div className="overflow-hidden block w-full">
                <span className="inline-block text-primary whitespace-nowrap">
                  {"Smart Automations".split('').map((char, index) => (
                    <span key={index} className="char inline-block">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </div>
              
            </h1>
            <div className="overflow-hidden text-gray-400 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg">
                <span className="inline-block">
                Transform your ideas into reality with intelligent AI solutions designed to streamline workflows, boost efficiency, and accelerate growth.
                </span>
            </div>
            
            <div className="w-full mt-4 sm:mt-2 lg:mt-2">
              <Button 
                size="lg" 
                className="w-full lg:w-9/10 text-base sm:text-lg px-6 sm:px-4 py-4 sm:py-4 h-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </Button>
            </div>
          </div>

          {/* SVG with Unicorn Studio - Hidden on mobile */}
          <div 
            id="unicorn-studio-background"
            className="hidden lg:block relative w-full h-[600px] xl:h-[700px] order-2"
            aria-label="Interactive background element - unicorn.studio integration"
          >
            <div 
              data-us-project="ZJScHH3kB3zCRXfGWNyW" 
              className="w-full h-full"
            >
              <img 
                src="/solution-mindset.svg" 
                alt="Solution Mindset" 
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
