"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealBox from "@/components/ui/RevealBox";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn your goals, constraints, and timeline. No assumptions — just the right questions.",
  },
  {
    number: "02",
    title: "Design & Plan",
    description: "Architecture, scope, and a clear delivery roadmap before a single line of code is written.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description: "Hands-on development with regular check-ins. You see progress early and often.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Deployment, handoff, and ongoing availability. We don't disappear after go-live.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-surface)",
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
            marginBottom: "1rem",
          }}
        >
          <RevealBox inView={inView} delay={0}>
            How We Work
          </RevealBox>
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          style={{ color: "var(--text-primary)", marginBottom: "3.5rem" }}
        >
          A process built for clarity.
        </motion.h2>

        {/* Steps grid */}
        <div
          className="process-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.2 + i * 0.1 }}
              style={{
                padding: "2rem 2rem 2rem 0",
                paddingRight: i < steps.length - 1 ? "2rem" : "0",
                borderRight: i < steps.length - 1 ? "1px solid var(--border-subtle)" : "none",
                paddingLeft: i > 0 ? "2rem" : "0",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "var(--accent-text)",
                  opacity: 0.7,
                }}
              >
                {step.number}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
          .process-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border-subtle);
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
