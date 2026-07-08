const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('F:/coirei-follei/CoireiWeb/src');
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match <h1...data-ns-animate... or <h2...data-ns-animate...
  const regex = /(<(?:h1|h2|h3|h4)[^>]*?\bdata-ns-animate(?:=[\"'][^\"']*[\"'])?)(?!\s*data-ns-animate-hero)/g;
  if (regex.test(content)) {
    const newContent = content.replace(regex, '$1 data-ns-animate-hero="true"');
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated', file);
  }
});
