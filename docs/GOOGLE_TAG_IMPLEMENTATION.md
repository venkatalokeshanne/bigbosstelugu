# Google Tag Implementation Guide

This document explains the comprehensive Google tag implementation in the Bigg Boss Telugu 9 voting website, including Google Analytics 4 and Google Tag Manager.

## 📊 Overview

The website implements multiple Google tracking solutions:

- **Google Analytics 4 (GA4)**: For website analytics and user behavior tracking
- **Google Tag Manager (GTM)**: For advanced tag management and custom event tracking  
- **Flexible GoogleTag Component**: For custom tracking implementations

## 🔧 Components

### 1. GoogleAnalytics Component
**File**: `src/components/GoogleAnalytics.js`

- Implements Google Analytics 4 with gtag library
- Uses environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Includes privacy-compliant settings (IP anonymization, secure cookies)
- Automatically disabled in development mode unless explicitly configured

**Features:**
- ✅ GDPR compliant (anonymize_ip)
- ✅ Secure cookie settings
- ✅ Environment variable configuration
- ✅ Development mode detection

### 2. GoogleTagManager Component  
**File**: `src/components/GoogleTagManager.js`

- Implements Google Tag Manager container
- Uses environment variable `NEXT_PUBLIC_GTM_ID` 
- Falls back to existing GTM-MX2WVXWS if not configured
- Includes noscript fallback in layout.js

**Features:**
- ✅ Environment variable support
- ✅ Development mode detection
- ✅ Noscript fallback included
- ✅ dataLayer initialization

### 3. GoogleTag Component
**File**: `src/components/GoogleTag.js`

- Flexible gtag implementation for custom tracking
- Accepts measurement ID and custom configuration
- Useful for multiple GA properties or custom tracking

**Features:**
- ✅ Flexible configuration
- ✅ Custom gtag config support
- ✅ Multiple measurement ID support
- ✅ Privacy settings included

## 🌍 Environment Variables

Create a `.env.local` file with your tracking IDs:

```env
# Google Analytics 4 Configuration
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager Configuration  
NEXT_PUBLIC_GTM_ID=GTM-MX2WVXWS

# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your-api-token
```

## 🔒 Privacy & Compliance

All Google tag implementations include privacy-compliant settings:

### Google Analytics Settings
- `anonymize_ip: true` - Anonymizes user IP addresses
- `cookie_flags: 'secure;samesite=lax'` - Secure cookie settings
- Proper consent management ready

### GDPR Compliance
- IP anonymization enabled by default
- Secure cookie settings
- Ready for consent management integration

## 🚀 Usage

### Basic Implementation (Already Active)
The components are already integrated in `src/app/layout.js`:

```jsx
import GoogleAnalytics from '../components/GoogleAnalytics'
import GoogleTagManager from '../components/GoogleTagManager'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <GoogleTagManager />
        <GoogleAnalytics />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} />
        </noscript>
        {children}
      </body>
    </html>
  )
}
```

### Custom Google Tag Implementation
For additional tracking properties:

```jsx
import GoogleTag from '../components/GoogleTag'

// Custom configuration
<GoogleTag 
  measurementId="G-CUSTOM123456"
  config={{
    send_page_view: false,
    custom_parameter: 'value'
  }}
/>
```

## 🧪 Testing

Run the test script to verify implementation:

```bash
npm run test-google-tags
```

This script verifies:
- ✅ Component rendering logic
- ✅ Environment variable handling  
- ✅ Privacy settings configuration
- ✅ Development mode behavior

## 📈 Development vs Production

### Development Mode
- Google Analytics disabled by default (prevents test data)
- GTM only loads if `NEXT_PUBLIC_GTM_ID` is explicitly set
- No tracking scripts loaded unless configured

### Production Mode
- All tracking active with proper environment variables
- Privacy settings enforced
- Performance optimized with `afterInteractive` strategy

## 🔍 Debugging

### Check if tags are loading:
1. Open browser developer tools
2. Go to Network tab
3. Look for requests to `googletagmanager.com`
4. Check console for `dataLayer` and `gtag` function

### Common issues:
- **No tracking in development**: This is intentional, set environment variables to enable
- **Tags not loading**: Verify environment variables are set correctly
- **Console errors**: Check for ad blockers or privacy extensions

## 📋 Analytics Events

### Default Events Tracked:
- Page views
- Scroll depth
- File downloads  
- External link clicks
- Form submissions

### Custom Events (via GTM):
- Voting interactions
- Contestant profile views
- Poll participation
- Social sharing

## 🔗 Integration Points

### Existing integrations:
- ✅ **Vercel Analytics**: Already active via `@vercel/analytics`
- ✅ **StrawPoll tracking**: Embedded voting widgets
- ✅ **Social sharing**: Share button interactions

### Recommended GTM setup:
1. Configure enhanced ecommerce for voting tracking
2. Set up custom events for contestant interactions
3. Track poll completion rates
4. Monitor user engagement metrics

## 🛡️ Security

### Implemented security measures:
- Secure cookie flags
- SameSite cookie policy
- IP anonymization
- Content Security Policy ready

### Environment variable security:
- Only `NEXT_PUBLIC_*` variables exposed to client
- Private tokens kept server-side only
- No hardcoded tracking IDs in production

## 📊 Performance

### Optimization features:
- `afterInteractive` loading strategy
- No blocking of page render
- Minimal bundle size impact
- CDN-delivered scripts

### Core Web Vitals impact:
- No impact on LCP (Largest Contentful Paint)
- Minimal impact on CLS (Cumulative Layout Shift)
- Optimized for performance score

---

## 🚀 Quick Start

1. **Get your tracking IDs:**
   - Google Analytics 4: Create property at [analytics.google.com](https://analytics.google.com)
   - Google Tag Manager: Create container at [tagmanager.google.com](https://tagmanager.google.com)

2. **Set environment variables:**
   ```bash
   echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOURID" >> .env.local
   echo "NEXT_PUBLIC_GTM_ID=GTM-YOURID" >> .env.local
   ```

3. **Deploy to production:**
   ```bash
   npm run build
   npm start
   ```

4. **Verify tracking:**
   - Use Google Analytics Real-time reports
   - Check GTM preview mode
   - Run `npm run test-google-tags`

The implementation is production-ready and follows Google's best practices for privacy, performance, and tracking accuracy.