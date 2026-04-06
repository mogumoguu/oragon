"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "100%",     label: "Hands-On" },
  { value: "AI-First", label: "Stack & Workflow" },
  { value: "1:1",      label: "Founder Access" },
  { value: "Fast",     label: "Turnaround" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      style={{
        background: "rgba(13, 13, 18, 0.12)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        padding: "2.5rem 1.5rem",
      }}
    >
      <div
        ref={ref}
        className="max-w-6xl mx-auto stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.5rem 1rem",
              borderRight: i < stats.length - 1 ? "1px solid var(--border-subtle)" : "none",
            }}
            className={i < stats.length - 1 ? "stat-item" : "stat-item-last"}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "var(--accent-text)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .stat-item, .stat-item-last {
            border-right: none !important;
            border-bottom: 1px solid var(--border-subtle);
            padding: 1.25rem 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
