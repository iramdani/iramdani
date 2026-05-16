"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/script';

export default function Header() {
  const [isMinified, setIsMinified] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const minifiedThreshold = 100;
      setIsMinified(scrollPos > minifiedThreshold);

      // Dark mode logic based on background
      // This is a simplified version, usually depends on sections
      // For now, we'll follow the original IX2 triggers if possible
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="am-section is-navbar">
      <div className="am-container">
        <div 
          data-color-mode={isDarkMode ? "dark" : "light"} 
          className="am-nav-content-wrapper"
        >
          <div className={`am-nav-content is-big ${isMinified ? 'is-minified' : ''}`}>
            <div className="am-navbar-mobile-header-bg am-hide-desktop"></div>
            <div className="am-nav-content-left">
              <a href="/" className="am-logo-link w-inline-block">
                <div className="am-logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: isDarkMode ? 'white' : 'black', display: 'flex', alignItems: 'center' }}>
                  iRamdani
                </div>
              </a>
              <div className="am-nav-content-links am-hide-tablet">
                {/* Simplified links for now, can be expanded to match the full dropdowns */}
                <a href="/products" className="am-nav-link w-inline-block"><div>Products</div></a>
                <a href="/solutions" className="am-nav-link w-inline-block"><div>Solutions</div></a>
                <a href="/pricing" className="am-nav-link w-inline-block"><div>Pricing</div></a>
                <a href="/about" className="am-nav-link w-inline-block"><div>About</div></a>
              </div>
            </div>
            <div className="am-nav-content-right">
              <div className="am-nav-content-links">
                <a href="/login" className="am-nav-btn is-secondary w-button">Login</a>
                <div className="am-nav-btn-wrapper">
                  <a href="/signup" className="am-nav-btn w-button">Sign Up</a>
                  <div className="am-nav-btn-rocket">
                    <div className="am-paragraph-20">🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .am-logo-link { text-decoration: none; }
      `}</style>
    </nav>
  );
}
