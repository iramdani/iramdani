"use client";

import { useState } from "react";
import { Search, Filter, MoreVertical, Eye, CheckCircle, XCircle } from "lucide-react";

export default function AdminOrdersPage() {
  const [orders] = useState([
    { id: "ORD-2026-001", customer: "Alice Johnson", service: "Premium Logo Design", amount: "$299", status: "Completed", date: "May 15, 2026" },
    { id: "ORD-2026-002", customer: "Bob Smith", service: "Landing Page Dev", amount: "$899", status: "Processing", date: "May 14, 2026" },
    { id: "ORD-2026-003", customer: "Charlie Davis", service: "Brand Identity", amount: "$1,499", status: "Pending", date: "May 12, 2026" },
    { id: "ORD-2026-004", customer: "Diana Prince", service: "UI/UX Consultation", amount: "$150", status: "Completed", date: "May 10, 2026" },
  ]);

  return (
    <div className="font-[var(--font-labil-grotesk-variable)] animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6">
        <div>
          <h1 className="text-[var(--text-heading-lg)] font-bold text-[var(--color-midnight-ink)] mb-2 tracking-[var(--tracking-heading-lg)] leading-[var(--leading-heading-lg)]">
            Order Management
          </h1>
          <p className="text-[var(--color-muted-ash)] text-[var(--text-subheading)]">View and manage customer orders.</p>
        </div>
        
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-buttons)] text-[14px] font-bold text-[var(--color-midnight-ink)] hover:bg-[var(--color-whisper-gray)] transition-all shadow-[var(--shadow-subtle)]">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[var(--color-midnight-ink)] text-[var(--surface-canvas-white)] rounded-[var(--radius-buttons)] text-[14px] font-bold hover:opacity-90 transition-all shadow-[var(--shadow-subtle-3)]">
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-sm)]">
        {/* Search Bar */}
        <div className="p-6 border-b border-[var(--color-midnight-ink)] border-opacity-[0.08]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted-ash)]" size={18} />
            <input 
              type="text" 
              placeholder="Search orders by ID, customer name, or service..."
              className="w-full bg-[var(--color-whisper-gray)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-inputs)] pl-12 pr-4 py-3 text-[var(--color-midnight-ink)] focus:outline-none focus:border-opacity-30 transition-all text-sm font-medium"
            />
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--color-whisper-gray)] bg-opacity-50 border-b border-[var(--color-midnight-ink)] border-opacity-[0.08]">
                <th className="px-6 py-4 text-[10px] font-bold text-[var(--color-muted-ash)] uppercase tracking-widest">Order ID</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[var(--color-muted-ash)] uppercase tracking-widest">Customer</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[var(--color-muted-ash)] uppercase tracking-widest">Service</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[var(--color-muted-ash)] uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[var(--color-muted-ash)] uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[var(--color-muted-ash)] uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[var(--color-muted-ash)] uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-midnight-ink)] divide-opacity-[0.04]">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-[var(--color-whisper-gray)] transition-colors group">
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-[var(--color-midnight-ink)]">{order.id}</td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-[var(--color-muted-ash)] font-medium">{order.customer}</td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-[var(--color-muted-ash)] font-medium">{order.service}</td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-[var(--color-midnight-ink)]">{order.amount}</td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-[var(--color-muted-ash)]">{order.date}</td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      order.status === 'Completed' ? 'bg-[var(--color-deliver-green)] bg-opacity-10 text-[var(--color-deliver-green)]' :
                      order.status === 'Processing' ? 'bg-[var(--color-intelligence-blue)] bg-opacity-10 text-[var(--color-intelligence-blue)]' :
                      'bg-[var(--color-leadgen-red)] bg-opacity-10 text-[var(--color-leadgen-red)]'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-3">
                      <button className="p-2 text-[var(--color-muted-ash)] hover:text-[var(--color-midnight-ink)] hover:bg-[var(--color-light-taupe)] rounded-[var(--radius-lg)] transition-all" title="View Details">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-[var(--color-muted-ash)] hover:text-[var(--color-deliver-green)] hover:bg-[var(--color-deliver-green)] hover:bg-opacity-10 rounded-[var(--radius-lg)] transition-all" title="Mark Completed">
                        <CheckCircle size={18} />
                      </button>
                      <button className="p-2 text-[var(--color-muted-ash)] hover:text-[var(--color-leadgen-red)] hover:bg-[var(--color-leadgen-red)] hover:bg-opacity-10 rounded-[var(--radius-lg)] transition-all" title="Cancel Order">
                        <XCircle size={18} />
                      </button>
                      <button className="p-2 text-[var(--color-muted-ash)] hover:text-[var(--color-midnight-ink)] hover:bg-[var(--color-light-taupe)] rounded-[var(--radius-lg)] transition-all" title="More Options">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-6 border-t border-[var(--color-midnight-ink)] border-opacity-[0.08] flex items-center justify-between text-[12px] font-bold text-[var(--color-muted-ash)]">
          <div>Showing 1 to 4 of 4 entries</div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-lg)] hover:bg-[var(--color-whisper-gray)] disabled:opacity-50 transition-all uppercase tracking-widest" disabled>Previous</button>
            <button className="px-4 py-2 bg-[var(--color-midnight-ink)] text-white rounded-[var(--radius-lg)] shadow-[var(--shadow-subtle-3)]">1</button>
            <button className="px-4 py-2 border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-lg)] hover:bg-[var(--color-whisper-gray)] disabled:opacity-50 transition-all uppercase tracking-widest" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
