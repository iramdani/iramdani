"use client";
import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-row overflow-hidden text-white font-sans">
      {/* Left Column: Login Form */}
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
            <h2 className="text-4xl font-bold tracking-tight">Welcome back</h2>
            <p className="text-[#A1A1A1] text-sm">
              Let's get you selling and spin up outreach across every channel
            </p>
          </div>

          <form className="flex flex-col gap-6" action="#" method="post">
            <div className="flex flex-col gap-2">
              <label className="text-[#A1A1A1] text-xs font-semibold uppercase tracking-wider">Work email</label>
              <div className="relative group">
                <input 
                  type="email" 
                  name="user[email]" 
                  placeholder="Enter work email" 
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:outline-none focus:border-[#4A4A4A] transition-all"
                  required
                />
              </div>
            </div>

            <button className="bg-white text-black font-bold py-3 px-6 rounded-xl flex items-center justify-between hover:bg-[#E5E5E5] transition-all">
              <span>Continue</span>
              <span className="text-[10px] bg-black/10 px-2 py-1 rounded-md opacity-60">Ctrl+Enter</span>
            </button>
          </form>

          <div className="h-[1px] bg-[#1A1A1A] w-full" />

          <div className="flex flex-col gap-4">
            <div>
              <p className="font-semibold text-sm mb-1">Don't have an account?</p>
              <p className="text-[#A1A1A1] text-sm">
                <a href="/demo" className="text-white hover:underline">Book a demo</a> with our sales specialist
              </p>
            </div>
            
            <div className="flex -space-x-3 overflow-hidden">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0A0A0A] bg-[#2A2A2A] flex items-center justify-center text-[10px]">
                   {/* Placeholder for specialist avatars */}
                   👤
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-row justify-between text-[#555] text-xs uppercase tracking-widest font-bold">
          <p>© 2026 iRamdani</p>
          <a href="mailto:support@iramdani.id" className="hover:text-white transition-all">Customer support</a>
        </div>
      </div>

      {/* Right Column: Visual Side */}
      <div className="hidden lg:flex flex-1 bg-[#111] relative items-center justify-center p-12">
        {/* Gradient Background */}
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
            <div className="bg-[#A26EFF]/20 text-[#A26EFF] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              NEW
            </div>
            <h2 className="text-3xl font-bold">Automate your GTM</h2>
            <p className="text-[#A1A1A1] text-lg leading-relaxed">
              Build end-to-end workflows that eliminate manual tasks, keep your reps laser-focused on selling, and drive more pipeline without anyone lifting a finger.
            </p>
            <a href="https://knowledge.iramdani.id" className="flex items-center gap-2 bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-[#E5E5E5] transition-all">
              <span>Learn more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
