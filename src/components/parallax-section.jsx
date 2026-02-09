import { Button } from "@/components/ui/button"

export function ParallaxSection() {
  return (
    <section 
      className="relative h-[400px] sm:h-[500px] flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join leading companies using our data and AI solutions to drive growth and innovation.
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full transition-transform hover:scale-105 active:scale-95">
          Get in Touch
        </Button>
      </div>
    </section>
  )
}
