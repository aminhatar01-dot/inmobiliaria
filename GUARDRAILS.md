# GUARDRAILS.md - Reglas Técnicas Obligatorias

Este documento define las reglas de cumplimiento obligatorio para todos los agentes y desarrolladores que operen en este repositorio.

## 1. Seguridad y Multi-tenancy (CRÍTICO)
- **Aislamiento**: Todas las tablas de datos (excepto catálogos globales) DEBEN incluir una columna `tenant_id` de tipo `UUID`.
- **Sucursales**: Las tablas que dependan de una sucursal DEBEN incluir `branch_id`.
- **RLS (Row Level Security)**: 
    - El RLS DEBE estar habilitado en TODAS las tablas de Supabase.
    - Se DEBEN implementar policies que validen el `tenant_id` del usuario contra el de la fila.
    - No se permiten bypasses de seguridad en el backend sin justificación de arquitectura.

## 2. Bases de Datos y Migraciones
- **Migraciones**: Los cambios en el esquema se realizan exclusivamente a través de migraciones de Supabase.
- **Tipado**: Después de cada cambio en la base de datos, se deben regenerar los tipos de TypeScript.
- **Valores por Defecto**: La moneda por defecto es `USD`.

## 3. Código y Arquitectura
- **Commits**: Seguir el estándar Conventional Commits.
- **Ramas**: No commitear directamente a `main`. Usar `dev` para integración y ramas de feature para desarrollo.
- **Secretos**: Prohibido hardcodear secretos, API keys o tokens. Usar variables de entorno (`.env`).

## 4. Calidad y Validación
- **Linting**: No se permiten errores de ESLint en estados de integración (`dev`).
- **Build**: La aplicación debe compilar correctamente antes de cualquier merge a `dev`.
## 5. IA e Integraciones Externas (SEGURIDAD)
- **Mercado Pago**: El agente de IA tiene PROHIBIDO ejecutar cualquier tipo de pago, transferencia o devolución de dinero desde la cuenta de Mercado Pago por iniciativa propia o de forma automatizada. 
- **Autorización Humana**: Cualquier acción financiera que involucre movimiento de fondos REALES debe ser aprobada explícitamente por el usuario a través de un procedimiento manual externo a la IA.
- **Consultas**: El agente de IA solo está autorizado para realizar consultas (lectura) de estados de pagos y configuraciones, nunca para operaciones de escritura financiera.
