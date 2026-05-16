"use client";
import { useState } from "react";
import Link from "next/link";
import { Trash2, ArrowRight, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const INITIAL_CART = [
  { id: 1, name: "Premium Logo Design", price: 299, quantity: 1, category: "Graphic Design" },
  { id: 2, name: "Landing Page Development", price: 899, quantity: 1, category: "Web Design" },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div style={{ minHeight: "100vh", background: "var(--color-whisper-gray)", paddingTop: "120px", paddingBottom: "96px" }}>
        <div className="ir-container">
          {/* Page header */}
          <div className="ir-page-header">
            <h1 className="ir-page-title">Your Cart</h1>
            <p className="ir-page-subtitle">Review your selected services before checkout.</p>
          </div>

          {cartItems.length > 0 ? (
            <div style={{ display: "flex", gap: "28px", alignItems: "flex-start", flexWrap: "wrap" }}>
              {/* Items */}
              <div style={{ flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {cartItems.map((item) => (
                  <div key={item.id} className="ir-card" style={{ padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                    <div>
                      <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-intelligence-blue)", display: "block", marginBottom: "6px" }}>
                        {item.category}
                      </span>
                      <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "700", color: "var(--color-midnight-ink)" }}>
                        {item.name}
                      </h3>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                      <span style={{ fontSize: "22px", fontWeight: "700", color: "var(--color-midnight-ink)" }}>
                        ${item.price}
                      </span>
                      <button
                        onClick={() => setCartItems((c) => c.filter((i) => i.id !== item.id))}
                        style={{ padding: "8px", background: "none", border: "none", cursor: "pointer", color: "var(--color-muted-ash)", borderRadius: "8px", display: "flex" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(225,101,64,0.08)"; e.currentTarget.style.color = "var(--color-leadgen-red)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--color-muted-ash)"; }}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div style={{ width: "300px", flexShrink: 0 }}>
                <div className="ir-card" style={{ padding: "28px", position: "sticky", top: "120px", boxShadow: "var(--shadow-xl)" }}>
                  <h3 style={{ margin: "0 0 24px", fontSize: "var(--text-heading-sm)", fontWeight: "700", color: "var(--color-midnight-ink)" }}>
                    Summary
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                      <span style={{ color: "var(--color-muted-ash)" }}>Subtotal</span>
                      <span style={{ fontWeight: "600", color: "var(--color-midnight-ink)" }}>${subtotal}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                      <span style={{ color: "var(--color-muted-ash)" }}>Tax</span>
                      <span style={{ color: "var(--color-muted-ash)" }}>At checkout</span>
                    </div>
                  </div>
                  <hr className="ir-divider" style={{ margin: "0 0 20px" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", fontWeight: "700", color: "var(--color-midnight-ink)", marginBottom: "24px" }}>
                    <span>Total</span>
                    <span>${subtotal}</span>
                  </div>
                  <Link href="/checkout" className="ir-button ir-button-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Proceed to Checkout
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="ir-card" style={{ padding: "80px 40px", textAlign: "center" }}>
              <div style={{ marginBottom: "20px", color: "var(--color-light-taupe)" }}>
                <ShoppingCart size={48} style={{ margin: "0 auto", opacity: 0.5 }} />
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: "var(--text-heading-sm)", fontWeight: "700", color: "var(--color-midnight-ink)" }}>
                Your cart is empty
              </h3>
              <p style={{ margin: "0 0 32px", color: "var(--color-muted-ash)" }}>
                You haven't added any services yet.
              </p>
              <Link href="/#services" className="ir-button ir-button-primary">
                Browse Services
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
