const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
                results = results.concat(walk(fullPath));
            }
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
            results.push(fullPath);
        }
    });
    return results;
}

const rootDir = 'c:/Users/Amin/OneDrive/Desktop/inmobiliaria';
const files = walk(rootDir);

files.forEach(file => {
    try {
        const buffer = fs.readFileSync(file);
        for (let i = 0; i < buffer.length; i++) {
            const byte = buffer[i];
            if (byte === 26 || byte === 4) {
                console.log(`STRICT_CORRUPTION: ${file} at byte ${i}: Value ${byte}`);
                console.log(`Context: ${buffer.slice(Math.max(0, i-20), Math.min(buffer.length, i+20)).toString('ascii').replace(/[^\x20-\x7E]/g, '?')}`);
            }
        }
    } catch (e) {}
});
