# Quick Answers to Common Questions

## 1. Is iframe the easiest way?

**Yes!** Iframe embedding is the easiest and most compatible method because:

- ✅ Works on **any website** (WordPress, HTML, React, etc.)
- ✅ **No technical setup** required - just copy/paste HTML
- ✅ **Isolated** - won't conflict with host site's CSS/JS
- ✅ **Secure** - runs in a sandbox
- ✅ **Mobile responsive** - works on all devices

**Alternatives exist but are more complex:**
- Web Components: Requires modern browser support
- React Components: Only works if site uses React
- Direct Integration: Requires technical knowledge

**Verdict:** Iframe is the best choice for maximum compatibility and ease of use.

---

## 2. How to add branding/marketing note?

**✅ Already Added!** 

The branding has been added to the footer. It shows:
> "Directory provided by **Haven at Home Home Healthcare**" (with link)

**To customize it**, edit `config.ts`:

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

**To disable branding:**
```typescript
branding: {
  enabled: false,  // Set to false
  ...
}
```

The branding appears at the bottom of every embedded directory, giving you marketing exposure on every organization's website!

---

## 3. Do updates propagate automatically?

**It depends on how you deploy it.** There are two main approaches:

### ✅ Option A: Centralized Hosting (Recommended)
**You host it, they embed from your URL**

- Organizations embed: `https://your-domain.com/embed.html`
- **When you update → ALL embeds update automatically!**
- One deployment, everyone benefits
- You control the version

**This is the recommended approach** because:
- Updates are instant everywhere
- Consistent experience
- Easy maintenance
- Your branding stays current

### ❌ Option B: Distributed Hosting
**Each organization hosts their own copy**

- Organizations download and host on their server
- They embed: `https://their-site.com/embed.html`
- **Updates do NOT propagate automatically**
- You need to notify them to re-download and re-deploy

**Not recommended** because:
- Manual update process
- Different versions across sites
- More maintenance overhead

---

## Recommended Setup for Automatic Updates

1. **Host the directory on YOUR server:**
   - Build: `npm run build`
   - Deploy `dist/` folder to your server
   - Get URL: `https://directory.havenathome.ca`

2. **Organizations embed from YOUR URL:**
   ```html
   <iframe src="https://directory.havenathome.ca/embed.html" ...></iframe>
   ```

3. **When you update:**
   - Make changes
   - Rebuild: `npm run build`
   - Redeploy
   - **All embeds automatically show the new version!**

---

## Summary

1. **Easiest way?** ✅ Yes, iframe is the best choice
2. **Branding added?** ✅ Yes, configurable in `config.ts`
3. **Auto-updates?** ✅ Yes, if you use centralized hosting (recommended)

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment strategies.



