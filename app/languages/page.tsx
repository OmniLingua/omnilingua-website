import type { Metadata } from "next"
import Languages from "@/components/languages"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Languages - OmniLingua",
  description: "View all the languages we support for professional translation services.",
}

export default function LanguagesPage() {
  return (
    <main className="min-h-screen">
      <Languages />
      <Footer />
    </main>
  )
}
