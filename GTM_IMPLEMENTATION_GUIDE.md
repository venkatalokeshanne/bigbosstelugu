# Google Tag Manager Implementation Guide

This document explains how to configure Google Tag Manager (GTM) for the Bigg Boss Telugu 9 voting website.

## Overview

The website now uses Google Tag Manager instead of direct Google Analytics implementation. This provides more flexibility for managing multiple tracking tools and marketing tags without code changes.

## Configuration

### 1. Environment Variables

Create a `.env.local` file in the root directory with your GTM container ID:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXXX
```

Replace `GTM-XXXXXXXXX` with your actual GTM container ID.

### 2. Production Deployment

For production deployment (Vercel, Netlify, etc.), add the environment variable in your hosting platform:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables

## GTM Container Setup

### Recommended Tags to Configure in GTM:

1. **Google Analytics 4**
   - Tag Type: Google Analytics: GA4 Configuration
   - Measurement ID: Your GA4 property ID
   - Trigger: All Pages

2. **Vote Tracking Events**
   - Tag Type: Google Analytics: GA4 Event
   - Event Name: `vote_contestant`
   - Parameters:
     - `contestant_name`: {{Contestant Name}}
     - `voting_method`: {{Voting Method}}

3. **Page Views**
   - Tag Type: Google Analytics: GA4 Event
   - Event Name: `page_view`
   - Trigger: All Pages

### Variables to Create:

1. **Contestant Name** (Data Layer Variable)
   - Variable Name: `contestant_name`
   - Data Layer Variable Name: `contestantName`

2. **Voting Method** (Data Layer Variable)
   - Variable Name: `voting_method`
   - Data Layer Variable Name: `votingMethod`

## Data Layer Implementation

The website can push events to the data layer for tracking:

```javascript
// Example: Track voting events
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'vote_contestant',
  'contestantName': 'Contestant Name',
  'votingMethod': 'strawpoll'
});
```

## Testing

### 1. GTM Preview Mode
- Open GTM console
- Click "Preview" button
- Enter your website URL
- Verify tags are firing correctly

### 2. Browser Developer Tools
Check the console for GTM loading:
```javascript
console.log(window.google_tag_manager);
```

## Migration Notes

- **Previous Setup**: The site previously used direct Google Analytics 4 (gtag) implementation
- **New Setup**: Now uses GTM for all tracking and analytics
- **Backward Compatibility**: No breaking changes to existing functionality
- **Vercel Analytics**: Still integrated alongside GTM

## Troubleshooting

### GTM Not Loading
1. Check environment variable is set correctly
2. Verify GTM container ID format (GTM-XXXXXXX)
3. Check browser network tab for GTM requests

### Tags Not Firing
1. Use GTM Preview mode to debug
2. Check trigger configurations
3. Verify data layer events are being pushed

### Performance Issues
- GTM loads asynchronously and shouldn't impact page speed
- Use "afterInteractive" strategy for optimal performance

## Files Modified

- `/src/components/GoogleTagManager.js` - Main GTM component
- `/src/components/GoogleTagManagerNoScript.js` - Fallback for no-JS users
- `/src/app/layout.js` - Updated to use GTM components
- `/README.md` - Updated documentation

## Best Practices

1. **Container Organization**: Use separate containers for development and production
2. **Version Control**: Use GTM's version control and workspace features
3. **Testing**: Always test in preview mode before publishing
4. **Performance**: Regularly audit tags to prevent performance issues
5. **Privacy**: Ensure compliance with privacy regulations (GDPR, CCPA)