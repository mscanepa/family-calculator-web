export default {
  app: {
    title: 'Calculadora de Relações Familiares',
    subtitle: 'Analise o DNA compartilhado para determinar possíveis relações familiares',
    search: {
      title: 'Pessoa 1',
      name: 'Nome',
      example: 'Ex: Pedro Oliveira',
      gender: 'Gênero',
      age: 'Idade'
    },
    match: {
      title: 'Pessoa 2',
      name: 'Nome',
      example: 'Ex: Sofia Costa',
      gender: 'Gênero',
      age: 'Idade'
    },
    dna: {
      title: 'Dados de DNA',
      shared_cm: 'cM Compartilhados',
      advanced_options: 'Opções Avançadas',
      endogamy: {
        title: 'Nível de Endogamia',
        help: 'Ajuda',
        none: 'Sem endogamia (0%)',
        light: 'Leve (9%)',
        moderate: 'Moderada (17%)',
        high: 'Alta (23%)',
        very_high: 'Muito alta (29%)'
      },
      x_chromosome: {
        title: 'Coincidência X',
        cm: 'cM em X',
        options: {
          yes: 'Sim',
          no: 'Não',
          unknown: 'Desconhecido'
        }
      },
      segments: {
        count: 'Número de Segmentos',
        largest: 'Maior Segmento (cM)'
      }
    },
    actions: {
      calculate: 'Calcular',
      clear: 'Limpar'
    },
    results: {
      title: 'Resultados',
      empty: 'Digite os dados de DNA para ver resultados',
      relationship: 'Relação',
      average_cm: 'Média cM',
      cm_range: 'Faixa cM',
      dna_percentage: '% DNA',
      probability: 'Probabilidade',
      generations: {
        parent: 'pai/mãe',
        grandparent: 'avô/avó',
        great_grandparent: 'bisavô/bisavó',
        great_great_grandparent: 'trisavô/trisavó',
        great_great_great_grandparent: 'tetravô/tetravó',
        uncle: 'tio/tia',
        nephew: 'sobrinho/sobrinha',
        default: 'ancestral {level} gerações atrás'
      }
    }
  }
} 