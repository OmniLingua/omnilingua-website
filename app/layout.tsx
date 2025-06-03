import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import CookieBanner from "@/components/cookie-banner"
import AnalyticsProvider from "@/components/analytics-provider"

import ChatButton from '@/components/chat-button'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OmniLingua - Professional Document Translation Services",
  description:
    "Professional translation services for passports, certificates, and official documents in multiple languages. Trusted by thousands across Ireland.",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/213985061?s=200&v=4",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <CookieBanner />
          <AnalyticsProvider />
          <ChatButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
