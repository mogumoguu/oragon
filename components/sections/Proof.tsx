"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const proofItems = [
  { label: "SmartStock", href: "https://smartstockapp.online", status: "live" as const },
  { label: "Oragon Bookings", href: "https://book.oragon.com.ph/demo-cafe", status: "live" as const },
];

export default function Proof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      style={{
        padding: "2.5rem 1.5rem",
        background: "transparent",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        className="max-w-4xl mx-auto"
        ref={ref}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem 2rem",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent-text)",
          }}
        >
          Already built
        </motion.span>

        {proofItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.08 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "var(--text-primary)",
              textDecoration: "none",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "0.25rem",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent-text)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px rgba(34, 197, 94, 0.5)",
                flexShrink: 0,
              }}
            />
            {item.label}
            <span style={{ color: "var(--text-secondary)", fontSize: "0.78rem" }}>
              ({item.status})
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
