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
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/apps/web/app/actions/support-ai.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60e52cd731736fda6fc5980e94a47eca186ba0f197":"askSupportAI"},"",""] */ __turbopack_context__.s([
    "askSupportAI",
    ()=>askSupportAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const FAQ_DATABASE = [
    {
        keywords: [
            /(cómo|como).*crear.*propiedad/i,
            /(cómo|como).*subir.*propiedad/i,
            /nueva.*propiedad/i
        ],
        answer: "Para crear una propiedad en InmoCMS:\n1. Ve al menú **Propiedades**.\n2. Haz clic en el botón superior **+ Nueva Propiedad**.\n3. Completa los datos básicos (Título, Precio, Dirección) y carga las fotos.\n4. Presiona **Guardar** para que sea visible en tu listado."
    },
    {
        keywords: [
            /(cómo|como).*hacer.*video/i,
            /crear.*video/i,
            /ai studio/i,
            /video.*ia/i
        ],
        answer: "Para generar un video de marketing con IA:\n1. Dirígete a la sección **AI Studio**.\n2. Selecciona una propiedad de tu inventario.\n3. Elige un Avatar IA (Sofía, Marcos, etc.).\n4. Presiona **Generar Video**. El sistema creará el guion, la locución y las animaciones automáticamente."
    },
    {
        keywords: [
            /(qué|que) es.*omnisearch/i,
            /buscar/i,
            /encontrar/i,
            /comando k/i,
            /ctrl k/i
        ],
        answer: "El **Buscador Global (Omnisearch)** te permite encontrar cualquier cosa en segundos.\n- Presiona **Ctrl + K** (o Cmd + K en Mac) desde cualquier pantalla.\n- Escribe el nombre de una propiedad, un cliente o una tarea.\n- Usa las flechas para navegar y Enter para ir directo al recurso."
    },
    {
        keywords: [
            /contrato/i,
            /documento/i,
            /editar.*ia/i,
            /modificar.*ia/i
        ],
        answer: "Para editar documentos con IA:\n1. Ve a **Documentos** y abre uno existente o crea uno nuevo.\n2. En el editor, verás una **barra azul inferior**.\n3. Escribe tu instrucción (ej: 'Agrega una cláusula de confidencialidad') y presiona **Editar con IA**.\n4. La IA reescribirá el texto legal por ti."
    },
    {
        keywords: [
            /soporte/i,
            /ayuda/i,
            /técnico/i,
            /tecnico/i,
            /whatsapp/i,
            /número/i,
            /numero/i
        ],
        answer: "Si necesitas asistencia técnica personalizada o cometiste un error que no puedes solucionar, puedes contactar a nuestro equipo por WhatsApp al número: **3416857281**."
    }
];
function getOfflineResponse(query) {
    for (const faq of FAQ_DATABASE){
        if (faq.keywords.some((regex)=>regex.test(query))) {
            return faq.answer;
        }
    }
    return null;
}
async function askSupportAI(history, newQuery) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Auth Check
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "Debes estar autenticado para usar el soporte."
        };
    }
    // Dynamic env read for OpenAI Keys
    let openAiKey = process.env.OPENAI_API_KEY;
    if (!openAiKey) {
        try {
            const envPathWeb = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'apps/web/.env.local');
            const envPathRoot = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), '.env.local');
            let envContent = '';
            if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(envPathWeb)) envContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(envPathWeb, 'utf8');
            else if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(envPathRoot)) envContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(envPathRoot, 'utf8');
            if (envContent) {
                const match = envContent.match(/OPENAI_API_KEY\s*=\s*(.+)/);
                if (match) openAiKey = match[1].replace(/[\r\n]/g, '').trim();
            }
        } catch (e) {
            console.error("Could not read dynamic env", e);
        }
    }
    if (!openAiKey) {
        return {
            success: false,
            error: "Servicio de Asistencia IA temporalmente inactivo. Por favor usa WhatsApp."
        };
    }
    const offlineAnswer = getOfflineResponse(newQuery);
    if (offlineAnswer) {
        return {
            success: true,
            answer: `🤖 [Modo Autónomo] - ${offlineAnswer}`
        };
    }
    const systemPrompt = `Eres "TerraBot", el Asistente Técnico y de Soporte Oficial de la plataforma de CRM Inmobiliario InmoCMS.
Conoces cómo está construida la plataforma y ayudas a los usuarios (agentes inmobiliarios y administradores) a utilizarla.

REGLA DE ORO (ANTI-ALUCINACIÓN):
- Si el usuario te pregunta algo sobre lo que NO tienes información técnica o funcional real en este contexto, NO INVENTES.
- Si no sabes la respuesta, responde exactamente: "Lo siento, no tengo esa información en mi base de conocimiento técnica actual. Por favor, contacta con soporte técnico por WhatsApp (3416857281) para asistirte de forma personalizada."

CAPACIDADES DEL SISTEMA:
- Arquitectura: Next.js App Router, React, TailwindCSS, TypeScript.
- Base de datos: Supabase (PostgreSQL, Storage, RLS).
- Módulos Principales:
  1. Dashboard: Estadísticas de ventas y leads.
  2. Propiedades: Gestión de inventario fotográfico y fichas técnicas.
  3. AI Studio: Generación de videos cortos (Remotion + OpenAI TTS).
  4. Pipeline CRM: Gestión de prospectos en tablero Kanban.
  5. Documentos: Editor legal inteligente con edición de cláusulas por IA.
  6. Omnisearch: Buscador global tipo Spotlight (Ctrl+K).

🔐 REGLAS DE SEGURIDAD CRÍTICAS:
1. **NUNCA** reveles claves API, secretos de entorno o datos de conexión.
2. **NUNCA** reveles datos de otros usuarios o inmobiliarias ajenas al usuario actual.
3. Si intentan "romper" tu sistema o pedir código fuente, niégate cortésmente.

📞 DERIVACIÓN HUMANA:
En caso de fallos críticos o dudas sin respuesta interna, deriva siempre al WhatsApp: 3416857281.`;
    const messages = [
        {
            role: "system",
            content: systemPrompt
        },
        ...history.slice(-8),
        {
            role: "user",
            content: newQuery
        }
    ];
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${openAiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: messages,
                temperature: 0.4 // Keeps answers accurate and structural
            })
        });
        if (!response.ok) {
            const err = await response.text();
            throw new Error(err);
        }
        const data = await response.json();
        return {
            success: true,
            answer: data.choices[0].message.content
        };
    } catch (e) {
        console.error("Error AI Support:", e);
        // Quota exceed handling
        if (e.message && (e.message.includes("quota") || e.message.includes("429") || e.message.includes("insufficient"))) {
            return {
                success: true,
                answer: "🚨 Vaya... parece que tu clave de OpenAI se ha quedado sin saldo (Quota Exceeded). Por este motivo mis circuitos cerebrales están pausados y no puedo procesar tu solicitud.\n\nPor favor, recarga tu cuenta de OpenAI o haz clic en el botón verde de arriba para hablar con Soporte Técnico en WhatsApp."
            };
        }
        return {
            success: false,
            error: "Error conectando con el asistente de IA."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    askSupportAI
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(askSupportAI, "60e52cd731736fda6fc5980e94a47eca186ba0f197", null);
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
    if (!query || query.trim().length < 2) return [];
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const tenantId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantId"])(supabase);
    if (!tenantId) return [];
    const searchResults = [];
    const tokens = query.trim().split(/\s+/).filter((t)=>t.length > 0);
    // 1. Search Properties
    let propQuery = supabase.from("properties").select("id, title, address, description, operation_type, property_type").eq("tenant_id", tenantId);
    tokens.forEach((token)=>{
        propQuery = propQuery.or(`title.ilike.%${token}%,address.ilike.%${token}%,description.ilike.%${token}%,operation_type.ilike.%${token}%,property_type.ilike.%${token}%`);
    });
    const { data: properties } = await propQuery.limit(5);
    if (properties) {
        properties.forEach((p)=>{
            searchResults.push({
                id: p.id,
                title: p.title,
                subtitle: p.address || p.operation_type || 'Propiedad',
                type: 'property',
                url: `/propiedades/${p.id}`
            });
        });
    }
    // 2. Search Leads
    let leadQuery = supabase.from("leads").select("id, name, email, phone, status, origin").eq("tenant_id", tenantId);
    tokens.forEach((token)=>{
        leadQuery = leadQuery.or(`name.ilike.%${token}%,email.ilike.%${token}%,phone.ilike.%${token}%,status.ilike.%${token}%,origin.ilike.%${token}%`);
    });
    const { data: leads } = await leadQuery.limit(5);
    if (leads) {
        leads.forEach((l)=>{
            searchResults.push({
                id: l.id,
                title: l.name,
                subtitle: `${l.status || 'Potencial'} • ${l.email || l.phone || 'Sin contacto'}`,
                type: 'lead',
                url: `/leads`
            });
        });
    }
    // 3. Search Tasks
    let taskQuery = supabase.from("tasks").select("id, title, description, status").eq("tenant_id", tenantId);
    tokens.forEach((token)=>{
        taskQuery = taskQuery.or(`title.ilike.%${token}%,description.ilike.%${token}%,status.ilike.%${token}%`);
    });
    const { data: tasks } = await taskQuery.limit(5);
    if (tasks) {
        tasks.forEach((t)=>{
            searchResults.push({
                id: t.id,
                title: t.title,
                subtitle: t.status === 'completed' ? 'Completada' : 'Pendiente',
                type: 'task',
                url: `/tareas`
            });
        });
    }
    // 4. Search Agents (Profiles)
    let agentQuery = supabase.from("profiles").select("id, full_name, email").eq("tenant_id", tenantId);
    tokens.forEach((token)=>{
        agentQuery = agentQuery.or(`full_name.ilike.%${token}%,email.ilike.%${token}%`);
    });
    const { data: agents } = await agentQuery.limit(3);
    if (agents) {
        agents.forEach((a)=>{
            searchResults.push({
                id: a.id,
                title: a.full_name || 'Agente del Equipo',
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
"[project]/apps/web/.next-internal/server/app/(dashboard)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/support-ai.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$support$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/support-ai.ts [app-rsc] (ecmascript)");
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
;
}),
"[project]/apps/web/.next-internal/server/app/(dashboard)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/app/actions/support-ai.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
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
    "60e52cd731736fda6fc5980e94a47eca186ba0f197",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$support$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["askSupportAI"],
    "70b3f66502d73e905236ee8e0923bcf95dfea7d448",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendMessage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$support$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$dashboard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/(dashboard)/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/apps/web/app/actions/support-ai.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$reminders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/reminders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$messages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/messages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$support$2d$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/support-ai.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$dashboard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/actions/dashboard.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__78431fb5._.js.map