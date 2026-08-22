export default {
  app: {
    title: 'Family Relationship Calculator',
    subtitle: 'Analyze shared DNA to determine possible family relationships',
    search: {
      title: 'Searcher',
      name: 'Name',
      example: 'Ex: James Wilson',
      gender: 'Gender',
      age: 'Age',
      placeholder: {
        name: 'Ex: John Smith'
      }
    },
    match: {
      title: 'Match',
      name: 'Name',
      example: 'Ex: Sarah Thompson',
      gender: 'Gender',
      age: 'Age',
      placeholder: {
        name: 'Ex: Sarah Thompson'
      }
    },
    dna: {
      title: 'DNA Data',
      shared_cm: 'Shared cM',
      advanced_options: 'Advanced Options',
      endogamy: {
        title: 'Endogamy Level',
        placeholder: 'Select endogamy level',
        help: 'Help',
        none: 'No endogamy (0%)',
        light: 'Light (-9%)',
        moderate: 'Moderate (-17%)',
        high: 'High (-23%)',
        very_high: 'Very high (-29%)',
        tooltip: {
          intro: 'Endogamy occurs when there are marriages between relatives in the family tree. This affects the amount of shared DNA between family members.',
          levels: {
            title: 'Endogamy levels:',
            none: 'Families without marriages between close relatives.',
            light: 'Some marriages between third cousins or more distant.',
            moderate: 'Several marriages between second or third cousins.',
            high: 'Frequent marriages between first or second cousins.',
            very_high: 'Highly endogamous communities with frequent marriages between close relatives.'
          },
          effects: {
            title: 'How does it affect the calculation?',
            adjust: 'Adjusts shared cM according to the endogamy level',
            higher: 'In endogamous families, shared cM tends to be higher',
            consider: 'Considers more distant relationships as possible'
          },
          example: 'For example: If two first cousins share 850 cM in a family without endogamy, in a family with moderate endogamy they could share up to 1020 cM (+20%).'
        }
      },
      x_chromosome: {
        title: 'X Match',
        placeholder: 'Select if there is an X match',
        cm: 'X cM',
        placeholder_cm: 'Enter X cM',
        options: {
          yes: 'Yes',
          no: 'No',
          unknown: 'Unknown'
        }
      },
      segments: {
        count: 'Number of Segments',
        placeholder_count: 'Ex: 5',
        largest: 'Largest Segment (cM)',
        placeholder_largest: 'Ex: 20'
      }
    },
    actions: {
      calculate: 'Calculate',
      clear: 'Clear'
    },
    testCases: {
      badge: 'QA',
      title: 'Test cases',
      placeholder: 'Choose a scenario…',
      load: 'Load case',
      loadAndCalculate: 'Load & calculate',
      groups: {
        simple: 'Clear relationships',
        half: 'Half relationships & ambiguity',
        segments: 'Same cM, different recombination',
      },
      cases: {
        fsClassic: {
          label: 'Full siblings — typical (2730 cM)',
          note: '{cm} cM, {segments} segments, largest block {largest} cM. Expected: {expected}.',
        },
        cousin1cTypical: {
          label: '1st cousins — real case (885 cM)',
          note: '{cm} cM, {segments} segments, block {largest} cM. Expected: {expected}.',
        },
        cousin2cTypical: {
          label: '2nd cousins — real case (286 cM)',
          note: '{cm} cM, {segments} segments. Expected: {expected}.',
        },
        parentChild: {
          label: 'Parent–child (3400 cM)',
          note: '{cm} cM, large block {largest} cM. Expected: {expected}.',
        },
        hsTypical: {
          label: 'Half siblings — typical (1760 cM)',
          note: '{cm} cM, {segments} segments. Expected: {expected}.',
        },
        h1cHalfFirst: {
          label: 'Half 1st cousin (435 cM)',
          note: '{cm} cM, {segments} segments. Expected: {expected}.',
        },
        hsVs1cFewLarge: {
          label: 'Ambiguous 1300 cM — few large segments',
          note: 'Same {cm} cM, {segments} segments, block {largest} cM → favors {expected}.',
        },
        hsVs1cManySmall: {
          label: 'Ambiguous 1300 cM — many small segments',
          note: 'Same {cm} cM, {segments} segments, block {largest} cM → more recombination, favors {expected}.',
        },
        same1cConsolidated: {
          label: '884 cM — consolidated blocks (1C)',
          note: '{cm} cM, {segments} seg., block {largest} cM. Typical 1st cousin pattern.',
        },
        same1cRecombined: {
          label: '884 cM — high recombination (1C)',
          note: 'Same {cm} cM but {segments} segments and max block {largest} cM.',
        },
        same2cFewSegments: {
          label: '230 cM — few segments (2C)',
          note: '{cm} cM, {segments} segments, block {largest} cM.',
        },
        same2cManySegments: {
          label: '230 cM — many segments (2C)',
          note: 'Same {cm} cM with {segments} segments and block {largest} cM.',
        },
        endogamyInflated1c: {
          label: '1020 cM with moderate endogamy',
          note: '{cm} cM apparent; backend adjusts down toward {expected}. {segments} seg., block {largest} cM.',
        },
      },
    },
    results: {
      title: 'Results',
      analysis_title: 'Relationship Report',
      suggestions_title: 'Investigation Suggestions',
      relationships_title: 'Possible Relationships List',
      empty_state: 'Results will appear here once you complete the form with the data.',
      relationship: 'Relationship',
      average_cm: 'Average cM',
      cm_range: 'cM Range',
      dna_percentage: 'DNA Percentage',
      probability: 'Probability',
      match: 'match',
      searcher: 'searcher',
      generations: {
        parent: 'parent',
        grandparent: 'grandparent',
        great_grandparent: 'great-grandparent',
        great_great_grandparent: 'great-great-grandparent',
        great_great_great_grandparent: 'great-great-great-grandparent',
        uncle: 'uncle/aunt',
        nephew: 'nephew/niece',
        default: 'ancestor {level} generations back'
      }
    }
  }
} 