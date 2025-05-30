import { FileText, Award, Clock, Building, Briefcase, ShieldCheck, Globe2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Personal Documents",
      description:
        "Translations for passports, birth & marriage certificates, medical records, immigration paperwork, and more — certified and accepted by official authorities.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Academic Credentials",
      description:
        "Degree certificates, transcripts, recommendation letters, and other academic documents required for study, visa, or work abroad.",
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Business Documents",
      description:
        "From contracts and company bylaws to financial reports and HR policies — we help businesses communicate clearly across borders.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Express Service",
      description:
        "Priority translations for urgent needs — delivered in as little as 24 hours without compromising quality.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Legal & Certified Translation",
      description:
        "Accurate and confidential translation of court documents, affidavits, powers of attorney, and compliance materials — with legal certification.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Government & NGO Translations",
      description:
        "Expert translation services for embassies, NGOs, local councils, and government bodies — aligned with regulatory standards.",
    },
    {
      icon: <Globe2 className="h-10 w-10 text-primary" />,
      title: "Website & App Localization",
      description:
        "Adapt your digital presence to global audiences with culturally aware translations for websites, apps, and marketing content.",
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Whether you need a personal document translated for immigration or a multilingual launch of your business, OmniLingua is your trusted partner in high-quality, human-powered translation services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="flex justify-center pb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
