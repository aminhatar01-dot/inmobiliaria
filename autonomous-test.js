const nodemailer = require('nodemailer');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env.production'));
const supabase = createClient(envConfig.NEXT_PUBLIC_SUPABASE_URL, envConfig.SUPABASE_SERVICE_ROLE_KEY);

async function runAutonomousTest() {
    console.log("=== INICIANDO PRUEBA AUTÓNOMA ===");

    console.log("1. Creando cuenta SMTP de prueba (Ethereal)...");
    const testAccount = await nodemailer.createTestAccount();
    console.log(`Credenciales Ethereal: ${testAccount.user} / ${testAccount.pass}`);

    console.log("2. Creando endpoint receptor de WhatsApp (Webhook.site)...");
    const whRes = await fetch('https://webhook.site/token', { 
        method: 'POST',
        headers: { 'Accept': 'application/json' }
    });
    const whData = await whRes.json();
    const webhookUrl = `https://webhook.site/${whData.uuid}`;
    console.log(`Webhook URL: ${webhookUrl}`);

    console.log("3. Actualizando configuración del CRM en la DB Producción...");
    const tenantId = 'b7afb187-bbe2-402b-af14-83719f09eb88'; // El tenant de prueba de Amin
    
    const { error: updateErr } = await supabase.from('tenant_communication_settings').update({
        smtp_host: testAccount.smtp.host,
        smtp_port: testAccount.smtp.port,
        smtp_user: testAccount.user,
        smtp_pass: testAccount.pass,
        smtp_from_email: testAccount.user,
        whatsapp_mode: 'webhook',
        evolution_api_url: webhookUrl,
        evolution_api_key: 'API_KEY_PRUEBA_123'
    }).eq('tenant_id', tenantId);

    if (updateErr) throw new Error("Error actualizando settings: " + updateErr.message);

    console.log("4. Insertando Lead para disparar Webhook Automático (Evolution API)...");
    const { data: lead, error: leadError } = await supabase.from('leads').insert({
        tenant_id: tenantId,
        name: 'Cliente Prueba Autónoma',
        phone: '5491155554444',
        email: testAccount.user,
        status: 'new',
        source: 'testing'
    }).select().single();

    if (leadError) throw new Error("Error insertando lead: " + leadError.message);
    
    console.log("Lead insertado. Esperando 5 segundos para que Supabase (pg_net) dispare la petición...");
    await new Promise(r => setTimeout(r, 5000));

    console.log("5. Verificando si el Webhook recibió el WhatsApp...");
    const whCheck = await fetch(`https://webhook.site/token/${whData.uuid}/requests`);
    const whCheckData = await whCheck.json();
    
    if (whCheckData.data && whCheckData.data.length > 0) {
        console.log("✅ ¡ÉXITO! Evolution API recibió el payload desde el Trigger de Supabase:");
        const payloadStr = whCheckData.data[0].content;
        console.log(JSON.stringify(JSON.parse(payloadStr), null, 2));
    } else {
        console.log("❌ ERROR: El Webhook no recibió nada. Revisa pg_net o el Trigger de Supabase.");
    }

    console.log("6. Verificando motor de Correos Electrónicos (SMTP Ethereal)...");
    const transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass }
    });

    try {
        const info = await transporter.sendMail({
            from: `"InmoCMS Auto" <${testAccount.user}>`,
            to: testAccount.user,
            subject: "Prueba de Automatización InmoCMS",
            text: "Este es un mensaje de prueba automática del sistema."
        });
        console.log("✅ ¡ÉXITO! Correo automatizado enviado correctamente.");
        console.log("Puedes ver el correo de prueba aquí: " + nodemailer.getTestMessageUrl(info));
    } catch(e) {
        console.log("❌ ERROR en el envío de correo: " + e.message);
    }

    console.log("=== PRUEBA FINALIZADA ===");
    console.log("Limpiando el Lead de prueba...");
    await supabase.from('leads').delete().eq('id', lead.id);
}

runAutonomousTest().catch(console.error);
