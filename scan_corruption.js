const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.next')) {
                results = results.concat(walk(file));
            }
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
            results.push(file);
        }
    });
    return results;
}

const rootDir = 'c:/Users/Amin/OneDrive/Desktop/inmobiliaria/apps/web';
const files = walk(rootDir);

files.forEach(file => {
    const buffer = fs.readFileSync(file);
    let found = false;
    for (let i = 0; i < buffer.length; i++) {
        const byte = buffer[i];
        if (byte === 26 || byte === 4) {
            console.log(`STRICT_CORRUPTION: ${file} at byte ${i}: Value ${byte}`);
            console.log(`Context: ${buffer.slice(Math.max(0, i-20), Math.min(buffer.length, i+20)).toString('ascii').replace(/[^\x20-\x7E]/g, '?')}`);
            found = true;
        }
    }
});
