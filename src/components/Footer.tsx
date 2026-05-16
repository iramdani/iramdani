"use client";
import React, { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const fYear = document.querySelector(".footer-year");
    if (fYear) fYear.textContent = new Date().getFullYear().toString();
  }, []);

  return (
    <footer className="am-footer">
      <div className="am-section is-footer">
        <div className="am-container">
          <div className="am-footer-cta-wrapper">
            <h2 className="am-heading-56 is-white am-margin-bottom-24">Ready to start?</h2>
            <div className="am-nav-btn-wrapper">
              <a href="/signup" className="am-nav-btn w-button">Get free trial</a>
              <div className="am-nav-btn-rocket">
                <div className="am-paragraph-20">🚀</div>
              </div>
            </div>
          </div>
          
          <div className="am-footer-links-wrapper">
            <div className="am-footer-content-wrapper">
              <div className="am-footer-content-top">
                <div className="am-footer-left-wrapper">
                  <div className="am-footer-logo-wrapper" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
                    iRamdani
                  </div>
                </div>
                <div className="am-footer-right-wrapper">
                  <div className="am-footer-column">
                    <div className="am-footer-title-wrapper">
                      <div className="am-paragraph-20 is-white is-footer">Product</div>
                    </div>
                    <div className="am-footer-column-links">
                      <a href="/features" className="am-nav-link is-light w-inline-block"><div>Features</div></a>
                      <a href="/pricing" className="am-nav-link is-light w-inline-block"><div>Pricing</div></a>
                    </div>
                  </div>
                  <div className="am-footer-column">
                    <div className="am-footer-title-wrapper">
                      <div className="am-paragraph-20 is-white is-footer">Resources</div>
                    </div>
                    <div className="am-footer-column-links">
                      <a href="/blog" className="am-nav-link is-light w-inline-block"><div>Blog</div></a>
                      <a href="/help" className="am-nav-link is-light w-inline-block"><div>Help Center</div></a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="am-footer-content-bottom">
                <div className="am-horizontal-divider is-light"></div>
                <div className="am-footer-foot-wrapper">
                  <div className="am-paragraph-12 is-white am-opacity-60">
                    © <span className="footer-year">2026</span> iRamdani. All rights reserved.
                  </div>
                  <div className="am-footer-foot-links-wrapper">
                    <a href="/privacy" className="am-footer-foot-link">Privacy Policy</a>
                    <a href="/terms" className="am-footer-foot-link">Terms of Service</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
