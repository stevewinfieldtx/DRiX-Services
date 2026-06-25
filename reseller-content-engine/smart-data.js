/* Deep "AI smart estimate / AI impact" content — one block per trade.
   The point: show genuinely smart, specific AI capabilities (materials takeoffs, diagnostics, sizing),
   not "send your address for a quote." Each has: headline, how[], a sample output, the customer intake message, and more[]. */
const SMART = {
  roofing: {
    headline: "Aerial roof measurement to a full materials takeoff — before anyone climbs a ladder",
    how: [
      "Reads the roof from satellite and aerial imagery: total area, pitch, number of facets, and the linear footage of ridges, hips, valleys, eaves and rakes.",
      "Asks the questions that make a quote real — architectural vs. 3-tab vs. metal vs. tile, color and brand preference, tear-off vs. overlay, and insurance claim vs. cash.",
      "Converts the measurements into an exact materials takeoff: squares, bundles, underlayment, ridge cap, drip edge, starter, ice-and-water for the valleys, and fasteners — with a waste factor based on the roof's complexity.",
      "Uses the eave footage to size gutters and downspouts, and the ridge length to spec ventilation.",
      "Hands your estimator a ready-to-order supplier list and a defensible bid, so they roll up prepared and you never make a second measuring trip."
    ],
    sample: { title: "Sample takeoff — 2,400 sq ft home, architectural shingles, 6:12 pitch", lines: [
      "Roof area: 28.5 squares (incl. 12% waste for hips & valleys)",
      "Architectural shingles: 86 bundles (3 per square)",
      "Synthetic underlayment: 6 rolls (10 sq each)",
      "Ice & water shield (valleys + eaves): 4 rolls",
      "Starter strip: 120 linear ft",
      "Hip & ridge cap: 95 linear ft (~3 bundles)",
      "Drip edge: 180 linear ft",
      "Ridge vent: 42 linear ft",
      "Gutters: 180 linear ft + 6 downspouts",
      "Roofing nails: ~13,000 (about 4 coils)"
    ]},
    intake: "Send your address and tell me a couple of things — are you thinking architectural shingles, metal, or tile, and is this an insurance claim or out of pocket? I'll measure your roof from satellite, put together a real materials estimate, and book your free inspection to confirm. 🛰️🏠",
    more: [
      "Generates the insurance-claim supplement (line items + measurements) so claims get approved faster.",
      "Flags steep-pitch or multi-story complexity that changes labor and safety pricing.",
      "Pulls current local material prices so the bid reflects today's costs, not last year's.",
      "Auto-orders from your supplier once the homeowner signs."
    ]
  },
  hvac: {
    headline: "Right-size the system and stock the truck — before the visit",
    how: [
      "From the home's square footage, age, region, and window/insulation details, runs a load estimate (a Manual-J-style sizing) to recommend the correct tonnage and SEER range — so replacement quotes aren't guesses.",
      "Reads the existing unit's model and serial plate from a photo: age, tonnage, and refrigerant type — and flags R-22 systems that are expensive to service.",
      "Lists the likely failure parts for that specific model (capacitor, contactor, blower motor) so the tech rolls up with them.",
      "Estimates line-set length, thermostat compatibility, and whether the ductwork needs attention.",
      "Surfaces the utility rebates and financing that apply to the recommended system — the stuff that actually closes an install."
    ],
    sample: { title: "Sample read — 1,900 sq ft home, 14-yr-old condenser", lines: [
      "Existing unit: 3-ton, R-22 (flag: phased-out refrigerant)",
      "Recommended replacement: 3-ton, 16 SEER2",
      "Service parts to stock: dual-run capacitor, contactor",
      "Line set: ~25 ft, reusable pending pressure test",
      "Thermostat: smart-compatible",
      "Rebates found: $450 utility + $600 manufacturer",
      "Financing: 0% for 18 months available"
    ]},
    intake: "Snap a photo of the label on your outdoor unit and tell me your home's square footage. I'll check the system's age and size, see what rebates you qualify for, and send a tech out with the right parts. 📸",
    more: [
      "Books seasonal tune-ups and enrolls customers in a maintenance plan automatically.",
      "Predicts which aging systems are due to fail and reaches out before they do.",
      "Calculates the energy savings of an upgrade to justify the install cost."
    ]
  },
  plumbing: {
    headline: "Photo the problem — the truck arrives with the right parts",
    how: [
      "From photos of the leak, fixture, or under-sink area, identifies pipe material and diameter (copper, PEX, CPVC, cast iron), fitting types, and valve style.",
      "For a water heater, reads the model and capacity to spec the correct replacement and venting.",
      "Builds a parts list — length of pipe, fittings, shutoffs, supply lines, solder or push-fit — so it's a one-trip fix instead of diagnose-now, return-later.",
      "Flags code requirements it can see, like a missing expansion tank or T&P discharge.",
      "For repipes, estimates total linear feet of pipe and fitting counts from the home's layout."
    ],
    sample: { title: "Sample read — under-sink leak photo", lines: [
      "Pipe: 1/2 in. copper supply, corroded shutoff",
      "Parts: 2 angle stops, 2 braided supply lines, 1/2 in. coupling",
      "Likely cause: failed compression fitting",
      "Water heater (separate photo): 40-gal gas, 11 yrs (recommend replace)",
      "Code flag: add expansion tank on replacement",
      "Result: confirmed one-trip fix"
    ]},
    intake: "Text me 2–3 photos of the problem area and anything leaking. I'll figure out the parts we need so our plumber shows up ready to fix it in one visit. 📸🔧",
    more: [
      "Estimates repipe jobs in linear feet of pipe and fittings from a quick video walk.",
      "Schedules emergency vs. routine correctly and prices after-hours premium automatically.",
      "Reminds customers when the water heater or softener is near end of life."
    ]
  },
  electrical: {
    headline: "Read the panel and the run — spec the wire, breaker, and permit",
    how: [
      "From a photo of the panel, reads the brand and main amperage and counts available breaker slots.",
      "From the job (EV charger, range, hot tub, sub-panel), calculates the load and the correct wire gauge — a 50A EV charger needs 6 AWG — and the matching breaker for that panel.",
      "Estimates conduit and wire length from the photographed run between the panel and the install point.",
      "For a service upgrade, determines the service size needed and whether the meter/mast and a permit are required.",
      "Outputs a materials list and flags utility coordination so nothing stalls the job."
    ],
    sample: { title: "Sample read — 50A EV charger install", lines: [
      "Panel: 200A, 4 open slots (compatible breaker confirmed)",
      "Circuit: 50A requires 6 AWG copper",
      "Run: ~35 ft garage to panel via 1/2 in. EMT conduit",
      "Breaker: 2-pole 50A (panel-matched)",
      "Charger: hardwired; NEMA 14-50 alternative available",
      "Permit: required; utility notice not needed"
    ]},
    intake: "Snap a few photos — your panel with the door open, the outlet, and the wall or path it needs to run. I'll spec the wire and breaker so our electrician arrives with everything. 📸⚡",
    more: [
      "Estimates whole-home rewire and panel-upgrade jobs from a short video.",
      "Flags safety hazards (double-tapped breakers, scorching) from the panel photo.",
      "Surfaces rebates for EV chargers, heat pumps, and battery installs."
    ]
  },
  lawn: {
    headline: "Measure the property — mow time, crew, and material counts from the map",
    how: [
      "Measures the property from satellite and separates turf from beds, driveway, and hardscape — so the mow estimate only counts what you actually cut.",
      "Asks what equipment you run (how many mowers, deck size, push vs. riding) and computes realistic mow time, crew size, and whether it fits the route.",
      "For fertilizer or weed control, turns turf square footage into the exact bags or gallons of product per application.",
      "For mulch, multiplies bed area by depth to get cubic yards; for sod, converts area to rolls or pallets.",
      "Builds a season calendar — pre-emergent timing, aeration, cleanups — so you upsell at the right moment."
    ],
    sample: { title: "Sample measure — 0.3-acre lot", lines: [
      "Total turf: 9,800 sq ft (beds & driveway excluded)",
      "Mow time: ~38 min with one 48 in. rider + trimming",
      "Crew/route: fits a 2-person crew, Tuesday route",
      "Fertilizer: 2.5 bags per application (50 lb / 5k sq ft)",
      "Mulch (front beds, 3 in. depth): 4.5 cubic yards",
      "Quoted weekly: in seconds, no site visit"
    ]},
    intake: "Just drop your address and tell me if you want weekly mowing, a cleanup, or landscaping. I'll measure your lawn from the map and text you a real quote in under a minute. 🛰️🌿",
    more: [
      "Auto-reschedules the route on rain days and notifies every customer.",
      "Times seasonal upsells (aeration, leaf removal) to each property automatically.",
      "Flags overgrown or first-cut lots that need premium pricing from the imagery."
    ]
  },
  pest: {
    headline: "ID the pest and size the treatment from a photo",
    how: [
      "From a photo or short video, identifies the species and the severity of the infestation.",
      "Recommends the correct treatment protocol and the product type and quantity for the home's size.",
      "Measures the home's perimeter from satellite to estimate linear feet of barrier treatment and the number of bait stations.",
      "Spots conducive conditions — moisture, mulch against the foundation, entry gaps — from the photos.",
      "Sets the right follow-up cadence (one-time vs. quarterly) and prices the recurring plan."
    ],
    sample: { title: "Sample read — kitchen photo + exterior", lines: [
      "Species: German cockroach (high-reproduction)",
      "Severity: moderate, kitchen-localized",
      "Treatment: gel bait + IGR; crack-and-crevice",
      "Perimeter: ~165 linear ft barrier (from satellite)",
      "Bait stations: 6 exterior",
      "Plan: initial + 2 follow-ups, then quarterly"
    ]},
    intake: "Send a photo or short video of what you're seeing and where. I'll identify it, size up the treatment, and text you a plan and price — often same-day. 🐜📸",
    more: [
      "Auto-renews quarterly contracts and reminds before each visit.",
      "Triggers seasonal campaigns (ants in spring, rodents in fall) to the right customers.",
      "Builds a treatment history per home so techs walk in informed."
    ]
  },
  cleaning: {
    headline: "Walkthrough video to hours, crew, supplies, and an itemized quote",
    how: [
      "From a 30-second walkthrough video or a room-and-square-footage input, estimates labor hours and crew size.",
      "Itemizes add-ons — inside fridge, oven, windows, baseboards — and prices each so the quote is complete and transparent.",
      "Calculates supply quantities for the home size so crews are stocked.",
      "Flags pets, delicate surfaces, or heavy soil from the video that change the time and price.",
      "Builds a per-home checklist and time-per-room so scheduling is accurate, not optimistic."
    ],
    sample: { title: "Sample read — 3 bed / 2 bath walkthrough", lines: [
      "Estimated time: 3.5 hrs, 2-person crew",
      "Base deep clean: quoted instantly",
      "Add-ons detected: inside fridge, interior windows",
      "Flag: two large dogs (extra time, pet-safe products)",
      "Recurring: biweekly pricing offered",
      "Result: no in-home estimate visit needed"
    ]},
    intake: "Send a quick 30-second walkthrough video of your home, or just tell me the bed/bath count. I'll text you an exact quote and open times — no in-home estimate needed. 🎥✨",
    more: [
      "Auto-rebooks recurring cleans and confirms access the day before.",
      "Suggests add-ons each customer hasn't tried, at the right time.",
      "Reorders supplies based on the jobs on the calendar."
    ]
  },
  painting: {
    headline: "Photo the rooms to gallons of paint, supplies, and labor hours",
    how: [
      "From photos and room dimensions, computes wall square footage minus windows and doors, and the number of coats needed.",
      "Converts that into gallons of paint per color and room (about one gallon per 350–400 sq ft per coat), plus primer, tape, rollers, and trays.",
      "Estimates labor hours by surface area and prep complexity — patching, caulking, texture, trim detail.",
      "Shows the room in the homeowner's chosen color so they can decide on the spot.",
      "Outputs a clean bid and a supplier list so you order exactly what the job needs — no leftover cans, no extra trips."
    ],
    sample: { title: "Sample takeoff — 12x14 bedroom, walls + ceiling", lines: [
      "Wall area (less openings): 410 sq ft",
      "Coats: 2 → 2.5 gallons wall color",
      "Ceiling: 1 gallon flat white",
      "Primer (patched areas): 1 gallon",
      "Supplies: 1 case tape, 4 roller covers, 2 trays",
      "Labor: ~9 hours incl. prep",
      "Color preview: rendered for approval"
    ]},
    intake: "Snap photos of each room you want painted and tell me the colors if you've picked them. I'll estimate the paint, supplies, and a price and text it over. 📸🎨",
    more: [
      "Auto-follows-up on every open quote so the maybes don't go cold.",
      "Offers financing on larger interior/exterior projects at quote time.",
      "Builds a before/after gallery and review request from finished jobs."
    ]
  },
  auto: {
    headline: "Photo, VIN, and dash light to a pre-diagnosis with parts pre-ordered",
    how: [
      "Decodes the VIN to the exact year, make, model, and engine.",
      "Cross-references the symptom, any photos, and the dashboard warning light or OBD code to the likely parts and labor.",
      "Pre-orders the probable parts so the car is fixed in one visit instead of a diagnose-then-wait trip.",
      "Pulls open recalls and the maintenance items due by mileage to surface easy add-on work.",
      "Estimates labor hours from a standard labor-time guide so the quote is accurate."
    ],
    sample: { title: "Sample read — 2017 sedan, check-engine light", lines: [
      "VIN decode: 2.0L turbo, AWD",
      "Likely code P0301: cylinder 1 misfire",
      "Probable parts: coil pack + spark plug set",
      "Labor: ~1.2 hrs",
      "Open recall found: software update",
      "Due by mileage: cabin filter, brake fluid"
    ]},
    intake: "Text me a photo or video of the issue (or the dash light) and your VIN or plate. We'll pre-check the likely parts so your car's fixed faster. 📸🚗",
    more: [
      "Reminds customers when service is due based on their mileage.",
      "Sends 'is it ready' status and estimate approvals automatically.",
      "Flags declined work from past visits for a friendly follow-up."
    ]
  },
  law: {
    headline: "AI intake triage to a structured case memo — only for cases that fit",
    how: [
      "From the prospect's description and any uploaded documents — police report, contract, filing — summarizes the matter in plain language.",
      "Identifies the matter type and scores it against your firm's practice areas, so consult time goes only to cases you actually take.",
      "Flags time-sensitive risks like an approaching statute-of-limitations deadline.",
      "Lists the documents still needed and requests them automatically before the consult.",
      "Assembles a structured intake memo so the attorney walks in prepared. Always attorney-reviewed; the AI never gives the prospect legal advice."
    ],
    sample: { title: "Sample intake — auto-accident inquiry", lines: [
      "Matter type: personal injury (motor vehicle)",
      "Fit: within practice area",
      "Deadline flag: statute of limitations ~22 months out",
      "Docs received: police report, photos",
      "Docs requested: medical records, insurance info",
      "Output: intake memo ready for attorney review"
    ]},
    intake: "If you'd like, share a brief description and upload any relevant documents or photos here. We'll review it confidentially before your consultation so we make the most of your time. (This isn't legal advice.)",
    more: [
      "Books the consult and sends reminders to cut no-shows.",
      "Routes only qualified, in-scope intakes to your paralegals.",
      "Requests reviews within your state bar's rules after a matter closes."
    ]
  }
};
