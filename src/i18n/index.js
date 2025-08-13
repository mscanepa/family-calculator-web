import { createI18n } from 'vue-i18n'
import en from './en'
import es from './es'
import pt from './pt'

const messages = {
  en: {
    app: {
      title: 'Family Calc - cM Relationship Calculator',
      subtitle: 'Analyze shared DNA to determine possible family relationships',
      search: {
        title: 'Searcher',
        name: 'Name',
        gender: 'Gender',
        age: 'Age',
        example: 'Ex: James Wilson'
      },
      match: {
        title: 'Match',
        name: 'Name',
        gender: 'Gender',
        age: 'Age',
        example: 'Ex: Sarah Thompson'
      },
      dna: {
        title: 'DNA',
        shared_cm: 'Shared cM',
        advanced_options: 'Show advanced options',
        endogamy: {
          title: 'Endogamy Level',
          help: 'Help',
          none: 'No endogamy (0%)',
          light: 'Light endogamy (-9%)',
          moderate: 'Moderate endogamy (-17%)',
          high: 'High endogamy (-23%)',
          very_high: 'Very high endogamy (-29%)'
        },
        x_chromosome: {
          title: 'X Chromosome Match',
          options: {
            yes: 'Yes',
            no: 'No',
            unknown: 'Unknown'
          },
          cm: 'X cM'
        },
        segments: {
          count: 'Number of segments',
          largest: 'Largest segment (cM)'
        }
      },
      actions: {
        calculate: 'Calculate',
        clear: 'Clear'
      },
      results: {
        title: 'Results',
        range_cm: 'Range of cM',
        percentage_cases: 'Percentage of cases',
        histogram_explanation: 'Esta tabla te muestra qué tan común es el valor de cM que has ingresado para diferentes tipos de relaciones. Por ejemplo, si ingresaste 2342 cM y ves que el 50% de los casos están entre 2501-3000 cM, esto significa que tu valor está ligeramente por debajo del rango más común para esta relación. Esto puede ayudarte a: 1) Confirmar si la relación sugerida es la más probable, 2) Identificar si podría haber endogamia (valores más altos de lo esperado), o 3) Considerar si hay una relación más cercana o más lejana que podría explicar mejor el valor de cM.',
        empty: {
          title: 'Enter shared DNA data to see possible relationships',
          list: {
            possible_relationships: 'List of possible relationships',
            detailed_table: 'Detailed matches table',
            statistical_distribution: 'Statistical distribution'
          },
          histogram: 'No hay datos de distribución disponibles'
        },
        loading: 'Calculating possible relationships...',
        ancestor: {
          title: 'Most Probable Common Ancestor',
          probability: 'Based on {probability}% probability',
          x_inheritance: {
            maternal: 'Based on X chromosome, look in maternal line of the match',
            female: 'Based on X chromosome, look in female lines',
            exclude: 'Exclude maternal line of the match'
          }
        },
        average: 'Average',
        typical_range: 'Typical range',
        relationship: 'Relationship',
        average_cm: 'Average cM',
        cm_range: 'cM Range',
        segments: 'Segments',
        largest_segment: 'Largest Segment',
        dna_percentage: 'DNA Percentage',
        probability: 'Probability',
        in_x: 'in X',
        consistent: 'Consistent',
        inconsistent: 'Inconsistent'
      },
      relationships: {
        "PC": {
          "narrative": "Parent",
          "description": "Biological parent"
        },
        "FS": {
          "narrative": "Full Siblings",
          "description": "Share both parents"
        },
        "HS": {
          "narrative": "Half Siblings",
          "description": "Share one parent"
        },
        "GP": {
          "narrative": "Grandparents",
          "description": "Parents of your parents"
        },
        "AU": {
          "narrative": "Aunt/Uncle",
          "description": "Siblings of your parents"
        },
        "GAU": {
          "narrative": "Great Aunt/Uncle",
          "description": "Siblings of your grandparents"
        },
        "GGAU": {
          "narrative": "Great Great Aunt/Uncle",
          "description": "Siblings of your great grandparents"
        },
        "1C": {
          "narrative": "First Cousins",
          "description": "Children of your aunts/uncles"
        },
        "H1C": {
          "narrative": "Half First Cousins",
          "description": "Children of your half aunts/uncles"
        },
        "1C1R": {
          "narrative": "First Cousin Once Removed",
          "description": "Child of your first cousin or first cousin of your parent"
        },
        "1C2R": {
          "narrative": "First Cousin Twice Removed",
          "description": "Grandchild of your first cousin or first cousin of your grandparent"
        },
        "2C": {
          "narrative": "Second Cousins",
          "description": "Children of your parents' first cousins"
        },
        "2C1R": {
          "narrative": "Second Cousin Once Removed",
          "description": "Child of your second cousin or second cousin of your parent"
        },
        "H2C": {
          "narrative": "Half Second Cousins",
          "description": "Children of your parents' half first cousins"
        },
        "3C": {
          "narrative": "Third Cousins",
          "description": "Children of your parents' second cousins"
        },
        "4C": {
          "narrative": "Fourth Cousins",
          "description": "Children of your parents' third cousins"
        },
        "5C": {
          "narrative": "Fifth Cousins",
          "description": "Children of your parents' fourth cousins"
        },
        "6C": {
          "narrative": "Sixth Cousins",
          "description": "Children of your parents' fifth cousins"
        },
        "7C": {
          "narrative": "Seventh Cousins",
          "description": "Children of your parents' sixth cousins"
        },
        "8C+": {
          "narrative": "Eighth Cousins or More Distant",
          "description": "More distant than seventh cousins"
        }
      }
    }
  },
  es: {
    app: {
      title: 'Calculadora de Relación por cM',
      subtitle: 'Analiza el ADN compartido para determinar posibles relaciones familiares',
      search: {
        title: 'Buscador',
        name: 'Nombre',
        gender: 'Género',
        age: 'Edad',
        example: 'Ej: Carlos Rodríguez'
      },
      match: {
        title: 'Match',
        name: 'Nombre',
        gender: 'Género',
        age: 'Edad',
        example: 'Ej: Ana Martínez'
      },
      dna: {
        title: 'ADN',
        shared_cm: 'cM compartidos',
        advanced_options: 'Mostrar opciones avanzadas',
        endogamy: {
          title: 'Nivel de endogamia',
          help: 'Ayuda',
          none: 'Sin endogamia (0%)',
          light: 'Ligera (-9%)',
          moderate: 'Moderada (-17%)',
          high: 'Alta (-23%)',
          very_high: 'Muy alta (-29%)'
        },
        x_chromosome: {
          title: 'Coincidencia en cromosoma X',
          options: {
            yes: 'Sí',
            no: 'No',
            unknown: 'No sé'
          },
          cm: 'cM en X'
        },
        segments: {
          count: 'Número de segmentos',
          largest: 'Segmento más grande (cM)'
        }
      },
      actions: {
        calculate: 'Calcular',
        clear: 'Limpiar'
      },
      results: {
        title: 'Resultados',
        range_cm: 'Rango de cM',
        percentage_cases: 'Porcentaje de casos',
        histogram_explanation: 'Esta tabla te muestra qué tan común es el valor de cM que has ingresado para diferentes tipos de relaciones. Por ejemplo, si ingresaste 2342 cM y ves que el 50% de los casos están entre 2501-3000 cM, esto significa que tu valor está ligeramente por debajo del rango más común para esta relación. Esto puede ayudarte a: 1) Confirmar si la relación sugerida es la más probable, 2) Identificar si podría haber endogamia (valores más altos de lo esperado), o 3) Considerar si hay una relación más cercana o más lejana que podría explicar mejor el valor de cM.',
        empty: {
          title: 'Ingresa los datos de ADN compartido para ver las posibles relaciones',
          list: {
            possible_relationships: 'Lista de relaciones posibles',
            detailed_table: 'Tabla detallada de coincidencias',
            statistical_distribution: 'Distribución estadística'
          },
          histogram: 'No hay datos de distribución disponibles'
        },
        loading: 'Calculando posibles relaciones...',
        ancestor: {
          title: 'Ancestro Común Más Probable',
          probability: 'Según el {probability}% de probabilidad',
          default: 'El ancestro común más probable es {genText} de {personName}',
          fs: '{personName} y {otherName} son hermanos completos',
          hs: '{personName} y {otherName} son medios hermanos',
          av: 'El ancestro común es {genText} de {personName}',
          gg: 'El ancestro común es {genText} de {personName}',
          '1c': '{personName} y {otherName} son primos hermanos',
          '2c': '{personName} y {otherName} son primos segundos',
          un: 'El ancestro común es {genText} de {personName}',
          n: 'El ancestro común es {genText} de {personName}',
          gav: 'El ancestro común es {genText} de {personName}'
        },
        generations: {
          parent: 'padre/madre',
          grandparent: 'abuelo/abuela',
          great_grandparent: 'bisabuelo/bisabuela',
          great_great_grandparent: 'tatarabuelo/tatarabuela',
          great_great_great_grandparent: 'tatarabuelo/tatarabuela',
          uncle: 'tío/tía',
          nephew: 'sobrino/sobrina',
          default: 'ancestro de generación {level}'
        },
        average: 'Promedio',
        typical_range: 'Rango típico',
        relationship: 'Parentesco',
        average_cm: 'Promedio cM',
        cm_range: 'Rango cM',
        segments: 'Segmentos',
        largest_segment: 'Segmento más grande',
        dna_percentage: 'Porcentaje de ADN',
        probability: 'Probabilidad',
        in_x: 'en X',
        consistent: 'Consistente',
        inconsistent: 'Inconsistente'
      },
      relationships: {
        "PC": {
          "narrative": "Padre/Madre",
          "description": "Padre o madre biológico"
        },
        "FS": {
          "narrative": "Hermanos completos",
          "description": "Comparten ambos padres"
        },
        "HS": {
          "narrative": "Medios hermanos",
          "description": "Comparten un padre"
        },
        "GP": {
          "narrative": "Abuelos",
          "description": "Padres de tus padres"
        },
        "AU": {
          "narrative": "Tío/Tía",
          "description": "Hermanos de tus padres"
        },
        "GAU": {
          "narrative": "Tío/Tía abuelo/a",
          "description": "Hermanos de tus abuelos"
        },
        "GGAU": {
          "narrative": "Tío/Tía bisabuelo/a",
          "description": "Hermanos de tus bisabuelos"
        },
        "1C": {
          "narrative": "Primos hermanos",
          "description": "Hijos de tus tíos"
        },
        "H1C": {
          "narrative": "Medios primos hermanos",
          "description": "Hijos de tus medios tíos"
        },
        "1C1R": {
          "narrative": "Primo hermano una vez removido",
          "description": "Hijo de tu primo hermano o primo hermano de tu padre/madre"
        },
        "1C2R": {
          "narrative": "Primo hermano dos veces removido",
          "description": "Nieto de tu primo hermano o primo hermano de tus abuelos"
        },
        "2C": {
          "narrative": "Primos segundos",
          "description": "Hijos de los primos hermanos de tus padres"
        },
        "2C1R": {
          "narrative": "Primo segundo una vez removido",
          "description": "Hijo de tu primo segundo o primo segundo de tu padre/madre"
        },
        "H2C": {
          "narrative": "Medio primo segundo",
          "description": "Hijo del medio primo hermano de tus padres"
        },
        "3C": {
          "narrative": "Primos terceros",
          "description": "Hijos de los primos segundos de tus padres"
        },
        "4C": {
          "narrative": "Primos cuartos",
          "description": "Hijos de los primos terceros de tus padres"
        },
        "5C": {
          "narrative": "Primos quintos",
          "description": "Hijos de los primos cuartos de tus padres"
        },
        "6C": {
          "narrative": "Primos sextos",
          "description": "Hijos de los primos quintos de tus padres"
        },
        "7C": {
          "narrative": "Primos séptimos",
          "description": "Hijos de los primos sextos de tus padres"
        },
        "8C+": {
          "narrative": "Primos octavos o más lejanos",
          "description": "Relación más distante que primos séptimos"
        }
      }
    }
  },
  pt: {
    app: {
      title: 'Family Calc - Calculadora de Relação por cM',
      subtitle: 'Analise o DNA compartilhado para determinar possíveis relações familiares',
      search: {
        title: 'Pesquisador',
        name: 'Nome',
        gender: 'Gênero',
        age: 'Idade',
        example: 'Ex: Pedro Oliveira'
      },
      match: {
        title: 'Match',
        name: 'Nome',
        gender: 'Gênero',
        age: 'Idade',
        example: 'Ex: Sofia Costa'
      },
      dna: {
        title: 'DNA',
        shared_cm: 'cM compartilhados',
        advanced_options: 'Mostrar opções avançadas',
        endogamy: {
          title: 'Nível de Endogamia',
          help: 'Ajuda',
          none: 'Sem endogamia (0%)',
          light: 'Leve (-9%)',
          moderate: 'Moderada (-17%)',
          high: 'Alta (-23%)',
          very_high: 'Muito alta (-29%)'
        },
        x_chromosome: {
          title: 'Coincidência no Cromossomo X',
          options: {
            yes: 'Sim',
            no: 'Não',
            unknown: 'Não sei'
          },
          cm: 'cM em X'
        },
        segments: {
          count: 'Número de segmentos',
          largest: 'Maior segmento (cM)'
        }
      },
      actions: {
        calculate: 'Calcular',
        clear: 'Limpar'
      },
      results: {
        title: 'Resultados',
        range_cm: 'Intervalo de cM',
        percentage_cases: 'Porcentagem de casos',
        histogram_explanation: 'Esta tabela te mostra qué tan común é o valor de cM que você inseriu para diferentes tipos de relações. Por exemplo, se você inseriu 2342 cM e viu que 50% dos casos estão entre 2501-3000 cM, isso significa que seu valor está ligeiramente abaixo do intervalo mais comum para esta relação. Isso pode ajudá-lo a: 1) Confirmar se a relação sugerida é a mais provável, 2) Identificar se poderia haver endogamia (valores mais altos do esperado), ou 3) Considerar se há uma relação mais próxima ou mais distante que poderia explicar melhor o valor de cM.',
        empty: {
          title: 'Insira os dados de DNA compartilhado para ver as possíveis relações',
          list: {
            possible_relationships: 'Lista de relações possíveis',
            detailed_table: 'Tabela detalhada de correspondências',
            statistical_distribution: 'Distribuição estatística'
          },
          histogram: 'No hay datos de distribución disponibles'
        },
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
        relationship: 'Parentesco',
        average_cm: 'Média cM',
        cm_range: 'Intervalo cM',
        segments: 'Segmentos',
        largest_segment: 'Maior Segmento',
        dna_percentage: 'Porcentagem de DNA',
        probability: 'Probabilidade',
        in_x: 'em X',
        consistent: 'Consistente',
        inconsistent: 'Inconsistente'
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
}

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    en,
    es,
    pt
  }
})

export default i18n