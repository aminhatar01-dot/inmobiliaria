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
"[project]/apps/web/app/actions/marketing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b78984cf6a12f18f95dea361badaee11f3e8fce4":"getCampaigns","00ecaf2b2fde2f4a73cca3be58985166dbe7ce2382":"getAutomationRules","40153645b56ebd6722d247a14dfa32af24b980a2f1":"deleteAutomationRule","403943532b1086a6ee19c4d2bd5523a2b86fa0698e":"createAutomationRule","40a3af392490c8801686aca0eb70b0302347e6c623":"createCampaign","40b1fafde338313c58dc9f72ae1dd0c7ccbb619386":"getCampaignById","40d5d7f0abd71740338d816602b33be260f8cf69d2":"deleteCampaign","6096d126f254c29c62ce2d9c579ee145c58147a4e0":"updateCampaign","60f47fcb52f0cf2dda6353f24b657f1966478611e2":"toggleAutomationRule"},"",""] */ __turbopack_context__.s([
    "createAutomationRule",
    ()=>createAutomationRule,
    "createCampaign",
    ()=>createCampaign,
    "deleteAutomationRule",
    ()=>deleteAutomationRule,
    "deleteCampaign",
    ()=>deleteCampaign,
    "getAutomationRules",
    ()=>getAutomationRules,
    "getCampaignById",
    ()=>getCampaignById,
    "getCampaigns",
    ()=>getCampaigns,
    "toggleAutomationRule",
    ()=>toggleAutomationRule,
    "updateCampaign",
    ()=>updateCampaign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getCampaigns() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from("campaigns").select("*").eq("tenant_id", tenantId).order("created_at", {
        ascending: false
    });
    if (error) {
        console.error("Error fetching campaigns:", error);
        return [];
    }
    return data;
}
async function getCampaignById(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return null;
    const { data, error } = await supabase.from("campaigns").select("*").eq("id", id).eq("tenant_id", tenantId).single();
    if (error) {
        console.error(`Error fetching campaign ${id}:`, error);
        return null;
    }
    return data;
}
async function createCampaign(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const campaignData = {
        tenant_id: tenantId,
        name: formData.get("name"),
        type: formData.get("type"),
        status: "draft",
        content: formData.get("content") ? JSON.parse(formData.get("content")) : {},
        target_audience: formData.get("target_audience") ? JSON.parse(formData.get("target_audience")) : {}
    };
    const { data, error } = await supabase.from("campaigns").insert([
        campaignData
    ]).select().single();
    if (error) {
        console.error("Error creating campaign:", error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/marketing/campanas");
    return data;
}
async function updateCampaign(id, formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const updateData = {
        name: formData.get("name") || undefined,
        type: formData.get("type") || undefined,
        status: formData.get("status") || undefined,
        updated_at: new Date().toISOString()
    };
    // Remove undefined values
    Object.keys(updateData).forEach((key)=>updateData[key] === undefined && delete updateData[key]);
    const { data, error } = await supabase.from("campaigns").update(updateData).eq("id", id).eq("tenant_id", tenantId).select().single();
    if (error) {
        console.error(`Error updating campaign ${id}:`, error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/marketing/campanas");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/marketing/campanas/${id}`);
    return data;
}
async function deleteCampaign(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const { error } = await supabase.from("campaigns").delete().eq("id", id).eq("tenant_id", tenantId);
    if (error) {
        console.error(`Error deleting campaign ${id}:`, error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/marketing/campanas");
}
async function getAutomationRules() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const { data, error } = await supabase.from("automation_rules").select("*").eq("tenant_id", tenantId).order("created_at", {
        ascending: false
    });
    if (error) {
        console.error("Error fetching automation rules:", error);
        return [];
    }
    return data;
}
async function createAutomationRule(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const targetType = formData.get("target_type") || "all";
    const targetId = formData.get("target_id");
    const templatesRaw = formData.get("templates");
    const ruleData = {
        tenant_id: tenantId,
        name: formData.get("name"),
        trigger_type: formData.get("trigger_type"),
        trigger_condition: formData.get("trigger_condition") ? JSON.parse(formData.get("trigger_condition")) : {},
        action_type: formData.get("action_type"),
        action_config: formData.get("action_config") ? JSON.parse(formData.get("action_config")) : {},
        is_active: true,
        target_type: targetType,
        target_id: targetType !== "all" && targetId ? targetId : null,
        templates: templatesRaw ? JSON.parse(templatesRaw) : []
    };
    const { data, error } = await supabase.from("automation_rules").insert([
        ruleData
    ]).select().single();
    if (error) {
        console.error("Error creating automation rule:", error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/marketing/automatizaciones");
    return data;
}
async function toggleAutomationRule(id, isActive) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const { data, error } = await supabase.from("automation_rules").update({
        is_active: isActive,
        updated_at: new Date().toISOString()
    }).eq("id", id).eq("tenant_id", tenantId).select().single();
    if (error) {
        console.error(`Error toggling automation rule ${id}:`, error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/marketing/automatizaciones");
    return data;
}
async function deleteAutomationRule(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) throw new Error("Unauthorized");
    const { error } = await supabase.from("automation_rules").delete().eq("id", id).eq("tenant_id", tenantId);
    if (error) {
        console.error(`Error deleting automation rule ${id}:`, error);
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/marketing/automatizaciones");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCampaigns,
    getCampaignById,
    createCampaign,
    updateCampaign,
    deleteCampaign,
    getAutomationRules,
    createAutomationRule,
    toggleAutomationRule,
    deleteAutomationRule
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCampaigns, "00b78984cf6a12f18f95dea361badaee11f3e8fce4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCampaignById, "40b1fafde338313c58dc9f72ae1dd0c7ccbb619386", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCampaign, "40a3af392490c8801686aca0eb70b0302347e6c623", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCampaign, "6096d126f254c29c62ce2d9c579ee145c58147a4e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCampaign, "40d5d7f0abd71740338d816602b33be260f8cf69d2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAutomationRules, "00ecaf2b2fde2f4a73cca3be58985166dbe7ce2382", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAutomationRule, "403943532b1086a6ee19c4d2bd5523a2b86fa0698e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleAutomationRule, "60f47fcb52f0cf2dda6353f24b657f1966478611e2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAutomationRule, "40153645b56ebd6722d247a14dfa32af24b980a2f1", null);
}),
"[project]/apps/web/.next-internal/server/app/(dashboard)/marketing/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/marketing.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/marketing.ts [app-rsc] (ecmascript)");
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
"[project]/apps/web/.next-internal/server/app/(dashboard)/marketing/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/marketing.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0058814481d565d1755417476327d2f49abc2dac21",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "00b78984cf6a12f18f95dea361badaee11f3e8fce4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCampaigns"],
    "00ce39c726f28eddc3a98d5c4a86ff4102a4ca00f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    "00ecaf2b2fde2f4a73cca3be58985166dbe7ce2382",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAutomationRules"],
    "40153645b56ebd6722d247a14dfa32af24b980a2f1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAutomationRule"],
    "403943532b1086a6ee19c4d2bd5523a2b86fa0698e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAutomationRule"],
    "403dfd806530b0f0596321853a27664384a9a3b0dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["globalSearch"],
    "40a3af392490c8801686aca0eb70b0302347e6c623",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCampaign"],
    "40b1fafde338313c58dc9f72ae1dd0c7ccbb619386",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCampaignById"],
    "40c587ee17fbc64f5d026c5c91d415c90a4e4033ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationAsRead"],
    "40d5d7f0abd71740338d816602b33be260f8cf69d2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCampaign"],
    "6096d126f254c29c62ce2d9c579ee145c58147a4e0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCampaign"],
    "60f47fcb52f0cf2dda6353f24b657f1966478611e2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleAutomationRule"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$marketing$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/(dashboard)/marketing/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/apps/web/app/actions/marketing.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$marketing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/marketing.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=apps_web_cd53be7b._.js.map