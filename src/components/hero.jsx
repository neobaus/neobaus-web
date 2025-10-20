'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from "@/components/ui/button"

export function Hero() {
  const widgetRef = useRef(null)
  const headlineRef = useRef(null)

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-1">
            <h1 
              ref={headlineRef}
              className="text-5xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-foreground leading-none tracking-tight text-center lg:text-left"
            >
              <div className="overflow-hidden">
                <span className="inline-block">
                  {"AI Integrations &".split('').map((char, index) => (
                    <span key={index} className="char inline-block">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="inline-block text-primary">
                  {"Smart Automations".split('').map((char, index) => (
                    <span key={index} className="char inline-block">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </div>
              
            </h1>
            <div className="overflow-hidden font-bold text-gray-400">
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
