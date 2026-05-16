"use client";
import Link from "next/link";
import { useState } from "react";
import {
  LayoutDashboard, ShoppingBag, Users, Settings, LogOut, Menu, X, Bell
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { label: "Members", href: "/dashboard/members", icon: Users },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--color-whisper-gray)" }}>
      {/* Overlay mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(17,17,17,0.4)", zIndex: 40 }}
        />
      )}

      {/* Sidebar */}
      <aside
        className="ir-sidebar"
        style={{
          position: open ? "fixed" : undefined,
          inset: open ? "0 auto 0 0" : undefined,
          zIndex: open ? 50 : undefined,
          transform: open ? "translateX(0)" : undefined,
          transition: "transform 0.25s ease",
        }}
      >
        <div className="ir-sidebar-header">
          <Link href="/" style={{ fontSize: "18px", fontWeight: "700", color: "var(--color-midnight-ink)", textDecoration: "none" }}>
            iRamdani
          </Link>
          <button onClick={() => setOpen(false)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--color-muted-ash)", marginLeft: "auto" }}>
            <X size={18} />
          </button>
        </div>

        <nav className="ir-sidebar-nav">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link key={label} href={href} className="ir-sidebar-link">
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </nav>

        <div className="ir-sidebar-footer">
          <button
            onClick={() => { window.location.href = "/login"; }}
            className="ir-sidebar-link"
            style={{ width: "100%", cursor: "pointer", background: "none", border: "none", textAlign: "left" }}
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Topbar */}
        <div className="ir-topbar">
          <button onClick={() => setOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-muted-ash)", marginRight: "16px", display: "flex" }}>
            <Menu size={20} />
          </button>
          <div style={{ flex: 1 }} />
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-muted-ash)", display: "flex" }}>
              <Bell size={18} />
            </button>
            <div style={{
              width: "32px", height: "32px", borderRadius: "50%",
              background: "var(--color-light-taupe)",
              border: "1px solid rgba(17,17,17,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "12px", fontWeight: "700", color: "var(--color-midnight-ink)"
            }}>
              IR
            </div>
          </div>
        </div>

        {/* Content */}
        <main style={{ flex: 1, padding: "32px 28px", overflow: "auto" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
