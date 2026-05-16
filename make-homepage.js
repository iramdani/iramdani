const fs = require('fs');

try {
  let html = fs.readFileSync('D:/OneDrive/Website/Reference/www.amplemarket.com/index.html', 'utf8');

  // Extract the main content inside <div class="am-page-wrapper">... excluding the initial styles and final scripts
  const bodyMatch = html.match(/<div class="am-page-wrapper">([\s\S]*?)<script/is);
  if (!bodyMatch) {
    console.error('Could not find the page wrapper content.');
    process.exit(1);
  }

  let body = bodyMatch[1];
  
  // Clean up Webflow injected Global Styles block which we already copied to globals.css
  body = body.replace(/<div class="am-global-styles w-embed">[\s\S]*?<\/style><\/div>/is, '');

  // Prepend https:// to all cdn.prod.website-files.com links
  body = body.replace(/(["'])(cdn\.prod\.website-files\.com[^"']+)(["'])/g, '$1https://$2$3');

  // Replace logo with iRamdani text
  body = body.replace(/<a href="\/"[^>]*class="am-logo-link[^>]*>.*?<\/a>/is, '<a href="/" aria-current="page" class="am-logo-link w-inline-block w--current"><div class="am-logo" style="color: white; font-size: 24px; font-weight: bold; display: flex; align-items: center; height: 100%;">iRamdani<span style="color: #a855f7;">.id</span></div></a>');

  // Replace Amplemarket with iRamdani
  body = body.replace(/Amplemarket/g, 'iRamdani');
  body = body.replace(/amplemarket/g, 'iramdani');

  // Fix corrupted CDN URLs
  body = body.replace(/(https:\/\/cdn\.prod\.website-files\.com[^"']*)iramdani/g, '$1amplemarket');
  body = body.replace(/(https:\/\/cdn\.prod\.website-files\.com[^"']*)iramdani/g, '$1amplemarket'); // Run twice in case of multiple occurrences in one string
  
  // Escape backticks and dollar signs for template literal
  body = body.replace(/`/g, '\\`').replace(/\$/g, '\\$');

  const tsFileContent = `export const rawHtml = \`${body}\`;\n`;

  fs.writeFileSync('D:/OneDrive/Website/iRamdani/src/app/rawHtml.ts', tsFileContent);
  console.log('Successfully generated rawHtml.ts.');
} catch (err) {
  console.error('Error during conversion:', err);
}
