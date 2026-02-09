'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroCTA() {
  const buttonRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Create a timeline that is linked to scroll position
    const ctx = gsap.context(() => {
      gsap.to(buttonRef.current, {
        scrollTrigger: {
          trigger: "body", // Use body to detect overall scroll
          start: "top top",
          end: "300px top", // Animate over the first 300px of scroll
          scrub: 1, // Smooth scrubbing
          toggleActions: "play none none reverse"
        },
        scale: 1.05,
        filter: "brightness(1.1)", // Subtle highlight instead of color change
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        ease: "none"
      })
    }, buttonRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="w-full mt-4 sm:mt-2 lg:mt-2">
      <Button
        ref={buttonRef}
        size="lg"
        className="w-full lg:w-9/10 text-base sm:text-lg px-6 sm:px-4 py-4 sm:py-4 h-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Upgrade Your Business Now
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}