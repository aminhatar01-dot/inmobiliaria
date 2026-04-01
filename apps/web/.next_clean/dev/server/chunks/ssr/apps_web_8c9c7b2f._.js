module.exports = [
"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0058814481d565d1755417476327d2f49abc2dac21":"signOut"},"",""] */ __turbopack_context__.s([
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function signOut() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('Error signing out:', error);
        return {
            success: false,
            error: error.message
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signOut
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signOut, "0058814481d565d1755417476327d2f49abc2dac21", null);
}),
"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"403dfd806530b0f0596321853a27664384a9a3b0dd":"globalSearch"},"",""] */ __turbopack_context__.s([
    "globalSearch",
    ()=>globalSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function globalSearch(query) {
    if (!query || query.length < 2) return [];
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const searchResults = [];
    // 1. Search Properties
    const { data: properties } = await supabase.from("properties").select("id, title, address, reference:id") // Using ID as reference for now
    .eq("tenant_id", tenantId).or(`title.ilike.%${query}%,address.ilike.%${query}%`).limit(5);
    if (properties) {
        properties.forEach((p)=>{
            searchResults.push({
                id: p.id,
                title: p.title,
                subtitle: p.address,
                type: 'property',
                url: `/propiedades/${p.id}`
            });
        });
    }
    // 2. Search Leads
    const { data: leads } = await supabase.from("leads").select("id, name, email, phone").eq("tenant_id", tenantId).or(`name.ilike.%${query}%,email.ilike.%${query}%,phone.ilike.%${query}%`).limit(5);
    if (leads) {
        leads.forEach((l)=>{
            searchResults.push({
                id: l.id,
                title: l.name,
                subtitle: l.email || l.phone,
                type: 'lead',
                url: `/clientes` // Assuming search leads takes to clients list or detail if available
            });
        });
    }
    // 3. Search Agents (Profiles)
    const { data: agents } = await supabase.from("profiles").select("id, full_name, email").eq("tenant_id", tenantId).or(`full_name.ilike.%${query}%,email.ilike.%${query}%`).limit(5);
    if (agents) {
        agents.forEach((a)=>{
            searchResults.push({
                id: a.id,
                title: a.full_name || 'Agente',
                subtitle: a.email,
                type: 'agent',
                url: `/agentes`
            });
        });
    }
    return searchResults;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    globalSearch
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(globalSearch, "403dfd806530b0f0596321853a27664384a9a3b0dd", null);
}),
"[project]/apps/web/app/actions/admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"007f308640b63fd80e09b97f6bb531f9f5b6a98dc3":"isSuperadmin","0085f9783eb644e45245e14381eeefd4af44a9e3fb":"getDemoSessions","403864c797930a7655ffb100e34b187a27e43a8e71":"generateDemoAccess","40453ed08e14be7bca4ce64ed05e30467fedf34f6e":"revokeDemoAccess","40aa629fc7299956233a61975086eb46bd24c299c5":"checkDemoExpiry"},"",""] */ __turbopack_context__.s([
    "checkDemoExpiry",
    ()=>checkDemoExpiry,
    "generateDemoAccess",
    ()=>generateDemoAccess,
    "getDemoSessions",
    ()=>getDemoSessions,
    "isSuperadmin",
    ()=>isSuperadmin,
    "revokeDemoAccess",
    ()=>revokeDemoAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const SUPERADMIN_EMAIL = 'aminhatar01@gmail.com';
// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------
function generateDemoCode() {
    // 8-character alphanumeric code (uppercase, no ambiguous chars)
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({
        length: 8
    }, ()=>chars[Math.floor(Math.random() * chars.length)]).join('');
}
async function isSuperadmin() {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return false;
        const { data, error } = await supabase.from('profiles').select('is_superadmin').eq('id', user.id).single();
        if (error || !data) return false;
        return data.is_superadmin === true;
    } catch  {
        return false;
    }
}
async function generateDemoAccess(email) {
    try {
        const admin = await isSuperadmin();
        if (!admin) return {
            success: false,
            error: 'No autorizado'
        };
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
        const { data: { user: currentUser } } = await supabase.auth.getUser();
        const code = generateDemoCode();
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
        // Check if auth user already exists for this email
        const { data: existingUsers } = await adminClient.auth.admin.listUsers();
        const existingUser = existingUsers?.users?.find((u)=>u.email === email);
        let authUserId;
        if (existingUser) {
            // Update their password to the new code
            await adminClient.auth.admin.updateUserById(existingUser.id, {
                password: code
            });
            authUserId = existingUser.id;
        } else {
            // Create a new Supabase auth user
            const { data: newUser, error: createError } = await adminClient.auth.admin.createUser({
                email,
                password: code,
                email_confirm: true,
                user_metadata: {
                    is_demo: true,
                    full_name: email.split('@')[0]
                }
            });
            if (createError || !newUser?.user) {
                return {
                    success: false,
                    error: createError?.message || 'Error al crear usuario'
                };
            }
            authUserId = newUser.user.id;
        }
        // Upsert demo session (one session per email)
        const { error: sessionError } = await adminClient.from('demo_sessions').upsert({
            email,
            password_code: code,
            expires_at: expiresAt.toISOString(),
            used_at: null,
            auth_user_id: authUserId,
            created_by: currentUser?.id,
            created_at: new Date().toISOString()
        }, {
            onConflict: 'email'
        });
        if (sessionError) {
            return {
                success: false,
                error: sessionError.message
            };
        }
        return {
            success: true,
            code,
            expiresAt: expiresAt.toLocaleDateString('es-AR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };
    } catch (err) {
        console.error('[ADMIN] generateDemoAccess error:', err);
        return {
            success: false,
            error: err.message || 'Error inesperado'
        };
    }
}
async function getDemoSessions() {
    try {
        const admin = await isSuperadmin();
        if (!admin) return [];
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
        const { data, error } = await adminClient.from('demo_sessions').select('*').order('created_at', {
            ascending: false
        });
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
async function revokeDemoAccess(email) {
    try {
        const admin = await isSuperadmin();
        if (!admin) return {
            success: false,
            error: 'No autorizado'
        };
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
        // Set expiry to now to immediately revoke
        const { error } = await adminClient.from('demo_sessions').update({
            expires_at: new Date().toISOString()
        }).eq('email', email);
        if (error) return {
            success: false,
            error: error.message
        };
        return {
            success: true
        };
    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}
async function checkDemoExpiry(userEmail) {
    try {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
        const { data, error } = await adminClient.from('demo_sessions').select('expires_at').eq('email', userEmail).single();
        if (error || !data) {
            return {
                isDemo: false,
                isExpired: false
            };
        }
        const expiresAt = new Date(data.expires_at);
        const isExpired = new Date() > expiresAt;
        return {
            isDemo: true,
            isExpired,
            expiresAt
        };
    } catch  {
        return {
            isDemo: false,
            isExpired: false
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    isSuperadmin,
    generateDemoAccess,
    getDemoSessions,
    revokeDemoAccess,
    checkDemoExpiry
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(isSuperadmin, "007f308640b63fd80e09b97f6bb531f9f5b6a98dc3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateDemoAccess, "403864c797930a7655ffb100e34b187a27e43a8e71", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDemoSessions, "0085f9783eb644e45245e14381eeefd4af44a9e3fb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(revokeDemoAccess, "40453ed08e14be7bca4ce64ed05e30467fedf34f6e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkDemoExpiry, "40aa629fc7299956233a61975086eb46bd24c299c5", null);
}),
"[project]/apps/web/.next-internal/server/app/(dashboard)/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/admin.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/admin.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/apps/web/.next-internal/server/app/(dashboard)/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/admin.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0058814481d565d1755417476327d2f49abc2dac21",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "00595a1441ca18875a8647cad1554eedd8e6e92fe2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processPendingReminders"],
    "007f308640b63fd80e09b97f6bb531f9f5b6a98dc3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSuperadmin"],
    "0081f8378d3b06372d0c255c4394ad93f173ab978b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadsForMessaging"],
    "0085f9783eb644e45245e14381eeefd4af44a9e3fb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDemoSessions"],
    "008fa5ea867711d50634039bbf9a29670ad8c7b3f0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantUsers"],
    "00c913f219100b63cb187db1970b2cead36b7b9f14",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConversations"],
    "00ce39c726f28eddc3a98d5c4a86ff4102a4ca00f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    "4016ad19d4cb757c79fe4ae0612bfdd40cafb11a22",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrCreateConversation"],
    "403864c797930a7655ffb100e34b187a27e43a8e71",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateDemoAccess"],
    "403dfd806530b0f0596321853a27664384a9a3b0dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["globalSearch"],
    "40453ed08e14be7bca4ce64ed05e30467fedf34f6e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revokeDemoAccess"],
    "409d065115292c0d87f0f9a131a5e357f44054c45a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markAsRead"],
    "40aa629fc7299956233a61975086eb46bd24c299c5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkDemoExpiry"],
    "40c587ee17fbc64f5d026c5c91d415c90a4e4033ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationAsRead"],
    "40cb2d3f0a371190f0196aa0c7a3e092f01fcfe214",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMessages"],
    "60721f3812febe2cfa0c197817caa95eb02cece7ab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrCreateLeadConversation"],
    "70b3f66502d73e905236ee8e0923bcf95dfea7d448",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendMessage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$admin$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/(dashboard)/admin/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/apps/web/app/actions/admin.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/admin.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=apps_web_8c9c7b2f._.js.map