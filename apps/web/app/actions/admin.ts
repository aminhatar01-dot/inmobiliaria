'use server';

import { createClient, createAdminClient, getTenantId } from '@/lib/supabase/server';

const SUPERADMIN_EMAIL = 'aminhatar01@gmail.com';

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function generateDemoCode(): string {
    // 8-character alphanumeric code (uppercase, no ambiguous chars)
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// ---------------------------------------------------------------------------
// Superadmin check
// ---------------------------------------------------------------------------

export async function isSuperadmin(): Promise<boolean> {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return false;

        const { data, error } = await supabase
            .from('profiles')
            .select('is_superadmin')
            .eq('id', user.id)
            .single();

        if (error || !data) return false;
        return data.is_superadmin === true;
    } catch {
        return false;
    }
}

// ---------------------------------------------------------------------------
// Demo session management (superadmin only)
// ---------------------------------------------------------------------------

export async function generateDemoAccess(email: string): Promise<{
    success: boolean;
    code?: string;
    expiresAt?: string;
    error?: string;
}> {
    try {
        const admin = await isSuperadmin();
        if (!admin) return { success: false, error: 'No autorizado' };

        const supabase = await createClient();
        const adminClient = await createAdminClient();
        const { data: { user: currentUser } } = await supabase.auth.getUser();

        const code = generateDemoCode();
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

        // Check if auth user already exists for this email
        const { data: existingUsers } = await adminClient.auth.admin.listUsers();
        const existingUser = existingUsers?.users?.find(u => u.email === email);

        let authUserId: string;

        if (existingUser) {
            // Update their password to the new code
            await adminClient.auth.admin.updateUserById(existingUser.id, {
                password: code,
            });
            authUserId = existingUser.id;
        } else {
            // Create a new Supabase auth user
            const { data: newUser, error: createError } = await adminClient.auth.admin.createUser({
                email,
                password: code,
                email_confirm: true, // Auto-confirm email
                user_metadata: { is_demo: true, full_name: email.split('@')[0] },
            });

            if (createError || !newUser?.user) {
                return { success: false, error: createError?.message || 'Error al crear usuario' };
            }
            authUserId = newUser.user.id;
        }

        // Upsert demo session (one session per email)
        const { error: sessionError } = await adminClient
            .from('demo_sessions')
            .upsert({
                email,
                password_code: code,
                expires_at: expiresAt.toISOString(),
                used_at: null,
                auth_user_id: authUserId,
                created_by: currentUser?.id,
                created_at: new Date().toISOString(),
            }, { onConflict: 'email' });

        if (sessionError) {
            return { success: false, error: sessionError.message };
        }

        return {
            success: true,
            code,
            expiresAt: expiresAt.toLocaleDateString('es-AR', {
                day: '2-digit', month: '2-digit', year: 'numeric',
                hour: '2-digit', minute: '2-digit'
            }),
        };
    } catch (err: any) {
        console.error('[ADMIN] generateDemoAccess error:', err);
        return { success: false, error: err.message || 'Error inesperado' };
    }
}

export async function getDemoSessions(): Promise<any[]> {
    try {
        const admin = await isSuperadmin();
        if (!admin) return [];

        const adminClient = await createAdminClient();
        const { data, error } = await adminClient
            .from('demo_sessions')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('[ADMIN] getDemoSessions error:', error.message);
            return [];
        }
        return data ?? [];
    } catch (err) {
        console.error('[ADMIN] getDemoSessions unexpected error:', err);
        return [];
    }
}

export async function revokeDemoAccess(email: string): Promise<{ success: boolean; error?: string }> {
    try {
        const admin = await isSuperadmin();
        if (!admin) return { success: false, error: 'No autorizado' };

        const adminClient = await createAdminClient();

        // Set expiry to now to immediately revoke
        const { error } = await adminClient
            .from('demo_sessions')
            .update({ expires_at: new Date().toISOString() })
            .eq('email', email);

        if (error) return { success: false, error: error.message };
        return { success: true };
    } catch (err: any) {
        return { success: false, error: err.message };
    }
}

// ---------------------------------------------------------------------------
// Demo expiry check (used by middleware and dashboard layout)
// ---------------------------------------------------------------------------

export async function checkDemoExpiry(userEmail: string): Promise<{
    isDemo: boolean;
    isExpired: boolean;
    expiresAt?: Date;
}> {
    try {
        const adminClient = await createAdminClient();
        const { data, error } = await adminClient
            .from('demo_sessions')
            .select('expires_at')
            .eq('email', userEmail)
            .single();

        if (error || !data) {
            return { isDemo: false, isExpired: false };
        }

        const expiresAt = new Date(data.expires_at);
        const isExpired = new Date() > expiresAt;

        return { isDemo: true, isExpired, expiresAt };
    } catch {
        return { isDemo: false, isExpired: false };
    }
}
