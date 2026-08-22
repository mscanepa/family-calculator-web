export default {
  app: {
    title: 'Family Calc - Calculadora de Relaciones Familiares',
    subtitle: 'Analiza el ADN compartido para determinar posibles relaciones familiares',
    search: {
      title: 'Buscador',
      name: 'Nombre',
      example: 'Ex: Carlos Rodríguez',
      gender: 'Género',
      age: 'Edad',
      placeholder: {
        name: 'Ej: Juan Pérez'
      }
    },
    match: {
      title: 'Match',
      name: 'Nombre',
      example: 'Ex: Ana Martínez',
      gender: 'Género',
      age: 'Edad',
      placeholder: {
        name: 'Ej: Ana Martínez'
      }
    },
    dna: {
      title: 'Datos de ADN',
      shared_cm: 'cM Compartidos',
      advanced_options: 'Opciones Avanzadas',
      endogamy: {
        title: 'Nivel de Endogamia',
        placeholder: 'Seleccioná el nivel de endogamia',
        help: 'Ayuda',
        none: 'Sin endogamia (0%)',
        light: 'Ligera (-9%)',
        moderate: 'Moderada (-17%)',
        high: 'Alta (-23%)',
        very_high: 'Muy alta (-29%)',
        tooltip: {
          intro: 'La endogamia ocurre cuando hay matrimonios entre parientes en el árbol genealógico. Esto afecta la cantidad de ADN compartido entre familiares.',
          levels: {
            title: 'Niveles de endogamia:',
            none: 'Familias sin matrimonios entre parientes cercanos.',
            light: 'Algunos matrimonios entre primos terceros o más lejanos.',
            moderate: 'Varios matrimonios entre primos segundos o terceros.',
            high: 'Matrimonios frecuentes entre primos hermanos o segundos.',
            very_high: 'Comunidades muy endogámicas con matrimonios frecuentes entre parientes cercanos.'
          },
          effects: {
            title: '¿Cómo afecta al cálculo?',
            adjust: 'Ajusta los cM compartidos según el nivel de endogamia',
            higher: 'En familias endogámicas, los cM compartidos suelen ser más altos',
            consider: 'Considera relaciones más lejanas como posibles'
          },
          example: 'Por ejemplo: Si dos primos hermanos comparten 850 cM en una familia sin endogamia, en una familia con endogamia moderada podrían compartir hasta 1020 cM (+20%).'
        }
      },
      x_chromosome: {
        title: 'Coincidencia en X',
        placeholder: 'Seleccioná si hay coincidencia en X',
        cm: 'cM en X',
        placeholder_cm: 'Ingresá los cM en X',
        options: {
          yes: 'Sí',
          no: 'No',
          unknown: 'No sé'
        }
      },
      segments: {
        count: 'Número de Segmentos',
        placeholder_count: 'Ej: 5',
        largest: 'Segmento Más Grande (cM)',
        placeholder_largest: 'Ej: 20'
      },
      cm: {
        tooltip: {
          title: '¿Qué son los centimorgans (cM)?',
          intro: 'Los centimorgans (cM) indican cuánto ADN compartís con otra persona. Cuanto mayor es el número de centimorgans, más cercana suele ser la relación familiar.',
          note: 'La aplicación usa este valor (cM) como dato principal para estimar qué parentesco podrían tener dos personas.'
        }
      }
    },
    actions: {
      calculate: 'Calcular',
      clear: 'Limpiar'
    },
    testCases: {
      badge: 'QA',
      title: 'Casos de prueba',
      placeholder: 'Elegí un escenario…',
      load: 'Cargar caso',
      loadAndCalculate: 'Cargar y calcular',
      validation: {
        pass: '✓ El algoritmo devolvió {expected} como resultado principal ({probability}% de probabilidad).',
        fail: '✗ Se esperaba {expected}, pero el algoritmo devolvió {actual} ({probability}%). El scoring no coincide con el caso de referencia.',
        failRank: '✗ Se esperaba {expected} en primer lugar, pero el algoritmo devolvió {actual} ({probability}%). {expected} quedó en la posición #{rank}.',
      },
      groups: {
        real: 'Casos reales (proyecto)',
        half: 'Medio parentesco y ambigüedad',
        segments: 'Mismo cM, distinta recombinación',
      },
      cases: {
        javierSoledadFs: {
          label: 'Javier ↔ Soledad — hermanos completos (2730 cM)',
          note: 'Caso real del proyecto (edades estimadas). {cm} cM, sin datos de segmentos en el test original. Coincidencia en X: sí. Esperado: {expected}.',
        },
        sebastianAlejo1c: {
          label: 'Sebastian ↔ Alejo — primos hermanos (884.6 cM)',
          note: 'Caso real del proyecto (edades estimadas). {cm} cM, {segments} segmentos, bloque {largest} cM. Sin X compartido. La edad descarta tío abuelo. Esperado: {expected}.',
        },
        bettinaMariana2c: {
          label: 'Bettina ↔ Mariana — primas segundas (286.3 cM)',
          note: 'Caso real del proyecto (edades estimadas). {cm} cM, {segments} segmentos, bloque {largest} cM. Coincidencia en X: sí. Esperado: {expected}.',
        },
        soledadElizabeth3c: {
          label: 'Soledad ↔ Elizabeth — primas terceras (65.8 cM)',
          note: 'Caso real del proyecto (edades estimadas). {cm} cM, {segments} segmentos, bloque {largest} cM. Sin X compartido. Esperado: {expected}.',
        },
        hsHalfSisters: {
          label: 'Medias hermanas (1800 cM)',
          note: '{cm} cM, {segments} segmentos, bloque {largest} cM, edades cercanas. La edad descarta abuela/tía. Esperado: {expected}.',
        },
        h1cHalfFirst: {
          label: 'Medio primo 1.º (435 cM)',
          note: '{cm} cM, {segments} segmentos, edades cercanas. Solapa con 1C1R y tío bisabuelo; la edad discrimina. Esperado: {expected}.',
        },
        hsClear1550: {
          label: '1550 cM + edades cercanas → medio hermano/a',
          note: '{cm} cM con {segments} segmentos y edades similares: demasiado ADN para primo 1.º y la edad descarta abuelo/tío. Esperado: {expected}.',
        },
        cousin1cClear1050: {
          label: '1050 cM + edades cercanas → primo 1.º',
          note: '{cm} cM, {segments} segmentos: por debajo del mínimo de medio hermano/a y dentro del rango de primo 1.º. Esperado: {expected}.',
        },
        same1cConsolidated: {
          label: '884.6 cM — perfil original Sebastian/Alejo',
          note: 'Mismos datos reales del caso Sebastian ↔ Alejo ({cm} cM, {segments} seg., bloque {largest} cM).',
        },
        same1cRecombined: {
          label: '884.6 cM — variante con mucha recombinación',
          note: 'Mismos {cm} cM del caso real pero {segments} segmentos y bloque máx. {largest} cM (sintético).',
        },
        same2cFewSegments: {
          label: '286.3 cM — pocos segmentos (variante 2C)',
          note: 'Mismos {cm} cM de Bettina ↔ Mariana pero solo {segments} segmentos y bloque {largest} cM (sintético).',
        },
        same2cManySegments: {
          label: '286.3 cM — muchos segmentos (variante 2C)',
          note: 'Mismos {cm} cM de Bettina ↔ Mariana con {segments} segmentos y bloque {largest} cM (sintético).',
        },
      },
    },
    methodology: {
      link: 'Cómo funciona',
      title: 'Qué hace la app por detrás',
      intro: 'La app no adivina: compara los datos que ingresás con las distribuciones estadísticas publicadas de ADN compartido para cada parentesco (Shared cM Project, Blaine Bettinger) y calcula qué tan compatible es tu observación con cada hipótesis. El resultado es un ranking de probabilidades que suman 100%.',
      steps: {
        endogamy: {
          title: '1. Ajuste por endogamia',
          text: 'Si indicaste endogamia, los cM se deflactan según el nivel elegido antes de comparar, porque las familias endogámicas comparten más ADN del esperado para su parentesco real.',
        },
        likelihood: {
          title: '2. Verosimilitud de los cM',
          text: 'Para cada uno de los 20 parentescos del catálogo se evalúa qué tan típico es tu total de cM respecto de su distribución publicada, centrada en el promedio del Shared cM Project. Un valor fuera del rango publicado penaliza fuerte a esa hipótesis (sin eliminarla del todo).',
        },
        evidence: {
          title: '3. Evidencia adicional',
          text: 'El puntaje se ajusta multiplicando factores: número de segmentos y bloque más grande (donde existen rangos confiables), coincidencia en cromosoma X (una coincidencia genéticamente imposible elimina la hipótesis) y diferencia de edad (fuera del rango típico del parentesco penaliza gradualmente).',
        },
        normalization: {
          title: '4. Normalización',
          text: 'Las puntuaciones se normalizan para que sumen 100%: el porcentaje que ves es la probabilidad relativa de cada parentesco frente a los demás, dado exactamente lo que ingresaste. Se omiten las hipótesis con menos de 1%.',
        },
      },
      formulaTitle: 'El modelo en una línea',
      formulaNote: 'Cada relación recibe la verosimilitud de tus cM multiplicada por los factores de evidencia; después todo se normaliza.',
      limitationsTitle: 'Limitaciones (a propósito, para ser honestos)',
      limitations: {
        overlap: 'Varios parentescos tienen distribuciones casi idénticas (abuelo/a, tío/a y medio hermano/a rondan los 1750 cM): con solo cM son indistinguibles. Las edades y el cromosoma X son lo que ayuda a separarlos.',
        dependence: 'El total de cM, la cantidad de segmentos y el bloque más grande no son medidas independientes entre sí, por eso la evidencia secundaria se pondera de forma conservadora.',
        xCaveat: 'La ausencia de coincidencia en X no descarta líneas: el X puede perderse por recombinación aun cuando el parentesco exista.',
      },
      openSource: 'El modelo completo está documentado en el repositorio (código abierto) y podés validarlo con los casos de prueba de la barra QA.',
    },
    results: {
      title: 'Resultados',
      analysis_title: 'Informe de Relación',
      suggestions_title: 'Sugerencias para Investigar',
      relationships_title: 'Lista de Relaciones Posibles',
      empty_state: 'Aquí aparecerán los resultados una vez que completes el formulario con los datos.',
      relationship: 'Relación',
      average_cm: 'Promedio cM',
      cm_range: 'Rango cM',
      dna_percentage: 'Porcentaje ADN',
      probability: 'Probabilidad',
      match: 'coincidencia',
      searcher: 'buscador',
      generations: {
        parent: 'padre/madre',
        grandparent: 'abuelo/abuela',
        great_grandparent: 'bisabuelo/bisabuela',
        great_great_grandparent: 'tatarabuelo/tatarabuela',
        great_great_great_grandparent: 'tatarabuelo/tatarabuela',
        uncle: 'tío/tía',
        nephew: 'sobrino/sobrina',
        default: 'ancestro {level} generaciones atrás'
      }
    },
    relationships: {
      PC: {
        narrative: 'Padre/Madre',
        description: 'Padre o madre biológico',
      },
      FS: {
        narrative: 'Hermano/a completo',
        description: 'Comparten ambos progenitores',
      },
      HS: {
        narrative: 'Medio hermano/a',
        description: 'Comparten un progenitor',
      },
      GP: {
        narrative: 'Abuelo/a – Nieto/a',
        description: 'Padres de tus padres',
      },
      AU: {
        narrative: 'Tío/a – Sobrino/a',
        description: 'Hermanos de tus padres',
      },
      GAU: {
        narrative: 'Tío/a abuelo/a – Sobrino nieto/a',
        description: 'Hermanos de tus abuelos',
      },
      GGAU: {
        narrative: 'Tío/a bisabuelo/a – Sobrino bisnieto/a',
        description: 'Hermanos de tus bisabuelos',
      },
      '1C': {
        narrative: 'Primo/a hermano/a',
        description: 'Hijos de tus tíos',
      },
      H1C: {
        narrative: 'Medio primo/a hermano/a',
        description: 'Hijos de tus medios tíos',
      },
      '1C1R': {
        narrative: 'Primo/a hermano/a una vez removido/a',
        description: 'Hijo/a de tu primo hermano o primo hermano de tu padre/madre',
      },
      '1C2R': {
        narrative: 'Primo/a hermano/a dos veces removido/a',
        description: 'Nieto/a de tu primo hermano o primo hermano de tus abuelos',
      },
      '2C': {
        narrative: 'Primo/a segundo/a',
        description: 'Hijos de los primos hermanos de tus padres',
      },
      '2C1R': {
        narrative: 'Primo/a segundo/a una vez removido/a',
        description: 'Hijo/a de tu primo segundo o primo segundo de tu padre/madre',
      },
      H2C: {
        narrative: 'Medio primo/a segundo/a',
        description: 'Hijo/a del medio primo hermano de tus padres',
      },
      '3C': {
        narrative: 'Primo/a tercero/a',
        description: 'Hijos de los primos segundos de tus padres',
      },
      '4C': {
        narrative: 'Primo/a cuarto/a',
        description: 'Hijos de los primos terceros de tus padres',
      },
      '5C': {
        narrative: 'Primo/a quinto/a',
        description: 'Hijos de los primos cuartos de tus padres',
      },
      '6C': {
        narrative: 'Primo/a sexto/a',
        description: 'Hijos de los primos quintos de tus padres',
      },
      '7C': {
        narrative: 'Primo/a séptimo/a',
        description: 'Hijos de los primos sextos de tus padres',
      },
      '8C+': {
        narrative: 'Primo/a octavo/a o más distante',
        description: 'Relación más lejana que primos séptimos',
      },
    },
  },
} 