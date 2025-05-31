"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Shield, FileText, Scale, Clock } from "lucide-react"

interface TermsModalProps {
  children: React.ReactNode
}

export default function TermsModal({ children }: TermsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4 border-b flex-shrink-0">
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Scale className="h-6 w-6 text-primary" />
            Terms of Service
          </DialogTitle>
          <div className="text-sm text-muted-foreground mt-2">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full px-6 py-4">
            <div className="space-y-6 pr-4">

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By using OmniLingua's translation services, you agree to these Terms of Service. If you do not agree, you must not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">2. Service Description</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  OmniLingua provides translation and interpretation services in over 200 languages. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                  <li>Document translation (personal, academic, business, legal, medical)</li>
                  <li>Certified translation (via accredited partners if required)</li>
                  <li>Express translation services</li>
                  <li>Interpretation services</li>
                  <li>Localization and website translation</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">3. User Responsibilities</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>3.1 Accuracy:</strong> You are responsible for ensuring that any documents or instructions you provide are accurate and complete.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>3.2 Legality:</strong> You confirm you have the right to request translation of any materials submitted and that they do not infringe any third-party rights or laws.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>3.3 Payment:</strong> Payments must be made as agreed. Delays may result in late fees or service suspension.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">4. Quality Disclaimer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  OmniLingua strives to provide high-quality translations using professional and freelance linguists. However, due to the human nature of translation and contextual variations, absolute accuracy cannot be guaranteed. Clients are advised to review translations for critical uses.
                </p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">5. Turnaround & Deadlines</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Standard projects are delivered within 24–72 hours depending on length and complexity. Express delivery is available at an additional cost. We are not responsible for delays due to technical issues or external circumstances beyond our control (force majeure).
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">6. Confidentiality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All client materials are treated as confidential. Our translators and staff are bound by non-disclosure agreements. However, we cannot be held liable for any breach arising from third-party platforms (e.g. email providers or hosting services).
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">7. Limitation of Liability</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  OmniLingua’s liability is limited to the amount paid for the specific service rendered. We are not liable for indirect, incidental, or consequential damages including but not limited to financial loss, missed deadlines, or reputational harm.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">8. Intellectual Property</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You retain ownership of your original documents. Upon full payment, you gain ownership of the translated output. OmniLingua retains all rights to its translation tools, methods, and workflow systems.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">9. Cancellation and Refunds</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>9.1 Cancellations:</strong> Projects may be cancelled prior to commencement for a full refund. If work has started, only a partial refund may be possible.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>9.2 Refunds:</strong> Refund requests must be submitted in writing within 7 days of project delivery. Refunds are processed within 10 business days.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">10. Subcontracting and Freelancers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  OmniLingua works with a network of freelance linguists and third-party partners. While we strive to ensure quality and professionalism, you acknowledge that these are independent service providers, and we are not liable for their individual actions beyond our vetting process.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">11. Governing Law</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  These Terms are governed by Irish law. Any disputes will be subject to the jurisdiction of the courts in the Republic of Ireland.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">12. Modifications</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  OmniLingua reserves the right to modify these Terms of Service at any time. Updates will be published on this page. Continued use of our services after updates constitutes acceptance.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">13. Contact</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For any questions or concerns about these terms, you can contact us at:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg text-sm">
                  <p><strong>Email:</strong> migatrakesca.esca@gmail.com</p>
                  <p><strong>Phone:</strong> +353 (555) 123-4567</p>
                  <p><strong>Address:</strong> Gardiner Street Upper, Dublin, Ireland</p>
                </div>
              </section>

            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
