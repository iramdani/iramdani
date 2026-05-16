"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Settings, ShoppingCart, Users, LogOut, Menu, X, Bell } from "lucide-react";

export default function DashboardLayout({
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
              iRamdani
            </span>
          </Link>
          <button className="md:hidden text-[var(--color-muted-ash)] hover:text-[var(--color-midnight-ink)]" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="px-4 py-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-lg)] bg-[var(--color-whisper-gray)] text-[var(--color-midnight-ink)] font-medium shadow-[var(--shadow-subtle)]">
            <Home size={18} />
            Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-lg)] text-[var(--color-muted-ash)] hover:bg-[var(--color-whisper-gray)] hover:text-[var(--color-midnight-ink)] font-medium transition-all">
            <ShoppingCart size={18} />
            Orders
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-lg)] text-[var(--color-muted-ash)] hover:bg-[var(--color-whisper-gray)] hover:text-[var(--color-midnight-ink)] font-medium transition-all">
            <Users size={18} />
            Members
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-lg)] text-[var(--color-muted-ash)] hover:bg-[var(--color-whisper-gray)] hover:text-[var(--color-midnight-ink)] font-medium transition-all">
            <Settings size={18} />
            Settings
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="h-[1px] bg-[var(--color-midnight-ink)] opacity-[0.08] mb-4 mx-2" />
          <button 
            onClick={() => {
              window.location.href = "/login";
            }}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-[var(--radius-lg)] text-[var(--color-muted-ash)] hover:bg-red-50 hover:text-red-600 font-medium transition-all"
          >
            <LogOut size={18} />
            Sign Out
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
            <button className="text-[var(--color-muted-ash)] hover:text-[var(--color-midnight-ink)] relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--color-phoenix-orange)] rounded-full"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-[var(--color-light-taupe)] border border-[var(--color-midnight-ink)] border-opacity-[0.08] flex items-center justify-center text-[var(--color-midnight-ink)] font-bold text-sm shadow-[var(--shadow-subtle-3)]">
              IR
            </div>
          </div>
        </header>

        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
