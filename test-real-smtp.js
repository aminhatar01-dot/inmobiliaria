const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');
const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env.production'));
const supabase = createClient(envConfig.NEXT_PUBLIC_SUPABASE_URL, envConfig.SUPABASE_SERVICE_ROLE_KEY);

async function injectAndTest() {
    console.log("=== INICIANDO CONFIGURACIÓN Y PRUEBA DE SMTP ===");
    
    const tenantId = 'b7afb187-bbe2-402b-af14-83719f09eb88';
    // Limpiar los espacios de la contraseña
    const rawPass = "mcim aokr ajeo mzdv";
    const appPassword = rawPass.replace(/\s+/g, '');

    console.log("1. Guardando contraseña de aplicación en la base de datos de InmoCMS...");
    const { error } = await supabase.from('tenant_communication_settings').update({
        smtp_pass: appPassword
    }).eq('tenant_id', tenantId);

    if (error) {
        console.error("❌ Error guardando en la DB:", error);
        return;
    }
    console.log("✅ Contraseña guardada correctamente en Supabase.");

    console.log("2. Probando conexión SMTP real con los servidores de Google...");
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // TLS
        auth: {
            user: 'aminhatar01@gmail.com',
            pass: appPassword
        }
    });

    try {
        await transporter.verify();
        console.log("✅ Conexión verificada exitosamente. Autenticación correcta con Google.");
        
        console.log("3. Enviando correo electrónico de prueba...");
        const info = await transporter.sendMail({
            from: '"InmoCMS Sistema" <aminhatar01@gmail.com>',
            to: 'aminhatar01@gmail.com',
            subject: '✅ InmoCMS: Automatización de Correos Activa',
            text: '¡Hola Amin! Si estás leyendo este correo, significa que el servidor SMTP de tu Inmobiliaria a través de Gmail ha sido configurado exitosamente y ya puede enviar correos automáticos desde InmoCMS.',
            html: '<h3>¡Conexión Exitosa! 🎉</h3><p>Si estás leyendo este correo, significa que tu motor de envío SMTP mediante la cuenta <strong>aminhatar01@gmail.com</strong> ha quedado perfectamente configurado en la base de datos de producción.</p><p>Ya puedes crear automatizaciones de correos en InmoCMS sin problemas.</p>'
        });

        console.log("✅ ¡Correo enviado exitosamente! ID del mensaje: " + info.messageId);
        
    } catch (err) {
        console.error("❌ Falló la prueba SMTP:", err);
    }
}

injectAndTest();
