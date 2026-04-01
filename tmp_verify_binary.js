
const fs = require('fs');
const files = [
    'c:/Users/Amin/OneDrive/Desktop/inmobiliaria/apps/web/app/(dashboard)/cuenta/plan/page.tsx',
    'c:/Users/Amin/OneDrive/Desktop/inmobiliaria/apps/web/app/page.tsx',
    'c:/Users/Amin/OneDrive/Desktop/inmobiliaria/apps/web/app/(dashboard)/cuenta/plan/success/page.tsx',
    'c:/Users/Amin/OneDrive/Desktop/inmobiliaria/apps/web/app/(dashboard)/cuenta/plan/checkout/page.tsx'
];

files.forEach(file => {
    try {
        const buf = fs.readFileSync(file);
        for (let i = 0; i < buf.length; i++) {
            if (buf[i] < 32 && ![10, 13, 9].includes(buf[i])) {
                console.log(`BINARY in ${file} at ${i}: 0x${buf[i].toString(16)}`);
            }
        }
    } catch(e) {}
});
