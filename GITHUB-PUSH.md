# Push to GitHub - Quick Guide

## Step 1: Initialize Git (if not already done)

```bash
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Commit Changes

```bash
git commit -m "Initial commit - Toronto Seniors Directory

- Complete directory with 162+ services
- Multilingual support (EN, FR, ZH, PA, ES)
- Category filtering and search
- Responsive design
- Embed-ready for other websites
- AI Helper disabled (can be re-enabled later)
- Optimized for Vercel deployment"
```

## Step 4: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `toronto-seniors-directory`)
3. **Don't** initialize with README, .gitignore, or license (we already have files)

## Step 5: Connect and Push

```bash
# Add remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: If Repository Already Exists

```bash
# If you already have a remote, check it first
git remote -v

# If you need to change it
git remote set-url origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Then push
git push -u origin main
```

## What's Included

✅ All source files
✅ Configuration files
✅ Deployment configs (vercel.json)
✅ Documentation
✅ Build files will be generated on Vercel

## What's Excluded (.gitignore)

❌ node_modules/
❌ dist/ (build output)
❌ .env.local (environment variables - add in Vercel)
❌ Log files
❌ Editor files

## Next Steps After Pushing

1. Go to Vercel Dashboard
2. Import your GitHub repository
3. Set environment variable: `GEMINI_API_KEY` (optional since AI is disabled)
4. Add domain: `directory.havenathome.ca`
5. Deploy!

