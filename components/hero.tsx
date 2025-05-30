import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              OmniLingua — Your Global Language Partner
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-lg leading-relaxed">
              At <strong>OmniLingua</strong>, we deliver precise, certified translation and interpreting services tailored to your needs.
              Whether for personal documents or international business, our expert linguists ensure your message is clear and culturally accurate.
              Trusted across Ireland with over 200 languages supported, fast turnarounds, and a 100% satisfaction guarantee.
            </p>

            <ul className="list-disc list-inside max-w-[600px] text-muted-foreground md:text-base space-y-2">
              <li>Certified translations for legal, medical, financial, and technical documents</li>
              <li>Professional interpreting for meetings, conferences, and events</li>
              <li>Localization services to help your business connect worldwide</li>
              <li>Serving all Irish provinces including Dublin, Cork, Galway, and Waterford</li>
              <li>ISO certified quality standards and experienced linguists</li>
            </ul>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="w-full">
                  Get Started
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[450px] lg:h-[450px] xl:h-[550px] overflow-hidden rounded-lg">
              <Image
                src="https://github.com/OmniLingua/test/blob/main/Logo1.png?raw=true"
                alt="Co-founders of OmniLingua"
                width={500}
                height={550}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
