const fs = require('fs');

try {
  const nav = fs.readFileSync('nav-raw.html', 'utf8');
  const tsx = `"use client";
import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // 1. Scroll logic for glass effect (minification)
    const navContent = document.querySelector(".am-nav-content");
    const handleScroll = () => {
      if (navContent) {
        navContent.classList.toggle("is-minified", window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // 2. IntersectionObserver for dark mode color switching
    const navContentWrapper = document.querySelector(".am-nav-content-wrapper");
    const blackSections = document.querySelectorAll(".am-is-black-bg");
    const intersectingSections = new Set();

    const applyDarkMode = () => {
      if (!navContentWrapper) return;
      let isDark = false;
      for (const section of blackSections) {
        if (intersectingSections.has(section)) {
          isDark = true;
          break;
        }
      }
      navContentWrapper.setAttribute("data-color-mode", isDark ? "dark" : "light");
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) intersectingSections.add(entry.target);
        else intersectingSections.delete(entry.target);
      });
      applyDarkMode();
    }, { 
      rootMargin: "-40px 0px -95% 0px", // Focus on the very top of the viewport
      threshold: 0 
    });

    blackSections.forEach(s => observer.observe(s));

    // 3. Dropdown logic (ensure they work with Webflow classes)
    // Most logic is in Webflow IX2, but we ensure state is clean

    return () => {
      window.removeEventListener("scroll", handleScroll);
      blackSections.forEach(s => observer.unobserve(s));
    };
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(nav)} }} />
  );
}
`;
  fs.writeFileSync('D:/OneDrive/Website/iRamdani/src/components/Header.tsx', tsx);
  console.log('SUCCESS: Header.tsx generated with full HTML and dark-mode logic.');
} catch (err) {
  console.error('ERROR:', err);
}
