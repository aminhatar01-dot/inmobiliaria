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
"[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0094ea1ea62e938bc2239497f3aaa2841424d15bbb":"getSharedProperties","009bd00912ff67b81a7559d44ba516e9a82b102dd4":"getProperties","00d3e6c351e1eb708e1f7c3618afb61eba6bbc9206":"getAllPublicProperties","4087fc5ce41a4f193d6ed8e9afcffc9d4f7612ca2e":"deleteProperty","40ef31a5d83ddd601630b6674d149be801d3eb9b7f":"getPropertyById","605856fa8af109200234296f2489610e86b631be9b":"createProperty","6062d1c535458a60f61e7224dace1c74c7fc469a43":"togglePropertySharing","709f49f45058a476845a19c861e91599e94cf0aa46":"updateProperty"},"",""] */ __turbopack_context__.s([
    "createProperty",
    ()=>createProperty,
    "deleteProperty",
    ()=>deleteProperty,
    "getAllPublicProperties",
    ()=>getAllPublicProperties,
    "getProperties",
    ()=>getProperties,
    "getPropertyById",
    ()=>getPropertyById,
    "getSharedProperties",
    ()=>getSharedProperties,
    "togglePropertySharing",
    ()=>togglePropertySharing,
    "updateProperty",
    ()=>updateProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getProperties() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from("properties").select(`
            *,
            property_media (*)
        `).eq("tenant_id", tenantId).order("created_at", {
        ascending: false
    });
    if (error) {
        console.error("Error fetching properties:", error);
        return [];
    }
    return data;
}
async function getPropertyById(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return null;
    const { data, error } = await supabase.from("properties").select(`
            *,
            property_media (*)
        `).eq("id", id).eq("tenant_id", tenantId).single();
    if (error) {
        console.error(`Error fetching property ${id}:`, error);
        return null;
    }
    return data;
}
async function createProperty(formData, images = []) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized or no tenant assigned");
    // Remove undefined values
    const cleanData = Object.fromEntries(Object.entries(formData).filter(([_, v])=>v !== undefined && v !== ""));
    const { data: property, error } = await supabase.from("properties").insert([
        {
            ...cleanData,
            tenant_id: tenantId,
            status: cleanData.status || "available",
            is_shared: cleanData.is_shared !== undefined ? cleanData.is_shared : true
        }
    ]).select().single();
    if (error) {
        console.error("Error creating property:", error);
        throw new Error(error.message);
    }
    // Insert Images
    if (images.length > 0 && property) {
        const mediaInserts = images.map((url, index)=>({
                property_id: property.id,
                tenant_id: tenantId,
                url: url,
                type: 'image',
                order: index
            }));
        const { error: mediaError } = await supabase.from('property_media').insert(mediaInserts);
        if (mediaError) {
            console.error("Error saving media:", mediaError);
            throw new Error(`Propiedad creada pero falló subir imágenes: ${mediaError.message}`);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/propiedades");
    return property;
}
async function updateProperty(id, formData, images) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    // Remove undefined values
    const cleanData = Object.fromEntries(Object.entries(formData).filter(([_, v])=>v !== undefined && v !== ""));
    const { data: property, error } = await supabase.from("properties").update(cleanData).eq("id", id).eq("tenant_id", tenantId).select().single();
    if (error) {
        console.error(`Error updating property ${id}:`, error);
        throw new Error(error.message);
    }
    // Sync Images if provided
    if (images && property) {
        // First delete old media
        await supabase.from('property_media').delete().eq('property_id', id).eq('tenant_id', tenantId);
        // Insert new media list
        if (images.length > 0) {
            const mediaInserts = images.map((url, index)=>({
                    property_id: id,
                    tenant_id: tenantId,
                    url: url,
                    type: 'image',
                    order: index
                }));
            const { error: mediaError } = await supabase.from('property_media').insert(mediaInserts);
            if (mediaError) {
                console.error("Error updating media:", mediaError);
                throw new Error(`Propiedad actualizada pero falló subir imágenes: ${mediaError.message}`);
            }
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/propiedades");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/propiedades/${id}`);
    return property;
}
async function deleteProperty(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const { error } = await supabase.from("properties").delete().eq("id", id).eq("tenant_id", tenantId);
    if (error) {
        console.error(`Error deleting property ${id}:`, error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/propiedades");
}
async function getSharedProperties() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from("properties").select(`
            *,
            property_media (*)
        `).eq("is_shared", true).order("created_at", {
        ascending: false
    });
    if (error) {
        console.error("Error fetching shared properties:", error);
        return [];
    }
    return data;
}
async function togglePropertySharing(id, isShared) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const { error } = await supabase.from("properties").update({
        is_shared: isShared
    }).eq("id", id).eq("tenant_id", tenantId);
    if (error) {
        console.error(`Error toggling sharing for property ${id}:`, error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/propiedades");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/propiedades/compartidas");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/propiedades/${id}`);
}
async function getAllPublicProperties() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Public properties are those marked as available
    const { data, error } = await supabase.from("properties").select(`
            *,
            property_media (*),
            tenant:tenants (
                name,
                slug
            )
        `).eq("status", "available").order("created_at", {
        ascending: false
    });
    if (error) {
        console.error("Error fetching all public properties:", error);
        return [];
    }
    return data;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty,
    getSharedProperties,
    togglePropertySharing,
    getAllPublicProperties
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProperties, "009bd00912ff67b81a7559d44ba516e9a82b102dd4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPropertyById, "40ef31a5d83ddd601630b6674d149be801d3eb9b7f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProperty, "605856fa8af109200234296f2489610e86b631be9b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProperty, "709f49f45058a476845a19c861e91599e94cf0aa46", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProperty, "4087fc5ce41a4f193d6ed8e9afcffc9d4f7612ca2e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSharedProperties, "0094ea1ea62e938bc2239497f3aaa2841424d15bbb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(togglePropertySharing, "6062d1c535458a60f61e7224dace1c74c7fc469a43", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllPublicProperties, "00d3e6c351e1eb708e1f7c3618afb61eba6bbc9206", null);
}),
"[project]/apps/web/app/actions/marketing-ai.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"007362e7d9223884a8e91d8aa5938fa6042f8359a1":"getAudioLibrary","00ece3adba52cd7e61c91ca8cc15be71a2113531c0":"getSocialAccounts","404b61523b32e0015867adb32951fcdfcaa08071ed":"generateAVContent","40a55c0e1c87a7e39ed0a37cb4f1e9e3aaa99890f1":"connectSocialAccount","40b014b2e0df5628462420ae60f2c481eddad3c37a":"disconnectSocialAccount","600db276fde061e80f8209b12712a4b69641320b53":"publishToSocialMedia","60b548ac346aafe35bb9798ab2607c38fb36a3c858":"enhancePropertyPhoto","7e325394100086298fdcf7181a4091200cbba9d1e8":"generateMarketingScript"},"",""] */ __turbopack_context__.s([
    "connectSocialAccount",
    ()=>connectSocialAccount,
    "disconnectSocialAccount",
    ()=>disconnectSocialAccount,
    "enhancePropertyPhoto",
    ()=>enhancePropertyPhoto,
    "generateAVContent",
    ()=>generateAVContent,
    "generateMarketingScript",
    ()=>generateMarketingScript,
    "getAudioLibrary",
    ()=>getAudioLibrary,
    "getSocialAccounts",
    ()=>getSocialAccounts,
    "publishToSocialMedia",
    ()=>publishToSocialMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function generateMarketingScript(propertyId, type, instructions, variation = 0, avatarId, externalMediaUrls) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    // Fetch property details to provide context to the AI
    const { data: property, error } = await supabase.from("properties").select("*, property_media(*)").eq("id", propertyId).eq("tenant_id", tenantId).single();
    if (error || !property) throw new Error("Property not found");
    // In a real implementation, we would call an LLM (OpenAI/Anthropic) here.
    // For now, we simulate a professional, non-synthetic response.
    const propertyTitle = property.title || "Propiedad Exclusiva";
    const price = property.price ? `${property.currency} ${property.price.toLocaleString()}` : "Consultar precio";
    const description = property.description || "Propiedad en excelente estado.";
    // Merge external (Agent) media with the property's actual media
    const propertyMediaUrls = property.property_media?.map((m)=>m.url) || [];
    const displayMedia = externalMediaUrls && externalMediaUrls.length > 0 ? [
        ...externalMediaUrls,
        ...propertyMediaUrls
    ] : propertyMediaUrls;
    // Base Audio selection based on style
    const audioLibraries = {
        'Dinámico': "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        'Elegante': "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        'Informativo': "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    };
    const openAiKey = process.env.OPENAI_API_KEY;
    try {
        if (!openAiKey) {
            console.warn("OPENAI_API_KEY no detectada. Usando fallback...");
            throw new Error("Missing OpenAI Key");
        }
        const agentContext = avatarId ? `\nEl usuario ha seleccionado un Avatar de Inteligencia Artificial (ID: ${avatarId}) para narrar el video. El guión debe escribirse EN PRIMERA PERSONA como el agente inmobiliario presentando el hogar.` : `\nNo hay avatar narrador activo. El video es puramente visual con voz en off.`;
        const externalMediaContext = externalMediaUrls && externalMediaUrls.length > 0 ? `\nEl agente ha subido sus PROPIAS FOTOS/VIDEOS personales. Asegúrate de mencionarse a sí mismo en la primera o última escena como el asesor de confianza.` : ``;
        const systemPrompt = `Eres un experto en marketing inmobiliario mundial y guionista de videos cortos virales.
Debes devolver UNICAMENTE un objeto JSON con la siguiente estructura exacta:
{
  "title": "Un título corto para uso interno",
  "hook": "Leyenda de gancho muy poderosa (Max 15 palabras)",
  "content": "Descripción completa para el post (Instagram/TikTok), incluyendo emojis.",
  "hashtags": "3 a 5 hashtags optimizados separados por espacio. ej: #Inmuebles #Luxury",
  "style": "Estilo del video ej: 'Dinámico', 'Elegante', 'Informativo'",
  "scenes": [
    {
      "duration": 45, // Duracion sugerida en frames (e.g. 30, 45, 60, 90)
      "text": "Texto breve (Max 8 palabras) para mostrar en pantalla como overlay de esta escena de la propiedad",
      "visual": "Descripción orientativa visual para esta escena"
    }
  ]
}

REGLAS ESTRICTAS:
- Formato sugerido para ${type} (reel = 9:16 vertical, tiktok = viral rapido, post = formal).
- El JSON debe contener entre 4 y 6 'scenes'.
- Considera el parámetro iterativo 'variation': ${variation}. Para valores mayores, haz un guion MÁS arriesgado y completamente diferente a enfoques anteriores.${agentContext}${externalMediaContext}
- Instrucciones directas del usuario: "${instructions || 'Ninguna particular'}".
`;
        const userContext = `Propiedad: ${propertyTitle}\nPrecio: ${price}\nDescripción Central: ${description}`;
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${openAiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o",
                response_format: {
                    type: "json_object"
                },
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: userContext
                    }
                ],
                temperature: 0.7 + variation * 0.1 // Increase randomness slightly per variation
            })
        });
        if (!response.ok) {
            const errBody = await response.text();
            throw new Error(`OpenAI API Error: ${errBody}`);
        }
        const data = await response.json();
        const aiMessage = data.choices[0].message.content;
        const parsedJson = JSON.parse(aiMessage);
        const styleName = parsedJson.style || "Elegante";
        const audioUrl = audioLibraries[styleName] || audioLibraries['Dinámico'];
        return {
            success: true,
            script: {
                title: parsedJson.title,
                hook: parsedJson.hook,
                content: parsedJson.content,
                hashtags: parsedJson.hashtags,
                scenes: parsedJson.scenes
            },
            suggestedImages: displayMedia.slice(0, 5),
            productionMetadata: {
                propertyId,
                type,
                variation,
                avatarId,
                style: styleName,
                scenes: parsedJson.scenes.map((s, idx)=>({
                        duration: s.duration || 60,
                        text: s.text,
                        visual: s.visual,
                        // Use sequentially cycling media combining agent uploads and property photos
                        imageUrl: displayMedia[idx % (displayMedia.length || 1)] || "https://images.unsplash.com/photo-1564013795939-6639b4eead26?auto=format&fit=crop&w=800&q=80"
                    })),
                audioUrl: audioUrl
            }
        };
    } catch (apiError) {
        console.error("Fallo al contactar OpenAI, retornando fallback simulado:", apiError);
        // MOCK FALLBACK (Only called if API fails or lacks key)
        const styles = [
            {
                name: "Cinematográfico"
            },
            {
                name: "Dinámico"
            }
        ];
        const currentStyleName = styles[variation % styles.length].name;
        return {
            success: true,
            script: {
                title: `${currentStyleName} (Fallback)`,
                hook: "¡Descubre tu nuevo hogar hoy! 🔥",
                content: `Te presentamos ${propertyTitle}. Una propiedad increíble.\nPrecio: ${price}`,
                hashtags: "#Inmobiliaria #Lujo #BienesRaices",
                scenes: [
                    {
                        duration: 60,
                        text: "Bienvenido a casa",
                        visual: "Fachada"
                    },
                    {
                        duration: 45,
                        text: "Amplitud y lujo",
                        visual: "Interiores"
                    }
                ]
            },
            suggestedImages: displayMedia.slice(0, 5),
            productionMetadata: {
                propertyId,
                type,
                variation,
                avatarId,
                style: currentStyleName,
                scenes: [
                    {
                        duration: 60,
                        text: "Bienvenido a casa",
                        visual: "Fachada",
                        imageUrl: displayMedia[0] || "https://images.unsplash.com/1"
                    },
                    {
                        duration: 45,
                        text: "Amplitud y lujo",
                        visual: "Interiores",
                        imageUrl: displayMedia[1] || displayMedia[0] || "https://images.unsplash.com/2"
                    }
                ],
                audioUrl: audioLibraries['Dinámico']
            }
        };
    }
}
async function generateAVContent(metadata) {
    console.log("Iniciando síntesis de video/audio con IA:", metadata);
    // We will attempt to use Creatomate for real programmatic video generation.
    // If the API key is missing (or during local dev), we fall back gracefully.
    const creatomateKey = process.env.CREATOMATE_API_KEY;
    try {
        if (!creatomateKey) {
            console.warn("CREATOMATE_API_KEY no detectada. Usando fallback de video...");
            throw new Error("Missing Creatomate API Key");
        }
        // Build Creatomate Composition Elements
        let globalTime = 0;
        const elements = metadata.scenes.map((scene, index)=>{
            const timeInSeconds = scene.duration / 30; // assume 30fps base
            const sceneElements = [
                {
                    "type": "image",
                    "source": scene.imageUrl,
                    "track": 1,
                    "time": globalTime,
                    "duration": timeInSeconds,
                    "animations": [
                        {
                            "time": "start",
                            "duration": timeInSeconds,
                            "type": "scale",
                            "start_scale": "100%",
                            "end_scale": "115%",
                            "easing": "linear"
                        },
                        {
                            "time": "start",
                            "duration": 1,
                            "type": "fade",
                            "start_opacity": "0%",
                            "end_opacity": "100%"
                        }
                    ]
                },
                {
                    "type": "text",
                    "text": scene.text.toUpperCase(),
                    "track": 2,
                    "time": globalTime,
                    "duration": timeInSeconds,
                    "y": "80%",
                    "font_family": "Montserrat",
                    "font_weight": "900",
                    "fill_color": "#ffffff",
                    "shadow_color": "rgba(0,0,0,0.8)",
                    "shadow_blur": "15px",
                    "animations": [
                        {
                            "time": "start",
                            "duration": 0.5,
                            "type": "fade",
                            "start_opacity": "0%",
                            "end_opacity": "100%"
                        },
                        {
                            "time": "end",
                            "duration": 0.5,
                            "type": "fade",
                            "start_opacity": "100%",
                            "end_opacity": "0%"
                        }
                    ]
                }
            ];
            globalTime += timeInSeconds;
            return sceneElements;
        }).flat();
        if (metadata.audioUrl) {
            elements.push({
                "type": "audio",
                "source": metadata.audioUrl,
                "track": 3,
                "time": 0,
                "duration": globalTime
            });
        }
        const payload = {
            "output_format": "mp4",
            "width": metadata.type === 'reel' || metadata.type === 'tiktok' ? 1080 : 1920,
            "height": metadata.type === 'reel' || metadata.type === 'tiktok' ? 1920 : 1080,
            "frame_rate": 30,
            "elements": elements
        };
        const response = await fetch("https://api.creatomate.com/v1/renders", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${creatomateKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                source: payload
            })
        });
        if (!response.ok) {
            const errBody = await response.text();
            throw new Error(`Creatomate API Error: ${errBody}`);
        }
        const renderJob = await response.json();
        // Polling the render status would typically happen via webhooks or client-side polling.
        // For simplicity in a server action, if it's synchronous or fast it might return early,
        // but Creatomate usually returns the job with a `url` that becomes valid once finished.
        return {
            success: true,
            videoUrl: renderJob[0]?.url || "https://vjs.zencdn.net/v/oceans.mp4",
            thumbnailUrl: metadata.scenes[0]?.imageUrl,
            duration: globalTime,
            shareLink: `https://inmocms.app/share/video_${Math.random().toString(36).substr(2, 9)}`,
            jobId: renderJob[0]?.id
        };
    } catch (error) {
        console.error("Fallo al contactar Creatomate, usando video fallback:", error);
        // Simular un tiempo razonable de "renderizado falso" para que la UI se comporte de forma fluida
        await new Promise((resolve)=>setTimeout(resolve, 3500));
        const totalDuration = metadata.scenes.reduce((acc, s)=>acc + (s.duration || 60), 0) / 30;
        return {
            success: true,
            // Al devolver null, el frontend AIVideoPlayer utilizará el componente de Remotion 
            // para renderizar el video en tiempo real en el navegador de forma impecable sin necesitar MP4.
            videoUrl: null,
            thumbnailUrl: metadata.scenes[0]?.imageUrl,
            duration: totalDuration,
            shareLink: `https://inmocms.app/share/video_${Math.random().toString(36).substr(2, 9)}`
        };
    }
}
async function getAudioLibrary() {
    return [
        {
            id: '1',
            title: 'Lujo & Elegancia',
            artist: 'InmoCMS Beats',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            duration: 180
        },
        {
            id: '2',
            title: 'Dinámico & Viral',
            artist: 'Trend Master',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            duration: 120
        },
        {
            id: '3',
            title: 'Relajante & Zen',
            artist: 'Hogar Dulce Hogar',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            duration: 150
        },
        {
            id: '4',
            title: 'Acción Inmobiliaria',
            artist: 'Sales Drive',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
            duration: 140
        }
    ];
}
async function getSocialAccounts() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const { data: accounts } = await supabase.from("social_accounts").select("*").eq("tenant_id", tenantId);
    // Fallback/Mock if table doesn't exist or is empty
    return accounts || [
        {
            id: '1',
            platform: 'instagram',
            username: 'inmocms_demo',
            connected: true
        },
        {
            id: '2',
            platform: 'tiktok',
            username: '',
            connected: false
        },
        {
            id: '3',
            platform: 'linkedin',
            username: 'InmoCMS LinkedIn',
            connected: true
        }
    ];
}
async function connectSocialAccount(platform) {
    // In a real app, this would redirect to OAuth
    // Here we simulate a successful connection
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    return {
        success: true,
        username: `${platform}_user_mock`
    };
}
async function disconnectSocialAccount(platform) {
    await new Promise((resolve)=>setTimeout(resolve, 1000));
    return {
        success: true
    };
}
async function publishToSocialMedia(content, platforms) {
    console.log("Iniciando publicación en redes:", {
        content,
        platforms
    });
    // Simulate connection check
    const accounts = await getSocialAccounts();
    const disconnected = platforms.filter((p)=>!accounts.find((a)=>a.platform === p && a.connected));
    if (disconnected.length > 0) {
        throw new Error(`Debes vincular: ${disconnected.join(", ")} antes de publicar.`);
    }
    // Simulate delay
    await new Promise((resolve)=>setTimeout(resolve, 3000));
    return {
        success: true,
        publishedAt: new Date().toISOString(),
        urls: platforms.map((p)=>`https://${p}.com/reels/mock_id_${Math.random().toString(36).substr(2, 9)}`)
    };
}
async function enhancePropertyPhoto(mediaId, enhancementType) {
    // This would integrate with an AI Image SDK
    return {
        success: true,
        originalUrl: "",
        enhancedUrl: "",
        message: "Imagen procesada con éxito. El realce de " + enhancementType + " ha sido aplicado."
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateMarketingScript,
    generateAVContent,
    getAudioLibrary,
    getSocialAccounts,
    connectSocialAccount,
    disconnectSocialAccount,
    publishToSocialMedia,
    enhancePropertyPhoto
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateMarketingScript, "7e325394100086298fdcf7181a4091200cbba9d1e8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateAVContent, "404b61523b32e0015867adb32951fcdfcaa08071ed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAudioLibrary, "007362e7d9223884a8e91d8aa5938fa6042f8359a1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSocialAccounts, "00ece3adba52cd7e61c91ca8cc15be71a2113531c0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(connectSocialAccount, "40a55c0e1c87a7e39ed0a37cb4f1e9e3aaa99890f1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(disconnectSocialAccount, "40b014b2e0df5628462420ae60f2c481eddad3c37a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(publishToSocialMedia, "600db276fde061e80f8209b12712a4b69641320b53", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(enhancePropertyPhoto, "60b548ac346aafe35bb9798ab2607c38fb36a3c858", null);
}),
"[project]/apps/web/.next-internal/server/app/(dashboard)/marketing/ai-studio/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/apps/web/app/actions/marketing-ai.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/marketing-ai.ts [app-rsc] (ecmascript)");
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
"[project]/apps/web/.next-internal/server/app/(dashboard)/marketing/ai-studio/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/apps/web/app/actions/marketing-ai.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0058814481d565d1755417476327d2f49abc2dac21",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "00595a1441ca18875a8647cad1554eedd8e6e92fe2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processPendingReminders"],
    "007362e7d9223884a8e91d8aa5938fa6042f8359a1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAudioLibrary"],
    "0081f8378d3b06372d0c255c4394ad93f173ab978b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadsForMessaging"],
    "008fa5ea867711d50634039bbf9a29670ad8c7b3f0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantUsers"],
    "009bd00912ff67b81a7559d44ba516e9a82b102dd4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProperties"],
    "00c913f219100b63cb187db1970b2cead36b7b9f14",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConversations"],
    "00ce39c726f28eddc3a98d5c4a86ff4102a4ca00f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    "00ece3adba52cd7e61c91ca8cc15be71a2113531c0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSocialAccounts"],
    "4016ad19d4cb757c79fe4ae0612bfdd40cafb11a22",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrCreateConversation"],
    "403dfd806530b0f0596321853a27664384a9a3b0dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["globalSearch"],
    "404b61523b32e0015867adb32951fcdfcaa08071ed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateAVContent"],
    "409d065115292c0d87f0f9a131a5e357f44054c45a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markAsRead"],
    "40a55c0e1c87a7e39ed0a37cb4f1e9e3aaa99890f1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectSocialAccount"],
    "40b014b2e0df5628462420ae60f2c481eddad3c37a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disconnectSocialAccount"],
    "40c587ee17fbc64f5d026c5c91d415c90a4e4033ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationAsRead"],
    "40cb2d3f0a371190f0196aa0c7a3e092f01fcfe214",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMessages"],
    "600db276fde061e80f8209b12712a4b69641320b53",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publishToSocialMedia"],
    "60721f3812febe2cfa0c197817caa95eb02cece7ab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrCreateLeadConversation"],
    "70b3f66502d73e905236ee8e0923bcf95dfea7d448",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendMessage"],
    "7e325394100086298fdcf7181a4091200cbba9d1e8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMarketingScript"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$marketing$2f$ai$2d$studio$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/(dashboard)/marketing/ai-studio/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/apps/web/app/actions/marketing-ai.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/marketing-ai.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=apps_web_e630dddc._.js.map