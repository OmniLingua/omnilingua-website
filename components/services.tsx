import { FileText, Award, Clock, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Personal Documents",
      description:
        "Passports, birth certificates, marriage certificates, academic transcripts, and other personal documents.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Academic Credentials",
      description:
        "Diplomas, degrees, transcripts, and other educational documents for immigration or employment purposes.",
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Business Documents",
      description: "Contracts, financial statements, marketing materials, and corporate communications.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Express Service",
      description: "Urgent translation services with quick turnaround times for time-sensitive documents.",
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of translation services to meet your personal and professional needs.
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
