import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { authRouter, googleConfigured } from './auth.js';
import { dataRouter } from './data.js';

// The configured Express app, with NO listen / static / schema work.
// Used both by the local server (index.ts) and the Vercel function (api/).
const APP_URL = process.env.APP_URL || 'http://localhost:5173';
const isProd = process.env.NODE_ENV === 'production';

export const app = express();

app.use(express.json());
app.use(cookieParser());
// Same-origin in production (one domain serves app + /api), so reflecting the
// origin with credentials is safe; in dev we allow the Vite origin explicitly.
app.use(cors({ origin: isProd ? true : APP_URL, credentials: true }));

app.get('/api/health', (_req, res) => res.json({ ok: true, google: googleConfigured }));
app.use('/api/auth', authRouter);
app.use('/api', dataRouter);

export { googleConfigured };
export default app;
