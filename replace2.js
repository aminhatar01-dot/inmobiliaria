const fs = require('fs');
let content = fs.readFileSync('apps/web/app/actions/subscriptions.ts', 'utf8');

// Also replace the thrown errors for createCheckoutPreference
content = content.replace(
    `throw new Error(data.message || data.error || "Error creating MP preference")`,
    `return { success: false, error: data.message || data.error || "Error creating MP preference" }`
);

content = content.replace(
    `throw new Error("No se pudo generar el link de pago: " + error.message)`,
    `return { success: false, error: "No se pudo generar el link de pago: " + error.message }`
);

content = content.replace(
    `if (!user) throw new Error("Debes iniciar sesión para suscribirte.")\n    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://inmobiliaria-orpin-one.vercel.app'\n    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN`,
    `const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://inmobiliaria-orpin-one.vercel.app'\n    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN\n    if (!user) return { success: false, error: "Debes iniciar sesión para suscribirte." }`
);

fs.writeFileSync('apps/web/app/actions/subscriptions.ts', content);
