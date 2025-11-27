# Deployment & Update Strategy

## Critical Question: How Do Updates Work?

This is an important consideration. There are **three main approaches** to deployment, each with different update behaviors:

---

## Option 1: Centralized Hosting (Recommended) ⭐

**How it works:**
- You host the directory on YOUR server (e.g., `https://directory.havenathome.ca`)
- Organizations embed from YOUR URL
- When you update, ALL embeds update automatically

**Embed code they use:**
```html
<iframe 
  src="https://directory.havenathome.ca/embed.html" 
  width="100%" 
  height="800px" 
  frameborder="0"
  style="border: none;"
  title="Toronto Seniors Directory"
></iframe>
```

**Pros:**
- ✅ Updates propagate automatically to all sites
- ✅ You control the version
- ✅ Easy maintenance
- ✅ Consistent experience everywhere
- ✅ You can track usage/analytics

**Cons:**
- ⚠️ Requires you to host and maintain a server
- ⚠️ Your server needs to handle traffic from all embedded sites
- ⚠️ If your server goes down, all embeds break

**Best for:** Most use cases - gives you control and ensures everyone has the latest version

---

## Option 2: Distributed Hosting

**How it works:**
- Each organization downloads and hosts their own copy
- They embed from their own server
- Updates require them to re-download and re-deploy

**Embed code they use:**
```html
<iframe 
  src="https://their-website.com/seniors-directory/embed.html" 
  width="100%" 
  height="800px" 
  frameborder="0"
  style="border: none;"
  title="Toronto Seniors Directory"
></iframe>
```

**Pros:**
- ✅ No server load on you
- ✅ Works even if your server is down
- ✅ Organizations have full control

**Cons:**
- ❌ Updates don't propagate automatically
- ❌ You need to notify organizations to update
- ❌ Different organizations may have different versions
- ❌ More maintenance overhead

**Best for:** Organizations that want full control and don't mind manual updates

---

## Option 3: Hybrid Approach (CDN/Versioned URLs)

**How it works:**
- You host on a CDN (like Cloudflare, Netlify, Vercel)
- Use versioned URLs (e.g., `/v1.2.3/embed.html`)
- Organizations can choose to update to new versions

**Embed code:**
```html
<!-- Organization locks to version 1.0.0 -->
<iframe 
  src="https://cdn.havenathome.ca/v1.0.0/embed.html" 
  ...
></iframe>

<!-- Or always use latest -->
<iframe 
  src="https://cdn.havenathome.ca/latest/embed.html" 
  ...
></iframe>
```

**Pros:**
- ✅ Fast delivery via CDN
- ✅ Organizations can choose when to update
- ✅ You can maintain multiple versions
- ✅ Good performance globally

**Cons:**
- ⚠️ More complex setup
- ⚠️ Still requires hosting/CDN account

**Best for:** Large-scale deployments with many organizations

---

## Recommended Setup: Centralized Hosting

For your use case, **Option 1 (Centralized Hosting)** is recommended because:

1. **Automatic Updates**: When you add a new service or fix something, all embedded directories update immediately
2. **Consistent Experience**: Everyone sees the same, latest version
3. **Easy Maintenance**: One deployment, everyone benefits
4. **Marketing**: Your branding stays consistent everywhere

### Implementation Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to your server:**
   - Upload the `dist` folder to your web server
   - Or use a hosting service like:
     - **Netlify** (free tier available)
     - **Vercel** (free tier available)
     - **Cloudflare Pages** (free)
     - **GitHub Pages** (free)
     - Your own server

3. **Get your URL:**
   - Example: `https://directory.havenathome.ca`
   - Or: `https://seniors-directory.netlify.app`

4. **Share embed code:**
   - Update the embed code generator with your URL
   - Organizations use: `https://your-domain.com/embed.html`

5. **When you update:**
   - Make changes to the code
   - Run `npm run build`
   - Deploy the new `dist` folder
   - **All embeds automatically show the new version!**

---

## Update Workflow Example

```bash
# 1. Make changes to data.ts (add new services, etc.)
# 2. Test locally
npm run dev

# 3. Build for production
npm run build

# 4. Deploy (example with Netlify CLI)
netlify deploy --prod

# OR upload dist/ folder to your server
# All embedded directories now show the updated version!
```

---

## Configuration

The branding is controlled in `config.ts`. You can easily:
- Change the company name
- Update the website URL
- Enable/disable branding
- Add a logo (future enhancement)

```typescript
export const config = {
  branding: {
    enabled: true,
    text: "Directory provided by",
    companyName: "Haven at Home Home Healthcare",
    websiteUrl: "https://havenathome.ca",
  },
};
```

---

## Hosting Recommendations

### Free Options:
- **Netlify**: Easy deployment, free SSL, CDN
- **Vercel**: Great for React apps, free tier
- **Cloudflare Pages**: Free, fast CDN
- **GitHub Pages**: Free, simple

### Paid Options:
- Your own server
- AWS S3 + CloudFront
- Azure Static Web Apps

---

## Summary

**For automatic updates everywhere:**
- Use **Centralized Hosting** (Option 1)
- Host on your server/CDN
- Organizations embed from YOUR URL
- When you update → everyone gets the update automatically

**For maximum control:**
- Use **Distributed Hosting** (Option 2)
- Each organization hosts their own copy
- You provide updates via download/instructions
- They update manually when ready

**Recommendation:** Go with **Centralized Hosting** for the best user experience and easiest maintenance.



