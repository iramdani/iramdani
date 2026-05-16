"use client";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ir-footer">
      <div className="ir-container">
        <div className="ir-footer-grid">
          {/* Brand */}
          <div>
            <div className="ir-footer-logo">iRamdani</div>
            <p className="ir-footer-tagline">
              Professional design services that elevate your brand — crafted with precision and care.
            </p>
          </div>

          {/* Links */}
          <div className="ir-footer-links-grid">
            <div>
              <p className="ir-footer-col-title">Product</p>
              <Link href="/#features" className="ir-footer-link">Features</Link>
              <Link href="/pricing" className="ir-footer-link">Pricing</Link>
              <Link href="/customers" className="ir-footer-link">Customers</Link>
            </div>
            <div>
              <p className="ir-footer-col-title">Resources</p>
              <Link href="/blog" className="ir-footer-link">Blog</Link>
              <Link href="/help" className="ir-footer-link">Help Center</Link>
              <Link href="/changelog" className="ir-footer-link">Changelog</Link>
            </div>
            <div>
              <p className="ir-footer-col-title">Company</p>
              <Link href="/about" className="ir-footer-link">About</Link>
              <Link href="mailto:hello@iramdani.id" className="ir-footer-link">Contact</Link>
              <Link href="/privacy" className="ir-footer-link">Privacy</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ir-footer-bottom">
          <span>© {year} iRamdani. All rights reserved.</span>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
