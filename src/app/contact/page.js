'use client'
import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}