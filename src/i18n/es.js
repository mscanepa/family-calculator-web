export default {
  app: {
    title: 'Calculadora de Relaciones Familiares',
    subtitle: 'Analiza el ADN compartido para determinar posibles relaciones familiares',
    search: {
      title: 'Persona 1',
      name: 'Nombre',
      example: 'Ej: Carlos Rodríguez',
      gender: 'Género',
      age: 'Edad'
    },
    match: {
      title: 'Persona 2',
      name: 'Nombre',
      example: 'Ej: Ana Martínez',
      gender: 'Género',
      age: 'Edad'
    },
    dna: {
      title: 'Datos de ADN',
      shared_cm: 'cM Compartidos',
      advanced_options: 'Opciones Avanzadas',
      endogamy: {
        title: 'Nivel de Endogamia',
        help: 'Ayuda',
        none: 'Sin endogamia (0%)',
        light: 'Ligera (9%)',
        moderate: 'Moderada (17%)',
        high: 'Alta (23%)',
        very_high: 'Muy alta (29%)'
      },
      x_chromosome: {
        title: 'Coincidencia X',
        cm: 'cM en X',
        options: {
          yes: 'Sí',
          no: 'No',
          unknown: 'Desconocido'
        }
      },
      segments: {
        count: 'Número de Segmentos',
        largest: 'Segmento Más Grande (cM)'
      }
    },
    actions: {
      calculate: 'Calcular',
      clear: 'Limpiar'
    },
    results: {
      title: 'Resultados',
      empty: 'Ingresa datos de ADN para ver resultados',
      relationship: 'Relación',
      average_cm: 'Promedio cM',
      cm_range: 'Rango cM',
      dna_percentage: '% ADN',
      probability: 'Probabilidad',
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