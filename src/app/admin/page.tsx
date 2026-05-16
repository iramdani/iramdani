"use client";
import React from 'react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Orders', value: '1,284', trend: '+12%', color: 'var(--color-intelligence-blue)' },
    { label: 'Revenue', value: '$42,500', trend: '+8%', color: 'var(--color-deliver-green)' },
    { label: 'Active Users', value: '3,120', trend: '+15%', color: 'var(--color-engagement-gold)' },
    { label: 'New Signups', value: '450', trend: '+20%', color: 'var(--color-leadgen-red)' },
  ];

  return (
    <div className="font-[var(--font-labil-grotesk-variable)] animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-[var(--text-heading-lg)] font-bold text-[var(--color-midnight-ink)] mb-2 tracking-[var(--tracking-heading-lg)] leading-[var(--leading-heading-lg)]">
            Admin Dashboard
        </h1>
        <p className="text-[var(--color-muted-ash)] text-[var(--text-subheading)]">
            Manage your iRamdani operations and analytics.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-24)] mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-subtle-3)] transition-all group">
            <div className="text-[var(--color-muted-ash)] font-bold text-[10px] uppercase tracking-widest mb-4">{stat.label}</div>
            <div className="flex items-baseline justify-between">
              <div className="text-[var(--text-heading)] font-bold text-[var(--color-midnight-ink)] tracking-[var(--tracking-heading)]">{stat.value}</div>
              <div className="text-[12px] font-bold" style={{ color: stat.color }}>{stat.trend}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-sm)]">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-[var(--text-heading-sm)] font-bold text-[var(--color-midnight-ink)] tracking-[var(--tracking-heading-sm)]">
                Recent Orders
            </h2>
            <a href="/admin/orders" className="text-[14px] font-bold text-[var(--color-midnight-ink)] hover:underline">View all</a>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-midnight-ink)] border-opacity-[0.08]">
                <th className="px-6 py-4 text-[10px] font-bold text-[var(--color-muted-ash)] uppercase tracking-widest">Order ID</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[var(--color-muted-ash)] uppercase tracking-widest">Customer</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[var(--color-muted-ash)] uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[var(--color-muted-ash)] uppercase tracking-widest text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-midnight-ink)] divide-opacity-[0.04]">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-[var(--color-whisper-gray)] transition-colors group">
                  <td className="px-6 py-5 text-sm font-bold text-[var(--color-midnight-ink)]">#ORD-729{item}</td>
                  <td className="px-6 py-5 text-sm text-[var(--color-muted-ash)]">Client {item}</td>
                  <td className="px-6 py-5">
                    <span className="bg-[var(--color-deliver-green)] bg-opacity-10 text-[var(--color-deliver-green)] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-[var(--color-midnight-ink)] text-right">$1,250.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
