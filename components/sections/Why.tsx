import Reveal from "@/components/ui/Reveal";

const points = [
  { title: "You own it outright", body: "Code, documentation, and accounts are handed to you. It is your system, not ours to rent back." },
  { title: "No lock-in, no subscriptions", body: "No monthly trap, ever. We get paid to build the thing, not to hold it hostage." },
  { title: "The first map is free", body: "We diagnose the bottleneck before you spend a single peso, so you know exactly what you are paying for." },
];

export default function Why() {
  return (
    <section style={{ padding: "clamp(60px,8vw,92px) 6vw", background: "#fff" }}>
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "start",
        }}
      >
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fb923c", marginBottom: "18px" }}>
            Why Oragon Labs
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px,3.8vw,40px)", lineHeight: 1.04, letterSpacing: "-0.03em", color: "#1a1a1a", margin: 0 }}>
            Most agencies quote you a build. We find the bottleneck first.
          </h2>
        </Reveal>

        <Reveal style={{ display: "grid", gap: 0 }}>
          {points.map((p, i) => (
            <div
              key={p.title}
              style={{
                display: "flex",
                gap: "18px",
                padding: "22px 0",
                borderTop: "1px solid #ece7e1",
                borderBottom: i === points.length - 1 ? "1px solid #ece7e1" : undefined,
              }}
            >
              <span style={{ flex: "none", width: "7px", height: "7px", marginTop: "8px", background: "#fb923c", borderRadius: "50%" }} />
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "18px", color: "#1a1a1a", margin: "0 0 4px" }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.5, color: "#4a4a4a", margin: 0 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
