"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import { Activity, CreditCard, Package, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>({
    totalOrders: 0,
    activeProjects: 0,
    totalSpent: "$0",
    recentActivity: []
  });

  useEffect(() => {
    async function loadDashboard() {
      try {
        // Example integration with NextCuan API
        // const res = await fetchAPI("getDashboardStats");
        // if (res.success) setStats(res.data);
        
        // Mock data for now since we haven't authenticated
        setTimeout(() => {
          setStats({
            totalOrders: 12,
            activeProjects: 3,
            totalSpent: "$1,450",
            recentActivity: [
              { id: 1, action: "Order Placed", detail: "Logo Design Package", time: "2 hours ago" },
              { id: 2, action: "Revision Requested", detail: "Website Mockup v2", time: "1 day ago" },
              { id: 3, action: "Payment Successful", detail: "Invoice #INV-2026", time: "3 days ago" },
            ]
          });
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    
    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's an overview of your account.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 font-medium">Total Orders</h3>
            <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
              <Package size={20} />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">{stats.totalOrders}</div>
        </div>
        
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 font-medium">Active Projects</h3>
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
              <Activity size={20} />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">{stats.activeProjects}</div>
        </div>

        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 font-medium">Total Spent</h3>
            <div className="p-2 bg-green-500/10 text-green-400 rounded-lg">
              <CreditCard size={20} />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">{stats.totalSpent}</div>
        </div>

        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 font-medium">Activity Level</h3>
            <div className="p-2 bg-orange-500/10 text-orange-400 rounded-lg">
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">High</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
        <div className="space-y-6">
          {stats.recentActivity.map((item: any, i: number) => (
            <div key={item.id} className="flex gap-4 relative">
              {i !== stats.recentActivity.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-[-24px] w-px bg-white/10"></div>
              )}
              <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/50 flex-shrink-0 mt-1"></div>
              <div>
                <p className="text-white font-medium">{item.action}</p>
                <p className="text-gray-400 text-sm mt-1">{item.detail}</p>
                <p className="text-gray-500 text-xs mt-2">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
