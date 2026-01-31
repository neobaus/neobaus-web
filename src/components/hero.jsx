'use client'
import { HeroBackground } from './hero/HeroBackground'
import { HeroHeading } from './hero/HeroHeading'
import { HeroDescription } from './hero/HeroDescription'
import { HeroCTA } from './hero/HeroCTA'
import { HeroVisual } from './hero/HeroVisual'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-1 pb-1 sm:pt-2 sm:pb-1 m:pt-1 m:pb-1">

      {/* Content */}
      <div className="container py-6 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-0 sm:min-h-[calc(100vh-4rem)]">
          {/* Text Top */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-3 sm:space-y-6 lg:space-y-8 order-1 lg:order-1 w-full">
            <HeroHeading />
            <HeroDescription />
          </div>

          {/* Visual */}
          <div className="order-2 lg:order-2 w-full">
            <HeroVisual />
          </div>

          {/* CTA Bottom */}
          <div className="flex justify-center lg:justify-start order-3 lg:order-3 w-full">
            <HeroCTA />
          </div>
        </div>
      </div>
    </section>
  )
}
