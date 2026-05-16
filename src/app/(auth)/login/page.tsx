"use client";
import React from 'react';
import AuthLayout from '@/components/AuthLayout';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Let's get you selling and spin up outreach across every channel"
      footerText={
        <div>
          <p className="font-bold text-[14px] mb-1">Don't have an account?</p>
          <p className="text-[var(--color-muted-ash)] text-[14px]">
            <a href="/demo" className="text-[var(--color-midnight-ink)] font-bold hover:underline">Book a demo</a> with our sales specialist
          </p>
        </div>
      }
    >
      <form className="flex flex-col gap-[var(--spacing-24)]" action="#" method="post">
        <div className="flex flex-col gap-[var(--spacing-8)]">
          <label className="text-[var(--color-muted-ash)] text-[10px] font-bold uppercase tracking-widest">
            Work email
          </label>
          <input 
            type="email" 
            name="user[email]" 
            placeholder="Enter work email" 
            className="w-full bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-10 rounded-[var(--radius-inputs)] px-4 py-3 focus:outline-none focus:border-opacity-30 transition-all text-[var(--color-midnight-ink)]"
            required
          />
        </div>

        <button className="bg-[var(--color-midnight-ink)] text-[var(--surface-canvas-white)] font-bold py-3 px-6 rounded-[var(--radius-buttons)] flex items-center justify-between hover:opacity-90 transition-all shadow-[var(--shadow-subtle-3)]">
          <span>Continue</span>
          <span className="text-[10px] bg-white/20 px-2 py-1 rounded-md">Ctrl+Enter</span>
        </button>
      </form>
    </AuthLayout>
  );
}
