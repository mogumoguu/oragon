"use client";

import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: "calc(100svh - 72px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(40px,6vw,72px) 6vw",
        background: "#f8f7f5",
        textAlign: "center",
      }}
    >
      {/* Pill */}
      <Reveal
        delay={0}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "9px",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#fb923c",
          background: "#fff1e7",
          padding: "7px 14px",
          borderRadius: "999px",
          marginBottom: "30px",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#fb923c",
            display: "inline-block",
            transformOrigin: "center",
            animation: "oPulse 2.4s ease-in-out infinite",
          }}
        />
        The first Bottleneck Map is free
      </Reveal>

      {/* Headline */}
      <Reveal
        as="h1"
        delay={0.06}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(40px,6.4vw,66px)",
          lineHeight: 0.97,
          letterSpacing: "-0.04em",
          color: "#1a1a1a",
          maxWidth: "820px",
          margin: "0 auto 26px",
        }}
      >
        We find what is slowing your business down. Then we build the fix.
      </Reveal>

      {/* Subhead */}
      <Reveal
        as="p"
        delay={0.12}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(16px,2vw,18px)",
          lineHeight: 1.55,
          color: "#4a4a4a",
          maxWidth: "580px",
          margin: "0 auto 36px",
        }}
      >
        Oragon Labs is an AI-native software agency building custom operations systems for Filipino SMEs, fitted to how each business already works and delivered in days at a fraction of traditional development cost.
      </Reveal>

      {/* CTA row */}
      <Reveal
        delay={0.18}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <a
          href="/contact"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#fff",
            background: "#fb923c",
            padding: "15px 26px",
            borderRadius: "999px",
            textDecoration: "none",
          }}
        >
          Book your free map →
        </a>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#6b6b6b",
          }}
        >
          30 minutes, straight answers
        </span>
      </Reveal>

      {/* Credibility strip */}
      <Reveal
        delay={0.24}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "22px",
          flexWrap: "wrap",
          justifyContent: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#9a958e",
        }}
      >
        <span>Founder-built, every project</span>
        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#d8d2cb" }} />
        <span>3 products shipped</span>
        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#d8d2cb" }} />
        <span>You own the code</span>
      </Reveal>
    </section>
  );
}
