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
"[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0081f8378d3b06372d0c255c4394ad93f173ab978b":"getLeadsForMessaging","008fa5ea867711d50634039bbf9a29670ad8c7b3f0":"getTenantUsers","00c913f219100b63cb187db1970b2cead36b7b9f14":"getConversations","4016ad19d4cb757c79fe4ae0612bfdd40cafb11a22":"getOrCreateConversation","409d065115292c0d87f0f9a131a5e357f44054c45a":"markAsRead","40cb2d3f0a371190f0196aa0c7a3e092f01fcfe214":"getMessages","60721f3812febe2cfa0c197817caa95eb02cece7ab":"getOrCreateLeadConversation","70b3f66502d73e905236ee8e0923bcf95dfea7d448":"sendMessage"},"",""] */ __turbopack_context__.s([
    "getConversations",
    ()=>getConversations,
    "getLeadsForMessaging",
    ()=>getLeadsForMessaging,
    "getMessages",
    ()=>getMessages,
    "getOrCreateConversation",
    ()=>getOrCreateConversation,
    "getOrCreateLeadConversation",
    ()=>getOrCreateLeadConversation,
    "getTenantUsers",
    ()=>getTenantUsers,
    "markAsRead",
    ()=>markAsRead,
    "sendMessage",
    ()=>sendMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getConversations() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    const { data: { user } } = await supabase.auth.getUser();
    if (!tenantId || !user) return [];
    // Obtener conversaciones en las que participa el usuario
    const { data: participations, error: participationError } = await supabase.from("conversation_participants").select(`
            conversation_id,
            last_read_at,
            conversations (
                id,
                tenant_id,
                created_at,
                updated_at,
                lead_id
            )
        `).eq("user_id", user.id);
    if (participationError) {
        console.error("Error fetching conversations:", participationError);
        return [];
    }
    const conversations = [];
    for (const participation of participations || []){
        const conv = participation.conversations;
        if (!conv) continue;
        // Obtener otros participantes
        const { data: participants, error: participantsError } = await supabase.from("conversation_participants").select(`
                user_id,
                joined_at,
                profiles (
                    id,
                    email,
                    full_name,
                    avatar_url
                )
            `).eq("conversation_id", conv.id).neq("user_id", user.id);
        // Obtener último mensaje
        const { data: lastMessage } = await supabase.from("messages").select(`
                id,
                conversation_id,
                sender_id,
                content,
                created_at,
                profiles:sender_id (
                    id,
                    email,
                    full_name,
                    avatar_url
                )
            `).eq("conversation_id", conv.id).order("created_at", {
            ascending: false
        }).limit(1).single();
        // Calcular mensajes no leídos
        const { count: unreadCount } = await supabase.from("messages").select("*", {
            count: 'exact',
            head: true
        }).eq("conversation_id", conv.id).neq("sender_id", user.id).gt("created_at", participation.last_read_at);
        const otherUser = participants?.[0]?.profiles;
        // Fetch lead details if it's a client conversation
        let leadData = null;
        if (conv.lead_id) {
            const { data: lead } = await supabase.from("leads").select("id, name, email, phone, status").eq("id", conv.lead_id).single();
            leadData = lead;
        }
        conversations.push({
            ...conv,
            last_message: lastMessage ? {
                ...lastMessage,
                sender: lastMessage.profiles
            } : undefined,
            unread_count: unreadCount || 0,
            other_user: otherUser,
            lead: leadData
        });
    }
    // Ordenar por última actividad
    conversations.sort((a, b)=>{
        const aTime = a.last_message?.created_at || a.updated_at;
        const bTime = b.last_message?.created_at || b.updated_at;
        return new Date(bTime).getTime() - new Date(aTime).getTime();
    });
    return conversations;
}
async function getMessages(conversationId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];
    // Verificar que el usuario es participante de la conversación
    const { data: participation } = await supabase.from("conversation_participants").select("conversation_id").eq("conversation_id", conversationId).eq("user_id", user.id).single();
    if (!participation) {
        console.error("User is not a participant of this conversation");
        return [];
    }
    const { data, error } = await supabase.from("messages").select(`
            id,
            conversation_id,
            sender_id,
            content,
            created_at,
            profiles:sender_id (
                id,
                email,
                full_name,
                avatar_url
            )
        `).eq("conversation_id", conversationId).order("created_at", {
        ascending: true
    });
    if (error) {
        console.error("Error fetching messages:", error);
        return [];
    }
    return data.map((msg)=>({
            ...msg,
            sender: msg.profiles
        }));
}
async function sendMessage(conversationId, content, revalidate = true) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || !content.trim()) return null;
    const { data, error } = await supabase.from("messages").insert({
        conversation_id: conversationId,
        sender_id: user.id,
        content: content.trim()
    }).select().single();
    if (error) {
        console.error("DEBUG: Error sending message:", {
            error,
            conversationId,
            userId: user.id
        });
        throw new Error(error.message);
    }
    if (revalidate) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/mensajes");
    }
    return data;
}
async function markAsRead(conversationId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase.from("conversation_participants").update({
        last_read_at: new Date().toISOString()
    }).eq("conversation_id", conversationId).eq("user_id", user.id);
    if (error) {
        console.error("Error marking as read:", error);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/mensajes");
}
async function getOrCreateConversation(otherUserId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    const { data: { user } } = await supabase.auth.getUser();
    if (!tenantId || !user) return null;
    // Buscar conversación existente entre estos dos usuarios
    const { data: existingParticipations } = await supabase.from("conversation_participants").select("conversation_id").eq("user_id", user.id);
    if (existingParticipations) {
        for (const participation of existingParticipations){
            const { data: otherParticipation } = await supabase.from("conversation_participants").select("user_id").eq("conversation_id", participation.conversation_id).eq("user_id", otherUserId).single();
            if (otherParticipation) {
                return participation.conversation_id;
            }
        }
    }
    // Crear nueva conversación
    const { data: newConversation, error: convError } = await supabase.from("conversations").insert({
        tenant_id: tenantId
    }).select().single();
    if (convError) {
        console.error("Error creating conversation:", convError);
        return null;
    }
    // Agregar participantes
    const { error: participantsError } = await supabase.from("conversation_participants").insert([
        {
            conversation_id: newConversation.id,
            user_id: user.id
        },
        {
            conversation_id: newConversation.id,
            user_id: otherUserId
        }
    ]);
    if (participantsError) {
        console.error("Error adding participants:", participantsError);
        return null;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/mensajes");
    return newConversation.id;
}
async function getTenantUsers() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    const { data: { user } } = await supabase.auth.getUser();
    if (!tenantId || !user) return [];
    const { data, error } = await supabase.from("profiles").select("id, email, full_name, avatar_url").eq("tenant_id", tenantId).neq("id", user.id) // Excluir al usuario actual
    ;
    if (error) {
        console.error("Error fetching tenant users:", error);
        return [];
    }
    return data;
}
async function getLeadsForMessaging() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from("leads").select("id, name, email, phone, status").eq("tenant_id", tenantId).order("name");
    if (error) {
        console.error("Error fetching leads for messaging:", error);
        return [];
    }
    return data;
}
async function getOrCreateLeadConversation(leadId, revalidate = true) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    const { data: { user } } = await supabase.auth.getUser();
    if (!tenantId || !user) return null;
    // Buscar conversación existente para este Lead
    const { data: existingConversation } = await supabase.from("conversations").select("id").eq("lead_id", leadId).single();
    if (existingConversation) {
        // Asegurarse de que el usuario actual es participante
        const { data: isParticipant } = await supabase.from("conversation_participants").select("conversation_id").eq("conversation_id", existingConversation.id).eq("user_id", user.id).single();
        if (!isParticipant) {
            console.log(`DEBUG: Adding agent ${user.id} to lead conversation ${existingConversation.id}`);
            await supabase.from("conversation_participants").insert({
                conversation_id: existingConversation.id,
                user_id: user.id
            });
        }
        return existingConversation.id;
    }
    // Crear nueva conversación vinculada al Lead
    const { data: newConversation, error: convError } = await supabase.from("conversations").insert({
        tenant_id: tenantId,
        lead_id: leadId
    }).select().single();
    if (convError) {
        console.error("Error creating lead conversation:", convError);
        return null;
    }
    // Agregar al usuario actual como participante
    const { error: participantError } = await supabase.from("conversation_participants").insert({
        conversation_id: newConversation.id,
        user_id: user.id
    });
    if (participantError) {
        console.error("Error adding participant to lead conversation:", participantError);
        return null;
    }
    if (revalidate) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/mensajes");
    }
    return newConversation.id;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getConversations,
    getMessages,
    sendMessage,
    markAsRead,
    getOrCreateConversation,
    getTenantUsers,
    getLeadsForMessaging,
    getOrCreateLeadConversation
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getConversations, "00c913f219100b63cb187db1970b2cead36b7b9f14", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMessages, "40cb2d3f0a371190f0196aa0c7a3e092f01fcfe214", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendMessage, "70b3f66502d73e905236ee8e0923bcf95dfea7d448", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markAsRead, "409d065115292c0d87f0f9a131a5e357f44054c45a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrCreateConversation, "4016ad19d4cb757c79fe4ae0612bfdd40cafb11a22", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTenantUsers, "008fa5ea867711d50634039bbf9a29670ad8c7b3f0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadsForMessaging, "0081f8378d3b06372d0c255c4394ad93f173ab978b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrCreateLeadConversation, "60721f3812febe2cfa0c197817caa95eb02cece7ab", null);
}),
"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00595a1441ca18875a8647cad1554eedd8e6e92fe2":"processPendingReminders","00ce39c726f28eddc3a98d5c4a86ff4102a4ca00f8":"getNotifications","40c587ee17fbc64f5d026c5c91d415c90a4e4033ba":"markNotificationAsRead"},"",""] */ __turbopack_context__.s([
    "getNotifications",
    ()=>getNotifications,
    "markNotificationAsRead",
    ()=>markNotificationAsRead,
    "processPendingReminders",
    ()=>processPendingReminders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function processPendingReminders() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return;
    await processTaskReminders(supabase, tenantId);
    await processVisitReminders(supabase, tenantId);
}
async function processTaskReminders(supabase, tenantId) {
    const now = new Date();
    // Fetch tasks where reminder is needed and not sent
    const { data: tasks, error } = await supabase.from('tasks').select('*').eq('tenant_id', tenantId).eq('agent_reminder_sent', false).eq('status', 'pending').not('due_date', 'is', null);
    if (error || !tasks) return;
    for (const task of tasks){
        const dueDate = new Date(task.due_date);
        const reminderHours = task.reminder_hours || 2;
        const reminderTime = new Date(dueDate.getTime() - reminderHours * 60 * 60 * 1000);
        if (now >= reminderTime) {
            // Trigger Agent Notifications
            const channels = task.reminder_channels || [
                'in-app'
            ];
            if (channels.includes('in-app')) {
                await createNotification(supabase, tenantId, task.assigned_to, {
                    title: 'Recordatorio de Tarea',
                    message: `Tienes la tarea "${task.title}" programada para las ${dueDate.toLocaleTimeString()}`,
                    type: 'task_reminder',
                    related_id: task.id
                });
            }
            // Placeholder for Agent WhatsApp/Email
            if (channels.includes('whatsapp') || channels.includes('email')) {
                // In a real scenario, we would fetch the agent's contact info and send via an external API
                // For now, we simulate this by adding an internal record or system log
                console.log(`[REMINDER] Sending task reminder for ${task.title} to agent ${task.assigned_to} via ${channels.filter((c)=>c !== 'in-app').join(', ')}`);
            }
            // Mark as sent
            await supabase.from('tasks').update({
                agent_reminder_sent: true
            }).eq('id', task.id);
        }
    }
}
async function processVisitReminders(supabase, tenantId) {
    const now = new Date();
    const { data: visits, error } = await supabase.from('visits').select(`
            *,
            lead:leads(id, name, email, phone),
            property:properties(title)
        `).eq('tenant_id', tenantId).eq('status', 'scheduled');
    if (error || !visits) return;
    for (const visit of visits){
        const scheduledAt = new Date(visit.scheduled_at);
        const reminderHours = visit.reminder_hours || 2;
        const reminderTime = new Date(scheduledAt.getTime() - reminderHours * 60 * 60 * 1000);
        if (now >= reminderTime) {
            // 1. Agent Notification
            if (!visit.agent_reminder_sent) {
                const agentChannels = visit.agent_reminder_channels || [
                    'in-app'
                ];
                if (agentChannels.includes('in-app')) {
                    await createNotification(supabase, tenantId, visit.agent_id, {
                        title: 'Recordatorio de Visita',
                        message: `Tienes una visita programada con ${visit.lead.name} para la propiedad "${visit.property.title}" a las ${scheduledAt.toLocaleTimeString()}`,
                        type: 'visit_reminder',
                        related_id: visit.id
                    });
                }
                if (agentChannels.includes('whatsapp') || agentChannels.includes('email')) {
                    console.log(`[REMINDER] Sending visit reminder for ${visit.property.title} to agent ${visit.agent_id} via ${agentChannels.filter((c)=>c !== 'in-app').join(', ')}`);
                }
                await supabase.from('visits').update({
                    agent_reminder_sent: true
                }).eq('id', visit.id);
            }
            // 2. Client Notification
            if (!visit.client_reminder_sent) {
                const clientChannels = visit.client_reminder_channels || [];
                if (clientChannels.length > 0) {
                    const message = `Hola ${visit.lead.name}, te recordamos tu visita programada para la propiedad "${visit.property.title}" hoy a las ${scheduledAt.toLocaleTimeString()}. ¡Te esperamos!`;
                    // Send via messaging system (simulates WhatsApp/Email via conversation)
                    const conversationId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrCreateLeadConversation"])(visit.lead.id, false);
                    if (conversationId) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendMessage"])(conversationId, message, false);
                    }
                }
                await supabase.from('visits').update({
                    client_reminder_sent: true
                }).eq('id', visit.id);
            }
        }
    }
}
async function createNotification(supabase, tenantId, userId, data) {
    const { error } = await supabase.from('notifications').insert({
        tenant_id: tenantId,
        user_id: userId,
        ...data
    });
    if (error) console.error('Error creating notification:', error);
}
async function getNotifications() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from('notifications').select('*').eq('tenant_id', tenantId).order('created_at', {
        ascending: false
    }).limit(10);
    if (error) {
        console.error('Error fetching notifications:', error);
        return [];
    }
    return data;
}
async function markNotificationAsRead(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { error } = await supabase.from('notifications').update({
        read: true
    }).eq('id', id);
    if (error) {
        console.error('Error marking notification as read:', error);
        return {
            success: false
        };
    }
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    processPendingReminders,
    getNotifications,
    markNotificationAsRead
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(processPendingReminders, "00595a1441ca18875a8647cad1554eedd8e6e92fe2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNotifications, "00ce39c726f28eddc3a98d5c4a86ff4102a4ca00f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markNotificationAsRead, "40c587ee17fbc64f5d026c5c91d415c90a4e4033ba", null);
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
    const propertyMedia = property.property_media || [];
    // Simulate instruction influence
    const isProfessional = instructions?.toLowerCase().includes("profesional");
    const isCreative = instructions?.toLowerCase().includes("creativo") || instructions?.toLowerCase().includes("humor");
    const prefix = isProfessional ? "[PRO] " : isCreative ? "✨ " : "";
    const toneSuffix = isProfessional ? " (Presentado con máxima elegancia)" : isCreative ? " (¡Te va a encantar!)" : "";
    const styles = [
        {
            name: "Cinematográfico",
            prefix: "🎬 [CINEMATIC] ",
            suffix: " (Visualmente impactante)",
            structure: "narrative-slow"
        },
        {
            name: "Dinámico",
            prefix: "⚡ [FAST] ",
            suffix: " (Ritmo frenético y viral)",
            structure: "hook-fast-cuts"
        },
        {
            name: "Tour Guiado",
            prefix: "🏠 [TOUR] ",
            suffix: " (Enfoque en detalles y ambientes)",
            structure: "room-by-room"
        }
    ];
    const currentStyle = styles[variation % styles.length];
    const finalPrefix = `${currentStyle.prefix}${prefix}`;
    const finalSuffix = `${toneSuffix}${currentStyle.suffix}`;
    // Diverse scene structures based on style
    let finalScenes = [];
    if (currentStyle.structure === 'hook-fast-cuts') {
        finalScenes = [
            {
                duration: 45,
                visual: "Varios planos rápidos de fachada y jardín",
                text: `${finalPrefix}¿Estás listo para conocer tu próximo hogar? 🔥${finalSuffix}`
            },
            {
                duration: 30,
                visual: "Zoom rápido a zona central",
                text: `${finalPrefix}Mira lo que es esta amplitud... ¡increíble!${finalSuffix}`
            },
            {
                duration: 45,
                visual: "Corte rápido a cocina/comedor",
                text: `${finalPrefix}Diseño moderno que enamora a primera vista.${finalSuffix}`
            },
            {
                duration: 30,
                visual: "Detalle de dormitorio principal",
                text: `${finalPrefix}El confort que te mereces.${finalSuffix}`
            },
            {
                duration: 30,
                visual: "Piscina o amenity estrella",
                text: `${finalPrefix}El rincón favorito de todos. ✨${finalSuffix}`
            },
            {
                duration: 45,
                visual: "Plano final con contacto",
                text: `${finalPrefix}WhatsApp en el link de la bio. 📲${finalSuffix}`
            }
        ];
    } else if (currentStyle.structure === 'room-by-room') {
        finalScenes = [
            {
                duration: 90,
                visual: "Ingreso formal a la propiedad",
                text: `${finalPrefix}Bienvenidos a un recorrido exclusivo por ${propertyTitle}.${finalSuffix}`
            },
            {
                duration: 60,
                visual: "Sala de estar principal",
                text: `${finalPrefix}Un living luminoso ideal para recibir amigos.${finalSuffix}`
            },
            {
                duration: 60,
                visual: "Área de comedor y cocina integrada",
                text: `${finalPrefix}Espacios integrados con materiales de primera calidad.${finalSuffix}`
            },
            {
                duration: 90,
                visual: "Dormitorios principales y balcones",
                text: `${finalPrefix}Zonas de descanso con vistas inmejorables.${finalSuffix}`
            },
            {
                duration: 60,
                visual: "Jardín o patio",
                text: `${finalPrefix}Un espacio verde para disfrutar en familia.${finalSuffix}`
            }
        ];
    } else {
        // narrative-slow (Default)
        finalScenes = [
            {
                duration: 60,
                visual: "Toma de drone entrando a la propiedad",
                text: `${finalPrefix}Descubre la elegancia en cada rincón de ${propertyTitle}. 🏠${finalSuffix}`
            },
            {
                duration: 90,
                visual: "Primer plano de la sala principal",
                text: `${finalPrefix}Donde el diseño encuentra su propósito.${finalSuffix}`
            },
            {
                duration: 60,
                visual: "Detalle de acabados en la cocina",
                text: `${finalPrefix}La sofisticación que siempre buscaste.${finalSuffix}`
            },
            {
                duration: 90,
                visual: "Vista panorámica desde la terraza",
                text: `${finalPrefix}Vistas que inspiran una nueva vida.${finalSuffix}`
            },
            {
                duration: 60,
                visual: "Plano final con contacto",
                text: `${finalPrefix}Tu nueva etapa comienza aquí. Contáctanos. 📞${finalSuffix}`
            }
        ];
    }
    const scripts = {
        reel: {
            title: `${currentStyle.name} Instagram Reel`,
            scenes: finalScenes,
            hook: `${finalPrefix}${isProfessional ? "La excelencia hecha hogar" : "No vas a creer que esta casa existe"}${finalSuffix}`,
            hashtags: "#Inmobiliaria #Lujo #RealEstate #Inversion #PropiedadExclusiva",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        tiktok: {
            title: `${currentStyle.name} TikTok Style`,
            scenes: finalScenes,
            hook: `${finalPrefix}${isCreative ? "POV: Te acabas de mudar a la mejor casa de la zona" : "3 Razones para vivir aquí"}${finalSuffix}`,
            hashtags: "#TikTokRealEstate #Propiedades #HomeTour #ModernHome",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        post: {
            title: `${currentStyle.name} Social Post`,
            content: `${finalPrefix}Te presentamos ${propertyTitle}. Una propiedad única que redefine el concepto de hogar.${finalSuffix}\n\nCon un estilo ${currentStyle.name.toLowerCase()}, cada rincón está pensado para ofrecerte el máximo confort y elegancia.`,
            hook: `${finalPrefix}¡Oportunidad única en la zona! 🔑${finalSuffix}`,
            hashtags: "#VentaPropiedades #RealEstateArgentina #Inmuebles #NuevoHogar",
            scenes: [
                {
                    duration: 0,
                    visual: "Carrusel de fotos HDR",
                    text: "Post estático multimagen"
                }
            ]
        }
    };
    const script = scripts[type];
    // Use external media if provided, otherwise property media
    const displayMedia = externalMediaUrls && externalMediaUrls.length > 0 ? externalMediaUrls : propertyMedia.map((m)=>m.url);
    return {
        success: true,
        script,
        suggestedImages: displayMedia.slice(0, 5),
        productionMetadata: {
            propertyId,
            type,
            variation,
            avatarId,
            style: currentStyle.name,
            scenes: script.scenes.map((s, idx)=>({
                    ...s,
                    imageUrl: displayMedia[idx % displayMedia.length] || "https://images.unsplash.com/photo-1564013795939-6639b4eead26?auto=format&fit=crop&w=800&q=80"
                })),
            audioUrl: script.audioUrl
        }
    };
}
async function generateAVContent(metadata) {
    console.log("Iniciando síntesis de video/audio con IA:", metadata);
    // Simular proceso de generación pesada (HeyGen/Runway style)
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    return {
        success: true,
        videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
        thumbnailUrl: metadata.scenes[0]?.imageUrl,
        duration: metadata.scenes.reduce((acc, s)=>acc + s.duration, 0) / 30,
        shareLink: `https://inmocms.app/share/video_${Math.random().toString(36).substr(2, 9)}`
    };
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
"[project]/apps/web/.next-internal/server/app/(dashboard)/marketing/ai-studio/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/marketing-ai.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
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
}),
"[project]/apps/web/.next-internal/server/app/(dashboard)/marketing/ai-studio/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/marketing-ai.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0058814481d565d1755417476327d2f49abc2dac21",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "007362e7d9223884a8e91d8aa5938fa6042f8359a1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAudioLibrary"],
    "009bd00912ff67b81a7559d44ba516e9a82b102dd4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProperties"],
    "00ce39c726f28eddc3a98d5c4a86ff4102a4ca00f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    "00ece3adba52cd7e61c91ca8cc15be71a2113531c0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSocialAccounts"],
    "403dfd806530b0f0596321853a27664384a9a3b0dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["globalSearch"],
    "404b61523b32e0015867adb32951fcdfcaa08071ed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateAVContent"],
    "40a55c0e1c87a7e39ed0a37cb4f1e9e3aaa99890f1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectSocialAccount"],
    "40b014b2e0df5628462420ae60f2c481eddad3c37a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disconnectSocialAccount"],
    "40c587ee17fbc64f5d026c5c91d415c90a4e4033ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationAsRead"],
    "600db276fde061e80f8209b12712a4b69641320b53",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publishToSocialMedia"],
    "7e325394100086298fdcf7181a4091200cbba9d1e8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMarketingScript"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$marketing$2f$ai$2d$studio$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/(dashboard)/marketing/ai-studio/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/apps/web/app/actions/marketing-ai.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/marketing-ai.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=apps_web_414b4e3f._.js.map