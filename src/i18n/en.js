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