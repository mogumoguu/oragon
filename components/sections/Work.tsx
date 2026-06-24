import Reveal from "@/components/ui/Reveal";

type WorkItem = {
  name: string;
  href: string;
  label: string;
  desc: string;
  logo?: string;
  mark?: string;
  lockup?: string;
};

const work: WorkItem[] = [
  {
    name: "SmartStock",
    mark: "/work-smartstock.png",
    lockup: "SmartStock",
    href: "https://smartstockapp.online",
    label: "smartstockapp.online",
    desc: "AI inventory and sales forecasting for Philippine micro-retail.",
  },
  {
    name: "Oragon Bookings",
    mark: "/oragon-labs-logo.png",
    lockup: "Oragon Bookings",
    href: "https://book.oragon.com.ph/demo-cafe",
    label: "book.oragon.com.ph",
    desc: "Appointment and reminder automation for service businesses.",
  },
  {
    name: "Vero Denim Bags",
    logo: "/work-vero.png",
    href: "https://vero-denim-bags.vercel.app",
    label: "vero-denim-bags.vercel.app",
    desc: "A custom storefront and order flow for a local maker.",
  },
  {
    name: "ARC Mobility",
    logo: "/work-arc.png",
    href: "https://nano-arc-mobility.vercel.app",
    label: "nano-arc-mobility.vercel.app",
    desc: "A launch site and waitlist for NANO, a foldable mobility crutch.",
  },
];

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
              style={{ display: "block", border: "1px solid #ece7e1", borderRadius: "8px", overflow: "hidden", textDecoration: "none", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
            >
              <div style={{ aspectRatio: "16/10", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: "26px", borderBottom: "1px solid #f1ece6" }}>
                {w.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={w.logo} alt={w.name} style={{ maxWidth: "82%", maxHeight: "58%", width: "auto", height: "auto", objectFit: "contain" }} />
                ) : (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "11px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={w.mark} alt="" style={{ height: "42px", width: "auto", display: "block", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "18px", letterSpacing: "-0.02em", color: "#1a1a1a", whiteSpace: "nowrap" }}>{w.lockup}</span>
                  </div>
                )}
              </div>
              <div style={{ padding: "20px 24px" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.5, color: "#4a4a4a", margin: "0 0 14px" }}>{w.desc}</p>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.05em", textTransform: "uppercase", color: "#fb923c" }}>{w.label} ↗</span>
              </div>
            </a>
          ))}
        </Reveal>

        <Reveal style={{ marginTop: "32px" }}>
          <a href="/services#work" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#fb923c", textDecoration: "none" }}>
            See all our work →
          </a>
        </Reveal>
      </div>

      <style>{`
        .ol-work-card { transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease; }
        .ol-work-card:hover { border-color: #fb923c; transform: translateY(-3px); box-shadow: 0 6px 18px rgba(0,0,0,0.07); }
      `}</style>
    </section>
  );
}
