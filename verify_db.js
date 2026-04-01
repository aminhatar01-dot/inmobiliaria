
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: 'apps/web/.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing env vars');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    const { data: tenants } = await supabase.from('tenants').select('*');
    console.log('Tenants:', tenants?.length || 0);

    const { data: roles } = await supabase.from('roles').select('*');
    console.log('Roles:', roles?.length || 0);

    const { data: branches } = await supabase.from('branches').select('*');
    console.log('Branches:', branches?.length || 0);

    const { data: profiles } = await supabase.from('profiles').select('*');
    console.log('Profiles:', profiles?.length || 0);

    if (tenants) console.log('Tenant IDs:', tenants.map(t => t.id));
}

check();
