"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Customers", href: "/customers" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    // Run once on mount
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`ir-header ${scrolled ? "is-scrolled" : "is-top"}`}>
      <div className="ir-header-inner">
        {/* Logo */}
        <Link href="/" className="ir-header-logo">
          iRamdani
        </Link>

        {/* Desktop Nav */}
        <nav className="ir-header-nav">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="ir-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="ir-header-actions">
          <Link href="/login" className="ir-btn-ghost">
            Log in
          </Link>
          <Link href="/signup" className="ir-btn-primary">
            Get started
          </Link>

          {/* Mobile toggle */}
          <button
            className="ir-mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "16px",
            right: "16px",
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(16px)",
            borderRadius: "12px",
            border: "1px solid rgba(17,17,17,0.08)",
            boxShadow: "0 8px 32px rgba(17,17,17,0.12)",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="ir-nav-link"
              style={{ justifyContent: "flex-start" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <hr style={{ margin: "8px 0", border: "none", borderTop: "1px solid rgba(17,17,17,0.07)" }} />
          <Link href="/login" className="ir-nav-link" onClick={() => setMenuOpen(false)}>
            Log in
          </Link>
          <Link
            href="/signup"
            className="ir-button ir-button-primary"
            style={{ justifyContent: "center" }}
            onClick={() => setMenuOpen(false)}
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  );
}
