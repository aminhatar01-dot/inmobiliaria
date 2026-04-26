const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env.production'));
const supabase = createClient(envConfig.NEXT_PUBLIC_SUPABASE_URL, envConfig.SUPABASE_SERVICE_ROLE_KEY);

async function setupOptionA() {
    const tenantId = 'b7afb187-bbe2-402b-af14-83719f09eb88';
    
    // Dejamos lista la configuración SMTP de Gmail. 
    // Solo falta el smtp_pass que el usuario debe generar.
    const { error } = await supabase.from('tenant_communication_settings').update({
        smtp_host: 'smtp.gmail.com',
        smtp_port: 587,
        smtp_user: 'aminhatar01@gmail.com',
        // Borramos el password anterior que era incorrecto
        smtp_pass: null, 
        smtp_from_name: 'Inmobiliaria Amin',
        smtp_from_email: 'aminhatar01@gmail.com',
        // Resend lo limpiamos para que no interfiera
        resend_api_key: null
    }).eq('tenant_id', tenantId);

    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Opción A (Gmail SMTP) pre-configurada con éxito.');
    }
}

setupOptionA();
