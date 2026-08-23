function readFlag(name, fallback) {
  const raw = import.meta.env[name]
  if (raw === 'true' || raw === '1') return true
  if (raw === 'false' || raw === '0') return false
  return Boolean(fallback)
}

/** Barra de casos QA. En producción queda oculta salvo VITE_SHOW_QA=true. */
export const SHOW_QA = readFlag('VITE_SHOW_QA', import.meta.env.DEV)

/**
 * Selector Clásico / Empírico. Si está oculto, el motor queda fijo en classic.
 * En producción queda oculto salvo VITE_SHOW_ENGINE=true.
 */
export const SHOW_ENGINE_SELECTOR = readFlag('VITE_SHOW_ENGINE', import.meta.env.DEV)
