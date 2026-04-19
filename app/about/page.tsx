"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const founders = [
  {
    initials: "MI",
    name: "Miguel Isorena",
    role: "Founder & CEO",
    bio: "Miguel leads product and engineering at Oragon. He builds the AI-powered tools and automation systems the company ships to clients — from full-stack web platforms to workflow integrations. Before founding Oragon, he spent years learning to solve real business problems with code, developing a philosophy that technology should make people's work feel lighter, not more complicated.",
  },
  {
    initials: "DI",
    name: "Dennis Isorena",
    role: "Co-Founder",
    bio: "Dennis leads Oragon's business strategy and financial operations, ensuring the company is built to last. He keeps the organization grounded — focused on sustainable growth, strong client relationships, and building a business that creates real value for the people it serves.",
  },
];

export default function AboutPage() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const teamRef   = useRef<HTMLDivElement>(null);

  const heroInView    = useInView(heroRef,    { once: true, margin: "-60px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-60px" });
  const teamInView    = useInView(teamRef,    { once: true, margin: "-60px" });

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
            Who We Are
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            style={{ color: "var(--text-primary)", margin: "0 0 1.5rem" }}
          >
            Fierce in solving problems.
            <br />
            <span style={{ color: "var(--accent)" }}>Humble in how we do it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            style={{ fontSize: "1.1rem", maxWidth: "640px", margin: 0 }}
          >
            ORAGON is a Filipino automation and AI agency. We build the systems that
            free your team to focus on the work that actually matters.
          </motion.p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section
        ref={missionRef}
        style={{
          padding: "5rem 1.5rem",
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="max-w-4xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0 }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-text)", margin: 0 }}
          >
            Our Mission
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            style={{ color: "var(--text-primary)", margin: 0 }}
          >
            Technology should serve people, not replace them.
          </motion.h2>

          {[
            "ORAGON is a Bicolano word — it means fierce, brave, but still humble. That's exactly who we are. We're an automation and AI agency founded in the Philippines, built on the belief that the right technology, applied thoughtfully, gives people their time back.",
            "We don't optimize for profit first. We optimize for your team's freedom — the freedom to focus on the work that actually matters, instead of being buried in manual tasks, broken processes, and tools that don't talk to each other.",
            "As the Philippines moves toward a more tech-centered economy, we're here to make sure local businesses don't get left behind. Every system we build, every workflow we automate, is one step closer to that goal.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.08 }}
              style={{ fontSize: "0.95rem", margin: 0 }}
            >
              {text}
            </motion.p>
          ))}

          {/* Values tags */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.42 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}
          >
            {["People First", "AI-Powered", "Automation", "Philippines"].map((label) => (
              <span key={label} className="tag">{label}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team ── */}
      <section
        ref={teamRef}
        style={{ padding: "5rem 1.5rem" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0 }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-text)", marginBottom: "1.25rem" }}
          >
            The Founders
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            style={{ color: "var(--text-primary)", marginBottom: "3rem" }}
          >
            Meet the team
          </motion.h2>

          <div
            className="founders-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                animate={teamInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.55, ease, delay: 0.18 + i * 0.12 }}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
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
                    position: "relative",
                    overflow: "hidden",
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
                    {founder.initials}
                  </span>
                </div>

                {/* Name + role */}
                <div>
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
                    {founder.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--accent-text)",
                      margin: "0.25rem 0 0",
                    }}
                  >
                    {founder.role}
                  </p>
                </div>

                {/* Bio */}
                <p style={{ fontSize: "0.9rem", margin: 0, lineHeight: 1.7 }}>
                  {founder.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .founders-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </main>
  );
}
