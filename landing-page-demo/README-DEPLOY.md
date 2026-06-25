# FrontDesk AI — Landing Page (Railway deploy)

A self-contained demo landing page with an embedded ElevenLabs voice agent (Ava) docked bottom-right.
**One universal agent** serves every trade — each page feeds it its own knowledge file, so Ava becomes an HVAC, roofing, or plumbing receptionist depending on the page she's on.

## How the "page-driven agent" works
1. Each page sets one line: `var PAGE_TRADE = "hvac";` (near the bottom of `index.html`).
2. On load, the page fetches its knowledge file — `kb/hvac.json` (this is your "hidden page that gets called").
3. It passes that JSON to the widget as **dynamic variables**, so the single agent (`agent_3701kvy7e4mqebyr89m8sryfx7bm`) speaks as that specific business.
4. If the fetch fails (e.g. opened as a local file), a built-in fallback keeps Ava working as HVAC.

**To add a trade:** drop a new `kb/<trade>.json`, clone `index.html`, change `PAGE_TRADE`. No new agent, no code.

## Files
- `index.html` — the page (CSS/JS inline). Fetches its KB file, then loads the ElevenLabs widget.
- `kb/hvac.json`, `kb/roofing.json`, `kb/plumbing.json` — per-trade knowledge files (the agent's facts).
- `server.js` — zero-dependency Node static server (serves the page **and** the `/kb/*.json` files).
- `package.json` — `npm start` → `node server.js`.

## Deploy to Railway
1. Push this folder to a Git repo (or `railway up`).
2. New Railway service from the repo. Nixpacks auto-detects Node, runs `npm install` (no deps) and `npm start`.
3. **Settings → Networking → Generate Domain** → you get `https://…up.railway.app`.
4. Open it. The page loads, fetches its KB file, and the **mic works** (because it's https).

No env vars. No API key — the page is static and the agent is hosted by ElevenLabs.

## ⚠️ Two must-dos in the ElevenLabs dashboard
Open the agent **"FrontDesk AI — Universal Receptionist (page-driven)"** (`agent_3701kvy7e4mqebyr89m8sryfx7bm`):

1. **Allowlist your domain** — Widget/Security settings → add your `…up.railway.app` domain. If Ava appears but won't talk, this is almost always why.
2. **Set placeholder/default values for the dynamic variables** — because the prompt now uses `{{business_name}}`, `{{trade}}`, `{{services}}`, `{{service_area}}`, `{{hours}}`, `{{pricing_notes}}`, `{{booking_notes}}`, `{{emergency_examples}}`. The pages supply these at runtime, but set defaults (use the HVAC values) so the dashboard "Test agent" button works and nothing errors if a variable is ever missing.

## Optional upgrade: true server-side fetch (your "hidden page" idea, fully)
Right now the *page* fetches the KB and hands it to the agent. If you'd rather the **agent itself** fetch live data mid-call (e.g. real-time availability, a customer's account), register a **webhook/server tool** in the agent pointing at an endpoint like `/kb/:trade` or `/availability`. The agent calls it during the conversation. That's the more powerful multi-tenant pattern — same idea, just server-side instead of page-side.

## Swapping the brand
In `index.html` replace: the `FrontDesk AI` name, the `$3,500/mo` pricing lines, the placeholder testimonials (marked `PLACEHOLDER — replace`), and the `mailto:hello@example.com` CTA. Business facts live in the `kb/*.json` files, not the page.

## Troubleshooting: "Railpack could not determine how to build the app"
This means Railway is pointed at the PARENT folder (`DRiX-Services`), which only holds subfolders — there is no `package.json` at that level. Fix one of two ways:

- **Dashboard:** Railway service -> Settings -> set **Root Directory** to `landing-page-demo`, then redeploy.
- **CLI:** run `railway up` from *inside* the `landing-page-demo` folder.

Railpack will then find `package.json` and run `npm start` -> `node server.js`.
