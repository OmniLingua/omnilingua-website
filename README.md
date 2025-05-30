# GlobalTrans - Translation Company Website

A professional translation company website built with Next.js, featuring contact forms with file attachments and email notifications.

## Features

- Responsive design for all devices
- Dark/Light mode toggle
- Contact form with file upload
- Email notifications via Resend
- Multiple file attachments support
- Professional email templates

## Setup Instructions

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Environment Variables

Create a `.env.local` file in the root directory and add your Resend API key:

\`\`\`bash
RESEND_API_KEY=your_resend_api_key_here
\`\`\`

**Important:** Replace `your_resend_api_key_here` with your actual Resend API key from https://resend.com/api-keys

### 3. Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Test the Contact Form

1. Navigate to the Contact page
2. Fill out the form with test data
3. Upload some test files (optional)
4. Submit the form
5. Check that emails are received at the configured email address

## Email Configuration

The contact form sends emails to: `migatrakesca.esca@gmail.com`

To change the recipient email, edit the `to` field in `/app/api/contact/route.ts`:

\`\`\`typescript
to: ["your-email@example.com"],
\`\`\`

## File Upload Limits

- Maximum file size: 5MB per file
- Maximum total size: 15MB
- Maximum files: 5 files
- Supported formats: PDF, DOC, DOCX, JPG, PNG

## Troubleshooting

### Email Not Sending

1. Check that `RESEND_API_KEY` is correctly set in `.env.local`
2. Verify your Resend API key is valid at https://resend.com/api-keys
3. Check the browser console and server logs for error messages
4. Ensure the API key starts with `re_`

### Environment Variables Not Loading

1. Make sure the file is named exactly `.env.local` (not `.env.local.txt`)
2. Restart the development server after adding environment variables
3. Check that the file is in the root directory (same level as `package.json`)

## Project Structure

\`\`\`
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page
│   ├── languages/page.tsx      # Languages page
│   ├── services/page.tsx       # Services page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── about-us.tsx           # About section component
│   ├── contact-form.tsx       # Contact form component
│   ├── footer.tsx             # Footer component
│   ├── hero.tsx               # Hero section component
│   ├── languages.tsx          # Languages section component
│   ├── mode-toggle.tsx        # Dark/light mode toggle
│   ├── navbar.tsx             # Navigation component
│   ├── services.tsx           # Services section component
│   └── theme-provider.tsx     # Theme provider
├── .env.local                 # Environment variables (create this)
├── .env.example               # Environment variables example
└── README.md                  # This file
\`\`\`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy

### Other Platforms

Make sure to set the `RESEND_API_KEY` environment variable in your deployment platform.

## Support

For issues or questions, please contact the development team or check the documentation.
