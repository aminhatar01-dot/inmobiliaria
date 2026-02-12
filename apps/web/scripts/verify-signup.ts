
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Load env (simple parser)
const envPath = path.resolve(__dirname, '../.env.local');
console.log('Looking for env file at:', envPath);

if (!fs.existsSync(envPath)) {
    console.error('File does not exist!');
    // Try absolute path from known structure if needed or relative to CWD
    console.log('CWD:', process.cwd());
}

const envContent = fs.readFileSync(envPath, 'utf-8');
const env: Record<string, string> = {};
envContent.split(/\r?\n/).forEach(line => { // Handle CRLF
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
        env[match[1]] = match[2].trim();
    }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
    const email = `test_${Date.now()}@example.com`;
    const password = 'password123';
    const fullName = 'Test User Verification';
    const agencyName = 'Verification Agency';

    console.log(`Attempting to sign up user: ${email}`);

    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName,
                agency_name: agencyName
            }
        }
    });

    if (authError) {
        console.error('Signup Error:', authError);
        process.exit(1);
    }

    const userId = authData.user?.id;
    console.log(`Signup successful. User ID: ${userId}`);

    // Needs time for trigger to run? Usually immediate in Postgres triggers commit.
    // But let's check validation by logging in or querying.

    if (!authData.session) {
        console.log('No session returned (email confirmation might be needed?). Local Supabase usually auto-confirms.');
        // Try to signIn
        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (loginError) {
            console.error('Login Error:', loginError);
            process.exit(1);
        }
        console.log('Login successful.');
    }

    // Check profile via RLS (Select own profile)
    const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

    if (profileError) {
        console.error('Profile fetch error (RLS or missing):', profileError);
        // If table is renamed users -> profiles, and RLS works, we should see it.
    } else {
        console.log('Profile found:', profile);
        if (profile.name === fullName) {
            console.log('Profile name matches.');
        } else {
            console.error('Profile name mismatch:', profile.name);
        }
    }

    // Verify Tenant exists?
    // We cannot query tenants table directly with anon key if RLS forbids listing all tenants.
    // But RLS "Users can view their own tenant" might allow it if we know the tenant_id from profile.

    if (profile && profile.tenant_id) {
        const { data: tenant, error: tenantError } = await supabase
            .from('tenants')
            .select('*')
            .eq('id', profile.tenant_id)
            .single();

        if (tenantError) {
            console.error('Tenant fetch error:', tenantError);
        } else {
            console.log('Tenant found:', tenant);
            if (tenant.name === agencyName) {
                console.log('Tenant name matches.');
            } else {
                console.error('Tenant name mismatch:', tenant.name);
            }
        }
    }

    console.log('Verification Finished.');
}

verify();
