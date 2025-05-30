import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us - GlobalTrans",
  description: "Get in touch with GlobalTrans for your translation needs.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactForm />
      <Footer />
    </main>
  )
}
