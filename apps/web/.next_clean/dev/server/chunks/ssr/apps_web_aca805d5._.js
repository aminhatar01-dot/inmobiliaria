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
"[project]/apps/web/app/actions/agents.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"004c42836cbe9b34bc1b19ef6bfca3d82f2a09830b":"getAgents","0076244f0dc260733da3acd003aed2654a4664f811":"getBranches","00bfff2f2315b3c4a9708d2ffa93c9cff96fdb8131":"getRoles","4022cc3514247865902147f2153dd41b8eb0891a88":"inviteAgent","407c457a5109e97494d8366bbdb93be2321362adb5":"deleteAgent","6026763c4d26f05958e4c531e3b5d92e9085d67746":"updateAgentRole"},"",""] */ __turbopack_context__.s([
    "deleteAgent",
    ()=>deleteAgent,
    "getAgents",
    ()=>getAgents,
    "getBranches",
    ()=>getBranches,
    "getRoles",
    ()=>getRoles,
    "inviteAgent",
    ()=>inviteAgent,
    "updateAgentRole",
    ()=>updateAgentRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getAgents() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    // Fetch profiles with roles and branches
    // We use join through user_role_assignments -> roles and user_branches -> branches
    const { data: profiles, error: profileError } = await supabase.from("profiles").select(`
            *,
            user_role_assignments (
                roles (
                    id,
                    name
                )
            ),
            user_branches (
                branches (
                    id,
                    name
                )
            )
        `).eq("tenant_id", tenantId).order("name", {
        ascending: true
    });
    if (profileError) {
        console.error("Error fetching agents:", profileError);
        return [];
    }
    // Fetch pending invitations
    const { data: invitations, error: inviteError } = await supabase.from("invitations").select(`
            *,
            roles (id, name),
            branches (id, name)
        `).eq("tenant_id", tenantId).eq("status", "pending");
    if (inviteError) {
        console.error("Error fetching invitations:", inviteError);
    }
    const agents = profiles.map((profile)=>({
            ...profile,
            roles: profile.user_role_assignments?.map((ra)=>ra.roles) || [],
            branches: profile.user_branches?.map((ub)=>ub.branches) || [],
            is_invitation: false
        }));
    const invitedAgents = (invitations || []).map((invite)=>({
            id: invite.id,
            name: invite.name,
            email: invite.email,
            roles: invite.roles ? [
                invite.roles
            ] : [],
            branches: invite.branches ? [
                invite.branches
            ] : [],
            created_at: invite.invited_at,
            is_invitation: true,
            status: 'pending'
        }));
    return [
        ...agents,
        ...invitedAgents
    ].sort((a, b)=>(a.name || '').localeCompare(b.name || ''));
}
async function getRoles() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from("roles").select("*").eq("tenant_id", tenantId).order("name", {
        ascending: true
    });
    if (error) {
        console.error("Error fetching roles:", error);
        return [];
    }
    return data;
}
async function getBranches() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from("branches").select("*").eq("tenant_id", tenantId).order("name", {
        ascending: true
    });
    if (error) {
        console.error("Error fetching branches:", error);
        return [];
    }
    return data;
}
async function updateAgentRole(agentId, roleId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    // Try updating invitation first (it's simpler and more direct for the user ID provided if it's an invite)
    const { data: inviteUpdate, error: inviteError } = await supabase.from("invitations").update({
        role_id: roleId
    }).eq("id", agentId).eq("tenant_id", tenantId).select();
    // If it was an invitation and was updated, we are done
    if (!inviteError && inviteUpdate && inviteUpdate.length > 0) {
        return {
            success: true
        };
    }
    // Otherwise, assume it's a profile
    // First delete existing assignments for this user
    await supabase.from("user_role_assignments").delete().eq("user_id", agentId);
    const { error } = await supabase.from("user_role_assignments").insert({
        user_id: agentId,
        role_id: roleId
    });
    if (error) {
        console.error("Error updating agent role:", error);
        throw new Error("No se pudo actualizar el rol. Verifique que el usuario o invitación sea válido.");
    }
    return {
        success: true
    };
}
async function inviteAgent(data) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const adminSupabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    // Check if invitation already exists for this email
    const { data: existingInvite } = await supabase.from("invitations").select("*").eq("tenant_id", tenantId).eq("email", data.email).eq("status", "pending").single();
    if (existingInvite) {
        throw new Error("Ya existe una invitación pendiente para este correo electrónico");
    }
    // Validate that roleId and branchId are valid UUIDs or null
    const roleId = data.roleId === "" ? null : data.roleId;
    const branchId = data.branchId === "" ? null : data.branchId;
    // 1. Send native Supabase invitation with metadata
    const { data: authData, error: authError } = await adminSupabase.auth.admin.inviteUserByEmail(data.email, {
        data: {
            tenant_id: tenantId,
            role_id: roleId,
            branch_id: branchId,
            full_name: data.name
        },
        redirectTo: `${("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000'}/auth/callback`
    });
    if (authError) {
        // If user already exists, check if they are already in the tenant
        if (authError.message.includes("already been registered") || authError.status === 422) {
            const { data: profileExists } = await supabase.from("profiles").select("id").eq("email", data.email).eq("tenant_id", tenantId).maybeSingle();
            if (profileExists) {
                return {
                    success: false,
                    error: "Este usuario ya es parte de tu equipo"
                };
            }
            return {
                success: false,
                error: "Este correo ya está registrado en la plataforma. Para sumarlo a tu equipo, usa el mismo correo en la sección de Red o contacta a soporte."
            };
        }
        console.error("Auth Invite Error:", authError);
        return {
            success: false,
            error: `Error al enviar invitación: ${authError.message}`
        };
    }
    // 2. Insert into our local invitations table for UI tracking
    const { error: dbError } = await supabase.from("invitations").insert({
        tenant_id: tenantId,
        name: data.name,
        email: data.email,
        role_id: roleId,
        branch_id: branchId,
        status: 'pending'
    });
    if (dbError) {
        console.error("Database Error:", dbError);
        return {
            success: false,
            error: `Error en la base de datos: ${dbError.message}`
        };
    }
    return {
        success: true
    };
}
async function deleteAgent(agentId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    // Try deleting from invitations first
    const { data: inviteDelete, error: inviteError } = await supabase.from("invitations").delete().eq("id", agentId).eq("tenant_id", tenantId).select();
    if (!inviteError && inviteDelete && inviteDelete.length > 0) {
        return {
            success: true
        };
    }
    // Otherwise, assume it's a profile
    const { error } = await supabase.from("profiles").delete().eq("id", agentId).eq("tenant_id", tenantId);
    if (error) {
        console.error("Error deleting agent:", error);
        throw new Error("No se pudo eliminar el integrante del equipo");
    }
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAgents,
    getRoles,
    getBranches,
    updateAgentRole,
    inviteAgent,
    deleteAgent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAgents, "004c42836cbe9b34bc1b19ef6bfca3d82f2a09830b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRoles, "00bfff2f2315b3c4a9708d2ffa93c9cff96fdb8131", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBranches, "0076244f0dc260733da3acd003aed2654a4664f811", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAgentRole, "6026763c4d26f05958e4c531e3b5d92e9085d67746", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(inviteAgent, "4022cc3514247865902147f2153dd41b8eb0891a88", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAgent, "407c457a5109e97494d8366bbdb93be2321362adb5", null);
}),
"[project]/apps/web/app/actions/network.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"001a6e5d97930ec187df9e4cd46aa6dbecc2cd53ba":"getNetworkProperties","00bba0568e2c37144c309296fcb021acb956fcf72d":"getNetworkStatus","408118bd61b89b5d829b59dd7e76fa83ba0976f18f":"inviteNetworkAgent","4088efcbdf6a7fe8a76bb8e3d730f1a8fde4564465":"acceptNetworkInvitation"},"",""] */ __turbopack_context__.s([
    "acceptNetworkInvitation",
    ()=>acceptNetworkInvitation,
    "getNetworkProperties",
    ()=>getNetworkProperties,
    "getNetworkStatus",
    ()=>getNetworkStatus,
    "inviteNetworkAgent",
    ()=>inviteNetworkAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function inviteNetworkAgent(email) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    // Check if invitation already exists
    const { data: existing } = await supabase.from("network_invitations").select("id, status").eq("sender_tenant_id", tenantId).eq("recipient_email", email).single();
    if (existing) {
        if (existing.status === 'pending') {
            throw new Error("Ya existe una invitación pendiente para este correo");
        }
        if (existing.status === 'accepted') {
            throw new Error("Este agente ya es parte de tu red");
        }
    }
    const { error } = await supabase.from("network_invitations").insert({
        sender_tenant_id: tenantId,
        recipient_email: email,
        status: 'pending'
    });
    if (error) {
        console.error("Error creating invitation:", error);
        throw new Error("Error al crear la invitación");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/agentes");
}
async function getNetworkStatus() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return {
        partners: [],
        sentInvitations: [],
        receivedInvitations: []
    };
    // Get active partnerships
    const { data: partnerships } = await supabase.from("tenant_partnerships").select(`
            *,
            requester:requester_tenant_id(id, name),
            responder:responder_tenant_id(id, name)
        `).or(`requester_tenant_id.eq.${tenantId},responder_tenant_id.eq.${tenantId}`).eq("status", "active");
    // Get sent invitations
    const { data: sentInvitations } = await supabase.from("network_invitations").select("*").eq("sender_tenant_id", tenantId).order("created_at", {
        ascending: false
    });
    // Get received invitations (based on user email)
    const { data: { user } } = await supabase.auth.getUser();
    let receivedInvitations = [];
    if (user?.email) {
        const { data } = await supabase.from("network_invitations").select(`
                *,
                sender:sender_tenant_id(id, name)
            `).eq("recipient_email", user.email).eq("status", "pending");
        receivedInvitations = data || [];
    }
    // Format partners list
    const partners = partnerships?.map((p)=>{
        const isRequester = p.requester_tenant_id === tenantId;
        const partner = isRequester ? p.responder : p.requester;
        return {
            partnershipId: p.id,
            partnerId: partner?.id || 'unknown',
            partnerName: partner?.name || 'Inmobiliaria Desconocida',
            connectedAt: p.created_at
        };
    }) || [];
    return {
        partners,
        sentInvitations: sentInvitations || [],
        receivedInvitations
    };
}
async function acceptNetworkInvitation(invitationId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    // Get invitation
    const { data: invitation } = await supabase.from("network_invitations").select("*").eq("id", invitationId).single();
    if (!invitation) throw new Error("Invitación no encontrada");
    if (invitation.status !== 'pending') throw new Error("Invitación no válida");
    // Start transaction (simplified as separate calls for Supabase implementation)
    // 1. Create partnership
    const { error: partnershipError } = await supabase.from("tenant_partnerships").insert({
        requester_tenant_id: invitation.sender_tenant_id,
        responder_tenant_id: tenantId,
        status: 'active'
    });
    if (partnershipError) {
        console.error("Error creating partnership:", partnershipError);
        throw new Error("Error al aceptar la invitación");
    }
    // 2. Update invitation status
    await supabase.from("network_invitations").update({
        status: 'accepted'
    }).eq("id", invitationId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/agentes");
}
async function getNetworkProperties() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    // RLS "Partners can view shared properties" handles the logic.
    // We just select shared properties regardless of tenant, RLS filters to only partners
    const { data, error } = await supabase.from("properties").select(`
            *,
            property_media (*),
            tenant:tenant_id (name)
        `).eq("is_shared", true).neq("tenant_id", tenantId) // Exclude my own properties which might be shared
    .order("created_at", {
        ascending: false
    });
    if (error) {
        console.error("Error fetching network properties:", error);
        return [];
    }
    return data;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    inviteNetworkAgent,
    getNetworkStatus,
    acceptNetworkInvitation,
    getNetworkProperties
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(inviteNetworkAgent, "408118bd61b89b5d829b59dd7e76fa83ba0976f18f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNetworkStatus, "00bba0568e2c37144c309296fcb021acb956fcf72d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(acceptNetworkInvitation, "4088efcbdf6a7fe8a76bb8e3d730f1a8fde4564465", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNetworkProperties, "001a6e5d97930ec187df9e4cd46aa6dbecc2cd53ba", null);
}),
"[project]/apps/web/app/actions/subscriptions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00f5f531ee1d781db67bc09951f456bd96b6dc5a63":"getUserPlanLimits","4006b13a10088187960d78c16081f2c5990be9ac1e":"initializeSubscription","4024989519a9975b2ded42a80e654925fe579fa328":"inviteToAgency","402c1b4ed40309e8c6621313cbba172b919df223b8":"acceptInvitation","409e46d4618791a2f05b2073dcb8c89bd1a97a9034":"getInvitationByToken","40f0c013da712486cf0276644960e4365927a7f881":"checkFeatureLimit","601ea5cf1c322b9f48dc884b1904e1c673374597be":"createCheckoutPreference"},"",""] */ __turbopack_context__.s([
    "acceptInvitation",
    ()=>acceptInvitation,
    "checkFeatureLimit",
    ()=>checkFeatureLimit,
    "createCheckoutPreference",
    ()=>createCheckoutPreference,
    "getInvitationByToken",
    ()=>getInvitationByToken,
    "getUserPlanLimits",
    ()=>getUserPlanLimits,
    "initializeSubscription",
    ()=>initializeSubscription,
    "inviteToAgency",
    ()=>inviteToAgency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getUserPlanLimits() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Not authenticated");
    // Check if user is an invitee of another subscription
    const { data: invite } = await supabase.from('subscription_invites').select('subscription_id').eq('invitee_id', user.id).single();
    const subscriptionQuery = supabase.from('user_subscriptions').select(`
            plan_id,
            subscription_plans (
                name,
                max_properties,
                max_leads,
                max_content_creations_per_month,
                max_automations,
                max_responses_per_automation,
                allows_team_invites
            )
        `);
    if (invite) {
        subscriptionQuery.eq('id', invite.subscription_id);
    } else {
        subscriptionQuery.eq('user_id', user.id);
    }
    const { data: subscription } = await subscriptionQuery.single();
    if (!subscription) {
        // Default to free plan if not found
        const { data: freePlan } = await supabase.from('subscription_plans').select('*').eq('name', 'Gratuito').single();
        return {
            planName: 'Gratuito',
            limits: freePlan
        };
    }
    const plan = subscription.subscription_plans;
    return {
        planName: plan.name,
        limits: plan
    };
}
async function checkFeatureLimit(feature) {
    const { limits } = await getUserPlanLimits();
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (feature === 'properties') {
        const { count } = await supabase.from('properties').select('*', {
            count: 'exact',
            head: true
        }).eq('created_by', user.id);
        return (count || 0) < limits.max_properties;
    }
    if (feature === 'leads') {
        const { count } = await supabase.from('leads').select('*', {
            count: 'exact',
            head: true
        }).eq('created_by', user.id);
        return (count || 0) < limits.max_leads;
    }
    return false;
}
async function inviteToAgency(inviteeEmail) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    const { limits } = await getUserPlanLimits();
    if (!limits.allows_team_invites) {
        throw new Error("Tu plan no permite invitaciones de equipo.");
    }
    // 1. Get current user's subscription
    const { data: sub } = await supabase.from('user_subscriptions').select('id').eq('user_id', user.id).single();
    if (!sub) throw new Error("No tienes una suscripción activa.");
    // 2. Create the invite
    const { data: invite, error } = await supabase.from('subscription_invites').insert({
        inviter_id: user.id,
        invitee_email: inviteeEmail,
        subscription_id: sub.id,
        status: 'pending'
    }).select('token').single();
    if (error) {
        if (error.code === '23505') throw new Error("Ya existe una invitación pendiente para este correo.");
        throw error;
    }
    const inviteLink = `${("TURBOPACK compile-time value", "http://localhost:3000") || 'https://inmocms.com'}/invitacion/${invite.token}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/cuenta/equipo');
    return {
        success: true,
        inviteLink
    };
}
async function initializeSubscription(planName) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Not authenticated");
    // 1. Get Plan Details
    const { data: plan, error: planError } = await supabase.from('subscription_plans').select('*').eq('name', planName).single();
    if (planError) {
        console.error("Plan fetch error:", planError);
        throw new Error(`Plan no encontrado: ${planError.message} (Plan: ${planName})`);
    }
    // 2. Get User Profile & Metadata
    const { data: profile } = await supabase.from('profiles').select('tenant_id, name').eq('id', user.id).single();
    const userMetadata = user.user_metadata || {};
    const name = profile?.name || userMetadata.full_name || 'Agente';
    const agency_name = userMetadata.agency_name || `${name}'s Agency`;
    let tenantId = profile?.tenant_id;
    // 3. Create or Update Tenant
    const tenantData = {
        name: agency_name,
        plan: planName.toLowerCase(),
        default_currency: 'ARS'
    };
    if (!tenantId) {
        const { data: tenant, error: tenantError } = await supabase.from('tenants').insert({
            ...tenantData,
            slug: `${agency_name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${Math.random().toString(36).substring(2, 7)}`
        }).select().single();
        if (tenantError) throw new Error("Error al crear la inmobiliaria: " + tenantError.message);
        tenantId = tenant.id;
        // Update Profile with new tenant_id
        await supabase.from('profiles').update({
            tenant_id: tenantId
        }).eq('id', user.id);
    } else {
        const { error: tenantUpdateError } = await supabase.from('tenants').update(tenantData).eq('id', tenantId);
        if (tenantUpdateError) throw new Error("Error al actualizar la inmobiliaria: " + tenantUpdateError.message);
    }
    // 4. Create or Update Subscription
    const { data: existingSub } = await supabase.from('user_subscriptions').select('id').eq('user_id', user.id).maybeSingle();
    const subData = {
        user_id: user.id,
        plan_id: plan.id,
        status: 'active',
        current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    };
    if (existingSub) {
        const { error: subUpdateError } = await supabase.from('user_subscriptions').update(subData).eq('id', existingSub.id);
        if (subUpdateError) throw new Error("Error al actualizar suscripción: " + subUpdateError.message);
    } else {
        const { error: subInsertError } = await supabase.from('user_subscriptions').insert(subData);
        if (subInsertError) throw new Error("Error al activar suscripción: " + subInsertError.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/cuenta/plan');
    return {
        success: true
    };
}
async function getInvitationByToken(token) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: invite, error } = await supabase.from('subscription_invites').select(`
            id,
            invitee_email,
            status,
            expires_at,
            tenants!subscription_invites_subscription_id_fkey (
                name
            ),
            profiles!subscription_invites_inviter_id_fkey (
                name
            )
        `).eq('token', token).single();
    if (error || !invite) return null;
    // Check expiration
    if (new Date(invite.expires_at) < new Date()) {
        return {
            expired: true
        };
    }
    return invite;
}
async function acceptInvitation(token) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Debes iniciar sesión para aceptar la invitación.");
    // 1. Get invite details
    const { data: invite, error: inviteError } = await supabase.from('subscription_invites').select('*').eq('token', token).eq('status', 'pending').single();
    if (inviteError || !invite) throw new Error("Invitación no válida o ya aceptada.");
    // 2. Get Subscription Details to find tenant_id
    const { data: sub } = await supabase.from('user_subscriptions').select('user_id').eq('id', invite.subscription_id).single();
    if (!sub) throw new Error("No se pudo encontrar la suscripción original.");
    const { data: inviterProfile } = await supabase.from('profiles').select('tenant_id').eq('id', sub.user_id).single();
    if (!inviterProfile?.tenant_id) throw new Error("No se pudo encontrar la inmobiliaria de origen.");
    // 3. Update invitee's profile with tenant_id
    const { error: profileError } = await supabase.from('profiles').update({
        tenant_id: inviterProfile.tenant_id
    }).eq('id', user.id);
    if (profileError) throw new Error("Error al unirse a la inmobiliaria: " + profileError.message);
    // 4. Update invite status and link invitee_id
    await supabase.from('subscription_invites').update({
        status: 'accepted',
        invitee_id: user.id
    }).eq('id', invite.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/cuenta/equipo');
    return {
        success: true
    };
}
async function createCheckoutPreference(planName, price) {
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    const siteUrl = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000';
    // FALLBACK: If no access token, we redirect to our local Mock Checkout Page
    if (!accessToken) {
        console.warn("MERCADOPAGO_ACCESS_TOKEN not found. Using local mock checkout.");
        return {
            success: true,
            init_point: `${siteUrl}/cuenta/plan/checkout?plan=${planName}&price=${price}`
        };
    }
    try {
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [
                    {
                        title: `InmoCMS - Plan ${planName}`,
                        unit_price: price,
                        quantity: 1,
                        currency_id: 'ARS'
                    }
                ],
                back_urls: {
                    success: `${siteUrl}/cuenta/plan/success?plan=${planName}`,
                    failure: `${siteUrl}/cuenta/plan`,
                    pending: `${siteUrl}/cuenta/plan`
                },
                auto_return: 'approved',
                statement_descriptor: 'INMOCMS'
            })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Error creating MP preference");
        return {
            success: true,
            init_point: data.init_point
        };
    } catch (error) {
        console.error("MP Preference Error:", error);
        throw new Error("No se pudo generar el link de pago. Intenta más tarde.");
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getUserPlanLimits,
    checkFeatureLimit,
    inviteToAgency,
    initializeSubscription,
    getInvitationByToken,
    acceptInvitation,
    createCheckoutPreference
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserPlanLimits, "00f5f531ee1d781db67bc09951f456bd96b6dc5a63", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkFeatureLimit, "40f0c013da712486cf0276644960e4365927a7f881", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(inviteToAgency, "4024989519a9975b2ded42a80e654925fe579fa328", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(initializeSubscription, "4006b13a10088187960d78c16081f2c5990be9ac1e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInvitationByToken, "409e46d4618791a2f05b2073dcb8c89bd1a97a9034", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(acceptInvitation, "402c1b4ed40309e8c6621313cbba172b919df223b8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCheckoutPreference, "601ea5cf1c322b9f48dc884b1904e1c673374597be", null);
}),
"[project]/apps/web/.next-internal/server/app/(dashboard)/agentes/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/agents.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/network.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/apps/web/app/actions/subscriptions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$agents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/agents.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$network$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/network.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$subscriptions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/subscriptions.ts [app-rsc] (ecmascript)");
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
"[project]/apps/web/.next-internal/server/app/(dashboard)/agentes/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/agents.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/network.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/apps/web/app/actions/subscriptions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "001a6e5d97930ec187df9e4cd46aa6dbecc2cd53ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$network$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNetworkProperties"],
    "004c42836cbe9b34bc1b19ef6bfca3d82f2a09830b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$agents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAgents"],
    "0058814481d565d1755417476327d2f49abc2dac21",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "0076244f0dc260733da3acd003aed2654a4664f811",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$agents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBranches"],
    "00bba0568e2c37144c309296fcb021acb956fcf72d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$network$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNetworkStatus"],
    "00bfff2f2315b3c4a9708d2ffa93c9cff96fdb8131",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$agents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRoles"],
    "00ce39c726f28eddc3a98d5c4a86ff4102a4ca00f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    "00f5f531ee1d781db67bc09951f456bd96b6dc5a63",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$subscriptions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserPlanLimits"],
    "4006b13a10088187960d78c16081f2c5990be9ac1e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$subscriptions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeSubscription"],
    "4024989519a9975b2ded42a80e654925fe579fa328",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$subscriptions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inviteToAgency"],
    "402c1b4ed40309e8c6621313cbba172b919df223b8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$subscriptions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["acceptInvitation"],
    "403dfd806530b0f0596321853a27664384a9a3b0dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["globalSearch"],
    "407c457a5109e97494d8366bbdb93be2321362adb5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$agents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAgent"],
    "408118bd61b89b5d829b59dd7e76fa83ba0976f18f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$network$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inviteNetworkAgent"],
    "4088efcbdf6a7fe8a76bb8e3d730f1a8fde4564465",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$network$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["acceptNetworkInvitation"],
    "409e46d4618791a2f05b2073dcb8c89bd1a97a9034",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$subscriptions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInvitationByToken"],
    "40c587ee17fbc64f5d026c5c91d415c90a4e4033ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationAsRead"],
    "40f0c013da712486cf0276644960e4365927a7f881",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$subscriptions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkFeatureLimit"],
    "601ea5cf1c322b9f48dc884b1904e1c673374597be",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$subscriptions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCheckoutPreference"],
    "6026763c4d26f05958e4c531e3b5d92e9085d67746",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$agents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAgentRole"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$agentes$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$agents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$network$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$subscriptions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/(dashboard)/agentes/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/apps/web/app/actions/agents.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/apps/web/app/actions/network.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/apps/web/app/actions/subscriptions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$agents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/agents.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$network$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/network.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$subscriptions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/subscriptions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=apps_web_aca805d5._.js.map