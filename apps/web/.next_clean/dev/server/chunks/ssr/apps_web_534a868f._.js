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
"[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0046e968d066f6aac18fbf620a2264b7fdc89ad9ba":"getDashboardStats"},"",""] */ __turbopack_context__.s([
    "getDashboardStats",
    ()=>getDashboardStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getDashboardStats() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) {
        return {
            salesCount: 0,
            rentCount: 0,
            tempRentCount: 0,
            totalProperties: 0,
            leadsCount: 0,
            visitsCount: 0,
            salesVolume: 0,
            funnel: {
                new: 0,
                contacted: 0,
                visit: 0,
                offer: 0,
                closing: 0
            }
        };
    }
    // 1. Inmuebles en venta
    const { count: salesCount } = await supabase.from("properties").select("*", {
        count: 'exact',
        head: true
    }).eq("tenant_id", tenantId).eq("operation_type", "sale").eq("status", "available");
    // 2. Inmuebles en alquiler
    const { count: rentCount } = await supabase.from("properties").select("*", {
        count: 'exact',
        head: true
    }).eq("tenant_id", tenantId).eq("operation_type", "rent").eq("status", "available");
    // 3. Total Inmuebles (Disponibles)
    const { count: totalProperties } = await supabase.from("properties").select("*", {
        count: 'exact',
        head: true
    }).eq("tenant_id", tenantId).neq("status", "archived");
    // 4. Leads del mes (Creados en los últimos 30 días)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const { count: leadsCount } = await supabase.from("leads").select("*", {
        count: 'exact',
        head: true
    }).eq("tenant_id", tenantId).gte("created_at", thirtyDaysAgo.toISOString());
    // 5. Visitas del mes (Tareas tipo 'visit' completadas)
    const { count: visitsCount } = await supabase.from("tasks").select("*", {
        count: 'exact',
        head: true
    }).eq("tenant_id", tenantId).eq("category", "visit").eq("status", "completed").gte("due_date", thirtyDaysAgo.toISOString());
    // 6. Volumen de Ventas (Propiedades vendidas en el último año)
    const { data: soldSales } = await supabase.from("properties").select("price, currency").eq("tenant_id", tenantId).eq("status", "sold").eq("operation_type", "sale");
    const salesVolume = soldSales?.reduce((acc, curr)=>{
        const price = curr.currency === 'ARS' ? curr.price / 1000 : curr.price;
        return acc + price;
    }, 0) || 0;
    // 7. Desglose detallado de inventario
    const { count: tempRentCount } = await supabase.from("properties").select("*", {
        count: 'exact',
        head: true
    }).eq("tenant_id", tenantId).eq("operation_type", "temporary_rent").eq("status", "available");
    // 8. Embudo de Leads (Counts por status)
    const { data: leadStatusCounts } = await supabase.from("leads").select("status").eq("tenant_id", tenantId);
    const funnel = {
        new: leadStatusCounts?.filter((l)=>l.status === 'new').length || 0,
        contacted: leadStatusCounts?.filter((l)=>l.status === 'contacted').length || 0,
        visit: leadStatusCounts?.filter((l)=>l.status === 'visit_scheduled').length || 0,
        offer: leadStatusCounts?.filter((l)=>l.status === 'offer').length || 0,
        closing: leadStatusCounts?.filter((l)=>l.status === 'closing').length || 0
    };
    return {
        salesCount: salesCount || 0,
        rentCount: rentCount || 0,
        tempRentCount: tempRentCount || 0,
        totalProperties: totalProperties || 0,
        leadsCount: leadsCount || 0,
        visitsCount: visitsCount || 0,
        salesVolume: Math.round(salesVolume),
        funnel
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getDashboardStats
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDashboardStats, "0046e968d066f6aac18fbf620a2264b7fdc89ad9ba", null);
}),
"[project]/apps/web/.next-internal/server/app/(dashboard)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$dashboard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)");
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
"[project]/apps/web/.next-internal/server/app/(dashboard)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0046e968d066f6aac18fbf620a2264b7fdc89ad9ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$dashboard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDashboardStats"],
    "0058814481d565d1755417476327d2f49abc2dac21",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "00595a1441ca18875a8647cad1554eedd8e6e92fe2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processPendingReminders"],
    "0081f8378d3b06372d0c255c4394ad93f173ab978b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadsForMessaging"],
    "008fa5ea867711d50634039bbf9a29670ad8c7b3f0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantUsers"],
    "00c913f219100b63cb187db1970b2cead36b7b9f14",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConversations"],
    "00ce39c726f28eddc3a98d5c4a86ff4102a4ca00f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    "4016ad19d4cb757c79fe4ae0612bfdd40cafb11a22",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrCreateConversation"],
    "403dfd806530b0f0596321853a27664384a9a3b0dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["globalSearch"],
    "409d065115292c0d87f0f9a131a5e357f44054c45a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markAsRead"],
    "40c587ee17fbc64f5d026c5c91d415c90a4e4033ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationAsRead"],
    "40cb2d3f0a371190f0196aa0c7a3e092f01fcfe214",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMessages"],
    "60721f3812febe2cfa0c197817caa95eb02cece7ab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrCreateLeadConversation"],
    "70b3f66502d73e905236ee8e0923bcf95dfea7d448",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendMessage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$dashboard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/(dashboard)/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$dashboard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=apps_web_534a868f._.js.map