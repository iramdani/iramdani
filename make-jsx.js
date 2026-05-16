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

  // 2. AGGRESSIVE STRIP NAVBAR AND FOOTER
  // Strip any <nav> tag
  body = body.replace(/<nav[\s\S]*?<\/nav>/g, '');
  // Strip any <footer> tag
  body = body.replace(/<footer[\s\S]*?<\/footer>/g, '');
  // Strip specific black footer section if it's a div
  body = body.replace(/<div class=\"am-section am-is-black-bg\">[\s\S]*?<\/div><\/div>/g, '');
  // Strip Progressive Blur
  body = body.replace(/<div style=\"--blur: 2rem; --ratio: 1.9;\" class=\"am-progressive-blur-wrapper\">[\s\S]*?<\/div>/g, '');

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
      // Testimonial Scroll Logic
      const stripes: any[] = [];
      const stripeEls = document.querySelectorAll(".am-social-proof-stripe");
      
      stripeEls.forEach((el: any) => {
        const stripeObj = {
          el: el,
          speed: 0.8,
          targetSpeed: 0.8,
          currentPos: 0,
          length: el.offsetHeight / 2, // Assuming duplicated content for marquee
        };
        stripes.push(stripeObj);

        el.addEventListener("mouseenter", () => { stripeObj.targetSpeed = 0; });
        el.addEventListener("mouseleave", () => { stripeObj.targetSpeed = 0.8; });
      });

      const animateStripes = () => {
        stripes.forEach(stripe => {
          stripe.speed += (stripe.targetSpeed - stripe.speed) * 0.05;
          stripe.currentPos -= stripe.speed; // Scroll upwards
          
          if (Math.abs(stripe.currentPos) >= stripe.length) {
            stripe.currentPos = 0;
          }
          stripe.el.style.transform = "translate3d(0, " + stripe.currentPos + "px, 0)";
        });
        requestAnimationFrame(animateStripes);
      };
      
      if (stripes.length > 0) animateStripes();

      const scripts = wrapper.querySelectorAll('script');
      // ... rest of script logic
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

  fs.writeFileSync('D:/OneDrive/Website/iRamdani/src/app/(main)/page.tsx', tsxContent);
  console.log('DONE: (main)/page.tsx cleaned and updated.');
} catch (err) {
  console.error('ERROR:', err);
}
