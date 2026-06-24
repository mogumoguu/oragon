import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import SocialGrid from "@/components/ui/SocialGrid";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About Oragon Labs",
  description:
    "Oragon Labs is an AI-native software agency building custom operations systems for Filipino SMEs, fitted to how each business already works and delivered in days at a fraction of traditional development cost.",
};

const label: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#fb923c",
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "16px",
  lineHeight: 1.7,
  color: "#4a4a4a",
};

const h2: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "clamp(26px,3.6vw,38px)",
  lineHeight: 1.1,
  letterSpacing: "-0.03em",
  color: "#1a1a1a",
};

const principles = [
  { lead: "Founder-built.", rest: "Every project scoped, built, and shipped end to end. No handoffs." },
  { lead: "You own it.", rest: "Code and accounts handed over on launch. No lock-in." },
  { lead: "AI with intent.", rest: "Integrated where it earns its place, never for the hype." },
];

// migs.iso personal accounts.
const personal = [
  { name: "Instagram", url: "https://www.instagram.com/migs.iso", handle: "@migs.iso" },
  { name: "TikTok", url: "https://www.tiktok.com/@migs.iso", handle: "@migs.iso" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/miguel-isorena/", handle: "Miguel Isorena" },
  { name: "Facebook", url: "https://www.facebook.com/migs.miguel.79827/", handle: "Miguel Isorena" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero banner — pitching, full-bleed with centered text overlay */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "clamp(460px,76vh,720px)",
          display: "flex",
          alignItems: "center",
          backgroundImage: "url(/about-banner-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 38%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(12,10,8,0.85), rgba(12,10,8,0.5) 58%, rgba(12,10,8,0.22))",
          }}
        />
        <div style={{ position: "relative", width: "100%", maxWidth: "1180px", margin: "0 auto", padding: "0 6vw" }}>
          <Reveal style={{ ...label, color: "rgba(255,255,255,0.82)", marginBottom: "16px" }}>About</Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px,5vw,56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#fff",
              margin: "0 0 18px",
              maxWidth: "780px",
            }}
          >
            We build systems that give Filipino businesses their time back.
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px,1.6vw,18px)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.86)",
              margin: 0,
              maxWidth: "640px",
            }}
          >
            Oragon Labs is an AI-native software agency building custom operations systems for Filipino SMEs, fitted to how each business already works and delivered in days at a fraction of traditional development cost.
          </Reveal>
        </div>
      </section>

      {/* Full-body photo + story */}
      <section style={{ padding: "clamp(56px,8vw,96px) 6vw", background: "#fff" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
            gap: "clamp(32px,5vw,64px)",
            alignItems: "center",
          }}
        >
          <Reveal>
            <div
              style={{
                width: "100%",
                aspectRatio: "3 / 4",
                borderRadius: "14px",
                backgroundImage: "url(/about-portrait.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ ...label, marginBottom: "16px" }}>The story</div>
            <h2 style={{ ...h2, margin: "0 0 20px" }}>Brave, determined, principled.</h2>
            <p style={{ ...body, margin: "0 0 14px" }}>
              Oragon Labs is led by Miguel Isorena, 18, building from the Philippines. Oragon is a Bicolano word for someone brave, determined, and principled, who rises above challenges. It is the standard we hold every build to.
            </p>
            <p style={{ ...body, margin: "0 0 24px" }}>
              We kept seeing local businesses drowning in manual work that good software could fix, so we started building the fixes, one system at a time.
            </p>

            <div style={{ display: "grid", gap: "13px" }}>
              {principles.map((p) => (
                <div key={p.lead} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fb923c", flexShrink: 0, marginTop: "9px" }} />
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "#4a4a4a", margin: 0 }}>
                    <strong style={{ color: "#1a1a1a", fontWeight: 700 }}>{p.lead}</strong> {p.rest}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Follow Miguel — migs.iso */}
      <section style={{ padding: "clamp(48px,6vw,72px) 6vw", background: "#f8f7f5", borderTop: "1px solid #ece7e1" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <Reveal style={{ ...label, marginBottom: "10px" }}>Follow along</Reveal>
          <Reveal as="h2" delay={0.05} style={{ ...h2, margin: "0 0 10px" }}>Follow Miguel.</Reveal>
          <Reveal as="p" delay={0.1} style={{ ...body, maxWidth: "560px", margin: "0 0 28px" }}>
            Building Oragon in public, plus the occasional behind-the-scenes. Follow along at migs.iso.
          </Reveal>
          <Reveal delay={0.14}><SocialGrid items={personal} /></Reveal>
        </div>
      </section>

      {/* Banner 2 — the cohort, full-bleed with glass CTA */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "clamp(360px,56vh,560px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: "url(/about-banner-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 42%",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,10,8,0.42)" }} />
        <div style={{ position: "relative", padding: "0 6vw" }}>
          <Reveal
            as="h2"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,3.6vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 24px" }}
          >
            Let&apos;s work together.
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href="/contact"
              className="ol-glass"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#fff",
                background: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.45)",
                padding: "15px 30px",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              Get in touch →
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />

      <style>{`
        .ol-glass { transition: background .2s ease, border-color .2s ease; }
        .ol-glass:hover { background: rgba(255,255,255,0.24); border-color: rgba(255,255,255,0.72); }
      `}</style>
    </main>
  );
}
