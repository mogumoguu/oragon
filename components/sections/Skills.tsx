"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealBox from "@/components/ui/RevealBox";

const ease = [0.22, 1, 0.36, 1] as const;

const columns = [
  {
    category: "Front-end",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Back-end",
    items: ["Node.js", "Next.js API", "REST APIs", "PostgreSQL", "Supabase"],
  },
  {
    category: "AI & Automation",
    items: ["Claude AI", "Gemini", "n8n", "Prompt Engineering", "AI Workflows"],
  },
  {
    category: "Tools",
    items: ["Git / GitHub", "Vercel", "Docker", "Figma", "VS Code"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <div style={{ marginBottom: "3.5rem" }}>
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
              Technical Skills
            </RevealBox>
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            style={{ color: "var(--text-primary)", margin: 0 }}
          >
            What I Work With
          </motion.h2>
        </div>

        {/* 4-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {columns.map((col, colIdx) => (
            <motion.div
              key={col.category}
              initial={{ opacity: 0, y: 48, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.15 + colIdx * 0.1 }}
            >
              {/* Category label */}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {col.category}
              </p>

              {/* Skill list */}
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {col.items.map((item, itemIdx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      ease,
                      delay: 0.25 + colIdx * 0.1 + itemIdx * 0.06,
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        flexShrink: 0,
                        opacity: 0.6,
                      }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
