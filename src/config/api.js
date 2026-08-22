const DEFAULT_PRODUCTION_API_URL = 'https://relationship-calculator-api.onrender.com'
const DEFAULT_DEVELOPMENT_API_URL = 'http://localhost:8000'

export const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? DEFAULT_DEVELOPMENT_API_URL : DEFAULT_PRODUCTION_API_URL)

export const API_VERSION = import.meta.env.VITE_API_VERSION || 'v1'
