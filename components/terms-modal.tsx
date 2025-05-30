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
                  By accessing and using OmniLingua's translation services, you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                  this service.
                </p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">2. Service Description</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  OmniLingua provides professional translation and interpretation services in over 200 languages. Our
                  services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                  <li>Document translation (personal, academic, business, legal, medical)</li>
                  <li>Certified translation services</li>
                  <li>Express translation services</li>
                  <li>Interpretation services</li>
                  <li>Localization services</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">3. User Responsibilities</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>3.1 Accuracy of Information:</strong> You are responsible for providing accurate and
                    complete information when requesting our services. Any errors or omissions in the source material
                    may affect the quality of the translation.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>3.2 Legal Documents:</strong> You warrant that you have the legal right to translate any
                    documents submitted to us and that the translation will not violate any laws or regulations.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>3.3 Payment:</strong> Payment is due according to the agreed terms. Late payments may result
                    in service suspension and additional fees.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">4. Quality Assurance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We maintain high-quality standards through our ISO 17100 certified processes. All translations undergo
                  multiple quality checks including translation, editing, proofreading, and final review. However, we
                  recommend that clients review translations for context-specific accuracy.
                </p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">5. Delivery and Deadlines</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>5.1 Standard Delivery:</strong> We strive to meet all agreed deadlines. Standard delivery
                    times are 24-48 hours for most documents.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>5.2 Express Service:</strong> Express services are available for urgent requests with
                    additional fees.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>5.3 Force Majeure:</strong> We are not liable for delays caused by circumstances beyond our
                    reasonable control.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">6. Confidentiality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality of all client documents and information. Our translators and staff
                  are bound by confidentiality agreements. We do not share, sell, or distribute client information to
                  third parties without explicit consent, except as required by law.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">7. Limitation of Liability</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our liability is limited to the cost of the translation service provided. We are not liable for any
                  indirect, consequential, or special damages arising from the use of our services. Clients are advised
                  to verify translations for critical applications.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">8. Intellectual Property</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Clients retain all rights to their original documents. OmniLingua retains rights to the translation
                  methodology and processes used. Translated documents become the property of the client upon full
                  payment.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">9. Cancellation and Refunds</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>9.1 Cancellation:</strong> Projects may be cancelled before work begins with full refund.
                    Partial refunds may apply for work in progress.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>9.2 Refunds:</strong> Refunds are processed within 5-10 business days to the original
                    payment method.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">10. Governing Law</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of Ireland. Any disputes will be resolved through the Irish court
                  system or through agreed arbitration procedures.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">11. Changes to Terms</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be posted on our website and take
                  effect immediately. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">12. Contact Information</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For questions about these terms, please contact us at:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg text-sm">
                  <p>
                    <strong>Email:</strong> migatrakesca.esca@gmail.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +353 (555) 123-4567
                  </p>
                  <p>
                    <strong>Address:</strong> Gardiner Street Upper, Dublin, Ireland
                  </p>
                </div>
              </section>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
