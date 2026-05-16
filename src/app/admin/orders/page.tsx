"use client";
import { useState } from "react";
import { Search, Filter, Eye, CheckCircle, XCircle, MoreVertical } from "lucide-react";

const ORDERS = [
  { id: "ORD-2026-001", customer: "Alice Johnson", service: "Premium Logo Design", amount: "$299", status: "Completed", date: "May 15, 2026" },
  { id: "ORD-2026-002", customer: "Bob Smith", service: "Landing Page Dev", amount: "$899", status: "Processing", date: "May 14, 2026" },
  { id: "ORD-2026-003", customer: "Charlie Davis", service: "Brand Identity", amount: "$1,499", status: "Pending", date: "May 12, 2026" },
  { id: "ORD-2026-004", customer: "Diana Prince", service: "UI/UX Consultation", amount: "$150", status: "Completed", date: "May 10, 2026" },
];

export default function AdminOrdersPage() {
  const [orders] = useState(ORDERS);
  const [query, setQuery] = useState("");

  const filtered = orders.filter(
    (o) =>
      o.id.toLowerCase().includes(query.toLowerCase()) ||
      o.customer.toLowerCase().includes(query.toLowerCase()) ||
      o.service.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="ir-fade-in">
      {/* Header */}
      <div className="ir-page-header" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <h1 className="ir-page-title">Order Management</h1>
          <p className="ir-page-subtitle">View and manage customer orders.</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="ir-button ir-button-secondary">
            <Filter size={14} />
            Filter
          </button>
          <button className="ir-button ir-button-primary">
            Export CSV
          </button>
        </div>
      </div>

      {/* Table card */}
      <div className="ir-card" style={{ padding: 0, overflow: "hidden" }}>
        {/* Search */}
        <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(17,17,17,0.07)" }}>
          <div style={{ position: "relative" }}>
            <Search size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--color-muted-ash)" }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by ID, customer, or service..."
              className="ir-input"
              style={{ paddingLeft: "40px", background: "var(--color-whisper-gray)" }}
            />
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table className="ir-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr key={order.id}>
                  <td style={{ fontWeight: "600" }}>{order.id}</td>
                  <td style={{ color: "var(--color-muted-ash)" }}>{order.customer}</td>
                  <td style={{ color: "var(--color-muted-ash)" }}>{order.service}</td>
                  <td style={{ fontWeight: "600" }}>{order.amount}</td>
                  <td style={{ color: "var(--color-muted-ash)" }}>{order.date}</td>
                  <td>
                    <span className={`ir-badge ${
                      order.status === "Completed" ? "ir-badge-green" :
                      order.status === "Processing" ? "ir-badge-blue" :
                      "ir-badge-orange"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div style={{ display: "flex", gap: "4px", justifyContent: "flex-end" }}>
                      {[Eye, CheckCircle, XCircle, MoreVertical].map((Icon, i) => (
                        <button key={i} style={{ padding: "6px", background: "none", border: "none", cursor: "pointer", color: "var(--color-muted-ash)", borderRadius: "6px", display: "flex" }}
                          onMouseEnter={e => (e.currentTarget.style.background = "var(--color-whisper-gray)")}
                          onMouseLeave={e => (e.currentTarget.style.background = "none")}
                        >
                          <Icon size={16} />
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={{ padding: "14px 20px", borderTop: "1px solid rgba(17,17,17,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "var(--color-muted-ash)", fontWeight: "600" }}>
          <span>Showing {filtered.length} of {orders.length} entries</span>
          <div style={{ display: "flex", gap: "6px" }}>
            <button className="ir-button ir-button-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} disabled>Previous</button>
            <button className="ir-button ir-button-primary" style={{ padding: "6px 12px", fontSize: "12px" }}>1</button>
            <button className="ir-button ir-button-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
