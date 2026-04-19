"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import OragonLogo from "@/components/ui/OragonLogo";

const links = [
  { label: "Services",  href: "/#services" },
  { label: "Work",      href: "/projects" },
  { label: "About",     href: "/about" },
  { label: "Investors", href: "/investors" },
  { label: "Contact",   href: "/#contact" },
];

function NavCTA({ onClick, scrolled }: { onClick?: () => void; scrolled: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="/#contact"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        textDecoration: "none",
        padding: "0.55rem 1.1rem",
        borderRadius: "3px",
        border: "1px solid rgba(251,146,60,0.6)",
        background: hovered ? "#fb923c" : "transparent",
        color: !hovered ? "#fb923c" : "#ffffff",
        transition: "all 0.2s ease",
      }}
    >
      Work With Us
    </Link>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor      = "rgba(30,24,20,0.65)";
  const linkHoverColor = "#1a1a1a";
  const hamburgerColor = "#1a1a1a";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.96)" : "rgba(255, 255, 255, 0.80)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.08)"
          : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="animate-fade-up" style={{ textDecoration: "none" }}>
          <OragonLogo size={28} showWordmark={true} variant="light" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0 animate-fade-up delay-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: linkColor,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = linkHoverColor)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = linkColor)
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <NavCTA scrolled={scrolled} />
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: hamburgerColor,
                transition: "all 0.25s ease",
                transform:
                  menuOpen && i === 0
                    ? "translateY(6px) rotate(45deg)"
                    : menuOpen && i === 2
                    ? "translateY(-6px) rotate(-45deg)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          borderTop: menuOpen ? "1px solid rgba(0,0,0,0.08)" : "none",
          background: "rgba(255,255,255,0.98)",
        }}
      >
        <ul className="list-none m-0 p-0 flex flex-col px-6 py-4 gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(30,24,20,0.75)",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <NavCTA scrolled={scrolled} onClick={() => setMenuOpen(false)} />
          </li>
        </ul>
      </div>
    </header>
  );
}
