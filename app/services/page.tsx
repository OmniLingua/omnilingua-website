import type { Metadata } from "next"
import Services from "@/components/services"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Services - GlobalTrans",
  description: "Explore our comprehensive translation services for personal and business documents.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Services />
      <Footer />
    </main>
  )
}
