import Reveal from "@/components/ui/Reveal";

const work = [
  {
    name: "SmartStock",
    href: "https://smartstockapp.online",
    label: "smartstockapp.online",
    desc: "AI inventory and sales forecasting for Philippine micro-retail.",
    shot: "SmartStock screenshot",
  },
  {
    name: "Oragon Bookings",
    href: "https://book.oragon.com.ph/demo-cafe",
    label: "book.oragon.com.ph",
    desc: "Appointment and reminder automation for service businesses.",
    shot: "Bookings screenshot",
  },
  {
    name: "Vero Denim Bags",
    href: "https://vero-denim-bags.vercel.app",
    label: "vero-denim-bags.vercel.app",
    desc: "A custom storefront and order flow for a local maker.",
    shot: "Vero storefront",
  },
  {
    name: "ARC Mobility",
    href: "https://nano-arc-mobility.vercel.app",
    label: "nano-arc-mobility.vercel.app",
    desc: "A launch site and waitlist for NANO, a foldable mobility crutch.",
    shot: "ARC Mobility screenshot",
  },
];

const stripe = "repeating-linear-gradient(135deg,#f3f0ec,#f3f0ec 11px,#eee9e3 11px,#eee9e3 22px)";

export default function Work() {
  return (
    <section id="work" style={{ padding: "clamp(60px,8vw,92px) 6vw", background: "#fff" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <Reveal style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fb923c", marginBottom: "10px" }}>
          What we&apos;ve shipped
        </Reveal>
        <Reveal as="h2" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4.4vw,42px)", letterSpacing: "-0.03em", color: "#1a1a1a", margin: "0 0 44px" }}>
          Real products, live right now.
        </Reveal>
        <Reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "18px" }}>
          {work.map((w) => (
            <a
              key={w.name}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ol-work-card"
              style={{ display: "block", border: "1px solid #ece7e1", borderRadius: "8px", overflow: "hidden", textDecoration: "none" }}
            >
              <div style={{ aspectRatio: "16/10", background: stripe, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9a958e", background: "#fff", padding: "5px 10px", borderRadius: "4px" }}>
                  {w.shot}
                </span>
              </div>
              <div style={{ padding: "22px 24px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "18px", color: "#1a1a1a", margin: "0 0 6px" }}>{w.name}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.5, color: "#4a4a4a", margin: "0 0 14px" }}>{w.desc}</p>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.05em", textTransform: "uppercase", color: "#fb923c" }}>{w.label} ↗</span>
              </div>
            </a>
          ))}
        </Reveal>
      </div>

      <style>{`
        .ol-work-card { transition: border-color .2s ease, transform .2s ease; }
        .ol-work-card:hover { border-color: #fb923c; transform: translateY(-3px); }
      `}</style>
    </section>
  );
}
