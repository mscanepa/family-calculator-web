export default {
  app: {
    title: 'Family Relationship Calculator',
    subtitle: 'Analyze shared DNA to determine possible family relationships',
    search: {
      title: 'Person 1',
      name: 'Name',
      example: 'Ex: James Wilson',
      gender: 'Gender',
      age: 'Age'
    },
    match: {
      title: 'Person 2',
      name: 'Name',
      example: 'Ex: Sarah Thompson',
      gender: 'Gender',
      age: 'Age'
    },
    dna: {
      title: 'DNA Data',
      shared_cm: 'Shared cM',
      advanced_options: 'Advanced Options',
      endogamy: {
        title: 'Endogamy Level',
        help: 'Help',
        none: 'None (0%)',
        light: 'Light (9%)',
        moderate: 'Moderate (17%)',
        high: 'High (23%)',
        very_high: 'Very High (29%)'
      },
      x_chromosome: {
        title: 'X Match',
        cm: 'X cM',
        options: {
          yes: 'Yes',
          no: 'No',
          unknown: 'Unknown'
        }
      },
      segments: {
        count: 'Number of Segments',
        largest: 'Largest Segment (cM)'
      }
    },
    actions: {
      calculate: 'Calculate',
      clear: 'Clear'
    },
    results: {
      title: 'Results',
      empty: 'Enter DNA data to see results',
      relationship: 'Relationship',
      average_cm: 'Average cM',
      cm_range: 'cM Range',
      dna_percentage: 'DNA %',
      probability: 'Probability',
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