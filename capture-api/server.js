// capture-api — partner registration + demo-event capture for the getthedrix sites.
// CORS-enabled so services.getthedrix.com and partners.wintechpartners.com can POST to it.
const http = require('http');
const fs = require('fs');
const path = require('path');
const { initDb, upsertRep, logEvent, dashboard } = require('./db.js');

const PORT = process.env.PORT || 3000;
const ADMIN_KEY = process.env.ADMIN_KEY || '';
const CUSTOMER_BASE_URL = (process.env.CUSTOMER_BASE_URL || 'https://services.getthedrix.com').replace(/\/$/, '');

function send(res, code, obj, extra) {
  res.writeHead(code, Object.assign({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, x-admin-key',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  }, extra || {}));
  res.end(JSON.stringify(obj));
}

function body(req) {
  return new Promise((resolve) => {
    let d = '';
    req.on('data', (c) => { d += c; if (d.length > 1e5) req.destroy(); });
    req.on('end', () => { try { resolve(JSON.parse(d || '{}')); } catch { resolve({}); } });
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  const p = url.pathname;

  if (req.method === 'OPTIONS') return send(res, 204, {});

  try {
    if (req.method === 'POST' && p === '/api/reps') {
      const b = await body(req);
      if (!b.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(b.email)) return send(res, 400, { error: 'valid email required' });
      const rep = await upsertRep(b);
      let link = `${CUSTOMER_BASE_URL}/?ref=${encodeURIComponent(rep.email)}`;
      if (rep.trade) link += `&trade=${rep.trade}`;
      return send(res, 200, { rep, link });
    }

    if (req.method === 'POST' && p === '/api/track') {
      const b = await body(req);
      const allowed = new Set(['visit', 'demo_start', 'calc', 'lead']);
      if (!allowed.has(b.type)) return send(res, 400, { error: 'bad type' });
      await logEvent({ ref: b.ref, type: b.type, payload: b.payload });
      return send(res, 200, { ok: true });
    }

    if (req.method === 'GET' && p === '/api/dashboard') {
      const key = url.searchParams.get('key') || req.headers['x-admin-key'];
      if (!ADMIN_KEY || key !== ADMIN_KEY) return send(res, 401, { error: 'unauthorized' });
      return send(res, 200, await dashboard());
    }

    if (req.method === 'GET' && p === '/healthz') return send(res, 200, { ok: true });

    if (req.method === 'GET' && (p === '/' || p === '/dashboard')) {
      return fs.readFile(path.join(__dirname, 'dashboard.html'), (err, data) => {
        if (err) return send(res, 404, { error: 'not found' });
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
      });
    }

    send(res, 404, { error: 'not found' });
  } catch (e) {
    console.error('[err]', e.message);
    send(res, 500, { error: 'server error' });
  }
});

initDb().catch((e) => console.error('[db] init failed', e.message)).finally(() => {
  server.listen(PORT, '0.0.0.0', () => console.log('capture-api on port ' + PORT));
});
