const fs = require('fs');

let html = fs.readFileSync('D:/OneDrive/Website/Reference/www.amplemarket.com/index.html', 'utf8');
let cssMatch = html.match(/<div class="am-global-styles w-embed">\s*<style>(.*?)<\/style>\s*<\/div>/is);
let css = cssMatch ? cssMatch[1] : '';

let globals = `@import "tailwindcss";

:root {
  --background: #000000;
  --foreground: #ffffff;
}

body {
  background: var(--background);
  color: var(--foreground);
}

${css}
`;

fs.writeFileSync('D:/OneDrive/Website/iRamdani/src/app/globals.css', globals);
console.log('Fixed globals.css');
