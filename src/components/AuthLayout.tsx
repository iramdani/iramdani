"use client";
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  illustrationSrc?: string;
  footerText?: React.ReactNode;
}

export default function AuthLayout({ children, title, subtitle, illustrationSrc, footerText }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--surface-canvas-white)] flex flex-row overflow-hidden text-[var(--color-midnight-ink)] font-[var(--font-labil-grotesk-variable)]">
      {/* Left Column: Form Content */}
      <div className="w-full lg:w-[45%] flex flex-col p-8 lg:p-12 justify-between">
        <div className="mb-12">
          <a href="/" className="inline-block">
             <div className="text-[24px] font-bold tracking-[-0.26px] text-[var(--color-midnight-ink)] flex items-center">
                iRamdani
             </div>
          </a>
        </div>

        <div className="max-w-[400px] mx-auto w-full flex flex-col gap-[var(--spacing-36)]">
          <div className="flex flex-col gap-[var(--spacing-8)]">
            <h1 className="text-[var(--text-heading-lg)] font-bold tracking-[var(--tracking-heading-lg)] leading-[var(--leading-heading-lg)]">
              {title}
            </h1>
            <p className="text-[var(--color-muted-ash)] text-[var(--text-body)] leading-[var(--leading-body)] tracking-[var(--tracking-body)]">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-[var(--spacing-24)]">
            {children}
          </div>

          <div className="h-[1px] bg-[var(--color-midnight-ink)] opacity-[0.08] w-full" />

          <div className="flex flex-col gap-[var(--spacing-16)]">
            {footerText}
          </div>
        </div>

        <div className="mt-12 flex flex-row justify-between text-[var(--color-muted-ash)] text-[10px] uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} iRamdani</p>
          <a href="mailto:support@iramdani.id" className="hover:text-[var(--color-midnight-ink)] transition-all">Customer support</a>
        </div>
      </div>

      {/* Right Column: Premium Visual Side */}
      <div className="hidden lg:flex flex-1 bg-[var(--color-midnight-ink)] relative items-center justify-center p-12 overflow-hidden">
        {/* Abstract Dynamic Gradient (from design.md) */}
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            background: 'var(--gradient-phoenix-orange)',
            filter: 'blur(80px)'
          }}
        />
        
        <div className="relative z-10 w-full max-w-[600px] flex flex-col gap-[var(--spacing-48)]">
          <div className="rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-xl-2)] border border-white/10">
            <img 
              src={illustrationSrc || "https://storage.googleapis.com/assets.amplemarket.com/assets/images/login_side.avif"} 
              alt="iRamdani Platform" 
              className="w-full h-auto" 
            />
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[var(--radius-2xl)] p-10 flex flex-col items-center text-center gap-[var(--spacing-24)]">
            <div className="bg-[var(--color-engagement-gold)] text-[var(--color-midnight-ink)] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              AI-POWERED
            </div>
            <h2 className="text-[var(--text-heading)] font-bold text-white tracking-[var(--tracking-heading)]">Automate your Sales Engine</h2>
            <p className="text-white/70 text-[var(--text-subheading)] leading-[var(--leading-subheading)]">
              Build end-to-end workflows that eliminate manual tasks and keep your team laser-focused on winning.
            </p>
            <a href="/demo" className="flex items-center gap-2 bg-white text-[var(--color-midnight-ink)] font-bold py-3 px-8 rounded-[var(--radius-buttons)] hover:bg-[var(--color-whisper-gray)] transition-all shadow-[var(--shadow-subtle-3)]">
              <span>Learn more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
