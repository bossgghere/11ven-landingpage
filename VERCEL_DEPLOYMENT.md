# Vercel Deployment Guide

## Quick Summary

✅ **Your `.env` file is for LOCAL development only**  
✅ **Do NOT commit `.env` to Git** (it's now in `.gitignore`)  
✅ **Add environment variables in Vercel Dashboard**

## Step-by-Step Deployment

### Step 1: Push to GitHub/GitLab

1. Make sure your code is committed:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   ```

2. Push to your repository:
   ```bash
   git push origin main
   ```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub/GitLab account
3. Click **"Add New Project"**
4. Import your repository

### Step 3: Add Environment Variables in Vercel

**This is the important part!** Your `.env` file won't be deployed, so you need to add the variables in Vercel:

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**

2. Add these three environment variables:

   | Name | Value |
   |------|-------|
   | `VITE_EMAILJS_SERVICE_ID` | `service_usb3lp9` |
   | `VITE_EMAILJS_TEMPLATE_ID` | `template_bhqtm9a` |
   | `VITE_EMAILJS_PUBLIC_KEY` | `K-XZ8noys6Kk6kwPq` |

3. For each variable:
   - Click **"Add"**
   - Enter the **Name** (exactly as shown above)
   - Enter the **Value** (your actual key)
   - Select **Production**, **Preview**, and **Development** (or just **Production** if you want)
   - Click **"Save"**

4. Add all three variables

### Step 4: Deploy

1. Vercel will automatically detect it's a Vite project
2. Build settings should be:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

3. Click **"Deploy"**
4. Vercel will build and deploy your site!

### Step 5: Verify

1. Once deployed, visit your site URL
2. Test the email form - it should work now!
3. Check that all features work correctly

## Important Notes

- ✅ **Your `.env` file stays local** - Never commit it to Git
- ✅ **Environment variables are secure** - Vercel encrypts them
- ✅ **Each deployment environment can have different values** - Production, Preview, Development
- ✅ **Changes to env vars require a new deployment** - Vercel will automatically redeploy

## Troubleshooting

### Email form not working after deployment?

1. Check that all 3 environment variables are set in Vercel
2. Make sure variable names start with `VITE_` (Vite requirement)
3. Verify the values are correct (no extra spaces)
4. Redeploy after adding/changing variables

### How to update environment variables?

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Edit or add new variables
3. Vercel will automatically trigger a new deployment

## Your Environment Variables Summary

```
VITE_EMAILJS_SERVICE_ID=service_usb3lp9
VITE_EMAILJS_TEMPLATE_ID=template_bhqtm9a
VITE_EMAILJS_PUBLIC_KEY=K-XZ8noys6Kk6kwPq
```

Copy these exact values into Vercel's Environment Variables section!
