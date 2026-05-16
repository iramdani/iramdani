"use client";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Orders", value: "1,284", trend: "+12%", color: "var(--color-intelligence-blue)" },
    { label: "Revenue", value: "$42,500", trend: "+8%", color: "var(--color-deliver-green)" },
    { label: "Active Users", value: "3,120", trend: "+15%", color: "var(--color-engagement-gold)" },
    { label: "New Signups", value: "450", trend: "+20%", color: "var(--color-leadgen-red)" },
  ];

  const recentOrders = [1, 2, 3, 4, 5].map((i) => ({
    id: `#ORD-729${i}`,
    customer: `Client ${i}`,
    status: i % 3 === 0 ? "Pending" : i % 2 === 0 ? "Processing" : "Completed",
    amount: "$1,250.00",
  }));

  return (
    <div className="ir-fade-in">
      <div className="ir-page-header">
        <h1 className="ir-page-title">Admin Dashboard</h1>
        <p className="ir-page-subtitle">Manage your iRamdani operations and analytics.</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "28px" }}>
        {stats.map(({ label, value, trend, color }) => (
          <div key={label} className="ir-card" style={{ padding: "24px" }}>
            <div style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-muted-ash)", marginBottom: "16px" }}>
              {label}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <span style={{ fontSize: "var(--text-heading)", fontWeight: "700", color: "var(--color-midnight-ink)", letterSpacing: "var(--tracking-heading)" }}>
                {value}
              </span>
              <span style={{ fontSize: "12px", fontWeight: "700", color }}>{trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="ir-card" style={{ padding: "0", overflow: "hidden" }}>
        <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(17,17,17,0.07)" }}>
          <h2 style={{ margin: 0, fontSize: "var(--text-heading-sm)", fontWeight: "700", color: "var(--color-midnight-ink)" }}>
            Recent Orders
          </h2>
          <a href="/admin/orders" style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-midnight-ink)", textDecoration: "underline" }}>
            View all
          </a>
        </div>
        <table className="ir-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td style={{ fontWeight: "600" }}>{order.id}</td>
                <td style={{ color: "var(--color-muted-ash)" }}>{order.customer}</td>
                <td>
                  <span className={`ir-badge ${
                    order.status === "Completed" ? "ir-badge-green" :
                    order.status === "Processing" ? "ir-badge-blue" :
                    "ir-badge-orange"
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td style={{ textAlign: "right", fontWeight: "600" }}>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
