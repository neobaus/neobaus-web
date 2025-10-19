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
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden pt-16">
      {/* Unicorn.studio Interactive Background */}
      <div 
        id="unicorn-studio-background"
        className="absolute inset-0 z-0"
        aria-label="Interactive background element - unicorn.studio integration"
      >
        <div 
          data-us-project="ZJScHH3kB3zCRXfGWNyW" 
          style={{width: "100%", height: "100%", minHeight: "100vh"}}
          data-us-initialized="true"
        ></div>
        <script 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight tracking-tight">
              AI PREDICTIONS,
              AUTOMATIONS.
            </h1>
            
            <div className="mt-8 sm:mt-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try it out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
