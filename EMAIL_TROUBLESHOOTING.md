# Email Form Troubleshooting Guide

## If you see "Something went wrong" error:

### Step 1: Check Your .env File

Make sure your `.env` file in the project root has all three variables:

```env
VITE_EMAILJS_SERVICE_ID=service_usb3lp9
VITE_EMAILJS_TEMPLATE_ID=template_bhqtm9a
VITE_EMAILJS_PUBLIC_KEY=K-XZ8noys6Kk6kwPq
```

**Important:**
- ✅ No spaces around the `=` sign
- ✅ No quotes around the values
- ✅ Each variable on its own line
- ✅ File is named exactly `.env` (not `.env.txt` or anything else)

### Step 2: Restart Your Dev Server

**Vite only reads `.env` files when the server starts!**

1. Stop your dev server (Ctrl+C or Cmd+C)
2. Start it again: `npm run dev`
3. Try submitting the form again

### Step 3: Check Browser Console

1. Open browser DevTools (F12 or Cmd+Option+I)
2. Go to Console tab
3. Try submitting the form
4. Look for error messages - they'll tell you exactly what's wrong

### Step 4: Verify EmailJS Setup

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Check that:
   - ✅ Service ID `service_usb3lp9` exists and is active
   - ✅ Template ID `template_bhqtm9a` exists and uses `{{to_name}}` variable
   - ✅ Public Key matches what's in your `.env` file

### Step 5: Test EmailJS Template

In EmailJS dashboard:
1. Go to Email Templates
2. Open your template (`template_bhqtm9a`)
3. Make sure it has `{{to_name}}` variable
4. Test the template with a sample email

## Common Error Messages

### "EmailJS Service ID is missing"
- Your `.env` file doesn't have `VITE_EMAILJS_SERVICE_ID`
- Or the dev server wasn't restarted after adding it

### "EmailJS Template ID is missing"
- Your `.env` file doesn't have `VITE_EMAILJS_TEMPLATE_ID`
- Or the dev server wasn't restarted after adding it

### "EmailJS Public Key is missing"
- Your `.env` file doesn't have `VITE_EMAILJS_PUBLIC_KEY`
- Or the dev server wasn't restarted after adding it

### "Email service error: [some error]"
- Check EmailJS dashboard for detailed error logs
- Verify your email service is properly connected
- Check that your template variables match what's being sent

## Quick Fix Checklist

- [ ] `.env` file exists in project root
- [ ] All 3 environment variables are set correctly
- [ ] No spaces around `=` in `.env` file
- [ ] Dev server was restarted after creating/editing `.env`
- [ ] EmailJS service is active in dashboard
- [ ] EmailJS template exists and is correct
- [ ] Browser console shows no errors

## Still Not Working?

1. Check the browser console for the exact error
2. Verify your EmailJS account has available email quota (200/month free)
3. Make sure your email service (Gmail/Outlook) is properly connected in EmailJS
4. Try testing the template directly in EmailJS dashboard
