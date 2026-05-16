"use client";

import Link from "next/link";
import { useState } from "react";
import { LayoutDashboard, Users, ShoppingBag, Settings, LogOut, Menu, X, ShieldAlert, Bell } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-whisper-gray)] text-[var(--color-midnight-ink)] flex font-[var(--font-labil-grotesk-variable)]">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[var(--surface-canvas-white)] border-r border-[var(--color-midnight-ink)] border-opacity-[0.08] transform transition-transform duration-300 md:translate-x-0 md:static md:block
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex items-center justify-between p-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[var(--color-midnight-ink)] font-bold text-[20px] tracking-[-0.2px]">
              Admin<span className="text-[var(--color-leadgen-red)]">.Panel</span>
            </span>
          </Link>
          <button className="md:hidden text-[var(--color-muted-ash)] hover:text-[var(--color-midnight-ink)]" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="px-4 py-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-lg)] hover:bg-[var(--color-whisper-gray)] text-[var(--color-muted-ash)] hover:text-[var(--color-midnight-ink)] font-medium transition-all">
            <LayoutDashboard size={18} />
            Overview
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-lg)] hover:bg-[var(--color-whisper-gray)] text-[var(--color-muted-ash)] hover:text-[var(--color-midnight-ink)] font-medium transition-all">
            <ShoppingBag size={18} />
            Orders
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-lg)] text-[var(--color-muted-ash)] hover:bg-[var(--color-whisper-gray)] hover:text-[var(--color-midnight-ink)] font-medium transition-all">
            <Users size={18} />
            Customers
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-lg)] text-[var(--color-muted-ash)] hover:bg-[var(--color-whisper-gray)] hover:text-[var(--color-midnight-ink)] font-medium transition-all">
            <Settings size={18} />
            Platform Settings
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-2 px-3 py-2 mb-4 text-[10px] font-bold text-[var(--color-leadgen-red)] bg-[var(--color-leadgen-red)] bg-opacity-10 rounded-[var(--radius-lg)] uppercase tracking-widest">
            <ShieldAlert size={14} />
            Admin Privileges Active
          </div>
          <button 
            onClick={() => {
              window.location.href = "/login";
            }}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-[var(--radius-lg)] text-[var(--color-muted-ash)] hover:bg-red-50 hover:text-red-600 font-medium transition-all"
          >
            <LogOut size={18} />
            Exit Admin
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-[var(--color-midnight-ink)] border-opacity-[0.08] flex items-center px-4 md:px-8 bg-[var(--surface-canvas-white)]/80 backdrop-blur-md sticky top-0 z-30">
          <button 
            className="md:hidden text-[var(--color-muted-ash)] hover:text-[var(--color-midnight-ink)] mr-4"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          
          <div className="flex-1 flex justify-end items-center gap-6">
            <div className="text-[12px] text-[var(--color-muted-ash)] hidden md:block">
                Welcome, <span className="text-[var(--color-midnight-ink)] font-bold">Administrator</span>
            </div>
            <button className="text-[var(--color-muted-ash)] hover:text-[var(--color-midnight-ink)]">
                <Bell size={20} />
            </button>
            <div className="w-9 h-9 rounded-full bg-[var(--color-leadgen-red)] bg-opacity-10 border border-[var(--color-leadgen-red)] border-opacity-[0.08] flex items-center justify-center text-[var(--color-leadgen-red)] font-bold text-sm">
              AD
            </div>
          </div>
        </header>

        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
