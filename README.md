# Crease: Cricket Stats Visualizer

Project #34, Generative AI Track (NIAT). A cricket stats viewer that compares players and filters data with charts.

## Features
1. **Player dataset**: batting records for ODI, Test and T20I, in a sortable table.
2. **Player comparison**: head-to-head panel with mirrored bars, a radar chart and an automatic verdict.
3. **Filters**: name search, team, minimum average, minimum 100s, reset.
4. **Charts**: radar, top-runs bar chart, average vs strike-rate bubble chart (Chart.js).

Extras: format switcher, dark/light theme, CSV export, responsive layout.

## Run
Open `index.html` in a browser. No build step. Needs internet for Chart.js and Google Fonts (CDN).

## Data
Stored in `app.js` as arrays: `[name, team, matches, runs, average, strike rate, 100s, 50s]`.
Figures are approximate career totals. Verify against ESPNcricinfo before quoting.

## Tech
HTML5, CSS3, vanilla JavaScript, Chart.js 4.4.1.
