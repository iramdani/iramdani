"use client";
import React from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  footer?: React.ReactNode;
}

export default function AuthLayout({ children, title, subtitle, footer }: AuthLayoutProps) {
  return (
    <div className="ir-auth-layout">
      {/* Left: Form */}
      <div className="ir-auth-left">
        {/* Logo */}
        <div style={{ marginBottom: "auto" }}>
          <Link href="/" style={{ fontSize: "18px", fontWeight: "700", color: "var(--color-midnight-ink)", textDecoration: "none" }}>
            iRamdani
          </Link>
        </div>

        {/* Form area */}
        <div style={{ maxWidth: "360px", width: "100%", margin: "0 auto", padding: "48px 0" }}>
          <div style={{ marginBottom: "32px" }}>
            <h1 style={{
              fontSize: "var(--text-heading-lg)",
              fontWeight: "700",
              letterSpacing: "var(--tracking-heading-lg)",
              lineHeight: "var(--leading-heading-lg)",
              color: "var(--color-midnight-ink)",
              margin: "0 0 10px",
            }}>
              {title}
            </h1>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-muted-ash)", margin: 0, lineHeight: "var(--leading-body)" }}>
              {subtitle}
            </p>
          </div>

          {children}

          {footer && (
            <>
              <hr className="ir-divider" style={{ margin: "28px 0" }} />
              <div style={{ fontSize: "var(--text-body)", color: "var(--color-muted-ash)" }}>
                {footer}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--color-muted-ash)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          <span>© {new Date().getFullYear()} iRamdani</span>
          <a href="mailto:support@iramdani.id" style={{ color: "var(--color-muted-ash)", textDecoration: "none" }}>Support</a>
        </div>
      </div>

      {/* Right: Visual panel */}
      <div className="ir-auth-right">
        <div className="ir-auth-gradient" />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "520px", width: "100%", display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Mock product screenshot */}
          <div style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "16px",
            padding: "24px",
            backdropFilter: "blur(8px)",
          }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
              {["#ff5f56","#febc2e","#28c840"].map((c, i) => (
                <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
              ))}
            </div>
            {[80, 55, 95, 70, 60].map((w, i) => (
              <div key={i} style={{
                height: "10px",
                width: `${w}%`,
                background: "rgba(255,255,255,0.12)",
                borderRadius: "6px",
                marginBottom: "12px",
              }} />
            ))}
          </div>

          {/* Quote card */}
          <div style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "28px",
            backdropFilter: "blur(8px)",
          }}>
            <div style={{ display: "inline-flex", background: "var(--color-engagement-gold)", color: "var(--color-midnight-ink)", fontSize: "10px", fontWeight: "700", padding: "4px 10px", borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
              Premium
            </div>
            <p style={{ fontSize: "20px", fontWeight: "700", color: "white", margin: "0 0 12px", lineHeight: 1.2, letterSpacing: "-0.3px" }}>
              Elevate your brand with professional design
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>
              From logos to full websites — crafted with precision and delivered with care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
