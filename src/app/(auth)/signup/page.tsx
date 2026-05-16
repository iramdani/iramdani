"use client";
import React from 'react';
import AuthLayout from '@/components/AuthLayout';

export default function SignupPage() {
  return (
    <AuthLayout
      title="Start your trial"
      subtitle="Join thousands of teams scaling their revenue with iRamdani."
      footerText={
        <div>
          <p className="font-bold text-[14px] mb-1">Already have an account?</p>
          <p className="text-[var(--color-muted-ash)] text-[14px]">
            <a href="/login" className="text-[var(--color-midnight-ink)] font-bold hover:underline">Log in</a> to your account
          </p>
        </div>
      }
    >
      <form className="flex flex-col gap-[var(--spacing-24)]" action="#" method="post">
        <div className="flex flex-col gap-[var(--spacing-20)]">
          <div className="flex flex-col gap-[var(--spacing-8)]">
            <label className="text-[var(--color-muted-ash)] text-[10px] font-bold uppercase tracking-widest">
              Full Name
            </label>
            <input 
              type="text" 
              name="user[name]" 
              placeholder="Enter your full name" 
              className="w-full bg-[var(--surface-canvas-white)] border border-[var(--color-midnight-ink)] border-opacity-10 rounded-[var(--radius-inputs)] px-4 py-3 focus:outline-none focus:border-opacity-30 transition-all text-[var(--color-midnight-ink)]"
              required
            />
          </div>

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
        </div>

        <button className="bg-[var(--color-midnight-ink)] text-[var(--surface-canvas-white)] font-bold py-3 px-6 rounded-[var(--radius-buttons)] flex items-center justify-between hover:opacity-90 transition-all shadow-[var(--shadow-subtle-3)]">
          <span>Create Account</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>

        <p className="text-[12px] text-[var(--color-muted-ash)] text-center">
          By signing up, you agree to our <a href="/terms" className="underline hover:text-[var(--color-midnight-ink)]">Terms</a> and <a href="/privacy" className="underline hover:text-[var(--color-midnight-ink)]">Privacy Policy</a>.
        </p>
      </form>
    </AuthLayout>
  );
}
