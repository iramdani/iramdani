const fs = require('fs');
const html = fs.readFileSync('D:/OneDrive/Website/Reference/www.amplemarket.com/index.html', 'utf8');
const bodyMatch = html.match(/<div class="am-page-wrapper">([\s\S]*?)<\/body>/i);
if(bodyMatch) {
  const scripts = bodyMatch[1].match(/<script[\s\S]*?<\/script>/gi);
  scripts.forEach((s, i) => console.log('SCRIPT ' + i + '\n' + s.substring(0, 150) + '...'));
}
