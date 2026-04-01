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
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
        if (!tenantId) return;
        await Promise.allSettled([
            processTaskReminders(supabase, tenantId),
            processVisitReminders(supabase, tenantId)
        ]);
    } catch (err) {
        // Never throw from background processes – just log.
        console.error('[REMINDERS] Fatal error in processPendingReminders:', err);
    }
}
async function processTaskReminders(supabase, tenantId) {
    const now = new Date();
    const { data: tasks, error } = await supabase.from('tasks').select('id, title, due_date, reminder_hours, reminder_channels, assigned_to').eq('tenant_id', tenantId).eq('agent_reminder_sent', false).eq('status', 'pending').not('due_date', 'is', null);
    if (error) {
        console.error('[REMINDERS] Error fetching tasks:', error.message);
        return;
    }
    if (!tasks || tasks.length === 0) return;
    for (const task of tasks){
        try {
            const dueDate = new Date(task.due_date);
            const reminderHours = task.reminder_hours ?? 2;
            const reminderTime = new Date(dueDate.getTime() - reminderHours * 60 * 60 * 1000);
            if (now < reminderTime) continue;
            const channels = task.reminder_channels ?? [
                'in-app'
            ];
            if (channels.includes('in-app') && task.assigned_to) {
                await createNotification(supabase, tenantId, task.assigned_to, {
                    title: 'Recordatorio de Tarea',
                    message: `Tienes la tarea "${task.title}" programada para las ${dueDate.toLocaleTimeString('es-AR')}.`,
                    type: 'task_reminder',
                    related_id: task.id
                });
            }
            if (channels.includes('whatsapp') || channels.includes('email')) {
                console.log(`[REMINDERS][TASK] ${task.title} → agent ${task.assigned_to} via ${channels.filter((c)=>c !== 'in-app').join(', ')}`);
            }
            // Mark as sent (best-effort)
            const { error: updateError } = await supabase.from('tasks').update({
                agent_reminder_sent: true
            }).eq('id', task.id);
            if (updateError) {
                console.error(`[REMINDERS] Could not mark task ${task.id} as sent:`, updateError.message);
            }
        } catch (taskErr) {
            console.error(`[REMINDERS] Error processing task reminder for ${task.id}:`, taskErr);
        }
    }
}
async function processVisitReminders(supabase, tenantId) {
    const now = new Date();
    const { data: visits, error } = await supabase.from('visits').select(`
            id, scheduled_at, reminder_hours,
            agent_id, agent_reminder_sent, agent_reminder_channels,
            client_reminder_sent, client_reminder_channels,
            lead:leads(id, name),
            property:properties(title)
        `).eq('tenant_id', tenantId).eq('status', 'scheduled');
    if (error) {
        console.error('[REMINDERS] Error fetching visits:', error.message);
        return;
    }
    if (!visits || visits.length === 0) return;
    for (const visit of visits){
        try {
            const scheduledAt = new Date(visit.scheduled_at);
            const reminderHours = visit.reminder_hours ?? 2;
            const reminderTime = new Date(scheduledAt.getTime() - reminderHours * 60 * 60 * 1000);
            if (now < reminderTime) continue;
            const leadName = visit.lead?.name ?? 'Lead desconocido';
            const propertyTitle = visit.property?.title ?? 'Propiedad';
            const timeStr = scheduledAt.toLocaleTimeString('es-AR');
            // 1. Agent Notification
            if (!visit.agent_reminder_sent) {
                const agentChannels = visit.agent_reminder_channels ?? [
                    'in-app'
                ];
                if (agentChannels.includes('in-app') && visit.agent_id) {
                    await createNotification(supabase, tenantId, visit.agent_id, {
                        title: 'Recordatorio de Visita',
                        message: `Tienes una visita con ${leadName} para "${propertyTitle}" a las ${timeStr}.`,
                        type: 'visit_reminder',
                        related_id: visit.id
                    });
                }
                if (agentChannels.includes('whatsapp') || agentChannels.includes('email')) {
                    console.log(`[REMINDERS][VISIT] ${propertyTitle} → agent ${visit.agent_id} via ${agentChannels.filter((c)=>c !== 'in-app').join(', ')}`);
                }
                await supabase.from('visits').update({
                    agent_reminder_sent: true
                }).eq('id', visit.id);
            }
            // 2. Client Notification via messaging system
            if (!visit.client_reminder_sent) {
                const clientChannels = visit.client_reminder_channels ?? [];
                if (clientChannels.length > 0 && visit.lead?.id) {
                    const msg = `Hola ${leadName}, te recordamos tu visita para "${propertyTitle}" hoy a las ${timeStr}. ¡Te esperamos!`;
                    try {
                        const conversationId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrCreateLeadConversation"])(visit.lead.id, false);
                        if (conversationId) {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendMessage"])(conversationId, msg, false);
                        }
                    } catch (msgErr) {
                        console.error('[REMINDERS] Could not send client message:', msgErr);
                    }
                }
                await supabase.from('visits').update({
                    client_reminder_sent: true
                }).eq('id', visit.id);
            }
        } catch (visitErr) {
            console.error(`[REMINDERS] Error processing visit reminder for ${visit.id}:`, visitErr);
        }
    }
}
/**
 * Creates a notification record. Silently fails if the table is unavailable
 * so that a schema issue doesn't break the entire reminder pipeline.
 */ async function createNotification(supabase, tenantId, userId, data) {
    if (!userId) {
        console.warn('[REMINDERS] createNotification called without userId – skipping.');
        return;
    }
    const { error } = await supabase.from('notifications').insert({
        tenant_id: tenantId,
        user_id: userId,
        ...data
    });
    if (error) {
        // Log but never throw – a missing table or RLS issue should not crash reminders.
        console.error('[REMINDERS] Error creating notification:', error.message);
    }
}
async function getNotifications() {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
        if (!tenantId) return [];
        const { data, error } = await supabase.from('notifications').select('*').eq('tenant_id', tenantId).order('created_at', {
            ascending: false
        }).limit(20);
        if (error) {
            // Table may not exist yet – return empty gracefully.
            console.warn('[NOTIFICATIONS] Could not fetch notifications:', error.message);
            return [];
        }
        return data ?? [];
    } catch (err) {
        console.error('[NOTIFICATIONS] Unexpected error in getNotifications:', err);
        return [];
    }
}
async function markNotificationAsRead(id) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.from('notifications').update({
            read: true
        }).eq('id', id);
        if (error) {
            console.error('[NOTIFICATIONS] Error marking as read:', error.message);
            return {
                success: false
            };
        }
        return {
            success: true
        };
    } catch (err) {
        console.error('[NOTIFICATIONS] Unexpected error in markNotificationAsRead:', err);
        return {
            success: false
        };
    }
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
"[project]/apps/web/.next-internal/server/app/(dashboard)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$dashboard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/apps/web/.next-internal/server/app/(dashboard)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0046e968d066f6aac18fbf620a2264b7fdc89ad9ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$dashboard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDashboardStats"],
    "0058814481d565d1755417476327d2f49abc2dac21",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "00ce39c726f28eddc3a98d5c4a86ff4102a4ca00f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    "403dfd806530b0f0596321853a27664384a9a3b0dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["globalSearch"],
    "40c587ee17fbc64f5d026c5c91d415c90a4e4033ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationAsRead"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$dashboard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/(dashboard)/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$dashboard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=apps_web_7f87b494._.js.map