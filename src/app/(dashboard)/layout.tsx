"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard, ShoppingBag, Users, Settings, LogOut, Bell, ChevronDown
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { label: "Members", href: "/dashboard/members", icon: Users },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [avatarOpen, setAvatarOpen] = useState(false);

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

        {/* Logo area */}
        <div style={{ padding: "18px 16px 14px" }}>
          <Link href="/" style={{
            display: "flex", alignItems: "center", gap: "8px",
            textDecoration: "none",
          }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "8px",
              background: "#111", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "13px", fontWeight: "700", color: "#fff",
              flexShrink: 0,
            }}>
              iR
            </div>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "#111", letterSpacing: "-0.1px" }}>
              iRamdani
            </span>
          </Link>
        </div>

        {/* Section label */}
        <div style={{
          fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em",
          textTransform: "uppercase", color: "rgba(17,17,17,0.3)",
          padding: "10px 14px 6px",
        }}>
          Account
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0 8px", display: "flex", flexDirection: "column", gap: "1px" }}>
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || (pathname.startsWith(href + "/") && href !== "/dashboard");
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

        {/* Footer: user + signout */}
        <div style={{ padding: "12px 8px 16px", borderTop: "1px solid rgba(17,17,17,0.05)" }}>
          {/* User row */}
          <div style={{
            display: "flex", alignItems: "center", gap: "9px",
            padding: "8px 10px", borderRadius: "8px",
            cursor: "pointer", marginBottom: "2px",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(17,17,17,0.04)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{
              width: "24px", height: "24px", borderRadius: "50%",
              background: "#ecebea", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "10px", fontWeight: "700", color: "#111",
              flexShrink: 0,
            }}>IR</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "12.5px", fontWeight: "600", color: "#111", lineHeight: 1.2 }}>My Account</div>
              <div style={{ fontSize: "11px", color: "rgba(17,17,17,0.4)", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>user@iramdani.id</div>
            </div>
          </div>

          {/* Sign out */}
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

      {/* ── Main area ── */}
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
            <span style={{ color: "rgba(17,17,17,0.4)" }}>Dashboard</span>
            {pathname !== "/dashboard" && (
              <>
                <span style={{ color: "rgba(17,17,17,0.25)", fontSize: "11px" }}>/</span>
                <span style={{ color: "#111", fontWeight: "500" }}>
                  {navItems.find(n => pathname.startsWith(n.href) && n.href !== "/dashboard")?.label}
                </span>
              </>
            )}
          </div>

          {/* Actions */}
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(17,17,17,0.4)", display: "flex", padding: "6px", borderRadius: "8px" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(17,17,17,0.05)")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}
          >
            <Bell size={17} strokeWidth={1.8} />
          </button>

          {/* Avatar pill */}
          <button style={{
            display: "flex", alignItems: "center", gap: "7px",
            padding: "5px 10px 5px 6px", borderRadius: "100px",
            background: "rgba(17,17,17,0.04)", border: "1px solid rgba(17,17,17,0.07)",
            cursor: "pointer", fontFamily: "inherit", transition: "background 0.1s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(17,17,17,0.07)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(17,17,17,0.04)")}
          >
            <div style={{
              width: "22px", height: "22px", borderRadius: "50%",
              background: "#ecebea", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "9px", fontWeight: "700", color: "#111",
            }}>IR</div>
            <span style={{ fontSize: "12.5px", fontWeight: "500", color: "#111" }}>Account</span>
            <ChevronDown size={12} color="rgba(17,17,17,0.4)" strokeWidth={2} />
          </button>
        </div>

        {/* Page content */}
        <main style={{ flex: 1, padding: "36px 32px", overflowY: "auto" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
