# Testing the Embed on Haven at Home Website

## Quick Start Guide

### Step 1: Build the Project
```bash
npm run build
```

This creates a `dist` folder with all the files needed for deployment.

### Step 2: Deploy to Your Server

Upload the contents of the `dist` folder to your web server. Make sure:
- `embed.html` is accessible at the root (e.g., `https://your-domain.com/embed.html`)
- All assets in the `dist/assets` folder are accessible

### Step 3: Test Locally First (Optional)

If you want to test before deploying:
```bash
npm run dev
```

Then open `test-embed.html` in your browser to see how it looks.

### Step 4: Add to Your Haven at Home Website

Copy this embed code and paste it into your website where you want the directory to appear:

```html
<div style="width: 100%; margin: 30px 0;">
    <iframe 
        src="https://YOUR-DOMAIN-HERE/embed.html" 
        width="100%" 
        height="900px" 
        frameborder="0"
        style="border: none; min-height: 900px;"
        title="Directory of Services for Seniors and Caregivers in Toronto"
        allow="clipboard-read; clipboard-write"
    ></iframe>
</div>
```

**Replace `YOUR-DOMAIN-HERE` with your actual domain** (e.g., `https://directory.havenathome.ca` or wherever you host it)

### Step 5: Customize (Optional)

You can adjust:
- **Height**: Change `900px` to fit your page layout (try `800px`, `1000px`, etc.)
- **Styling**: Add CSS classes or inline styles to match your website's design
- **Container**: Wrap it in a div with your own styling

## Example: WordPress

If using WordPress:
1. Go to the page where you want to add the directory
2. Add a "Custom HTML" block
3. Paste the embed code above
4. Replace the URL with your actual domain
5. Publish

## Example: HTML Page

If adding to a regular HTML page:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Haven at Home - Services Directory</title>
</head>
<body>
    <header>
        <!-- Your existing header -->
    </header>
    
    <main>
        <section>
            <h2>Toronto Seniors Directory</h2>
            <p>Find services and resources for seniors in Toronto:</p>
            
            <!-- Paste embed code here -->
            <div style="width: 100%; margin: 30px 0;">
                <iframe 
                    src="https://YOUR-DOMAIN-HERE/embed.html" 
                    width="100%" 
                    height="900px" 
                    frameborder="0"
                    style="border: none; min-height: 900px;"
                    title="Directory of Services for Seniors and Caregivers in Toronto"
                    allow="clipboard-read; clipboard-write"
                ></iframe>
            </div>
        </section>
    </main>
    
    <footer>
        <!-- Your existing footer -->
    </footer>
</body>
</html>
```

## Troubleshooting

### Iframe Not Showing
- Check that the URL is correct and accessible
- Make sure `embed.html` is in the root of your deployed site
- Verify your website allows iframes (some security policies block them)

### Content Not Loading
- Open browser console (F12) and check for errors
- Verify all files from `dist/assets` are accessible
- Check that your server is serving the files correctly

### Height Issues
- Adjust the `height` attribute to match your content
- Try `1000px` or `1200px` if content is cut off
- The directory will scroll internally if needed

## What Changed

✅ **Updated heading**: Now shows "Directory of Services" / "for Seniors and Caregivers in Toronto"
✅ **Marketing link**: "Powered by Haven at Home" appears under the search bar
✅ **AI Helper**: Optional and won't break if disabled
✅ **All languages**: Updated translations to match new heading format

## Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files are deployed correctly
3. Test the embed.html URL directly in a browser
4. Make sure your domain is accessible

