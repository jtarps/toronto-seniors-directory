<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Toronto Seniors Directory

A comprehensive directory of services for seniors and caregivers in Toronto, available in multiple languages (English, French, Chinese, Punjabi, Spanish).

View your app in AI Studio: https://ai.studio/apps/drive/1YTY4UtpTrWkEEBu3MZutbkoiQ5c-jQmp

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   ```bash
   npm run dev
   ```

## Building for Production

To build the app for deployment:

```bash
npm run build
```

This will create a `dist` folder with all the necessary files, including:
- `index.html` - Main app
- `embed.html` - Embeddable version for iframes

## Embedding on Other Websites

This directory can be easily embedded on any website using an iframe. This allows community organizations to include the full directory on their websites without any technical setup.

### Quick Embed Code

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

### Documentation

For detailed embedding instructions, customization options, and examples, see:
- **[EMBED.md](EMBED.md)** - Complete embedding guide
- **[embed-code-generator.html](embed-code-generator.html)** - Interactive tool to generate custom embed code

### Features

- ✅ 162+ services across 13 categories
- ✅ Multilingual support (EN, FR, ZH, PA, ES)
- ✅ Smart search with AI assistance
- ✅ Category filtering
- ✅ Mobile responsive
- ✅ Easy to embed on any website
- ✅ Copy-to-clipboard for phone numbers
