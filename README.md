# Family Calculator Web

SPA en Vue 3 para estimar parentescos genéticos a partir de cM compartidos, datos del cromosoma X, segmentos y endogamia.

## Requisitos

- Node.js 18+
- Backend [`relationship-calculator-api`](../relationship-calculator-api) corriendo en el puerto 8000

## Setup local

```bash
cp .env.example .env
npm install
npm run dev
```

La app queda en `http://localhost:3000`. Las llamadas a `/api/*` se proxean al backend configurado en `VITE_API_URL`.

## Variables de entorno

| Variable | Default | Uso |
|----------|---------|-----|
| `VITE_API_URL` | `http://localhost:8000` | URL del backend |
| `VITE_API_VERSION` | `v1` | Versión del API |

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción → `dist/` |
| `npm run preview` | Preview del build |

## Stack

Vue 3, Vite, Pinia, Naive UI, vue-i18n (ES / EN / PT).

## Deploy

Build estático (`npm run build`) servido desde cualquier hosting. Configurar el proxy reverso para que `/api` apunte al backend en producción, o desplegar frontend y backend en dominios con CORS habilitado.
