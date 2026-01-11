# EmailJS Template Setup - IMPORTANT!

## Fix for "The recipients address is empty" Error

This error happens when your EmailJS template doesn't know **WHERE** to send the email.

## Step-by-Step Fix:

### Step 1: Go to EmailJS Dashboard

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **Email Templates**
3. Find and click on your template: `template_bhqtm9a`

### Step 2: Configure Template Settings

**This is the critical step!**

1. In your template editor, look for the **template settings** (usually at the top or in a settings panel)
2. Find the **"To Email"** field
3. Set it to: `{{to_email}}` (exactly like this, with the double curly braces)

**Important fields to configure:**

| Field | Value |
|-------|-------|
| **To Email** | `{{to_email}}` ← **THIS IS REQUIRED!** |
| From Name | `11VEN` (or leave as default) |
| From Email | (Your connected email service) |
| Reply To | `{{to_email}}` (optional) |
| Subject | `Welcome to 11VEN - The Plug List` |

### Step 3: Save the Template

1. Click **Save** or **Update** in EmailJS dashboard
2. Make sure changes are saved

### Step 4: Test Again

1. Go back to your website
2. Try submitting the email form again
3. It should work now!

## Visual Guide:

In EmailJS Template Editor, you should see something like:

```
Template Settings:
├─ To Email: {{to_email}}        ← MUST BE SET!
├─ From Name: 11VEN
├─ From Email: [your email]
├─ Reply To: {{to_email}}
└─ Subject: Welcome to 11VEN
```

## Template Variables Used:

Your template uses these variables (passed from the code):
- `{{to_email}}` - The subscriber's email address (for sending TO)
- `{{to_name}}` - The subscriber's name (used in email content)

## Common Mistakes:

❌ **Wrong:** Leaving "To Email" field empty  
✅ **Correct:** Set "To Email" to `{{to_email}}`

❌ **Wrong:** Setting "To Email" to a fixed email address  
✅ **Correct:** Use `{{to_email}}` variable so each subscriber gets the email

❌ **Wrong:** Using `to_email` without curly braces  
✅ **Correct:** Use `{{to_email}}` with double curly braces

## Still Not Working?

1. Double-check that "To Email" field is set to `{{to_email}}`
2. Make sure you saved the template in EmailJS
3. Try testing the template directly in EmailJS dashboard (use their "Test" feature)
4. Check EmailJS logs for more detailed errors
