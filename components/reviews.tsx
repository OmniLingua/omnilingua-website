"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      id: 1,
      name: "Sarah O'Connor",
      location: "Dublin, Ireland",
      rating: 5,
      service: "Academic Credential Translation",
      review:
        "OmniLingua translated my university transcripts for my visa application. The service was incredibly fast and professional. They delivered certified translations within 24 hours, and the quality was exceptional. Highly recommended!",
      date: "2 weeks ago",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVmKIBqihi907yxfHcsdtPl5Jmjqrng13iklL5ZPBpgdH7nv5ySjWSPnjPbpOOa92iwA&usqp=CAU",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      location: "Cork, Ireland",
      rating: 5,
      service: "Personal Document Translation",
      review:
        "I needed my marriage certificate and birth certificate translated from Arabic to English. The team at OmniLingua was very understanding and provided accurate translations that were accepted by the immigration office without any issues.",
      date: "1 month ago",
      avatar: "https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c43abe18502.png",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      location: "Galway, Ireland",
      rating: 5,
      service: "Business Document Translation",
      review:
        "Our company needed several contracts translated from Spanish to English for our Irish operations. OmniLingua handled everything professionally and delivered on time. The translations were perfect and legally compliant.",
      date: "3 weeks ago",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEmYTnotkjxEvw03u1HTDgdhY4r4DFwtyyB_50_SilEKSMhZxzS3Ts4SZ9-X1TeD-WLg&usqp=CAU",
    },
    {
      id: 4,
      name: "Chen Wei",
      location: "Waterford, Ireland",
      rating: 5,
      service: "Express Translation Service",
      review:
        "I had an urgent deadline for my PhD application documents. OmniLingua's express service saved the day! They translated my Chinese documents overnight with perfect accuracy. Worth every penny!",
      date: "1 week ago",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdF9GpAKt335pgBJgVDAoYdCtedsisP2Y96cgQ5ZNfMKuWkz3Hjaperoab3Znhjp1ef0&usqp=CAU",
    },
    {
      id: 5,
      name: "Pierre Dubois",
      location: "Limerick, Ireland",
      rating: 5,
      service: "Legal Document Translation",
      review:
        "Excellent service for translating legal documents from French to English. The translators clearly understand legal terminology and provided certified translations that were accepted by the courts immediately.",
      date: "2 months ago",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOo6GqgSlHohHNWm1olROCPTvcFBLrpFejkVMvmwWffadD_H0azrIdqmNjngsFEBLI-Q&usqp=CAU",
    },
    {
      id: 6,
      name: "Anna Kowalski",
      location: "Dublin, Ireland",
      rating: 5,
      service: "Medical Document Translation",
      review:
        "I needed my medical records translated from Polish for my new doctor in Ireland. OmniLingua provided accurate, confidential translation service. The medical terminology was perfectly translated.",
      date: "3 weeks ago",
      avatar: "https://www.zmo.ai/wp-content/uploads/2023/11/ImgCreator.ai-1-9-6-0-long-redhead-cute-young-woman-looking-at-the-camera-wearing-a-black-French-beret-in-a-cute.webp",
    },
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  const stats = [
    { label: "Happy Clients", value: "2,500+" },
    { label: "Languages Supported", value: "200+" },
    { label: "Documents Translated", value: "15,000+" },
    { label: "Average Rating", value: "4.9/5" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Trusted by thousands of individuals and businesses across Ireland. Read real reviews from our satisfied
              clients.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Review Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12">
            <CardContent className="p-0">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(reviews[currentReview].rating)}
                    <span className="text-sm text-muted-foreground">{reviews[currentReview].date}</span>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed mb-6">"{reviews[currentReview].review}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={reviews[currentReview].avatar || "/placeholder.svg"}
                      alt={reviews[currentReview].name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{reviews[currentReview].name}</div>
                      <div className="text-sm text-muted-foreground">{reviews[currentReview].location}</div>
                      <div className="text-sm text-primary">{reviews[currentReview].service}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={prevReview}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={nextReview}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentReview ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(review.rating)}
                  <span className="text-sm text-muted-foreground ml-auto">{review.date}</span>
                </div>
                <p className="text-sm mb-4 line-clamp-4">"{review.review}"</p>
                <div className="flex items-center gap-3">
                  <img src={review.avatar || "/placeholder.svg"} alt={review.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-medium text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.location}</div>
                    <div className="text-xs text-primary">{review.service}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience Our Service?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust OmniLingua for their translation needs. Get your free quote
            today and experience our professional service firsthand.
          </p>
          <Link href="/contact">
            <Button size="lg" className="mr-4">
                Get Free Quote
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline">
                View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
