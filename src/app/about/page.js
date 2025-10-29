import { About } from "@/components/about"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  )
}