"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import BookingSection from "@/components/sections/BookingSection";

const ease = [0.22, 1, 0.36, 1] as const;

type Project = {
  name: string;
  tagline: string;
  bullets: string[];
  liveLabel: string;
  liveUrl: string;
  image: string | null;
  imageAlt: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    name: "SmartStock",
    tagline: "AI-powered inventory for Philippine micro-retail.",
    bullets: [
      "Live PayMongo billing",
      "AI demand forecasting",
      "Multi-tenant Cloud Run",
    ],
    liveLabel: "smartstockapp.online",
    liveUrl: "https://smartstockapp.online",
    image: "/clients/smartstock.png",
    imageAlt: "SmartStock dashboard with inventory KPIs and AI forecasting",
    accent: "#fb923c",
  },
  {
    name: "Oragon Bookings",
    tagline: "Appointment + reminder automation for service businesses.",
    bullets: [
      "Variable-time slots",
      "Multi-capacity bookings",
      "Reversible status",
    ],
    liveLabel: "book.oragon.com.ph",
    liveUrl: "https://book.oragon.com.ph/demo-cafe",
    image: null,
    imageAlt: "",
    accent: "#10b981",
  },
];

const USE_CASES: { vertical: string; items: string[]; glyph: string }[] = [
  {
    vertical: "Restaurants and cafés",
    glyph: "F",
    items: ["Online booking", "No-show fees", "Branded ordering"],
  },
  {
    vertical: "Salons and clinics",
    glyph: "S",
    items: ["Appointments", "Auto reminders", "Deposit collection"],
  },
  {
    vertical: "Retail and sari-sari",
    glyph: "R",
    items: ["AI forecasting", "Low-stock alerts", "Barcode labels"],
  },
  {
    vertical: "Schools",
    glyph: "E",
    items: ["Announcements", "Grade portals", "Parent calendar"],
  },
];

const PROCESS_STEPS: { n: string; title: string; sub: string }[] = [
  { n: "01", title: "Discovery", sub: "30 min, free" },
  { n: "02", title: "Scope", sub: "Fixed price, fixed timeline" },
  { n: "03", title: "Build", sub: "2 to 6 weeks typical" },
  { n: "04", title: "Handoff", sub: "Training + runbook" },
  { n: "05", title: "Support", sub: "Optional retainer" },
];

const WHY: { title: string; sub: string }[] = [
  { title: "AI-native", sub: "Built with AI in the loop. Weeks, not months." },
  { title: "PH-first", sub: "PHP pricing. GCash + Maya + cards. Filipino-scale UX." },
  { title: "Founder-led", sub: "No agency handoffs. Same person scopes and ships." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        fontWeight: 500,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--accent-text)",
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

function Slide({
  children,
  background,
  noBorder,
  innerRef,
}: {
  children: React.ReactNode;
  background?: string;
  noBorder?: boolean;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section
      ref={innerRef}
      className="slide"
      style={{
        padding: "5rem 1.5rem",
        background: background ?? "var(--bg-base)",
        borderTop: noBorder ? "none" : "1px solid var(--border-subtle)",
      }}
    >
      {children}
    </section>
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

  // Marp-generated landscape deck lives at /public/oragon-business-profile.pdf.
  // Regenerate with `npm run deck:profile` after editing decks/business-profile.md.
  const PROFILE_PDF = "/oragon-business-profile.pdf";

  return (
    <main style={{ paddingTop: "4rem" }} className="clients-page">

      {/* ── 01 Hero ────────────────────────────────────────────── */}
      <Slide innerRef={heroRef} noBorder>
        <div
          className="slide-inner"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
              <Eyebrow>For clients</Eyebrow>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.08 }}
              style={{
                color: "var(--text-primary)",
                margin: 0,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.02,
              }}
            >
              We build what{" "}
              <span style={{ color: "var(--accent)" }}>actually ships.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.18 }}
              style={{ fontSize: "1.1rem", margin: 0, color: "var(--text-secondary)", maxWidth: "32ch" }}
            >
              Custom AI tools and automated workflows for Filipino businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.28 }}
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
            >
              <a href="#booking" className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.75rem 1.5rem" }}>
                Book a discovery call
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={PROFILE_PDF}
                download="oragon-business-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary print-hide"
                style={{ fontSize: "0.85rem", padding: "0.75rem 1.5rem" }}
              >
                Download business profile
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <path d="M5 1V8M5 8L1 4M5 8L9 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 11H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Visual: accent geometric block */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            style={{
              position: "relative",
              aspectRatio: "4 / 3",
              borderRadius: "14px",
              background: "linear-gradient(135deg, var(--accent-glow) 0%, transparent 60%), var(--bg-surface)",
              border: "1px solid var(--border)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "1.5rem",
                display: "grid",
                gridTemplateRows: "auto 1fr auto",
                gap: "1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-secondary)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "var(--accent-text)", letterSpacing: "0.12em", textTransform: "uppercase" }}>oragon.live</span>
                <span style={{ display: "flex", gap: "4px" }}>
                  {[1, 2, 3].map((i) => (
                    <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--border)" }} />
                  ))}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  ["Live products", "2"],
                  ["Verticals served", "5+"],
                  ["First reply rate", "Solid"],
                  ["Discovery calls", "Open"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      background: "var(--bg-base)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      padding: "0.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.25rem",
                    }}
                  >
                    <span style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>{label}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>{value}</span>
                  </div>
                ))}
              </div>
              <div style={{ height: "3px", borderRadius: "2px", background: "linear-gradient(to right, var(--accent), transparent)" }} />
            </div>
          </motion.div>
        </div>
      </Slide>

      {/* ── 02 Portfolio ──────────────────────────────────────── */}
      <Slide background="var(--bg-surface)" innerRef={portfolioRef}>
        <div className="slide-inner" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "1rem" }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={portfolioInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
              <Eyebrow>What we&apos;ve shipped</Eyebrow>
              <h2 style={{ color: "var(--text-primary)", margin: "0.5rem 0 0" }}>Live products.</h2>
            </motion.div>
          </div>

          <div
            className="portfolio-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.25rem",
            }}
          >
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease, delay: 0.18 + i * 0.1 }}
                style={{
                  background: "var(--bg-base)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Visual */}
                <div
                  style={{
                    aspectRatio: "16 / 10",
                    background: p.image
                      ? "var(--bg-elevated)"
                      : `linear-gradient(135deg, ${p.accent}22 0%, ${p.accent}08 100%)`,
                    borderBottom: "1px solid var(--border-subtle)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "1.5rem",
                      }}
                    >
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <rect x="6" y="14" width="44" height="32" rx="4" stroke={p.accent} strokeWidth="2" />
                        <path d="M14 26 L24 36 L42 18" stroke={p.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: p.accent,
                        }}
                      >
                        Live demo
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.9rem", flex: 1 }}>
                  <div>
                    <h3 style={{ margin: "0 0 0.3rem", color: "var(--text-primary)", fontSize: "1.2rem" }}>{p.name}</h3>
                    <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{p.tagline}</p>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        style={{
                          fontSize: "0.82rem",
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
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: p.accent,
                          }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: "auto",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--accent-text)",
                      textDecoration: "none",
                      paddingTop: "0.6rem",
                      borderTop: "1px solid var(--border-subtle)",
                    }}
                  >
                    View live → {p.liveLabel}
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Slide>

      {/* ── 03 How we work ────────────────────────────────────── */}
      <Slide innerRef={howRef}>
        <div className="slide-inner" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={howInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
            <Eyebrow>How we work</Eyebrow>
            <h2 style={{ color: "var(--text-primary)", margin: "0.5rem 0 0" }}>
              Custom builds, <span style={{ color: "var(--accent)" }}>not subscriptions.</span>
            </h2>
          </motion.div>

          <div
            className="how-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
          >
            {[
              { tag: "Step one", title: "Free discovery call", body: "30 minutes. We find the highest-leverage thing software can fix." },
              { tag: "Step two", title: "Scoped SOW", body: "Fixed price. Fixed timeline. Plain language. No per-seat surprises." },
              { tag: "Step three", title: "Ship in weeks", body: "2 to 6 weeks typical. Code, deployment, training, runbook." },
            ].map((s, i) => (
              <motion.div
                key={s.tag}
                initial={{ opacity: 0, y: 20 }}
                animate={howInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.18 + i * 0.08 }}
                style={{ display: "flex", flexDirection: "column", gap: "0.8rem", borderTop: "2px solid var(--accent)", paddingTop: "1.25rem" }}
              >
                <Eyebrow>{s.tag}</Eyebrow>
                <h3 style={{ margin: 0, color: "var(--text-primary)", fontSize: "1.25rem" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.55 }}>{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* ── 04 What we can build ──────────────────────────────── */}
      <Slide background="var(--bg-surface)" innerRef={possibleRef}>
        <div className="slide-inner" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={possibleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
            <Eyebrow>What we can build</Eyebrow>
            <h2 style={{ color: "var(--text-primary)", margin: "0.5rem 0 0" }}>
              If you can name it, <span style={{ color: "var(--accent)" }}>we can probably build it.</span>
            </h2>
          </motion.div>

          <div
            className="use-cases-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}
          >
            {USE_CASES.map((u, i) => (
              <motion.div
                key={u.vertical}
                initial={{ opacity: 0, y: 20 }}
                animate={possibleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.16 + i * 0.06 }}
                style={{
                  background: "var(--bg-base)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  minHeight: "220px",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    background: "var(--accent-glow)",
                    color: "var(--accent-text)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {u.glyph}
                </div>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                  {u.vertical}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  {u.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-secondary)",
                        paddingLeft: "0.9rem",
                        position: "relative",
                        lineHeight: 1.45,
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
      </Slide>

      {/* ── 05 Why Oragon ─────────────────────────────────────── */}
      <Slide innerRef={whyRef}>
        <div className="slide-inner" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={whyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
            <Eyebrow>Why Oragon</Eyebrow>
            <h2 style={{ color: "var(--text-primary)", margin: "0.5rem 0 0" }}>
              Three reasons <span style={{ color: "var(--accent)" }}>to work with us.</span>
            </h2>
          </motion.div>

          <div
            className="why-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
          >
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.16 + i * 0.08 }}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  minHeight: "180px",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: "36px",
                    height: "4px",
                    borderRadius: "2px",
                    background: "var(--accent)",
                  }}
                />
                <h3 style={{ margin: "0.25rem 0 0", color: "var(--text-primary)", fontSize: "1.4rem" }}>{w.title}</h3>
                <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.55 }}>{w.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* ── 06 Process ─────────────────────────────────────────── */}
      <Slide background="var(--bg-surface)" innerRef={processRef}>
        <div className="slide-inner" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
            <Eyebrow>Process</Eyebrow>
            <h2 style={{ color: "var(--text-primary)", margin: "0.5rem 0 0" }}>
              Five steps. <span style={{ color: "var(--accent)" }}>First call to live system.</span>
            </h2>
          </motion.div>

          <div
            className="process-row"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1rem",
            }}
          >
            {PROCESS_STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease, delay: 0.16 + i * 0.06 }}
                style={{
                  background: "var(--bg-base)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  minHeight: "150px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    color: "var(--accent-text)",
                  }}
                >
                  {s.n}
                </span>
                <h3 style={{ margin: 0, color: "var(--text-primary)", fontSize: "1.05rem" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* ── 07 Pricing ─────────────────────────────────────────── */}
      <Slide innerRef={pricingRef}>
        <div className="slide-inner" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={pricingInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}>
            <Eyebrow>Pricing</Eyebrow>
            <h2 style={{ color: "var(--text-primary)", margin: "0.5rem 0 0" }}>
              Per-project. <span style={{ color: "var(--accent)" }}>Not per-seat.</span>
            </h2>
          </motion.div>

          <div
            className="pricing-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
          >
            {[
              { title: "Fixed project", sub: "One-time scope. One-time price. Shipped." },
              { title: "Project plus retainer", sub: "Build, then ongoing monthly support." },
              { title: "Discovery is free", sub: "30 min, no pitch deck attached." },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.16 + i * 0.08 }}
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
                <h3 style={{ margin: 0, color: "var(--text-primary)", fontSize: "1.15rem" }}>{card.title}</h3>
                <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.55 }}>{card.sub}</p>
              </motion.div>
            ))}
          </div>

          <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-muted)", textAlign: "center" }}>
            PHP, not USD. Real number lands in your SOW.
          </p>
        </div>
      </Slide>

      {/* ── 08 Closing CTA: embedded booking ──────────────────── */}
      <BookingSection />

      {/* ── Print + responsive styles ─────────────────────────── */}
      <style>{`
        .slide {
          page-break-inside: avoid;
        }

        @media (max-width: 900px) {
          .slide-inner[style*="grid-template-columns: 1.2fr 1fr"],
          .slide-inner[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
          .use-cases-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .how-grid,
          .why-grid,
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          .process-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .use-cases-grid,
          .process-row {
            grid-template-columns: 1fr !important;
          }
        }

        @page {
          size: A4 landscape;
          margin: 0.5cm;
        }
        @media print {
          html, body {
            background: #ffffff !important;
            color: #1a1a1a !important;
          }
          /* Hide chrome */
          header[class*="fixed"],
          .print-hide,
          #booking,
          body::after {
            display: none !important;
          }
          .clients-page {
            padding-top: 0 !important;
          }
          /* Each section becomes its own landscape slide */
          .clients-page .slide {
            padding: 1.5rem 1cm !important;
            border: none !important;
            background: #ffffff !important;
            page-break-before: always;
            page-break-inside: avoid;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 19cm;
          }
          .clients-page .slide:first-of-type {
            page-break-before: avoid;
          }
          .clients-page .slide-inner {
            max-width: 100% !important;
          }
          /* Hero visual stays visible in print */
          .hero-visual {
            box-shadow: none !important;
          }
          /* Tone down colors for print */
          .clients-page h1,
          .clients-page h2,
          .clients-page h3 {
            color: #1a1a1a !important;
          }
          .clients-page p,
          .clients-page li {
            color: #4a4a4a !important;
          }
          /* Keep accent colored elements vivid */
          .clients-page h1 span,
          .clients-page h2 span {
            color: #ea580c !important;
          }
        }
      `}</style>
    </main>
  );
}
