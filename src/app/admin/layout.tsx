"use client";
import Link from "next/link";
import { useState } from "react";
import { LayoutDashboard, ShoppingBag, Users, Settings, LogOut, Menu, ShieldAlert, Bell } from "lucide-react";

const navItems = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--color-whisper-gray)" }}>
      {open && (
        <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(17,17,17,0.4)", zIndex: 40 }} />
      )}

      {/* Sidebar */}
      <aside className="ir-sidebar">
        <div className="ir-sidebar-header">
          <Link href="/" style={{ fontSize: "18px", fontWeight: "700", color: "var(--color-midnight-ink)", textDecoration: "none" }}>
            Admin<span style={{ color: "var(--color-leadgen-red)" }}>.</span>Panel
          </Link>
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
          <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", marginBottom: "8px", background: "rgba(225,101,64,0.07)", borderRadius: "8px", fontSize: "10px", fontWeight: "700", color: "var(--color-leadgen-red)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            <ShieldAlert size={12} />
            Admin Privileges
          </div>
          <button
            onClick={() => { window.location.href = "/login"; }}
            className="ir-sidebar-link"
            style={{ width: "100%", cursor: "pointer", background: "none", border: "none", textAlign: "left" }}
          >
            <LogOut size={16} />
            Exit Admin
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div className="ir-topbar">
          <button onClick={() => setOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-muted-ash)", display: "flex" }}>
            <Menu size={20} />
          </button>
          <div style={{ flex: 1 }} />
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "12px", color: "var(--color-muted-ash)" }}>
              Welcome, <strong style={{ color: "var(--color-midnight-ink)" }}>Administrator</strong>
            </span>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-muted-ash)", display: "flex" }}>
              <Bell size={18} />
            </button>
            <div style={{
              width: "32px", height: "32px", borderRadius: "50%",
              background: "rgba(225,101,64,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "12px", fontWeight: "700", color: "var(--color-leadgen-red)"
            }}>
              AD
            </div>
          </div>
        </div>

        <main style={{ flex: 1, padding: "32px 28px", overflow: "auto" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
