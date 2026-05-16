const fs = require('fs');

try {
  let html = fs.readFileSync('D:/OneDrive/Website/Reference/www.amplemarket.com/index.html', 'utf8');

  // 1. Extract am-page-wrapper
  const startTarget = '<div class="am-page-wrapper">';
  const endTarget = '</body>';
  const startIndex = html.indexOf(startTarget);
  const endIndex = html.lastIndexOf(endTarget);
  
  if (startIndex === -1) throw new Error('am-page-wrapper not found');
  let body = html.substring(startIndex, endIndex);

  // 2. STRIP NAVBAR AND FOOTER (They are now in layout.tsx)
  // Strip Navbar
  body = body.replace(/<nav class="am-section is-navbar">[\s\S]*?<\/nav>/, '');
  // Strip Footer
  body = body.replace(/<footer class="am-footer">[\s\S]*?<\/footer>/, '');
  // Strip Progressive Blur (often overlaps with new header)
  body = body.replace(/<div style="--blur: 2rem; --ratio: 1.9;" class="am-progressive-blur-wrapper">[\s\S]*?<\/div>/, '');

  // 3. Fix HTML Entities in scripts (&amp;&amp; -> &&)
  body = body.replace(/&amp;&amp;/g, '&&');
  body = body.replace(/&amp;l=/g, '&l='); 
  body = body.replace(/&amp;/g, '&');
  body = body.replace(/&lt;/g, '<');
  body = body.replace(/&gt;/g, '>');

  // 4. Fix URLs & Branding
  body = body.replace(/Amplemarket/g, 'iRamdani');
  body = body.replace(/amplemarket/g, 'iramdani');
  
  // Revert branding for known CDN paths
  body = body.replace(/(https:\/\/cdn\.prod\.website-files\.com[^"']*)iramdani/g, '$1amplemarket');
  body = body.replace(/(https:\/\/grow\.iramdani\.com)/g, 'https://grow.amplemarket.com');

  const safeHtml = JSON.stringify(body);

  const tsxContent = `"use client";
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const wrapper = document.querySelector('.am-page-wrapper');
    if (wrapper) {
      const scripts = wrapper.querySelectorAll('script');
      scripts.forEach(oldScript => {
        try {
          if (oldScript.src) return; 
          
          const newScript = document.createElement('script');
          Array.from(oldScript.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
          });
          newScript.textContent = oldScript.textContent;
          
          if (oldScript.parentNode) {
            oldScript.parentNode.replaceChild(newScript, oldScript);
          }
        } catch (err) {
          console.warn("Script error:", err);
        }
      });

      // Initialize Webflow
      const w = window as any;
      if (w.Webflow) {
        try {
          w.Webflow.destroy();
          w.Webflow.ready();
          w.Webflow.require('ix2').init();
          setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
            window.dispatchEvent(new Event('scroll'));
          }, 500);
        } catch (e) {}
      }
    }
  }, [isMounted]);

  return (
    <>
      <div 
        className="am-page-wrapper-outer"
        dangerouslySetInnerHTML={{ __html: ${safeHtml} }} 
      />

      {/* Dependencies */}
      <Script 
        src="https://code.jquery.com/jquery-3.5.1.min.js" 
        strategy="beforeInteractive" 
      />
      <Script 
        src="https://cdn.prod.website-files.com/6350808bc45bd0c902af10e6/js/webflow.1e1f753e.1ace8b362c9e0728.js" 
        strategy="afterInteractive" 
      />
    </>
  );
}
`;

  fs.writeFileSync('D:/OneDrive/Website/iRamdani/src/app/page.tsx', tsxContent);
  console.log('DONE: page.tsx cleaned and updated.');
} catch (err) {
  console.error('ERROR:', err);
}
