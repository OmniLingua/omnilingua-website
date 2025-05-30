"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Star, Users, Globe, Clock } from "lucide-react"

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { icon: <Users className="h-5 w-5" />, value: "2,500+", label: "Happy Clients" },
    { icon: <Globe className="h-5 w-5" />, value: "200+", label: "Languages" },
    { icon: <CheckCircle className="h-5 w-5" />, value: "15,000+", label: "Documents Translated" },
    { icon: <Clock className="h-5 w-5" />, value: "24/7", label: "Support Available" },
  ]

  const features = [
    "Certified translations for legal, medical, financial, and technical documents",
    "Professional interpreting for meetings, conferences, and events",
    "Localization services to help your business connect worldwide",
    "Serving all Irish provinces including Dublin, Cork, Galway, and Waterford",
    "ISO certified quality standards and experienced linguists",
    "Express service available for urgent translation needs",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            {/* Trust Indicators */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 font-medium">4.9/5 Rating</span>
              </div>
              <span>•</span>
              <span>Trusted by 2,500+ clients</span>
              <span>•</span>
              <span>ISO Certified</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              OmniLingua — Your Global Language Partner
            </h1>

            <p className="max-w-[600px] text-muted-foreground md:text-lg leading-relaxed">
              At <strong>OmniLingua</strong>, we deliver precise, certified translation and interpreting services
              tailored to your needs. Whether for personal documents or international business, our expert linguists
              ensure your message is clear and culturally accurate. Trusted across Ireland with over 200 languages
              supported, fast turnarounds, and a 100% satisfaction guarantee.
            </p>

            {/* Features List */}
            <ul className="space-y-3 max-w-[600px]">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-3 rounded-lg transition-all duration-500 ${
                    index === currentStat ? "bg-primary/10 scale-105" : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {stat.icon}
                    <span className="font-bold text-lg">{stat.value}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[450px] lg:h-[450px] xl:h-[550px] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="https://avatars.githubusercontent.com/u/213985061?s=400&u=220e5066e3f3b21f21646bcfc9330fc9c2af83c6&v=4"
                alt="OmniLingua Professional Translation Services"
                width={500}
                height={550}
                className="object-cover w-full h-full rounded-lg transition-transform duration-700 hover:scale-105"
                priority
              />

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-black">Available 24/7</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
                <div className="text-xs">
                  <div className="font-bold text-primary text-black">Express Service</div>
                  <div className="text-muted-foreground">24-hour delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Trusted by leading organizations and institutions
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-xs font-medium">ISO 17100 Certified</div>
            <div className="text-xs font-medium">GDPR Compliant</div>
            <div className="text-xs font-medium">Secure & Confidential</div>
            <div className="text-xs font-medium">Quality Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
