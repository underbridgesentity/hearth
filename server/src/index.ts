import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { initSchema } from './db.js';
import app, { googleConfigured } from './app.js';

// Local development + traditional (single-service) hosting entry point.
// On Vercel this file is NOT used — the app is served via api/ + static CDN.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3001);
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  const webDist = path.resolve(__dirname, '../../web/dist');
  app.use(express.static(webDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(webDist, 'index.html'));
  });
}

async function main() {
  await initSchema();
  app.listen(PORT, () => {
    console.log(`[hearth] API listening on http://localhost:${PORT}`);
    console.log(`[hearth] Google sign-in: ${googleConfigured ? 'configured' : 'not configured (email works)'}`);
  });
}

main().catch((e) => {
  console.error('[hearth] failed to start', e);
  process.exit(1);
});
