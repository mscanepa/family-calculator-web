<template>
  <div class="app-container">
    <div class="container">
      <div class="header">
        <div class="language-selector">
          <n-space>
            <n-text 
              :class="{ active: locale === 'es' }"
              @click="changeLocale('es')"
            >
              <n-icon><Globe /></n-icon>
              ES
            </n-text>
            <n-text 
              :class="{ active: locale === 'en' }"
              @click="changeLocale('en')"
            >
              <n-icon><Globe /></n-icon>
              EN
            </n-text>
            <n-text 
              :class="{ active: locale === 'pt' }"
              @click="changeLocale('pt')"
            >
              <n-icon><Globe /></n-icon>
              PT
            </n-text>
          </n-space>
        </div>
        <h1 class="title">{{ $t('app.title') }}</h1>
        <p class="subtitle">{{ $t('app.subtitle') }}</p>
      </div>
      
      <n-grid :cols="24" :x-gap="24" responsive="screen">
        <!-- Left Section: Input Cards -->
        <n-grid-item :span="12" :s-span="24" :m-span="12" :l-span="12">
          <!-- Searcher Row -->
          <n-card :title="$t('app.search.title')" hoverable class="form-section">
            <n-grid :cols="24" :x-gap="24" responsive="screen">
              <n-grid-item :span="16" :s-span="16" :m-span="16" :l-span="16">
                <n-form-item :label="$t('app.search.name')">
                  <n-input v-model:value="store.name1" :placeholder="$t('app.search.example')">
                    <template #prefix>
                      <n-icon><Person /></n-icon>
                    </template>
                  </n-input>
                </n-form-item>
              </n-grid-item>
              <n-grid-item :span="4" :s-span="4" :m-span="4" :l-span="4">
                <n-form-item :label="$t('app.search.gender')">
                  <n-radio-group v-model:value="store.sex1">
                    <n-radio value="F" class="gender-radio">
                      <n-icon size="20" color="#ff69b4"><Woman /></n-icon>
                    </n-radio>
                    <n-radio value="M" class="gender-radio">
                      <n-icon size="20" color="#1e90ff"><Man /></n-icon>
                    </n-radio>
                  </n-radio-group>
                </n-form-item>
              </n-grid-item>
              <n-grid-item :span="4" :s-span="4" :m-span="4" :l-span="4">
                <n-form-item :label="$t('app.search.age')">
                  <n-input-number 
                    v-model:value="store.age1" 
                    :min="0" 
                    :max="120"
                    :show-button="false"
                    placeholder=""
                    style="width: 100%"
                  />
                </n-form-item>
              </n-grid-item>
            </n-grid>
          </n-card>

          <!-- Match Row -->
          <n-card :title="$t('app.match.title')" hoverable class="form-section">
            <n-grid :cols="24" :x-gap="24" responsive="screen">
              <n-grid-item :span="16" :s-span="16" :m-span="16" :l-span="16">
                <n-form-item :label="$t('app.match.name')">
                  <n-input v-model:value="store.name2" :placeholder="$t('app.match.example')">
                    <template #prefix>
                      <n-icon><Person /></n-icon>
                    </template>
                  </n-input>
                </n-form-item>
              </n-grid-item>
              <n-grid-item :span="4" :s-span="4" :m-span="4" :l-span="4">
                <n-form-item :label="$t('app.match.gender')">
                  <n-radio-group v-model:value="store.sex2">
                    <n-radio value="F" class="gender-radio">
                      <n-icon size="20" color="#ff69b4"><Woman /></n-icon>
                    </n-radio>
                    <n-radio value="M" class="gender-radio">
                      <n-icon size="20" color="#1e90ff"><Man /></n-icon>
                    </n-radio>
                  </n-radio-group>
                </n-form-item>
              </n-grid-item>
              <n-grid-item :span="4" :s-span="4" :m-span="4" :l-span="4">
                <n-form-item :label="$t('app.match.age')">
                  <n-input-number 
                    v-model:value="store.age2" 
                    :min="0" 
                    :max="120"
                    :show-button="false"
                    placeholder=""
                    style="width: 100%"
                  />
                </n-form-item>
              </n-grid-item>
            </n-grid>
          </n-card>

          <!-- DNA Row -->
          <n-card :title="$t('app.dna.title')" hoverable class="form-section dna-section">
            <n-grid :cols="24" :x-gap="12" responsive="screen">
              <n-grid-item :span="8" :s-span="24" :m-span="8" :l-span="8">
                <n-form-item :label="$t('app.dna.shared_cm')" class="compact-form-item">
                  <n-input-number 
                    v-model:value="store.cmValue" 
                    :min="0" 
                    :max="3500"
                    :show-button="false"
                    placeholder=""
                    class="compact-input"
                  />
                  <n-tooltip trigger="hover">
                    <template #trigger>
                      <n-icon class="info-icon"><InformationCircle /></n-icon>
                    </template>
                    <div class="tooltip-content">
                      <h4>Centimorgans (cM)</h4>
                      <p>Los centimorgans son una medida de la cantidad de ADN compartido entre dos personas. Cuanto mayor sea el número, más cercana será la relación probable.</p>
                      <p>El sistema utiliza esta medida como base principal para calcular las posibles relaciones familiares.</p>
                    </div>
                  </n-tooltip>
                </n-form-item>
              </n-grid-item>
              <n-grid-item :span="16" :s-span="24" :m-span="16" :l-span="16">
                <n-form-item class="compact-form-item">
                  <n-checkbox v-model:checked="showAdvancedOptions">
                    <template #icon>
                      <n-icon><Settings /></n-icon>
                    </template>
                    {{ $t('app.dna.advanced_options') }}
                  </n-checkbox>
                </n-form-item>
              </n-grid-item>
            </n-grid>

            <n-collapse-transition :show="showAdvancedOptions">
              <n-grid :cols="24" :x-gap="12" responsive="screen" class="advanced-options-grid">
                <!-- Endogamy and X Chromosome -->
                <n-grid-item :span="12" :s-span="24" :m-span="12" :l-span="12">
                  <n-form-item :label="$t('app.dna.endogamy.title')" class="compact-form-item">
                    <n-select
                      v-model:value="store.endogamy"
                      :options="endogamyOptions"
                      :placeholder="$t('app.dna.endogamy.title')"
                    />
                    <n-tooltip trigger="hover">
                      <template #trigger>
                        <n-icon class="info-icon"><InformationCircle /></n-icon>
                      </template>
                      <div class="tooltip-content">
                        <h4>Endogamia</h4>
                        <p>La endogamia ocurre cuando hay matrimonios entre parientes cercanos en el árbol genealógico.</p>
                        <p>Cuando se selecciona un nivel de endogamia:</p>
                        <ul>
                          <li>El sistema ajusta los rangos esperados de cM</li>
                          <li>Considera relaciones más lejanas como posibles</li>
                          <li>Ajusta las probabilidades basándose en patrones de herencia endogámica</li>
                        </ul>
                      </div>
                    </n-tooltip>
                    <n-button
                      v-if="store.endogamy"
                      type="info"
                      text
                      @click="showEndogamyHelp"
                      class="help-button"
                    >
                      <template #icon>
                        <n-icon><InformationCircle /></n-icon>
                      </template>
                      {{ $t('app.dna.endogamy.help') }}
                    </n-button>
                  </n-form-item>
                </n-grid-item>

                <n-grid-item :span="12" :s-span="24" :m-span="12" :l-span="12">
                  <n-form-item :label="$t('app.dna.x_chromosome.title')" class="compact-form-item">
                    <n-select
                      v-model:value="store.xMatch"
                      :options="[
                        { label: $t('app.dna.x_chromosome.options.yes'), value: 'yes' },
                        { label: $t('app.dna.x_chromosome.options.no'), value: 'no' },
                        { label: $t('app.dna.x_chromosome.options.unknown'), value: 'unknown' }
                      ]"
                    />
                    <n-tooltip trigger="hover">
                      <template #trigger>
                        <n-icon class="info-icon"><InformationCircle /></n-icon>
                      </template>
                      <div class="tooltip-content">
                        <h4>Cromosoma X</h4>
                        <p>El cromosoma X tiene patrones de herencia específicos que pueden ayudar a determinar la línea ancestral.</p>
                        <p>Cuando se comparte ADN en el cromosoma X:</p>
                        <ul>
                          <li>Se puede identificar si la relación es por línea materna o paterna</li>
                          <li>Se ajustan las probabilidades de ciertas relaciones</li>
                          <li>Se puede excluir ciertas líneas ancestrales</li>
                        </ul>
                      </div>
                    </n-tooltip>
                  </n-form-item>
                </n-grid-item>

                <!-- X cM when X Match is Yes -->
                <n-grid-item v-if="store.xMatch === 'yes'" :span="12" :s-span="24" :m-span="12" :l-span="12">
                  <n-form-item :label="$t('app.dna.x_chromosome.cm')" class="compact-form-item">
                    <n-input-number 
                      v-model:value="store.xcmValue" 
                      :min="0" 
                      :max="200"
                      :show-button="false"
                      placeholder=""
                      class="compact-input"
                    />
                    <n-tooltip trigger="hover">
                      <template #trigger>
                        <n-icon class="info-icon"><InformationCircle /></n-icon>
                      </template>
                      <div class="tooltip-content">
                        <h4>cM en Cromosoma X</h4>
                        <p>La cantidad de ADN compartido en el cromosoma X puede indicar:</p>
                        <ul>
                          <li>La generación probable de la relación</li>
                          <li>La línea ancestral específica (materna/paterna)</li>
                          <li>La probabilidad de ciertos tipos de relaciones</li>
                        </ul>
                      </div>
                    </n-tooltip>
                  </n-form-item>
                </n-grid-item>

                <!-- Segments -->
                <n-grid-item :span="12" :s-span="24" :m-span="12" :l-span="12">
                  <n-form-item :label="$t('app.dna.segments.count')" class="compact-form-item">
                    <n-input-number 
                      v-model:value="store.numSegments" 
                      :min="1" 
                      :max="50"
                      :show-button="false"
                      placeholder=""
                      class="compact-input"
                    />
                    <n-tooltip trigger="hover">
                      <template #trigger>
                        <n-icon class="info-icon"><InformationCircle /></n-icon>
                      </template>
                      <div class="tooltip-content">
                        <h4>Número de Segmentos</h4>
                        <p>El número de segmentos compartidos puede indicar:</p>
                        <ul>
                          <li>La antigüedad de la relación (más segmentos = relación más reciente)</li>
                          <li>La probabilidad de una relación específica</li>
                          <li>Posibles eventos de recombinación en el árbol genealógico</li>
                        </ul>
                      </div>
                    </n-tooltip>
                  </n-form-item>
                </n-grid-item>

                <n-grid-item :span="12" :s-span="24" :m-span="12" :l-span="12">
                  <n-form-item :label="$t('app.dna.segments.largest')" class="compact-form-item">
                    <n-input-number 
                      v-model:value="store.largestSegment" 
                      :min="1" 
                      :max="200"
                      :show-button="false"
                      placeholder=""
                      class="compact-input"
                    />
                    <n-tooltip trigger="hover">
                      <template #trigger>
                        <n-icon class="info-icon"><InformationCircle /></n-icon>
                      </template>
                      <div class="tooltip-content">
                        <h4>Segmento Más Grande</h4>
                        <p>El tamaño del segmento más grande compartido es importante porque:</p>
                        <ul>
                          <li>Indica la probabilidad de una relación reciente</li>
                          <li>Ayuda a distinguir entre relaciones cercanas y lejanas</li>
                          <li>Puede sugerir eventos específicos en el árbol genealógico</li>
                        </ul>
                      </div>
                    </n-tooltip>
                  </n-form-item>
                </n-grid-item>
              </n-grid>
            </n-collapse-transition>
          </n-card>

          <!-- Action Buttons -->
          <div class="button-section">
            <n-space>
              <n-button 
                type="primary" 
                @click="store.calculateResults" 
                :loading="store.loading"
                :disabled="!store.cmValue"
              >
                <template #icon>
                  <n-icon><Calculator /></n-icon>
                </template>
                {{ $t('app.actions.calculate') }}
              </n-button>
              <n-button 
                type="error" 
                @click="store.clearData"
                :disabled="store.loading"
              >
                <template #icon>
                  <n-icon><Trash /></n-icon>
                </template>
                {{ $t('app.actions.clear') }}
              </n-button>
            </n-space>
          </div>
        </n-grid-item>

        <!-- Right Section: Results -->
        <n-grid-item :span="12" :s-span="24" :m-span="12" :l-span="12">
          <n-card :title="$t('app.results.title')" class="results-section">
            <template v-if="!store.cmValue">
              <div class="empty-state">
                <n-icon size="64" color="#d9d9d9">
                  <BarChart />
                </n-icon>
                <n-text depth="3" class="empty-state-text">
                  {{ $t('app.results.empty.title') }}
                </n-text>
              </div>
            </template>
            <template v-else-if="store.loading">
              <div class="loading-state">
                <n-spin size="large" />
                <n-text depth="3" class="loading-text">
                  {{ $t('app.results.loading') }}
                </n-text>
              </div>
            </template>
            <template v-else>
              <n-tabs type="line" animated>
                <n-tab-pane name="relationships" :tab="$t('app.results.empty.list.possible_relationships')">
                  <n-card v-if="store.relationships.length > 0 && !store.loading" class="ancestor-info" hoverable>
                    <n-space vertical>
                      <n-text strong>
                        {{ $t('app.results.ancestor.title') }}
                      </n-text>
                      <n-text>
                        Se comparten {{ store.cmValue }} cM{{ store.numSegments ? ` en ${store.numSegments} segmentos` : '' }}.
                        {{ store.xMatch === 'yes' && store.xcmValue ? ` Se comparten ${store.xcmValue} cM en el cromosoma X.` : '' }}
                        {{ store.xMatch === 'no' ? ' No se comparten segmentos en el cromosoma X.' : '' }}
                        {{ store.age1 && store.age2 ? ` Las edades (${store.age1} y ${store.age2}) son ${Math.abs(store.age1 - store.age2) <= 10 ? 'consistentes' : 'diferentes'}.` : '' }}
                      </n-text>
                      <n-text>
                        Por lo tanto, habría que investigar al {{ getAncestorGeneration(sortedRelationships[0]) }} de {{ store.name2 || $t('app.results.match') }} como posible ancestro común.
                        {{ store.xMatch === 'yes' 
                          ? store.sex2 === 'M' 
                            ? ' Dado que se comparten segmentos en el cromosoma X, la línea materna del match es más probable.'
                            : ' Dado que se comparten segmentos en el cromosoma X, las líneas femeninas son más probables.'
                          : store.xMatch === 'no'
                            ? ' Dado que no se comparten segmentos en el cromosoma X, la línea materna del match es menos probable, aunque no se puede descartar completamente.'
                            : ''
                        }}
                      </n-text>
                      <n-text v-if="store.xMatch === 'unknown'" type="info">
                        No hay información sobre el cromosoma X, por lo tanto no podemos brindar información sobre las ramas posibles.
                      </n-text>
                      
                      <!-- Sección de Sugerencias -->
                      <div class="suggestions-section">
                        <n-text strong class="suggestions-title">🔍 Sugerencias para investigar la relación</n-text>
                        <n-text class="suggestions-intro">
                          Dado que {{ store.name2 || $t('app.results.match') }} es posiblemente {{ sortedRelationships[0].name }} de {{ store.name1 || $t('app.results.searcher') }}, se sugiere:
                        </n-text>
                        <ul class="suggestions-list">
                          <li v-for="(sugerencia, index) in getGenerationTargets(sortedRelationships[0])" :key="index" class="suggestion-item">
                            <n-icon class="suggestion-icon"><ArrowForward /></n-icon>
                            <n-text>{{ sugerencia }}</n-text>
                          </li>
                          <li v-if="store.xMatch !== 'unknown'" class="suggestion-item">
                            <n-icon class="suggestion-icon"><ArrowForward /></n-icon>
                            <n-text>{{ getXMatchGuidance(store.xMatch, store.sex2) }}</n-text>
                          </li>
                        </ul>
                      </div>
                    </n-space>
                  </n-card>
                  <n-list>
                    <n-list-item v-for="rel in sortedRelationships" :key="rel.code">
                      <n-card hoverable @click="selectRelationship(rel.code)">
                        <n-space justify="space-between" align="center">
                          <n-space vertical>
                            <n-text strong>
                              {{ $t('app.relationships.' + rel.code + '.narrative') }} ({{ rel.code }})
                            </n-text>
                            <n-text depth="3">
                              {{ $t('app.relationships.' + rel.code + '.description') }}
                            </n-text>
                            <n-text depth="3">
                              {{ $t('app.results.average') }}: {{ rel.average_cm }} cM • 
                              {{ $t('app.results.typical_range') }}: {{ rel.min_cm }}–{{ rel.max_cm }} cM
                            </n-text>
                            <n-text v-if="store.xMatch !== 'unknown'" :type="rel.xPlausible ? 'success' : 'warning'">
                              {{ store.xMatch === 'yes' ? store.xcmValue : 0 }} cM {{ $t('app.results.in_x') }} — 
                              {{ rel.xPlausible ? $t('app.results.consistent') : $t('app.results.inconsistent') }}
                            </n-text>
                          </n-space>
                          <n-tag :type="rel.adjustedProb >= 0.5 ? 'success' : rel.adjustedProb >= 0.15 ? 'warning' : 'error'" round>
                            {{ (rel.adjustedProb * 100).toFixed(1) }}%
                          </n-tag>
                        </n-space>
                      </n-card>
                    </n-list-item>
                  </n-list>
                </n-tab-pane>

                <n-tab-pane name="table" :tab="$t('app.results.empty.list.detailed_table')">
                  <n-data-table
                    :columns="columns"
                    :data="sortedRelationships"
                    :pagination="false"
                  />
                </n-tab-pane>

                <n-tab-pane name="histogram" :tab="$t('app.results.empty.list.statistical_distribution')">
                  <n-space vertical>
                    <n-select
                      v-model:value="selectedRelationshipForAnalysis"
                      :options="sortedRelationships.map(rel => ({
                        label: `${$t('app.relationships.' + rel.code + '.narrative')} (${rel.code}) - ${(rel.adjustedProb * 100).toFixed(1)}%`,
                        value: rel.code,
                        type: rel.adjustedProb >= 0.5 ? 'success' : rel.adjustedProb >= 0.15 ? 'warning' : 'error'
                      }))"
                      :render-label="renderLabel"
                      placeholder="Selecciona una relación para ver su análisis"
                      class="mb-4"
                    />
                    
                    <template v-if="selectedRelationshipForAnalysis && store.histogram[selectedRelationshipForAnalysis]">
                      <n-table>
                        <thead>
                          <tr>
                            <th>{{ $t('app.results.range_cm') }}</th>
                            <th>{{ $t('app.results.percentage_cases') }}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(count, bin) in store.histogram[selectedRelationshipForAnalysis]" :key="bin">
                            <td>{{ bin }} cM</td>
                            <td>{{ count }}%</td>
                          </tr>
                        </tbody>
                      </n-table>

                      <n-card class="mt-4">
                        <n-space vertical>
                          <n-text strong>¿Qué significa esta tabla?</n-text>
                          <n-text>
                            <p>La coincidencia genética entre {{ store.name1 || 'el buscador' }} y {{ store.name2 || 'el match' }} es de {{ store.cmValue }} cM.</p>
                          </n-text>
                          <n-text>
                            <p>Esta tabla muestra cuántas personas con el mismo parentesco confirmado comparten diferentes cantidades de ADN. Por ejemplo:</p>
                            <ul class="interpretation-list">
                              <li v-for="(count, bin) in store.histogram[selectedRelationshipForAnalysis]" :key="bin">
                                {{ count }}% de las personas con este parentesco comparten entre {{ bin }} cM
                              </li>
                            </ul>
                          </n-text>
                          <n-text>
                            <p><strong>Conclusión:</strong></p>
                            <template v-if="getCurrentRangeCount(store.cmValue, store.histogram[selectedRelationshipForAnalysis])">
                              <p>El valor de {{ store.cmValue }} cM está en un rango que representa el {{ getCurrentRangeCount(store.cmValue, store.histogram[selectedRelationshipForAnalysis]) }}% de los casos para esta relación.</p>
                              <p v-if="getCurrentRangeCount(store.cmValue, store.histogram[selectedRelationshipForAnalysis]) >= 30">
                                Por lo tanto, es muy probable que tengas este parentesco. La cantidad de ADN compartido es típica para este tipo de relación y la hipótesis de parentesco es consistente con los datos genéticos.
                              </p>
                              <p v-else-if="getCurrentRangeCount(store.cmValue, store.histogram[selectedRelationshipForAnalysis]) >= 20">
                                Por lo tanto, es probable que tengas este parentesco. La cantidad de ADN compartido es común para este tipo de relación y la hipótesis de parentesco es razonable.
                              </p>
                              <p v-else-if="getCurrentRangeCount(store.cmValue, store.histogram[selectedRelationshipForAnalysis]) >= 10">
                                Por lo tanto, es posible que tengas este parentesco. La cantidad de ADN compartido está dentro de un rango aceptable para este tipo de relación.
                              </p>
                              <p v-else>
                                Por lo tanto, es poco probable que tengas este parentesco. La cantidad de ADN compartido está fuera del rango típico para esta relación.
                              </p>
                            </template>
                          </n-text>
                          <n-text>
                            <p><strong>Recomendaciones para el análisis:</strong></p>
                            <ul class="recommendations-list">
                              <li>
                                <strong>Valores en rangos frecuentes (>20%):</strong>
                                <ul>
                                  <li>Indican una alta probabilidad de que la relación sea la correcta</li>
                                  <li>Sugieren un patrón típico de herencia genética</li>
                                  <li>Apoyan la hipótesis de la relación propuesta</li>
                                </ul>
                              </li>
                              <li>
                                <strong>Valores en rangos poco frecuentes (<5%):</strong>
                                <ul>
                                  <li>Recomiendan considerar otras posibles relaciones</li>
                                  <li>Sugieren investigar la presencia de endogamia</li>
                                  <li>Indican la necesidad de buscar evidencia genealógica adicional</li>
                                </ul>
                              </li>
                              <li>
                                <strong>Consideraciones generales:</strong>
                                <ul>
                                  <li>Los valores poco comunes pueden ser correctos, especialmente en casos de endogamia</li>
                                  <li>La información genética debe complementarse con datos genealógicos</li>
                                  <li>Los rangos típicos varían según el tipo de relación familiar</li>
                                </ul>
                              </li>
                            </ul>
                          </n-text>
                        </n-space>
                      </n-card>
                    </template>
                    <n-empty v-else :description="$t('app.results.empty.histogram')">
                      <template #icon>
                        <n-icon><BarChart /></n-icon>
                      </template>
                    </n-empty>
                  </n-space>
                </n-tab-pane>
              </n-tabs>
            </template>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>

    <!-- Endogamy Help Modal -->
    <n-modal v-model:show="showHelpModal" preset="dialog" :title="$t('app.dna.endogamy.title')">
      <n-card v-if="endogamyInfo" class="help-modal">
        <template #header>
          <h3>{{ endogamyInfo.levels[store.endogamy]?.name }}</h3>
        </template>

        <n-space vertical>
          <n-alert type="info" :title="$t('app.dna.endogamy.description')">
            {{ endogamyInfo.levels[store.endogamy]?.description }}
          </n-alert>

          <n-alert type="info" :title="$t('app.dna.endogamy.examples')">
            {{ endogamyInfo.levels[store.endogamy]?.examples }}
          </n-alert>

          <n-alert type="info" :title="$t('app.dna.endogamy.effect')">
            {{ endogamyInfo.levels[store.endogamy]?.dna_effect }}
          </n-alert>

          <n-divider>{{ $t('app.dna.endogamy.references') }}</n-divider>
          <n-list>
            <n-list-item v-for="(ref, index) in endogamyInfo.references" :key="index">
              <n-thing>
                <template #header>{{ ref.title }}</template>
                <template #description>{{ ref.author }} - {{ ref.source }}</template>
                <template #default>{{ ref.description }}</template>
                <template #footer v-if="ref.url">
                  <n-button text type="primary" @click="openReference(ref.url)">
                    <template #icon>
                      <n-icon><InformationCircle /></n-icon>
                    </template>
                    {{ $t('app.dna.endogamy.read_more') }}
                  </n-button>
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-space>
      </n-card>
    </n-modal>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-links">
          <a href="mailto:mscanepa@gmail.com" class="footer-link">
            <n-icon><Mail /></n-icon>
            Soporte
          </a>
          <a href="#" @click="showSourcesModal = true" class="footer-link">
            <n-icon><Book /></n-icon>
            Fuentes
          </a>
          <a href="https://github.com/mscanepa/genealogy" target="_blank" class="footer-link">
            <n-icon><LogoGithub /></n-icon>
            GitHub
          </a>
        </div>
        <div class="footer-license">
          <p>Licenciado bajo <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a></p>
          <p class="credits">Desarrollado por <a href="mailto:mscanepa@gmail.com">Sole Canepa</a> con asistencia de <a href="https://openai.com" target="_blank">ChatGPT 4</a> y <a href="https://cursor.sh" target="_blank">Cursor</a></p>
        </div>
      </div>
    </footer>

    <!-- Sources Modal -->
    <n-modal
      v-model:show="showSourcesModal"
      preset="dialog"
      title="Fuentes y Referencias"
      class="sources-modal"
    >
      <n-card>
        <n-space vertical>
          <div class="source-group">
            <h4>Datos Genéticos</h4>
            <div class="source-item">
              <h5>Shared cM Project v4</h5>
              <p class="source-author">Blaine Bettinger</p>
              <p class="source-description">Proporciona rangos de cM para cada tipo de relación</p>
              <a href="https://dnapainter.com/tools/sharedcmv4" target="_blank" class="source-link">
                dnapainter.com/tools/sharedcmv4
              </a>
              <p class="source-usage">Usado para construir relationships.json y los histogramas</p>
            </div>
            
            <div class="source-item">
              <h5>Probability Curves</h5>
              <p class="source-author">Leah Larkin (The DNA Geek)</p>
              <p class="source-description">Curvas de probabilidad por relación según cM compartidos</p>
              <a href="https://thednageek.com" target="_blank" class="source-link">
                thednageek.com
              </a>
              <p class="source-usage">Usado para probabilidades.json y la interpolación</p>
            </div>
          </div>

          <div class="source-group">
            <h4>Herencia del Cromosoma X</h4>
            <div class="source-item">
              <p class="source-description">Basado en investigaciones de:</p>
              <ul class="source-authors">
                <li>Cristián Cofré (Medium - X-Match)</li>
                <li>Roberta Estes (DNAeXplained)</li>
              </ul>
              <p class="source-usage">Usado para construir xInheritance.json y determinar líneas ancestrales</p>
            </div>
          </div>

          <div class="source-group">
            <h4>Convenciones Genealógicas</h4>
            <div class="source-item">
              <p class="source-description">Códigos de relación estandarizados en genealogía genética</p>
              <p class="source-usage">Usado para la estructura de datos y visualización de relaciones</p>
            </div>
          </div>

          <div class="source-group">
            <h4>Inferencia de Edad y Segmentos</h4>
            <div class="source-item">
              <p class="source-description">Reglas empíricas para análisis:</p>
              <ul class="source-rules">
                <li>Edad esperada ≈ generación × 30 años</li>
                <li>Relación más cercana → más segmentos compartidos</li>
                <li>Tamaño del segmento más grande como indicador secundario</li>
              </ul>
            </div>
          </div>
        </n-space>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, h } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  NGrid,
  NGridItem,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NRadioGroup,
  NRadio,
  NInputNumber,
  NSelect,
  NButton,
  NButtonGroup,
  NTabs,
  NTabPane,
  NList,
  NListItem,
  NSpace,
  NText,
  NTag,
  NDataTable,
  NTable,
  NCollapseTransition,
  NCheckbox,
  NIcon,
  NModal,
  NAlert,
  NThing,
  NDivider
} from 'naive-ui'
import { useRelationshipStore } from '../stores/relationshipStore'
import { 
  Person,
  Woman,
  Man,
  Settings,
  Close,
  Grid,
  BarChart,
  Calculator,
  Trash,
  InformationCircle,
  Globe,
  ArrowForward,
  Mail,
  Book,
  LogoGithub
} from '@vicons/ionicons5'
import { useMessage } from 'naive-ui'

const { t, locale } = useI18n()
const store = useRelationshipStore()
const message = useMessage()
const showAdvancedOptions = ref(false)
const showSourcesModal = ref(false)

// Function to change language
const changeLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
  // Actualizar las relaciones con las nuevas traducciones
  if (store.relationships && store.relationships.length > 0) {
    store.relationships = store.relationships.map(rel => ({
      ...rel,
      name: t(`app.relationships.${rel.code}.narrative`),
      description: t(`app.relationships.${rel.code}.description`)
    }))
  }
}

// Watch for locale changes
watch(() => locale.value, (newLocale) => {
  if (store.relationships && store.relationships.length > 0) {
    store.relationships = store.relationships.map(rel => ({
      ...rel,
      name: t(`app.relationships.${rel.code}.narrative`),
      description: t(`app.relationships.${rel.code}.description`)
    }))
  }
}, { immediate: true })

// Initialize locale on mount
onMounted(() => {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    locale.value = savedLocale
  }
  if (store.relationships && store.relationships.length > 0) {
    store.relationships = store.relationships.map(rel => ({
      ...rel,
      name: t(`app.relationships.${rel.code}.narrative`),
      description: t(`app.relationships.${rel.code}.description`)
    }))
  }
})

// Columns for the relationships table
const columns = [
  { 
    title: () => t('app.results.relationship'),
    key: 'name',
    render: (row) => h('span', null, [
      t(`app.relationships.${row.code}.narrative`),
      ' (',
      row.code,
      ')'
    ])
  },
  { 
    title: () => t('app.results.average_cm'),
    key: 'average_cm',
    render: (row) => row.promedio_cm ? `${row.promedio_cm.toFixed(0)} cM` : 'N/A'
  },
  { 
    title: () => t('app.results.cm_range'),
    key: 'range',
    render: (row) => `${row.min_cm}–${row.max_cm} cM`
  },
  { 
    title: () => t('app.results.dna_percentage'),
    key: 'dna',
    render: (row) => row.promedio_cm ? `${((row.promedio_cm / 6800) * 100).toFixed(2)}%` : 'N/A'
  },
  { 
    title: () => t('app.results.probability'),
    key: 'prob',
    render: (row) => `${(row.adjustedProb * 100).toFixed(1)}%`
  }
]

// Computed property to sort relationships by probability
const sortedRelationships = computed(() => {
  return [...store.relationships].sort((a, b) => b.adjustedProb - a.adjustedProb)
})

// Watch for changes in inputs that should trigger recalculation
watch([
  () => store.cmValue,
  () => store.xMatch,
  () => store.xcmValue,
  () => store.sex1,
  () => store.sex2,
  () => store.age1,
  () => store.age2,
  () => store.numSegments,
  () => store.largestSegment
], () => {
  // Solo limpiar los resultados cuando cambian los inputs
  store.relationships = []
  store.selectedRelationship = null
  store.histogram = {}
})

// Watch for changes in selected relationship
watch(() => store.selectedRelationship, (newValue) => {
  if (newValue) {
    store.loadHistogram(newValue)
  }
})

// Options for endogamy
const endogamyOptions = [
  { label: t('app.dna.endogamy.levels.none'), value: 'none' },
  { label: t('app.dna.endogamy.levels.light'), value: 'light' },
  { label: t('app.dna.endogamy.levels.moderate'), value: 'moderate' },
  { label: t('app.dna.endogamy.levels.high'), value: 'high' },
  { label: t('app.dna.endogamy.levels.very_high'), value: 'very_high' }
]

const showHelpModal = ref(false)
const endogamyInfo = ref(null)

const showEndogamyHelp = async () => {
  try {
    const response = await fetch('http://localhost:8001/api/endogamy/help')
    if (!response.ok) throw new Error('Error loading help information')
    endogamyInfo.value = await response.json()
    showHelpModal.value = true
  } catch (error) {
    message.error(t('app.dna.endogamy.error_loading'))
    console.error(error)
  }
}

const openReference = (url) => {
  window.open(url, '_blank')
}

const getAncestorDescription = (relationship) => {
  const matchName = store.name2 || t('app.results.match')
  const searcherName = store.name1 || t('app.results.searcher')
  
  const getPronoun = (sex) => {
    if (sex === 'F') return 'la'
    if (sex === 'M') return 'el'
    return 'el' // fallback
  }

  const pronoun = getPronoun(store.sex2)
  const probability = (relationship.adjustedProb * 100).toFixed(1)
  
  // Construir el texto base
  let baseText = `${matchName} es probablemente ${pronoun} ${t('app.relationships.' + relationship.code + '.narrative')} de ${searcherName} (${probability}%).`
  
  // Agregar información de ADN
  const dnaInfo = `Se comparten ${store.cmValue} cM en ${store.numSegments || '?'} segmentos.`
  
  // Agregar información de X si está disponible
  let xInfo = ''
  if (store.xMatch === 'yes') {
    xInfo = `\nSe comparten ${store.xcmValue} cM en el cromosoma X.`
  } else if (store.xMatch === 'no') {
    xInfo = '\nNo se comparten segmentos en el cromosoma X.'
  }
  
  // Agregar información de edad si está disponible
  let ageInfo = ''
  if (store.age1 && store.age2) {
    const ageDiff = Math.abs(store.age1 - store.age2)
    ageInfo = `\nLas edades (${store.age1} y ${store.age2}) son ${ageDiff <= 10 ? 'consistentes' : 'diferentes'}.`
  }
  
  // Agregar información de plausibilidad
  let plausibilityInfo = ''
  if (!relationship.agePlausible) {
    plausibilityInfo = '\n⚠️ Las edades no son consistentes con esta relación.'
  }
  if (store.xMatch !== 'unknown' && !relationship.xPlausible) {
    plausibilityInfo += '\n⚠️ Los datos del cromosoma X no son consistentes con esta relación.'
  }
  
  return `${baseText}\n${dnaInfo}${xInfo}${ageInfo}${plausibilityInfo}`
}

const getXInheritanceInfo = (relationship) => {
  if (store.xMatch === 'yes') {
    if (store.sex2 === 'M') {
      return 'Basado en el cromosoma X, busca en la línea materna del match.'
    } else {
      return 'Basado en el cromosoma X, busca en las líneas femeninas.'
    }
  } else if (store.xMatch === 'no') {
    return 'Excluye la línea materna del match.'
  }
  return ''
}

const getGenerationText = (level, code) => {
  const levels = {
    '0': t('app.results.generations.parent'),
    '1': t('app.results.generations.grandparent'),
    '2': t('app.results.generations.great_grandparent'),
    '3': t('app.results.generations.great_great_grandparent'),
    '4': t('app.results.generations.great_great_great_grandparent')
  }
  
  // Special cases for specific relationships
  switch (code) {
    case 'UN':
      return t('app.results.generations.uncle')
    case 'N':
      return t('app.results.generations.nephew')
    case 'GAV':
      return t('app.results.generations.great_grandparent')
    default:
      return levels[level] || t('app.results.generations.default', { level })
  }
}

const selectedRelationshipForAnalysis = ref(null)

const renderLabel = (option) => {
  return h(
    'span',
    {
      style: {
        color: option.type === 'success' ? '#18a058' : option.type === 'warning' ? '#f0a020' : '#d03050'
      }
    },
    option.label
  )
}

const selectRelationship = (code) => {
  store.selectedRelationship = code
  selectedRelationshipForAnalysis.value = code
  store.loadHistogram(code)
}

const getFrequencyDescription = (percentage, relationshipCode) => {
  // Lógica específica para hermanos completos
  if (relationshipCode === 'FS') {
    if (percentage >= 20) return 'Muy común';
    if (percentage >= 10) return 'Común';
    if (percentage >= 5) return 'Poco común';
    return 'Muy raro';
  }
  
  // Lógica específica para medios hermanos
  if (relationshipCode === 'HS') {
    if (percentage >= 25) return 'Muy común';
    if (percentage >= 15) return 'Común';
    if (percentage >= 5) return 'Poco común';
    return 'Muy raro';
  }
  
  // Lógica específica para primos hermanos
  if (relationshipCode === '1C') {
    if (percentage >= 30) return 'Muy común';
    if (percentage >= 20) return 'Común';
    if (percentage >= 10) return 'Poco común';
    return 'Muy raro';
  }
  
  // Lógica específica para primos segundos
  if (relationshipCode === '2C') {
    if (percentage >= 35) return 'Muy común';
    if (percentage >= 25) return 'Común';
    if (percentage >= 15) return 'Poco común';
    return 'Muy raro';
  }
  
  // Lógica por defecto para otras relaciones
  if (percentage >= 40) return 'Muy común';
  if (percentage >= 25) return 'Común';
  if (percentage >= 10) return 'Poco común';
  return 'Muy raro';
};

const getRangeDescription = (cmValue, histogram, relationshipCode) => {
  const ranges = Object.keys(histogram).map(range => {
    const [min, max] = range.split('-').map(Number);
    return { min, max, count: histogram[range] };
  }).sort((a, b) => a.min - b.min);

  const totalCases = Object.values(histogram).reduce((a, b) => a + b, 0);
  const medianIndex = Math.floor(totalCases / 2);
  let currentCount = 0;
  let medianRange = null;

  for (const range of ranges) {
    currentCount += range.count;
    if (currentCount >= medianIndex) {
      medianRange = range;
      break;
    }
  }

  // Lógica específica para hermanos completos
  if (relationshipCode === 'FS') {
    if (cmValue < 2500) return 'baja';
    if (cmValue > 3000) return 'alta';
    return 'típica';
  }

  // Lógica específica para medios hermanos
  if (relationshipCode === 'HS') {
    if (cmValue < 1200) return 'baja';
    if (cmValue > 1800) return 'alta';
    return 'típica';
  }

  // Lógica específica para primos hermanos
  if (relationshipCode === '1C') {
    if (cmValue < 500) return 'baja';
    if (cmValue > 900) return 'alta';
    return 'típica';
  }

  // Lógica específica para primos segundos
  if (relationshipCode === '2C') {
    if (cmValue < 200) return 'baja';
    if (cmValue > 400) return 'alta';
    return 'típica';
  }

  // Lógica por defecto para otras relaciones
  if (cmValue < medianRange.min) return 'baja';
  if (cmValue > medianRange.max) return 'alta';
  return 'típica';
};

// Agregar watch para cargar el histograma cuando se selecciona una relación
watch(selectedRelationshipForAnalysis, (newValue) => {
  if (newValue) {
    store.loadHistogram(newValue)
  }
})

const getCurrentRangeCount = (cmValue, histogram) => {
  if (!cmValue || !histogram || typeof histogram !== 'object') {
    return null;
  }

  const numericCm = Number(cmValue);
  if (isNaN(numericCm)) {
    return null;
  }

  // Encontrar el rango que contiene el valor cM
  for (const [range, count] of Object.entries(histogram)) {
    const [min, max] = range.split('-').map(Number);
    if (numericCm >= min && numericCm <= max) {
      return count;
    }
  }

  return null;
}

const getAncestorGeneration = (relationship) => {
  const genMap = {
    PC: 1, FS: 1, HS: 1, GP: 2, AU: 2, '1C': 2, H1C: 2,
    GAU: 3, '1C1R': 3, '2C': 3, '2C1R': 3, H2C: 3,
    GGAU: 4, '1C2R': 4, '3C': 4, '4C': 5, '5C': 6,
    '6C': 7, '7C': 8, '8C+': 9
  }
  
  const genLevel = genMap[relationship.code] || 0
  const genText = {
    1: 'padre/madre',
    2: 'abuelo/abuela',
    3: 'bisabuelo/bisabuela',
    4: 'tatarabuelo/tatarabuela',
    5: 'tatarabuelo/tatarabuela',
    6: 'ancestro de 5 generaciones',
    7: 'ancestro de 6 generaciones',
    8: 'ancestro de 7 generaciones',
    9: 'ancestro de 8 o más generaciones'
  }[genLevel]
  
  return genText
}

const getAncestorSearchPath = (relationship) => {
  const genMap = {
    PC: 1, FS: 1, HS: 1, GP: 2, AU: 2, '1C': 2, H1C: 2,
    GAU: 3, '1C1R': 3, '2C': 3, '2C1R': 3, H2C: 3,
    GGAU: 4, '1C2R': 4, '3C': 4, '4C': 5, '5C': 6,
    '6C': 7, '7C': 8, '8C+': 9
  }
  
  const genLevel = genMap[relationship.code] || 0
  const searchPath = {
    1: 'padre/madre',
    2: 'abuelo/abuela',
    3: 'bisabuelo/bisabuela',
    4: 'tatarabuelo/tatarabuela',
    5: 'tatarabuelo/tatarabuela',
    6: 'ancestro de 5 generaciones',
    7: 'ancestro de 6 generaciones',
    8: 'ancestro de 7 generaciones',
    9: 'ancestro de 8 o más generaciones'
  }[genLevel]
  
  return searchPath
}

const getGenerationTargets = (relationship) => {
  const genMap = {
    PC: 1, FS: 1, HS: 1,  // Nivel 1 (padres)
    GP: 2, AU: 2, '1C': 2,  // Nivel 2 (abuelos)
    GAU: 3, '1C1R': 3, '2C': 3,  // Nivel 3 (bisabuelos)
    GGAU: 4, '1C2R': 4, '3C': 4,  // Nivel 4 (tatarabuelos)
    '4C': 5, '5C': 6, '6C': 7, '7C': 8, '8C+': 9  // Niveles superiores
  }
  
  const generacion = genMap[relationship.code] || 5
  
  const targets = {
    1: [
      'Revisar registros de nacimiento y bautismo de los padres',
      'Verificar posibles medios hermanos por línea paterna o materna'
    ],
    2: [
      'Investigar a los abuelos de la coincidencia',
      'Explorar hermanos de los abuelos (tíos abuelos)',
      'Revisar matrimonios secundarios o descendencia no reconocida'
    ],
    3: [
      'Investigar a los bisabuelos y su descendencia',
      'Explorar tíos abuelos y primos del padre/madre',
      'Comparar árboles por líneas colaterales'
    ],
    4: [
      'Explorar registros de tatarabuelos en censos o registros parroquiales',
      'Rastrear descendencia lateral en ramas extendidas',
      'Evaluar coincidencias compartidas con ancestros en común'
    ],
    5: [
      'Revisar antepasados 5 generaciones atrás',
      'Comparar coincidencias por línea con otros matches conocidos',
      'Buscar patrones de endogamia o repeticiones de apellidos'
    ]
  }
  
  return targets[generacion] || ['Explorar ancestros lejanos y coincidencias indirectas']
}

const getXMatchGuidance = (xMatch, sexoMatch) => {
  if (xMatch === 'yes') {
    return sexoMatch === 'M'
      ? 'Centrarse en la línea materna del match, ya que los hombres sólo heredan el cromosoma X de su madre.'
      : 'Examinar ambas líneas (materna y paterna), con atención especial a las mujeres en la línea.'
  }
  if (xMatch === 'no') {
    return sexoMatch === 'M'
      ? 'Se puede descartar la línea materna del match (al no compartir X y ser varón).'
      : 'La línea materna es menos probable, pero no completamente descartada.'
  }
  return 'No se cuenta con información sobre coincidencia en el cromosoma X.'
}
</script>

<style>
/* Estilos base */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #fafafa;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.app-container {
  min-height: 100vh;
  background-color: #fafafa;
  width: 100%;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  background-color: #fafafa;
  width: 100%;
}

/* Grid y Layout */
:deep(.n-grid) {
  margin: 0;
  padding: 0;
  gap: 24px;
}

:deep(.n-grid-item) {
  padding: 0;
  margin: 0;
}

/* Sobrescribir estilos de Naive UI */
:deep(.n-space) {
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.n-space-item) {
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.n-space--vertical) {
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.n-space--horizontal) {
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.n-space--flex) {
  padding: 0 !important;
  margin: 0 !important;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 32px;
  padding: 20px 0;
  position: relative;
}

.title {
  font-size: 2rem;
  margin: 0 0 12px 0;
  padding-right: 80px;
}

.subtitle {
  font-size: 1.1rem;
}

/* Formularios y Tarjetas */
.form-section {
  margin-bottom: 24px;
}

:deep(.n-card) {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  margin: 0;
  padding: 0;
}

:deep(.n-card:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

:deep(.n-card-header) {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  margin: 0;
}

:deep(.n-card-content) {
  flex: 1;
  padding: 16px;
  margin: 0;
}

/* Resultados */
.results-section {
  height: 100%;
  margin-top: 0;
  display: flex;
  flex-direction: column;
}

.results-section .n-card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  padding: 0;
  margin: 0;
}

/* Estilos para el estado vacío */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 48px;
  height: 100%;
  min-height: 400px;
  margin: 0;
}

.empty-state .n-icon {
  margin-bottom: 24px;
}

.empty-state-text {
  font-size: 1.5rem;
  font-weight: 500;
  color: #666;
}

/* Ajustes responsive */
@media (max-width: 768px) {
  .empty-state {
    padding: 32px;
    min-height: 300px;
  }

  .empty-state-text {
    font-size: 1.3rem;
  }
}

:deep(.n-tabs) {
  height: 100%;
  margin: 0;
  padding: 0;
}

:deep(.n-tab-pane) {
  height: calc(100vh - 300px);
  overflow-y: auto;
  padding: 16px;
  margin: 0;
}

/* Media Queries para diferentes tamaños de pantalla */
@media (min-width: 1401px) {
  .container {
    max-width: 1600px;
  }
}

@media (max-width: 1400px) {
  .container {
    max-width: 100%;
  }
  
  .title {
    font-size: 1.8rem;
  }
}

@media (max-width: 1200px) {
  .container {
    max-width: 100%;
  }
  
  :deep(.n-grid) {
    gap: 20px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 100%;
  }
  
  .title {
    font-size: 1.6rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  :deep(.n-card-header) {
    padding: 14px;
  }
  
  :deep(.n-card-content) {
    padding: 14px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
  }

  .header {
    padding: 16px 0;
    margin-bottom: 24px;
  }

  .title {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }

  :deep(.n-grid) {
    gap: 16px;
  }

  :deep(.n-card) {
    margin-bottom: 16px;
  }

  :deep(.n-card-header) {
    padding: 12px;
  }

  :deep(.n-card-content) {
    padding: 12px;
  }

  :deep(.n-tab-pane) {
    height: auto;
    min-height: 300px;
    padding: 12px;
  }
}

@media (max-width: 576px) {
  .container {
    max-width: 100%;
  }

  .title {
    font-size: 1.3rem;
  }

  .subtitle {
    font-size: 0.9rem;
  }

  :deep(.n-card-header) {
    padding: 10px;
  }

  :deep(.n-card-content) {
    padding: 10px;
  }
}

/* Estilos específicos para la tarjeta de ancestro */
.ancestor-info {
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  border: 1px solid #91d5ff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.1);
  transition: all 0.3s ease;
}

.ancestor-info:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(24, 144, 255, 0.15);
}

/* Estilos para el selector de idiomas */
.language-selector {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.language-selector .n-space {
  gap: 16px;
}

.language-selector .n-text {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #666;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.language-selector .n-text:hover {
  color: #1890ff;
}

.language-selector .n-text.active {
  color: #1890ff;
  font-weight: 600;
  position: relative;
}

.language-selector .n-text.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border-radius: 2px;
}

.language-selector .n-icon {
  font-size: 1rem;
}

/* Estilos de gradiente para botones */
:deep(.n-button--primary) {
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  border: 1px solid #91d5ff;
  color: #1890ff;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1);
  transition: all 0.3s ease;
}

:deep(.n-button--primary:hover) {
  background: linear-gradient(135deg, #bae7ff 0%, #91d5ff 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15);
  color: #096dd9;
}

:deep(.n-button--error) {
  background: linear-gradient(135deg, #fff1f0 0%, #ffccc7 100%);
  border: 1px solid #ffa39e;
  color: #ff4d4f;
  box-shadow: 0 2px 8px rgba(255, 77, 79, 0.1);
  transition: all 0.3s ease;
}

:deep(.n-button--error:hover) {
  background: linear-gradient(135deg, #ffccc7 0%, #ffa39e 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 77, 79, 0.15);
  color: #cf1322;
}

/* Ajustes responsive para el selector de idiomas */
@media (max-width: 768px) {
  .language-selector {
    position: static;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
  }

  .language-selector .n-space {
    gap: 24px;
  }

  .language-selector .n-text {
    font-size: 1rem;
  }
}

/* Estilos para la sección de sugerencias */
.suggestions-divider {
  margin: 5px 0;
  border-color: #e8e8e8;
}

.suggestions-section {
  background: linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%);
  border-radius: 8px;
  padding: 16px;
  margin-top: 5px;
}

.suggestions-title {
  display: block;
  font-size: 1.1rem;
  color: #1890ff;
  margin-bottom: 12px;
}

.suggestions-intro {
  display: block;
  color: #666;
  margin-bottom: 16px;
  line-height: 1.5;
}

.suggestions-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.suggestion-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  padding: 8px;
  background: white;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.suggestion-item:hover {
  transform: translateX(4px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.suggestion-icon {
  color: #1890ff;
  margin-right: 12px;
  margin-top: 2px;
  font-size: 1.1rem;
}

/* Ajustes responsive */
@media (max-width: 768px) {
  .suggestions-section {
    padding: 12px;
  }
  
  .suggestion-item {
    padding: 6px;
    margin-bottom: 8px;
  }
  
  .suggestions-title {
    font-size: 1rem;
  }
}

/* Estilos para tooltips y ayuda */
.info-icon {
  color: #1890ff;
  margin-left: 8px;
  cursor: help;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.info-icon:hover {
  color: #096dd9;
  transform: scale(1.1);
}

.tooltip-content {
  max-width: 300px;
  padding: 8px;
}

.tooltip-content h4 {
  margin: 0 0 8px 0;
  color: #1890ff;
}

.tooltip-content p {
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.tooltip-content ul {
  margin: 0;
  padding-left: 16px;
}

.tooltip-content li {
  margin-bottom: 4px;
  line-height: 1.4;
}

.help-button {
  margin-left: 8px;
}

/* Ajustes responsive para tooltips */
@media (max-width: 768px) {
  .tooltip-content {
    max-width: 250px;
  }
  
  .info-icon {
    font-size: 1rem;
  }
}

/* Footer Styles */
.app-footer {
  background: linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%);
  border-top: 1px solid #e8e8e8;
  padding: 24px 0;
  margin-top: 48px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 16px;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #1890ff;
  transform: translateY(-2px);
}

.footer-license {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e8e8e8;
}

.footer-license p {
  color: #999;
  font-size: 0.85rem;
  margin: 4px 0;
}

.footer-license a {
  color: #1890ff;
  text-decoration: none;
}

.footer-license a:hover {
  text-decoration: underline;
}

.credits {
  margin-top: 8px;
}

/* Sources Modal Styles */
.sources-modal {
  max-width: 800px;
  width: 90%;
}

.sources-modal .n-card {
  max-height: 80vh;
  overflow-y: auto;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.source-group {
  margin-bottom: 32px;
}

.source-group h4 {
  color: #1890ff;
  margin-bottom: 16px;
  font-size: 1.2rem;
  font-weight: 600;
}

.source-item {
  background: #f8f8f8;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.source-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.source-item h5 {
  color: #1890ff;
  margin: 0 0 12px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.source-author {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.source-description {
  color: #666;
  margin-bottom: 12px;
  line-height: 1.6;
}

.source-link {
  color: #1890ff;
  text-decoration: none;
  font-size: 0.95rem;
  display: inline-block;
  margin-bottom: 12px;
  transition: all 0.3s ease;
}

.source-link:hover {
  color: #096dd9;
  text-decoration: underline;
}

.source-usage {
  color: #999;
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 12px;
}

.source-authors,
.source-rules {
  list-style: none;
  padding: 0;
  margin: 12px 0;
}

.source-authors li,
.source-rules li {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  line-height: 1.6;
}

.source-authors li::before,
.source-rules li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #1890ff;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-links {
    flex-wrap: wrap;
    gap: 24px;
  }
  
  .footer-link {
    font-size: 0.85rem;
  }

  .sources-modal {
    width: 95%;
  }

  .source-item {
    padding: 16px;
  }

  .source-group h4 {
    font-size: 1.1rem;
  }

  .source-item h5 {
    font-size: 1rem;
  }
}
</style>