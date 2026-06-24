import Reveal from "@/components/ui/Reveal";

const stages = [
  {
    n: "01",
    title: "The Bottleneck Map",
    body: "We find the single process draining your business the most, in a 30-minute call. Free, before anything is quoted or built.",
    active: true,
  },
  {
    n: "02",
    title: "Build",
    body: "We build the custom system around that one bottleneck. No templates, no bloat, no scope creep.",
  },
  {
    n: "03",
    title: "Automate",
    body: "The manual work disappears. Your team gets their hours back for the things only people can do.",
  },
  {
    n: "04",
    title: "Handoff",
    body: "You own it outright. No lock-in, no monthly trap. We hand you the keys, the code, and a walkthrough.",
  },
];

export default function Oos() {
  return (
    <section id="oos" style={{ padding: "clamp(60px,8vw,92px) 6vw", background: "#fbfaf8" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <Reveal
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "8px",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fb923c" }}>
            The Oragon Operating System
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9a958e" }}>
            04 stages
          </span>
        </Reveal>

        <Reveal
          as="h2"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(30px,4.4vw,42px)",
            letterSpacing: "-0.03em",
            color: "#1a1a1a",
            margin: "0 0 8px",
          }}
        >
          How we work, end to end.
        </Reveal>

        <Reveal
          as="p"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            lineHeight: 1.55,
            color: "#6b6b6b",
            maxWidth: "520px",
            margin: "0 0 48px",
          }}
        >
          One process, every time. It is how we stay honest about what we touch, and how you always know what comes next.
        </Reveal>

        <Reveal style={{ position: "relative" }}>
          <div className="ol-oos-line" style={{ position: "absolute", top: "9px", left: "4%", right: "4%", height: "2px", background: "#e5e0db" }} />
          <div className="ol-oos-line" style={{ position: "absolute", top: "9px", left: "4%", width: "23%", height: "2px", background: "#fb923c" }} />
          <div className="ol-oos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "24px" }}>
            {stages.map((s) => (
              <div key={s.n}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                  {s.active ? (
                    <span style={{ position: "relative", zIndex: 2, width: "20px", height: "20px", borderRadius: "50%", background: "#fb923c", boxShadow: "0 0 0 5px #fff1e7", display: "inline-block" }}>
                      <span style={{ position: "absolute", inset: "-5px", borderRadius: "50%", background: "#fb923c", transformOrigin: "center", animation: "oRing 2.6s ease-out infinite" }} />
                    </span>
                  ) : (
                    <span style={{ position: "relative", zIndex: 2, width: "20px", height: "20px", borderRadius: "50%", background: "#d8d2cb", display: "inline-block" }} />
                  )}
                  <span
                    style={{
                      position: "relative",
                      zIndex: 2,
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      color: s.active ? "#fb923c" : "#9a958e",
                      background: s.active ? "transparent" : "#fbfaf8",
                      padding: s.active ? 0 : "0 5px",
                    }}
                  >
                    {s.n}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "19px", color: "#1a1a1a", margin: "0 0 8px" }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.55, color: "#4a4a4a", margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .ol-oos-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .ol-oos-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
