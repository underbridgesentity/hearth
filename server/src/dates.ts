// Date helpers. The app serves South African households (SAST = UTC+2, no DST),
// so "today" is computed against that local calendar day.
const SAST_OFFSET_MS = 2 * 60 * 60 * 1000;

function isoOf(ms: number): string {
  return new Date(ms + SAST_OFFSET_MS).toISOString().slice(0, 10);
}

export function sastToday(): string {
  return isoOf(Date.now());
}
export function sastPlus(days: number): string {
  return isoOf(Date.now() + days * 86_400_000);
}

const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** yyyy-mm-dd → a friendly label: "Today" / "Tomorrow" / "Wed 15 Jul". */
export function formatDateLabel(iso: string | null | undefined): string {
  if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return '';
  if (iso === sastToday()) return 'Today';
  if (iso === sastPlus(1)) return 'Tomorrow';
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return `${WD[dt.getUTCDay()]} ${d} ${MON[m - 1]}`;
}

export const isoRe = /^\d{4}-\d{2}-\d{2}$/;
