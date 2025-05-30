import { Card, CardContent } from "@/components/ui/card"

export default function Languages() {
  const languages = [
    "Arabic",
    "Bengali",
    "Chinese",
    "Dutch",
    "English",
    "French",
    "German",
    "Hindi",
    "Italian",
    "Japanese",
    "Korean",
    "Portuguese",
    "Russian",
    "Spanish",
    "Swedish",
    "Turkish",
    "Ukrainian",
    "Vietnamese",
    "Thai",
    "Polish",
  ]

  return (
    <section id="languages" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Languages We Support</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of certified translators can translate documents from and to over 200 languages worldwide.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-12 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {languages.map((language, index) => (
            <Card key={index} className="flex items-center justify-center p-4 text-center">
              <CardContent className="p-0">
                <p className="font-medium">{language}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <p className="text-muted-foreground">Don't see your language? Contact us for more options.</p>
        </div>
      </div>
    </section>
  )
}
