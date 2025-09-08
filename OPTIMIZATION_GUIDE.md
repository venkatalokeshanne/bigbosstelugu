# Performance Optimization System

This document explains the performance optimization system implemented for contestant data management.

## Overview

The optimization system creates static JSON files during build time to eliminate API calls and improve page load performance. This is particularly effective since contestant data doesn't change frequently.

## How It Works

### 1. Build-Time Data Generation

The system runs a script during the build process that:
- Fetches all contestant data from Sanity CMS
- Processes and shuffles the data (ensuring contestant equality)
- Generates a static JSON file in `src/data/contestants.json`
- Includes statistics and metadata

### 2. Runtime Optimization

Components use optimized functions that:
- First attempt to load data from the static JSON file
- Fall back to Sanity API if JSON is unavailable
- Cache data in memory for subsequent requests
- Return pre-shuffled data to maintain randomization

### 3. Data Structure

The generated JSON contains:
```json
{
  "contestants": [...],           // All contestants (shuffled)
  "activeContestants": [...],     // Active contestants only (shuffled)
  "eliminatedContestants": [...], // Eliminated contestants only (shuffled)
  "stats": {
    "total": 20,
    "active": 15,
    "eliminated": 5
  },
  "generatedAt": "2025-01-11T...",
  "buildVersion": "1.0.0"
}
```

## Scripts

### Generate Data
```bash
npm run generate-data
```
Manually generates the contestants.json file from Sanity data.

### Build with Optimization
```bash
npm run build
```
Automatically generates data and builds the Next.js application.

### Test Optimization
```bash
npm run test-optimization
```
Tests all optimization functions to ensure they work correctly.

### Build Without Data Generation
```bash
npm run build:no-data
```
Builds the application without regenerating contestant data (uses existing JSON or Sanity fallback).

## Benefits

### Performance Improvements
- **Faster page loads**: Eliminates API calls during page rendering
- **Reduced server load**: Fewer requests to Sanity CMS
- **Better SEO**: Faster Time to First Byte (TTFB) and Core Web Vitals
- **Improved caching**: Static JSON files are easily cached by CDNs

### Reliability
- **Fallback system**: If JSON fails to load, components fall back to Sanity API
- **Development mode**: Always uses Sanity API in development for real-time data
- **Error handling**: Graceful degradation if data fetching fails

### Contestant Equality
- **Pre-shuffled data**: Ensures all contestants appear in random order
- **No ranking bias**: Eliminates implicit ranking from data order
- **Fair representation**: All contestants have equal visibility

## File Structure

```
scripts/
├── generate-contestants-data.js    # Build-time data generation
└── test-optimization.js            # Testing utilities

src/lib/
└── optimized-contestants.js        # Runtime optimization functions

src/data/
└── contestants.json                # Generated static data (build-time)
```

## Optimization Functions

### `getOptimizedContestants()`
Returns all contestants in randomized order.

### `getOptimizedActiveContestants()`
Returns only active contestants in randomized order.

### `getOptimizedEliminatedContestants()`
Returns only eliminated contestants in randomized order.

### `getContestantStats()`
Returns contestant statistics (total, active, eliminated counts).

### `getOptimizedContestantBySlug(slug)`
Finds a specific contestant by slug from optimized data.

## Environment Variables

The system uses these environment variables for Sanity connection:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_TOKEN` (optional, for private datasets)

## Deployment Considerations

### Vercel/Netlify
The build script runs automatically during deployment. Ensure environment variables are properly configured.

### Manual Deployment
Run `npm run generate-data` before deploying to ensure fresh data.

### Data Updates
When contestant data changes in Sanity:
1. Redeploy the application (triggers data regeneration)
2. Or manually run `npm run generate-data` and redeploy

## Monitoring

Check the JSON file's `generatedAt` timestamp to verify data freshness:
```javascript
import contestantsData from '../data/contestants.json'
console.log('Data generated at:', contestantsData.generatedAt)
```

## Troubleshooting

### Missing JSON File
- Check if build script ran successfully
- Verify Sanity environment variables
- Run `npm run test-optimization` to diagnose issues

### Outdated Data
- Check the `generatedAt` timestamp in the JSON file
- Regenerate data with `npm run generate-data`
- Redeploy the application

### API Fallback Active
- If components are still hitting Sanity API, check the import statement
- Verify JSON file exists at `src/data/contestants.json`
- Check console for error messages
