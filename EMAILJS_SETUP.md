# EmailJS Setup Guide

This project uses EmailJS to send emails directly from the frontend without needing a backend server.

## Step 1: Install Dependencies

```bash
npm install
```

This will install `@emailjs/browser` package.

## Step 2: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 3: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (looks like: `service_xxxxx`)

## Step 4: Create Email Template

1. In EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Copy the HTML from `email-template.html` file in your project root
4. Paste it into the EmailJS template editor
5. Make sure to use these template variables:
   - `{{to_name}}` - The subscriber's name (extracted from email)
   - `{{to_email}}` - The subscriber's email address (optional, if you want to include it)

### Template Variables Used:
- `{{to_name}}` - Automatically extracted from the email address (e.g., "john" from "john@example.com")

### Template Features:
- ✅ Matches 11VEN brand theme (dark background, lime green accents)
- ✅ Professional welcome message
- ✅ Mentions new drops and exclusive access
- ✅ Includes social links and contact info
- ✅ Responsive design for mobile and desktop

6. Copy your **Template ID** (looks like: `template_xxxxx`)

## Step 5: Get Your Public Key

1. In EmailJS dashboard, go to **Account** > **General**
2. Copy your **Public Key** (looks like: `xxxxx-xxxxx-xxxxx`)

## Step 6: Set Environment Variables

1. Create a `.env` file in the root directory (same level as `package.json`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abc123-xyz789-123abc
```

## Step 7: Test

1. Run your development server: `npm run dev`
2. Enter an email in the waitlist form
3. Submit the form
4. Check your email inbox for the welcome email

## Notes

- The `.env` file should NOT be committed to git (it's already in `.gitignore`)
- For production deployment, set these environment variables in your hosting platform (Vercel, Netlify, etc.)
- Free tier: 200 emails/month
- Paid plans available for more emails

## Troubleshooting

- **"Email service not configured"**: Make sure all three environment variables are set in `.env`
- **Email not received**: Check your EmailJS dashboard logs for errors
- **TypeScript errors**: Make sure you ran `npm install` to install the package
