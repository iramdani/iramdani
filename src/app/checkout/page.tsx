"use client";
import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ORDER_ITEMS = [
  { name: "Premium Logo Design", qty: 1, price: 299 },
  { name: "Landing Page Development", qty: 1, price: 899 },
];

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const total = ORDER_ITEMS.reduce((a, i) => a + i.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 2000);
  };

  if (success) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--color-whisper-gray)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div className="ir-card" style={{ maxWidth: "420px", width: "100%", padding: "56px 40px", textAlign: "center", boxShadow: "var(--shadow-xl-2)" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(71,208,150,0.12)", color: "var(--color-deliver-green)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <Check size={32} />
          </div>
          <h2 style={{ margin: "0 0 12px", fontSize: "var(--text-heading)", fontWeight: "700", color: "var(--color-midnight-ink)" }}>
            Order Confirmed!
          </h2>
          <p style={{ margin: "0 0 36px", color: "var(--color-muted-ash)", lineHeight: 1.5 }}>
            Thank you for your purchase. We've sent you a confirmation email with all the details.
          </p>
          <Link href="/dashboard" className="ir-button ir-button-primary" style={{ width: "100%", justifyContent: "center" }}>
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div style={{ minHeight: "100vh", background: "var(--color-whisper-gray)", paddingTop: "120px", paddingBottom: "96px" }}>
        <div className="ir-container">
          <div className="ir-page-header">
            <h1 className="ir-page-title">Checkout</h1>
            <p className="ir-page-subtitle">Complete your details and payment.</p>
          </div>

          <div style={{ display: "flex", gap: "28px", alignItems: "flex-start", flexWrap: "wrap" }}>
            {/* Form */}
            <form onSubmit={handleSubmit} style={{ flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Contact */}
              <div className="ir-card" style={{ padding: "28px" }}>
                <h3 style={{ margin: "0 0 24px", fontSize: "var(--text-heading-sm)", fontWeight: "700", color: "var(--color-midnight-ink)" }}>
                  Contact Information
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label className="ir-label">First Name</label>
                    <input type="text" className="ir-input" required />
                  </div>
                  <div>
                    <label className="ir-label">Last Name</label>
                    <input type="text" className="ir-input" required />
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label className="ir-label">Email Address</label>
                    <input type="email" className="ir-input" required />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="ir-card" style={{ padding: "28px" }}>
                <h3 style={{ margin: "0 0 24px", fontSize: "var(--text-heading-sm)", fontWeight: "700", color: "var(--color-midnight-ink)" }}>
                  Payment Details
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <label className="ir-label">Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="ir-input" required />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                    <div>
                      <label className="ir-label">Expiry Date</label>
                      <input type="text" placeholder="MM / YY" className="ir-input" required />
                    </div>
                    <div>
                      <label className="ir-label">CVC</label>
                      <input type="text" placeholder="123" className="ir-input" required />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="ir-button ir-button-primary"
                style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: "16px", opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "Processing…" : `Pay $${total.toLocaleString("en-US")}`}
              </button>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "12px", color: "var(--color-muted-ash)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                <ShieldCheck size={14} />
                Secure encrypted payment
              </div>
            </form>

            {/* Summary */}
            <div style={{ width: "320px", flexShrink: 0 }}>
              <div className="ir-card" style={{ padding: "28px", position: "sticky", top: "120px", boxShadow: "var(--shadow-xl)" }}>
                <h3 style={{ margin: "0 0 24px", fontSize: "var(--text-heading-sm)", fontWeight: "700", color: "var(--color-midnight-ink)" }}>
                  Order Summary
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "20px" }}>
                  {ORDER_ITEMS.map((item) => (
                    <div key={item.name} style={{ display: "flex", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--color-midnight-ink)" }}>{item.name}</div>
                        <div style={{ fontSize: "11px", color: "var(--color-muted-ash)", marginTop: "2px" }}>Qty: {item.qty}</div>
                      </div>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--color-midnight-ink)" }}>${item.price}</span>
                    </div>
                  ))}
                </div>
                <hr className="ir-divider" style={{ margin: "0 0 16px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--color-muted-ash)" }}>
                    <span>Subtotal</span>
                    <span style={{ color: "var(--color-midnight-ink)", fontWeight: "600" }}>${total}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--color-muted-ash)" }}>
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                </div>
                <hr className="ir-divider" style={{ margin: "0 0 16px" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", fontWeight: "700", color: "var(--color-midnight-ink)" }}>
                  <span>Total</span>
                  <span>${total.toLocaleString("en-US")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
