import Reveal from "@/components/ui/Reveal";

const services = [
  { n: "01", title: "POS + Sales Systems", body: "Real-time inventory, smart stock alerts, and AI sales forecasting that tells you what to reorder." },
  { n: "02", title: "Bookings", body: "A 24/7 booking page with auto-confirmation and SMS reminders, so you stop losing slots to no-shows." },
  { n: "03", title: "Websites", body: "Fast, clean sites that load on any phone and are built to turn visitors into customers." },
  { n: "04", title: "Custom Workflows", body: "Whatever your team does by hand that a script or AI could do better. We find it, then automate it." },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "clamp(60px,8vw,92px) 6vw", background: "#f8f7f5" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <Reveal style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fb923c", marginBottom: "10px" }}>
          What we build
        </Reveal>
        <Reveal as="h2" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4.4vw,42px)", letterSpacing: "-0.03em", color: "#1a1a1a", margin: "0 0 44px" }}>
          Four things we build.
        </Reveal>
        <Reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "16px" }}>
          {services.map((s) => (
            <div key={s.n} className="ol-svc-card" style={{ background: "#fff", border: "1px solid #ece7e1", borderRadius: "6px", padding: "30px 28px" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", color: "#d8b59a", marginBottom: "24px" }}>{s.n}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "#1a1a1a", margin: "0 0 10px" }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14.5px", lineHeight: 1.55, color: "#4a4a4a", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </Reveal>
      </div>

      <style>{`
        .ol-svc-card { transition: border-color .2s ease, transform .2s ease; }
        .ol-svc-card:hover { border-color: #fb923c; transform: translateY(-3px); }
      `}</style>
    </section>
  );
}
