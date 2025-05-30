import { CheckCircle } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              OmniLingua is Ireland’s trusted translation partner, delivering expert language services with precision,
              cultural fluency, and unmatched customer care. we bridge language gaps
              for individuals, businesses, and institutions in over 200 languages.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              At OmniLingua, we go beyond literal translation. We deliver context-aware, culturally sensitive communication
              that connects people, brands, and communities. Whether it's a legal document, a business pitch, or a healthcare
              report, our mission is to ensure your message is not just understood — it's respected.
            </p>
            <ul className="grid gap-6">
              <li className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Certified Translators</h3>
                  <p className="text-muted-foreground">
                    Our team consists of certified professional translators with expertise in various fields and languages.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Fast Turnaround</h3>
                  <p className="text-muted-foreground">
                    We understand the importance of timely delivery and offer express services for urgent translation needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Every translation undergoes a rigorous quality check process to ensure accuracy and consistency.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Global Reach, Local Expertise</h3>
                  <p className="text-muted-foreground">
                    We serve clients across all of Ireland — and around the globe — with tailored support for local markets.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Trusted by Thousands</h3>
                  <p className="text-muted-foreground">
                    From startups to public institutions, we’ve helped thousands of clients break language barriers
                    and succeed globally.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative h-[350px] w-full md:h-[450px] overflow-hidden rounded-lg">
              <img
                src="https://github.com/OmniLingua/test/blob/main/Co-founders.png?raw=true"
                alt="Our team of translators"
                className="object-cover w-full h-full"
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
