const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env.production'));
const supabase = createClient(envConfig.NEXT_PUBLIC_SUPABASE_URL, envConfig.SUPABASE_SERVICE_ROLE_KEY);

async function revert() {
    const tenantId = 'b7afb187-bbe2-402b-af14-83719f09eb88';
    const { error } = await supabase.from('tenant_communication_settings').update({
        smtp_host: null,
        smtp_port: 587,
        smtp_user: 'aminhatar01@gmail.com',
        smtp_pass: 'AdminPassword123$',
        smtp_from_name: 'amin si',
        smtp_from_email: 'aminhatar01@gmail.com',
        resend_api_key: 're_ZwiyGafC_29AZxYwt8xHPBNwL9Lrv7sFs',
        whatsapp_mode: 'link',
        whatsapp_api_token: null,
        whatsapp_phone_id: null,
        evolution_api_url: null,
        evolution_api_key: null
    }).eq('tenant_id', tenantId);

    if (error) {
        console.error('Error restoring settings:', error);
    } else {
        console.log('Restauración completada con éxito.');
    }
}

revert();
