
const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      if (file === 'node_modules' || file === '.next' || file === '.next_clean' || file === '.git') return;
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        results = results.concat(walk(file));
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.json') || file.endsWith('.js'))) {
        results.push(file);
      }
    });
  } catch(e) {}
  return results;
}

const files = walk('c:/Users/Amin/OneDrive/Desktop/inmobiliaria');
files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    for (let i = 0; i < content.length; i++) {
      const code = content.charCodeAt(i);
      if (code < 32 && code !== 10 && code !== 13 && code !== 9) {
        console.log(`FOUND corruption in ${file} at index ${i}: CharCode ${code}`);
      }
    }
  } catch(e) {}
});
