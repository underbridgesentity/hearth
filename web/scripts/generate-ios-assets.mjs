// Generate branded iOS app icon + splash (blue tile, white house) with zero deps,
// writing straight into the generated ios/ Xcode asset catalog.
import zlib from 'node:zlib';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ios = path.resolve(__dirname, '../../ios/App/App/Assets.xcassets');

const BLUE = [0x3b, 0x5b, 0xff];
const WHITE = [0xff, 0xff, 0xff];

function tri(px, py, ax, ay, bx, by, cx, cy) {
  const d1 = (px - bx) * (ay - by) - (ax - bx) * (py - by);
  const d2 = (px - cx) * (by - cy) - (bx - cx) * (py - cy);
  const d3 = (px - ax) * (cy - ay) - (cx - ax) * (py - ay);
  return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
}
function house(u, v) {
  const roof = tri(u, v, 12, 3.2, 2.6, 11.6, 21.4, 11.6);
  const body = u >= 5 && u <= 19 && v >= 11.2 && v <= 20.4;
  const door = u >= 10 && u <= 14 && v >= 14.6 && v <= 20.6;
  return (roof || body) && !door;
}
// Solid background (no alpha — iOS requires opaque app icons), house centered at `frac` scale.
function render(N, frac, bg = BLUE, fg = WHITE) {
  const buf = Buffer.alloc(N * N * 4);
  const inset = ((1 - frac) / 2) * N;
  const span = frac * N;
  const s = span / 24;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      let c = bg;
      const hx = x - inset, hy = y - inset;
      if (hx >= 0 && hy >= 0 && hx < span && hy < span && house(hx / s, hy / s)) c = fg;
      const i = (y * N + x) * 4;
      buf[i] = c[0]; buf[i + 1] = c[1]; buf[i + 2] = c[2]; buf[i + 3] = 255;
    }
  }
  return buf;
}

const CRC = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
  return (b) => { let c = 0xffffffff; for (let i = 0; i < b.length; i++) c = t[(c ^ b[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
})();
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4); crc.writeUInt32BE(CRC(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crc]);
}
function encodePng(N, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(N, 0); ihdr.writeUInt32BE(N, 4);
  ihdr[8] = 8; ihdr[9] = 6;
  const raw = Buffer.alloc((N * 4 + 1) * N);
  for (let y = 0; y < N; y++) { raw[y * (N * 4 + 1)] = 0; rgba.copy(raw, y * (N * 4 + 1) + 1, y * N * 4, (y + 1) * N * 4); }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

// App icon: 1024, house at 66% on solid blue.
writeFileSync(path.join(ios, 'AppIcon.appiconset/AppIcon-512@2x.png'), encodePng(1024, render(1024, 0.66)));
console.log('wrote AppIcon 1024');

// Splash: 2732, small white house on blue (light + dark share the brand).
const splash = encodePng(2732, render(2732, 0.2));
for (const f of ['splash-2732x2732.png', 'splash-2732x2732-1.png', 'splash-2732x2732-2.png']) {
  writeFileSync(path.join(ios, 'Splash.imageset', f), splash);
  console.log('wrote', f);
}
