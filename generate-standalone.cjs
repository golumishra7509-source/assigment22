const fs = require('fs');
const path = require('path');

const distAssets = path.join(__dirname, 'dist', 'assets');
const files = fs.readdirSync(distAssets);

const cssFile = files.find(f => f.endsWith('.css'));
const jsFile = files.find(f => f.endsWith('.js'));

if (!cssFile || !jsFile) {
  console.error('Could not find CSS or JS bundle in dist/assets!');
  process.exit(1);
}

const css = fs.readFileSync(path.join(distAssets, cssFile), 'utf8');
const js = fs.readFileSync(path.join(distAssets, jsFile), 'utf8');

const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E⚡%3C/text%3E%3C/svg%3E" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Component Studio — React Reusable Components Practice</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <style>
${css}
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
${js.replace(/<\/script>/gi, '<\\/script>')}
    </script>
  </body>
</html>`;

// 1. Root index.html (so GitHub Pages root deploy works INSTANTLY with no loading spinner!)
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');
console.log('✓ Successfully wrote production standalone bundle to root index.html!');

// 2. dist/index.html (so Netlify drag-and-drop or dist deploy works INSTANTLY!)
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), htmlContent, 'utf8');
console.log('✓ Successfully wrote production standalone bundle to dist/index.html!');

// 3. standalone.html (for local double-click offline viewing)
fs.writeFileSync(path.join(__dirname, 'standalone.html'), htmlContent, 'utf8');
console.log('✓ Successfully wrote standalone.html!');
