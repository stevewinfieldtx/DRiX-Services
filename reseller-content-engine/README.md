# Automation Pitch Kit — Reseller Content Engine

A demo + content library for the product you'd **sell to automation resellers** (small entrepreneurs who, in turn, sell automation to small service businesses). They pick a trade, get the whole pitch — call script, email, text, social post, plus the sample automations their customer would receive.

## Files
- **`index.html`** — the clickable demo. 10 trade buttons → instant content kit (9 tabs: why, calculator, call, email, text, social, customer samples, **Fill empty slots**, **AI smart estimate**) with copy buttons + a live "cost of missed calls" calculator. Self-contained, no internet needed. White-label: swap `[ YOUR AGENCY ]` in the header.
- **`Reseller-Content-Library.md`** — every piece of copy in plain text, for lifting into a CRM/sequencer.
- **`trades-content.json`** — the same content as structured data, ready to wire into the DRiX brain or any app.

## The 10 trades
HVAC · Lawn & Landscaping · Roofing · Plumbing · Electrical · Pest Control · House Cleaning · Painting · Auto Repair · Small Law Firm.

## The 5 money-leaks every kit is built on
1. **Missed calls = lost jobs** — home services miss ~62% of calls; 85% of voicemail callers never call back.
2. **Speed to lead** — 78% hire the first business to respond; 5-min response = 100× more likely to connect.
3. **FAQ overload** — owners answering "how much / where / when" instead of doing the work.
4. **No-shows** — SMS reminders cut them up to 38%.
5. **Missing reviews** — 88% read reviews first; recency wins local search.

## How a reseller uses it (the sales motion)
1. Open the demo, click the prospect's trade.
2. Show the **missed-call calculator** — drag the sliders to the owner's real numbers. The dollar figure does the selling.
3. Flip to **"What their customer gets"** — the live texts make automation feel real in the room.
4. Copy the call script / email / text to start outreach.

## Where this fits in DRiX
Mechanically this is closer to **Campaign** (segment → emails + social) than **Pitch** (one named customer → one meeting). It's a *vertical-templated* content generator. Today the content is hand-authored per trade; the productized version generates it from `trades-content.json` via the brain.

## To turn the demo into the product
- **Wire to the DRiX brain** so kits generate from the JSON instead of being hardcoded — lets resellers add their own trades.
- **White-label per reseller** — logo, colors, business name pulled from their profile.
- **Live demo text** — fire the sample "missed-call text-back" to the prospect's actual phone in the meeting (Twilio is available). That single move closes.
- **Compliance gates** — the