'use client'

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(var(--primary-rgb, 59, 130, 246), 0.03) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(var(--primary-rgb, 59, 130, 246), 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}
