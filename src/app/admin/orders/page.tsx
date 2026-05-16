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
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Order Management</h1>
          <p className="text-gray-400">View and manage customer orders.</p>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#111111] border border-white/10 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors">
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden">
        {/* Search Bar */}
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search orders by ID, customer name, or service..."
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-sm"
            />
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1A1A1A] border-b border-white/10">
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{order.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                      order.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                      order.status === 'Processing' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                      'bg-orange-500/10 text-orange-400 border-orange-500/20'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="View Details">
                        <Eye size={18} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors" title="Mark Completed">
                        <CheckCircle size={18} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" title="Cancel Order">
                        <XCircle size={18} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="More Options">
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
        <div className="p-4 border-t border-white/10 flex items-center justify-between text-sm text-gray-400">
          <div>Showing 1 to 4 of 4 entries</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-white/10 rounded-lg hover:bg-white/5 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-lg">1</button>
            <button className="px-3 py-1 border border-white/10 rounded-lg hover:bg-white/5 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
