import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Work from "@/components/sections/Work";
import QuoteButton from "@/components/sections/QuoteButton";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Services · Oragon Labs",
  description:
    "What Oragon Labs builds, the work we have shipped, and straight pricing. Custom systems from ₱30,000, websites from ₱10,000, retainers from ₱5,000/mo.",
};

const services = [
  {
    n: "01",
    title: "POS + Sales Systems",
    body: "Real-time inventory, smart stock alerts, and AI sales forecasting that tells you what to reorder. Built for retail that has outgrown spreadsheets.",
  },
  {
    n: "02",
    title: "Bookings",
    body: "A 24/7 booking page with auto-confirmation and SMS reminders, so you stop losing slots to no-shows and endless back-and-forth messaging.",
  },
  {
    n: "03",
    title: "Websites",
    body: "Fast, clean, mobile-first sites that load on any phone and are built to turn visitors into customers. You own the code and the accounts outright.",
  },
  {
    n: "04",
    title: "Custom Workflows",
    body: "Whatever your team does by hand that a script or AI could do better. We map it during the Bottleneck Map, then automate it.",
  },
];

const pricing = [
  {
    tier: "Custom systems",
    price: "from ₱30,000",
    body: "Inventory, POS, booking, or a custom internal tool, scoped to what your operation actually needs.",
  },
  {
    tier: "Websites",
    price: "from ₱10,000 + ₱5,000/page",
    body: "Fast, mobile-first sites you own outright. No templates, no monthly platform rent.",
  },
  {
    tier: "Retainers",
    price: "from ₱5,000/mo",
    body: "Ongoing support, updates, and improvements after launch. 12-month terms, then renew or take full handover.",
  },
];

const label: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#fb923c",
};

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "16px",
  lineHeight: 1.65,
  color: "#4a4a4a",
};

const h2: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "clamp(28px,4.2vw,42px)",
  lineHeight: 1.1,
  letterSpacing: "-0.03em",
  color: "#1a1a1a",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Intro */}
      <section style={{ padding: "clamp(80px,10vw,120px) 6vw clamp(40px,6vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <Reveal style={{ ...label, marginBottom: "22px" }}>Services</Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(34px,5.2vw,54px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#1a1a1a",
              margin: "0 0 22px",
            }}
          >
            What we build, and what it costs.
          </Reveal>
          <Reveal as="p" delay={0.12} style={{ ...bodyText, maxWidth: "640px", margin: 0 }}>
            We design and build custom systems for Filipino businesses, integrated with AI where it earns its place. Every engagement starts with a free Bottleneck Map, so we only build what actually moves the needle.
          </Reveal>
        </div>
      </section>

      {/* Services detail */}
      <section style={{ padding: "clamp(48px,6vw,72px) 6vw", background: "#f8f7f5", borderTop: "1px solid #ece7e1" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <Reveal style={{ ...label, marginBottom: "10px" }}>What we build</Reveal>
          <Reveal as="h2" delay={0.05} style={{ ...h2, margin: "0 0 36px" }}>
            Four things we build.
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(258px,1fr))", gap: "16px" }}>
            {services.map((s, i) => (
              <Reveal
                key={s.n}
                delay={0.05 * i}
                className="ol-svc-card"
                style={{ background: "#fff", border: "1px solid #ece7e1", borderRadius: "8px", padding: "30px 28px" }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", color: "#d8b59a", marginBottom: "22px" }}>{s.n}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "#1a1a1a", margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14.5px", lineHeight: 1.55, color: "#4a4a4a", margin: 0 }}>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          .ol-svc-card { transition: border-color .2s ease, transform .2s ease; }
          .ol-svc-card:hover { border-color: #fb923c; transform: translateY(-3px); }
        `}</style>
      </section>

      {/* Shipped work */}
      <Work />

      {/* Pricing */}
      <section style={{ padding: "clamp(60px,8vw,92px) 6vw", background: "#f8f7f5", borderTop: "1px solid #ece7e1" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <Reveal style={{ ...label, marginBottom: "10px" }}>Pricing</Reveal>
          <Reveal as="h2" delay={0.05} style={{ ...h2, margin: "0 0 14px" }}>
            Straight pricing. No surprises.
          </Reveal>
          <Reveal as="p" delay={0.1} style={{ ...bodyText, maxWidth: "640px", margin: "0 0 38px" }}>
            We quote only after the free Bottleneck Map, once we understand the problem. You own everything we build, no lock-in. Here is where most projects start.
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "16px" }}>
            {pricing.map((p, i) => (
              <Reveal
                key={p.tier}
                delay={0.05 * i}
                style={{ background: "#fff", border: "1px solid #e5e0db", borderRadius: "10px", padding: "30px 28px" }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a958e", marginBottom: "14px" }}>{p.tier}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "24px", letterSpacing: "-0.02em", color: "#fb923c", margin: "0 0 14px" }}>{p.price}</div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6, color: "#4a4a4a", margin: 0 }}>{p.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18} style={{ marginTop: "32px" }}>
            <QuoteButton />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
