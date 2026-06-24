"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealBox from "@/components/ui/RevealBox";

const ease = [0.22, 1, 0.36, 1] as const;

const points = [
  {
    title: "You own it",
    body: "The system is yours outright. No per-seat fees, no usage caps, no vendor raising your bill as you grow.",
  },
  {
    title: "No lock-in",
    body: "Stay on a light retainer only if you want to. At any point you can take the keys and self-host. Your business, your call.",
  },
  {
    title: "The Bottleneck Map is free",
    body: "You see exactly what is draining you, and what we would build to fix it, before you spend a single peso.",
  },
];

export default function Differentiation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        background: "transparent",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent-text)",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          <RevealBox inView={inView} delay={0}>
            Why Oragon
          </RevealBox>
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          style={{
            color: "var(--text-primary)",
            textAlign: "center",
            maxWidth: "720px",
            margin: "0 auto 1.25rem",
          }}
        >
          Most agencies quote you a build.{" "}
          <span style={{ color: "var(--accent)" }}>We find the bottleneck first.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            maxWidth: "640px",
            margin: "0 auto 3.5rem",
            textAlign: "center",
          }}
        >
          Then we build the fix and hand you the keys. The whole point is a system that works without us, not a subscription you can never leave.
        </motion.p>

        <div
          className="diff-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.3 + i * 0.1 }}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--text-primary)",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .diff-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
