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
    testCases: {
      badge: 'QA',
      title: 'Casos de teste',
      placeholder: 'Escolha um cenário…',
      load: 'Carregar caso',
      loadAndCalculate: 'Carregar e calcular',
      validation: {
        pass: '✓ O algoritmo retornou {expected} como resultado principal ({probability}% de probabilidade).',
        fail: '✗ Esperado {expected}, mas o algoritmo retornou {actual} ({probability}%). O scoring não coincide com o caso de referência.',
        failRank: '✗ Esperado {expected} em primeiro lugar, mas o algoritmo retornou {actual} ({probability}%). {expected} ficou na posição #{rank}.',
      },
      groups: {
        real: 'Casos reais (projeto)',
        half: 'Meio parentesco e ambiguidade',
        segments: 'Mesmo cM, recombinação diferente',
      },
      cases: {
        javierSoledadFs: {
          label: 'Javier ↔ Soledad — irmãos completos (2730 cM)',
          note: 'Caso real do projeto (idades estimadas). {cm} cM, sem dados de segmentos no teste original. Coincidência no X: sim. Esperado: {expected}.',
        },
        sebastianAlejo1c: {
          label: 'Sebastian ↔ Alejo — primos 1.º (884.6 cM)',
          note: 'Caso real do projeto (idades estimadas). {cm} cM, {segments} segmentos, bloco {largest} cM. Sem X compartilhado. A idade descarta tio-avô. Esperado: {expected}.',
        },
        bettinaMariana2c: {
          label: 'Bettina ↔ Mariana — primas 2.º (286.3 cM)',
          note: 'Caso real do projeto (idades estimadas). {cm} cM, {segments} segmentos, bloco {largest} cM. Coincidência no X: sim. Esperado: {expected}.',
        },
        soledadElizabeth3c: {
          label: 'Soledad ↔ Elizabeth — primas 3.º (65.8 cM)',
          note: 'Caso real do projeto (idades estimadas). {cm} cM, {segments} segmentos, bloco {largest} cM. Sem X compartilhado. Esperado: {expected}.',
        },
        hsHalfSisters: {
          label: 'Meias-irmãs (1800 cM)',
          note: '{cm} cM, {segments} segmentos, bloco {largest} cM, idades próximas. A idade descarta avó/tia. Esperado: {expected}.',
        },
        h1cHalfFirst: {
          label: 'Meio-primo 1.º (435 cM)',
          note: '{cm} cM, {segments} segmentos, idades próximas. Sobrepõe com 1C1R; a idade discrimina. Esperado: {expected}.',
        },
        hsClear1550: {
          label: '1550 cM + idades próximas → meio-irmão/ã',
          note: '{cm} cM com {segments} segmentos e idades similares: DNA demais para primo 1.º e a idade descarta avô/tio. Esperado: {expected}.',
        },
        cousin1cClear1050: {
          label: '1050 cM + idades próximas → primo 1.º',
          note: '{cm} cM, {segments} segmentos: abaixo do mínimo de meio-irmão e dentro da faixa de primo 1.º. Esperado: {expected}.',
        },
        same1cConsolidated: {
          label: '884.6 cM — perfil original Sebastian/Alejo',
          note: 'Mesmos dados reais do caso Sebastian ↔ Alejo ({cm} cM, {segments} seg., bloco {largest} cM).',
        },
        same1cRecombined: {
          label: '884.6 cM — variante com alta recombinação',
          note: 'Mesmos {cm} cM do caso real mas {segments} segmentos e bloco máx. {largest} cM (sintético).',
        },
        same2cFewSegments: {
          label: '286.3 cM — poucos segmentos (variante 2C)',
          note: 'Mesmos {cm} cM de Bettina ↔ Mariana mas apenas {segments} segmentos e bloco {largest} cM (sintético).',
        },
        same2cManySegments: {
          label: '286.3 cM — muitos segmentos (variante 2C)',
          note: 'Mesmos {cm} cM de Bettina ↔ Mariana com {segments} segmentos e bloco {largest} cM (sintético).',
        },
      },
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