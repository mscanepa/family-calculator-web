import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { API_URL, API_VERSION } from '../config/api'

export const useRelationshipStore = defineStore('relationship', () => {
  // Basic information
  const name1 = ref('')
  const name2 = ref('')
  const sex1 = ref('')
  const sex2 = ref('')
  const age1 = ref(null)
  const age2 = ref(null)
  
  // DNA information
  const cmValue = ref(null)
  const xMatch = ref('unknown')
  const xcmValue = ref(null)
  const numSegments = ref(null)
  const largestSegment = ref(null)
  const endogamy = ref(null)

  // Motor de scoring del backend: 'classic' (gaussiano) o 'empirical' (paper)
  const engine = ref('classic')

  // Results
  const loading = ref(false)
  const relationships = ref([])
  const selectedRelationship = ref(null)
  const histogram = ref({})
  const analysisSummary = ref('')
  const investigationSuggestions = ref([])
  // Motor con el que se calcularon los resultados en pantalla
  const resultsEngine = ref(null)

  // Computed properties
  const ageDiff = computed(() => 
    age1.value != null && age2.value != null
      ? Math.abs(age1.value - age2.value)
      : null
  )

  const filteredRelationships = computed(() =>
    cmValue.value != null
      ? relationships.value.filter(r => cmValue.value >= r.min_cm && cmValue.value <= r.max_cm)
      : []
  )

  const summaryText = computed(() => {
    if (!cmValue.value || !relationships.value.length || !name1.value || !name2.value) return ''
    
    const topRelationship = relationships.value[0]
    const probability = (topRelationship.adjustedProb * 100).toFixed(1)
    
    // Construir el texto base
    let text = `Ancestro Común Más Probable\n`
    text += `Según el ${probability}% de probabilidad, la relación entre ${name1.value} y ${name2.value} es de ${topRelationship.name || topRelationship.nombre}.\n`
    
    // Agregar información de ADN
    text += `Se comparten ${cmValue.value} cM`
    if (numSegments.value) {
      text += ` en ${numSegments.value} segmentos`
    }
    text += '.'
    
    // Agregar información de X si está disponible
    if (xMatch.value === 'yes' && xcmValue.value) {
      text += ` Se comparten ${xcmValue.value} cM en el cromosoma X.`
    } else if (xMatch.value === 'no') {
      text += ' No se comparten segmentos en el cromosoma X.'
    }
    
    // Agregar información de edad si está disponible
    if (age1.value && age2.value) {
      const ageDiff = Math.abs(age1.value - age2.value)
      text += ` Las edades (${age1.value} y ${age2.value}) son ${ageDiff <= 10 ? 'consistentes' : 'diferentes'}.`
    }
    
    // Agregar información de búsqueda
    text += `\nPor lo tanto, habría que buscar al ${getAncestorGeneration(topRelationship)} de ${name2.value}`
    
    // Agregar información de X si es relevante
    if (xMatch.value === 'yes') {
      if (sex2.value === 'M') {
        text += ' y basado en el cromosoma X, buscá en la línea materna del match (los varones heredan el X solo de su madre).'
      } else {
        text += ' y basado en el cromosoma X, la conexión puede venir por el padre o la madre del match; solo quedan descartadas las rutas con dos varones seguidos.'
      }
    } else if (xMatch.value === 'no') {
      text += ' y la ausencia de coincidencia en X hace menos probables (sin descartarlas) las líneas que transmiten el X.'
    }
    
    return text
  })

  // Actions
  const calculateResults = async () => {
    if (!cmValue.value) return
    
    loading.value = true
    try {
      // Limpiar resultados anteriores
      relationships.value = []
      selectedRelationship.value = null
      histogram.value = {}
      analysisSummary.value = ''
      investigationSuggestions.value = []
      
      const response = await fetch(`${API_URL}/api/${API_VERSION}/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cm: cmValue.value,
          person1_age: age1.value,
          person2_age: age2.value,
          generacion: null,
          sexo: sex1.value,
          person1_sex: sex1.value,
          person2_sex: sex2.value,
          x_inheritance: xMatch.value === 'yes',
          segments: numSegments.value,
          largest_segment: largestSegment.value,
          endogamia: endogamy.value,
          engine: engine.value
        })
      })
      
      if (!response.ok) throw new Error('Error calculating relationships')
      
      const data = await response.json()
      
      // Normalizar campos del API para la UI
      relationships.value = data.relationships.map(rel => ({
        ...rel,
        probability: rel.adjustedProb ?? rel.probability,
        avg_cm: rel.promedio_cm ?? rel.avg_cm,
        name: rel.nombre ?? rel.name,
      }))
      analysisSummary.value = data.summary
      investigationSuggestions.value = data.suggestions
      resultsEngine.value = data.engine ?? 'classic'
      
      if (data.relationships.length > 0) {
        selectedRelationship.value = data.relationships[0].code
        await loadHistogram(selectedRelationship.value)
      }
    } catch (error) {
      console.error('Error calculating relationships:', error)
    } finally {
      loading.value = false
    }
  }

  const loadHistogram = async (relationshipCode) => {
    if (!relationshipCode) return;
    
    try {
      const response = await fetch(`${API_URL}/api/histogram/?code=${relationshipCode}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      if (data.histogram) {
        histogram.value[relationshipCode] = data.histogram;
      }
    } catch (error) {
      console.error("Error al cargar el histograma:", error);
    }
  }

  const selectRelationship = (code) => {
    selectedRelationship.value = code
    loadHistogram(code)
  }

  const loadTestCase = (testCase) => {
    if (!testCase?.data) return

    const data = testCase.data
    name1.value = data.name1 ?? ''
    name2.value = data.name2 ?? ''
    sex1.value = data.sex1 ?? ''
    sex2.value = data.sex2 ?? ''
    age1.value = data.age1 ?? null
    age2.value = data.age2 ?? null
    cmValue.value = data.cmValue ?? null
    xMatch.value = data.xMatch ?? 'unknown'
    xcmValue.value = data.xcmValue ?? null
    numSegments.value = data.numSegments ?? null
    largestSegment.value = data.largestSegment ?? null
    endogamy.value = data.endogamy ?? null

    relationships.value = []
    selectedRelationship.value = null
    histogram.value = {}
    analysisSummary.value = ''
    investigationSuggestions.value = []
    resultsEngine.value = null
  }

  const clearData = () => {
    name1.value = ''
    name2.value = ''
    sex1.value = ''
    sex2.value = ''
    age1.value = null
    age2.value = null
    cmValue.value = null
    xMatch.value = 'unknown'
    xcmValue.value = null
    numSegments.value = null
    largestSegment.value = null
    endogamy.value = null
    selectedRelationship.value = null
    relationships.value = []
    histogram.value = {}
    analysisSummary.value = ''
    investigationSuggestions.value = []
    resultsEngine.value = null
  }

  const updateRelationships = () => {
    if (relationships.value && relationships.value.length > 0) {
      relationships.value = relationships.value.map(rel => ({
        ...rel,
        name: rel.code,
        description: rel.code
      }))
    }
  }

  return {
    // State
    name1,
    name2,
    sex1,
    sex2,
    age1,
    age2,
    cmValue,
    xMatch,
    xcmValue,
    numSegments,
    largestSegment,
    endogamy,
    engine,
    loading,
    relationships,
    selectedRelationship,
    histogram,
    analysisSummary,
    investigationSuggestions,
    resultsEngine,
    
    // Computed
    ageDiff,
    filteredRelationships,
    summaryText,
    
    // Actions
    calculateResults,
    loadHistogram,
    selectRelationship,
    loadTestCase,
    clearData,
    updateRelationships
  }
}) 