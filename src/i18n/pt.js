export default {
  app: {
    title: 'Calculadora de Relações Familiares',
    subtitle: 'Analise o DNA compartilhado para determinar possíveis relações familiares',
    search: {
      title: 'Pesquisador',
      name: 'Nome',
      example: 'Ex: Pedro Oliveira',
      gender: 'Gênero',
      age: 'Idade',
      placeholder: {
        name: 'Ex: João Silva'
      }
    },
    match: {
      title: 'Match',
      name: 'Nome',
      example: 'Ex: Maria Santos',
      gender: 'Gênero',
      age: 'Idade',
      placeholder: {
        name: 'Ex: Maria Santos'
      }
    },
    dna: {
      title: 'Dados de DNA',
      shared_cm: 'cM Compartilhados',
      advanced_options: 'Opções Avançadas',
      endogamy: {
        title: 'Nível de Endogamia',
        placeholder: 'Selecione o nível de endogamia',
        help: 'Ajuda',
        none: 'Sem endogamia (0%)',
        light: 'Leve (-9%)',
        moderate: 'Moderada (-17%)',
        high: 'Alta (-23%)',
        very_high: 'Muito alta (-29%)',
        tooltip: {
          intro: 'A endogamia ocorre quando há casamentos entre parentes na árvore genealógica. Isso afeta a quantidade de DNA compartilhado entre familiares.',
          levels: {
            title: 'Níveis de endogamia:',
            none: 'Famílias sem casamentos entre parentes próximos.',
            light: 'Alguns casamentos entre primos terceiros ou mais distantes.',
            moderate: 'Vários casamentos entre primos segundos ou terceiros.',
            high: 'Casamentos frequentes entre primos primeiros ou segundos.',
            very_high: 'Comunidades altamente endogâmicas com casamentos frequentes entre parentes próximos.'
          },
          effects: {
            title: 'Como afeta o cálculo?',
            adjust: 'Ajusta os cM compartilhados de acordo com o nível de endogamia',
            higher: 'Em famílias endogâmicas, os cM compartilhados tendem a ser mais altos',
            consider: 'Considera relações mais distantes como possíveis'
          },
          example: 'Por exemplo: Se dois primos primeiros compartilham 850 cM em uma família sem endogamia, em uma família com endogamia moderada eles poderiam compartilhar até 1020 cM (+20%).'
        }
      },
      x_chromosome: {
        title: 'Correspondência X',
        placeholder: 'Selecione se há correspondência X',
        cm: 'cM X',
        placeholder_cm: 'Digite os cM X',
        options: {
          yes: 'Sim',
          no: 'Não',
          unknown: 'Desconhecido'
        }
      },
      segments: {
        count: 'Número de Segmentos',
        placeholder_count: 'Ex: 5',
        largest: 'Maior Segmento (cM)',
        placeholder_largest: 'Ex: 20'
      },
      cm: {
        tooltip: {
          title: 'O que são centimorgans (cM)?',
          intro: 'Centimorgans (cM) indicam quanto DNA você compartilha com outra pessoa. Quanto maior o número de centimorgans, mais próxima geralmente é a relação familiar.',
          note: 'A aplicação usa este valor (cM) como dado principal para estimar qual parentesco duas pessoas podem ter.'
        }
      }
    },
    actions: {
      calculate: 'Calcular',
      clear: 'Limpar'
    },
    results: {
      title: 'Resultados',
      analysis_title: 'Relatório de Relacionamento',
      suggestions_title: 'Sugestões para Investigação',
      relationships_title: 'Lista de Relacionamentos Possíveis',
      empty_state: 'Os resultados aparecerão aqui depois que você preencher o formulário com os dados.',
      range_cm: 'Intervalo de cM',
      percentage_cases: 'Porcentagem de casos',
      histogram_explanation: 'Esta tabela mostra o quão comum é o valor de cM que você inseriu para diferentes tipos de relações. Por exemplo, se você inseriu 2342 cM e vê que 50% dos casos estão entre 2501-3000 cM, isso significa que seu valor está ligeiramente abaixo do intervalo mais comum para esta relação. Isso pode ajudá-lo a: 1) Confirmar se a relação sugerida é a mais provável, 2) Identificar se poderia haver endogamia (valores mais altos do esperado), ou 3) Considerar se há uma relação mais próxima ou mais distante que poderia explicar melhor o valor de cM.',
      empty: 'Digite os dados de DNA para ver os resultados',
      loading: 'Calculando possíveis relações...',
      ancestor: {
        title: 'Ancestral Comum Mais Provável',
        probability: 'Com base em {probability}% de probabilidade',
        x_inheritance: {
          maternal: 'Com base no cromossomo X, procure na linha materna da correspondência',
          female: 'Com base no cromossomo X, procure nas linhas femininas',
          exclude: 'Excluir linha materna da correspondência'
        }
      },
      average: 'Média',
      typical_range: 'Intervalo típico',
      relationship: 'Relação',
      average_cm: 'Média cM',
      cm_range: 'Faixa cM',
      segments: 'Segmentos',
      largest_segment: 'Maior Segmento',
      dna_percentage: 'Porcentagem de DNA',
      probability: 'Probabilidade',
      in_x: 'em X',
      consistent: 'Consistente',
      inconsistent: 'Inconsistente',
      match: 'correspondência',
      searcher: 'pesquisador',
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
    },
    relationships: {
      "PC": {
        "narrative": "Pai/Mãe",
        "description": "Pai ou mãe biológico"
      },
      "FS": {
        "narrative": "Irmãos",
        "description": "Compartilham ambos os pais"
      },
      "HS": {
        "narrative": "Meio-irmãos",
        "description": "Compartilham um dos pais"
      },
      "GP": {
        "narrative": "Avós",
        "description": "Pais dos seus pais"
      },
      "AU": {
        "narrative": "Tio/Tia",
        "description": "Irmãos dos seus pais"
      },
      "GAU": {
        "narrative": "Tio/Tia-avô/avó",
        "description": "Irmãos dos seus avós"
      },
      "GGAU": {
        "narrative": "Tio/Tia-bisavô/bisavó",
        "description": "Irmãos dos seus bisavós"
      },
      "1C": {
        "narrative": "Primos-irmãos",
        "description": "Filhos dos seus tios"
      },
      "H1C": {
        "narrative": "Meio-primos",
        "description": "Filhos dos seus meio-tios"
      },
      "1C1R": {
        "narrative": "Primo-irmão uma vez removido",
        "description": "Filho do seu primo-irmão ou primo-irmão do seu pai/mãe"
      },
      "1C2R": {
        "narrative": "Primo-irmão duas vezes removido",
        "description": "Neto do seu primo-irmão ou primo-irmão dos seus avós"
      },
      "2C": {
        "narrative": "Primos segundos",
        "description": "Filhos dos primos-irmãos dos seus pais"
      },
      "2C1R": {
        "narrative": "Primo segundo uma vez removido",
        "description": "Filho do seu primo segundo ou primo segundo do seu pai/mãe"
      },
      "H2C": {
        "narrative": "Meio-primo segundo",
        "description": "Filho do meio-primo-irmão dos seus pais"
      },
      "3C": {
        "narrative": "Primos terceiros",
        "description": "Filhos dos primos segundos dos seus pais"
      },
      "4C": {
        "narrative": "Primos quartos",
        "description": "Filhos dos primos terceiros dos seus pais"
      },
      "5C": {
        "narrative": "Primos quintos",
        "description": "Filhos dos primos quartos dos seus pais"
      },
      "6C": {
        "narrative": "Primos sextos",
        "description": "Filhos dos primos quintos dos seus pais"
      },
      "7C": {
        "narrative": "Primos sétimos",
        "description": "Filhos dos primos sextos dos seus pais"
      },
      "8C+": {
        "narrative": "Primos oitavos ou mais distantes",
        "description": "Mais distante que primos sétimos"
      }
    }
  }
} 