import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const service = formData.get("service") as string
    const fromLanguage = formData.get("fromLanguage") as string
    const toLanguage = formData.get("toLanguage") as string
    const message = formData.get("message") as string

    // Handle multiple files
    const documents = formData.getAll("documents") as File[]
    const validDocuments = documents.filter((doc) => doc.size > 0)
    const documentNames = validDocuments.map((doc) => doc.name).join(", ")

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ success: false, message: "Name and email are required." }, { status: 400 })
    }

    // Check environment variable
    const apiKey = process.env.RESEND_API_KEY
    console.log("=== ENVIRONMENT CHECK ===")
    console.log("API Key exists:", !!apiKey)
    console.log("API Key format:", apiKey ? (apiKey.startsWith("re_") ? "Valid" : "Invalid format") : "Missing")
    console.log("API Key length:", apiKey ? apiKey.length : 0)
    console.log("First 10 chars:", apiKey ? apiKey.substring(0, 10) + "..." : "N/A")
    console.log("=== END ENVIRONMENT CHECK ===")

    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not set!")
      console.log("Please check your .env.local file")
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured. Please contact us directly at migatrakesca.esca@gmail.com",
        },
        { status: 500 },
      )
    }

    if (!apiKey.startsWith("re_")) {
      console.error("RESEND_API_KEY has invalid format. It should start with 're_'")
      return NextResponse.json(
        {
          success: false,
          message: "Email service configuration error. Please contact us directly at migatrakesca.esca@gmail.com",
        },
        { status: 500 },
      )
    }

    // Process file attachments with stricter limits
    const attachments = []
    let totalSize = 0
    const maxFileSize = 5 * 1024 * 1024 // 5MB per file
    const maxTotalSize = 15 * 1024 * 1024 // 15MB total
    const maxFiles = 5 // Maximum 5 files

    for (let i = 0; i < Math.min(validDocuments.length, maxFiles); i++) {
      const doc = validDocuments[i]
      try {
        // Check individual file size
        if (doc.size > maxFileSize) {
          console.warn(`File ${doc.name} is too large (${doc.size} bytes), skipping`)
          continue
        }

        // Check total size
        if (totalSize + doc.size > maxTotalSize) {
          console.warn(`Total attachment size would exceed limit, stopping at ${i} files`)
          break
        }

        const buffer = Buffer.from(await doc.arrayBuffer())

        // Validate buffer
        if (buffer.length === 0) {
          console.warn(`File ${doc.name} is empty, skipping`)
          continue
        }

        attachments.push({
          filename: doc.name,
          content: buffer.toString("base64"),
        })

        totalSize += doc.size
        console.log(`Processed file: ${doc.name} (${doc.size} bytes)`)
      } catch (fileError) {
        console.error(`Error processing file ${doc.name}:`, fileError)
      }
    }

    console.log(`Total attachments prepared: ${attachments.length}, Total size: ${totalSize} bytes`)

    // Email content for logging
    const emailContent = `
=== NEW TRANSLATION REQUEST ===
Timestamp: ${new Date().toLocaleString()}

CLIENT INFORMATION:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || "Not provided"}

SERVICE DETAILS:
- Service Type: ${service}
- From Language: ${fromLanguage}
- To Language: ${toLanguage}
- Additional Message: ${message || "No additional message"}

DOCUMENTS:
- Number of Files Uploaded: ${validDocuments.length}
- File Names: ${documentNames || "No documents uploaded"}
- Attachments Included: ${attachments.length}
- Files Attached: ${attachments.map((att) => att.filename).join(", ")}

CONTACT INSTRUCTIONS:
Please respond to the client at: ${email}

=== END REQUEST ===
    `

    console.log("=== EMAIL TO: migatrakesca.esca@gmail.com ===")
    console.log(emailContent)
    console.log("=== END EMAIL ===")

    // Try sending email
    let emailSent = false

    try {
      console.log("Attempting to send email via Resend API...")

      // Prepare email payload
      type EmailAttachment = { filename: string; content: string }
      type EmailPayload = {
        from: string
        to: string[]
        subject: string
        html: string
        text: string
        reply_to: string
        attachments?: EmailAttachment[]
      }
      const basicEmailPayload: EmailPayload = {
        from: "OmniLingua <onboarding@resend.dev>",
        to: ["migatrakesca.esca@gmail.com"],
        subject: `🌍 Translation Request from ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px; margin-bottom: 20px; }
                .section { margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; }
                .label { font-weight: bold; color: #555; }
                .footer { text-align: center; font-size: 12px; color: #666; margin-top: 20px; }
                .file-info { background-color: #e3f2fd; padding: 10px; border-radius: 5px; margin-top: 10px; }
              </style>
            </head>
            <body>
              <div class="header">
                <h2 style="margin: 0;">🌍 New Translation Request</h2>
                <p style="margin: 5px 0 0 0;">OmniLingua</p>
              </div>
              
              <div class="section">
                <h3>Client Information</h3>
                <p><span class="label">Name:</span> ${name}</p>
                <p><span class="label">Email:</span> ${email}</p>
                <p><span class="label">Phone:</span> ${phone || "Not provided"}</p>
              </div>

              <div class="section">
                <h3>Service Details</h3>
                <p><span class="label">Service:</span> ${service}</p>
                <p><span class="label">From Language:</span> ${fromLanguage}</p>
                <p><span class="label">To Language:</span> ${toLanguage}</p>
              </div>

              ${
                message
                  ? `
              <div class="section">
                <h3>Additional Information</h3>
                <p>${message}</p>
              </div>
              `
                  : ""
              }

              <div class="section">
                <h3>Documents Information</h3>
                <p><span class="label">Files Uploaded:</span> ${validDocuments.length}</p>
                ${
                  attachments.length > 0
                    ? `
                  <div class="file-info">
                    <p><strong>📎 Files Attached to This Email:</strong></p>
                    <ul>
                      ${attachments.map((att) => `<li>${att.filename}</li>`).join("")}
                    </ul>
                  </div>
                `
                    : `
                  <div class="file-info">
                    <p><strong>📋 Files Mentioned (may need separate transfer):</strong></p>
                    <p>${documentNames}</p>
                    <p style="color: #e74c3c; font-size: 12px;">Note: Files were too large for email attachment. Please contact client for file transfer.</p>
                  </div>
                `
                }
              </div>

              <div class="footer">
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Reply to client:</strong> ${email}</p>
              </div>
            </body>
          </html>
        `,
        text: emailContent,
        reply_to: email,
      }

      // Add attachments only if we have them and they're reasonable size
      if (attachments.length > 0 && totalSize < maxTotalSize) {
        basicEmailPayload.attachments = attachments
        console.log(`Adding ${attachments.length} attachments to email`)
      } else {
        console.log("Sending email without attachments due to size constraints")
      }

      console.log("Making API request to Resend...")
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(basicEmailPayload),
      })

      console.log("Resend response status:", resendResponse.status)
      console.log("Resend response headers:", Object.fromEntries(resendResponse.headers.entries()))

      // Check if response is JSON
      const contentType = resendResponse.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        const textResponse = await resendResponse.text()
        console.error("Non-JSON response from Resend:", textResponse)
        throw new Error(`Resend API returned non-JSON response: ${resendResponse.status}`)
      }

      const resendResult = await resendResponse.json()
      console.log("Resend result:", resendResult)

      if (resendResponse.ok && resendResult.id) {
        console.log("✅ Email sent successfully! ID:", resendResult.id)
        emailSent = true

        // Send confirmation email to client (without attachments)
        try {
          console.log("Sending confirmation email to client...")
          const confirmResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "OmniLingua <noreply@send.omniligua>",
              to: [email],
              subject: "✅ Translation Request Received - OmniLingua",
              html: `
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="utf-8">
                    <style>
                      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                      .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px; }
                      .content { padding: 20px; }
                      .highlight { background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin: 15px 0; }
                    </style>
                  </head>
                  <body>
                    <div class="header">
                      <h2 style="margin: 0;">🌍 OmniLingua</h2>
                      <p style="margin: 5px 0 0 0;">Thank you for your request!</p>
                    </div>
                    <div class="content">
                      <p>Dear ${name},</p>
                      <p>We have successfully received your translation request and will get back to you within 24 hours with a detailed quote.</p>
                      
                      <div class="highlight">
                        <p><strong>Your Request Summary:</strong></p>
                        <ul>
                          <li><strong>Service:</strong> ${service}</li>
                          <li><strong>Languages:</strong> ${fromLanguage} → ${toLanguage}</li>
                          <li><strong>Documents:</strong> ${validDocuments.length} file(s) uploaded</li>
                        </ul>
                      </div>

                      <p>If you have any urgent questions, please contact us:</p>
                      <ul>
                        <li>📧 Email: info@OmniLingua.com</li>
                        <li>📞 Phone: +1 (555) 123-4567</li>
                      </ul>
                      <p>Best regards,<br>The OmniLingua Team</p>
                    </div>
                  </body>
                </html>
              `,
              text: `Dear ${name}, we have received your translation request and will contact you within 24 hours. Service: ${service}, Languages: ${fromLanguage} → ${toLanguage}, Files: ${validDocuments.length}. Contact: info@OmniLingua.com | +1 (555) 123-4567`,
            }),
          })

          if (confirmResponse.ok) {
            console.log("✅ Confirmation email sent successfully")
          } else {
            const errorText = await confirmResponse.text()
            console.error("⚠️ Confirmation email failed:", errorText)
          }

        } catch (confirmError) {
          console.error("Confirmation email failed:", confirmError)
        }
      } else {
        throw new Error(`Resend API error: ${JSON.stringify(resendResult)}`)
      }
    } catch (resendError) {
      console.error("❌ Email sending failed:", resendError)

      // Log for manual processing
      console.log("=== MANUAL PROCESSING REQUIRED ===")
      console.log("Email failed to send, but form data captured:")
      console.log(emailContent)
      if (validDocuments.length > 0) {
        console.log("Files to request from client:")
        validDocuments.forEach((doc, index) => {
          console.log(`${index + 1}. ${doc.name} (${doc.size} bytes)`)
        })
      }
      console.log("=== END MANUAL PROCESSING ===")

      // Return error to user so they know something went wrong
      return NextResponse.json(
        {
          success: false,
          message:
            "There was an issue sending your request. Please contact us directly at migatrakesca.esca@gmail.com or call +1 (555) 123-4567",
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: `Your request has been submitted successfully! ${attachments.length > 0 ? `${attachments.length} file(s) were attached.` : "File details have been noted."} We will contact you within 24 hours.`,
    })
  } catch (error) {
    console.error("General error processing contact form:", error)

    return NextResponse.json(
      {
        success: false,
        message:
          "There was an issue submitting your request. Please try again or contact us directly at migatrakesca.esca@gmail.com",
      },
      { status: 500 },
    )
  }
}
