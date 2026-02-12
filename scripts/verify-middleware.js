const http = require('http');

function checkUrl(urlStr) {
    return new Promise((resolve, reject) => {
        const req = http.get(urlStr, (res) => {
            resolve({
                url: urlStr,
                statusCode: res.statusCode,
                location: res.headers.location
            });
            res.resume(); // Consume response to free memory
        });
        req.on('error', (e) => resolve({ error: e.message }));
    });
}

async function verify() {
    console.log("=== INICIANDO VERIFICACIÓN DE SEGURIDAD (MIDDLEWARE) ===");
    console.log("Target: http://localhost:3000\n");

    // CASO 1: Acceso a la raíz '/' (Sin sesión)
    // Esperado: Redirección a '/login'
    console.log("1. Verificando acceso a '/' (Sin sesión)...");
    const rootRes = await checkUrl('http://localhost:3000/');
    if (rootRes.statusCode >= 300 && rootRes.statusCode < 400 && rootRes.location?.includes('/login')) {
        console.log(`   ✅ PASS: Redirige correctamente a ${rootRes.location} (Status: ${rootRes.statusCode})`);
    } else {
        console.log(`   ❌ FAIL: Comportamiento inesperado. Status: ${rootRes.statusCode}, Location: ${rootRes.location}`);
    }

    // CASO 2: Acceso a '/dashboard' (Ruta protegida, Sin sesión)
    // Esperado: Redirección a '/login'
    console.log("\n2. Verificando acceso a '/dashboard' (Sin sesión)...");
    const dashRes = await checkUrl('http://localhost:3000/dashboard');
    if (dashRes.statusCode >= 300 && dashRes.statusCode < 400 && dashRes.location?.includes('/login')) {
        console.log(`   ✅ PASS: Ruta protegida segura. Redirige a ${dashRes.location} (Status: ${dashRes.statusCode})`);
    } else {
        console.log(`   ❌ FAIL: Ruta protegida vulnerable? Status: ${dashRes.statusCode}, Location: ${dashRes.location}`);
    }

    // CASO 3: Acceso a '/login' (Pública)
    // Esperado: 200 OK
    console.log("\n3. Verificando disponibilidad de '/login'...");
    const loginRes = await checkUrl('http://localhost:3000/login');
    if (loginRes.statusCode === 200) {
        console.log(`   ✅ PASS: Página de login accesible (Status: 200)`);
    } else {
        console.log(`   ❌ FAIL: Página de login no disponible. Status: ${loginRes.statusCode}`);
    }

    console.log("\n=== VERIFICACIÓN COMPLETADA ===");
}

verify();
