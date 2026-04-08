"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroCanvas = dynamic(() => import("@/components/ui/HeroCanvas"), {
  ssr: false,
});

const H = {
  textPrimary:   "#eaeaea",
  textSecondary: "#9e9e9e",
  textMuted:     "#606060",
  accent:        "#f97316",
  border:        "#2a2220",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(ellipse 90% 70% at 15% 10%, rgba(160, 50, 5, 0.55) 0%, transparent 60%), #06040a",
      }}
    >
      {/* Particle canvas */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <HeroCanvas />
      </div>

      {/* Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(4, 4, 8, 0.55)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          width: "100%",
          padding: "0 1.5rem",
          textAlign: "left",
        }}
      >
        {/* Value statement */}
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
            marginBottom: "1.25rem",
            maxWidth: "720px",
          }}
        >
          Your problems. Our solutions.
        </motion.h1>

        {/* Accent divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.4 }}
          style={{
            width: "48px",
            height: "2px",
            background: H.accent,
            margin: "0 0 1.5rem",
            transformOrigin: "left center",
          }}
        />

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
            maxWidth: "480px",
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
            maxWidth: "480px",
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
          style={{ display: "flex", gap: "1rem", justifyContent: "flex-start", flexWrap: "wrap" }}
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

    </section>
  );
}
