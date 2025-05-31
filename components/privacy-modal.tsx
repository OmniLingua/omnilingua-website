"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Shield, Lock, Eye, Database, Cookie, Mail } from "lucide-react"

interface PrivacyModalProps {
  children: React.ReactNode
}

export default function PrivacyModal({ children }: PrivacyModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4 border-b flex-shrink-0">
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Shield className="h-6 w-6 text-primary" />
            Privacy Policy
          </DialogTitle>
          <div className="text-sm text-muted-foreground mt-2">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mt-1">
              This Privacy Policy is GDPR compliant and explains how OmniLingua collects, uses, and protects your
              personal information.
            </p>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full px-6 py-4">
            <div className="space-y-6 pr-4">
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">1. Information We Collect</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>1.1 Personal Information:</strong> We collect information you provide directly, including:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Name, email address, phone number</li>
                    <li>Billing and payment information</li>
                    <li>Documents submitted for translation</li>
                    <li>Communication preferences</li>
                    <li>Service usage and feedback</li>
                  </ul>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>1.2 Automatically Collected Information:</strong> We may collect technical information
                    including IP address, browser type, device information, and website usage analytics through cookies
                    and similar technologies.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">2. How We Use Your Information</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                  <li>Providing translation and interpretation services</li>
                  <li>Processing payments and managing accounts</li>
                  <li>Communicating about services and updates</li>
                  <li>Improving our services and website functionality</li>
                  <li>Complying with legal obligations</li>
                  <li>Preventing fraud and ensuring security</li>
                </ul>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">3. Legal Basis for Processing (GDPR)</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Under GDPR, we process your personal data based on the following legal grounds:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>
                      <strong>Contract Performance:</strong> Processing necessary to fulfill our translation services
                    </li>
                    <li>
                      <strong>Legitimate Interest:</strong> Improving services, fraud prevention, and business
                      operations
                    </li>
                    <li>
                      <strong>Consent:</strong> Marketing communications and optional services (where applicable)
                    </li>
                    <li>
                      <strong>Legal Obligation:</strong> Compliance with tax, accounting, and regulatory requirements
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">4. Information Sharing and Disclosure</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>4.1 Service Providers:</strong> We may share information with trusted third-party service
                    providers who assist in our operations (payment processors, cloud storage, email services) under
                    strict confidentiality agreements.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>4.2 Legal Requirements:</strong> We may disclose information when required by law, court
                    order, or to protect our rights and safety.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>4.3 Business Transfers:</strong> In case of merger, acquisition, or sale, your information
                    may be transferred as part of the business assets.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>4.4 No Sale of Data:</strong> We do not sell, rent, or trade your personal information to
                    third parties for marketing purposes.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">5. Cookies and Tracking Technologies</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies and similar technologies to enhance your experience:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>
                      <strong>Essential Cookies:</strong> Required for website functionality and security
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand website usage and improve services
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> Remember your settings and preferences
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You can control cookies through your browser settings. Disabling certain cookies may affect website
                    functionality.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">6. Your Rights Under GDPR</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As a data subject under GDPR, you have the following rights:
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Right of Access</h4>
                    <p className="text-xs text-muted-foreground">Request copies of your personal data</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Right to Rectification</h4>
                    <p className="text-xs text-muted-foreground">Correct inaccurate personal data</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Right to Erasure</h4>
                    <p className="text-xs text-muted-foreground">Request deletion of your data</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Right to Restrict Processing</h4>
                    <p className="text-xs text-muted-foreground">Limit how we use your data</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Right to Data Portability</h4>
                    <p className="text-xs text-muted-foreground">Transfer your data to another service</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Right to Object</h4>
                    <p className="text-xs text-muted-foreground">Object to certain processing activities</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">7. Data Security</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure cloud storage with access controls</li>
                  <li>Regular security audits and updates</li>
                  <li>Staff training on data protection</li>
                  <li>Confidentiality agreements with all personnel</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">8. Data Retention</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We retain personal data only as long as necessary for the purposes outlined in this policy:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                  <li>
                    <strong>Client Documents:</strong> Retained for 7 years for legal and tax compliance
                  </li>
                  <li>
                    <strong>Account Information:</strong> Retained while account is active plus 3 years
                  </li>
                  <li>
                    <strong>Marketing Data:</strong> Until consent is withdrawn or 2 years of inactivity
                  </li>
                  <li>
                    <strong>Website Analytics:</strong> Anonymized after 26 months
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">9. International Data Transfers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your data is primarily processed within the European Economic Area (EEA). If we transfer data outside
                  the EEA, we ensure adequate protection through approved mechanisms such as Standard Contractual
                  Clauses or adequacy decisions.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">10. Children's Privacy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our services are not directed to children under 16. We do not knowingly collect personal information
                  from children under 16. If we become aware of such collection, we will delete the information
                  immediately.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">11. Changes to This Policy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically. We will notify you of significant changes via email or
                  website notice. Your continued use of our services after changes constitutes acceptance of the updated
                  policy.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-semibold">12. Data Processing Addendum (DPA) for Business Clients</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For business clients who engage OmniLingua as a data processor (e.g., providing us with documents containing personal data for translation), this Privacy Policy is supplemented by our Data Processing Addendum (DPA), in accordance with <a href="https://gdpr-info.eu/art-28-gdpr/"><strong><em><span className="text-blue-500 hover:underline">Article 28 of the GDPR.</span></em></strong></a>
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Key provisions of our DPA include:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Processing personal data solely for the purpose of providing the contracted services</li>
                    <li>Implementing appropriate technical and organizational security measures</li>
                    <li>Ensuring personnel are bound by confidentiality</li>
                    <li>Assisting the client with data subject requests and regulatory compliance</li>
                    <li>Returning or securely deleting data at the end of the service relationship</li>
                    <li>Making information available to demonstrate GDPR compliance</li>
                  </ul>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Business clients may request a copy of the DPA by emailing{" "}
                    <a href="mailto:privacy@omnilingua.ie" className="text-red-400 hover:underline">privacy@omnilingua.ie</a>.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">13. Contact Us</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For questions about this Privacy Policy or to exercise your rights, please contact our Data Protection
                  Officer:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg text-sm">
                  <p>
                    <strong>Email:</strong> privacy@omnilingua.ie
                  </p>
                  <p>
                    <strong>Phone:</strong> +353 (555) 123-4567
                  </p>
                  <p>
                    <strong>Address:</strong> Data Protection Officer, OmniLingua, Gardiner Street Upper, Dublin,
                    Ireland
                  </p>
                  <p className="mt-2">
                    <strong>Supervisory Authority:</strong> You also have the right to lodge a complaint with the Irish
                    Data Protection Commission (DPC) at{" "}
                    <a href="https://www.dataprotection.ie" className="text-primary hover:underline">
                      www.dataprotection.ie
                    </a>
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
