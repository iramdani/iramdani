const HTMLtoJSX = require('html-to-jsx');
const fs = require('fs');

const converter = new HTMLtoJSX({
  createClass: false
});

try {
  let html = fs.readFileSync('D:/OneDrive/Website/Reference/www.amplemarket.com/index.html', 'utf8');

  // Extract body
  const bodyMatch = html.match(/<div class="am-page-wrapper">([\s\S]*?)<script/is);
  let body = bodyMatch[1];
  
  // Clean up global styles
  body = body.replace(/<div class="am-global-styles w-embed">[\s\S]*?<\/style><\/div>/is, '');

  // Prepend https://
  body = body.replace(/(["'])(cdn\.prod\.website-files\.com[^"']+)(["'])/g, '$1https://$2$3');

  // Replace logo
  body = body.replace(/<a href="\/"[^>]*class="am-logo-link[^>]*>.*?<\/a>/is, '<a href="/" aria-current="page" class="am-logo-link w-inline-block w--current"><div class="am-logo" style="color: white; font-size: 24px; font-weight: bold; display: flex; align-items: center; height: 100%;">iRamdani<span style="color: #a855f7;">.id</span></div></a>');

  // Replace Brand
  body = body.replace(/Amplemarket/g, 'iRamdani');
  body = body.replace(/amplemarket/g, 'iramdani');

  // Fix corrupted CDN URLs
  body = body.replace(/(https:\/\/cdn\.prod\.website-files\.com[^"']*)iramdani/g, '$1amplemarket');
  body = body.replace(/(https:\/\/cdn\.prod\.website-files\.com[^"']*)iramdani/g, '$1amplemarket');

  // Extract all <style> tags before conversion and replace them with a safe placeholder
  const styles = [];
  body = body.replace(/<style[^>]*>([\s\S]*?)<\/style>/gis, (match, content) => {
    styles.push(content);
    return `<div data-style-placeholder="${styles.length - 1}"></div>`;
  });

  console.log('Converting HTML to JSX...');
  let jsx = converter.convert(body);

  // Restore <style> tags safely using dangerouslySetInnerHTML
  jsx = jsx.replace(/<div data-style-placeholder="(\d+)"(?: \/|>.*?<\/div>)/g, (match, index) => {
    const styleContent = styles[parseInt(index)].replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return `<style dangerouslySetInnerHTML={{ __html: \`${styleContent}\` }} />`;
  });

  // Fix some Next.js specific things if needed
  jsx = jsx.replace(/class=/g, 'className=');

  const pageCode = `"use client";
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <div className="am-page-wrapper">
${jsx}
      </div>

      {/* Required Webflow Scripts */}
      <Script 
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="https://cdn.prod.website-files.com/6350808bc45bd0c902af10e6/js/webflow.1e1f753e.1ace8b362c9e0728.js" 
        strategy="afterInteractive" 
        onLoad={() => {
          const w = window as any;
          if (w.Webflow) {
            w.Webflow.destroy();
            w.Webflow.ready();
            w.Webflow.require('ix2').init();
            document.dispatchEvent(new Event('readystatechange'));
          }
        }}
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/attributes.js" 
        strategy="lazyOnload" 
      />
    </>
  );
}
`;

  fs.writeFileSync('D:/OneDrive/Website/iRamdani/src/app/page.tsx', pageCode);
  console.log('JSX Conversion complete!');
} catch (err) {
  console.error('Error:', err);
}
