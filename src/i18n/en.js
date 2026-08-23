export default {
  app: {
    title: 'Family Relationship Calculator',
    subtitle: 'Analyze shared DNA to determine possible family relationships',
    search: {
      title: 'Your details and your search',
      name: 'Name',
      example: 'Ex: James Wilson',
      gender: 'Gender',
      age: 'Age',
      goal: 'What are you looking for?',
      goalFather: 'I am looking for my father',
      goalMother: 'I am looking for my mother',
      goalUnknown: "I don't know what I am looking for",
      goalOther: 'I am looking for another relative (not a parent)',
      goalHint: 'This sets how the X chromosome and suggestions are read. Looking for your father treats the match on the paternal line; looking for your mother, on the maternal line. If you are unsure or looking for someone else, no side is assumed.',
      goalContextFather: 'This match will be read as a possible relative on your paternal line (you know your mother; the mystery is dad).',
      goalContextMother: 'This match will be read as a possible relative on your maternal line (you know your father; the mystery is mom).',
      goalContextUnknown: 'No fixed goal: the engine compares all hypotheses equally.',
      goalContextOther: 'You are not looking for a parent: the match is treated as a relative to identify, without assuming a paternal or maternal line.',
      placeholder: {
        name: 'Ex: John Smith'
      }
    },
    match: {
      title: 'Match details',
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
      validation: {
        pass: '✓ Algorithm returned {expected} as top result ({probability}% probability).',
        fail: '✗ Expected {expected}, but algorithm returned {actual} ({probability}%). Scoring does not match the reference case.',
        failRank: '✗ Expected {expected} first, but algorithm returned {actual} ({probability}%). {expected} ranked #{rank}.',
      },
      groups: {
        real: 'Real project cases',
        half: 'Half relationships & ambiguity',
        segments: 'Same cM, different recombination',
      },
      cases: {
        javierSoledadFs: {
          label: 'Javier ↔ Soledad — full siblings (2730 cM)',
          note: 'Real project case (estimated ages). {cm} cM, no segment data in the original test. X match: yes. Expected: {expected}.',
        },
        sebastianAlejo1c: {
          label: 'Sebastian ↔ Alejo — 1st cousins (884.6 cM)',
          note: 'Real project case (estimated ages). {cm} cM, {segments} segments, block {largest} cM. No X match. Age rules out great-uncle. Expected: {expected}.',
        },
        bettinaMariana2c: {
          label: 'Bettina ↔ Mariana — 2nd cousins (286.3 cM)',
          note: 'Real project case (estimated ages). {cm} cM, {segments} segments, block {largest} cM. X match: yes. Expected: {expected}.',
        },
        soledadElizabeth3c: {
          label: 'Soledad ↔ Elizabeth — 3rd cousins (65.8 cM)',
          note: 'Real project case (estimated ages). {cm} cM, {segments} segments, block {largest} cM. No X match. Expected: {expected}.',
        },
        bettinaVeronicaHs: {
          label: 'Bettina ↔ Veronica — half sisters (1601.6 cM)',
          note: 'Real case (Bettina 1976, Veronica 1991). {cm} cM, {segments} segments, {largest} cM block on chromosome 5. The huge block favors 2 meioses (half sibling) over aunt/niece. Expected: {expected}.',
        },
        hsHalfSisters: {
          label: 'Half sisters (1800 cM)',
          note: '{cm} cM, {segments} segments, block {largest} cM, close ages. Age rules out grandparent/aunt. Expected: {expected}.',
        },
        h1cHalfFirst: {
          label: 'Half 1st cousin (435 cM)',
          note: '{cm} cM, {segments} segments, close ages. Overlaps 1C1R and great-great-uncle; age discriminates. Expected: {expected}.',
        },
        hsClear1550: {
          label: '1550 cM + close ages → half sibling',
          note: '{cm} cM with {segments} segments and similar ages: too much DNA for a 1st cousin and age rules out grandparent/uncle. Expected: {expected}.',
        },
        cousin1cClear1050: {
          label: '1050 cM + close ages → 1st cousin',
          note: '{cm} cM, {segments} segments: below the half-sibling minimum and within 1st-cousin range. Expected: {expected}.',
        },
        same1cConsolidated: {
          label: '884.6 cM — original Sebastian/Alejo profile',
          note: 'Same real data as Sebastian ↔ Alejo ({cm} cM, {segments} seg., block {largest} cM).',
        },
        same1cRecombined: {
          label: '884.6 cM — high recombination variant',
          note: 'Same {cm} cM as the real case but {segments} segments and max block {largest} cM (synthetic).',
        },
        same2cFewSegments: {
          label: '286.3 cM — few segments (2C variant)',
          note: 'Same {cm} cM as Bettina ↔ Mariana but only {segments} segments and block {largest} cM (synthetic).',
        },
        same2cManySegments: {
          label: '286.3 cM — many segments (2C variant)',
          note: 'Same {cm} cM as Bettina ↔ Mariana with {segments} segments and block {largest} cM (synthetic).',
        },
      },
    },
    engine: {
      label: 'Analysis engine',
      classic: 'Classic',
      empirical: 'Empirical',
      hint: 'Chooses how the likelihood of your cM is computed, the P(cM | relationship) term of the model. Classic: a normal (Gaussian) curve centered on the published Shared cM Project average for each relationship; this is the production engine. Empirical (experimental): distributions fitted to DNA inheritance simulations, which capture each relationship\'s real skew and tails instead of assuming a symmetric bell curve. Everything else — segments, largest block, X chromosome, age and the normalization to 100% — is identical in both engines; only the way your total cM is evaluated changes.',
      usedTag: 'Engine: {name}',
    },
    calculation: {
      show: 'See how this was calculated',
      intro: 'The score for this hypothesis is the product of these terms. The final percentage is this score divided by the sum of the scores of all hypotheses.',
      adjustedCm: 'cM used in the calculation (adjusted for endogamy)',
      cmLikelihood: 'cM likelihood',
      cmLikelihoodEmpirical: 'empirical distribution (simulations)',
      cmLikelihoodClassic: 'Gaussian curve (Shared cM Project)',
      range: 'Published cM range',
      segments: 'Segment count',
      largestSegment: 'Largest block',
      x: 'X chromosome',
      age: 'Age difference',
      generation: 'Declared generation',
      neutral: 'neutral (no data or within typical range)',
      boost: 'strengthens this hypothesis',
      penalty: 'penalizes this hypothesis',
      excluded: 'excludes this hypothesis (genetically impossible)',
      finalNote: 'Final probability after normalizing across all hypotheses: {prob}%',
      onlyCm: 'cM only',
      short: {
        range: 'range',
        segments: 'segm.',
        largestSegment: 'block',
        x: 'X',
        age: 'age',
        generation: 'gen.',
      },
    },
    methodology: {
      link: 'How it works',
      title: 'What the app does behind the scenes',
      intro: 'The app does not guess: it compares your input against the published statistical distributions of shared DNA for each relationship (Shared cM Project, Blaine Bettinger) and computes how compatible your observation is with each hypothesis. The result is a ranking of probabilities that sum to 100%.',
      steps: {
        endogamy: {
          title: '1. Endogamy adjustment',
          text: 'If you indicated endogamy, the cM value is deflated by the chosen level before comparing, because endogamous families share more DNA than expected for their actual relationship.',
        },
        likelihood: {
          title: '2. cM likelihood',
          text: 'For each of the 20 relationships in the catalog, the app evaluates how typical your total cM is against its published distribution, centered on the Shared cM Project average. Values outside the published range strongly penalize that hypothesis (without fully removing it).',
          engineNote: 'The "Analysis engine" selector at the top of the page chooses how this likelihood is modeled: Classic uses a normal curve centered on the published average; Empirical uses distributions fitted to DNA inheritance simulations, capturing each relationship\'s real skew. The rest of the calculation is unchanged.',
        },
        evidence: {
          title: '3. Additional evidence',
          text: 'The score is adjusted with multiplicative factors: segment count and largest block (a very large block favors fewer meioses, e.g. half sibling over aunt), X chromosome (Yes boosts paths that can transmit X and drops impossible ones; No does not penalize half sisters unless you are looking for your father; Don’t know is neutral) and age difference. If you said you are looking for your father or mother, the X is read on that line.',
        },
        normalization: {
          title: '4. Normalization',
          text: 'Scores are normalized to sum to 100%: the percentage you see is the relative probability of each relationship versus the others, given exactly what you entered. Hypotheses below 1% are omitted.',
        },
      },
      formulaTitle: 'The model in one line',
      formulaNote: 'Each relationship gets the likelihood of your cM multiplied by the evidence factors; everything is then normalized.',
      limitationsTitle: 'Limitations (on purpose, to stay honest)',
      limitations: {
        overlap: 'Several relationships have nearly identical distributions (grandparent, aunt/uncle and half sibling all hover around 1750 cM): with cM alone they are indistinguishable. Ages and the X chromosome are what helps separate them.',
        dependence: 'Total cM, segment count and largest block are not independent measurements, which is why secondary evidence is weighted conservatively.',
        xCaveat: 'The absence of an X match does not rule out lines: the X can be lost to recombination even when the relationship exists.',
      },
      openSource: 'The full model is documented in the repository (open source) and you can validate it with the test cases in the QA bar.',
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
    },
    relationships: {
      PC: {
        narrative: 'Parent',
        description: 'Biological parent',
      },
      FS: {
        narrative: 'Full sibling',
        description: 'Share both parents',
      },
      HS: {
        narrative: 'Half sibling',
        description: 'Share one parent',
      },
      GP: {
        narrative: 'Grandparent – Grandchild',
        description: 'Parents of your parents',
      },
      AU: {
        narrative: 'Aunt/Uncle – Niece/Nephew',
        description: 'Siblings of your parents',
      },
      GAU: {
        narrative: 'Great aunt/uncle – Grand-niece/nephew',
        description: 'Siblings of your grandparents',
      },
      GGAU: {
        narrative: 'Great-great aunt/uncle',
        description: 'Siblings of your great-grandparents',
      },
      '1C': {
        narrative: 'First cousin',
        description: 'Children of your aunts/uncles',
      },
      H1C: {
        narrative: 'Half first cousin',
        description: 'Children of your half aunts/uncles',
      },
      '1C1R': {
        narrative: 'First cousin once removed',
        description: 'Child of your first cousin or first cousin of your parent',
      },
      '1C2R': {
        narrative: 'First cousin twice removed',
        description: 'Grandchild of your first cousin or first cousin of your grandparent',
      },
      '2C': {
        narrative: 'Second cousin',
        description: "Children of your parents' first cousins",
      },
      '2C1R': {
        narrative: 'Second cousin once removed',
        description: 'Child of your second cousin or second cousin of your parent',
      },
      H2C: {
        narrative: 'Half second cousin',
        description: "Child of your parents' half first cousin",
      },
      '3C': {
        narrative: 'Third cousin',
        description: "Children of your parents' second cousins",
      },
      '4C': {
        narrative: 'Fourth cousin',
        description: "Children of your parents' third cousins",
      },
      '5C': {
        narrative: 'Fifth cousin',
        description: "Children of your parents' fourth cousins",
      },
      '6C': {
        narrative: 'Sixth cousin',
        description: "Children of your parents' fifth cousins",
      },
      '7C': {
        narrative: 'Seventh cousin',
        description: "Children of your parents' sixth cousins",
      },
      '8C+': {
        narrative: 'Eighth cousin or more distant',
        description: 'More distant than seventh cousins',
      },
    },
  },
} 