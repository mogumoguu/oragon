"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services, type Service } from "@/lib/services";
import RevealBox from "@/components/ui/RevealBox";

const ease = [0.22, 1, 0.36, 1] as const;

const ServiceIcon = ({ icon }: { icon: Service["icon"] }) => {
  const icons: Record<Service["icon"], React.ReactElement> = {
    pos: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2"/>
        <path d="M3 10h18"/>
        <path d="M7 14h2M11 14h2"/>
        <path d="M9 20h6"/>
      </svg>
    ),
    bookings: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <path d="M16 2v4M8 2v4M3 10h18"/>
        <circle cx="8" cy="15" r="1" fill="currentColor"/>
        <circle cx="12" cy="15" r="1" fill="currentColor"/>
        <circle cx="16" cy="15" r="1" fill="currentColor"/>
      </svg>
    ),
    custom: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
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
            Three things we build
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
