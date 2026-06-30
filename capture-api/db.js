// db.js — Railway Postgres for partner + demo capture. Falls back to in-memory if no DATABASE_URL.
const { Pool } = require('pg');

const hasDb = Boolean(process.env.DATABASE_URL);
let pool = null;
const mem = { reps: new Map(), events: [] };

if (hasDb) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes('railway') ? { rejectUnauthorized: false } : false,
  });
  pool.on('error', (e) => console.error('[db] idle error', e.message));
}

async function initDb() {
  if (!hasDb) { console.warn('[db] no DATABASE_URL — using in-memory store (resets on restart)'); return; }
  await pool.query(`
    CREATE TABLE IF NOT EXISTS reps (
      email TEXT PRIMARY KEY,
      first_name TEXT, last_name TEXT, company TEXT, trade TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      rep_email TEXT, type TEXT NOT NULL, payload JSONB,
      created_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE INDEX IF NOT EXISTS idx_events_rep ON events (rep_email);
  `);
  console.log('[db] Postgres ready');
}

async function upsertRep(r) {
  const email = String(r.email || '').trim().toLowerCase();
  if (!email) throw new Error('email required');
  const rec = { email, firstName: r.firstName || null, lastName: r.lastName || null, company: r.company || null, trade: r.trade || null };
  if (!hasDb) { mem.reps.set(email, rec); return rec; }
  await pool.query(
    `INSERT INTO reps (email, first_name, last_name, company, trade) VALUES ($1,$2,$3,$4,$5)
     ON CONFLICT (email) DO UPDATE SET
       first_name = COALESCE(EXCLUDED.first_name, reps.first_name),
       last_name  = COALESCE(EXCLUDED.last_name,  reps.last_name),
       company    = COALESCE(EXCLUDED.company,    reps.company),
       trade      = COALESCE(EXCLUDED.trade,      reps.trade)`,
    [email, rec.firstName, rec.lastName, rec.company, rec.trade]
  );
  return rec;
}

async function logEvent(e) {
  const ref = e.ref ? String(e.ref).trim().toLowerCase() : null;
  if (!hasDb) { mem.events.push({ rep_email: ref, type: e.type, payload: e.payload || null, created_at: new Date().toISOString() }); return; }
  await pool.query(`INSERT INTO events (rep_email, type, payload) VALUES ($1,$2,$3)`,
    [ref, e.type, e.payload ? JSON.stringify(e.payload) : null]);
}

async function dashboard() {
  if (!hasDb) {
    const reps = [...mem.reps.values()].map((r) => {
      const evs = mem.events.filter((x) => x.rep_email === r.email);
      const c = (t) => evs.filter((x) => x.type === t).length;
      return { ...r, visits: c('visit'), demos: c('demo_start'), calcs: c('calc'),
        lastSeen: evs.length ? evs[evs.length - 1].created_at : null };
    });
    const totals = {};
    mem.events.forEach((e) => (totals[e.type] = (totals[e.type] || 0) + 1));
    return { reps, totals };
  }
  const { rows: reps } = await pool.query(`
    SELECT r.email, r.first_name AS "firstName", r.last_name AS "lastName", r.company, r.trade,
           COUNT(*) FILTER (WHERE e.type='visit')      AS visits,
           COUNT(*) FILTER (WHERE e.type='calc')       AS calcs,
           COUNT(*) FILTER (WHERE e.type='demo_start') AS demos,
           MAX(e.created_at) AS "lastSeen"
    FROM reps r LEFT JOIN events e ON e.rep_email = r.email
    GROUP BY r.email, r.first_name, r.last_name, r.company, r.trade
    ORDER BY visits DESC NULLS LAST, r.created_at DESC`);
  const { rows: tr } = await pool.query(`SELECT type, COUNT(*)::int n FROM events GROUP BY type`);
  const totals = {};
  tr.forEach((t) => (totals[t.type] = t.n));
  return { reps, totals };
}

module.exports = { initDb, upsertRep, logEvent, dashboard, hasDb };
