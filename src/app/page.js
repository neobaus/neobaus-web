import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { AnalyticsShowcase } from "@/components/analytics-showcase"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <AnalyticsShowcase />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
