# Family Calculator Web

SPA en Vue 3 para estimar parentescos genéticos a partir de cM compartidos, datos del cromosoma X, segmentos y endogamia.

## Requisitos

- Node.js 18+
- Backend [`relationship-calculator-api`](https://github.com/mscanepa/relationship-calculator-api) (local o Render)

## Setup local

```bash
cp .env.example .env
npm install
npm run dev
```

La app queda en `http://localhost:3000`. Las llamadas a `/api/*` se proxean al backend configurado en `VITE_API_URL`.

## Variables de entorno

| Variable | Local | Producción (Pages) |
|----------|-------|---------------------|
| `VITE_API_URL` | `http://localhost:8000` | `https://relationship-calculator-api.onrender.com` |
| `VITE_API_VERSION` | `v1` | `v1` |

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción → `dist/` |
| `npm run preview` | Preview del build |
| `npm run deploy` | Build + deploy a Cloudflare (local) |

## Stack

Vue 3, Vite, Pinia, Naive UI, vue-i18n (ES / EN / PT).

---

## Deploy en Cloudflare (Workers + Static Assets)

Este proyecto usa **Cloudflare Workers con assets estáticos** (SPA Vue). No necesita código Worker — solo sirve el contenido de `dist/`.

### Archivos clave

- `wrangler.toml` — configura `./dist` como SPA
- `public/_headers` — headers de seguridad

### Configuración en el dashboard de Cloudflare

Al conectar el repo `family-calculator-web`, usá estos valores:

| Campo | Valor |
|-------|-------|
| Project name | `family-calculator-web` |
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |

### Variables de entorno (Production + Preview)

| Variable | Value |
|----------|-------|
| `VITE_API_URL` | `https://relationship-calculator-api.onrender.com` |
| `VITE_API_VERSION` | `v1` |
| `NODE_VERSION` | `20` |

> `VITE_*` se embeben en el build. Si las cambiás, redeployá.

### CORS en Render (obligatorio)

En Render → `relationship-calculator-api` → **Environment**:

```
CORS_ORIGINS=["https://familycalc.app","https://www.familycalc.app","https://family-calculator-web.<tu-subdominio>.workers.dev","http://localhost:3000"]
```

Reemplazá el subdominio por el que te asigne Cloudflare tras el primer deploy.

### Dominio custom

Workers & Pages → tu proyecto → **Settings → Domains & Routes** → agregar `familycalc.app`.

### Deploy local (opcional)

```bash
cp .env.production.example .env.production
npm run deploy
```

Requiere `npx wrangler login` previo.

---

## Deploy alternativo: Cloudflare Pages (Git)

Si preferís Pages clásico en lugar de Workers:

| Campo | Valor |
|-------|-------|
| Build command | `npm run build` |
| Build output | `dist` |

Sin `wrangler deploy`. Ver `public/_redirects` para SPA routing.
