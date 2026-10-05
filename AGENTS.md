# Data Exploration Project

## Overview
This repository contains web-based data visualization tools focused on exploring tax rate comparisons and related datasets. The project uses HTML, CSS, and JavaScript for interactive visualizations with an emphasis on browser-based rendering.

## Key Files and Structure

- `index.html` - Main entry point containing data table and chart visualization
- `effective-tax-rate-comparison/index.html` - Secondary visualization focused on tax rate comparisons
- `assets/` - Contains favicon assets including .ico, .png, .webp formats and manifest files used in both HTML files

## Development and Testing

This is a browser-based project primarily using vanilla HTML/CSS/JavaScript. There are no explicit test scripts or build processes described.

To work with the code:
1. Open `index.html` directly in a web browser to view the main visualization
2. Open `effective-tax-rate-comparison/index.html` for the tax rate comparison visualization
3. All assets and resources load automatically from local paths

## Usage Notes

- The project uses Chart.js library (as seen in effective-tax-rate-comparison/index.html) for charting
- Data is presented through interactive tables and visual charts
- Assets directory contains all necessary favicon files to support browser tab display
- Both index.html files use similar structure with different data sets

## Project-Specific Conventions

All visualizations are rendered directly in the browser without server-side processing.

## Traffic Monitoring Setup

To monitor website traffic, Google Analytics has been implemented in both HTML files:
1. `index.html` - Main entry point
2. `effective-tax-rate-comparison/index.html` - Secondary visualization

### Implementation Details:
- Added Google Analytics tracking code placeholders (GA_MEASUREMENT_ID)
- Replace GA_MEASUREMENT_ID with your actual Google Analytics Measurement ID before deployment
- The tracking code is added in the <head> section of both files
- Tracking will monitor page views and user interactions on both visualizations

### Next Steps:
1. Obtain a Google Analytics 4 Measurement ID from your Google Analytics account
2. Replace "GA_MEASUREMENT_ID" with your actual Measurement ID in both HTML files
3. Deploy the updated files to your web server
4. Verify tracking is working through Google Analytics interface

For more information on setting up Google Analytics:
- https://support.google.com/analytics/answer/10089681