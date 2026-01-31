'use client'

export function HeroHeading() {
  return (
    <h1
      className="font-bold text-foreground leading-tight tracking-tight text-center lg:text-left w-full text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem]"
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