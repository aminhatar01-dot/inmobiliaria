
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
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('c:/Users/Amin/OneDrive/Desktop/inmobiliaria/apps/web/app');
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  for (let i = 0; i < content.length; i++) {
    const code = content.charCodeAt(i);
    // Control characters except \n, \r, \t
    if (code < 32 && code !== 10 && code !== 13 && code !== 9) {
      console.log(`FOUND corruption in ${file} at index ${i}: CharCode ${code}`);
      console.log(`Context: "${content.substring(Math.max(0, i-10), Math.min(content.length, i+10))}"`);
    }
  }
});
