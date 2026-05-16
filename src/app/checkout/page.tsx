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
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#111111] border border-white/10 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Order Confirmed!</h2>
          <p className="text-gray-400 mb-8">Thank you for your purchase. We've sent a confirmation email with details about your next steps.</p>
          <Link 
            href="/dashboard"
            className="block w-full bg-white text-black font-semibold rounded-xl px-4 py-3 hover:bg-gray-100 transition-colors"
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
      <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">Checkout</h1>
          <p className="text-gray-400">Complete your project details and payment.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="flex-1">
            <form onSubmit={handleCheckout} className="space-y-8">
              
              {/* Contact Info */}
              <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">First Name</label>
                    <input type="text" required className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Last Name</label>
                    <input type="text" required className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
                    <input type="email" required className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Payment Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" required className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" required className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">CVC</label>
                      <input type="text" placeholder="123" required className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-semibold rounded-xl px-4 py-4 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                {loading ? "Processing..." : "Pay $1,198.00"}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <ShieldCheck size={16} />
                <span>Secure encrypted payment</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sticky top-32">
              <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-medium">Premium Logo Design</h4>
                    <p className="text-sm text-gray-500">Qty: 1</p>
                  </div>
                  <span className="text-white">$299.00</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-medium">Landing Page Development</h4>
                    <p className="text-sm text-gray-500">Qty: 1</p>
                  </div>
                  <span className="text-white">$899.00</span>
                </div>
              </div>

              <div className="h-px bg-white/10 my-4"></div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span>$1,198.00</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="h-px bg-white/10 my-4"></div>
              
              <div className="flex justify-between text-white font-bold text-xl">
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
