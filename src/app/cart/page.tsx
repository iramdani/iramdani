"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Premium Logo Design", price: 299, quantity: 1, category: "Graphic Design" },
    { id: 2, name: "Landing Page Development", price: 899, quantity: 1, category: "Web Design" }
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[var(--color-whisper-gray)] pt-40 pb-24 px-4 sm:px-6 lg:px-8 font-[var(--font-labil-grotesk-variable)] animate-in fade-in duration-500">
        <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-[var(--text-heading-lg)] font-bold text-[var(--color-midnight-ink)] mb-3 tracking-[var(--tracking-heading-lg)] leading-[var(--leading-heading-lg)]">Your Cart</h1>
          <p className="text-[var(--color-muted-ash)] text-[var(--text-subheading)]">Review your selected services before checkout.</p>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-subtle-3)] transition-all">
                  <div>
                    <span className="text-[10px] font-bold text-[var(--color-intelligence-blue)] uppercase tracking-widest mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-[20px] font-bold text-[var(--color-midnight-ink)] tracking-[-0.2px]">{item.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-8 w-full sm:w-auto justify-between sm:justify-end mt-4 sm:mt-0">
                    <span className="text-[24px] font-bold text-[var(--color-midnight-ink)] tracking-[-0.26px]">${item.price}</span>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-3 text-[var(--color-muted-ash)] hover:text-[var(--color-leadgen-red)] hover:bg-red-50 rounded-[var(--radius-lg)] transition-all"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full md:w-80 flex-shrink-0">
              <div className="bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] p-8 sticky top-32 shadow-[var(--shadow-xl)]">
                <h3 className="text-[var(--text-heading-sm)] font-bold text-[var(--color-midnight-ink)] mb-8 tracking-[var(--tracking-heading-sm)]">Summary</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between text-[var(--color-muted-ash)] text-sm font-medium">
                    <span>Subtotal</span>
                    <span className="text-[var(--color-midnight-ink)] font-bold">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[var(--color-muted-ash)] text-sm font-medium">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="h-[1px] bg-[var(--color-midnight-ink)] opacity-[0.08] my-6"></div>
                  <div className="flex justify-between text-[var(--color-midnight-ink)] font-bold text-xl tracking-tight">
                    <span>Total</span>
                    <span>${subtotal}</span>
                  </div>
                </div>

                <Link 
                  href="/checkout"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-midnight-ink)] text-[var(--surface-canvas-white)] font-bold rounded-[var(--radius-buttons)] px-6 py-4 hover:opacity-90 transition-all shadow-[var(--shadow-subtle-3)]"
                >
                  Checkout
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-24 bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)]">
            <h3 className="text-[var(--text-heading-sm)] font-bold text-[var(--color-midnight-ink)] mb-4 tracking-[var(--tracking-heading-sm)]">Your cart is empty</h3>
            <p className="text-[var(--color-muted-ash)] text-[var(--text-subheading)] mb-10">Looks like you haven't added any services yet.</p>
            <Link 
              href="/#services"
              className="inline-flex items-center gap-2 bg-[var(--color-midnight-ink)] text-[var(--surface-canvas-white)] font-bold rounded-[var(--radius-buttons)] px-8 py-4 hover:opacity-90 transition-all shadow-[var(--shadow-subtle-3)]"
            >
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
