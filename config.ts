// Configuration for branding and customization
export const config = {
  // Branding information
  branding: {
    enabled: true,
    text: "Directory provided by",
    companyName: "Haven at Home Home Healthcare",
    websiteUrl: "https://havenathome.ca",
    // Optional: Add your logo URL here if you want to display a logo
    // logoUrl: "https://your-domain.com/logo.png",
  },
  
  // AI Helper feature
  // Set to false to completely disable the AI helper feature
  // This ensures the app works even if AI is removed or fails
  aiHelper: {
    enabled: false, // Disabled for now, can be re-enabled later
  },
  
  // Update notification (optional)
  // Set this to true if you want to show a notification when the directory is updated
  showUpdateNotification: false,
  
  // Version tracking (for cache busting)
  version: "1.0.0",
};



