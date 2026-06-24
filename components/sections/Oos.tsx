"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";

const stages = [
  {
    n: "01",
    title: "The Bottleneck Map",
    body: "We find the single process draining your business the most, in a 30-minute call. Free, before anything is quoted or built.",
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
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % stages.length), 2000);
    return () => clearInterval(id);
  }, []);

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
          {/* Full track: from the first node's circle to the last node's circle */}
          <div className="ol-oos-line" style={{ position: "absolute", top: "9px", left: "10px", right: "calc(25% - 28px)", height: "2px", background: "#e5e0db" }} />
          {/* Orange progress: fills up to the active node */}
          <div
            className="ol-oos-line"
            style={{
              position: "absolute",
              top: "9px",
              left: "10px",
              width: `calc(${active * 25}% + ${active * 6}px)`,
              height: "2px",
              background: "#fb923c",
              transition: "width 0.6s cubic-bezier(.16,1,.3,1)",
            }}
          />
          <div className="ol-oos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "24px" }}>
            {stages.map((s, i) => {
              const isActive = i === active;
              const reached = i <= active;
              return (
                <div key={s.n}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                    {isActive ? (
                      <span style={{ position: "relative", zIndex: 2, width: "20px", height: "20px", borderRadius: "50%", background: "#fb923c", boxShadow: "0 0 0 5px #fff1e7", display: "inline-block" }}>
                        <span style={{ position: "absolute", inset: "-5px", borderRadius: "50%", background: "#fb923c", transformOrigin: "center", animation: "oRing 2s ease-out infinite" }} />
                      </span>
                    ) : (
                      <span style={{ position: "relative", zIndex: 2, width: "20px", height: "20px", borderRadius: "50%", background: reached ? "#fb923c" : "#d8d2cb", display: "inline-block", transition: "background 0.4s ease" }} />
                    )}
                    <span
                      style={{
                        position: "relative",
                        zIndex: 2,
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.08em",
                        color: reached ? "#fb923c" : "#9a958e",
                        background: "#fbfaf8",
                        padding: "0 5px",
                        transition: "color 0.4s ease",
                      }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "19px", color: "#1a1a1a", margin: "0 0 8px" }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.55, color: "#4a4a4a", margin: 0 }}>{s.body}</p>
                </div>
              );
            })}
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
