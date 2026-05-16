"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[var(--color-whisper-gray)] flex items-center justify-center p-4 font-[var(--font-labil-grotesk-variable)]">
        <div className="max-w-md w-full bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] p-12 text-center shadow-[var(--shadow-xl-2)]">
          <div className="w-20 h-20 bg-[var(--color-deliver-green)] bg-opacity-10 text-[var(--color-deliver-green)] rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={40} />
          </div>
          <h2 className="text-[var(--text-heading)] font-bold text-[var(--color-midnight-ink)] mb-4 tracking-[var(--tracking-heading)]">Order Confirmed!</h2>
          <p className="text-[var(--color-muted-ash)] text-[16px] mb-10 leading-relaxed font-medium">Thank you for your purchase. We've sent a confirmation email with details about your next steps.</p>
          <Link 
            href="/dashboard"
            className="block w-full bg-[var(--color-midnight-ink)] text-[var(--surface-canvas-white)] font-bold rounded-[var(--radius-buttons)] px-6 py-4 hover:opacity-90 transition-all shadow-[var(--shadow-subtle-3)]"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[var(--color-whisper-gray)] pt-40 pb-24 px-4 sm:px-6 lg:px-8 font-[var(--font-labil-grotesk-variable)] animate-in fade-in duration-500">
        <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-[var(--text-heading-lg)] font-bold text-[var(--color-midnight-ink)] mb-3 tracking-[var(--tracking-heading-lg)] leading-[var(--leading-heading-lg)]">Checkout</h1>
          <p className="text-[var(--color-muted-ash)] text-[var(--text-subheading)]">Complete your project details and payment.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Form Section */}
          <div className="flex-1 w-full">
            <form onSubmit={handleCheckout} className="space-y-8">
              
              {/* Contact Info */}
              <div className="bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-sm)]">
                <h3 className="text-[var(--text-heading-sm)] font-bold text-[var(--color-midnight-ink)] mb-8 tracking-[var(--tracking-heading-sm)]">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[var(--color-muted-ash)] text-[10px] font-bold uppercase tracking-widest">First Name</label>
                    <input type="text" required className="w-full bg-[var(--color-whisper-gray)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-inputs)] px-4 py-3 text-[var(--color-midnight-ink)] focus:outline-none focus:border-opacity-30 transition-all font-medium" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[var(--color-muted-ash)] text-[10px] font-bold uppercase tracking-widest">Last Name</label>
                    <input type="text" required className="w-full bg-[var(--color-whisper-gray)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-inputs)] px-4 py-3 text-[var(--color-midnight-ink)] focus:outline-none focus:border-opacity-30 transition-all font-medium" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[var(--color-muted-ash)] text-[10px] font-bold uppercase tracking-widest">Email Address</label>
                    <input type="email" required className="w-full bg-[var(--color-whisper-gray)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-inputs)] px-4 py-3 text-[var(--color-midnight-ink)] focus:outline-none focus:border-opacity-30 transition-all font-medium" />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-sm)]">
                <h3 className="text-[var(--text-heading-sm)] font-bold text-[var(--color-midnight-ink)] mb-8 tracking-[var(--tracking-heading-sm)]">Payment Details</h3>
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[var(--color-muted-ash)] text-[10px] font-bold uppercase tracking-widest">Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" required className="w-full bg-[var(--color-whisper-gray)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-inputs)] px-4 py-3 text-[var(--color-midnight-ink)] focus:outline-none focus:border-opacity-30 transition-all font-medium" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[var(--color-muted-ash)] text-[10px] font-bold uppercase tracking-widest">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" required className="w-full bg-[var(--color-whisper-gray)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-inputs)] px-4 py-3 text-[var(--color-midnight-ink)] focus:outline-none focus:border-opacity-30 transition-all font-medium" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[var(--color-muted-ash)] text-[10px] font-bold uppercase tracking-widest">CVC</label>
                      <input type="text" placeholder="123" required className="w-full bg-[var(--color-whisper-gray)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-inputs)] px-4 py-3 text-[var(--color-midnight-ink)] focus:outline-none focus:border-opacity-30 transition-all font-medium" />
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--color-midnight-ink)] text-[var(--surface-canvas-white)] font-bold rounded-[var(--radius-buttons)] px-6 py-4 hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[var(--shadow-subtle-3)]"
              >
                {loading ? "Processing..." : "Pay $1,198.00"}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-[var(--color-muted-ash)] text-[12px] font-bold uppercase tracking-widest">
                <ShieldCheck size={16} />
                <span>Secure encrypted payment</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] rounded-[var(--radius-xl)] p-8 sticky top-32 shadow-[var(--shadow-xl)]">
              <h3 className="text-[var(--text-heading-sm)] font-bold text-[var(--color-midnight-ink)] mb-8 tracking-[var(--tracking-heading-sm)]">Order Summary</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[var(--color-midnight-ink)] font-bold text-[16px]">Premium Logo Design</h4>
                    <p className="text-[12px] text-[var(--color-muted-ash)] font-bold uppercase tracking-widest mt-1">Qty: 1</p>
                  </div>
                  <span className="text-[var(--color-midnight-ink)] font-bold">$299.00</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[var(--color-midnight-ink)] font-bold text-[16px]">Landing Page Development</h4>
                    <p className="text-[12px] text-[var(--color-muted-ash)] font-bold uppercase tracking-widest mt-1">Qty: 1</p>
                  </div>
                  <span className="text-[var(--color-midnight-ink)] font-bold">$899.00</span>
                </div>
              </div>

              <div className="h-[1px] bg-[var(--color-midnight-ink)] opacity-[0.08] my-6"></div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[var(--color-muted-ash)] text-sm font-medium">
                  <span>Subtotal</span>
                  <span className="text-[var(--color-midnight-ink)] font-bold">$1,198.00</span>
                </div>
                <div className="flex justify-between text-[var(--color-muted-ash)] text-sm font-medium">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="h-[1px] bg-[var(--color-midnight-ink)] opacity-[0.08] my-6"></div>
              
              <div className="flex justify-between text-[var(--color-midnight-ink)] font-bold text-[24px] tracking-tight">
                <span>Total</span>
                <span>$1,198.00</span>
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
