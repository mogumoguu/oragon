"use client";

import { useState } from "react";
import Link from "next/link";
import OragonLabsLogo from "@/components/ui/OragonLabsLogo";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  textDecoration: "none",
};

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid #f1eeeb",
      }}
    >
      <nav
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "18px 6vw",
        }}
      >
        {/* Brand */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", justifySelf: "start" }}>
          <OragonLabsLogo size={34} />
          <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "19px",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "#1a1a1a",
              }}
            >
              Oragon Labs
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "8px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#9a958e",
                lineHeight: 1.3,
                marginTop: "5px",
              }}
            >
              Systems · Automation · Websites
            </span>
          </span>
        </Link>

        {/* Desktop links (page-centered) */}
        <div className="ol-nav-links" style={{ justifySelf: "center", display: "flex", gap: "28px", whiteSpace: "nowrap" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{ ...mono, color: "#4a4a4a" }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right cluster: CTA + hamburger */}
        <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            href="/contact"
            className="ol-nav-cta"
            style={{ ...mono, color: "#fb923c", border: "1px solid #f0c9a8", padding: "9px 16px", borderRadius: "999px" }}
          >
            Get in touch
          </Link>

          <button
            className="ol-nav-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: "22px", height: "1.6px", background: "#1a1a1a" }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="ol-nav-mobile"
        style={{
          display: "none",
          maxHeight: open ? "360px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          background: "rgba(255,255,255,0.98)",
          borderTop: open ? "1px solid #f1eeeb" : "1px solid transparent",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "18px 6vw" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ ...mono, color: "#4a4a4a" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{ ...mono, color: "#fb923c" }}>
            Get in touch
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .ol-nav-links { display: none !important; }
          .ol-nav-cta   { display: none !important; }
          .ol-nav-burger { display: flex !important; }
          .ol-nav-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
