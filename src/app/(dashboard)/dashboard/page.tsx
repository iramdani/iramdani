"use client";
import { useEffect, useState } from "react";
import { Package, Activity, CreditCard, TrendingUp } from "lucide-react";

const statColors = [
  "var(--color-intelligence-blue)",
  "var(--color-deliver-green)",
  "var(--color-engagement-gold)",
  "var(--color-leadgen-red)",
];

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalOrders: 0,
    activeProjects: 0,
    totalSpent: "$0",
    activityLevel: "—",
    recentActivity: [] as { id: number; action: string; detail: string; time: string }[],
  });

  useEffect(() => {
    const t = setTimeout(() => {
      setStats({
        totalOrders: 12,
        activeProjects: 3,
        totalSpent: "$1,450",
        activityLevel: "High",
        recentActivity: [
          { id: 1, action: "Order Placed", detail: "Logo Design Package", time: "2 hours ago" },
          { id: 2, action: "Revision Requested", detail: "Website Mockup v2", time: "1 day ago" },
          { id: 3, action: "Payment Successful", detail: "Invoice #INV-2026", time: "3 days ago" },
        ],
      });
      setLoading(false);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "280px" }}>
        <div className="ir-spinner" />
      </div>
    );
  }

  const statItems = [
    { label: "Total Orders", value: stats.totalOrders, icon: Package },
    { label: "Active Projects", value: stats.activeProjects, icon: Activity },
    { label: "Total Spent", value: stats.totalSpent, icon: CreditCard },
    { label: "Activity Level", value: stats.activityLevel, icon: TrendingUp },
  ];

  return (
    <div className="ir-fade-in">
      {/* Page header */}
      <div className="ir-page-header">
        <h1 className="ir-page-title">Dashboard</h1>
        <p className="ir-page-subtitle">Welcome back! Here's an overview of your account.</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "28px" }}>
        {statItems.map(({ label, value, icon: Icon }, i) => (
          <div key={label} className="ir-card" style={{ padding: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
              <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-muted-ash)" }}>
                {label}
              </span>
              <div style={{ padding: "8px", borderRadius: "8px", background: `${statColors[i]}15`, color: statColors[i] }}>
                <Icon size={16} />
              </div>
            </div>
            <div style={{ fontSize: "var(--text-heading)", fontWeight: "700", color: "var(--color-midnight-ink)", letterSpacing: "var(--tracking-heading)" }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="ir-card" style={{ padding: "28px" }}>
        <h2 style={{ margin: "0 0 24px", fontSize: "var(--text-heading-sm)", fontWeight: "700", color: "var(--color-midnight-ink)", letterSpacing: "var(--tracking-heading-sm)" }}>
          Recent Activity
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {stats.recentActivity.map((item, i) => (
            <div key={item.id} style={{ display: "flex", gap: "16px", paddingBottom: i < stats.recentActivity.length - 1 ? "20px" : "0", position: "relative" }}>
              {i < stats.recentActivity.length - 1 && (
                <div style={{ position: "absolute", left: "9px", top: "20px", bottom: "0", width: "1px", background: "rgba(17,17,17,0.07)" }} />
              )}
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--color-light-taupe)", border: "1px solid rgba(17,17,17,0.1)", flexShrink: 0, marginTop: "2px", zIndex: 1 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--color-midnight-ink)" }}>{item.action}</span>
                  <span style={{ fontSize: "11px", fontWeight: "600", color: "var(--color-muted-ash)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.time}</span>
                </div>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "var(--color-muted-ash)" }}>{item.detail}</p>
                {i < stats.recentActivity.length - 1 && <hr className="ir-divider" style={{ margin: "16px 0 0" }} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
