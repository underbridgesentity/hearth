const grotesk = "'Space Grotesk', sans-serif";
const SUPPORT_EMAIL = 'support@croftapp.co.za';
const UPDATED = '1 July 2026';

function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="croft-scroll" style={{ position: 'absolute', inset: 0, background: '#F3F5FB', overflowY: 'auto' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 64px' }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none', color: '#101426', marginBottom: 28 }}>
          <img src="/icons/icon-192.png" width={30} height={30} alt="" style={{ borderRadius: 8, display: 'block' }} />
          <span style={{ fontFamily: grotesk, fontWeight: 700, fontSize: 19 }}>Croft</span>
        </a>
        {children}
      </div>
    </div>
  );
}

const h1: React.CSSProperties = { fontFamily: grotesk, fontWeight: 700, fontSize: 30, letterSpacing: '-0.02em', margin: '0 0 6px' };
const meta: React.CSSProperties = { color: '#8A93A6', fontSize: 13.5, margin: '0 0 28px' };
const h2: React.CSSProperties = { fontFamily: grotesk, fontWeight: 700, fontSize: 18, margin: '28px 0 8px' };
const p: React.CSSProperties = { fontSize: 15, lineHeight: 1.65, color: '#3f4756', margin: '0 0 12px' };
const li: React.CSSProperties = { fontSize: 15, lineHeight: 1.6, color: '#3f4756', marginBottom: 6 };

export default function LegalPage({ page }: { page: 'privacy' | 'terms' | 'support' }) {
  if (page === 'support') {
    return (
      <Wrap>
        <h1 style={h1}>Support</h1>
        <p style={meta}>We’re here to help.</p>
        <p style={p}>
          Croft is one calm home for your whole family - shared dates, reminders, lists, goals and money. If something isn’t working or you have a question, email us and we’ll get back to you.
        </p>
        <p style={{ ...p, fontWeight: 700 }}>
          <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: '#3B5BFF' }}>{SUPPORT_EMAIL}</a>
        </p>
        <h2 style={h2}>Quick answers</h2>
        <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
          <li style={li}><strong>Invite your family:</strong> open the <em>Family</em> tab and enter their email (or share an invite link).</li>
          <li style={li}><strong>Forgot your password:</strong> tap “Forgot password?” on the sign-in screen - we’ll email a reset link.</li>
          <li style={li}><strong>Turn on reminders:</strong> <em>Family → Notifications</em>, or enable them during setup.</li>
          <li style={li}><strong>Delete your account:</strong> <em>Family → Account &amp; security → Delete account</em>. This permanently removes your data.</li>
        </ul>
        <p style={{ ...p, marginTop: 24 }}>
          <a href="/" style={{ color: '#3B5BFF', fontWeight: 700 }}>← Back to Croft</a>
        </p>
      </Wrap>
    );
  }

  if (page === 'terms') {
    return (
      <Wrap>
        <h1 style={h1}>Terms of Service</h1>
        <p style={meta}>Last updated {UPDATED}</p>
        <p style={p}>These terms are an agreement between you and Croft, operated by Underbridges (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By creating an account or using Croft, you agree to them. If you don&rsquo;t agree, please don&rsquo;t use the service.</p>

        <h2 style={h2}>Who can use Croft</h2>
        <p style={p}>You must be at least 18 and able to form a binding agreement. Croft is intended for adults managing a household.</p>

        <h2 style={h2}>Your account</h2>
        <p style={p}>Provide accurate information, keep your password (and passcode) secure, and take responsibility for activity on your account. Tell us promptly if you suspect unauthorized access.</p>

        <h2 style={h2}>Your content</h2>
        <p style={p}>You keep ownership of the events, tasks, lists, goals, bills and other content you add. You grant us the limited permission needed to store, process and display that content so we can run the service for you and the household members you invite. You&rsquo;re responsible for the content you add and for who you invite into your household.</p>

        <h2 style={h2}>Households and invites</h2>
        <p style={p}>Content in a household is shared with everyone who has joined it. Only invite people you trust with that information. Anyone with a valid invite link can join, so share links carefully.</p>

        <h2 style={h2}>Acceptable use</h2>
        <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
          <li style={li}>Don&rsquo;t use Croft for anything unlawful, harmful, or that infringes others&rsquo; rights.</li>
          <li style={li}>Don&rsquo;t attempt to disrupt, reverse-engineer, scrape, or gain unauthorized access to the service.</li>
          <li style={li}>Don&rsquo;t misuse invites, notifications or email to spam or harass.</li>
        </ul>

        <h2 style={h2}>Service availability</h2>
        <p style={p}>Croft is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We work to keep it running and improving, but we may add, change or remove features, and we can&rsquo;t guarantee uninterrupted or error-free service.</p>

        <h2 style={h2}>Third-party services</h2>
        <p style={p}>Croft uses trusted providers (for example Google for optional sign-in, and email delivery). Your use of those is also subject to their terms.</p>

        <h2 style={h2}>Ending your use</h2>
        <p style={p}>You can delete your account at any time from <em>Family &rarr; Account &amp; security &rarr; Delete account</em>. We may suspend or end access if these terms are broken or to protect the service or its users.</p>

        <h2 style={h2}>Disclaimers and liability</h2>
        <p style={p}>To the fullest extent permitted by law, Croft is provided without warranties of any kind, and we are not liable for indirect or consequential losses. Nothing in these terms limits liability that cannot be limited by law.</p>

        <h2 style={h2}>Changes</h2>
        <p style={p}>We may update these terms; we&rsquo;ll revise the &ldquo;last updated&rdquo; date above. Continued use means you accept the current version.</p>

        <h2 style={h2}>Governing law</h2>
        <p style={p}>These terms are governed by the laws of South Africa.</p>

        <h2 style={h2}>Contact</h2>
        <p style={p}>Questions? Email <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: '#3B5BFF' }}>{SUPPORT_EMAIL}</a>.</p>

        <p style={{ ...p, marginTop: 20, fontSize: 14 }}>
          See also our <a href="/privacy" style={{ color: '#3B5BFF', fontWeight: 700 }}>Privacy Policy</a>.
        </p>
        <p style={{ ...p, marginTop: 20 }}>
          <a href="/" style={{ color: '#3B5BFF', fontWeight: 700 }}>&larr; Back to Croft</a>
        </p>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <h1 style={h1}>Privacy Policy</h1>
      <p style={meta}>Last updated {UPDATED}</p>
      <p style={p}>
        Croft (“we”, “us”) is a family and household management app operated by Underbridges. This policy explains what we collect, how we use it, and the choices you have. Questions? Email <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: '#3B5BFF' }}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2 style={h2}>Information we collect</h2>
      <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
        <li style={li}><strong>Account details:</strong> your name and email. If you sign up with a password, we store a securely hashed (bcrypt) version - never the password itself. If you sign in with Google, we receive your name and verified email from Google.</li>
        <li style={li}><strong>Household content:</strong> the events, to-dos, shopping items, goals, bills, budgets, family members and notifications you create in the app.</li>
        <li style={li}><strong>Notification data:</strong> if you enable push notifications, a browser/device push subscription so we can deliver reminders.</li>
      </ul>
      <p style={p}>We do <strong>not</strong> collect location, contacts, or advertising identifiers, and we do <strong>not</strong> track you across other apps or websites.</p>

      <h2 style={h2}>How we use it</h2>
      <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
        <li style={li}>To provide the service - storing your household’s content and syncing it across the people you invite.</li>
        <li style={li}>To send reminders and a daily summary by push and email, according to your settings.</li>
        <li style={li}>To secure your account and keep the service working.</li>
      </ul>
      <p style={p}>We never sell your data or use it for advertising.</p>

      <h2 style={h2}>Sharing within your household</h2>
      <p style={p}>Content you add is visible to the members of your household - that’s the point of a shared home. Only people you invite (or who accept your invite) can access it.</p>

      <h2 style={h2}>Service providers</h2>
      <p style={p}>We use a small number of trusted providers to run Croft, who process data only on our behalf:</p>
      <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
        <li style={li}><strong>Neon</strong> - database hosting.</li>
        <li style={li}><strong>Vercel</strong> - application hosting.</li>
        <li style={li}><strong>Resend</strong> - sending transactional and reminder emails.</li>
        <li style={li}><strong>Google</strong> - optional sign-in (OAuth).</li>
      </ul>

      <h2 style={h2}>Security</h2>
      <p style={p}>Passwords are hashed with bcrypt, sessions use signed httpOnly cookies, and all traffic is encrypted in transit (HTTPS).</p>

      <h2 style={h2}>Retention &amp; deletion</h2>
      <p style={p}>You can delete your account any time from <em>Family → Account &amp; security → Delete account</em>. This removes your account and, if you’re the last member of a household, that household and all its data - permanently.</p>

      <h2 style={h2}>Children</h2>
      <p style={p}>Croft is intended for adults managing a household and is not directed at children under 13.</p>

      <h2 style={h2}>Changes</h2>
      <p style={p}>We may update this policy; we’ll revise the “last updated” date above. Continued use means you accept the current version.</p>

      <p style={{ ...p, marginTop: 20, fontSize: 14 }}>
        See also our <a href="/terms" style={{ color: '#3B5BFF', fontWeight: 700 }}>Terms of Service</a>.
      </p>
      <p style={{ ...p, marginTop: 20 }}>
        <a href="/" style={{ color: '#3B5BFF', fontWeight: 700 }}>← Back to Croft</a>
      </p>
    </Wrap>
  );
}
