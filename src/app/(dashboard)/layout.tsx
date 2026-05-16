"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Settings, ShoppingCart, Users, LogOut, Menu, X } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#0A0A0A] border-r border-white/10 transform transition-transform duration-300 md:translate-x-0 md:static md:block
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex items-center justify-between p-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-white font-bold text-xl tracking-tight">
              iRamdani<span className="text-purple-400">.id</span>
            </span>
          </Link>
          <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="px-4 py-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 text-white font-medium">
            <Home size={18} className="text-purple-400" />
            Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white font-medium transition-colors">
            <ShoppingCart size={18} />
            Orders
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white font-medium transition-colors">
            <Users size={18} />
            Members
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white font-medium transition-colors">
            <Settings size={18} />
            Settings
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button 
            onClick={() => {
              // Handle logout
              window.location.href = "/login";
            }}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 font-medium transition-colors"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-white/10 flex items-center px-4 md:px-8 bg-[#0A0A0A]/50 backdrop-blur-sm sticky top-0 z-30">
          <button 
            className="md:hidden text-gray-400 hover:text-white mr-4"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          
          <div className="flex-1 flex justify-end items-center">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-purple-300 font-semibold text-sm">
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
