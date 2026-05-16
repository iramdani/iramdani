"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard, ShoppingBag, Users, Settings,
  LogOut, Bell, ChevronDown, ShieldCheck
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  }

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#f8f8f6",
      fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
      color: "#111",
    }}>
      {/* ── Sidebar ── */}
      <aside style={{
        width: "224px",
        flexShrink: 0,
        background: "#fff",
        boxShadow: "1px 0 0 rgba(17,17,17,0.06)",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        top: 0,
        zIndex: 20,
      }}>

        {/* Logo + Admin badge */}
        <div style={{ padding: "18px 16px 14px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", marginBottom: "8px" }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "8px",
              background: "#111", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "13px", fontWeight: "700", color: "#fff",
              flexShrink: 0,
            }}>iR</div>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "#111", letterSpacing: "-0.1px" }}>
              iRamdani
            </span>
          </Link>
          {/* Admin badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "5px",
            background: "rgba(225,101,64,0.08)",
            color: "#c0440d",
            fontSize: "10px", fontWeight: "700",
            letterSpacing: "0.07em", textTransform: "uppercase",
            padding: "3px 8px", borderRadius: "100px",
            border: "1px solid rgba(225,101,64,0.15)",
          }}>
            <ShieldCheck size={9} />
            Admin
          </div>
        </div>

        {/* Section label */}
        <div style={{
          fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em",
          textTransform: "uppercase", color: "rgba(17,17,17,0.3)",
          padding: "10px 14px 6px",
        }}>
          Management
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0 8px", display: "flex", flexDirection: "column", gap: "1px" }}>
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link key={label} href={href} style={{
                display: "flex", alignItems: "center", gap: "9px",
                padding: "7.5px 10px", borderRadius: "8px",
                fontSize: "13.5px",
                fontWeight: active ? 600 : 400,
                color: active ? "#111" : "rgba(17,17,17,0.5)",
                background: active ? "rgba(17,17,17,0.06)" : "transparent",
                textDecoration: "none",
                transition: "background 0.1s, color 0.1s",
              }}
                onMouseEnter={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background = "rgba(17,17,17,0.04)";
                    (e.currentTarget as HTMLElement).style.color = "#111";
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "rgba(17,17,17,0.5)";
                  }
                }}
              >
                <Icon size={15} strokeWidth={active ? 2.2 : 1.8} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div style={{ padding: "12px 8px 16px", borderTop: "1px solid rgba(17,17,17,0.05)" }}>
          {/* Admin user row */}
          <div style={{
            display: "flex", alignItems: "center", gap: "9px",
            padding: "8px 10px", borderRadius: "8px", marginBottom: "2px",
          }}>
            <div style={{
              width: "24px", height: "24px", borderRadius: "50%",
              background: "rgba(225,101,64,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "10px", fontWeight: "700", color: "#c0440d", flexShrink: 0,
            }}>AD</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "12.5px", fontWeight: "600", color: "#111", lineHeight: 1.2 }}>Administrator</div>
              <div style={{ fontSize: "11px", color: "rgba(17,17,17,0.4)", lineHeight: 1.3 }}>admin@iramdani.id</div>
            </div>
          </div>

          <button
            onClick={() => { window.location.href = "/login"; }}
            style={{
              display: "flex", alignItems: "center", gap: "9px",
              padding: "7.5px 10px", borderRadius: "8px", width: "100%",
              fontSize: "13.5px", fontWeight: 400, color: "rgba(17,17,17,0.5)",
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "inherit", textAlign: "left", transition: "background 0.1s, color 0.1s",
            }}
            onMouseEnter={e => { (e.currentTarget).style.background = "rgba(17,17,17,0.04)"; (e.currentTarget).style.color = "#111"; }}
            onMouseLeave={e => { (e.currentTarget).style.background = "none"; (e.currentTarget).style.color = "rgba(17,17,17,0.5)"; }}
          >
            <LogOut size={15} strokeWidth={1.8} />
            Sign out
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

        {/* Topbar */}
        <div style={{
          height: "52px",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(17,17,17,0.06)",
          display: "flex", alignItems: "center",
          padding: "0 24px", gap: "12px",
          position: "sticky", top: 0, zIndex: 30,
        }}>
          {/* Breadcrumb */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "6px", fontSize: "13px" }}>
            <span style={{ color: "rgba(17,17,17,0.4)" }}>Admin</span>
            {pathname !== "/admin" && (
              <>
                <span style={{ color: "rgba(17,17,17,0.25)", fontSize: "11px" }}>/</span>
                <span style={{ color: "#111", fontWeight: "500" }}>
                  {navItems.find(n => pathname.startsWith(n.href) && n.href !== "/admin")?.label}
                </span>
              </>
            )}
          </div>

          {/* Bell */}
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(17,17,17,0.4)", display: "flex", padding: "6px", borderRadius: "8px" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(17,17,17,0.05)")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}
          >
            <Bell size={17} strokeWidth={1.8} />
          </button>

          {/* Admin avatar pill */}
          <div style={{
            display: "flex", alignItems: "center", gap: "7px",
            padding: "5px 12px 5px 6px", borderRadius: "100px",
            background: "rgba(225,101,64,0.07)",
            border: "1px solid rgba(225,101,64,0.15)",
          }}>
            <div style={{
              width: "22px", height: "22px", borderRadius: "50%",
              background: "rgba(225,101,64,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "9px", fontWeight: "700", color: "#c0440d",
            }}>AD</div>
            <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#c0440d" }}>Administrator</span>
          </div>
        </div>

        {/* Content */}
        <main style={{ flex: 1, padding: "36px 32px", overflowY: "auto" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
