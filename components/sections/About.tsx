"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealBox from "@/components/ui/RevealBox";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      style={{
        padding: "6rem 1.5rem",
        background: "rgba(8, 8, 12, 0.08)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent-text)",
            marginBottom: "3rem",
          }}
        >
          <RevealBox inView={inView} delay={0}>
            The Founder
          </RevealBox>
        </p>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
            gap: "4rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — avatar */}
          <motion.div
            initial={{ opacity: 0, x: -48, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}
          >
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "var(--bg-elevated)",
                border: "2px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                boxShadow: "0 0 40px var(--accent-glow)",
              }}
            >
              {/* [REPLACE: swap for a real photo via next/image] */}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "3rem",
                  color: "var(--accent-text)",
                  opacity: 0.5,
                  letterSpacing: "-0.04em",
                }}
              >
                MI
              </span>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.10), transparent 70%)",
                }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "var(--text-primary)",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {/* [REPLACE: Founder full name] */}
                Miguel Isorena
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--accent-text)",
                  margin: "0.25rem 0 0",
                  opacity: 0.8,
                }}
              >
                {/* [REPLACE: Founder title/role] */}
                Founder &amp; CEO
              </p>
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              style={{ color: "var(--text-primary)", margin: 0 }}
            >
              {/* [REPLACE: Founder-focused headline] */}
              Building at the intersection of AI and the web.
            </motion.h2>

            {/* [REPLACE: 2-3 paragraphs about the founder and the company's origin story] */}
            <p style={{ margin: 0, fontSize: "0.95rem" }}>
              I&apos;m Miguel — the founder behind Orena. I started this company because I
              saw a clear gap: most businesses want to take advantage of AI and modern technology,
              but don&apos;t have the in-house expertise to do it well.
            </p>

            <p style={{ margin: 0, fontSize: "0.95rem" }}>
              With a background in web development, AI tooling, and workflow automation, I built
              Orena to be the partner businesses need to move faster — without the overhead
              of a full agency or the risk of hiring the wrong full-time team.
            </p>

            <p style={{ margin: 0, fontSize: "0.95rem" }}>
              Every project is hands-on. I work directly with clients from discovery through
              delivery, and I don&apos;t stop until the solution actually works.
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.25rem" }}>
              {/* [REPLACE: relevant expertise areas] */}
              {["AI Tools", "Web Dev", "Automation", "Consulting"].map((label) => (
                <span key={label} className="tag">{label}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
