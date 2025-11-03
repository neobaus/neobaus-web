import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/auth-provider";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Toaster } from 'sonner';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "neobaus",
  description: "AI Solutions for your business",
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
      </body>
    </html>
    </ClerkProvider>
  );
}
