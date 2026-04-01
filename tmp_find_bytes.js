const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    try {
        const list = fs.readdirSync(dir);
        list.forEach(file => {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat && stat.isDirectory()) {
                if (!['node_modules', '.git', '.next', '.gemini', 'dist', 'build'].includes(file)) {
                    results = results.concat(walk(fullPath));
                }
            } else {
                results.push(fullPath);
            }
        });
    } catch (e) {}
    return results;
}

const rootDir = process.cwd();
console.log(`Scanning ${rootDir}...`);
const files = walk(rootDir);

files.forEach(file => {
    try {
        const stats = fs.statSync(file);
        if (stats.size > 1024 * 1024) return; // Skip files > 1MB

        const buffer = fs.readFileSync(file);
        for (let i = 0; i < buffer.length; i++) {
            if (buffer[i] === 26 || buffer[i] === 4) {
                console.log(`FOUND CORRUPTION: ${file} at byte ${i} (Value: ${buffer[i]})`);
                console.log(`Context: ${buffer.slice(Math.max(0, i-30), Math.min(buffer.length, i+30)).toString('ascii').replace(/[^\x20-\x7E]/g, '?')}`);
                break;
            }
        }
    } catch (e) {}
});
