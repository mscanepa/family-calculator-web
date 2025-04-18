// File: src/utils/buildDetailedGeneTree.js

/**
 * Genera un árbol genealógico detallado para un parentesco dado
 * y resalta el camino desde el ancestro común hasta dos personas.
 *
 * @param {string} code         - Código de relación (p.ej. "2C").
 * @param {Object} genMap       - Mapeo de generación: { PC:1, FS:1, HS:1, GP:2, AU:2, '1C':2, GAU:3, '2C':3, ... }
 * @param {string} relationName - Nombre descriptivo (p.ej. "Primo segundo").
 * @param {string} name1        - Nombre del Buscador.
 * @param {string} name2        - Nombre de la Coincidencia.
 * @returns {Object} treeData   - Estructura jerárquica lista para TreeChart.vue.
 */
export default function buildDetailedGeneTree(code, genMap, relationName, name1, name2) {
    // Determinar cuántas generaciones hasta el ancestro
    const generations = genMap[code] || 0
  
    // Construye una ruta desde el ancestro (nivel 0) hasta la hoja (nivel generations)
    function makeBranch(prefix, personName) {
      // Empieza por la hoja
      let node = {
        id: `${prefix}_${generations}`,
        name: personName,
        children: []
      }
      // Anidar ancestros intermedios
      for (let level = generations - 1; level >= 0; level--) {
        node = {
          id: `${prefix}_${level}`,
          name: level === 0 ? `Ancestro común (${relationName})` : `Nivel ${level}`,
          children: [node]
        }
      }
      return node
    }
  
    // Raíz: ancestro común
    const root = makeBranch('root', '')
    // Reemplazar descripción en el nodo raíz
    root.name = relationName
  
    // Hojas: las dos personas en ramas distintas
    const branch1 = makeBranch('buscador', name1)
    const branch2 = makeBranch('coincidencia', name2)
  
    // Insertar las ramas bajo el ancestro común
    root.children = [branch1, branch2]
  
    return root
  }
  