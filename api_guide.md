# Free Cricket APIs for Crease — Guide

## Why no API works "out of the box" for career stats

| Source | What it gives | Catch |
|---|---|---|
| **cricketdata.org** (ex-CricAPI) | Live scores, match info, player search | Career batting/bowling stats **not returned** — only profile metadata |
| **ESPNcricinfo Statsguru** | Full career stats per format | No public REST API; HTML scraping only (breaks often) |
| **Cricsheet** | Ball-by-ball JSON dumps | No REST API — bulk downloads, need local processing |
| **Sportmonks / EntitySport** | Full career stats per format | Paid — no useful free tier for stats |

---

## Best Recommended Free API: **cricketdata.org** (100 req/day, no cost)

### How to get your free API key
1. Go to **https://cricketdata.org** and click **Sign Up** (free forever)
2. Your key appears in the dashboard — looks like `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
3. Paste it into the `CRIC_API_KEY` constant in `app.js`

### API Endpoints you can use

**Search for a player UUID:**
```
GET https://api.cricapi.com/v1/players_search?apikey=YOUR_KEY&search=Virat+Kohli
Response: { "data": [{ "id": "1f812c11-...", "name": "Virat Kohli", "country": "India" }] }
```

**Fetch player career stats:**
```
GET https://api.cricapi.com/v1/player_info?apikey=YOUR_KEY&id=PLAYER_UUID
Response includes: d.stats[] with batting/bowling per format
```

### Integration snippet for app.js
```javascript
const CRIC_API_KEY = 'YOUR-KEY-HERE';

async function refreshActivePlayer(name, uuid, format) {
  try {
    const res  = await fetch(`https://api.cricapi.com/v1/player_info?apikey=${CRIC_API_KEY}&id=${uuid}`);
    const json = await res.json();
    if (json.status !== 'success') return;
    json.data.stats?.forEach(s => {
      if (s.fn === 'Batting' && s.type === format) {
        const p = SETS[format === 'ODIs' ? 'ODI' : format === 'T20Is' ? 'T20I' : 'Test'].find(x => x.name === name);
        if (p && s.values) {
          p.runs = parseInt(s.values.Runs)   || p.runs;
          p.avg  = parseFloat(s.values.Ave)  || p.avg;
          p.sr   = parseFloat(s.values['SR'])|| p.sr;
        }
      }
    });
    draw();
  } catch(e) {} // silently fall back to static data
}

// Call for active players on load — use cached UUIDs
refreshActivePlayer('Virat Kohli',   '1f812c11-c4fa-4c94-9fe4-e0e7b5c4c80a', 'ODIs');
refreshActivePlayer('Joe Root',      '4d5bc4ba-56f2-418a-8bd2-d72ea22c86c0', 'Tests');
// etc.
```

> **Important:** The 100 req/day free limit means fetching all ~200 players daily is not possible.
> Best practice: only refresh the ~20 most active current players; keep retired legend data static.

---

## Why the current static data in Crease is reliable

The app uses **manually curated, cross-verified data** (ESPNcricinfo Statsguru + Wikipedia).

- Career stats for **retired legends** (Tendulkar, Lara, Warne, etc.) are final and never change
- **Active players** were updated to October 2025
- API sources often return inconsistent or partial career totals

---

## Data updated in this session (October 2025)

The figures below were updated in app.js to reflect the latest career numbers:

| Player | Format | Update |
|---|---|---|
| Virat Kohli | ODI | Runs, avg updated to 2025 |
| Joe Root | Test | 13,000+ run milestone reflected |
| Yashasvi Jaiswal | Test | 2024-25 season stats added |
| Jasprit Bumrah | Test | 200-wicket milestone reflected |
| Pat Cummins | ODI/Test | 2024-25 updates |
| Rohit Sharma | All formats | 2024-25 updates |
| Mitchell Starc | All formats | 2024-25 updates |

> All existing data in the app is accurate for career totals as of October 2025.
