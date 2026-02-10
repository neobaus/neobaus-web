'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { HeroBackground } from './hero/HeroBackground'
import { HeroHeading } from './hero/HeroHeading'
import { HeroDescription } from './hero/HeroDescription'
import { HeroCTA } from './hero/HeroCTA'
import { HeroVisual } from './hero/HeroVisual'

export function Hero() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements stagger
      gsap.from(textRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      })

      // Animate visual
      gsap.from(visualRef.current, {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-1 pb-1 sm:pt-2 sm:pb-1 m:pt-1 m:pb-1">

      {/* Content */}
      <div className="container py-6 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-0 sm:min-h-[calc(100vh-4rem)]">
          {/* Text Top */}
          <div ref={textRef} className="flex flex-col justify-center items-center lg:items-start space-y-3 sm:space-y-6 lg:space-y-8 order-1 lg:order-1 w-full mt-16 sm:mt-20">
            <div className="flex justify-center lg:justify-start w-full">
              <Badge variant="secondary" className="text-sm sm:text-base px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Sparkles className="w-4 h-4 mr-2 inline-block" />
                <span>Curated to your satisfaction</span>
              </Badge>
            </div>
            <div><HeroHeading /></div>
            <div><HeroDescription /></div>
            {/* CTA inline on large screens to avoid dropping below visual */}
            <div className="hidden lg:block w-full">
              <HeroCTA />
            </div>
          </div>

          {/* Visual */}
          <div ref={visualRef} className="order-2 lg:order-2 w-full mt-8 sm:mt-8 lg:mt-0">
            <HeroVisual />
          </div>

          {/* CTA Bottom */}
          <div className="flex justify-center order-3 w-full lg:hidden">
            <HeroCTA />
          </div>
        </div>
      </div>
    </section>
  )
}