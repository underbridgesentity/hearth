import 'dotenv/config';
import { initSchema, pool } from './db.js';

async function main() {
  console.log('[croft] creating schema…');
  await initSchema();
  console.log('[croft] schema ready ✓');
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
