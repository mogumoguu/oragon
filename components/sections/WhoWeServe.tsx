"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import RevealBox from "@/components/ui/RevealBox";

const ease = [0.22, 1, 0.36, 1] as const;

const buckets = [
  {
    id: "small-stores",
    title: "Small Stores & Micro-Retail",
    examples: ["Sari-sari stores", "Food stalls & carinderias", "Market vendors"],
    benefit: "Affordable PHP pricing, simple setup, GCash-ready payments.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l1-5h16l1 5"/>
        <path d="M3 9h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z"/>
        <path d="M9 9v12M15 9v12"/>
      </svg>
    ),
    cta: null,
  },
  {
    id: "mid-size",
    title: "Mid-Size Service Businesses",
    examples: ["Salons & barbershops", "Auto shops & clinics", "Tutors & training centers"],
    benefit: "Appointment booking, staff scheduling, and automated client reminders.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <path d="M16 2v4M8 2v4M3 10h18"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
    cta: null,
  },
  {
    id: "enterprise",
    title: "Larger Operations & Enterprise",
    examples: ["Multi-location businesses", "Custom integrations", "Complex workflows"],
    benefit: "Tailored builds, dedicated support, and a direct line to our team.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="9" height="14" rx="1"/>
        <rect x="13" y="3" width="9" height="18" rx="1"/>
        <path d="M6 11h1M6 15h1M17 7h1M17 11h1M17 15h1"/>
      </svg>
    ),
    cta: { label: "Talk to us →", href: "/contact" },
  },
];

export default function WhoWeServe() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="who-we-serve"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent-text)",
              marginBottom: "0.75rem",
            }}
          >
            <RevealBox inView={inView} delay={0}>
              Who We Serve
            </RevealBox>
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            style={{ color: "var(--text-primary)", margin: 0 }}
          >
            Built for businesses like yours.
          </motion.h2>
        </div>

        {/* Bucket cards */}
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {buckets.map((bucket, i) => (
            <motion.div
              key={bucket.id}
              initial={{ opacity: 0, y: 48, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.15 + i * 0.08 }}
              whileHover={{ y: -4 }}
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "2rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                transition: "border-color 0.25s, box-shadow 0.25s",
                cursor: "default",
              }}
              onHoverStart={(e) => {
                (e.target as HTMLElement).style.borderColor = "var(--accent)";
                (e.target as HTMLElement).style.boxShadow = "0 8px 32px var(--accent-glow)";
              }}
              onHoverEnd={(e) => {
                (e.target as HTMLElement).style.borderColor = "var(--border)";
                (e.target as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "8px",
                  background: "var(--accent-glow)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-text)",
                  flexShrink: 0,
                }}
              >
                {bucket.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {bucket.title}
              </h3>

              {/* Examples */}
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                {bucket.examples.map((ex) => (
                  <li
                    key={ex}
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontWeight: 700, lineHeight: 1 }}>—</span>
                    {ex}
                  </li>
                ))}
              </ul>

              {/* Benefit */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  margin: 0,
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {bucket.benefit}
              </p>

              {/* Optional CTA */}
              {bucket.cta && (
                <Link
                  href={bucket.cta.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    color: "var(--accent-text)",
                    textDecoration: "none",
                    marginTop: "0.25rem",
                  }}
                >
                  {bucket.cta.label}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
