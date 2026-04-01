"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"

export type SearchResult = {
    id: string
    title: string
    subtitle?: string
    type: 'property' | 'lead' | 'agent' | 'task'
    url: string
}

export async function globalSearch(query: string): Promise<SearchResult[]> {
    if (!query || query.trim().length < 2) return []

    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const searchResults: SearchResult[] = []
    const tokens = query.trim().split(/\s+/).filter(t => t.length > 0)

    // 1. Search Properties
    let propQuery = supabase.from("properties").select("id, title, address, description, operation_type, property_type").eq("tenant_id", tenantId)
    tokens.forEach(token => {
        propQuery = propQuery.or(`title.ilike.%${token}%,address.ilike.%${token}%,description.ilike.%${token}%,operation_type.ilike.%${token}%,property_type.ilike.%${token}%`)
    })
    const { data: properties } = await propQuery.limit(5)
    
    if (properties) {
        properties.forEach(p => {
            searchResults.push({
                id: p.id,
                title: p.title,
                subtitle: p.address || p.operation_type || 'Propiedad',
                type: 'property',
                url: `/propiedades/${p.id}`
            })
        })
    }

    // 2. Search Leads
    let leadQuery = supabase.from("leads").select("id, name, email, phone, status, origin").eq("tenant_id", tenantId)
    tokens.forEach(token => {
        leadQuery = leadQuery.or(`name.ilike.%${token}%,email.ilike.%${token}%,phone.ilike.%${token}%,status.ilike.%${token}%,origin.ilike.%${token}%`)
    })
    const { data: leads } = await leadQuery.limit(5)

    if (leads) {
        leads.forEach(l => {
            searchResults.push({
                id: l.id,
                title: l.name,
                subtitle: `${l.status || 'Potencial'} • ${l.email || l.phone || 'Sin contacto'}`,
                type: 'lead',
                url: `/leads`
            })
        })
    }

    // 3. Search Tasks
    let taskQuery = supabase.from("tasks").select("id, title, description, status").eq("tenant_id", tenantId)
    tokens.forEach(token => {
        taskQuery = taskQuery.or(`title.ilike.%${token}%,description.ilike.%${token}%,status.ilike.%${token}%`)
    })
    const { data: tasks } = await taskQuery.limit(5)

    if (tasks) {
        tasks.forEach(t => {
            searchResults.push({
                id: t.id,
                title: t.title,
                subtitle: t.status === 'completed' ? 'Completada' : 'Pendiente',
                type: 'task',
                url: `/tareas`
            })
        })
    }

    // 4. Search Agents (Profiles)
    let agentQuery = supabase.from("profiles").select("id, full_name, email").eq("tenant_id", tenantId)
    tokens.forEach(token => {
        agentQuery = agentQuery.or(`full_name.ilike.%${token}%,email.ilike.%${token}%`)
    })
    const { data: agents } = await agentQuery.limit(3)

    if (agents) {
        agents.forEach(a => {
            searchResults.push({
                id: a.id,
                title: a.full_name || 'Agente del Equipo',
                subtitle: a.email,
                type: 'agent',
                url: `/agentes`
            })
        })
    }

    return searchResults
}
