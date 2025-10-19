'use client'
import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"

export function Hero() {
  const widgetRef = useRef(null)

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
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground leading-tight tracking-tight">
              AI PREDICTIONS,
              <br className="hidden sm:block" />
              AUTOMATIONS.
            </h1>
            
            <div className="mt-4 sm:mt-6 lg:mt-8">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try it out
              </Button>
            </div>
          </div>

          {/* Right Side - SVG with Unicorn Studio */}
          <div 
            id="unicorn-studio-background"
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] order-1 lg:order-2"
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
