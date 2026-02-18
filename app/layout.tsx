import type { Metadata } from 'next'
import { Syne, Space_Mono, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import NoiseOverlay from '@/components/ui/NoiseOverlay'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://krishnarajrajendran.com'),
  title: {
    default: "Krishnaraj Rajendran Nair — Senior Frontend Developer",
    template: "%s | Krishnaraj R. Nair"
  },
  description: "Senior Frontend Developer with 7+ years building scalable web & mobile applications for banking, fintech, and enterprise. Based in Abu Dhabi, UAE.",
  keywords: ["Frontend Developer", "React", "React Native", "Next.js", "TypeScript", "Abu Dhabi", "Banking", "Fintech", "Freelance"],
  authors: [{ name: "Krishnaraj Rajendran Nair" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishnarajrajendran.com",
    title: "Krishnaraj Rajendran Nair — Senior Frontend Developer",
    description: "7+ years building scalable web & mobile applications for banking, fintech, and enterprise.",
    siteName: "Krishnaraj R. Nair",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishnaraj Rajendran Nair — Senior Frontend Developer",
    description: "7+ years building scalable web & mobile applications for banking, fintech, and enterprise.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased">
        <NoiseOverlay />
        <Navbar />
        <main className="pt-[68px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
