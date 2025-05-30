"use client"

import { useState } from "react"
import { CheckCircle, ChevronLeft, ChevronRight, Users, Award, Globe, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUs() {
  const [currentMember, setCurrentMember] = useState(0)

  const teamMembers = [
    {
      id: 1,
      name: "Eskandar Atrakchi",
      role: "Co-Founder & CEO",
      specialization: "Arabic, Persian, English",
      experience: "15+ years",
      image: "https://avatars.githubusercontent.com/u/102361045?v=4",
      bio: "Eskandar brings over 15 years of experience in professional translation and business development. He specializes in legal and business document translation and has helped thousands of clients navigate complex immigration processes.",
      certifications: [
        "Certified Translator (Arabic-English)",
        "MBA in International Business",
        "Legal Translation Specialist",
      ],
    },
    {
      id: 2,
      name: "Ali Yonas",
      role: "Co-Founder & CTO",
      specialization: "Technology, French, English",
      experience: "12+ years",
      image: "https://media-dub4-1.cdn.whatsapp.net/v/t61.24694-24/491840611_579237534676827_3356948256234096594_n.jpg?ccb=11-4&oh=01_Q5Aa1gFGIrRZUgkKBO7Guh06amFhBKlIv7l5pC463NURjn0NTw&oe=68473238&_nc_sid=5e03e0&_nc_cat=103",
      bio: "Ali leads our technology initiatives and quality assurance processes. With a background in linguistics and computer science, he ensures our translation processes are both accurate and efficient.",
      certifications: [
        "MSc in Computational Linguistics",
        "Certified Translation Project Manager",
        "ISO 17100 Quality Specialist",
      ],
    },
    {
      id: 3,
      name: "Dr. Maria Santos",
      role: "Senior Translator",
      specialization: "Spanish, Portuguese, Medical",
      experience: "20+ years",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFmNTkW7-ZQhT-YypyGJzVzXUs5eaUO2LXw&s",
      bio: "Dr. Santos is our lead medical translator with extensive experience in healthcare documentation. She has worked with major hospitals and medical institutions across Europe.",
      certifications: [
        "PhD in Translation Studies",
        "Medical Translation Specialist",
        "Certified Healthcare Interpreter",
      ],
    },
    {
      id: 4,
      name: "Zhang Wei",
      role: "Senior Translator",
      specialization: "Chinese, Japanese, Korean",
      experience: "18+ years",
      image: "https://i.imgur.com/zNWXrrlg.jpg",
      bio: "Zhang Wei specializes in Asian languages and has extensive experience in academic and business translation. He has helped hundreds of students with their university applications.",
      certifications: ["MA in East Asian Studies", "Certified Academic Translator", "Business Translation Specialist"],
    },
    {
      id: 5,
      name: "Sophie Dubois",
      role: "Quality Manager",
      specialization: "French, German, Legal",
      experience: "14+ years",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYs_c6Ojy59QePPkuS3HiKh5wIOihFluiLdep2eY7n7gKy8__p2LdfrPVNCSH7Sq6c46U&usqp=CAU",
      bio: "Sophie oversees our quality assurance processes and specializes in legal document translation. She ensures every translation meets the highest professional standards.",
      certifications: ["LLM in International Law", "Certified Legal Translator", "ISO Quality Management"],
    },
  ]

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length)
  }

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const achievements = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "2,500+ Happy Clients",
      description: "Served clients from over 50 countries",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "ISO 17100 Certified",
      description: "International quality standard for translation services",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "200+ Languages",
      description: "Comprehensive language coverage worldwide",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service",
    },
  ]

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About OmniLingua</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ireland's trusted translation partner, delivering expert language services with precision, cultural
              fluency, and unmatched customer care. We bridge language gaps for individuals, businesses, and
              institutions in over 200 languages.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At OmniLingua, we go beyond literal translation. We deliver context-aware, culturally sensitive
            communication that connects people, brands, and communities. Whether it's a legal document, a business
            pitch, or a healthcare report, our mission is to ensure your message is not just understood — it's
            respected.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Meet Our Expert Team</h3>

          {/* Featured Team Member */}
          <div className="relative max-w-6xl mx-auto mb-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-[400px] lg:h-[500px]">
                    <img
                      src={teamMembers[currentMember].image || "/placeholder.svg"}
                      alt={teamMembers[currentMember].name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-2">{teamMembers[currentMember].name}</h4>
                    <p className="text-primary font-semibold mb-4">{teamMembers[currentMember].role}</p>
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-medium">Specialization: </span>
                        <span className="text-muted-foreground">{teamMembers[currentMember].specialization}</span>
                      </div>
                      <div>
                        <span className="font-medium">Experience: </span>
                        <span className="text-muted-foreground">{teamMembers[currentMember].experience}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{teamMembers[currentMember].bio}</p>
                    <div>
                      <h5 className="font-semibold mb-3">Certifications:</h5>
                      <ul className="space-y-2">
                        {teamMembers[currentMember].certifications.map((cert, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur"
              onClick={prevMember}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur"
              onClick={nextMember}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Team Member Thumbnails */}
          <div className="flex justify-center gap-4 flex-wrap">
            {teamMembers.map((member, index) => (
              <button
                key={member.id}
                onClick={() => setCurrentMember(index)}
                className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all ${
                  index === currentMember ? "border-primary scale-110" : "border-gray-300 hover:border-primary/50"
                }`}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose OmniLingua?</h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                <div className="space-y-1">
                  <h4 className="text-xl font-medium">Certified Translators</h4>
                  <p className="text-muted-foreground">
                    Our team consists of certified professional translators with expertise in various fields and
                    languages. All our translators hold relevant qualifications and years of experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                <div className="space-y-1">
                  <h4 className="text-xl font-medium">Fast Turnaround</h4>
                  <p className="text-muted-foreground">
                    We understand the importance of timely delivery and offer express services for urgent translation
                    needs. Most documents are completed within 24-48 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                <div className="space-y-1">
                  <h4 className="text-xl font-medium">Quality Assurance</h4>
                  <p className="text-muted-foreground">
                    Every translation undergoes a rigorous quality check process including proofreading, editing, and
                    final review to ensure accuracy and consistency.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                <div className="space-y-1">
                  <h4 className="text-xl font-medium">Global Reach, Local Expertise</h4>
                  <p className="text-muted-foreground">
                    We serve clients across all of Ireland — and around the globe — with tailored support for local
                    markets and understanding of regional requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                <div className="space-y-1">
                  <h4 className="text-xl font-medium">Trusted by Thousands</h4>
                  <p className="text-muted-foreground">
                    From startups to public institutions, we've helped thousands of clients break language barriers and
                    succeed globally with our professional translation services.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                <div className="space-y-1">
                  <h4 className="text-xl font-medium">Confidential & Secure</h4>
                  <p className="text-muted-foreground">
                    We maintain strict confidentiality protocols and secure handling of all documents. Your sensitive
                    information is always protected with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
