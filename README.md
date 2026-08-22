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

## Stack

Vue 3, Vite, Pinia, Naive UI, vue-i18n (ES / EN / PT).

---

## Deploy en Cloudflare Pages

### 1. Crear el proyecto

1. Entrá a [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create**
2. Elegí **Pages** → **Connect to Git**
3. Conectá el repo `mscanepa/family-calculator-web`
4. Configuración de build:

| Campo | Valor |
|-------|-------|
| Production branch | `main` |
| Framework preset | `Vite` (o None) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(vacío)* |

### 2. Variables de entorno (obligatorio)

En **Settings → Environment variables → Production**:

| Variable | Value |
|----------|-------|
| `VITE_API_URL` | `https://relationship-calculator-api.onrender.com` |
| `VITE_API_VERSION` | `v1` |
| `NODE_VERSION` | `20` |

> Las variables `VITE_*` se embeben en el build. Si las cambiás, hay que **redeployar**.

### 3. CORS en Render (obligatorio)

En el dashboard de Render → `relationship-calculator-api` → **Environment**, seteá:

```
CORS_ORIGINS=["https://familycalc.app","https://www.familycalc.app","https://<tu-proyecto>.pages.dev","http://localhost:3000"]
```

Reemplazá `<tu-proyecto>` por el subdominio que te asigne Cloudflare (ej. `family-calculator-web.pages.dev`).

### 4. Dominio custom (familycalc.app)

1. En Pages → tu proyecto → **Custom domains** → **Set up a custom domain**
2. Agregá `familycalc.app` y `www.familycalc.app`
3. Si el dominio ya está en Cloudflare, el DNS se configura solo
4. Actualizá `CORS_ORIGINS` en Render incluyendo esos dominios

### 5. Verificar deploy

1. Abrí la URL de Pages (ej. `https://family-calculator-web.pages.dev`)
2. Ingresá cM (ej. `884`) y calculá
3. Si ves error CORS en la consola del browser → revisá `CORS_ORIGINS` en Render

---

## Arquitectura en producción

```
Usuario
  ↓
familycalc.app (Cloudflare Pages — Vue static)
  ↓  fetch directo
relationship-calculator-api.onrender.com (FastAPI)
```

---

## Deploy manual (alternativa)

```bash
npm run build
npx wrangler pages deploy dist --project-name=family-calculator-web
```

Requiere `npx wrangler login` previo.
