"use client";
import React from 'react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Orders', value: '1,284', trend: '+12%' },
    { label: 'Revenue', value: '$42,500', trend: '+8%' },
    { label: 'Active Users', value: '3,120', trend: '+15%' },
    { label: 'New Signups', value: '450', trend: '+20%' },
  ];

  return (
    <div className="am-page-wrapper" style={{ padding: '120px 20px', minHeight: '100vh' }}>
      <div className="am-container">
        <div className="am-margin-bottom-48">
          <h1 className="am-heading-56 is-white am-margin-bottom-8">Admin Dashboard</h1>
          <p className="am-paragraph-20 am-opacity-60" style={{ color: 'white' }}>Manage your iRamdani operations and analytics.</p>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {stats.map((stat, i) => (
            <div key={i} className="glass-card" style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              backdropFilter: 'blur(10px)', 
              borderRadius: '20px', 
              border: '1px solid rgba(255, 255, 255, 0.05)',
              padding: '24px'
            }}>
              <div className="am-paragraph-14 am-opacity-60 am-margin-bottom-8" style={{ color: 'white' }}>{stat.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <div className="am-heading-36 is-white">{stat.value}</div>
                <div style={{ color: '#00ff99', fontSize: '0.9rem', fontWeight: 'bold' }}>{stat.trend}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Orders Table */}
        <div className="glass-card" style={{ 
          background: 'rgba(255, 255, 255, 0.03)', 
          backdropFilter: 'blur(10px)', 
          borderRadius: '24px', 
          border: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '32px',
          overflowX: 'auto'
        }}>
          <h3 className="am-heading-24 is-white am-margin-bottom-24">Recent Orders</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ textAlign: 'left', padding: '16px', opacity: 0.6 }}>Order ID</th>
                <th style={{ textAlign: 'left', padding: '16px', opacity: 0.6 }}>Customer</th>
                <th style={{ textAlign: 'left', padding: '16px', opacity: 0.6 }}>Status</th>
                <th style={{ textAlign: 'right', padding: '16px', opacity: 0.6 }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '16px' }}>#ORD-729{item}</td>
                  <td style={{ padding: '16px' }}>Client {item}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ background: 'rgba(0,255,153,0.1)', color: '#00ff99', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem' }}>
                      Completed
                    </span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>$1,250.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
