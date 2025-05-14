export default {
  app: {
    title: 'Calculadora de Relaciones Familiares',
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