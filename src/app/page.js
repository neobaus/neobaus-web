import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { ParallaxSection } from "@/components/parallax-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { LandingContact } from "@/components/landing-contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-white dark:bg-neutral-900">
        <Hero />
      </div>
      {/* <div className="bg-gray-100 dark:bg-neutral-800">
        <Projects />
      </div> */}
      <div className="bg-gray-100 dark:bg-neutral-800">
        <Services />
      </div>
      
      <ParallaxSection />
      <LandingContact />

      <div className="bg-white dark:bg-neutral-800">
        <About />
      </div>
      {/* <div className="bg-gray-100 dark:bg-neutral-800">
        <Testimonials />
      </div> */}
      <div className="bg-gray-100 dark:bg-neutral-800">
        <Footer />
      </div>
    </div>
  );
}
