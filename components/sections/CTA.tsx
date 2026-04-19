"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        padding: "7rem 1.5rem",
        background: "transparent",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >

      <div ref={ref} style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent-text)",
            marginBottom: "1.5rem",
          }}
        >
          ORAGON
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          style={{
            color: "var(--text-primary)",
            margin: "0 0 1.25rem",
            lineHeight: 1.1,
          }}
        >
          We don&apos;t just build systems. We build breathing room for your team.
        </motion.h2>

        {/* Accent divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
          style={{
            width: "48px",
            height: "2px",
            background: "var(--accent)",
            margin: "0 auto 1.5rem",
            transformOrigin: "center",
          }}
        />

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease, delay: 0.35 }}
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
            color: "var(--text-secondary)",
            margin: "0 0 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Tell us what&apos;s in the way. One conversation is all it takes.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.42 }}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.85rem 2.25rem" }}
          >
            Let&apos;s Talk
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
