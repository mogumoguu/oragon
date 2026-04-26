"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef  = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const ctaInView  = useInView(ctaRef,  { once: true, margin: "-60px" });

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
            Our Work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            style={{ color: "var(--text-primary)", margin: "0 0 1.5rem" }}
          >
            Products we&apos;ve shipped.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            style={{ fontSize: "1.05rem", maxWidth: "560px", margin: 0 }}
          >
            We build real software for real problems. Here&apos;s what we&apos;ve shipped so far.
          </motion.p>
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section
        ref={gridRef}
        style={{ padding: "5rem 1.5rem" }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="projects-page-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 480px))",
              gap: "1.5rem",
              justifyContent: "center",
            }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        style={{
          padding: "4rem 1.5rem 5rem",
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          textAlign: "center",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0 }}
            style={{ color: "var(--text-primary)", marginBottom: "1rem" }}
          >
            Have a project in mind?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            style={{ marginBottom: "2rem" }}
          >
            We&apos;re always open to new challenges. Tell us what you&apos;re building.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.18 }}
          >
            <Link href="/#contact" className="btn-primary">
              Let&apos;s Talk
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .projects-page-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
