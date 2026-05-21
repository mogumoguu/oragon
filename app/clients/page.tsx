"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BookingSection from "@/components/sections/BookingSection";

const ease = [0.22, 1, 0.36, 1] as const;

type Project = {
  name: string;
  tagline: string;
  bullets: string[];
  live: string;
  liveUrl: string;
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    name: "SmartStock",
    tagline: "AI-powered inventory for Philippine micro-retail.",
    bullets: [
      "Live PayMongo billing with auto-renew cards and 30-day GCash/Maya subscriptions",
      "AI forecasting (Gemini + Prophet) on 14+ days of sales history",
      "Auto-downgrade for expired e-wallet users via Cloud Scheduler",
    ],
    live: "smartstockapp.online",
    liveUrl: "https://smartstockapp.online",
    stack: ["Next.js 14", "FastAPI", "Neon Postgres", "Gemini"],
  },
  {
    name: "School App",
    tagline: "Multi-tenant school management for parents, teachers, and admins.",
    bullets: [
      "School-wide and per-class announcement feeds with read receipts",
      "Grade entry plus bulk xlsx upload, with parent-facing report views",
      "Calendar with ICS subscribe (Google Calendar one-tap)",
    ],
    live: "oragon-schools-app.vercel.app",
    liveUrl: "https://oragon-schools-app.vercel.app/school-app/feed",
    stack: ["Next.js 16", "Supabase", "Tailwind v4", "Resend"],
  },
  {
    name: "Oragon Bookings",
    tagline: "Appointment and reminder automation for service businesses.",
    bullets: [
      "Variable-time bookings with multi-booking-per-slot capacity",
      "Admin dashboard with reversible booking status",
      "Built for salons, clinics, restaurants, and cafés",
    ],
    live: "book.oragon.com.ph",
    liveUrl: "https://book.oragon.com.ph/demo-cafe",
    stack: ["Next.js 15", "Supabase", "Tailwind"],
  },
];

const USE_CASES: { vertical: string; items: string[] }[] = [
  {
    vertical: "Restaurants and cafés",
    items: [
      "Online booking with no-show fees",
      "Automated reminders",
      "Branded ordering pages",
      "Inventory + POS integration",
    ],
  },
  {
    vertical: "Salons and clinics",
    items: [
      "Appointment booking with deposit collection",
      "SMS or Messenger reminders",
      "Customer database with visit history",
    ],
  },
  {
    vertical: "Retail and sari-sari stores",
    items: [
      "AI inventory forecasting",
      "Low-stock alerts",
      "Custom barcode generation",
      "Multi-location stock visibility",
    ],
  },
  {
    vertical: "Schools",
    items: [
      "Announcements and grade portals",
      "Calendar with parent subscriptions",
      "Faculty record-keeping",
      "Magic-link sign-in for parents",
    ],
  },
  {
    vertical: "Service businesses generally",
    items: [
      "Outreach automation and lead scraping",
      "Email and Messenger workflows",
      "Internal ops dashboards",
      "AI-assisted document drafting",
    ],
  },
];

const PROCESS_STEPS: { n: string; title: string; body: string }[] = [
  { n: "01", title: "Discovery", body: "30-min call. Free. Walk through your business and the problem worth solving." },
  { n: "02", title: "Scope", body: "Written proposal. Fixed price, fixed timeline, deliverables in plain language." },
  { n: "03", title: "Build", body: "Typically 2 to 6 weeks for the first deliverable. We keep you in the loop weekly." },
  { n: "04", title: "Handoff", body: "Training session for your team plus a written runbook. The system is yours." },
  { n: "05", title: "Support", body: "Optional monthly retainer for ongoing changes and new features." },
];

const WHY: { title: string; body: string }[] = [
  {
    title: "AI-native build approach",
    body: "We build with AI in the loop from the first commit. That is why we can ship in weeks what used to take months. The output is real production software, not prototypes.",
  },
  {
    title: "Built for the Philippines",
    body: "PHP pricing, GCash and Maya and card payments through PayMongo, Filipino-SMB-scale UX. Not a foreign product with the Philippines bolted on.",
  },
  {
    title: "Founder-led work",
    body: "Oragon is small and senior by design. No agency handoffs, no junior-dev rotation. The person who scopes your project is the same person who ships it.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--accent-text)",
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

export default function ClientsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const howRef = useRef<HTMLDivElement>(null);
  const possibleRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-60px" });
  const howInView = useInView(howRef, { once: true, margin: "-60px" });
  const possibleInView = useInView(possibleRef, { once: true, margin: "-60px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-60px" });
  const processInView = useInView(processRef, { once: true, margin: "-60px" });
  const pricingInView = useInView(pricingRef, { once: true, margin: "-60px" });

  function handlePrint() {
    if (typeof window !== "undefined") window.print();
  }

  return (
    <main style={{ paddingTop: "4rem" }} className="clients-page">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{
          padding: "6rem 1.5rem 5rem",
          background: "var(--bg-base)",
        }}
      >
        <div className="max-w-3xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
            <Eyebrow>For clients</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.08 }}
            style={{ color: "var(--text-primary)", margin: 0 }}
          >
            What we build, how we work,{" "}
            <span style={{ color: "var(--accent)" }}>and whether we&apos;re a fit.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.18 }}
            style={{ fontSize: "1.05rem", margin: "0.5rem 0 1rem", color: "var(--text-secondary)" }}
          >
            Oragon is an AI automation agency for Filipino businesses. We build custom AI tools and automated workflows. This page is the quickest way to see what we&apos;ve shipped, how engagements work, and whether your project is a fit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.28 }}
            style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a href="#booking" className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.75rem 1.5rem" }}>
              Book a discovery call
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <button
              type="button"
              onClick={handlePrint}
              className="btn-primary print-hide"
              style={{ fontSize: "0.85rem", padding: "0.75rem 1.5rem", cursor: "pointer" }}
            >
              Download as PDF
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio ──────────────────────────────────────────── */}
      <section
        ref={portfolioRef}
        style={{
          padding: "5rem 1.5rem",
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="max-w-5xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "640px" }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={portfolioInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
              <Eyebrow>What we&apos;ve shipped</Eyebrow>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.08 }}
              style={{ color: "var(--text-primary)", margin: 0 }}
            >
              Three live products.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.16 }}
              style={{ margin: 0 }}
            >
              Each one shipped end-to-end and used in production today. Click through to try them yourself.
            </motion.p>
          </div>

          <div
            className="portfolio-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease, delay: 0.2 + i * 0.08 }}
                style={{
                  background: "var(--bg-base)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 0.4rem", color: "var(--text-primary)" }}>{p.name}</h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-secondary)" }}>{p.tagline}</p>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        paddingLeft: "1.1rem",
                        position: "relative",
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "0.55rem",
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "var(--accent)",
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: "auto",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--accent-text)",
                    textDecoration: "none",
                    paddingTop: "0.5rem",
                    borderTop: "1px solid var(--border-subtle)",
                  }}
                >
                  View live → {p.live}
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How I work ─────────────────────────────────────────── */}
      <section
        ref={howRef}
        style={{ padding: "5rem 1.5rem" }}
      >
        <div className="max-w-3xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={howInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
            <Eyebrow>How we work</Eyebrow>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            style={{ color: "var(--text-primary)", margin: 0 }}
          >
            Custom builds, not subscriptions.
          </motion.h2>
          {[
            "Every engagement starts with a free 30-minute discovery call. We walk through your business, find the highest-leverage thing software can fix, and decide together if it's worth building.",
            "If we're a fit, we write a scoped SOW. Fixed price, fixed timeline, deliverables in plain language. No surprise per-seat charges, no monthly bills you didn't sign up for.",
            "Most projects ship in 2 to 6 weeks. You get the code, the deployment, training for your team, and a written runbook. If you want ongoing changes, we work that into a monthly retainer.",
          ].map((t, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={howInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.16 + i * 0.08 }}
              style={{ margin: 0, fontSize: "0.95rem" }}
            >
              {t}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ── What I can build ───────────────────────────────────── */}
      <section
        ref={possibleRef}
        style={{
          padding: "5rem 1.5rem",
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="max-w-5xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "640px" }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={possibleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
              <Eyebrow>What we can build for you</Eyebrow>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={possibleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.08 }}
              style={{ color: "var(--text-primary)", margin: 0 }}
            >
              If you can name it, we can probably build it.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={possibleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.16 }}
              style={{ margin: 0 }}
            >
              A short list of the kinds of things we&apos;ve built or are ready to build. Your project doesn&apos;t have to be on this list.
            </motion.p>
          </div>

          <div
            className="use-cases-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {USE_CASES.map((u, i) => (
              <motion.div
                key={u.vertical}
                initial={{ opacity: 0, y: 20 }}
                animate={possibleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.06 }}
                style={{
                  background: "var(--bg-base)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "var(--text-primary)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {u.vertical}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {u.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        paddingLeft: "1rem",
                        position: "relative",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "0.5rem",
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "var(--accent)",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Oragon ─────────────────────────────────────────── */}
      <section ref={whyRef} style={{ padding: "5rem 1.5rem" }}>
        <div className="max-w-5xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "640px" }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={whyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
              <Eyebrow>Why Oragon</Eyebrow>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.08 }}
              style={{ color: "var(--text-primary)", margin: 0 }}
            >
              Three reasons to work with us.
            </motion.h2>
          </div>

          <div
            className="why-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.16 + i * 0.08 }}
                style={{
                  borderTop: "2px solid var(--accent)",
                  paddingTop: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--text-primary)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {w.title}
                </p>
                <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.65 }}>{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────── */}
      <section
        ref={processRef}
        style={{
          padding: "5rem 1.5rem",
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="max-w-3xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
              <Eyebrow>Process</Eyebrow>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.08 }}
              style={{ color: "var(--text-primary)", margin: 0 }}
            >
              Five steps from first call to live system.
            </motion.h2>
          </div>

          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {PROCESS_STEPS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease, delay: 0.14 + i * 0.06 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.25rem",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    color: "var(--accent-text)",
                    background: "var(--accent-glow)",
                    border: "1px solid var(--accent-glow-strong)",
                    padding: "0.3rem 0.55rem",
                    borderRadius: "3px",
                    minWidth: "2.5rem",
                    textAlign: "center",
                  }}
                >
                  {s.n}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "var(--text-primary)",
                      margin: "0 0 0.35rem",
                    }}
                  >
                    {s.title}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.6 }}>{s.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Pricing approach ───────────────────────────────────── */}
      <section ref={pricingRef} style={{ padding: "5rem 1.5rem" }}>
        <div className="max-w-3xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={pricingInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
            <Eyebrow>Pricing</Eyebrow>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            style={{ color: "var(--text-primary)", margin: 0 }}
          >
            Per-project, not per-seat.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.16 }}
            style={{ margin: 0 }}
          >
            We price every engagement based on what you need built, not how many people use it. The real number lives in your scoped SOW after the discovery call. Discovery is free. PHP, not USD.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.24 }}
            style={{ listStyle: "none", padding: 0, margin: "0.5rem 0 0", display: "flex", flexDirection: "column", gap: "0.6rem" }}
          >
            {[
              "Fixed-price project: one-time engagement, scoped and shipped",
              "Project plus retainer: ongoing maintenance and new features",
              "No published price tags. The right number depends on the scope.",
            ].map((line) => (
              <li
                key={line}
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-secondary)",
                  paddingLeft: "1.2rem",
                  position: "relative",
                  lineHeight: 1.55,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.55rem",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                  }}
                />
                {line}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── Closing CTA: embedded booking ──────────────────────── */}
      <BookingSection />

      {/* ── Print styles ───────────────────────────────────────── */}
      <style>{`
        .portfolio-grid > article {
          min-height: 100%;
        }
        @media (max-width: 640px) {
          .portfolio-grid,
          .use-cases-grid,
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media print {
          html, body {
            background: #ffffff !important;
            color: #1a1a1a !important;
          }
          header[class*="fixed"],
          .print-hide,
          #booking,
          body::after {
            display: none !important;
          }
          .clients-page {
            padding-top: 0 !important;
          }
          .clients-page section {
            padding: 1.25rem 0 !important;
            border: none !important;
            background: #ffffff !important;
            page-break-inside: avoid;
          }
          .clients-page h1,
          .clients-page h2,
          .clients-page h3 {
            color: #1a1a1a !important;
          }
          .clients-page p,
          .clients-page li {
            color: #4a4a4a !important;
          }
          .clients-page .tag {
            background: #ffffff !important;
            border-color: #e5e0db !important;
          }
        }
      `}</style>
    </main>
  );
}
