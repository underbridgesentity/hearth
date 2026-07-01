import { useIsDesktop } from '../lib/useMedia';

const grotesk = "'Space Grotesk', sans-serif";
const INK = '#101426';
const BLUE = '#3B5BFF';
const MUTED = '#5A6472';

function Logo({ size = 34 }: { size?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <img src="/icons/icon-192.png" width={size} height={size} alt="" style={{ borderRadius: size * 0.28, display: 'block', boxShadow: '0 4px 12px rgba(31,153,255,0.28)' }} />
      <span style={{ fontFamily: grotesk, fontWeight: 700, fontSize: size * 0.62, letterSpacing: '-0.01em' }}>Croft</span>
    </div>
  );
}

function Illus({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }} />;
}

export default function Landing({ onStart, onLogin }: { onStart: () => void; onLogin: () => void }) {
  const desktop = useIsDesktop();
  const pad = desktop ? '0 40px' : '0 22px';
  const maxW = 1080;

  const primaryBtn: React.CSSProperties = { border: 'none', background: BLUE, color: '#fff', fontFamily: grotesk, fontWeight: 700, fontSize: 15.5, padding: '13px 24px', borderRadius: 14, cursor: 'pointer', boxShadow: '0 8px 22px rgba(59,91,255,0.34)' };
  const ghostBtn: React.CSSProperties = { border: '1.5px solid #E4E9F2', background: '#fff', color: INK, fontFamily: grotesk, fontWeight: 700, fontSize: 15.5, padding: '12px 22px', borderRadius: 14, cursor: 'pointer' };

  const feature = (title: string, body: string, bullets: string[], img: string, flip: boolean) => (
    <div style={{ display: 'flex', flexDirection: desktop ? 'row' : 'column', alignItems: 'center', gap: desktop ? 56 : 24, margin: desktop ? '68px 0' : '44px 0' }}>
      <div style={{ flex: 1, order: desktop && flip ? 2 : 1 }}>
        <h2 style={{ fontFamily: grotesk, fontWeight: 700, fontSize: desktop ? 32 : 26, letterSpacing: '-0.02em', margin: '0 0 12px', lineHeight: 1.15 }}>{title}</h2>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: MUTED, margin: '0 0 18px' }}>{body}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {bullets.map((b) => (
            <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: INK, fontWeight: 500 }}>
              <span style={{ flexShrink: 0, marginTop: 2, width: 20, height: 20, borderRadius: '50%', background: 'rgba(59,91,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke={BLUE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1, order: desktop && flip ? 1 : 2, width: '100%' }}>
        <Illus src={img} alt={title} />
      </div>
    </div>
  );

  const smallFeatures = [
    { t: 'Real reminders', d: 'Push + email nudges so nothing slips — on the day it matters.' },
    { t: 'Shared calendar', d: 'Subscribe once; Croft events show in Apple or Google Calendar.' },
    { t: 'Invite your family', d: 'Everyone gets their own login and the same live home.' },
    { t: 'Money, together', d: 'Bills, budgets and who-owes-who — no awkward maths.' },
    { t: 'Passcode lock', d: 'Keep your home private on shared devices.' },
    { t: 'Works everywhere', d: 'Phone, tablet or desktop — installable, always in sync.' },
  ];

  return (
    <div className="croft-scroll" style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: '#fff', color: INK }}>
      {/* NAV */}
      <div style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid #EEF1F7' }}>
        <div style={{ maxWidth: maxW, margin: '0 auto', padding: pad, height: 66, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo size={30} />
          <div style={{ display: 'flex', alignItems: 'center', gap: desktop ? 10 : 8 }}>
            <button onClick={onLogin} style={{ ...ghostBtn, padding: desktop ? '10px 18px' : '9px 14px', fontSize: 14.5 }}>Log in</button>
            <button onClick={onStart} style={{ ...primaryBtn, padding: desktop ? '11px 20px' : '10px 16px', fontSize: 14.5 }}>Get started</button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ background: 'linear-gradient(180deg,#F5F7FD 0%,#fff 100%)' }}>
        <div style={{ maxWidth: maxW, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', flexDirection: desktop ? 'row' : 'column', alignItems: 'center', gap: desktop ? 40 : 8, paddingTop: desktop ? 56 : 32, paddingBottom: desktop ? 40 : 8 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(59,91,255,0.09)', color: BLUE, fontWeight: 700, fontSize: 13, padding: '7px 14px', borderRadius: 100, marginBottom: 18 }}>
                🏡 For your whole family
              </div>
              <h1 style={{ fontFamily: grotesk, fontWeight: 700, fontSize: desktop ? 52 : 36, lineHeight: 1.06, letterSpacing: '-0.03em', margin: '0 0 18px' }}>
                One calm home for<br />your whole family.
              </h1>
              <p style={{ fontSize: desktop ? 19 : 16.5, lineHeight: 1.55, color: MUTED, margin: '0 0 26px', maxWidth: 460 }}>
                Shared dates, reminders, lists, goals and money — all in one place, off your group chats. Plan together, stay organized, live better.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button onClick={onStart} style={{ ...primaryBtn, fontSize: 16 }}>Get started — it’s free</button>
                <a href="#features" style={{ ...ghostBtn, textDecoration: 'none', display: 'inline-block' }}>See how it works</a>
              </div>
              <div style={{ marginTop: 18, fontSize: 13.5, color: '#8A93A6', fontWeight: 500 }}>No credit card · Works on any device</div>
            </div>
            <div style={{ flex: 1, width: '100%' }}>
              <Illus src="/illustrations/hero-home.jpg" alt="A family and their home" />
            </div>
          </div>
        </div>
      </div>

      {/* TAGLINE STRIP */}
      <div style={{ background: BLUE, color: '#fff' }}>
        <div style={{ maxWidth: maxW, margin: '0 auto', padding: `${desktop ? 22 : 18}px ${desktop ? 40 : 22}px`, textAlign: 'center', fontFamily: grotesk, fontWeight: 700, fontSize: desktop ? 18 : 15, letterSpacing: '0.01em' }}>
          Plan together. &nbsp;·&nbsp; Stay organized. &nbsp;·&nbsp; Live better.
        </div>
      </div>

      {/* FEATURES */}
      <div id="features" style={{ maxWidth: maxW, margin: '0 auto', padding: pad }}>
        <div style={{ textAlign: 'center', paddingTop: desktop ? 64 : 44 }}>
          <h2 style={{ fontFamily: grotesk, fontWeight: 700, fontSize: desktop ? 36 : 28, letterSpacing: '-0.02em', margin: '0 0 10px' }}>Everything a household runs on</h2>
          <p style={{ fontSize: 16.5, color: MUTED, maxWidth: 520, margin: '0 auto', lineHeight: 1.55 }}>Croft brings the moving parts of family life into one shared, always-in-sync home.</p>
        </div>

        {feature(
          'Your family, on the same page',
          'A shared calendar and to-dos everyone can see and edit — so appointments, school runs and chores never live in one person’s head.',
          ['Shared events, reminders & important dates', 'To-dos, shopping lists & family goals', 'Nudge each other with a tap'],
          '/illustrations/app-in-hand.jpg', false
        )}
        {feature(
          'Never drop the ball',
          'Real reminders reach you and the family the moment they matter — as a push notification and a friendly morning email digest.',
          ['Push notifications on any device', 'Daily summary of what’s due', 'Subscribe your calendar app'],
          '/illustrations/chores.jpg', true
        )}
        {feature(
          'Money, handled together',
          'See what’s paid, what’s still due, and who owes who — at a glance, without the awkward maths.',
          ['Bills with real due dates & overdue alerts', 'Budgets and savings goals', 'Settle up who-owes-who'],
          '/illustrations/work.jpg', false
        )}
      </div>

      {/* HOW IT WORKS */}
      <div style={{ background: '#F5F7FD' }}>
        <div style={{ maxWidth: maxW, margin: '0 auto', padding: `${desktop ? 60 : 44}px ${desktop ? 40 : 22}px` }}>
          <h2 style={{ fontFamily: grotesk, fontWeight: 700, fontSize: desktop ? 32 : 26, letterSpacing: '-0.02em', textAlign: 'center', margin: '0 0 34px' }}>Up and running in minutes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: desktop ? 'repeat(3,1fr)' : '1fr', gap: 18 }}>
            {[
              { n: '1', t: 'Create your home', d: 'Sign up and your household is ready in seconds.' },
              { n: '2', t: 'Invite your family', d: 'Send a link or email — everyone gets their own login.' },
              { n: '3', t: 'Stay in sync', d: 'Add dates, tasks and bills — updates reach everyone live.' },
            ].map((s) => (
              <div key={s.n} style={{ background: '#fff', borderRadius: 20, padding: 24, boxShadow: '0 2px 12px rgba(16,20,38,0.05)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: BLUE, color: '#fff', fontFamily: grotesk, fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>{s.n}</div>
                <div style={{ fontFamily: grotesk, fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{s.t}</div>
                <div style={{ fontSize: 14.5, color: MUTED, lineHeight: 1.55 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SMALL FEATURE GRID */}
      <div style={{ maxWidth: maxW, margin: '0 auto', padding: `${desktop ? 62 : 44}px ${desktop ? 40 : 22}px` }}>
        <div style={{ display: 'grid', gridTemplateColumns: desktop ? 'repeat(3,1fr)' : '1fr', gap: 16 }}>
          {smallFeatures.map((f) => (
            <div key={f.t} style={{ border: '1px solid #EEF1F7', borderRadius: 18, padding: 22 }}>
              <div style={{ fontFamily: grotesk, fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{f.t}</div>
              <div style={{ fontSize: 14.5, color: MUTED, lineHeight: 1.55 }}>{f.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={{ maxWidth: maxW, margin: '0 auto', padding: `0 ${desktop ? 40 : 22}px ${desktop ? 72 : 48}px` }}>
        <div style={{ background: 'linear-gradient(135deg,#3B5BFF 0%,#1F99FF 100%)', borderRadius: 28, padding: desktop ? '56px 48px' : '40px 26px', textAlign: 'center', color: '#fff', boxShadow: '0 20px 50px rgba(59,91,255,0.35)' }}>
          <h2 style={{ fontFamily: grotesk, fontWeight: 700, fontSize: desktop ? 38 : 28, letterSpacing: '-0.02em', margin: '0 0 12px', lineHeight: 1.1 }}>Bring your whole home together</h2>
          <p style={{ fontSize: 17, opacity: 0.92, margin: '0 auto 26px', maxWidth: 440, lineHeight: 1.55 }}>Join the families running a calmer, more organized home with Croft.</p>
          <button onClick={onStart} style={{ border: 'none', background: '#fff', color: BLUE, fontFamily: grotesk, fontWeight: 700, fontSize: 16.5, padding: '15px 32px', borderRadius: 14, cursor: 'pointer', boxShadow: '0 10px 26px rgba(0,0,0,0.18)' }}>Get started — it’s free</button>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: '1px solid #EEF1F7' }}>
        <div style={{ maxWidth: maxW, margin: '0 auto', padding: `${desktop ? 34 : 26}px ${desktop ? 40 : 22}px`, display: 'flex', flexDirection: desktop ? 'row' : 'column', alignItems: desktop ? 'center' : 'flex-start', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <Logo size={26} />
            <div style={{ fontSize: 13, color: '#8A93A6', marginTop: 8 }}>Plan together. Stay organized. Live better.</div>
          </div>
          <div style={{ display: 'flex', gap: 22, fontSize: 14, fontWeight: 600 }}>
            <a href="/privacy" style={{ color: MUTED, textDecoration: 'none' }}>Privacy</a>
            <a href="/support" style={{ color: MUTED, textDecoration: 'none' }}>Support</a>
            <button onClick={onLogin} style={{ border: 'none', background: 'none', color: MUTED, fontWeight: 600, fontSize: 14, cursor: 'pointer', padding: 0 }}>Log in</button>
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: 12.5, color: '#A6AEC0', paddingBottom: 24 }}>© 2026 Croft · croftapp.co.za</div>
      </div>
    </div>
  );
}
