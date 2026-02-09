'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function HeroVisual() {
  const visualRef = useRef(null)

  useEffect(() => {
    if (!visualRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(visualRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }, visualRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      className="block relative w-full h-64 sm:h-80 md:h-96 lg:h-[480px] xl:h-[580px] order-1 lg:order-2"
      aria-label="Hero visual"
    >
      <img
        ref={visualRef}
        src="/dev1.svg"
        alt="Development"
        className="w-full h-full object-contain object-center"
      />
    </div>
  )
}