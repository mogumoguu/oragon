"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const tractionItems = [
  {
    value: "3",
    label: "Products Shipped",
    note: "Full-stack SaaS tools built and deployed to real users",
  },
  {
    value: "2",
    label: "Industries Served",
    note: "Retail / inventory management and automotive services",
  },
  {
    value: "2",
    label: "Founders",
    note: "Technical and business leadership in-house from day one",
  },
  {
    value: "PH",
    label: "Headquarters",
    note: "Built in the Philippines, serving Southeast Asia",
  },
];

export default function InvestorsPage() {
  const heroRef    = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const tractionRef = useRef<HTMLDivElement>(null);
  const visionRef  = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  const heroInView     = useInView(heroRef,     { once: true, margin: "-60px" });
  const overviewInView = useInView(overviewRef, { once: true, margin: "-60px" });
  const tractionInView = useInView(tractionRef, { once: true, margin: "-60px" });
  const visionInView   = useInView(visionRef,   { once: true, margin: "-60px" });
  const ctaInView      = useInView(ctaRef,      { once: true, margin: "-60px" });

  return (
    <main style={{ paddingTop: "4rem" }}>

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        style={{
          padding: "6rem 1.5rem 5rem",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
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
            Investor Relations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            style={{ color: "var(--text-primary)", margin: "0 0 1.5rem" }}
          >
            Built for the{" "}
            <span style={{ color: "var(--accent)" }}>long game.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            style={{ fontSize: "1.05rem", maxWidth: "600px", margin: 0 }}
          >
            ORAGON is an automation and AI agency building real products for Filipino
            businesses. We&apos;re early, focused, and playing to win in a market that is
            just beginning to digitize.
          </motion.p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section
        ref={overviewRef}
        style={{
          padding: "5rem 1.5rem",
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="max-w-4xl mx-auto investors-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0 }}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-text)", marginBottom: "1.25rem" }}
            >
              What We Build
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.08 }}
              style={{ color: "var(--text-primary)", marginBottom: "1.25rem" }}
            >
              Automation and AI for the Philippine market
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.15 }}
              style={{ fontSize: "0.95rem", margin: "0 0 1rem" }}
            >
              ORAGON diagnoses business inefficiencies and builds the software to fix
              them — AI-powered workflows, automated pipelines, integrated systems, and
              full-stack SaaS products.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.22 }}
              style={{ fontSize: "0.95rem", margin: 0 }}
            >
              Our clients are Filipino businesses — from single-location retail stores to
              multi-branch service operations — who are ready to grow but are being held
              back by manual processes, disconnected tools, and a lack of technical
              capacity in-house.
            </motion.p>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-text)", marginBottom: "1.25rem" }}
            >
              The Opportunity
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.18 }}
              style={{ color: "var(--text-primary)", marginBottom: "1.25rem" }}
            >
              A massive market, still early
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.25 }}
              style={{ fontSize: "0.95rem", margin: "0 0 1rem" }}
            >
              The Philippines has over 1 million registered businesses — the vast majority
              still relying on spreadsheets, paper, and manual coordination. The digitization
              wave that swept Western markets a decade ago is happening here now.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.32 }}
              style={{ fontSize: "0.95rem", margin: 0 }}
            >
              We are positioned at the intersection of that shift — with local knowledge,
              technical depth, and a track record of shipping real products.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Traction ── */}
      <section
        ref={tractionRef}
        style={{ padding: "5rem 1.5rem", borderBottom: "1px solid var(--border-subtle)" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={tractionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0 }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-text)", marginBottom: "1.25rem" }}
          >
            Traction
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={tractionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            style={{ color: "var(--text-primary)", marginBottom: "3rem" }}
          >
            Where we are today
          </motion.h2>

          <div
            className="traction-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}
          >
            {tractionItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={tractionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.08 }}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "2rem",
                    color: "var(--accent-text)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  {item.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-primary)",
                  }}
                >
                  {item.label}
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  {item.note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section
        ref={visionRef}
        style={{
          padding: "5rem 1.5rem",
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0 }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-text)", marginBottom: "1.25rem" }}
          >
            Vision
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            style={{ color: "var(--text-primary)", marginBottom: "1.5rem" }}
          >
            The leading automation agency in Southeast Asia
          </motion.h2>

          {[
            "Our near-term goal is to establish ORAGON as the go-to automation and AI partner for Philippine SMEs — building a portfolio of productized services and recurring-revenue SaaS tools that solve the most common pain points in Filipino business operations.",
            "Longer term, we see a clear path to expanding across Southeast Asia, where the same digitization gap exists in Indonesia, Vietnam, and Thailand. The infrastructure we're building now — our delivery model, our product suite, our local reputation — is designed to scale.",
            "We're not trying to move fast and break things. We're building a company that creates genuine value for the businesses and people it serves, and that will still be standing in 10 years.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.08 }}
              style={{ fontSize: "0.95rem", margin: "0 0 1rem" }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section
        ref={ctaRef}
        style={{ padding: "5rem 1.5rem", textAlign: "center" }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0 }}
            style={{ color: "var(--text-primary)", marginBottom: "1rem" }}
          >
            Interested in what we&apos;re building?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            style={{ marginBottom: "2rem" }}
          >
            We&apos;re open to conversations with investors who believe in the Southeast Asian
            market and want to back teams that ship real products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.18 }}
          >
            <a href="mailto:support@oragon.com.ph" className="btn-primary">
              support@oragon.com.ph
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .investors-two-col {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .traction-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .traction-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
