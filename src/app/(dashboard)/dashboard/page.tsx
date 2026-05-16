"use client";

import { useEffect, useState } from "react";
import { Activity, CreditCard, Package, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>({
    totalOrders: 0,
    activeProjects: 0,
    totalSpent: "$0",
    recentActivity: []
  });

  useEffect(() => {
    async function loadDashboard() {
      try {
        // Mock data
        setTimeout(() => {
          setStats({
            totalOrders: 12,
            activeProjects: 3,
            totalSpent: "$1,450",
            recentActivity: [
              { id: 1, action: "Order Placed", detail: "Logo Design Package", time: "2 hours ago" },
              { id: 2, action: "Revision Requested", detail: "Website Mockup v2", time: "1 day ago" },
              { id: 3, action: "Payment Successful", detail: "Invoice #INV-2026", time: "3 days ago" },
            ]
          });
          setLoading(false);
        }, 800);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    
    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-10 h-10 border-4 border-[var(--color-midnight-ink)] border-opacity-10 border-t-[var(--color-midnight-ink)] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="font-[var(--font-labil-grotesk-variable)] animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-[var(--text-heading-lg)] font-bold text-[var(--color-midnight-ink)] mb-2 tracking-[var(--tracking-heading-lg)] leading-[var(--leading-heading-lg)]">
            Dashboard
        </h1>
        <p className="text-[var(--color-muted-ash)] text-[var(--text-subheading)]">
            Welcome back! Here's an overview of your account.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-24)] mb-10">
        {[
            { label: "Total Orders", value: stats.totalOrders, icon: <Package size={20} />, color: "var(--color-intelligence-blue)" },
            { label: "Active Projects", value: stats.activeProjects, icon: <Activity size={20} />, color: "var(--color-deliver-green)" },
            { label: "Total Spent", value: stats.totalSpent, icon: <CreditCard size={20} />, color: "var(--color-leadgen-red)" },
            { label: "Activity Level", value: "High", icon: <TrendingUp size={20} />, color: "var(--color-engagement-gold)" }
        ].map((stat, i) => (
            <div key={i} className="bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-subtle-3)] transition-all group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[var(--color-muted-ash)] font-bold text-[10px] uppercase tracking-widest">{stat.label}</h3>
                <div 
                    className="p-2 rounded-[var(--radius-lg)] shadow-inner transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                >
                  {stat.icon}
                </div>
              </div>
              <div className="text-[var(--text-heading)] font-bold text-[var(--color-midnight-ink)] tracking-[var(--tracking-heading)]">
                {stat.value}
              </div>
            </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-sm)]">
        <h2 className="text-[var(--text-heading-sm)] font-bold text-[var(--color-midnight-ink)] mb-8 tracking-[var(--tracking-heading-sm)]">
            Recent Activity
        </h2>
        <div className="space-y-8">
          {stats.recentActivity.map((item: any, i: number) => (
            <div key={item.id} className="flex gap-6 relative group">
              {i !== stats.recentActivity.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-[-32px] w-[1px] bg-[var(--color-midnight-ink)] opacity-[0.08]"></div>
              )}
              <div className="w-6 h-6 rounded-full bg-[var(--color-light-taupe)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] flex-shrink-0 mt-1 z-10 transition-colors group-hover:bg-[var(--color-midnight-ink)] group-hover:border-[var(--color-midnight-ink)]"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                    <p className="text-[var(--color-midnight-ink)] font-bold text-[16px]">{item.action}</p>
                    <p className="text-[var(--color-muted-ash)] text-[10px] uppercase font-bold tracking-widest">{item.time}</p>
                </div>
                <p className="text-[var(--color-muted-ash)] text-[14px] mt-1 leading-[var(--leading-body)]">{item.detail}</p>
                <div className="h-[1px] bg-[var(--color-midnight-ink)] opacity-[0.04] w-full mt-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
