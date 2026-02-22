'use client'
import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Suspense } from "react";
import Script from "next/script";

export default function ContactPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.neobaus.com";
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <Script
          id="ld-contactpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact neobaus",
              url: `${siteUrl}/contact`,
              about: {
                "@type": "Organization",
                name: "neobaus",
                url: siteUrl,
              },
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
