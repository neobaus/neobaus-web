'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function HeroVisual() {
  const visualRef = useRef(null)
  const [index, setIndex] = useState(0)
  const images = ['/undraw_1.svg', '/undraw_2.svg', '/undraw_3.svg']

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
  
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 10000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="block relative w-full h-64 sm:h-80 md:h-96 lg:h-[480px] xl:h-[580px] order-1 lg:order-2"
      aria-label="Hero visual"
    >
      <img
        ref={visualRef}
        src={images[index]}
        alt="Development"
        className="w-full h-full object-contain object-center"
      />
    </div>
  )
}
