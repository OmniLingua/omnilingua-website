import type { Metadata } from "next"
import AboutUs from "@/components/about-us"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us - OmniLingua",
  description: "Learn about OmniLingua and our professional translation services.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutUs />
      <Footer />
    </main>
  )
}
