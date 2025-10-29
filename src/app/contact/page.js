import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}