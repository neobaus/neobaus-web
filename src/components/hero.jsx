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

  // Ensure headline lines stay single-line by reducing font-size if they overflow.
  useEffect(() => {
    if (typeof window === 'undefined' || !headlineRef.current) return

    const el = headlineRef.current

    // Helper: check if any direct child block (the two line containers) overflow their width
    function isOverflowing() {
      const blocks = el.querySelectorAll(':scope > div')
      for (const b of blocks) {
        if (b.scrollWidth > b.clientWidth + 1) return true
      }
      return false
    }

    // Adjust font-size proportionally so the two line containers no longer overflow.
    // This computes the required scale factor (containerWidth / contentWidth) for each line
    // and applies the smallest scale to the headline font-size in one step. This avoids
    // iterative shrinking which could produce overly small text.
    function fitHeadline() {
      // Reset any inline font-size so CSS clamp can apply then read computed size
      el.style.fontSize = ''
      const computed = window.getComputedStyle(el)
      const baseFontPx = parseFloat(computed.fontSize) || 48
      const minPx = 18 // minimum font-size in px (approx 1.125rem)

      const blocks = el.querySelectorAll(':scope > div')
      let requiredScale = 1
      for (const b of blocks) {
        const contentW = b.scrollWidth
        const containerW = b.clientWidth
        if (contentW > containerW + 1) {
          const scale = containerW / contentW
          requiredScale = Math.min(requiredScale, scale)
        }
      }

      // If no reduction required, ensure whitespace is nowrap and leave as-is
      if (requiredScale >= 0.999) {
        // restore nowrap on each line container
        blocks.forEach((b) => {
          const span = b.querySelector('span')
          if (span) span.style.whiteSpace = 'nowrap'
        })
        el.style.fontSize = ''
        return
      }

      // If the required scale is too small (would make text tiny), allow wrapping instead
      const wrapThreshold = 0.85
      if (requiredScale < wrapThreshold) {
        // Allow the lines to wrap at word boundaries and slightly reduce font-size
        blocks.forEach((b) => {
          const span = b.querySelector('span')
          if (span) {
            span.style.whiteSpace = 'normal'
            // tighten letter spacing a bit to keep visual weight
            span.style.letterSpacing = '-0.01em'
          }
        })
        const targetPx = Math.max(minPx, Math.floor(baseFontPx * 0.9))
        el.style.fontSize = targetPx + 'px'
        return
      }

      // Compute target font size but clamp to minPx
      const targetPx = Math.max(minPx, Math.floor(baseFontPx * requiredScale))
      el.style.fontSize = targetPx + 'px'
    }

    // Debounced resize handler
    let raf = null
    function onResize() {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => fitHeadline())
    }

    // Run initially and on resize
    fitHeadline()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
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
              className="font-bold text-foreground leading-none tracking-tight text-center lg:text-left overflow-hidden w-full"
              style={{
                fontSize: 'clamp(1.25rem, 5vw + 1rem, 6rem)',
                letterSpacing: '-0.02em'
              }}
            >
              <div className="overflow-hidden block w-full">
                <span className="inline-block">
                  AI Integrations
                </span>
              </div>

              <div className="overflow-hidden block w-full">
                <span className="inline-block text-primary">
                  & Automations
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
