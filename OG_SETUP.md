# Open Graph & Favicon Setup

## What Was Added

✅ **Comprehensive Open Graph meta tags** for Facebook, LinkedIn, and other platforms
✅ **Twitter Card meta tags** for Twitter sharing
✅ **Favicon** using your logo
✅ **SEO meta tags** (description, keywords, etc.)
✅ **Theme color** matching your brand (#050505)

## Important Note: OG Image URL

**After deployment**, update the Open Graph image URLs to use **absolute URLs** (full domain):

### Current (Relative URLs):
```html
<meta property="og:image" content="/assets/11logobgless.png">
<meta name="twitter:image" content="/assets/11logobgless.png">
```

### After Deployment (Replace with your domain):
```html
<meta property="og:image" content="https://yourdomain.com/assets/11logobgless.png">
<meta name="twitter:image" content="https://yourdomain.com/assets/11logobgless.png">
```

**Why?** Social media platforms (Facebook, Twitter, LinkedIn) require absolute URLs for OG images to work properly. Relative URLs often fail.

## Favicon Setup

For best results, consider creating a `public` folder and moving your logo there:

1. Create `public` folder in your project root
2. Copy `assets/11logobgless.png` to `public/favicon.png`
3. Update favicon links in `index.html`:
   ```html
   <link rel="icon" type="image/png" href="/favicon.png">
   <link rel="apple-touch-icon" href="/favicon.png">
   ```

Or keep using `/assets/11logobgless.png` if Vite serves it correctly.

## Testing Your OG Tags

After deployment, test your Open Graph tags using these tools:

- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## Current OG Tags Summary

- **Title**: "11VEN | Not Just a Number"
- **Description**: "Engineered for the Architects of Streetwear. High-grade silhouettes for the new vanguard..."
- **Image**: Logo image (update to absolute URL after deployment)
- **Type**: website
- **Site Name**: 11VEN
- **Theme Color**: #050505 (dark)

All tags are optimized for social sharing! 🚀
