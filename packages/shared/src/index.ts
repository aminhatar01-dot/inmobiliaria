export const APP_NAME = "InmoCMS";

export type Tenant = {
    id: string;
    name: string;
    plan: string;
    default_currency: string;
};

export type Property = {
    id: string;
    tenant_id: string;
    branch_id?: string;
    title: string;
    operation_type: 'sale' | 'rent' | 'temporary_rent';
    property_type: string;
    price: number;
    currency: string;
    address: string;
    description?: string;
    status: string;
    owner_id?: string;
    surface_total?: number;
    surface_covered?: number;
    rooms?: number;
    bedrooms?: number;
    bathrooms?: number;
    is_shared?: boolean;
    created_at: string;
    updated_at?: string;
};


export type Lead = {
    id: string;
    tenant_id: string;
    name: string;
    email?: string;
    phone?: string;
    status: string;
    scoring: number;
    interest_type?: string;
    source?: string;
    budget?: number;
    assigned_to?: string;
    created_at: string;
};

export type Task = {
    id: string;
    tenant_id: string;
    title: string;
    description?: string;
    due_date?: string;
    status: 'pending' | 'completed' | 'cancelled';
    category?: string;
    priority: 'low' | 'medium' | 'high' | 'critical';
    property_id?: string;
    lead_id?: string;
    assigned_to: string;
};

export type Contract = {
    id: string;
    tenant_id: string;
    title: string;
    type: 'reservation' | 'rental' | 'sale' | 'other';
    status: 'draft' | 'generated' | 'signed' | 'archived';
    file_url?: string;
    property_id?: string;
    lead_id?: string;
    content?: string;
    created_at: string;
    updated_at: string;
};

export type Campaign = {
    id: string;
    tenant_id: string;
    name: string;
    type: 'email' | 'social_media' | 'sms' | 'whatsapp';
    status: 'draft' | 'scheduled' | 'active' | 'completed' | 'paused';
    content?: Record<string, any>; // JSON content
    target_audience?: Record<string, any>; // JSON filters
    scheduled_at?: string;
    created_at: string;
    updated_at: string;
};

export type CampaignExecution = {
    id: string;
    campaign_id: string;
    lead_id?: string;
    status: 'pending' | 'sent' | 'delivered' | 'failed' | 'opened' | 'clicked';
    sent_at?: string;
    metadata?: Record<string, any>;
    created_at: string;
};

export type AutomationRule = {
    id: string;
    tenant_id: string;
    name: string;
    trigger_type: 'lead_status_change' | 'lead_created' | 'visit_scheduled' | 'property_status_change';
    trigger_condition?: Record<string, any>;
    action_type: 'send_email' | 'create_task' | 'send_notification' | 'update_lead_field';
    action_config?: Record<string, any>;
    is_active: boolean;
    created_at: string;
    updated_at: string;
};


// Domain Enums - Must match Postgres CHECK constraints
export const OPERATION_TYPES = {
    sale: 'sale',
    rent: 'rent',
    temporary_rent: 'temporary_rent',
} as const;

export const OPERATION_TYPE_LABELS: Record<keyof typeof OPERATION_TYPES, string> = {
    sale: 'Venta',
    rent: 'Alquiler',
    temporary_rent: 'Temporal',
};

export const PROPERTY_STATUSES = {
    available: 'available',
    reserved: 'reserved',
    sold: 'sold',
    rented: 'rented',
} as const;

export const PROPERTY_STATUS_LABELS: Record<keyof typeof PROPERTY_STATUSES, string> = {
    available: 'Disponible',
    reserved: 'Reservada',
    sold: 'Vendida',
    rented: 'Alquilada',
};

export const LEAD_STATUSES = {
    new: 'new',
    contacted: 'contacted',
    visit_scheduled: 'visit_scheduled',
    offer: 'offer',
    closing: 'closing',
    lost: 'lost',
} as const;

export const LEAD_STATUS_LABELS: Record<keyof typeof LEAD_STATUSES, string> = {
    new: 'Nuevo',
    contacted: 'Contactado',
    visit_scheduled: 'Visita',
    offer: 'Oferta',
    closing: 'Cierre',
    lost: 'Perdido',
};

export const TASK_PRIORITIES = {
    low: 'low',
    medium: 'medium',
    high: 'high',
    critical: 'critical',
} as const;

export const TASK_PRIORITY_LABELS: Record<keyof typeof TASK_PRIORITIES, string> = {
    low: 'Baja',
    medium: 'Media',
    high: 'Alta',
    critical: 'Crítica',
};

export const PROPERTY_TYPES = {
    apartment: 'departamento',
    house: 'casa',
    ph: 'ph',
    commercial: 'local',
    office: 'oficina',
    land: 'terreno',
} as const;

export const PROPERTY_TYPE_LABELS: Record<keyof typeof PROPERTY_TYPES, string> = {
    apartment: 'Departamento',
    house: 'Casa',
    ph: 'PH',
    commercial: 'Local Comercial',
    office: 'Oficina',
    land: 'Terreno',
};

export const CURRENCIES = {
    USD: 'USD',
    ARS: 'ARS',
} as const;

export const INTEREST_TYPES = {
    buy: 'buy',
    rent: 'rent',
    temporary_rent: 'temporary_rent',
} as const;

export const INTEREST_TYPE_LABELS: Record<keyof typeof INTEREST_TYPES, string> = {
    buy: 'Compra',
    rent: 'Alquiler',
    temporary_rent: 'Temporal',
};

export const LEAD_SOURCES = {
    website: 'website',
    portal: 'portal',
    referral: 'referral',
    walk_in: 'walk_in',
    social_media: 'social_media',
    other: 'other',
} as const;

export const LEAD_SOURCE_LABELS: Record<keyof typeof LEAD_SOURCES, string> = {
    website: 'Sitio Web',
    portal: 'Portal',
    referral: 'Referido',
    walk_in: 'Presencial',
    social_media: 'Redes Sociales',
    other: 'Otro',
};

export type Visit = {
    id: string;
    tenant_id: string;
    lead_id: string;
    property_id: string;
    agent_id?: string;
    scheduled_at: string;
    status: 'scheduled' | 'completed' | 'cancelled' | 'no_show';
    notes?: string;
    created_at: string;
    updated_at?: string;
};

export const VISIT_STATUSES = {
    scheduled: 'scheduled',
    completed: 'completed',
    cancelled: 'cancelled',
    no_show: 'no_show',
} as const;

export const VISIT_STATUS_LABELS: Record<keyof typeof VISIT_STATUSES, string> = {
    scheduled: 'Programada',
    completed: 'Completada',
    cancelled: 'Cancelada',
    no_show: 'No asistió',
};

// Profile type (for messaging participants)
export type Profile = {
    id: string;
    email: string;
    full_name?: string;
    avatar_url?: string;
};

export type PortalConnection = {
    id: string;
    tenant_id: string;
    portal_name: 'mercadolibre' | 'argenprop' | 'zonaprop';
    account_email?: string;
    status: 'connected' | 'disconnected' | 'error' | 'expired';
    credentials?: Record<string, any>;
    last_sync_at?: string;
    created_at: string;
    updated_at: string;
};

export type PropertyPublication = {
    id: string;
    tenant_id: string;
    property_id: string;
    portal_connection_id: string;
    external_id?: string;
    external_url?: string;
    status: 'pending' | 'published' | 'error' | 'withdrawn';
    error_message?: string;
    last_published_at?: string;
    created_at: string;
    updated_at: string;
};

export type PipelineStage = {
    id: string;
    tenant_id: string;
    name: string;
    order: number;
    created_at: string;
};

export type PipelineLead = {
    id: string;
    tenant_id: string;
    lead_id: string;
    stage_id: string;
    updated_at: string;
};

export const PORTAL_NAMES = {
    mercadolibre: 'mercadolibre',
    argenprop: 'argenprop',
    zonaprop: 'zonaprop',
} as const;

export const PORTAL_LABELS: Record<keyof typeof PORTAL_NAMES, string> = {
    mercadolibre: 'MercadoLibre',
    argenprop: 'Argenprop',
    zonaprop: 'Zonaprop',
};

// Export messaging types
export * from './messaging';
