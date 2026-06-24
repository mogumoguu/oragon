import Reveal from "@/components/ui/Reveal";

export default function FounderNote() {
  return (
    <section id="founder" style={{ padding: "clamp(60px,8vw,92px) 6vw", background: "#fff" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <Reveal style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fb923c", marginBottom: "26px" }}>
          A note from the founder
        </Reveal>

        <Reveal
          as="p"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(22px,3.2vw,30px)",
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            color: "#1a1a1a",
            margin: "0 0 22px",
          }}
        >
          &ldquo;I kept seeing Filipino businesses drowning in manual work that software could fix. That is the only reason Oragon Labs exists.&rdquo;
        </Reveal>

        <Reveal
          as="p"
          style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.65, color: "#4a4a4a", margin: "0 0 18px" }}
        >
          I am Miguel, 18, and I build every Oragon Labs project myself, from the full-stack apps to the AI workflows. No agency overhead, no junior dev handoffs. Oragon is a Bicolano word for someone brave, determined, and principled, who rises above challenges. That is the standard every build is held to.
        </Reveal>

        <Reveal style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "30px" }}>
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              backgroundImage: "url(/about-portrait.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center 16%",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          />
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "15px", color: "#1a1a1a" }}>Miguel Isorena</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#9a958e" }}>Founder, Oragon Labs</div>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: "26px" }}>
          <a href="/about" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#fb923c", textDecoration: "none" }}>
            More about Miguel →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
