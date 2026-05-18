"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealBox from "@/components/ui/RevealBox";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FounderNote() {
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
      <div className="max-w-3xl mx-auto" ref={ref}>
        {/* Eyebrow */}
        <p
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
          <RevealBox inView={inView} delay={0}>
            A note from the founder
          </RevealBox>
        </p>

        {/* Note body */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease, delay: 0.15 }}
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "flex-start",
          }}
          className="founder-note-row"
        >
          {/* Avatar */}
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "var(--bg-elevated)",
              border: "2px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.1rem",
                color: "var(--accent-text)",
                letterSpacing: "-0.04em",
              }}
            >
              MI
            </span>
          </div>

          {/* Quote block */}
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "var(--text-primary)",
                margin: "0 0 1.25rem",
                fontWeight: 400,
              }}
            >
              I&apos;m Miguel. 18, based in the Philippines, building Oragon as a solo founder. Every project I take on, I build personally. No agency overhead, no junior dev handoffs. Book a call and let&apos;s see what we can automate for you.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--text-secondary)",
                margin: 0,
                letterSpacing: "0.04em",
              }}
            >
              — Miguel Isorena, Founder
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .founder-note-row {
            flex-direction: column !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
