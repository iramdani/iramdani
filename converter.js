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

  // Convert basic HTML to JSX
  body = body.replace(/class=/g, 'className=')
             .replace(/for=/g, 'htmlFor=')
             .replace(/<!--/g, '{/*')
             .replace(/-->/g, '*/}')
             .replace(/srcset=/g, 'srcSet=')
             .replace(/crossorigin=/g, 'crossOrigin=')
             .replace(/tabindex=/g, 'tabIndex=')
             .replace(/readonly=/g, 'readOnly=')
             .replace(/autocomplete=/g, 'autoComplete=')
             .replace(/autofocus=/g, 'autoFocus=')
             .replace(/maxlength=/g, 'maxLength=');

  // Self-closing tags
  body = body.replace(/<img([^>]*?)(?<!\/)>/gi, '<img$1 />')
             .replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />')
             .replace(/<br([^>]*?)(?<!\/)>/gi, '<br$1 />')
             .replace(/<hr([^>]*?)(?<!\/)>/gi, '<hr$1 />')
             .replace(/<source([^>]*?)(?<!\/)>/gi, '<source$1 />')
             .replace(/<link([^>]*?)(?<!\/)>/gi, '<link$1 />')
             .replace(/<meta([^>]*?)(?<!\/)>/gi, '<meta$1 />');

  // Inline styles to object
  body = body.replace(/style="([^"]*?)"/g, (m, p1) => {
    const styleObj = p1.split(';').filter(s => s.trim()).reduce((acc, s) => {
      const parts = s.split(':');
      if (parts.length >= 2) {
        const k = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase()); // camelCase
        const v = parts.slice(1).join(':').trim().replace(/'/g, "\\'"); // escape single quotes
        acc.push(`${k}: '${v}'`);
      }
      return acc;
    }, []).join(', ');
    return `style={{ ${styleObj} }}`;
  });

  // Wistia custom tags and other non-standard tags often cause issues, but we'll leave them if they are valid XML
  // Just in case, replace unescaped `{` or `}` in text or scripts. (Amplemarket uses data attributes mostly)
  // Let's strip out <script> tags just in case
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '');
  
  // Let's strip <style> blocks that might have CSS using {} which breaks JSX
  body = body.replace(/<style[\s\S]*?<\/style>/gi, '');

  const tsxContent = `export default function Home() {
  return (
    <>
      ${body}
    </>
  );
}`;

  fs.writeFileSync('D:/OneDrive/Website/iRamdani/src/app/page.tsx', tsxContent);
  console.log('Successfully converted HTML to JSX.');
} catch (err) {
  console.error('Error during conversion:', err);
}
