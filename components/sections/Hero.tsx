"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const H = {
  textPrimary:   "var(--text-primary)",
  textSecondary: "var(--text-secondary)",
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
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: H.textPrimary,
            marginBottom: "0.75rem",
          }}
        >
          We build AI automation that{" "}
          <span style={{ color: "var(--accent)" }}>actually ships.</span>
        </motion.h1>

        {/* Glow line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          style={{ position: "relative", width: "100%", height: "40px", marginBottom: "0.75rem" }}
        >
          <div style={{
            position: "absolute", top: 0, left: "12.5%", right: "12.5%",
            height: "2px", filter: "blur(3px)",
            background: "linear-gradient(to right, transparent, #fb923c, transparent)",
          }} />
          <div style={{
            position: "absolute", top: 0, left: "12.5%", right: "12.5%",
            height: "1px",
            background: "linear-gradient(to right, transparent, #fb923c, transparent)",
          }} />
          <div style={{
            position: "absolute", top: 0, left: "37.5%", right: "37.5%",
            height: "5px", filter: "blur(4px)",
            background: "linear-gradient(to right, transparent, #fb923c, transparent)",
          }} />
          <div style={{
            position: "absolute", top: 0, left: "37.5%", right: "37.5%",
            height: "1px",
            background: "linear-gradient(to right, transparent, #fb923c, transparent)",
          }} />
        </motion.div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.45 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            lineHeight: 1.65,
            color: H.textPrimary,
            maxWidth: "620px",
            margin: "0 0 2.5rem",
            fontWeight: 500,
          }}
        >
          Custom AI tools and automated workflows for Filipino SMEs. Book a 30-min discovery call to see if we&apos;re a fit.
        </motion.p>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.55 }}
        >
          <button
            onClick={() => scrollTo("booking")}
            className="btn-primary"
            style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}
          >
            Book a call
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
