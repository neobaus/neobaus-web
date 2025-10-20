import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AnalyticsShowcase } from "@/components/analytics-showcase"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      {/* <AnalyticsShowcase /> */}
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
