const fs = require('fs');
let content = fs.readFileSync('apps/web/app/actions/subscriptions.ts', 'utf8');

const target = `    if (!user) throw new Error("Debes iniciar sesión para suscribirte.")
    if (!accessToken) throw new Error("Servicio de pagos no configurado.")`;

const replacement = `    if (!user) return { success: false, error: "Debes iniciar sesión para suscribirte." }
    
    if (!accessToken) {
        console.warn("MERCADOPAGO_ACCESS_TOKEN not found. Using local mock checkout.")
        return {
            success: true,
            init_point: \`\${siteUrl}/cuenta/plan/checkout?plan=\${planName}&price=\${price}\`
        }
    }`;

// Try replacing with \r\n and \n
content = content.replace(target, replacement);
content = content.replace(target.replace(/\n/g, '\r\n'), replacement);

// Also replace the thrown errors below
content = content.replace(
    `throw new Error(data.message || data.error || "Error al crear suscripción recurrente")`,
    `return { success: false, error: data.message || data.error || "Error al crear suscripción recurrente" }`
);

content = content.replace(
    `throw new Error("No se pudo generar el link de débito automático: " + error.message)`,
    `return { success: false, error: "No se pudo generar el link de débito automático: " + error.message }`
);

fs.writeFileSync('apps/web/app/actions/subscriptions.ts', content);
