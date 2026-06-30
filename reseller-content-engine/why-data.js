/* Deep "Why they need it" pitch content, one block per trade. Alex Hormozy voice. No em dashes.
   This is the copy an agency reads (or pastes) to sell a service business on automation. */
const WHY_STATS = "62% of inbound calls to home-service businesses go unanswered. 85% of voicemail callers never call back, and 62% call a competitor instead. 78% of customers buy from the first business that responds (answer within 5 minutes and you are 100x more likely to connect and 21x more likely to qualify the lead). Missed calls cost home-service businesses $300 to $1,200 each. 88% of consumers read reviews before they choose a local business. SMS reminders cut no-shows by up to 38%. (Sources: Aira, Invoca, Chili Piper/InsideSales, MIT Lead Response Management, BrightLocal, Klara.)";

const WHY = {
  hvac: {
    opener: "Here's the deal with an HVAC company. The phone IS the business. It's 99 degrees, a family's AC just died, and they are NOT filling out a form. They are calling down the Google list until a human picks up. First company to answer usually wins. And that win is a $6,000 to $12,000 install. Miss the call, miss the money. Let me show you exactly where it leaks.",
    leaks: [
      { t: "Every missed call is a check you handed your competitor", b: "Home-service businesses miss about 62% of their calls. During a heat wave it's worse, because every line rings at once. Now the kicker: 85% of people who hit voicemail never call back, and 62% dial the next company on the spot. That's $300 to $1,200 per service call, or a $6,000-plus install, walking out the door. An AI answers every call on the first ring, day or night. Nothing leaks." },
      { t: "First to answer wins. Period.", b: "78% of customers buy from whoever responds first. For HVAC that's everything. A sweating homeowner hires the first voice that says 'we can be there today.' Answer in 5 minutes and you are 100x more likely to connect. The AI answers in seconds, even at 2am, and books the job before your competitor's phone rings." },
      { t: "Your best techs are answering the phone for free", b: "Every minute the owner spends on 'how much is a tune-up?' is a minute not earning. That call doesn't need a human. It needs a fast answer. The AI handles the repeat questions and only pings you when there's a real job to book. Your techs stay on the tools. That's where the money is." },
      { t: "No-shows are just empty trucks burning fuel", b: "A no-show tune-up is half a day of a truck and a tech earning zero. Text reminders cut no-shows by up to 38%. And a 48-hour reminder catches the cancel early enough to fill the slot from your waitlist instead of eating it. Pure margin back in your pocket. Zero extra labor." },
      { t: "Reviews decide who shows up first on Google", b: "88% of homeowners read reviews before they pick an HVAC company. 'AC repair near me' goes to whoever has the most recent 5-stars. Most owners are too slammed to ask. The AI asks every happy customer the second the job is done. That's how the phone keeps ringing in the first place." }
    ],
    bottomLine: "Run the math. A small shop missing 8 calls a week at a $450 average ticket leaves roughly $90,000 a year on the table. And that's BEFORE the lost installs. This isn't an expense. It's the cheapest tech you'll ever hire. It never sleeps, never quits, and never misses a call."
  },
  roofing: {
    opener: "Roofing is feast or famine, and the phone decides which one you get. A hail storm hits and your phone rings 200 times in 48 hours. Then it goes quiet for months. Every one of those calls is a $9,000 to $20,000 job. Miss the surge, miss the year. Here's where the money leaks.",
    leaks: [
      { t: "Miss the storm calls and you miss the season", b: "62% of calls go unanswered, and during a surge no human team catches them all. 85% of those callers never leave a voicemail. They call the next roofer. At $9,000-plus a job, ONE missed call can be your most expensive mistake of the month. The AI answers all of them at once, around the clock, and drops zero leads." },
      { t: "The first roofer to call back signs the roof", b: "78% of homeowners go with whoever responds first and sounds buttoned-up. A roof is a big, scary, high-dollar decision. They want a pro on the phone NOW. The AI responds in seconds and books the inspection before your competitor even checks voicemail." },
      { t: "Your estimators are burning daylight on tire-kickers", b: "Your estimators' time is your most expensive resource. Sending them to chase junk calls and answer 'do you do metal?' is money on fire. The AI qualifies every caller first: storm or leak or full replace, insurance or cash. It only books the real ones. Your team only climbs ladders that pay." },
      { t: "A no-show inspection is a wasted morning", b: "A canceled inspection is half a day of an estimator earning nothing. Reminders cut no-shows by up to 38%. And the 48-hour reminder catches the cancel in time to slot in another homeowner. On storm-season volume, that's real money you get back automatically." },
      { t: "Nobody hands $15,000 to a roofer with 4 reviews", b: "88% of homeowners read reviews first, and recent ones matter most. A roof is too big a spend to trust a stranger. The AI collects a 5-star review after every completed roof and even drafts your replies. That's the credibility that wins the NEXT big job." }
    ],
    bottomLine: "One missed storm call can be a $12,000 job gone. Capture even a handful of extra storm leads a season and this pays for itself many times over. It's the only 'employee' that can answer 200 calls at once during the 48 hours that make your whole year."
  },
  lawn: {
    opener: "A lawn and landscaping owner is on a mower all day with the phone buzzing in his pocket. And spring is make or break. Every quote call you can't grab is a whole season of recurring money mowing your competitor's route instead. Here's where it leaks.",
    leaks: [
      { t: "You can't answer from the seat of a mower", b: "62% of calls go unanswered, and a crew heads-down cutting grass misses most of the spring rush. 85% of those callers never call back. And this isn't a one-time job. It's a season-long account worth $2,000-plus. The AI answers every call and text and books it while you keep mowing." },
      { t: "Homeowners hire whoever quotes first", b: "78% go with the first business that responds. Someone getting three lawn quotes signs with whoever texts back a price and an open slot first. The AI sends a quote and a booking link in seconds. You lock the account before the next crew even calls back." },
      { t: "You're running a call center from the truck", b: "'Do you do mulch?' 'What's your service area?' Every repeat question eats time you should spend billing. The AI handles them instantly and only flags real jobs. You stay productive. The phone stays handled." },
      { t: "Rain days and missed visits cost you drive-outs", b: "Reminders keep weekly clients confirmed, so you never drive to a locked gate. When rain forces a reschedule, the AI reshuffles the route and tells everyone. Reminders cut no-shows by up to 38%. Fewer wasted drives. Fuller days." },
      { t: "Reviews win the next house on the street", b: "88% of homeowners check reviews, and lawn care is won block by block. Neighbors hire the crew with the most 5-stars. The AI asks every happy client for a review AND a referral. One tidy yard turns into three." }
    ],
    bottomLine: "One missed spring quote is a season-long account gone. Call it $2,000-plus. Stack those up across a busy spring and it's serious money. The AI answers every call you can't, so that recurring revenue lands on YOUR route, not the other guy's."
  },
  plumbing: {
    opener: "Plumbing is an emergency business, and emergencies don't leave voicemails. A basement floods at 2am and that homeowner calls plumber after plumber until a human answers. The after-hours calls you sleep through? Those are the highest-margin jobs of the week. Here's where it leaks.",
    leaks: [
      { t: "The emergency goes to whoever answers", b: "62% of calls go unanswered and 85% of voicemail callers never call back. They're panicking. They dial the next plumber in ten seconds. Every missed emergency is a premium job gone. The AI answers 24/7 in your name, captures the emergency, and texts you the address while the competitor's phone is still ringing." },
      { t: "After-hours is your best-paying work", b: "35 to 40% of home-service calls come after hours, and weekend miss rates hit 41%. Those off-hours calls carry premium pricing. They're also the exact ones a tired owner misses. The AI never sleeps. The 2am burst pipe becomes a booked job instead of a lost one." },
      { t: "FAQ calls interrupt the work that pays", b: "Every 'do you do water heaters?' you take with your hands in a drain is a distraction that earns nothing. The AI answers the routine stuff and only pings you when there's real work to schedule. Your billable hours stay billable." },
      { t: "A no-show install is a wasted half-day", b: "Reminders cut no-shows by up to 38%. And the 48-hour reminder lets you refill a canceled slot instead of eating it. That's margin you recover automatically, without lifting a finger." },
      { t: "Reviews win 'plumber near me'", b: "88% read reviews first, and the plumber at the top of the map pack gets the call. The AI asks every customer for a review after the fix and drafts your replies. That's how you climb the rankings that send you the NEXT emergency." }
    ],
    bottomLine: "The 2am calls you sleep through are the best-paying jobs of the week. And they go to whoever answers first. Capture even a couple extra emergencies a week and this pays for itself many times over. It's awake when you can't be."
  },
  electrical: {
    opener: "Electrical work is urgent and high-trust. A sparking panel means a homeowner wants a calm, competent voice RIGHT NOW. And the calls you can't grab mid-install aren't small. Panel upgrades and EV chargers are $1,500 to $4,000 jobs. Here's where it leaks.",
    leaks: [
      { t: "Safety calls won't wait for voicemail", b: "62% of calls go unanswered. 85% of voicemail callers never call back. Someone smelling burning plastic hires whoever picks up and calms them down. The AI answers instantly, 24/7, and books the call before they dial the next electrician." },
      { t: "Big upgrades start on the phone", b: "78% hire the first to respond, and panel upgrades, rewires, and EV chargers are $1,500 to $4,000 decisions. Miss the call, miss the project. The AI responds in seconds and books it straight onto your calendar." },
      { t: "Stop answering permit questions on a ladder", b: "Permits, timelines, rates. Every routine question pulls you off paying work. The AI handles them and only escalates real jobs. Your hands stay on the tools." },
      { t: "Empty slots from no-shows are lost days", b: "Scheduled work that no-shows is a day gone. Reminders cut no-shows by up to 38% and let you backfill the cancel early. Every slot keeps earning." },
      { t: "Reviews earn the trust to work in someone's walls", b: "88% read reviews before they let an electrician into their home. The AI collects 5-stars after every job and drafts the replies. That reputation books the NEXT upgrade." }
    ],
    bottomLine: "The panel-upgrade and EV-charger calls you can't grab mid-job are $1,500-plus each. Capture ONE extra a month and this covers itself several times over. Plus it answers every safety call the second it comes in."
  },
  pest: {
    opener: "Pest control runs on urgency and recurring revenue. 'I just saw roaches' is an emotional, same-day call. And one of those is a quarterly contract worth $600-plus a year. Miss it, lose it, in one ring. Here's where it leaks.",
    leaks: [
      { t: "Pest calls are instant and emotional", b: "62% of calls go unanswered. 85% of voicemail callers never call back. Someone who just saw a mouse will NOT wait. They call the next company before they hang up. The AI answers every call, books the treatment, and saves the recurring account." },
      { t: "First to answer wins the contract", b: "78% hire the first responder. A pest call is a 'today' want, and whoever picks up and offers today gets it. The AI responds in seconds, 24/7, and books before the competitor calls back." },
      { t: "FAQ calls eat your techs' day", b: "'Do you treat termites?' 'Is it safe for pets?' Every repeat question pulls a tech off the route. The AI handles them and books the inspection. Techs keep treating, not talking." },
      { t: "Quarterly customers drift off the calendar", b: "Recurring revenue only works if customers stay on the schedule. Automated reminders confirm quarterly treatments (no-shows down up to 38%) and reschedule the rain-outs. The contracts that compound stay protected." },
      { t: "Reviews drive 'exterminator near me'", b: "88% read reviews first. The AI asks every happy customer for a 5-star review and a referral. You sit at the top of local search the second the next person spots a roach." }
    ],
    bottomLine: "A missed pest call isn't a one-time job. It's a $600-plus-a-year recurring account walking to a competitor. The AI answers them all and keeps your quarterly customers on schedule. Revenue that compounds instead of leaks."
  },
  cleaning: {
    opener: "A house cleaning business has a trap built into it. The busier you are (inside homes, cleaning), the more booking calls go to voicemail. And someone shopping for a cleaner hires whoever calls back first with a price and a slot. Here's where it leaks.",
    leaks: [
      { t: "You're cleaning, not answering", b: "62% of calls go unanswered, and a crew with their hands in sinks misses the quote calls. 85% never call back. And these aren't one-offs. They're recurring weekly or biweekly clients. The AI answers, quotes the basics, and books while you keep cleaning." },
      { t: "First price and first slot wins", b: "78% hire the first to respond. People compare a couple cleaners and go with whoever replies first. The AI sends a quote and open times in seconds and locks the recurring account." },
      { t: "Stop quoting '3 bed, 2 bath' all day", b: "Repeat pricing questions are unpaid time. The AI quotes from a room count or a quick video walkthrough and books it. No in-home estimate visit needed." },
      { t: "Locked-door drive-outs waste a whole crew", b: "Nothing burns a crew like rolling up to a locked, empty house. Reminders cut no-shows by up to 38% and confirm access the day before. Fewer wasted trips. Fuller schedule." },
      { t: "Reviews earn the trust to hold a key", b: "88% read reviews, and people vet a cleaner hard before they hand over a key. The AI collects 5-stars after every clean and asks for referrals. That trust fills your route." }
    ],
    bottomLine: "Every booking call you miss while cleaning is a recurring client (weekly or biweekly money) hiring whoever answered first. The AI catches them all and confirms your recurring visits. Your route stays full, and you never hire an office manager."
  },
  painting: {
    opener: "Painting is quote-heavy and comparison-shopped. Homeowners get two or three bids, and the painter who responds last is the one they cross off. Worse? Most painters never follow up on a quote that goes quiet. Here's where it leaks.",
    leaks: [
      { t: "Slow responders get crossed off the list", b: "62% of calls go unanswered, and the painter who can't pick up from a job site loses the bid. 78% hire the first to respond. On a $3,000 project, that's a real loss every single time. The AI answers every call and books the walkthrough first." },
      { t: "The follow-up nobody does", b: "Most painters never chase a quote that didn't answer. That's money left on the table, every week. The AI auto-follows-up on every open quote until it's a yes or a no. The maybes stop dying in your inbox." },
      { t: "You're spending billable days on tire-kickers", b: "Driving out to measure a tire-kicker's job costs you a billable day. The AI qualifies the project first (interior or exterior, rooms, timeline) and can even estimate from photos. You only walk through real jobs." },
      { t: "A no-show estimate is a wasted cross-town trip", b: "Reminders cut no-shows by up to 38% and backfill the cancels. Your estimating time stays productive instead of burned on a drive to nobody." },
      { t: "Reviews and before/afters sell the next job", b: "88% read reviews, and painting sells on proof. The AI collects 5-stars and photos from happy clients and drafts the replies. Finished jobs become the portfolio that wins the next one." }
    ],
    bottomLine: "On $3,000 projects, ONE extra close a month is huge. And most painters lose deals for two dumb reasons: they answer last and they never follow up. The AI fixes both automatically. The bids you already get actually turn into jobs."
  },
  auto: {
    opener: "An auto shop loses the most new customers on its busiest days. The bays are loud and full. The phone rings with 'is my car ready?' calls that bury the brand-new business. And the first-timers? They hit voicemail and call the shop down the road. Here's where it leaks.",
    leaks: [
      { t: "Busy bays mean missed new customers", b: "62% of calls go unanswered, and a slammed front desk can't catch them. 85% of voicemail callers never call back. The AI answers every call, handles the status questions, and books the new work. A busy day stops costing you tomorrow's customers." },
      { t: "First shop to give a time wins", b: "78% hire the first to respond. A driver with a check-engine light books whoever answers and offers a slot. The AI answers instantly and books the appointment before they try the next shop." },
      { t: "'Is my car ready?' clogs the front desk", b: "Status calls crowd out new business. The AI handles 'is it ready' and 'how much longer' automatically. Your service writer gets freed up for customers who are actually buying." },
      { t: "No-shows and forgotten service intervals", b: "Automated reminders keep appointments (no-shows down up to 38%) and nudge customers when an oil change or inspection is due. Your existing list turns into repeat revenue." },
      { t: "Reviews win 'mechanic near me'", b: "88% read reviews, and in auto repair trust is everything. The AI collects 5-stars after every visit and drafts the replies. Yours becomes the shop drivers pick first." }
    ],
    bottomLine: "An auto shop loses the most new customers exactly when it's busiest. The AI answers BOTH the status calls and the new ones. A full bay stops quietly costing you next week's work."
  },
  law: {
    opener: "For a small firm, especially personal injury and family law, the prospect is calling three or four offices. And the data is blunt: the first firm to respond usually signs the client. The after-hours and overflow calls that hit voicemail are retainers worth thousands, going to the firm across town. Here's where it leaks (and how to capture it inside bar rules).",
    leaks: [
      { t: "First firm to respond signs the case", b: "78% go with the first to respond, and injury and family-law leads are shopping multiple firms. A voicemail loses a case worth thousands. A compliant AI intake line answers 24/7 in your firm's name and books the consult before the competitor calls back." },
      { t: "After-hours intake is lost revenue", b: "People research lawyers at night and on weekends, exactly when no one's at the desk. 62% of calls go unanswered industry-wide. The AI captures every intake around the clock so qualified cases stop slipping away." },
      { t: "Paralegals drown in unqualified calls", b: "Informational and out-of-scope calls bury your staff. The AI screens the matter type and routes only qualified intakes. Your team spends time on cases that fit your practice." },
      { t: "Consult no-shows are billable time gone", b: "A missed consultation is revenue lost. Reminders cut no-shows by up to 38% and free the slot for another prospect. The attorney's calendar stays productive." },
      { t: "Reviews build credibility for a high-trust choice", b: "88% read reviews before they choose a firm. The AI requests reviews (inside your state bar's rules) and drafts the replies. That credibility wins the next client, and an attorney reviews everything." }
    ],
    bottomLine: "In PI and family law, the first firm to respond usually signs the client. Your competitors aren't better lawyers. They just answered first. A compliant AI intake line captures the after-hours and overflow retainers you're losing right now. (All review and outreach automation must follow your state bar's advertising and solicitation rules.)"
  },
  gym: {
    opener: "A gym is a recurring-revenue business, and the phone, the texts, and the DMs are where new members are won. Every 'how much is it?' that goes unanswered while your team is coaching on the floor is a member (worth hundreds to thousands over their life) signing up down the street. Here's where it leaks.",
    leaks: [
      { t: "A missed inquiry is a lost membership", b: "62% of calls to local businesses go unanswered, and gyms pile missed DMs and texts on top. 85% of voicemail callers never call back. And this isn't a one-time sale. It's a recurring member worth a thousand-plus a year. The AI answers every call, text, and DM in your gym's name and books the tour." },
      { t: "Speed to lead on trials and tours", b: "78% join the first place that responds. Someone ready to start wants to book a tour or trial RIGHT NOW, and they go with whoever answers first. The AI responds in seconds, day or night, and gets them on the calendar before they cool off." },
      { t: "Your coaches are stuck manning the desk", b: "Hours, class times, pricing. Every question your team fields is time not coaching and retaining members. The AI handles the FAQs and books the tour. Your staff stays on the floor, where they add value." },
      { t: "No-show tours and quiet members cost growth", b: "A no-show tour is a lost conversion, and a member who quietly stops coming is about to cancel. Reminders cut no-shows by up to 38%. And automated win-backs re-engage at-risk members before they're gone." },
      { t: "Reviews fill the class and referrals keep it full", b: "88% read reviews before they join a gym, and word-of-mouth drives the rest. The AI asks happy members for reviews and referrals at the right moment. Your best members become your best marketing." }
    ],
    bottomLine: "Memberships compound. A gym missing 8 inquiries a week, each a member worth $1,000-plus a year, is leaving serious recurring revenue on the table. The AI answers every inquiry, books the tour, and keeps members engaged. The studio grows instead of leaking."
  },
  therapist: {
    opener: "Private practice is built on trust, and it usually starts with one hard phone call. When someone finally works up the courage to reach out and gets a voicemail, they often don't try the next name on the list. So the stakes here aren't just a booked session. They're whether a person gets care at all. Here's where practices lose clients, and how automation helps when it's done with care.",
    leaks: [
      { t: "A voicemail can end the search for help", b: "When most calls to a small practice go unanswered and someone in distress hits voicemail, they rarely leave a message and try again. A warm voice that answers, day or night, can be the difference in whether they get care. The AI answers gently and books the first session, so no one reaching out falls through the cracks." },
      { t: "Warmth and speed matter most when reaching out is hardest", b: "The practice that responds first, and kindly, books the client. The AI answers immediately, gathers the basics gently, and schedules the intake. The person doesn't have to muster the courage twice." },
      { t: "Clinicians shouldn't live at the front desk", b: "Time spent returning insurance and availability calls is time not spent with clients. The AI handles intake and scheduling so therapists focus on care, not admin." },
      { t: "No-shows break continuity of care", b: "A missed session hurts the client's progress and the practice's calendar. Reminders cut no-shows by up to 38%, and open slots are gently re-offered to clients on the waitlist who need to be seen sooner." },
      { t: "Trust is chosen on reputation", b: "People choose a therapist carefully, and reviews and responsiveness shape that choice. The AI requests feedback ethically (inside licensing rules) and keeps clients gently engaged between sessions." }
    ],
    bottomLine: "For a counseling practice, answering warmly is both the right thing and the sustainable thing. Fewer people slip away in a hard moment. The caseload is fuller and steadier. And clinicians are freed to do the work only they can do. (Any intake automation must be HIPAA-handled, never diagnose, and escalate a crisis to the 988 Lifeline.)"
  }
};
