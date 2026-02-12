# ISSUES_LOCAL.md - Registro de Problemas Detectados

Este archivo contiene el listado de errores, bugs y mejoras detectadas por el Supervisor.

| ID | Fecha | Prioridad | Descripción | Agente Responsable | Estado | Fix Commit |
|---|---|---|---|---|---|---|
| 001 | 2026-01-17 | P1 | Comando `git` no disponible en el entorno de ejecución. | DevOps / Bot | Abierto | - |
| 002 | 2026-01-17 | P0 | RLS habilitado pero sin políticas (`CREATE POLICY`) en migraciones. Riesgo de bloqueo total de acceso. | Supervisor / Tech Lead | Resuelto | `20260118000001` |
| 003 | 2026-01-18 | P2 | Tabla `property_media` sin `tenant_id`. | Supervisor / Tech Lead | Resuelto | `20260118000001` |
| 004 | 2026-01-18 | P3 | Inconsistencia de datos: UI `tareas` usa strings en español/MOCK mientras que DB usa tags técnicos (visita vs visit). | Agente Frontend | Resuelto | Ciclo 7 |
| 005 | 2026-01-18 | P2 | UI Leads/Pipeline 100% Mock -> Ahora usa Server Actions reales. | Agente Frontend | Resuelto | Ciclo 7 |
|- **[P1] [FIXED] Issue 006:** Discrepancia de Enums en formularios.
    - **Detalle:** Los formularios de UI envían strings ("Venta") mientras la DB espera enums ('sale').
    - **Solución:** Se estandarizaron los formularios de Propiedades y Leads para usar Enums compartidos de `@inmocms/shared`.
| 007 | 2026-01-18 | P2 | Navegación Global Mock: `AppSidebar` y `DashboardHeader` usan datos de usuario y notificaciones hardcodeadas. | Agente Frontend | Resuelto | Ciclo 7 |
| 008 | 2026-01-18 | P1 | Middleware Permisivo: No había redirección forzada a `/login`. | Tech Lead / DevOps | Resuelto | Ciclo 5 |
| 009 | 2026-01-18 | P0 | Fuga de Datos (Server Actions): `getLeads`/`getTasks` no filtran por `tenant_id`. | Backend Agent | Resuelto | Ciclo 4 |
| 010 | 2026-01-18 | P0 | Asignación de Tenant Aleatoria: `createLead`/`createTask` seleccionan primer `tenant_id`. | Backend Agent | Resuelto | Ciclo 4 |
| 011 | 2026-01-18 | P1 | Login 100% Mock: La página de login no usaba Supabase Auth. | Backend Agent | Resuelto | Ciclo 5 |
| 012 | 2026-01-18 | P1 | Redirección de Raíz Insegura -> ahora controlada por middleware. | Tech Lead | Resuelto | Ciclo 5 |
| 013 | 2026-01-18 | P2 | Discrepancia de Enums: UI usaba términos en español. | Agente Frontend | Resuelto | Ciclo 5 (shared enums) |
