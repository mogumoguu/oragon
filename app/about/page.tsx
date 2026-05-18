"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const founder = {
  initials: "MI",
  name: "Miguel Isorena",
  role: "Founder",
  bio: "I'm Miguel, 18, building Oragon solo from the Philippines. I do all the engineering and product work myself, from full-stack web apps to AI-powered workflows. Every project I take on is one I scope, build, and ship personally, no agency handoffs. The reason I started Oragon: I kept seeing Filipino businesses drowning in manual work that software could fix. That's still the only reason it exists.",
};

export default function AboutPage() {
  const missionRef = useRef<HTMLDivElement>(null);
  const teamRef   = useRef<HTMLDivElement>(null);

  const missionInView = useInView(missionRef, { once: true, margin: "-60px" });
  const teamInView    = useInView(teamRef,    { once: true, margin: "-60px" });

  return (
    <main style={{ paddingTop: "4rem" }}>

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
            My Mission
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
            "Oragon is a Bicolano word. It means fierce, brave, but still humble. That's the company I'm building: an automation and AI agency in the Philippines, built on the belief that the right technology, applied thoughtfully, gives people their time back.",
            "I don't optimize for profit first. I optimize for your team's freedom: the freedom to focus on the work that actually matters, instead of being buried in manual tasks, broken processes, and tools that don't talk to each other.",
            "As the Philippines moves toward a more tech-centered economy, I'm here to make sure local businesses don't get left behind. Every system I build, every workflow I automate, is one step closer to that goal.",
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
            Founder
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            style={{ color: "var(--text-primary)", marginBottom: "3rem" }}
          >
            Meet the founder
          </motion.h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={teamInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.18 }}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                maxWidth: "560px",
                width: "100%",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "84px",
                  height: "84px",
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
                    fontSize: "1.25rem",
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
                    fontSize: "1.2rem",
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
              <p style={{ fontSize: "0.95rem", margin: 0, lineHeight: 1.7 }}>
                {founder.bio}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
