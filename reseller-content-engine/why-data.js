/* Deep "Why they need it" pitch content — one block per trade.
   This is the copy an agency reads (or pastes) to sell a service business on automation. */
const WHY_STATS = "62% of inbound calls to home-service businesses go unanswered · 85% of voicemail callers never call back and 62% immediately call a competitor · 78% of customers hire the first business that responds (responding within 5 minutes makes you 100x more likely to connect and 21x more likely to qualify the lead) · missed calls cost home-service businesses $300–$1,200 each · 88% of consumers read reviews before choosing a local business · SMS reminders cut no-shows by up to 38%. (Sources: Aira, Invoca, Chili Piper/InsideSales, MIT Lead Response Management, BrightLocal, Klara.)";

const WHY = {
  hvac: {
    opener: "An HVAC company lives and dies by the phone. When it's 99 degrees out and a family's AC just died, they aren't filling out a form — they're calling down the Google results until a human picks up. The first company to answer usually wins the job, and on a system replacement that 'job' is six to twelve thousand dollars. Here's exactly where the money leaks out, and what automation plugs.",
    leaks: [
      { t: "Missed calls hand jobs straight to the competitor", b: "Home-service businesses miss about 62% of inbound calls, and HVAC is worse during a heat wave when every line rings at once. The brutal part: 85% of people who hit voicemail never call back, and 62% dial the next company immediately. Each missed call is worth $300–$1,200 in service work — or a $6,000-plus install if it was a replacement lead. An AI receptionist answers every call on the first ring, 24/7, so none of it walks out the door." },
      { t: "Speed to lead — the first to answer wins", b: "78% of customers book the first business that actually responds. For HVAC that's life-or-death: a sweating homeowner hires whoever picks up and says 'we can be there today.' Responding within five minutes makes you 100x more likely to connect and 21x more likely to win the job. Automation responds in seconds — even at 2am — and books the appointment before the competitor's phone even rings." },
      { t: "Your highest-paid people are doing $0 work", b: "Every minute an owner or tech spends answering 'how much is a tune-up?' or 'what's your service area?' is a minute not spent on a billable job. Those calls don't need a human — they need a fast, accurate answer. AI handles the repeat questions and only pings you when there's a real job to book, so your techs stay on the tools." },
      { t: "No-shows and empty trucks bleed margin", b: "A tune-up no-show or a forgotten install slot is half a day of a truck and a tech earning nothing. Text reminders cut no-shows by up to 38%, and a 48-hour-ahead reminder catches cancellations early enough to fill the slot from a waitlist instead of eating it. That's pure margin recovered with zero extra labor." },
      { t: "Reviews decide who shows up first on Google", b: "88% of homeowners read reviews before choosing an HVAC company, and 'AC repair near me' is won by the business with the most recent 5-stars. Most owners are too busy to ask. Automation asks every happy customer for a Google review the moment the job is done — quietly building the reputation that makes the phone ring in the first place." }
    ],
    bottomLine: "Add it up: a small HVAC shop missing 8 calls a week at a $450 average ticket is leaving roughly $90,000 a year on the table — before you count the lost installs. Automation isn't an expense; it's the cheapest technician they'll ever hire, and it never sleeps, never quits, and never misses a call."
  },
  roofing: {
    opener: "Roofing is a feast-or-famine, storm-driven business, and the phone is where the season is won or lost. After a hail storm your phone rings 200 times in 48 hours, then goes quiet for months — and every one of those calls is a $9,000–$20,000 job. Miss the surge and you miss the year. Here's where the money leaks.",
    leaks: [
      { t: "Missed storm calls cost you the whole season", b: "62% of home-service calls go unanswered, and during a storm surge no human team can catch them all. 85% of those callers never leave a voicemail — they call the next roofer. At $9,000-plus a job, a single missed call can be the most expensive mistake of the month. AI answers all of them at once, 24/7, and never drops a lead." },
      { t: "The first roofer to respond signs the roof", b: "78% of homeowners go with the first company that responds professionally, and a roof is a high-trust, high-dollar decision they don't want to sit on. The roofer who calls back first and sounds buttoned-up gets the inspection. Automation responds in seconds and books the inspection before your competitor even checks voicemail." },
      { t: "Your estimators are chasing tire-kickers", b: "Your estimators' time is your most expensive resource. Sending them to chase unqualified calls — or answer 'do you do metal roofs?' — burns money. AI qualifies every caller (storm vs. leak vs. full replace, insurance vs. cash) and books only the real ones, so your team only climbs ladders that pay." },
      { t: "No-show inspections waste a whole morning", b: "A canceled inspection is half a day of an estimator earning zero. Reminders cut no-shows by up to 38%, and the 48-hour reminder catches cancellations in time to slot another homeowner in. On storm-season volume, that's real money recovered automatically." },
      { t: "Reviews are the trust a $15k spend demands", b: "Nobody hands $15,000 to a roofer with four reviews. 88% of homeowners read reviews first, and recency matters most. Automation collects a 5-star review after every completed roof and even drafts your replies — building the credibility that wins the next big job." }
    ],
    bottomLine: "One missed storm call can be a $12,000 job gone. A roofer who captures even a handful of extra storm leads a season pays for automation many times over — and it's the only 'employee' that can answer 200 calls at once during the surge that makes their year."
  },
  lawn: {
    opener: "A lawn and landscaping owner spends the day on a mower with the phone buzzing in their pocket — and spring is make-or-break. Every quote call you can't grab is a whole season of recurring revenue mowing your competitor's route instead. Here's where the money leaks.",
    leaks: [
      { t: "You can't answer from the seat of a mower", b: "62% of calls go unanswered, and a crew heads-down cutting grass misses most of the spring quote rush. 85% of those callers never call back. Each one isn't a one-time job — it's a season-long account worth $2,000-plus. AI answers every call and text and books it while you keep mowing." },
      { t: "Homeowners hire whoever quotes first", b: "78% go with the first business to respond. Someone getting three lawn quotes signs with whoever texts back a price and an open slot first. Automation sends a quote-and-booking link in seconds, so you lock the account before the next crew even calls back." },
      { t: "You're playing receptionist from the truck", b: "Repeat questions about pricing, service area, and what you offer eat the time you should spend billing. AI handles them instantly and only flags real jobs — keeping you productive instead of fielding 'do you do mulch?' all day." },
      { t: "Rain delays and missed visits cost you drive-outs", b: "Reminders keep weekly and biweekly clients confirmed (no driving to a locked gate), and when rain forces a reschedule, automation reshuffles the route and notifies everyone. Reminders cut no-shows by up to 38% — fewer wasted drive-outs, fuller days." },
      { t: "Reviews win the next house on the street", b: "88% of homeowners check reviews, and lawn care is won block by block — neighbors hire the crew with the most 5-stars. Automation asks every happy client for a review and a referral, turning one tidy yard into three." }
    ],
    bottomLine: "A single missed spring quote is a season-long account — call it $2,000-plus — gone. Across a busy spring that adds up fast. Automation answers every call you can't, so the recurring revenue lands on your route instead of your competitor's."
  },
  plumbing: {
    opener: "Plumbing is an emergency business, and emergencies don't leave voicemails. A homeowner with a flooding basement at 2am calls plumber after plumber until a human answers — and the after-hours calls you sleep through are the highest-margin work of the week. Here's where the money leaks.",
    leaks: [
      { t: "Emergencies go to whoever answers first", b: "62% of calls go unanswered and 85% of voicemail callers never call back — they're panicking and dialing the next plumber in ten seconds. Each missed emergency is a premium job gone. AI answers 24/7 in your name, captures the emergency, and texts you the address while the competitor's phone is still ringing." },
      { t: "After-hours is your best-paying work", b: "35–40% of home-service calls come after hours, and weekend miss-rates hit 41%. Those off-hours calls carry premium pricing — and they're exactly the ones a tired owner misses. Automation never sleeps, so the 2am burst-pipe call becomes a booked job instead of a lost one." },
      { t: "FAQ calls interrupt paying work", b: "Every 'do you do water heaters?' call you take with your hands in a drain is a distraction that doesn't pay. AI answers the routine questions and only pings you when there's real work to schedule, keeping your billable hours billable." },
      { t: "No-show installs waste a truck roll", b: "A no-show water-heater install is a wasted half-day. Reminders cut no-shows by up to 38%, and the 48-hour reminder lets you refill a canceled slot instead of eating it — margin recovered automatically." },
      { t: "Reviews win 'plumber near me'", b: "88% read reviews first, and the plumber at the top of the Google map pack gets the call. Automation asks every satisfied customer for a review after the fix and drafts your responses — climbing the rankings that drive the next emergency call to you." }
    ],
    bottomLine: "The 2am calls a plumber sleeps through are the best-paying jobs of the week — and they go to whoever answers first. An AI that captures even a couple extra emergencies a week pays for itself many times over, and it's awake when the owner can't be."
  },
  electrical: {
    opener: "Electrical work is urgent and high-trust — a sparking panel or a dead circuit means a homeowner wants a calm, competent voice right now. And the calls an electrician can't grab mid-install aren't small: panel upgrades and EV chargers are $1,500–$4,000 jobs. Here's where the money leaks.",
    leaks: [
      { t: "Safety calls won't wait for voicemail", b: "62% of calls go unanswered; 85% of voicemail callers never call back. A homeowner smelling burning plastic hires whoever picks up and reassures them. AI answers instantly, 24/7, and books the call before they dial the next electrician." },
      { t: "Big-ticket upgrades start on the phone", b: "78% hire the first to respond, and panel upgrades, rewires, and EV chargers are $1,500–$4,000 decisions. Miss the call and you miss the project. Automation responds in seconds and books it straight to your calendar." },
      { t: "You're answering permit questions on a ladder", b: "Routine questions about permits, timelines, and rates pull you off paying work. AI handles them and only escalates real jobs, so your hands stay on the tools." },
      { t: "Empty calendar slots from no-shows", b: "Scheduled work that no-shows is a lost day. Reminders cut no-shows by up to 38% and let you backfill cancellations early — keeping every slot earning." },
      { t: "Reviews earn the trust to work in someone's walls", b: "88% read reviews before letting an electrician into their home. Automation collects 5-stars after every job and drafts replies, building the reputation that books the next upgrade." }
    ],
    bottomLine: "The panel-upgrade and EV-charger calls an electrician can't grab mid-job are $1,500-plus each. Capturing even one extra a month covers automation several times over — and it answers every safety call the instant it comes in."
  },
  pest: {
    opener: "Pest control runs on urgency and recurring revenue. 'I just saw roaches' or 'there's a wasp nest by my kid's window' is an emotional, same-day call — and a single one is a quarterly contract worth $600-plus a year. Miss it and it's gone in one ring. Here's where the money leaks.",
    leaks: [
      { t: "Pest calls are instant and emotional", b: "62% of calls go unanswered; 85% of voicemail callers never call back. Someone who just saw a mouse won't wait — they call the next company before they hang up. AI answers every call, books the treatment, and saves the recurring account." },
      { t: "First to answer wins the contract", b: "78% hire the first responder. A pest call is a same-day want, and whoever picks up and offers today gets it. Automation responds in seconds, 24/7, and books before the competitor calls back." },
      { t: "FAQ calls eat your techs' time", b: "Repeat questions about pests, pricing, and safety pull techs off the route. AI handles them and books the inspection, keeping technicians treating instead of talking." },
      { t: "Quarterly customers drift off schedule", b: "Recurring revenue only works if customers stay on the calendar. Automated reminders confirm quarterly treatments (cutting no-shows up to 38%) and reschedule rain-outs — protecting the contracts that compound." },
      { t: "Reviews drive 'exterminator near me'", b: "88% read reviews first. Automation asks every satisfied customer for a 5-star review and a referral, putting you at the top of local search when the next person spots a roach." }
    ],
    bottomLine: "A single missed pest call isn't a one-time job — it's a $600-plus-a-year recurring account walking to a competitor. Automation answers them all and keeps your quarterly customers on schedule, compounding revenue instead of leaking it."
  },
  cleaning: {
    opener: "A house cleaning business has a built-in catch: the busier you are — inside homes, cleaning — the more booking calls go to voicemail. And someone shopping for a cleaner just hires whoever calls back first with a price and a slot. Here's where the money leaks.",
    leaks: [
      { t: "You're cleaning, not answering", b: "62% of calls go unanswered, and a team with their hands in sinks misses the quote calls. 85% never call back. Each one is a recurring weekly or biweekly client — not a one-off. AI answers, quotes the basics, and books while you keep cleaning." },
      { t: "First price and slot wins", b: "78% hire the first to respond. People booking a cleaner compare a couple options and go with whoever replies first. Automation sends a quote and open times in seconds, locking the recurring account." },
      { t: "Repeat quoting eats your day", b: "Answering '3 bed, 2 bath, how much?' over and over is unpaid time. AI quotes from a room count or a quick video walkthrough and books it — no in-home estimate visit needed." },
      { t: "Locked-door drive-outs waste a crew", b: "Nothing wastes a crew like arriving to a locked, empty house. Reminders cut no-shows by up to 38% and confirm access the day before — fewer wasted trips, fuller schedules." },
      { t: "Reviews earn the trust to hold a key", b: "88% read reviews, and people vet cleaners hard before handing over a key. Automation collects 5-stars after every clean and asks for referrals, building the trust that fills your route." }
    ],
    bottomLine: "Every booking call missed while cleaning is a recurring client — weekly or biweekly money — hiring whoever answered first. Automation catches them all and confirms your recurring visits, so the route stays full without hiring an office manager."
  },
  painting: {
    opener: "Painting is quote-heavy and comparison-shopped — homeowners get two or three bids, and the contractor who responds last is the one they cross off. Worse, most painters never follow up on a quote that goes quiet. Here's where the money leaks.",
    leaks: [
      { t: "Slow responders get crossed off the list", b: "62% of calls go unanswered, and the painter who can't pick up from a job site loses the bid. 78% hire the first to respond. On a $3,000 project, that's a real loss every time. AI answers every call and books the walkthrough first." },
      { t: "The follow-up nobody does", b: "Most painters never chase a quote that didn't answer — that's money left on the table. Automation auto-follows-up on every open quote until it's a yes or a no, so the maybes stop dying in your inbox." },
      { t: "You're spending billable days on tire-kickers", b: "Driving out to measure a tire-kicker's job costs a billable day. AI qualifies the project (interior/exterior, rooms, timeline) and can estimate from photos, so you only walk through real jobs." },
      { t: "No-show estimates waste a cross-town trip", b: "A no-show estimate is a wasted drive. Reminders cut no-shows by up to 38% and backfill cancellations — keeping your estimating time productive." },
      { t: "Reviews and before/afters sell the next job", b: "88% read reviews, and painting is sold on proof. Automation collects 5-stars and photos from happy clients and drafts replies — turning finished jobs into the portfolio that wins the next one." }
    ],
    bottomLine: "On $3,000 projects, one extra close a month is huge — and most painters lose deals purely by responding last and never following up. Automation fixes both automatically, so the bids you're already getting actually turn into jobs."
  },
  auto: {
    opener: "An auto shop's busiest days are when it loses the most new customers: the bays are loud and full, the phone is ringing with 'is my car ready?' calls that bury the brand-new business, and the first-timers go to voicemail and call the shop down the road. Here's where the money leaks.",
    leaks: [
      { t: "Busy bays mean missed new customers", b: "62% of calls go unanswered, and a slammed front desk can't catch them. 85% of voicemail callers never call back. AI answers every call, handles the status questions, and books the new work — so a busy day doesn't cost you tomorrow's customers." },
      { t: "First shop to give a time wins", b: "78% hire the first to respond. A driver with a check-engine light books whoever answers and offers a slot. Automation answers instantly and books the appointment before they try the next shop." },
      { t: "'Is my car ready?' clogs the front desk", b: "Status calls crowd out new business. AI handles 'is it ready' and 'how much longer' automatically, freeing your service writer for customers who are actually buying." },
      { t: "No-shows and forgotten service intervals", b: "Automated reminders keep appointments (no-shows down up to 38%) and nudge customers when an oil change or inspection is due — turning your existing list into repeat revenue." },
      { t: "Reviews win 'mechanic near me'", b: "88% read reviews, and trust is everything in auto repair. Automation collects 5-stars after every visit and drafts replies, making yours the shop drivers pick first." }
    ],
    bottomLine: "An auto shop loses the most new customers exactly when it's busiest. Automation answers both the status calls and the new ones, so a full bay doesn't quietly cost you next week's work."
  },
  law: {
    opener: "For a small firm — especially personal injury and family law — the prospect is calling three or four offices, and the data is blunt: the first firm to respond usually signs the client. After-hours and overflow intake calls that hit voicemail are retainers worth thousands going to the firm across town. Here's where the money leaks (and how to capture it within bar rules).",
    leaks: [
      { t: "The first firm to respond signs the case", b: "78% go with the first to respond, and injury and family-law leads are shopping multiple firms. A voicemail loses a case worth thousands. A compliant AI intake line answers 24/7 in your firm's name and books the consult before the competitor calls back." },
      { t: "After-hours intake is lost revenue", b: "People research lawyers at night and on weekends — exactly when no one's at the desk. 62% of calls go unanswered industry-wide. Automation captures every intake around the clock so qualified cases stop slipping away." },
      { t: "Paralegals drown in unqualified calls", b: "Informational and out-of-scope calls bury your staff. AI screens the matter type and routes only qualified intakes, so your team spends time on cases that fit your practice." },
      { t: "Consult no-shows are billable time gone", b: "A missed consultation is revenue lost. Reminders cut no-shows by up to 38% and free the slot for another prospect — keeping the attorney's calendar productive." },
      { t: "Reviews build credibility for a high-trust choice", b: "88% read reviews before choosing a firm. Automation requests reviews (within your state bar's rules) and drafts replies, building the credibility that wins the next client — always attorney-reviewed." }
    ],
    bottomLine: "In PI and family law, the first firm to respond usually signs the client — your competitors aren't better lawyers, they just answered first. A compliant AI intake line captures the after-hours and overflow retainers you're losing now. (All review and outreach automation must follow your state bar's advertising and solicitation rules.)"
  },
  gym: {
    opener: `A gym or studio is a recurring-revenue business, and the phone, the texts, and the Instagram DMs are where new members are won. Every 'how much is it?' that goes unanswered while your team is coaching on the floor is a member — worth hundreds to thousands over their lifetime — signing up down the street. Here's where the money leaks.`,
    leaks: [
      { t: `Missed inquiries are lost memberships`, b: `62% of calls to local businesses go unanswered, and gyms add missed DMs and texts on top. 85% of voicemail callers never call back. A missed inquiry isn't a one-time sale — it's a recurring member worth a thousand-plus a year. AI answers every call, text, and DM in your gym's name and books the tour.` },
      { t: `Speed to lead on trials and tours`, b: `78% join the first place that responds. Someone ready to start wants to book a tour or trial right now, and they go with whoever answers first. Automation responds in seconds, day or night, and gets them on the calendar before they cool off.` },
      { t: `Your coaches are stuck manning the desk`, b: `Every hours, class-time, or pricing question your team takes is time not spent coaching and retaining members. AI handles the FAQs and books the tour, so your staff stays on the floor where they add value.` },
      { t: `No-show tours and quiet members cost growth`, b: `A no-show tour is a lost conversion, and a member who quietly stops coming is about to cancel. Reminders cut no-shows by up to 38%, and automated win-backs re-engage at-risk members before they're gone.` },
      { t: `Reviews fill the class and referrals keep it full`, b: `88% of people read reviews before joining a gym, and word-of-mouth drives the rest. Automation asks happy members for reviews and referrals at the right moment, turning your best members into your best marketing.` }
    ],
    bottomLine: `Memberships compound: a gym missing 8 inquiries a week, each a member worth $1,000-plus a year, is leaving serious recurring revenue on the table. Automation answers every inquiry, books the tour, and keeps members engaged — so the studio grows instead of leaking.`
  },
  therapist: {
    opener: `Private practice is built on trust, and it often begins with one hard phone call. When someone finally works up the courage to reach out and gets a voicemail, they frequently don't try the next name on the list. So the stakes here aren't just a booked session — they're whether a person gets care at all. Here's where practices lose clients, and how automation helps when it's handled with care.`,
    leaks: [
      { t: `A voicemail can end the search for help`, b: `When most calls to a small practice go unanswered and someone in distress reaches voicemail, they rarely leave a message and try again. A warm voice that answers — day or night — can be the difference in whether they get care. AI answers gently and books the first session so no one reaching out falls through the cracks.` },
      { t: `Warmth and speed matter most when reaching out is hardest`, b: `The practice that responds first, and kindly, is the one that books the client. Automation answers immediately, gathers the basics gently, and schedules the intake — without the person having to muster the courage twice.` },
      { t: `Clinicians shouldn't live at the front desk`, b: `Time spent returning insurance and availability calls is time not spent with clients. AI handles intake and scheduling so therapists can focus on care, not admin.` },
      { t: `No-shows break continuity of care`, b: `A missed session hurts the client's progress and the practice's calendar. Reminders cut no-shows by up to 38%, and open slots are gently re-offered to clients on the waitlist who need to be seen sooner.` },
      { t: `Trust is chosen on reputation`, b: `People choose a therapist carefully, and reviews and responsiveness shape that choice. Automation requests feedback ethically within licensing rules and keeps clients gently engaged between sessions.` }
    ],
    bottomLine: `For a counseling practice, answering warmly is both the right thing and the sustainable thing: fewer people slip away in a hard moment, the caseload is fuller and steadier, and clinicians are freed to do the work only they can do. (Any intake automation must be HIPAA-handled, never diagnose, and escalate crises to the 988 Lifeline.)`
  }
};
