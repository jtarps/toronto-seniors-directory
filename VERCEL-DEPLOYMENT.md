# Deploying to Vercel - directory.havenathome.ca

## Should You Create a New Project?

**Yes, create a NEW project** on Vercel. Here's why:
- ✅ Separate subdomain (`directory.havenathome.ca`) = separate project
- ✅ Independent deployments (won't affect main site)
- ✅ Separate environment variables
- ✅ Easier to manage and update independently
- ✅ Can use different GitHub repo or same repo with different branch

## Step-by-Step Deployment Guide

### Option 1: Deploy from GitHub (Recommended)

#### Step 1: Push to GitHub

1. **Create a new repository** (or use existing):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Toronto Seniors Directory"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/toronto-seniors-directory.git
   git push -u origin main
   ```

   OR if you want to keep it in the same repo as your main site:
   - Create a new branch: `git checkout -b directory`
   - Push the branch: `git push -u origin directory`

#### Step 2: Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Select the repository (or branch if using same repo)

#### Step 3: Configure Project Settings

**Project Name:** `toronto-seniors-directory` (or whatever you prefer)

**Framework Preset:** Vite (should auto-detect)

**Root Directory:** `.` (leave as default)

**Build Command:** `npm run build` (should auto-fill)

**Output Directory:** `dist` (should auto-fill)

**Install Command:** `npm install` (should auto-fill)

#### Step 4: Set Environment Variables

Click **"Environment Variables"** and add:

```
GEMINI_API_KEY=your-actual-api-key-here
```

**Important:** Make sure to add this for:
- ✅ Production
- ✅ Preview
- ✅ Development

#### Step 5: Configure Domain

1. Go to **Settings** → **Domains**
2. Add custom domain: `directory.havenathome.ca`
3. Follow Vercel's DNS instructions:
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - OR add an A record (Vercel will provide the IP)

#### Step 6: Deploy

Click **"Deploy"** and wait for the build to complete!

---

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? toronto-seniors-directory
# - Directory? ./
# - Override settings? No

# Add environment variable
vercel env add GEMINI_API_KEY

# Deploy to production
vercel --prod
```

---

## After Deployment

### 1. Verify Files Are Accessible

Check these URLs work:
- `https://directory.havenathome.ca/` - Main app
- `https://directory.havenathome.ca/embed.html` - Embed version

### 2. Test the Embed

Add this to your Haven at Home website:

```html
<div style="width: 100%; margin: 30px 0;">
    <iframe 
        src="https://directory.havenathome.ca/embed.html" 
        width="100%" 
        height="900px" 
        frameborder="0"
        style="border: none; min-height: 900px;"
        title="Directory of Services for Seniors and Caregivers in Toronto"
        allow="clipboard-read; clipboard-write"
    ></iframe>
</div>
```

### 3. Update DNS (if needed)

If you haven't already:
- Go to your domain registrar (where you manage havenathome.ca)
- Add CNAME record:
  - **Name:** `directory`
  - **Value:** `cname.vercel-dns.com`
- Wait for DNS propagation (can take a few minutes to 24 hours)

---

## GitHub Repository Setup

### Recommended Structure

**Option A: Separate Repository** (Recommended for clean separation)
```
github.com/your-username/toronto-seniors-directory
```

**Option B: Same Repository, Different Branch**
```
github.com/your-username/havenathome-website
├── main (your main website)
└── directory (this directory project)
```

**Option C: Monorepo with Subfolder**
```
github.com/your-username/havenathome-website
├── main-website/
└── toronto-seniors-directory/
```

For Option C, update Vercel settings:
- **Root Directory:** `toronto-seniors-directory`

---

## Environment Variables

Make sure these are set in Vercel:

| Variable | Value | Required For |
|----------|-------|-------------|
| `GEMINI_API_KEY` | Your Gemini API key | AI Helper feature |

**To add/update:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add the variable
3. Redeploy (or it will auto-deploy on next push)

---

## Updating the Directory

After making changes:

1. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Update directory"
   git push
   ```

2. **Vercel will auto-deploy** (if connected to GitHub)

3. **Or manually deploy:**
   ```bash
   vercel --prod
   ```

---

## Troubleshooting

### Build Fails

- Check that `GEMINI_API_KEY` is set in environment variables
- Verify `package.json` has all dependencies
- Check build logs in Vercel dashboard

### 404 on embed.html

- Verify `vercel.json` is in the root
- Check that `dist/embed.html` exists after build
- Ensure rewrites are configured correctly

### Domain Not Working

- Verify DNS records are correct
- Check DNS propagation: https://dnschecker.org
- Wait up to 24 hours for full propagation

### AI Helper Not Working

- Verify `GEMINI_API_KEY` is set in Vercel environment variables
- Check browser console for errors
- Verify API key is valid

---

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test embed on havenathome.ca
3. ✅ Verify all features work
4. ✅ Add more languages (when ready)

---

## Notes About Arkadium-Style Popup

You mentioned considering an Arkadium-style popup instead of linking directly to your website. This is a good idea for:
- ✅ Better user experience (stays in context)
- ✅ More control over branding
- ✅ Can show more information

We can implement this later after testing. For now, the direct link works well and is simpler.

