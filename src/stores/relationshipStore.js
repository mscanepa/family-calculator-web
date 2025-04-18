import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const API_URL = import.meta.env.VITE_API_URL || window.location.origin
const API_VERSION = import.meta.env.VITE_API_VERSION || 'v1'

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
  
  // Results
  const loading = ref(false)
  const relationships = ref([])
  const selectedRelationship = ref(null)
  const histogram = ref({})

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
    text += `Según el ${probability}% de probabilidad, la relación entre ${name1.value} y ${name2.value} es de ${topRelationship.name}.\n`
    
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
        text += ' y basado en el cromosoma X, busca en la línea materna del match.'
      } else {
        text += ' y basado en el cromosoma X, busca en las líneas femeninas.'
      }
    } else if (xMatch.value === 'no') {
      text += ' y basado en el cromosoma X, excluye la línea materna del match.'
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
      
      const response = await fetch(`${API_URL}/api/${API_VERSION}/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cm: cmValue.value,
          generation: null,
          sex: sex1.value,
          x_inheritance: xMatch.value === 'yes',
          segments: numSegments.value,
          largest_segment: largestSegment.value,
          endogamy: endogamy.value
        })
      })
      
      if (!response.ok) throw new Error('Error calculating relationships')
      
      const data = await response.json()
      relationships.value = data
      
      if (data.length > 0) {
        selectedRelationship.value = data[0].code
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
        // Los datos ya vienen en el formato correcto de rangos y porcentajes
        histogram.value[relationshipCode] = data.histogram;
        console.log(`Histograma cargado para ${relationshipCode}:`, data.histogram);
      }
    } catch (error) {
      console.error("Error al cargar el histograma:", error);
    }
  }

  const selectRelationship = (code) => {
    selectedRelationship.value = code
    loadHistogram(code)
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
    loading,
    relationships,
    selectedRelationship,
    histogram,
    
    // Computed
    ageDiff,
    filteredRelationships,
    summaryText,
    
    // Actions
    calculateResults,
    loadHistogram,
    selectRelationship,
    clearData,
    updateRelationships
  }
}) 