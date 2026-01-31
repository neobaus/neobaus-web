'use client'

export function HeroVisual() {
  return (
    <div
      className="block relative w-full h-56 sm:h-72 md:h-96 lg:h-[560px] xl:h-[660px] order-1 lg:order-2"
      aria-label="Hero visual"
    >
      <img
        src="/solution-mindset.svg"
        alt="Solution Mindset"
        className="w-full h-full object-contain object-center"
      />
    </div>
  )
}