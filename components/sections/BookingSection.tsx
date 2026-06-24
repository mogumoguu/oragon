"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import RevealBox from "@/components/ui/RevealBox";

const ease = [0.22, 1, 0.36, 1] as const;

// Cal.com inline embed for the 30-min discovery call.
// Live at cal.com/miguel-isorena/discovery-call (wired up 2026-05-18).
const CAL_LINK = "miguel-isorena/discovery-call";

export default function BookingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "discovery" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#fb923c" },
          dark: { "cal-brand": "#fb923c" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section
      id="booking"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
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
              Get your free Leak Map
            </RevealBox>
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.1 }}
            style={{ color: "var(--text-primary)", margin: "0 0 1rem" }}
          >
            Your Leak Map. 30 minutes. Free.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            We walk through your business, pinpoint the one process bleeding the most, and tell you straight up if we can help. That is your Leak Map, free.
          </motion.p>
        </div>

        {/* Cal.com embed */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          style={{
            background: "var(--bg-base)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "1rem",
            minHeight: "600px",
            overflow: "hidden",
          }}
        >
          <Cal
            namespace="discovery"
            calLink={CAL_LINK}
            style={{ width: "100%", height: "100%", minHeight: "580px", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </motion.div>

        {/* Fallback link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.45 }}
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
          }}
        >
          Or email{" "}
          <a
            href="mailto:support@oragon.com.ph"
            style={{
              color: "var(--accent-text)",
              textDecoration: "underline",
              textDecorationColor: "var(--border)",
              textUnderlineOffset: "3px",
            }}
          >
            support@oragon.com.ph
          </a>
        </motion.p>
      </div>
    </section>
  );
}
