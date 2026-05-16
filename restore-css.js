const fs = require('fs');

try {
  const html = fs.readFileSync('D:/OneDrive/Website/Reference/www.amplemarket.com/index.html', 'utf8');
  
  // Extract all <style> blocks
  const styleMatches = html.match(/<style>([\s\S]*?)<\/style>/g);
  
  if (!styleMatches) {
    console.error('No style blocks found in reference HTML.');
    process.exit(1);
  }

  let fullCss = '@import "tailwindcss";\n\n';
  
  styleMatches.forEach(block => {
    let css = block.replace(/<style>|<\/style>/g, '');
    // Clean up entities if any
    css = css.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    fullCss += css + '\n';
  });

  // Basic cleanup of literal \t and \n if they somehow got in
  fullCss = fullCss.replace(/\\t/g, '\t').replace(/\\n/g, '\n');

  fs.writeFileSync('D:/OneDrive/Website/iRamdani/src/app/globals.css', fullCss);
  console.log('SUCCESS: globals.css restored and cleaned.');
} catch (err) {
  console.error('ERROR:', err);
  process.exit(1);
}
