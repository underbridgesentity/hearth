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

/** A timestamp → a live relative label: "just now" / "5m ago" / "3h ago" /
 *  "Yesterday" / "4d ago" / "12 Jul". Derived from created_at so it never goes stale. */
export function relativeTime(ts: string | Date | null | undefined): string {
  if (!ts) return '';
  const then = new Date(ts).getTime();
  if (Number.isNaN(then)) return '';
  const diffMin = Math.floor((Date.now() - then) / 60000);
  if (diffMin < 1) return 'just now';
  if (diffMin < 60) return `${diffMin}m ago`;
  const h = Math.floor(diffMin / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d === 1) return 'Yesterday';
  if (d < 7) return `${d}d ago`;
  const dt = new Date(then + SAST_OFFSET_MS);
  return `${dt.getUTCDate()} ${MON[dt.getUTCMonth()]}`;
}
