# Embedding the Toronto Seniors Directory

This directory can be easily embedded on any website using an iframe. This allows community organizations to include the full directory on their websites without any technical setup.

## Quick Start

### Option 1: Simple Iframe Embed (Recommended)

Copy and paste this code into your website's HTML where you want the directory to appear:

```html
<iframe 
  src="https://your-domain.com/embed.html" 
  width="100%" 
  height="800px" 
  frameborder="0"
  style="border: none; min-height: 800px;"
  title="Toronto Seniors Directory"
  allow="clipboard-read; clipboard-write"
></iframe>
```

### Option 2: Responsive Embed with Auto-Height

For a responsive embed that adjusts to content height, use this:

```html
<div style="position: relative; width: 100%; padding-bottom: 120%; overflow: hidden;">
  <iframe 
    src="https://your-domain.com/embed.html" 
    width="100%" 
    height="100%" 
    frameborder="0"
    style="position: absolute; top: 0; left: 0; border: none;"
    title="Toronto Seniors Directory"
    allow="clipboard-read; clipboard-write"
    scrolling="no"
  ></iframe>
</div>
```

### Option 3: Full-Page Embed

To embed as a full-width section:

```html
<div style="width: 100%; min-height: 800px;">
  <iframe 
    src="https://your-domain.com/embed.html" 
    width="100%" 
    height="1000px" 
    frameborder="0"
    style="border: none; display: block;"
    title="Toronto Seniors Directory"
    allow="clipboard-read; clipboard-write"
  ></iframe>
</div>
```

## Customization Options

### Adjust Height

Change the `height` attribute to fit your layout:

```html
<iframe 
  src="https://your-domain.com/embed.html" 
  width="100%" 
  height="600px"  <!-- Adjust this value -->
  frameborder="0"
  style="border: none;"
  title="Toronto Seniors Directory"
></iframe>
```

### Add Styling

You can wrap the iframe in a container div to add custom styling:

```html
<div class="seniors-directory-embed" style="margin: 20px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <iframe 
    src="https://your-domain.com/embed.html" 
    width="100%" 
    height="800px" 
    frameborder="0"
    style="border: none; display: block;"
    title="Toronto Seniors Directory"
  ></iframe>
</div>
```

## WordPress Integration

If you're using WordPress, you can embed it in a few ways:

### Method 1: HTML Block
1. Add a "Custom HTML" block
2. Paste the iframe code above
3. Replace `https://your-domain.com/embed.html` with your actual URL

### Method 2: Shortcode (if you have a plugin)
```php
[iframe src="https://your-domain.com/embed.html" width="100%" height="800px"]
```

## Security Considerations

The iframe includes `allow="clipboard-read; clipboard-write"` to enable copy-to-clipboard functionality for phone numbers. If you don't need this feature, you can remove the `allow` attribute.

## Mobile Responsiveness

The embedded directory is fully responsive and will work on mobile devices. Make sure your iframe container is also responsive:

```html
<div style="width: 100%; max-width: 100%;">
  <iframe 
    src="https://your-domain.com/embed.html" 
    width="100%" 
    height="800px" 
    frameborder="0"
    style="border: none; max-width: 100%;"
    title="Toronto Seniors Directory"
  ></iframe>
</div>
```

## Troubleshooting

### Iframe Not Displaying
- Make sure the URL is correct and accessible
- Check that your website allows iframes (some security policies block them)
- Verify the embed.html file is being served correctly

### Content Not Loading
- Check browser console for errors
- Ensure all assets (CSS, JS) are loading correctly
- Verify CORS settings if hosting on a different domain

### Height Issues
- Adjust the height attribute to match your content needs
- Consider using the responsive embed option above
- You may need to adjust based on your website's layout

## Hosting Requirements

After building the project, you'll need to:

1. **Build the project**: Run `npm run build`
2. **Deploy the files**: Upload the `dist` folder to your web server
3. **Ensure embed.html is accessible**: The embed.html file should be in the root of your deployed site
4. **Update the URL**: Replace `https://your-domain.com` in the embed code with your actual domain

## Example: Complete Integration

Here's a complete example of how to embed it in an HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Community Services</title>
</head>
<body>
    <header>
        <h1>Community Resources</h1>
    </header>
    
    <main>
        <section>
            <h2>Toronto Seniors Directory</h2>
            <p>Find services and resources for seniors in Toronto:</p>
            
            <div style="width: 100%; margin: 20px 0;">
                <iframe 
                    src="https://your-domain.com/embed.html" 
                    width="100%" 
                    height="800px" 
                    frameborder="0"
                    style="border: none; min-height: 800px;"
                    title="Toronto Seniors Directory"
                    allow="clipboard-read; clipboard-write"
                ></iframe>
            </div>
        </section>
    </main>
</body>
</html>
```

## Support

For questions or issues with embedding, please contact the directory maintainers.

