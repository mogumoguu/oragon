"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const H = {
  textPrimary:   "var(--text-primary)",
  textSecondary: "var(--text-secondary)",
  accent:        "#fb923c",
  border:        "var(--border)",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AuroraBackground
      id="hero"
      className="justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          width: "100%",
          padding: "0 1.5rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(3rem, 7vw, 6rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: H.textPrimary,
            marginBottom: "0.75rem",
          }}
        >
          Your problems{" "}
          <br />
          Our solutions
        </motion.h1>

        {/* Glow line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          style={{ position: "relative", width: "100%", height: "40px", marginBottom: "0.75rem" }}
        >
          {/* Wide blur */}
          <div style={{
            position: "absolute", top: 0, left: "12.5%", right: "12.5%",
            height: "2px", filter: "blur(3px)",
            background: "linear-gradient(to right, transparent, #fb923c, transparent)",
          }} />
          {/* Sharp line */}
          <div style={{
            position: "absolute", top: 0, left: "12.5%", right: "12.5%",
            height: "1px",
            background: "linear-gradient(to right, transparent, #fb923c, transparent)",
          }} />
          {/* Center bright point blur */}
          <div style={{
            position: "absolute", top: 0, left: "37.5%", right: "37.5%",
            height: "5px", filter: "blur(4px)",
            background: "linear-gradient(to right, transparent, #fb923c, transparent)",
          }} />
          {/* Center bright point sharp */}
          <div style={{
            position: "absolute", top: 0, left: "37.5%", right: "37.5%",
            height: "1px",
            background: "linear-gradient(to right, transparent, #fb923c, transparent)",
          }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.45 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            lineHeight: 1.65,
            color: H.textPrimary,
            maxWidth: "520px",
            margin: "0 0 0.75rem",
            fontWeight: 500,
          }}
        >
          ORAGON builds the automations that free your team to focus on what matters.
        </motion.p>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
            lineHeight: 1.65,
            color: H.textSecondary,
            maxWidth: "520px",
            margin: "0 0 2.5rem",
          }}
        >
          We find the inefficiencies in your business and build the systems to eliminate them — so your people can do the work that actually moves things forward.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.55 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <button
            onClick={() => scrollTo("services")}
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.75rem 1.75rem" }}
          >
            Our Services
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              padding: "0.75rem 1.75rem",
              background: "transparent",
              border: `1px solid ${H.border}`,
              borderRadius: "4px",
              color: H.textSecondary,
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = H.accent;
              e.currentTarget.style.color = H.textPrimary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = H.border;
              e.currentTarget.style.color = H.textSecondary;
            }}
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
