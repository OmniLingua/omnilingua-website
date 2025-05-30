import type { Metadata } from "next"
import Reviews from "@/components/reviews"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Reviews - OmniLingua",
  description: "Read what our clients say about our professional translation services.",
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <Reviews />
      <Footer />
    </main>
  )
}
