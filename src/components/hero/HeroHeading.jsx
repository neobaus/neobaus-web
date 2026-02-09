'use client'

export function HeroHeading() {
  return (
    <h1
      className="font-bold text-foreground leading-tight tracking-tight text-center lg:text-left w-full text-[11vw] sm:text-[8vw] lg:text-[3.5rem] xl:text-[4rem]"
      style={{
        letterSpacing: '-0.02em',
      }}
    >
      <div className="overflow-hidden block w-full">
        <span className="inline-block">AI Integrations</span>
      </div>
      <div className="overflow-hidden block w-full">
        <span className="inline-block text-primary">& Automations</span>
      </div>
    </h1>
  )
}