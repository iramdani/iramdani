"use client";
import React from 'react';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-row overflow-hidden text-white font-sans">
      {/* Left Column: Signup Form */}
      <div className="w-full lg:w-[45%] flex flex-col p-8 lg:p-12 justify-between">
        <div className="mb-12">
          <a href="/" className="inline-block">
             <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center' }}>
                iRamdani
             </div>
          </a>
        </div>

        <div className="max-w-[400px] mx-auto w-full flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold tracking-tight">Create account</h2>
            <p className="text-[#A1A1A1] text-sm">
              Join the future of AI-driven sales and outreach.
            </p>
          </div>

          <form className="flex flex-col gap-6" action="#" method="post">
            <div className="flex flex-col gap-2">
              <label className="text-[#A1A1A1] text-xs font-semibold uppercase tracking-wider">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:outline-none focus:border-[#4A4A4A] transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#A1A1A1] text-xs font-semibold uppercase tracking-wider">Work email</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:outline-none focus:border-[#4A4A4A] transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#A1A1A1] text-xs font-semibold uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:outline-none focus:border-[#4A4A4A] transition-all"
                required
              />
            </div>

            <button className="bg-white text-black font-bold py-3 px-6 rounded-xl flex items-center justify-between hover:bg-[#E5E5E5] transition-all">
              <span>Get Started</span>
              <span className="text-[10px] bg-black/10 px-2 py-1 rounded-md opacity-60">Enter</span>
            </button>
          </form>

          <div className="h-[1px] bg-[#1A1A1A] w-full" />

          <div className="flex flex-col gap-4 text-center">
            <p className="text-[#A1A1A1] text-sm">
              Already have an account? <a href="/login" className="text-white font-bold hover:underline">Log in</a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-row justify-between text-[#555] text-xs uppercase tracking-widest font-bold">
          <p>© 2026 iRamdani</p>
          <a href="mailto:support@iramdani.id" className="hover:text-white transition-all">Customer support</a>
        </div>
      </div>

      {/* Right Column: Visual Side (Mirroring Login for consistency) */}
      <div className="hidden lg:flex flex-1 bg-[#111] relative items-center justify-center p-12">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url(https://assets.amplemarket.com/assets/images/login_top_right_gradient.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 w-full max-w-[600px] flex flex-col gap-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <img src="https://storage.googleapis.com/assets.amplemarket.com/assets/images/login_side.avif" alt="iRamdani platform interface" className="w-full h-auto" />
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl font-bold italic">"iRamdani has completely transformed our pipeline."</h2>
            <p className="text-[#A1A1A1] text-lg leading-relaxed">
              Join 1,000+ sales teams who have automated their outreach and doubled their efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
