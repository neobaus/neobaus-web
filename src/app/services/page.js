import { Services } from "@/components/services"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  )
}
