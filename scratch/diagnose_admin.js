require('dotenv').config({ path: './scratch_env/.env.prod' });
const { createClient } = require('@supabase/supabase-js');

async function run() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
        console.error("Missing credentials");
        return;
    }

    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });

    console.log("Connected to Supabase Admin:", supabaseUrl);
    
    // Check if aminhatar01@gmail.com exists
    const email = 'aminhatar01@gmail.com';
    const { data: users, error: listError } = await adminClient.auth.admin.listUsers();
    
    if (listError) {
        console.error("Error listing users:", listError);
        return;
    }

    let adminUser = users.users.find(u => u.email === email);

    if (adminUser) {
        console.log("Admin user exists in auth.users with ID:", adminUser.id);
    } else {
        console.log("Admin user does not exist. Creating via Admin API...");
        const { data: newUser, error: createError } = await adminClient.auth.admin.createUser({
            email: email,
            password: 'AdminPassword123!',
            email_confirm: true,
            user_metadata: {
                full_name: 'Amin Admin',
                agency_name: 'InmoCMS HQ'
            }
        });

        if (createError) {
            console.error("Failed to create admin:", createError);
            return;
        }
        
        console.log("Admin successfully created in auth.users:", newUser.user.id);
        adminUser = newUser.user;
    }

    // Now let's check if the profile exists
    const { data: profile, error: profileError } = await adminClient.from('profiles').select('*').eq('id', adminUser.id).single();
    
    if (profileError || !profile) {
        console.error("Profile is MISSING! The trigger must have failed. Error:", profileError);
        console.log("Attempting manual profile creation...");
        
        // 1. Create Tenant
        const { data: tenant, error: tErr } = await adminClient.from('tenants').insert({
            name: 'InmoCMS HQ',
            plan: 'pro'
        }).select().single();

        if (tErr) { console.error("Tenant Error:", tErr); return; }

        // 2. Profile
        const { data: newProfile, error: pErr } = await adminClient.from('profiles').insert({
            id: adminUser.id,
            tenant_id: tenant.id,
            name: 'Amin Admin',
            email: email,
            is_superadmin: true
        }).select().single();

        if (pErr) { console.error("Profile Creation Error:", pErr); return; }

        // 3. Roles
        const { data: role, error: rErr } = await adminClient.from('roles').insert({
            tenant_id: tenant.id,
            name: 'Administrador'
        }).select().single();
        
        await adminClient.from('user_role_assignments').insert({
            user_id: adminUser.id,
            role_id: role.id
        });

        console.log("Manual profile + tenant + role creation SUCCESS!");
    } else {
        console.log("Profile exists:", profile);
        if (!profile.is_superadmin) {
            await adminClient.from('profiles').update({ is_superadmin: true }).eq('id', adminUser.id);
            console.log("Updated is_superadmin to true.");
        }
    }
    
    console.log("\n--- ACCOUNT DETAILS ---");
    console.log("Email: aminhatar01@gmail.com");
    console.log("Password: AdminPassword123!");
    console.log("YOU CAN NOW LOG IN.");
}

run();
