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
      groups: {
        simple: 'Parentescos claros',
        half: 'Medio parentesco y ambigüedad',
        segments: 'Mismo cM, distinta recombinación',
      },
      cases: {
        fsClassic: {
          label: 'Hermano/a completo — perfil típico (2730 cM)',
          note: '{cm} cM, {segments} segmentos, bloque máx. {largest} cM. Perfil de hermanos completos con bloques grandes. Esperado principal: {expected}.',
        },
        cousin1cTypical: {
          label: 'Primo 1.º — caso real (885 cM)',
          note: '{cm} cM, {segments} segmentos, bloque {largest} cM. Caso de referencia del proyecto. Esperado: {expected}.',
        },
        cousin2cTypical: {
          label: 'Primo 2.º — caso real (286 cM)',
          note: '{cm} cM, {segments} segmentos. Relación más lejana con menos ADN compartido. Esperado: {expected}.',
        },
        parentChild: {
          label: 'Padre/madre — hijo/a (3400 cM)',
          note: '{cm} cM con bloque muy grande ({largest} cM). Esperado: {expected}.',
        },
        hsTypical: {
          label: 'Medio hermano/a — perfil típico (1760 cM)',
          note: '{cm} cM, {segments} segmentos (menos que HS completos). Esperado: {expected}.',
        },
        h1cHalfFirst: {
          label: 'Medio primo 1.º (435 cM)',
          note: '{cm} cM, {segments} segmentos. Comparte la mitad del tramo de un primo completo. Esperado: {expected}.',
        },
        hsVs1cFewLarge: {
          label: 'Ambiguo 1300 cM — pocos segmentos grandes',
          note: 'Mismos {cm} cM pero solo {segments} segmentos y bloque {largest} cM → favorece medio hermano/a ({expected}).',
        },
        hsVs1cManySmall: {
          label: 'Ambiguo 1300 cM — muchos segmentos chicos',
          note: 'Mismos {cm} cM con {segments} segmentos y bloque {largest} cM → más recombinación, favorece primo ({expected}).',
        },
        same1cConsolidated: {
          label: '884 cM — bloques consolidados (1C)',
          note: '{cm} cM, {segments} seg., bloque {largest} cM. Patrón esperado de primo 1.º sin mucha fragmentación.',
        },
        same1cRecombined: {
          label: '884 cM — mucha recombinación (1C)',
          note: 'Mismos {cm} cM pero {segments} segmentos y bloque máx. {largest} cM. La recombinación partió el ADN en trozos más chicos.',
        },
        same2cFewSegments: {
          label: '230 cM — pocos segmentos (2C)',
          note: '{cm} cM, {segments} segmentos, bloque {largest} cM. Perfil más “consolidado” para primo 2.º.',
        },
        same2cManySegments: {
          label: '230 cM — muchos segmentos (2C)',
          note: 'Mismos {cm} cM con {segments} segmentos y bloque {largest} cM. Más eventos de recombinación entre generaciones.',
        },
        endogamyInflated1c: {
          label: '1020 cM con endogamia moderada',
          note: '{cm} cM aparentes (endogamia). Tras ajuste del backend debería acercarse a primo 1.º ({expected}). {segments} seg., bloque {largest} cM.',
        },
      },
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
    }
  }
} 