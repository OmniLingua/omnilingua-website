import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Professional Document Translation Services
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Accurate translations for passports, certificates, and official documents in over 50 languages by
                certified translators.
              </p>
            </div>
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
              <img
                src="/placeholder.svg?height=550&width=500"
                alt="Translation services illustration"
                className="object-cover w-full h-full"
                width={500}
                height={550}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
