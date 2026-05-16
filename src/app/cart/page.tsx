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
      <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-2">Your Cart</h1>
          <p className="text-gray-400">Review your selected services before checkout.</p>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end mt-4 sm:mt-0">
                    <span className="text-xl font-bold text-white">${item.price}</span>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full md:w-80 flex-shrink-0">
              <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sticky top-32">
                <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="h-px bg-white/10 my-4"></div>
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total</span>
                    <span>${subtotal}</span>
                  </div>
                </div>

                <Link 
                  href="/checkout"
                  className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-xl px-4 py-4 hover:bg-gray-100 transition-colors"
                >
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-24 bg-[#111111] border border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Your cart is empty</h3>
            <p className="text-gray-400 mb-8">Looks like you haven't added any services yet.</p>
            <Link 
              href="/#services"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold rounded-xl px-6 py-3 hover:bg-gray-100 transition-colors"
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
