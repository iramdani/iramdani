"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, ShoppingBag, Users, Settings, LogOut, Menu, Bell, X, ShieldAlert } from "lucide-react";

const navItems = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "var(--color-whisper-gray)",
      fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
      fontSize: "14px",
      color: "var(--color-midnight-ink)",
    }}>
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(17,17,17,0.45)", zIndex: 40, backdropFilter: "blur(2px)" }}
        />
      )}

      {/* ── Sidebar ── */}
      <aside style={{
        width: "236px", flexShrink: 0,
        background: "var(--color-canvas-white)",
        borderRight: "1px solid rgba(17,17,17,0.07)",
        display: "flex", flexDirection: "column",
        height: "100vh", position: "sticky", top: 0, zIndex: 10,
      }}>
        {/* Logo / brand */}
        <div style={{
          padding: "22px 20px",
          borderBottom: "1px solid rgba(17,17,17,0.07)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <Link href="/" style={{ fontSize: "18px", fontWeight: "700", color: "var(--color-midnight-ink)", textDecoration: "none", letterSpacing: "-0.2px" }}>
              iRamdani
            </Link>
            <div style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-leadgen-red)", marginTop: "2px" }}>
              Admin Panel
            </div>
          </div>
          <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-muted-ash)", padding: "4px", display: "flex" }}>
            <X size={16} />
          </button>
        </div>

        {/* Section label */}
        <div style={{ padding: "20px 20px 8px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted-ash)" }}>
          Management
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0 12px", display: "flex", flexDirection: "column", gap: "2px" }}>
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || (href !== "/admin" && pathname.startsWith(href));
            return (
              <Link key={label} href={href} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "9px 12px", borderRadius: "8px",
                fontSize: "14px", fontWeight: active ? "600" : "500",
                color: active ? "var(--color-midnight-ink)" : "var(--color-muted-ash)",
                background: active ? "var(--color-whisper-gray)" : "transparent",
                textDecoration: "none", transition: "all 0.15s",
              }}
                onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = "var(--color-whisper-gray)"; (e.currentTarget as HTMLElement).style.color = "var(--color-midnight-ink)"; } }}
                onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--color-muted-ash)"; } }}
              >
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Admin badge + signout */}
        <div style={{ padding: "16px 12px", borderTop: "1px solid rgba(17,17,17,0.07)" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "8px 12px", marginBottom: "6px",
            background: "rgba(225,101,64,0.07)", borderRadius: "8px",
            fontSize: "10px", fontWeight: "700", color: "var(--color-leadgen-red)",
            textTransform: "uppercase", letterSpacing: "0.08em",
          }}>
            <ShieldAlert size={12} />
            Admin Access
          </div>
          <button
            onClick={() => { window.location.href = "/login"; }}
            style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "9px 12px", borderRadius: "8px", width: "100%",
              fontSize: "14px", fontWeight: "500", color: "var(--color-muted-ash)",
              background: "none", border: "none", cursor: "pointer", textAlign: "left",
              fontFamily: "inherit", transition: "all 0.15s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-whisper-gray)"; (e.currentTarget as HTMLElement).style.color = "var(--color-midnight-ink)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; (e.currentTarget as HTMLElement).style.color = "var(--color-muted-ash)"; }}
          >
            <LogOut size={16} />
            Exit Admin
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Topbar */}
        <div style={{
          height: "60px",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(17,17,17,0.07)",
          display: "flex", alignItems: "center", padding: "0 24px", gap: "16px",
          position: "sticky", top: 0, zIndex: 30,
        }}>
          <button onClick={() => setMobileOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-muted-ash)", display: "flex", padding: "4px" }}>
            <Menu size={20} />
          </button>
          <div style={{ flex: 1, fontSize: "14px" }}>
            <span style={{ color: "var(--color-muted-ash)" }}>Welcome, </span>
            <strong style={{ color: "var(--color-midnight-ink)" }}>Administrator</strong>
          </div>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-muted-ash)", display: "flex" }}>
            <Bell size={18} />
          </button>
          <div style={{
            width: "32px", height: "32px", borderRadius: "50%",
            background: "rgba(225,101,64,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "12px", fontWeight: "700", color: "var(--color-leadgen-red)",
            cursor: "pointer", userSelect: "none",
          }}>
            AD
          </div>
        </div>

        {/* Page content */}
        <main style={{ flex: 1, padding: "32px 28px", overflowY: "auto" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
