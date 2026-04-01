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
"[project]/apps/web/app/actions/contracts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"003e4bfbb04e946a5bfa95af1848495434b59053fd":"getContracts","0044167fefd549fb704d2f3091154fb49b9e8228fd":"getTemplates","4002c4efd7fa08515d17b299630c20d97ec44fcae5":"getDocumentsByPropertyId","402773c933ce56ea9ee3415d047829ea6f5f10c583":"uploadCustomTemplate","4032a21162f14ee8cbf8d7ce9c736a32d8db389519":"deleteTemplate","403833d62bb0cde1d61838c4153f87608f8d789293":"importDocument","4053c964ceeca2da91a1efa0d016b021a1338be069":"getContractById","40936af3fb653794567f0ed2cfd2983fcab17eec70":"deleteContract","40a6ac81a673d5927d64b57251842ba3a277dc24e7":"getDocumentsByLeadId","40bdf6132c704b5fbdd2a2c37c2ad1341741363861":"createContract","608a5a652aed27fd9fbd7a483f9f81a0916ccdb63c":"updateContract","7cdff2578f7a6c06f037fa23f313211696b1613708":"generateLegalDocumentAI"},"",""] */ __turbopack_context__.s([
    "createContract",
    ()=>createContract,
    "deleteContract",
    ()=>deleteContract,
    "deleteTemplate",
    ()=>deleteTemplate,
    "generateLegalDocumentAI",
    ()=>generateLegalDocumentAI,
    "getContractById",
    ()=>getContractById,
    "getContracts",
    ()=>getContracts,
    "getDocumentsByLeadId",
    ()=>getDocumentsByLeadId,
    "getDocumentsByPropertyId",
    ()=>getDocumentsByPropertyId,
    "getTemplates",
    ()=>getTemplates,
    "importDocument",
    ()=>importDocument,
    "updateContract",
    ()=>updateContract,
    "uploadCustomTemplate",
    ()=>uploadCustomTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const DEV_TENANT_ID = '00000000-0000-0000-0000-000000000001';
async function getContracts() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from('contracts').select(`
            *,
            property:properties(title, address),
            lead:leads(name, email)
        `).eq('tenant_id', tenantId).order('created_at', {
        ascending: false
    });
    if (error) {
        console.error("Error fetching contracts:", error);
        throw new Error(`Error en la base de datos al obtener contratos: ${error.message}`);
    }
    return data;
}
async function getContractById(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return null;
    const { data, error } = await supabase.from('contracts').select(`
            *,
            property:properties(title, address),
            lead:leads(name, email)
        `).eq('id', id).eq('tenant_id', tenantId).single();
    if (error) {
        console.error(`Error fetching contract by ID ${id}:`, error);
        return null;
    }
    return data;
}
async function createContract(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const title = formData.get('title');
    const type = formData.get('type');
    const propertyId = formData.get('property_id') || null;
    const leadId = formData.get('lead_id') || null;
    const content = formData.get('content');
    const metadata = formData.get('metadata') ? JSON.parse(formData.get('metadata')) : {};
    const safePropertyId = propertyId === "" ? null : propertyId;
    const safeLeadId = leadId === "" ? null : leadId;
    const { data, error } = await supabase.from('contracts').insert({
        tenant_id: tenantId,
        title,
        type,
        property_id: safePropertyId,
        lead_id: safeLeadId,
        content,
        metadata,
        status: 'draft'
    }).select().single();
    if (error) {
        console.error("Critical error creating contract:", error);
        throw new Error(`Error en la base de datos: ${error.message}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/documentos');
}
async function updateContract(id, formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const title = formData.get('title');
    const content = formData.get('content');
    const status = formData.get('status');
    const type = formData.get('type');
    const propertyId = formData.get('property_id') || null;
    const leadId = formData.get('lead_id') || null;
    const metadataString = formData.get('metadata');
    const metadata = metadataString ? JSON.parse(metadataString) : {};
    const safePropertyId = propertyId === "" || propertyId === "null" ? null : propertyId;
    const safeLeadId = leadId === "" || leadId === "null" ? null : leadId;
    const updateData = {
        title,
        content,
        status,
        type: type || undefined,
        property_id: safePropertyId,
        lead_id: safeLeadId,
        metadata,
        updated_at: new Date().toISOString()
    };
    Object.keys(updateData).forEach((key)=>updateData[key] === undefined && delete updateData[key]);
    const { error } = await supabase.from('contracts').update(updateData).eq('id', id).eq('tenant_id', tenantId);
    if (error) {
        console.error(`Critical error updating contract ${id}:`, error);
        throw new Error(`Error en la base de datos: ${error.message}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/documentos');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/documentos/${id}`);
}
async function getTemplates() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from('document_templates').select('*').or(`tenant_id.eq.${tenantId},is_system.eq.true`).order('name', {
        ascending: true
    });
    if (error) {
        console.error("Error fetching templates:", error);
        throw new Error(`Error en la base de datos al obtener plantillas: ${error.message}`);
    }
    return data;
}
async function deleteContract(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const { error } = await supabase.from('contracts').delete().eq('id', id).eq('tenant_id', tenantId);
    if (error) {
        console.error(`Error deleting contract ${id}:`, error);
        throw new Error(`Error en la base de datos al eliminar contrato: ${error.message}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/documentos');
}
async function importDocument(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const name = formData.get('name');
    const content = formData.get('content');
    const type = formData.get('type');
    const mode = formData.get('mode');
    const propertyId = formData.get('property_id') || null;
    const leadId = formData.get('lead_id') || null;
    const metadataString = formData.get('metadata');
    const metadata = metadataString ? JSON.parse(metadataString) : {};
    const updateEntities = formData.get('update_entities') === 'true';
    if (mode === 'template') {
        const { error } = await supabase.from('document_templates').insert({
            tenant_id: tenantId,
            name,
            type,
            content,
            is_system: false
        });
        if (error) throw new Error(`Error al guardar plantilla: ${error.message}`);
    } else {
        const { error } = await supabase.from('contracts').insert({
            tenant_id: tenantId,
            title: name,
            type,
            content,
            status: 'draft',
            property_id: propertyId === "" ? null : propertyId,
            lead_id: leadId === "" ? null : leadId,
            metadata
        });
        if (error) throw new Error(`Error al guardar documento: ${error.message}`);
        if (updateEntities) {
            if (leadId && leadId !== "") {
                const leadUpdates = {};
                if (metadata.partyB_name) leadUpdates.name = metadata.partyB_name;
                if (metadata.partyB_dni) leadUpdates.dni = metadata.partyB_dni;
                if (Object.keys(leadUpdates).length > 0) {
                    await supabase.from('leads').update(leadUpdates).eq('id', leadId).eq('tenant_id', tenantId);
                }
            }
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/documentos');
    if (mode === 'template') (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/documentos/nuevo');
}
async function getDocumentsByPropertyId(propertyId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from('contracts').select(`
            *,
            lead:leads(id, name)
        `).eq('tenant_id', tenantId).eq('property_id', propertyId).order('created_at', {
        ascending: false
    });
    if (error) {
        console.error(`Error fetching docs for property ${propertyId}:`, error);
        return [];
    }
    return data;
}
async function getDocumentsByLeadId(leadId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from('contracts').select(`
            *,
            property:properties(id, title)
        `).eq('tenant_id', tenantId).eq('lead_id', leadId).order('created_at', {
        ascending: false
    });
    if (error) {
        console.error(`Error fetching docs for lead ${leadId}:`, error);
        return [];
    }
    return data;
}
async function deleteTemplate(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const { error } = await supabase.from('document_templates').delete().eq('id', id).eq('tenant_id', tenantId).eq('is_system', false);
    if (error) {
        console.error(`Error deleting template ${id}:`, error);
        throw new Error(`Error en la base de datos al eliminar plantilla: ${error.message}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/documentos');
}
async function uploadCustomTemplate(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const name = formData.get('name');
    const type = formData.get('type');
    const content = formData.get('content');
    const { error } = await supabase.from('document_templates').insert({
        tenant_id: tenantId,
        name,
        type,
        content,
        is_system: false
    });
    if (error) {
        console.error("Error uploading custom template:", error);
        throw new Error(`Error en la base de datos al subir plantilla: ${error.message}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/documentos/nuevo');
}
async function generateLegalDocumentAI(type, propertyId, leadId, additionalInstructions, metadata) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    // Fetch context
    let propertyData = null;
    let leadData = null;
    if (propertyId) {
        const { data } = await supabase.from('properties').select('*').eq('id', propertyId).single();
        propertyData = data;
    }
    if (leadId) {
        const { data } = await supabase.from('leads').select('*').eq('id', leadId).single();
        leadData = data;
    }
    // Simulation of AI Generation based on context and legal regulations
    const propertyTitle = propertyData?.title || "[PROPIEDAD]";
    const propertyAddress = propertyData?.address || "[DIRECCIÓN]";
    const leadName = metadata?.partyB_name || leadData?.name || "[CLIENTE]";
    const leadDni = metadata?.partyB_dni || "[DNI CLIENTE]";
    const ownerName = metadata?.partyA_name || "[NOMBRE PROPIETARIO]";
    const ownerDni = metadata?.partyA_dni || "[DNI PROPIETARIO]";
    const price = propertyData ? `${propertyData.currency} ${propertyData.price.toLocaleString()}` : metadata?.amount || "[PRECIO]";
    const startDate = metadata?.startDate || "[FECHA INICIO]";
    let generatedContent = "";
    if (type === 'reservation') {
        generatedContent = `RESERVA AD REFERENDUM - GENERADA POR IA\n\n` + `En la ciudad de ..............., a los ${new Date().getDate()} días del mes de ............... de ${new Date().getFullYear()}, entre el Sr/Sra. ${ownerName}, DNI ${ownerDni} (en adelante el PROPIETARIO) y el Sr/Sra. ${leadName}, DNI ${leadDni} (en adelante el RESERVANTE), se establece:\n\n` + `PRIMERA: El RESERVANTE hace entrega la suma de ............... en concepto de reserva sobre la propiedad ubicada en ${propertyAddress} (${propertyTitle}).\n\n` + `SEGUNDA: El precio de la operación se fija en ${price}. La presente reserva tendrá vigencia hasta el día ${metadata?.expiryDate || ".........."}.\n\n` + `REGLAMENTACIÓN: Este documento se rige bajo la normativa vigente de corretaje inmobiliario.\n\n` + `${additionalInstructions ? "NOTAS ADICIONALES: " + additionalInstructions : ""}`;
    } else if (type === 'rental') {
        generatedContent = `CONTRATO DE LOCACIÓN DE VIVIENDA - GENERADO POR IA\n\n` + `Entre el Sr/Sra. ${ownerName}, DNI ${ownerDni}, con domicilio en ${metadata?.partyA_address || ".........."} (el LOCADOR) y el Sr/Sra. ${leadName}, DNI ${leadDni}, con domicilio en ${metadata?.partyB_address || ".........."} (el LOCATARIO), se acuerda:\n\n` + `1. OBJETO: El LOCADOR cede en locación al LOCATARIO el inmueble sito en ${propertyAddress}.\n\n` + `2. PLAZO Y PRECIO: El contrato tendrá una duración de 24 meses desde el ${startDate}. El precio mensual será de ${price} ${metadata?.currency || "$"}.\n\n` + `3. REGLAMENTACIÓN: El presente se ajusta a lo establecido en el Código Civil y Comercial de la Nación.\n\n` + `${additionalInstructions ? "AJUSTES: " + additionalInstructions : ""}`;
    } else if (type === 'receipt') {
        generatedContent = `RECIBO DE PAGO - SISTEMA INMOCMS\n\n` + `RECIBÍ del Sr/Sra. ${leadName} la cantidad de ${price} en concepto de ${metadata?.concept || "pago de servicios/alquiler"} por la propiedad en ${propertyAddress}.\n\n` + `FECHA: ${new Date().toLocaleDateString()}\n\n` + `Firma Autorizada: ..............................`;
    } else {
        generatedContent = `DOCUMENTO LEGAL PERSONALIZADO\n\n` + `PARTES: ${ownerName} vs ${leadName}\n` + `INMUEBLE: ${propertyAddress}\n` + `PRECIO ACORDADO: ${price}\n\n` + `CLÁUSULA PRIMERA: Objeto y Partes...\n` + `${additionalInstructions ? "AJUSTES IA: " + additionalInstructions : ""}`;
    }
    return {
        success: true,
        content: generatedContent,
        metadata: {
            generated_at: new Date().toISOString(),
            engine: "InmoCMS AI Legal v1.1 Professional",
            context: {
                propertyId,
                leadId,
                ...metadata
            }
        }
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getContracts,
    getContractById,
    createContract,
    updateContract,
    getTemplates,
    deleteContract,
    importDocument,
    getDocumentsByPropertyId,
    getDocumentsByLeadId,
    deleteTemplate,
    uploadCustomTemplate,
    generateLegalDocumentAI
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getContracts, "003e4bfbb04e946a5bfa95af1848495434b59053fd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getContractById, "4053c964ceeca2da91a1efa0d016b021a1338be069", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createContract, "40bdf6132c704b5fbdd2a2c37c2ad1341741363861", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateContract, "608a5a652aed27fd9fbd7a483f9f81a0916ccdb63c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTemplates, "0044167fefd549fb704d2f3091154fb49b9e8228fd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteContract, "40936af3fb653794567f0ed2cfd2983fcab17eec70", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(importDocument, "403833d62bb0cde1d61838c4153f87608f8d789293", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDocumentsByPropertyId, "4002c4efd7fa08515d17b299630c20d97ec44fcae5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDocumentsByLeadId, "40a6ac81a673d5927d64b57251842ba3a277dc24e7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTemplate, "4032a21162f14ee8cbf8d7ce9c736a32d8db389519", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadCustomTemplate, "402773c933ce56ea9ee3415d047829ea6f5f10c583", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateLegalDocumentAI, "7cdff2578f7a6c06f037fa23f313211696b1613708", null);
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
"[project]/apps/web/app/actions/leads.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0024d9fa4b575391a7aceb51843ea809402550cf12":"getLeads","40146eb080ac5d6e97fd34fdde7e3c47c09bfc15a7":"bulkCreateLeads","40267af3bd0f08c9b96a6dac2461a0f251660b9c8d":"deleteLead","409260f01728e58daaabe24f2517b5d41006e837c4":"getLeadById","409cd6ab7bf7b5271798d29271e68ad7dd55080553":"createLead","60c9edd67b5817293250a1c002477b783c098f35b3":"updateLeadStatus","60cc75357de99adac2c06afefd873339aea7812286":"updateLead"},"",""] */ __turbopack_context__.s([
    "bulkCreateLeads",
    ()=>bulkCreateLeads,
    "createLead",
    ()=>createLead,
    "deleteLead",
    ()=>deleteLead,
    "getLeadById",
    ()=>getLeadById,
    "getLeads",
    ()=>getLeads,
    "updateLead",
    ()=>updateLead,
    "updateLeadStatus",
    ()=>updateLeadStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getLeads() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from("leads").select("*").eq("tenant_id", tenantId).order("created_at", {
        ascending: false
    });
    if (error) {
        console.error("Error fetching leads:", error);
        return [];
    }
    return data;
}
async function createLead(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized or no tenant assigned");
    const { data, error } = await supabase.from("leads").insert([
        {
            ...formData,
            tenant_id: tenantId,
            status: formData.status || "new",
            scoring: formData.scoring || 0
        }
    ]).select().single();
    if (error) {
        console.error("Error creating lead:", error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
    return data;
}
async function updateLeadStatus(id, status) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const { data, error } = await supabase.from("leads").update({
        status,
        updated_at: new Date().toISOString()
    }).eq("id", id).eq("tenant_id", tenantId).select().single();
    if (error) {
        console.error(`Error updating lead status ${id}:`, error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/pipeline");
    return data;
}
async function updateLead(id, formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const { data, error } = await supabase.from("leads").update({
        ...formData,
        updated_at: new Date().toISOString()
    }).eq("id", id).eq("tenant_id", tenantId).select().single();
    if (error) {
        console.error(`Error updating lead ${id}:`, error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/leads/${id}`);
    return data;
}
async function deleteLead(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const { error } = await supabase.from("leads").delete().eq("id", id).eq("tenant_id", tenantId);
    if (error) {
        console.error(`Error deleting lead ${id}:`, error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
}
async function getLeadById(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return null;
    const { data, error } = await supabase.from("leads").select("*").eq("id", id).eq("tenant_id", tenantId).single();
    if (error) {
        console.error(`Error fetching lead ${id}:`, error);
        return null;
    }
    return data;
}
async function bulkCreateLeads(leadsData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized or no tenant assigned");
    const inserts = leadsData.map((lead)=>({
            ...lead,
            tenant_id: tenantId,
            status: lead.status || "new",
            scoring: lead.scoring || 0
        }));
    const { data, error } = await supabase.from("leads").insert(inserts).select();
    if (error) {
        console.error("Error mass creating leads:", error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
    return data;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getLeads,
    createLead,
    updateLeadStatus,
    updateLead,
    deleteLead,
    getLeadById,
    bulkCreateLeads
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeads, "0024d9fa4b575391a7aceb51843ea809402550cf12", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLead, "409cd6ab7bf7b5271798d29271e68ad7dd55080553", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeadStatus, "60c9edd67b5817293250a1c002477b783c098f35b3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLead, "60cc75357de99adac2c06afefd873339aea7812286", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLead, "40267af3bd0f08c9b96a6dac2461a0f251660b9c8d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadById, "409260f01728e58daaabe24f2517b5d41006e837c4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkCreateLeads, "40146eb080ac5d6e97fd34fdde7e3c47c09bfc15a7", null);
}),
"[project]/apps/web/.next-internal/server/app/(dashboard)/documentos/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/contracts.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/apps/web/app/actions/leads.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/contracts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/leads.ts [app-rsc] (ecmascript)");
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
"[project]/apps/web/.next-internal/server/app/(dashboard)/documentos/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/contracts.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/apps/web/app/actions/leads.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0024d9fa4b575391a7aceb51843ea809402550cf12",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeads"],
    "003e4bfbb04e946a5bfa95af1848495434b59053fd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContracts"],
    "0044167fefd549fb704d2f3091154fb49b9e8228fd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTemplates"],
    "0058814481d565d1755417476327d2f49abc2dac21",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "0094ea1ea62e938bc2239497f3aaa2841424d15bbb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSharedProperties"],
    "009bd00912ff67b81a7559d44ba516e9a82b102dd4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProperties"],
    "00ce39c726f28eddc3a98d5c4a86ff4102a4ca00f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    "00d3e6c351e1eb708e1f7c3618afb61eba6bbc9206",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPublicProperties"],
    "4002c4efd7fa08515d17b299630c20d97ec44fcae5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentsByPropertyId"],
    "40146eb080ac5d6e97fd34fdde7e3c47c09bfc15a7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bulkCreateLeads"],
    "40267af3bd0f08c9b96a6dac2461a0f251660b9c8d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLead"],
    "402773c933ce56ea9ee3415d047829ea6f5f10c583",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadCustomTemplate"],
    "4032a21162f14ee8cbf8d7ce9c736a32d8db389519",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTemplate"],
    "403833d62bb0cde1d61838c4153f87608f8d789293",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importDocument"],
    "403dfd806530b0f0596321853a27664384a9a3b0dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["globalSearch"],
    "4053c964ceeca2da91a1efa0d016b021a1338be069",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContractById"],
    "4087fc5ce41a4f193d6ed8e9afcffc9d4f7612ca2e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProperty"],
    "409260f01728e58daaabe24f2517b5d41006e837c4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadById"],
    "40936af3fb653794567f0ed2cfd2983fcab17eec70",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteContract"],
    "409cd6ab7bf7b5271798d29271e68ad7dd55080553",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLead"],
    "40a6ac81a673d5927d64b57251842ba3a277dc24e7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentsByLeadId"],
    "40bdf6132c704b5fbdd2a2c37c2ad1341741363861",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContract"],
    "40c587ee17fbc64f5d026c5c91d415c90a4e4033ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationAsRead"],
    "40ef31a5d83ddd601630b6674d149be801d3eb9b7f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPropertyById"],
    "605856fa8af109200234296f2489610e86b631be9b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProperty"],
    "6062d1c535458a60f61e7224dace1c74c7fc469a43",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["togglePropertySharing"],
    "608a5a652aed27fd9fbd7a483f9f81a0916ccdb63c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateContract"],
    "60c9edd67b5817293250a1c002477b783c098f35b3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLeadStatus"],
    "60cc75357de99adac2c06afefd873339aea7812286",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLead"],
    "709f49f45058a476845a19c861e91599e94cf0aa46",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProperty"],
    "7cdff2578f7a6c06f037fa23f313211696b1613708",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateLegalDocumentAI"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$documentos$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/(dashboard)/documentos/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/apps/web/app/actions/contracts.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/apps/web/app/actions/leads.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$contracts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/contracts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$properties$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/properties.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/leads.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=apps_web_68adca88._.js.map