"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Check, AlertCircle, Phone, Mail, MapPin, FileText, AlertTriangle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [fileNames, setFileNames] = useState<string[]>([])
  const [fileSizes, setFileSizes] = useState<number[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const formData = new FormData(e.currentTarget)

      console.log("Submitting form...")
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()
      console.log("Response:", result)

      if (result.success) {
        setIsSubmitted(true)
        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false)
          if (formRef.current) {
            formRef.current.reset()
          }
          setFileNames([])
          setFileSizes([])
        }, 7000)
      } else {
        throw new Error(result.message || "Failed to submit request")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setError(error instanceof Error ? error.message : "Failed to submit request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      const names = files.map((file) => file.name)
      const sizes = files.map((file) => file.size)
      setFileNames(names)
      setFileSizes(sizes)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const maxFileSize = 5 * 1024 * 1024 // 5MB
  const totalSize = fileSizes.reduce((sum, size) => sum + size, 0)
  const maxTotalSize = 15 * 1024 * 1024 // 15MB

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Upload your document for a free quote or contact us with any questions.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mx-auto max-w-4xl py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">migatrakesca.esca@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+353 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-muted-foreground">Gardiner Street Upper, Dublin</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 lg:gap-12">
          <form ref={formRef} onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" placeholder="Enter your full name" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="service">Service Required *</Label>
              <Select name="service" required>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal">Personal Document Translation</SelectItem>
                  <SelectItem value="academic">Academic Credential Translation</SelectItem>
                  <SelectItem value="business">Business Document Translation</SelectItem>
                  <SelectItem value="express">Express Translation Service</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="languages">Languages *</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="from-language" className="text-sm text-muted-foreground">
                    From
                  </Label>
                  <Select name="fromLanguage" required>
                    <SelectTrigger id="from-language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                      <SelectItem value="arabic">Arabic</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="to-language" className="text-sm text-muted-foreground">
                    To
                  </Label>
                  <Select name="toLanguage" required>
                    <SelectTrigger id="to-language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                      <SelectItem value="arabic">Arabic</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter any additional details about your translation needs"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="documents">Upload Documents</Label>
              <div className="grid gap-1.5">
                <Label
                  htmlFor="documents"
                  className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-6 text-center"
                >
                  <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                  <span className="text-sm font-medium">
                    {fileNames.length > 0 ? `${fileNames.length} file(s) selected` : "Click to upload or drag and drop"}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    PDF, DOC, DOCX, JPG, PNG (max 5MB each, 15MB total)
                  </span>
                  <Input
                    id="documents"
                    name="documents"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    multiple
                  />
                </Label>

                {fileNames.length > 0 && (
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Selected files:</p>
                      <p className="text-xs text-muted-foreground">
                        Total: {formatFileSize(totalSize)}
                        {totalSize > maxTotalSize && <span className="text-red-500 ml-1">(Too large)</span>}
                      </p>
                    </div>
                    <div className="space-y-2">
                      {fileNames.map((name, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded text-xs">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="flex-1 truncate">{name}</span>
                          <span className="text-muted-foreground">{formatFileSize(fileSizes[index])}</span>
                          {fileSizes[index] > maxFileSize && <AlertTriangle className="h-4 w-4 text-red-500" />}
                        </div>
                      ))}
                    </div>
                    {(totalSize > maxTotalSize || fileSizes.some((size) => size > maxFileSize)) && (
                      <div className="flex items-center gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-700">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-xs">
                          Some files exceed size limits. Large files will be noted for separate transfer.
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {isSubmitted && (
              <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
                <Check className="h-5 w-5" />
                <span className="text-sm">
                  Your request has been submitted successfully! We will contact you within 24 hours.
                </span>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting || isSubmitted}>
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span>
                  Submitting...
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  Request Submitted Successfully!
                </span>
              ) : (
                "Submit Request"
              )}
            </Button>

            <div className="text-center space-y-2">
              <p className="text-xs text-muted-foreground">
                * Required fields. Files over 5MB will be noted for separate transfer.
              </p>
              <p className="text-xs text-muted-foreground">
                Alternative contact: <strong>migatrakesca.esca@gmail.com</strong>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
