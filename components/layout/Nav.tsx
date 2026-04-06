"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#projects" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "var(--nav-bg-scrolled)"
          : "var(--nav-bg-top)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="animate-fade-up"
          style={{ textDecoration: "none" }}
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
        >
          <span
            className="font-display text-primary"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.1rem",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Orena
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0 animate-fade-up delay-2">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.25rem 0",
                  transition: "color 0.2s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary"
            >
              Work With Us
            </button>
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
                background: "var(--text-primary)",
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
          maxHeight: menuOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          borderTop: menuOpen ? "1px solid var(--border-subtle)" : "none",
          background: "var(--nav-mobile-bg)",
        }}
      >
        <ul className="list-none m-0 p-0 flex flex-col px-6 py-4 gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary"
            >
              Work With Us
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
