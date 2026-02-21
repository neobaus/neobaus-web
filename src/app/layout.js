import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/auth-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "neobaus | AI Integrations & Software Development  in the Philippines",
    template: "%s | neobaus",
  },
  description:
    "neobaus delivers custom software development, automations, and AI integrations for businesses in the Philippines. Streamline workflows and accelerate growth.",
  keywords: [
    "neobaus",
    "software development",
    "AI integrations",
    "automations",
    "Philippines",
    "PH",
    "custom software",
    "business automation",
    "data analytics",
  ],
  applicationName: "neobaus",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title:
      "neobaus | Software Development & AI Integrations in the Philippines",
    description:
      "Custom software, automations, and AI integrations to streamline your business.",
    siteName: "neobaus",
    images: [
      {
        url: `${siteUrl}/globe.svg`,
        width: 1200,
        height: 630,
        alt: "neobaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "neobaus | Software Development & AI Integrations in the Philippines",
    description:
      "Custom software, automations, and AI integrations to streamline your business.",
    images: [`${siteUrl}/globe.svg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "origin-when-cross-origin",
  appleWebApp: {
    title: "neobaus",
    statusBarStyle: "default",
  },
  other: {
    "x-robots-tag": "all",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AuthProvider>{children}</AuthProvider>
          <Toaster richColors position="top-center" />
          <Script
            id="ld-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "neobaus",
                url: siteUrl,
                areaServed: "PH",
                logo: `${siteUrl}/globe.svg`,
                sameAs: [],
              }),
            }}
          />
          <Script
            id="ld-website"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                url: siteUrl,
                name: "neobaus",
                potentialAction: {
                  "@type": "SearchAction",
                  target: `${siteUrl}/search?q={search_term_string}`,
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
