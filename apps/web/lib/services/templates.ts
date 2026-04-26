/**
 * Template Variable Replacement System
 * 
 * Reemplaza variables de plantilla en mensajes de texto.
 * Las variables usan el formato {variable_name}.
 * 
 * Variables soportadas:
 * - {nombre}      → Nombre del lead o agente destinatario
 * - {propiedad}   → Título de la propiedad
 * - {direccion}   → Dirección de la propiedad
 * - {precio}      → Precio de la propiedad
 * - {fecha}       → Fecha del evento (visita, tarea, etc.)
 * - {hora}        → Hora del evento
 * - {agente}      → Nombre del agente inmobiliario
 * - {inmobiliaria} → Nombre de la inmobiliaria/tenant
 * - {telefono}    → Teléfono del contacto
 * - {email}       → Email del contacto
 */

export interface TemplateVariables {
    nombre?: string;
    propiedad?: string;
    direccion?: string;
    precio?: string;
    fecha?: string;
    hora?: string;
    agente?: string;
    inmobiliaria?: string;
    telefono?: string;
    email?: string;
    [key: string]: string | undefined;
}

/**
 * Reemplaza todas las variables {variable} en un template con sus valores reales.
 * Las variables no encontradas se dejan tal cual si keepUnresolved=true,
 * o se reemplazan por vacío si keepUnresolved=false.
 * 
 * @param template Texto con variables tipo {nombre}, {propiedad}, etc.
 * @param variables Objeto con los valores reales de cada variable
 * @param keepUnresolved Si true, deja las variables sin valor como están. Si false, las elimina.
 * @returns Texto con las variables reemplazadas
 * 
 * @example
 * replaceTemplateVariables(
 *   "Hola {nombre}, tu visita a {propiedad} es el {fecha} a las {hora}",
 *   { nombre: "Juan", propiedad: "Depto en Palermo", fecha: "15/03", hora: "14:00" }
 * )
 * // → "Hola Juan, tu visita a Depto en Palermo es el 15/03 a las 14:00"
 */
export function replaceTemplateVariables(
    template: string,
    variables: TemplateVariables,
    keepUnresolved: boolean = false
): string {
    if (!template) return '';

    return template.replace(/\{(\w+)\}/g, (match, varName) => {
        const value = variables[varName.toLowerCase()];
        if (value !== undefined && value !== null && value !== '') {
            return value;
        }
        return keepUnresolved ? match : '';
    });
}

/**
 * Construye las variables de template a partir de datos de una visita.
 */
export function buildVisitTemplateVars(params: {
    leadName?: string;
    leadPhone?: string;
    leadEmail?: string;
    propertyTitle?: string;
    propertyAddress?: string;
    propertyPrice?: string;
    agentName?: string;
    tenantName?: string;
    scheduledDate?: string;
    scheduledTime?: string;
}): TemplateVariables {
    return {
        nombre: params.leadName || '',
        propiedad: params.propertyTitle || '',
        direccion: params.propertyAddress || '',
        precio: params.propertyPrice || '',
        fecha: params.scheduledDate || '',
        hora: params.scheduledTime || '',
        agente: params.agentName || '',
        inmobiliaria: params.tenantName || '',
        telefono: params.leadPhone || '',
        email: params.leadEmail || '',
    };
}

/**
 * Construye las variables de template a partir de datos de una tarea.
 */
export function buildTaskTemplateVars(params: {
    agentName?: string;
    taskTitle?: string;
    dueDate?: string;
    dueTime?: string;
    tenantName?: string;
}): TemplateVariables {
    return {
        nombre: params.agentName || '',
        propiedad: params.taskTitle || '', // Reutilizamos {propiedad} como título de tarea
        fecha: params.dueDate || '',
        hora: params.dueTime || '',
        inmobiliaria: params.tenantName || '',
    };
}
