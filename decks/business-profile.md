---
marp: true
theme: default
size: 16:9
paginate: true
backgroundColor: '#ffffff'
color: '#1a1a1a'
---

<style>
  section {
    font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
    padding: 64px 80px;
    background: #ffffff;
    color: #1a1a1a;
    justify-content: flex-start;
  }
  section.cover {
    background: linear-gradient(135deg, #fff7ed 0%, #ffffff 60%);
    padding: 80px;
    justify-content: center;
  }
  section.center {
    justify-content: center;
  }
  section h1, section h2, section h3 {
    font-family: 'Bricolage Grotesque', 'Helvetica Neue', sans-serif;
    letter-spacing: -0.02em;
    line-height: 1.05;
    color: #1a1a1a;
    margin: 0;
  }
  section h1 { font-size: 80px; font-weight: 800; }
  section h2 { font-size: 56px; font-weight: 700; }
  section h3 { font-size: 28px; font-weight: 700; }
  section p { font-size: 22px; line-height: 1.5; color: #4a4a4a; margin: 0; }
  section li { font-size: 20px; line-height: 1.5; color: #4a4a4a; }
  .accent { color: #ea580c; }
  .accent-bg { background: #fb923c; color: #ffffff; }
  .eyebrow {
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #ea580c;
    margin: 0 0 18px 0;
  }
  .accent-bar {
    width: 48px;
    height: 4px;
    background: #fb923c;
    border-radius: 2px;
    margin-bottom: 18px;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    margin-top: 36px;
  }
  .grid-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 18px;
    margin-top: 36px;
  }
  .grid-5 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 14px;
    margin-top: 36px;
  }
  .card {
    background: #ffffff;
    border: 1px solid #e5e0db;
    border-radius: 14px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .card-surface {
    background: #f8f7f5;
  }
  .card-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: #ea580c;
  }
  .card-title {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.2;
  }
  .card-sub {
    font-size: 16px;
    color: #4a4a4a;
    line-height: 1.5;
  }
  .card-glyph {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: rgba(251, 146, 60, 0.12);
    color: #ea580c;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 800;
    font-size: 26px;
  }
  .product-cover {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 48px;
    align-items: center;
    margin-top: 36px;
  }
  .product-shot {
    border-radius: 14px;
    border: 1px solid #e5e0db;
    width: 100%;
    background: #f8f7f5;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: top;
  }
  .product-shot-placeholder {
    border-radius: 14px;
    border: 1px solid #e5e0db;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(16, 185, 129, 0.02) 100%);
    aspect-ratio: 16 / 10;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #10b981;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }
  .tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #ea580c;
    background: rgba(251, 146, 60, 0.12);
    border: 1px solid rgba(251, 146, 60, 0.24);
    padding: 4px 10px;
    border-radius: 4px;
  }
  .bullet-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .bullet-list li {
    position: relative;
    padding-left: 22px;
    font-size: 18px;
    color: #4a4a4a;
  }
  .bullet-list li::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 10px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fb923c;
  }
  .footer-line {
    margin-top: auto;
    padding-top: 24px;
    border-top: 1px solid #ede9e3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #9a8f87;
  }
  .footer-line .live-url { color: #ea580c; }
  .cta-block {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 48px;
    align-items: flex-start;
  }
  .cta-pill {
    background: #1a1a1a;
    color: #ffffff;
    border-radius: 999px;
    padding: 16px 32px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  section::after {
    color: #9a8f87;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.08em;
  }
  section.cover::after,
  section.no-page::after {
    content: none;
  }
</style>

<!-- _class: cover no-page -->

<div style="display: flex; flex-direction: column; gap: 40px; max-width: 720px;">
  <p class="eyebrow" style="font-size: 16px;">ORAGON · BUSINESS PROFILE · 2026</p>
  <h1>We build what <span class="accent">actually ships.</span></h1>
  <p style="font-size: 26px; max-width: 580px;">
    Custom AI tools and automated workflows for Filipino businesses.
  </p>
  <div class="tag-row" style="margin-top: 20px;">
    <span class="tag">AI Automation</span>
    <span class="tag">Custom Software</span>
    <span class="tag">Philippines</span>
  </div>
</div>

---

<!-- _class: center -->

<p class="eyebrow">Who we are</p>
<div class="accent-bar"></div>

<h2 style="max-width: 900px;">An AI automation agency built for Filipino businesses.</h2>

<div class="grid-3" style="margin-top: 48px;">
  <div class="card card-surface">
    <div class="card-glyph">A</div>
    <p class="card-title">AI-native</p>
    <p class="card-sub">Built with AI in the loop from the first commit.</p>
  </div>
  <div class="card card-surface">
    <div class="card-glyph">P</div>
    <p class="card-title">PH-first</p>
    <p class="card-sub">PHP pricing, GCash + Maya + cards, Filipino-SMB UX.</p>
  </div>
  <div class="card card-surface">
    <div class="card-glyph">F</div>
    <p class="card-title">Founder-led</p>
    <p class="card-sub">No agency handoffs. Same person scopes and ships.</p>
  </div>
</div>

---

<p class="eyebrow">What we've shipped</p>
<div class="accent-bar"></div>

<h2>Three live products.</h2>

<div class="grid-3">
  <div class="card">
    <img src="../public/clients/smartstock.png" class="product-shot" alt="SmartStock dashboard" />
    <p class="card-title">SmartStock</p>
    <p class="card-sub">AI inventory SaaS for Philippine micro-retail.</p>
    <p class="card-num">smartstockapp.online</p>
  </div>
  <div class="card">
    <img src="../public/clients/schools-app-feed.png" class="product-shot" alt="School App parent feed" />
    <p class="card-title">School App</p>
    <p class="card-sub">Multi-tenant school portal for parents, faculty, admins.</p>
    <p class="card-num">oragon-schools-app.vercel.app</p>
  </div>
  <div class="card">
    <div class="product-shot-placeholder">Live demo</div>
    <p class="card-title">Oragon Bookings</p>
    <p class="card-sub">Appointment + reminder automation for service businesses.</p>
    <p class="card-num">book.oragon.com.ph</p>
  </div>
</div>

---

<p class="eyebrow">Product · SmartStock</p>
<div class="accent-bar"></div>

<h2>AI inventory <span class="accent">for micro-retail.</span></h2>

<div class="product-cover">
  <img src="../public/clients/smartstock.png" class="product-shot" alt="SmartStock dashboard" />
  <div>
    <ul class="bullet-list">
      <li>Live PayMongo billing — card auto-renew + GCash and Maya monthly</li>
      <li>AI demand forecasting using Gemini and Prophet, 14-day history minimum</li>
      <li>Auto-downgrade for expired e-wallet users via Cloud Scheduler</li>
      <li>Multi-tenant on Cloud Run, every query scoped to user_id</li>
    </ul>
    <div class="tag-row" style="margin-top: 24px;">
      <span class="tag">Next.js 14</span>
      <span class="tag">FastAPI</span>
      <span class="tag">Neon</span>
      <span class="tag">Gemini</span>
    </div>
  </div>
</div>

<div class="footer-line">
  <span>Live since 2026</span>
  <span class="live-url">smartstockapp.online</span>
</div>

---

<p class="eyebrow">Product · School App</p>
<div class="accent-bar"></div>

<h2>Multi-tenant <span class="accent">school portal.</span></h2>

<div class="product-cover">
  <img src="../public/clients/schools-app-feed.png" class="product-shot" alt="School App parent feed" />
  <div>
    <ul class="bullet-list">
      <li>School-wide and per-class announcements with read receipts</li>
      <li>Grade entry plus bulk xlsx upload, parent-facing report views</li>
      <li>Calendar with ICS subscribe — one-tap Google Calendar sync</li>
      <li>Magic-link auth for parents and students, password for admin and faculty</li>
    </ul>
    <div class="tag-row" style="margin-top: 24px;">
      <span class="tag">Next.js 16</span>
      <span class="tag">Supabase</span>
      <span class="tag">Tailwind v4</span>
      <span class="tag">Resend</span>
    </div>
  </div>
</div>

<div class="footer-line">
  <span>Live since 2026</span>
  <span class="live-url">oragon-schools-app.vercel.app</span>
</div>

---

<p class="eyebrow">Product · Oragon Bookings</p>
<div class="accent-bar"></div>

<h2>Booking automation <span class="accent">for service businesses.</span></h2>

<div class="product-cover">
  <div class="product-shot-placeholder">Live demo</div>
  <div>
    <ul class="bullet-list">
      <li>Variable-time bookings with multi-booking-per-slot capacity</li>
      <li>Admin dashboard with reversible booking status</li>
      <li>Built for salons, clinics, restaurants, and cafés</li>
      <li>Branded per-tenant page via host-header routing</li>
    </ul>
    <div class="tag-row" style="margin-top: 24px;">
      <span class="tag">Next.js 15</span>
      <span class="tag">Supabase</span>
      <span class="tag">Tailwind</span>
    </div>
  </div>
</div>

<div class="footer-line">
  <span>Live since 2026</span>
  <span class="live-url">book.oragon.com.ph</span>
</div>

---

<p class="eyebrow">How we work</p>
<div class="accent-bar"></div>

<h2>Custom builds, <span class="accent">not subscriptions.</span></h2>

<div class="grid-3">
  <div class="card card-surface">
    <p class="card-num">Step one</p>
    <p class="card-title">Free discovery call</p>
    <p class="card-sub">30 minutes. We find the highest-leverage thing software can fix.</p>
  </div>
  <div class="card card-surface">
    <p class="card-num">Step two</p>
    <p class="card-title">Scoped SOW</p>
    <p class="card-sub">Fixed price, fixed timeline, plain language. No per-seat surprises.</p>
  </div>
  <div class="card card-surface">
    <p class="card-num">Step three</p>
    <p class="card-title">Ship in weeks</p>
    <p class="card-sub">2 to 6 weeks typical. Code, deployment, training, runbook.</p>
  </div>
</div>

---

<p class="eyebrow">What we can build</p>
<div class="accent-bar"></div>

<h2>If you can name it, <span class="accent">we can probably build it.</span></h2>

<div class="grid-4">
  <div class="card">
    <div class="card-glyph">F</div>
    <p class="card-title">Restaurants and cafés</p>
    <ul class="bullet-list">
      <li>Online booking</li>
      <li>No-show fees</li>
      <li>Branded ordering</li>
    </ul>
  </div>
  <div class="card">
    <div class="card-glyph">S</div>
    <p class="card-title">Salons and clinics</p>
    <ul class="bullet-list">
      <li>Appointments</li>
      <li>Auto reminders</li>
      <li>Deposit collection</li>
    </ul>
  </div>
  <div class="card">
    <div class="card-glyph">R</div>
    <p class="card-title">Retail and sari-sari</p>
    <ul class="bullet-list">
      <li>AI forecasting</li>
      <li>Low-stock alerts</li>
      <li>Barcode labels</li>
    </ul>
  </div>
  <div class="card">
    <div class="card-glyph">E</div>
    <p class="card-title">Schools</p>
    <ul class="bullet-list">
      <li>Announcements</li>
      <li>Grade portals</li>
      <li>Parent calendar</li>
    </ul>
  </div>
</div>

---

<p class="eyebrow">Process</p>
<div class="accent-bar"></div>

<h2>Five steps. <span class="accent">First call to live system.</span></h2>

<div class="grid-5">
  <div class="card">
    <p class="card-num">01</p>
    <p class="card-title">Discovery</p>
    <p class="card-sub">30 min, free</p>
  </div>
  <div class="card">
    <p class="card-num">02</p>
    <p class="card-title">Scope</p>
    <p class="card-sub">Fixed price + timeline</p>
  </div>
  <div class="card">
    <p class="card-num">03</p>
    <p class="card-title">Build</p>
    <p class="card-sub">2 to 6 weeks typical</p>
  </div>
  <div class="card">
    <p class="card-num">04</p>
    <p class="card-title">Handoff</p>
    <p class="card-sub">Training + runbook</p>
  </div>
  <div class="card">
    <p class="card-num">05</p>
    <p class="card-title">Support</p>
    <p class="card-sub">Optional retainer</p>
  </div>
</div>

---

<p class="eyebrow">Pricing</p>
<div class="accent-bar"></div>

<h2>Per-project. <span class="accent">Not per-seat.</span></h2>

<div class="grid-3">
  <div class="card card-surface">
    <p class="card-title">Fixed project</p>
    <p class="card-sub">One-time scope. One-time price. Shipped.</p>
  </div>
  <div class="card card-surface">
    <p class="card-title">Project + retainer</p>
    <p class="card-sub">Build, then ongoing monthly support and new features.</p>
  </div>
  <div class="card card-surface">
    <p class="card-title">Discovery is free</p>
    <p class="card-sub">30 minutes, no pitch deck attached.</p>
  </div>
</div>

<p style="margin-top: 36px; font-family: 'JetBrains Mono', monospace; font-size: 14px; color: #9a8f87; letter-spacing: 0.06em;">
  PHP, not USD. The real number lands in your SOW.
</p>

---

<!-- _class: center -->

<p class="eyebrow">Let's build something</p>
<div class="accent-bar" style="margin: 0 auto 24px;"></div>

<h1 style="text-align: center; max-width: 1000px; margin: 0 auto;">Ready to <span class="accent">talk?</span></h1>

<p style="text-align: center; font-size: 24px; max-width: 720px; margin: 32px auto 0;">
  Pick a time. 30 minutes. No prep needed. We'll figure out the right fit on the call.
</p>

<div style="display: flex; flex-direction: column; align-items: center; gap: 18px; margin-top: 56px;">
  <div class="cta-pill">Book a discovery call</div>
  <p style="font-family: 'JetBrains Mono', monospace; font-size: 18px; letter-spacing: 0.08em; color: #ea580c;">
    oragon.com.ph/clients
  </p>
  <p style="font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: 0.06em; color: #9a8f87; margin-top: 12px;">
    support@oragon.com.ph
  </p>
</div>
