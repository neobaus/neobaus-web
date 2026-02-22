import { About } from "@/components/about"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Script from "next/script"

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.neobaus.com"
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        <Script
          id="ld-aboutpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About neobaus",
              url: `${siteUrl}/about`,
              mainEntity: {
                "@type": "Organization",
                name: "neobaus",
                url: siteUrl,
                areaServed: "PH",
              },
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
