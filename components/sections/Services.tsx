"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services, type Service } from "@/lib/services";
import RevealBox from "@/components/ui/RevealBox";

const ease = [0.22, 1, 0.36, 1] as const;

const ServiceIcon = ({ icon }: { icon: Service["icon"] }) => {
  const icons: Record<Service["icon"], React.ReactElement> = {
    web: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    ai: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z"/>
        <circle cx="9" cy="9" r="1" fill="currentColor"/>
        <circle cx="15" cy="9" r="1" fill="currentColor"/>
      </svg>
    ),
    automation: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    consulting: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  };
  return icons[icon];
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      style={{
        padding: "6rem 1.5rem",
        background: "transparent",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
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
              What We Do
            </RevealBox>
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            style={{ color: "var(--text-primary)", margin: 0 }}
          >
            Services
          </motion.h2>
        </div>

        {/* Service cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: Service;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, ease, delay: 0.15 + index * 0.08 }}
      whileHover={{ y: -4 }}
      style={{
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "2rem 1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "border-color 0.25s, box-shadow 0.25s",
        cursor: "default",
      }}
      onHoverStart={(e) => {
        (e.target as HTMLElement).style.borderColor = "var(--accent)";
        (e.target as HTMLElement).style.boxShadow = "0 8px 32px var(--accent-glow)";
      }}
      onHoverEnd={(e) => {
        (e.target as HTMLElement).style.borderColor = "var(--border)";
        (e.target as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "8px",
          background: "var(--accent-glow)",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--accent-text)",
          flexShrink: 0,
        }}
      >
        <ServiceIcon icon={service.icon} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.05rem",
          color: "var(--text-primary)",
          margin: 0,
          letterSpacing: "-0.01em",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
          margin: 0,
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {service.description}
      </p>
    </motion.div>
  );
}
