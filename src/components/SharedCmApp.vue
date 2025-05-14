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
        <div class="title-container">
          <h1 class="title">{{ $t('app.title') }}</h1>
          <p class="subtitle">{{ $t('app.subtitle') }}</p>
        </div>
      </div>
      
      <div class="main-content">
      <n-grid :cols="24" :x-gap="24" responsive="screen">
        <!-- Left Section: Input Cards -->
        <n-grid-item :span="12" :s-span="24" :m-span="12" :l-span="12">
          <!-- Searcher Row -->
          <n-card :title="$t('app.search.title')" hoverable class="form-section">
              <div class="form-row">
                <n-form-item :label="$t('app.search.name')" class="name-field">
                  <n-input v-model:value="store.name1" :placeholder="$t('app.search.placeholder.name')">
                    <template #prefix>
                      <n-icon><Person /></n-icon>
                    </template>
                  </n-input>
                </n-form-item>
                <n-form-item :label="$t('app.search.gender')" class="gender-field">
                  <n-radio-group v-model:value="store.sex1">
                    <n-radio value="F" class="gender-radio">
                      <n-icon size="20" color="#ff69b4"><Woman /></n-icon>
                    </n-radio>
                    <n-radio value="M" class="gender-radio">
                      <n-icon size="20" color="#1e90ff"><Man /></n-icon>
                    </n-radio>
                  </n-radio-group>
                </n-form-item>
                <n-form-item :label="$t('app.search.age')" class="age-field">
                  <n-input-number 
                    v-model:value="store.age1" 
                    :min="0" 
                    :max="120"
                    :show-button="false"
                    placeholder=""
                  />
                </n-form-item>
              </div>
          </n-card>

          <!-- Match Row -->
          <n-card :title="$t('app.match.title')" hoverable class="form-section">
              <div class="form-row">
                <n-form-item :label="$t('app.match.name')" class="name-field">
                  <n-input v-model:value="store.name2" :placeholder="$t('app.match.placeholder.name')">
                    <template #prefix>
                      <n-icon><Person /></n-icon>
                    </template>
                  </n-input>
                </n-form-item>
                <n-form-item :label="$t('app.match.gender')" class="gender-field">
                  <n-radio-group v-model:value="store.sex2">
                    <n-radio value="F" class="gender-radio">
                      <n-icon size="20" color="#ff69b4"><Woman /></n-icon>
                    </n-radio>
                    <n-radio value="M" class="gender-radio">
                      <n-icon size="20" color="#1e90ff"><Man /></n-icon>
                    </n-radio>
                  </n-radio-group>
                </n-form-item>
                <n-form-item :label="$t('app.match.age')" class="age-field">
                  <n-input-number 
                    v-model:value="store.age2" 
                    :min="0" 
                    :max="120"
                    :show-button="false"
                    placeholder=""
                  />
                </n-form-item>
              </div>
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
                        <div class="tooltip-header">
                          <n-icon size="18" color="#1e90ff"><Calculator /></n-icon>
                          <h4>{{ $t('app.dna.cm.tooltip.title') }}</h4>
                        </div>
                        <div class="tooltip-body">
                          <p class="tooltip-intro">{{ $t('app.dna.cm.tooltip.intro') }}</p>
                          <p class="tooltip-note">{{ $t('app.dna.cm.tooltip.note') }}</p>
                        </div>
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
                      :options="[
                        { label: t('app.dna.endogamy.none'), value: 'none' },
                        { label: t('app.dna.endogamy.light') + ' (-9%)', value: 'light' },
                        { label: t('app.dna.endogamy.moderate') + ' (-17%)', value: 'moderate' },
                        { label: t('app.dna.endogamy.high') + ' (-23%)', value: 'high' },
                        { label: t('app.dna.endogamy.very_high') + ' (-29%)', value: 'very_high' }
                      ]"
                      :placeholder="$t('app.dna.endogamy.placeholder')"
                    />
                    <n-tooltip trigger="hover">
                      <template #trigger>
                        <n-icon class="info-icon"><InformationCircle /></n-icon>
                      </template>
                      <div class="tooltip-content">
                          <div class="tooltip-header">
                            <n-icon size="18" color="#1e90ff"><Calculator /></n-icon>
                            <h4>{{ $t('app.dna.endogamy.title') }}</h4>
                          </div>
                          <div class="tooltip-body">
                            <p class="tooltip-intro">{{ $t('app.dna.endogamy.tooltip.intro') }}</p>
                            
                            <p class="tooltip-section">{{ $t('app.dna.endogamy.tooltip.levels.title') }}</p>
                            <ul class="tooltip-list">
                              <li><strong>{{ $t('app.dna.endogamy.none') }}:</strong> {{ $t('app.dna.endogamy.tooltip.levels.none') }}</li>
                              <li><strong>{{ $t('app.dna.endogamy.light') }}:</strong> {{ $t('app.dna.endogamy.tooltip.levels.light') }}</li>
                              <li><strong>{{ $t('app.dna.endogamy.moderate') }}:</strong> {{ $t('app.dna.endogamy.tooltip.levels.moderate') }}</li>
                              <li><strong>{{ $t('app.dna.endogamy.high') }}:</strong> {{ $t('app.dna.endogamy.tooltip.levels.high') }}</li>
                              <li><strong>{{ $t('app.dna.endogamy.very_high') }}:</strong> {{ $t('app.dna.endogamy.tooltip.levels.very_high') }}</li>
                            </ul>

                            <p class="tooltip-section">{{ $t('app.dna.endogamy.tooltip.effects.title') }}</p>
                            <ul class="tooltip-list">
                              <li>{{ $t('app.dna.endogamy.tooltip.effects.adjust') }}</li>
                              <li>{{ $t('app.dna.endogamy.tooltip.effects.higher') }}</li>
                              <li>{{ $t('app.dna.endogamy.tooltip.effects.consider') }}</li>
                            </ul>

                            <p class="tooltip-note">{{ $t('app.dna.endogamy.tooltip.example') }}</p>
                          </div>
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
                      :placeholder="$t('app.dna.x_chromosome.placeholder')"
                    />
                    <n-tooltip trigger="hover">
                      <template #trigger>
                        <n-icon class="info-icon"><InformationCircle /></n-icon>
                      </template>
                      <div class="tooltip-content">
                          <div class="tooltip-header">
                            <n-icon size="18" color="#1e90ff"><Calculator /></n-icon>
                        <h4>Cromosoma X</h4>
                          </div>
                          <div class="tooltip-body">
                            <p class="tooltip-intro">🧬 El cromosoma X tiene un patrón de herencia diferente al resto del ADN.</p>
                            <ul class="tooltip-list">
                              <li>Si <strong>hay coincidencia</strong>, puede ser una pista para identificar si el parentesco viene por la línea materna o por una vía femenina específica.</li>
                              <li>Si <strong>NO hay coincidencia</strong>, <strong>no descarta</strong> la relación genética: muchas relaciones reales no comparten ADN en el X.</li>
                              <li>Si elegís "No sé", la app no aplica ajustes por cromosoma X y muestra el análisis general.</li>
                            </ul>
                            <p class="tooltip-note">👉 Para entender mejor cómo funciona, podés leer esta guía de Cristian Cofré: <a href="https://www.cristiancofre.cl/post/x-match" target="_blank">X-Match</a></p>
                          </div>
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
                      :placeholder="$t('app.dna.x_chromosome.placeholder_cm')"
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
                      :placeholder="$t('app.dna.segments.placeholder_count')"
                      class="compact-input"
                    />
                    <n-tooltip trigger="hover">
                      <template #trigger>
                        <n-icon class="info-icon"><InformationCircle /></n-icon>
                      </template>
                      <div class="tooltip-content">
                          <div class="tooltip-header">
                            <n-icon size="18" color="#1e90ff"><Calculator /></n-icon>
                        <h4>Número de Segmentos</h4>
                          </div>
                          <div class="tooltip-body">
                            <p class="tooltip-intro">El número de segmentos compartidos puede indicar:</p>
                            <ul class="tooltip-list">
                          <li>La antigüedad de la relación (más segmentos = relación más reciente)</li>
                          <li>La probabilidad de una relación específica</li>
                          <li>Posibles eventos de recombinación en el árbol genealógico</li>
                        </ul>
                          </div>
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
                      :placeholder="$t('app.dna.segments.placeholder_largest')"
                      class="compact-input"
                    />
                    <n-tooltip trigger="hover">
                      <template #trigger>
                        <n-icon class="info-icon"><InformationCircle /></n-icon>
                      </template>
                      <div class="tooltip-content">
                          <div class="tooltip-header">
                            <n-icon size="18" color="#1e90ff"><Calculator /></n-icon>
                        <h4>Segmento Más Grande</h4>
                          </div>
                          <div class="tooltip-body">
                            <p class="tooltip-intro">El tamaño del segmento más grande compartido es importante porque:</p>
                            <ul class="tooltip-list">
                          <li>Indica la probabilidad de una relación reciente</li>
                          <li>Ayuda a distinguir entre relaciones cercanas y lejanas</li>
                          <li>Puede sugerir eventos específicos en el árbol genealógico</li>
                        </ul>
                          </div>
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
                  class="action-button calculate-button"
              >
                <template #icon>
                  <n-icon><Search /></n-icon>
                </template>
                {{ $t('app.actions.calculate') }}
              </n-button>
              <n-button 
                type="error" 
                @click="store.clearData"
                :disabled="store.loading"
                  class="action-button clear-button"
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
            <n-card :title="$t('app.results.title')" hoverable class="results-container">
              <template v-if="store.loading">
                <n-spin size="large" />
              </template>
              <template v-else-if="store.relationships.length > 0">
                <!-- Analysis Summary -->
                <n-card :title="$t('app.results.analysis_title')" class="analysis-card">
                  <template #header-extra>
                    <n-tooltip trigger="hover" placement="right">
                      <template #trigger>
                        <n-icon class="info-icon"><InformationCircle /></n-icon>
                      </template>
                      <div class="tooltip-content">
                        <div class="tooltip-header">
                          <n-icon size="18" color="#1e90ff"><Calculator /></n-icon>
                          <h4>Cálculo de Probabilidad</h4>
                        </div>
                        <div class="tooltip-body">
                          <p class="tooltip-intro">El análisis considera los siguientes factores:</p>
                          <div class="factors-grid">
                            <div class="factor-item">
                              <span class="factor-label">Distancia al promedio cM</span>
                              <span class="factor-value">30%</span>
                            </div>
                            <div class="factor-item">
                              <span class="factor-label">Rango de cM</span>
                              <span class="factor-value">20%</span>
                            </div>
                            <div class="factor-item">
                              <span class="factor-label">Número de segmentos</span>
                              <span class="factor-value">20%</span>
                            </div>
                            <div class="factor-item">
                              <span class="factor-label">Tamaño del segmento más grande</span>
                              <span class="factor-value">15%</span>
                            </div>
                            <div class="factor-item">
                              <span class="factor-label">Coincidencia en cromosoma X</span>
                              <span class="factor-value">5%</span>
                            </div>
                            <div class="factor-item">
                              <span class="factor-label">Rango de edad esperado</span>
                              <span class="factor-value">10%</span>
                            </div>
                          </div>
                          <p class="tooltip-note">Nota: El rango de edad ayuda a validar la plausibilidad de la relación. Por ejemplo, un tatarabuelo no suele tener una diferencia de edad menor a 60 años con su descendiente.</p>
                        </div>
                      </div>
                    </n-tooltip>
                  </template>
                  <n-space vertical>
                    <n-text class="analysis-text">
                      <template v-if="store.name1 && store.name2">
                        <span class="name">{{ store.name1 }}</span>
                        <template v-if="store.age1"> ({{ store.age1 }} años)</template>
                        comparte 
                        <span class="cm-value">{{ store.cmValue }}cM</span> con 
                        <span class="name">{{ store.name2 }}</span>
                        <template v-if="store.age2"> ({{ store.age2 }} años)</template>
                        <template v-if="store.numSegments">
                          en <span class="highlight">{{ store.numSegments }}</span> segmentos
                          <template v-if="store.largestSegment">
                            (el más grande de <span class="highlight">{{ store.largestSegment }}cM</span>)
                          </template>
                        </template>.
                        <template v-if="store.age1 && store.age2">
                          <div class="age-difference">
                            La diferencia de edad es de <span class="highlight">{{ Math.abs(store.age1 - store.age2) }}</span> años.
              </div>
                        </template>
                        <template v-if="store.relationships && store.relationships.length > 0">
                          La relación más probable es 
                          <span class="relationship-name">{{ store.relationships[0].name }}</span> 
                          (<span class="probability">{{ (store.relationships[0].probability * 100).toFixed(1) }}%</span> de probabilidad).
                          <template v-if="store.relationships.length > 1">
                            También es posible que sean 
                            <span class="relationship-name">{{ store.relationships[1].name }}</span> 
                            (<span class="probability">{{ (store.relationships[1].probability * 100).toFixed(1) }}%</span> de probabilidad).
                          </template>
                        </template>
                        <template v-if="store.xMatch === 'yes'">
                          <div class="x-match-info">
                            Se comparten <span class="highlight">{{ store.xcmValue }}cM</span> en el cromosoma X.
                            <template v-if="store.sex2 === 'M'">
                              Esto confirma que hay una conexión por línea materna (el match heredó el X de su madre).
                            </template>
                            <template v-else>
                              Esto confirma que hay una conexión por línea materna (ya sea directa o a través del padre, que heredó el X de su madre).
                            </template>
                          </div>
                        </template>
                        <template v-else-if="store.xMatch === 'no'">
                          <div class="x-match-info">
                            No se comparten segmentos en el cromosoma X.
                            <template v-if="store.sex2 === 'M'">
                              Esto sugiere que la relación probablemente viene por línea paterna (el match heredó el X de su madre, pero no hay coincidencia).
                            </template>
                            <template v-else>
                              Esto sugiere que la relación probablemente viene por línea paterna (ya sea directa o a través de la madre, que heredó el X de su madre).
                            </template>
                          </div>
                        </template>
                      </template>
                      </n-text>
                  </n-space>
                </n-card>

                <!-- Investigation Suggestions -->
                <n-card :title="$t('app.results.suggestions_title')" class="suggestions-card">
                  <template #header-extra>
                    <n-button text @click="toggleSuggestions">
                      <template #icon>
                        <n-icon><ArrowForward /></n-icon>
                      </template>
                      {{ showSuggestions ? 'Ocultar' : 'Mostrar' }}
                    </n-button>
                  </template>
                  <n-collapse-transition :show="showSuggestions">
                    <div class="suggestions-content">
                      <ul class="suggestions-list">
                        <template v-if="store.xMatch === 'yes' && store.xcmValue">
                          <li class="x-match-suggestion">
                            <strong>Como marcaste que hay coincidencia en el cromosoma X, estas sugerencias pueden ayudarte a investigar mejor:</strong>
                            <ul>
                              <li>El X no se hereda de cualquier antepasado: solo ciertas líneas familiares lo transmiten.</li>
                              <li v-if="store.sex2 === 'M'">Si tu match es varón, el parentesco tiene que venir por su línea materna (porque los hombres solo heredan el X de su madre).</li>
                              <li v-else>Si tu match es mujer, el parentesco puede venir tanto por el lado materno como paterno, pero solo si esos antepasados transmiten el X:
                                <ul>
                                  <li>Por ejemplo: madre, abuela materna, abuela paterna, tías abuelas por esas líneas.</li>
                                </ul>
                              </li>
                              <li>Podés usar el patrón de herencia del X para descartar ramas imposibles y enfocarte en los caminos más probables.</li>
                            </ul>
                            <p class="x-match-guide">
                              📘 Si querés entender mejor cómo funciona el X-DNA, te recomiendo esta guía clara y en español:
                              <a href="https://www.cristiancofre.cl/post/x-match" target="_blank">X-Match</a>
                            </p>
                          </li>
                        </template>
                        <template v-else-if="store.xMatch === 'no'">
                          <li class="x-match-suggestion">
                            <strong>Como marcaste que no hay coincidencia en el cromosoma X, esto también puede ayudarte:</strong>
                            <ul>
                              <li>Podés usar la ausencia de coincidencia en el X para descartar algunas ramas, especialmente si estás analizando conexiones posibles por línea materna.</li>
                              <li>Por ejemplo, si ambas son mujeres pero no comparten segmentos en el cromosoma X, es menos probable que la conexión venga por una línea puramente materna (como madre → abuela materna → bisabuela materna).</li>
                              <li>Aun así, esto no descarta completamente la relación, porque el X puede no haberse heredado incluso si hay un antepasado en común por esa vía.</li>
                            </ul>
                            <p class="x-match-guide">
                              📘 Más detalles sobre herencia del X en esta guía:
                              <a href="https://www.cristiancofre.cl/post/x-match" target="_blank">Guía de Cristian Cofré sobre X-Match</a>
                            </p>
                          </li>
                        </template>
                        <li v-for="(suggestion, index) in store.investigationSuggestions" :key="index">
                          {{ suggestion }}
                        </li>
                      </ul>
                    </div>
                  </n-collapse-transition>
                </n-card>

                <!-- Relationships List -->
                <n-card :title="$t('app.results.relationships_title')" class="relationships-card">
                  <n-space vertical>
                  <n-list>
                      <n-list-item v-for="rel in store.relationships" :key="rel.code">
                        <n-space justify="space-between" align="center">
                          <n-space vertical>
                            <n-text strong>{{ rel.name }}</n-text>
                            <n-text depth="3">{{ rel.description }}</n-text>
                            <n-text>
                              Promedio: {{ rel.avg_cm }} cM • Rango típico: {{ rel.min_cm }}–{{ rel.max_cm }} cM
                            </n-text>
                          </n-space>
                          <n-text strong>{{ (rel.probability * 100).toFixed(1) }}%</n-text>
                        </n-space>
                    </n-list-item>
                  </n-list>
                  </n-space>
                </n-card>
              </template>
              <template v-else>
                <div class="empty-state">
                  <n-icon size="48" color="#9CA3AF">
                    <DocumentText />
                  </n-icon>
                  <p>{{ $t('app.results.empty_state') }}</p>
                </div>
              </template>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
        </div>
  </div>

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

  <!-- Modal de Fuentes -->
  <n-modal
    v-model:show="showSourcesModal"
    preset="card"
    style="width: 700px"
    title="Fuentes y Referencias"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <n-space vertical size="large">
      <n-text>
        <h3 class="section-title">Shared cM Project v4</h3>
        <div class="source-section">
          <strong>Autor:</strong> Blaine Bettinger
          <br><br>
          <strong>Uso en la aplicación:</strong>
          <ul>
            <li>Rangos de cM para cada tipo de relación</li>
            <li>Construcción de relationships.json</li>
            <li>Generación de histogramas</li>
          </ul>
          <a href="https://thegeneticgenealogist.com/2016/03/07/updated-shared-cm-project/" target="_blank">Ver fuente</a>
        </div>

        <h3 class="section-title">Curvas de Probabilidad</h3>
        <div class="source-section">
          <strong>Autora:</strong> Leah Larkin (The DNA Geek)
          <br><br>
          <strong>Uso en la aplicación:</strong>
          <ul>
            <li>Curvas de probabilidad por relación según cM compartidos</li>
            <li>Construcción de probabilidades.json</li>
            <li>Implementación de interpolación</li>
          </ul>
          <a href="https://thednageek.com/probability-curves/" target="_blank">Ver fuente</a>
        </div>

        <h3 class="section-title">Herencia del Cromosoma X</h3>
        <div class="source-section">
          <strong>Autores:</strong>
          <ul>
            <li>Cristián Cofré (Medium - X-Match)</li>
            <li>Roberta Estes (DNAeXplained)</li>
          </ul>
          <strong>Uso en la aplicación:</strong>
          <ul>
            <li>Construcción de xInheritance.json</li>
            <li>Determinación de líneas ancestrales</li>
            <li>Análisis de patrones de herencia</li>
          </ul>
        </div>

        <h3 class="section-title">Convenciones Genealógicas</h3>
        <div class="source-section">
          <strong>Uso en la aplicación:</strong>
          <ul>
            <li>Códigos estandarizados de relaciones en genealogía genética</li>
            <li>Estructura de datos</li>
            <li>Visualización de relaciones</li>
          </ul>
        </div>

        <h3 class="section-title">Inferencia de Edad y Segmentos</h3>
        <div class="source-section">
          <strong>Reglas empíricas implementadas:</strong>
          <ul>
            <li>Edad esperada ≈ generación × 30 años</li>
            <li>Relaciones más cercanas → más segmentos compartidos</li>
            <li>Tamaño del segmento más grande como indicador secundario</li>
          </ul>
        </div>
      </n-text>
    </n-space>
  </n-modal>
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
  LogoGithub,
  DocumentText,
  Search
} from '@vicons/ionicons5'
import { useMessage } from 'naive-ui'

const { t, locale } = useI18n()
const store = useRelationshipStore()
const message = useMessage()
const showAdvancedOptions = ref(false)
const showSourcesModal = ref(false)
const showResearchGuide = ref(false)
const showSuggestions = ref(true)

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
  } else {
    locale.value = 'es' // Establecer español como idioma por defecto
    localStorage.setItem('locale', 'es')
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
  { label: t('app.dna.endogamy.none'), value: 'none' },
  { label: t('app.dna.endogamy.light'), value: 'light' },
  { label: t('app.dna.endogamy.moderate'), value: 'moderate' },
  { label: t('app.dna.endogamy.high'), value: 'high' },
  { label: t('app.dna.endogamy.very_high'), value: 'very_high' }
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

const toggleResearchGuide = () => {
  showResearchGuide.value = !showResearchGuide.value
}

const toggleSuggestions = () => {
  showSuggestions.value = !showSuggestions.value
}
</script>

<style>
/* Variables de color actualizadas */
:root {
  --primary-color: #8B7355;
  --primary-color-light: #A89B8C;
  --primary-color-dark: #6B5B4A;
  --secondary-color: #7A9D7E;
  --secondary-color-light: #E8F0E9;
  --accent-color: #D4A373;
  --background-light: #F5F3ED;
  --background-white: #FFFDF8;
  --background-yellow: #F9F4E8;
  --text-primary: #4A3C2C;
  --text-secondary: #6B5B4A;
  --border-color: #E5DED3;
  --success-color: #7A9D7E;
  --warning-color: #D4A373;
  --error-color: #C17E61;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.03);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.04);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.05);
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --n-color: #F5F3ED !important;
  --n-merged-color: #F5F3ED !important;
}

/* Estilos base */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  background-color: var(--background-light);
  color: var(--text-primary);
  line-height: 1.5;
}

/* Estilos para el análisis de relación */
.analysis-card {
  background: var(--background-white) !important;
  border: 1px solid var(--border-color) !important;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-md);
}

.analysis-card :deep(.n-card-header) {
  border-bottom: 1px solid var(--border-color);
  padding: var(--spacing-md);
}

.analysis-card :deep(.n-card-header h3) {
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 600;
}

.analysis-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-primary);
  padding: var(--spacing-md);
  padding-left: 0;
}

.analysis-text .name {
  font-weight: 600;
  color: var(--text-primary);
}

.analysis-text .cm-value {
  text-decoration: underline;
  font-weight: 600;
  color: var(--primary-color);
}

.analysis-text .highlight {
  font-weight: 600;
  color: var(--primary-color);
}

.analysis-text .relationship-name {
  font-weight: 600;
  color: var(--text-primary);
  background-color: var(--secondary-color-light);
  padding: 2px 6px;
  border-radius: var(--border-radius-sm);
}

.analysis-text .probability {
  color: var(--primary-color);
  font-weight: 600;
}

.analysis-text .x-match-info {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.95rem;
}

/* Estilos para las sugerencias */
.suggestions-card {
  background-color: var(--background-yellow) !important;
  border: 1px solid var(--border-color) !important;
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-md);
}

.suggestions-card :deep(.n-list-item) {
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.suggestions-card :deep(.n-list-item:last-child) {
  border-bottom: none;
}

/* Estilos para la lista de relaciones */
.relationships-card {
  background: var(--background-white) !important;
  border: 1px solid var(--border-color) !important;
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-md);
}

.relationships-card :deep(.n-list-item) {
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.2s ease;
}

.relationships-card :deep(.n-list-item:hover) {
  background-color: #FFFDF8 !important;
}

.relationships-card :deep(.n-list-item:last-child) {
  border-bottom: none;
}

/* Estilos para el tooltip */
:deep(.n-tooltip),
:deep(.n-popover) {
  --n-color: #F5F3ED !important;
  --n-text-color: #3E3326 !important;
  --n-box-shadow: none!important;
  --n-border: 0px !important;
  --n-border-radius: 0px !important;
  padding: 0px !important;
  margin: 0px !important;
}

.n-popover,
.n-tooltip {background-color:#F5F3ED !important;}

:deep(.n-tooltip-trigger),
:deep(.n-popover-trigger) {
  display: inline-flex;
  align-items: center;
}

:deep(.n-tooltip-arrow),
:deep(.n-popover-arrow) {
  display: block !important;
  border-color: #DDD6CC !important;
  color:#F5F3ED !important; ;
}

.tooltip-content {
  max-width: 350px !important;
  background-color: #FFFFFF !important;
  color: #333333 !important;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
}

.tooltip-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--border-color);
}

.tooltip-header h4 {
  margin: 0;
  color: #000000 !important;
  font-size: 1rem;
  font-weight: 600;
}

.tooltip-header .n-icon {
  color: #000000 !important;
}

.tooltip-body {
  padding: var(--spacing-sm) 0;
  line-height: 1.6;
}

.tooltip-intro {
  margin: 0 0 var(--spacing-md) 0;
  color: #000000;
  font-size: 0.9rem;
}

.tooltip-note {
  margin: var(--spacing-md) 0 0 0;
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-style: italic;
}

.info-icon {
  color: #000000 !important;
  cursor: pointer;
  transition: color 0.2s ease;
}

.info-icon:hover {
  color: #000000 !important;
  opacity: 0.8;
}

/* Forzar estilos de Naive UI */
:deep(.n-tooltip-trigger) {
  color: #000000 !important;
}

:deep(.n-tooltip-trigger:hover) {
  color: #000000 !important;
  opacity: 0.8;
}

/* Forzar eliminación de bordes en botones */
.app-container .container .main-content .button-section .n-button,
.app-container .container .main-content .button-section .n-button.n-button--primary-type,
.app-container .container .main-content .button-section .n-button.n-button--error-type,
.app-container .container .main-content .button-section .n-button:hover,
.app-container .container .main-content .button-section .n-button.n-button--primary-type:hover,
.app-container .container .main-content .button-section .n-button.n-button--error-type:hover,
.app-container .container .main-content .button-section .n-button:focus,
.app-container .container .main-content .button-section .n-button.n-button--primary-type:focus,
.app-container .container .main-content .button-section .n-button.n-button--error-type:focus {
  border: 0 !important;
  border-width: 0 !important;
  border-style: none !important;
  border-color: transparent !important;
  outline: none !important;
  box-shadow: none !important;
  --n-border: 0 !important;
  --n-border-hover: 0 !important;
  --n-border-pressed: 0 !important;
  --n-border-focus: 0 !important;
  --n-border-disabled: 0 !important;
}

/* Estilos específicos para el botón Calcular */
.app-container .container .main-content .button-section .n-button.n-button--primary-type {
  background-color: #7A9D7E !important;
  color: #FFFFFF !important;
  --n-color: #7A9D7E !important;
  --n-color-hover: #6A8D6E !important;
  --n-color-pressed: #6A8D6E !important;
  --n-border: 0 !important;
  --n-border-hover: 0 !important;
  --n-border-pressed: 0 !important;
}

.app-container .container .main-content .button-section .n-button.n-button--primary-type .n-icon {
  color: #FFFFFF !important;
}

.app-container .container .main-content .button-section .n-button.n-button--primary-type:hover .n-icon {
  color: #FFFFFF !important;
}

.app-container .container .main-content .button-section .n-button.n-button--primary-type:active .n-icon {
  color: #FFFFFF !important;
}

/* Estilos específicos para el botón Limpiar */
.app-container .container .main-content .button-section .n-button.n-button--error-type {
  background-color: #E5E5E5 !important;
  color: #333333 !important;
  --n-color: #E5E5E5 !important;
  --n-color-hover: #D5D5D5 !important;
  --n-color-pressed: #D5D5D5 !important;
  --n-border: 0 !important;
  --n-border-hover: 0 !important;
  --n-border-pressed: 0 !important;
}

/* Forzar estilos en el estado disabled */
.app-container .container .main-content .button-section .n-button.n-button--disabled {
  border: 0 !important;
  --n-border: 0 !important;
  --n-border-hover: 0 !important;
  --n-border-pressed: 0 !important;
}

/* Estilos para la sección de guía de investigación */
.research-guide-section {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.research-guide-toggle {
  width: 100%;
  padding: 1rem;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.research-guide-toggle:hover {
  background: var(--background-light);
  border-color: var(--primary-color);
}

.toggle-icon {
  font-size: 0.8rem;
  color: var(--primary-color);
}

.research-guide-content {
  margin-top: 1rem;
  padding: 1.5rem;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.research-guide-content.expanded {
  opacity: 1;
  transform: translateY(0);
}

.research-guide-content h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.research-guide-content ol {
  padding-left: 1.5rem;
  margin: 0;
}

.research-guide-content li {
  margin-bottom: 1rem;
}

.research-guide-content li:last-child {
  margin-bottom: 0;
}

.research-guide-content strong {
  color: var(--text-primary);
  display: block;
  margin-bottom: 0.5rem;
}

.research-guide-content ul {
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

.research-guide-content ul li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.research-guide-content ul li:last-child {
  margin-bottom: 0;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .research-guide-section {
    margin: 1.5rem auto;
  }

  .research-guide-content {
    padding: 1rem;
  }

  .research-guide-content h3 {
  font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .research-guide-section {
    margin: 1rem auto;
  }

  .research-guide-toggle {
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  .research-guide-content {
    padding: 0.8rem;
  }

  .research-guide-content h3 {
    font-size: 1rem;
  }

  .research-guide-content ol,
  .research-guide-content ul {
    padding-left: 1.2rem;
  }
}

/* Estilos para las sugerencias */
.suggestions-card {
  margin-bottom: 16px;
}

.suggestions-toggle {
  padding: 0.5rem 1rem;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.suggestions-toggle:hover {
  background: var(--background-light);
  border-color: var(--primary-color);
}

.suggestions-toggle .toggle-icon {
  font-size: 0.8rem;
  color: var(--primary-color);
}

/* Ajustes responsivos para sugerencias */
@media (max-width: 768px) {
  .suggestions-toggle {
    padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .suggestions-toggle {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
}

/* Contenedor principal */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background-light);
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  flex: 1;
}

.main-content {
  margin: 0;
  width: 100%;
  padding: 0 var(--spacing-lg);
}

/* Estilos del header */
.header {
  position: relative;
  padding: var(--spacing-xl) var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  background: var(--background-light);
}

.language-selector {
  position: absolute;
  right: 0;
  top: var(--spacing-xl);
  padding: 0;
}

.language-selector .n-space {
  gap: var(--spacing-md);
  padding: 0;
}

.language-selector .n-text {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--text-secondary);
}

.language-selector .n-text:hover {
  background-color: var(--background-light);
  color: var(--text-primary);
}

.language-selector .n-text.active {
  background-color: var(--primary-color);
  color: white;
  font-weight: 500;
}

.language-selector .n-text:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
  background-color: var(--primary-color);
  color: white;
}

.title-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}

/* Ajustes responsivos para el header */
@media (max-width: 768px) {
  .header {
    padding: var(--spacing-lg) 0;
    margin-bottom: var(--spacing-lg);
  }

  .language-selector {
    position: relative;
    right: auto;
    top: auto;
    margin-bottom: var(--spacing-lg);
  }

  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .header {
    padding: var(--spacing-md) 0;
    margin-bottom: var(--spacing-md);
  }

  .title {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}

/* Footer Styles */
.app-footer {
  background: var(--background-light);
  border-top: 1px solid var(--border-color);
  padding: 32px var(--spacing-lg);
  margin: 0;
  position: relative;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
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
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: var(--primary-color);
  transform: translateY(-2px);
}

.footer-license {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.footer-license p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 4px 0;
}

.footer-license a {
  color: var(--primary-color);
  text-decoration: none;
}

.footer-license a:hover {
  text-decoration: underline;
}

.credits {
  margin-top: 8px;
}

/* Responsive adjustments for footer */
@media (max-width: 768px) {
  .footer-links {
    flex-wrap: wrap;
    gap: 24px;
  }
  
  .footer-link {
    font-size: 0.85rem;
  }
}

/* Estilos para las tarjetas de formulario */
.form-section {
  background-color: var(--background-light) !important;
  border: 1px solid var(--border-color) !important;
  margin-bottom: var(--spacing-md);
}

.form-row {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: 0;
  width: 100%;
  flex-wrap: nowrap;
  min-width: 0;
}

.name-field {
  width: 300px;
  min-width: 200px;
  flex: 1;
}

.gender-field {
  width: 100px;
  min-width: 80px;
  flex: none;
}

.age-field {
  width: 60px;
  min-width: 60px;
  flex: none;
}

:deep(.n-form-item) {
  margin-bottom: 0;
  min-width: 0;
}

:deep(.n-input-number) {
  width: 100%;
  min-width: 0;
}

:deep(.n-input-number-input) {
  text-align: center;
  width: 100%;
  padding: 0 4px;
}

:deep(.n-radio-group) {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  min-width: 0;
}

:deep(.n-radio) {
  margin-right: 0;
  min-width: 0;
}

:deep(.n-form-item-label) {
  padding-bottom: 4px;
  font-size: 0.9rem;
  white-space: nowrap;
}

:deep(.n-input) {
  width: 100%;
  min-width: 0;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .form-row {
    flex-wrap: wrap;
  }
  
  .name-field {
    width: 100%;
    min-width: 100%;
  }
  
  .gender-field {
    width: 100px;
    min-width: 80px;
  }
  
  .age-field {
    width: 60px;
    min-width: 60px;
  }
}

/* Estilos para el estado vacío */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: var(--spacing-xl) 0;
  text-align: center;
}

.empty-state .n-icon {
  margin-bottom: var(--spacing-md);
  font-size: 48px;
  color: var(--text-secondary);
}

.empty-state p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  max-width: 400px;
}

/* Ajustar el contenedor de resultados */
.results-container {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.results-container :deep(.n-card-header) {
  padding: 0 !important;
  margin-bottom: var(--spacing-md);
}

.results-container :deep(.n-card__content) {
  padding: 0 !important;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.n-list {
  --n-merged-border-color: var(--n-border-color);
  --n-merged-color: #FFFDF8 !important;
  --n-merged-color-hover: #FFFDF8 !important;
}

.suggestions-list {
  padding-left: var(--spacing-md);
}

.tooltip-body {
  padding: var(--spacing-sm) 0;
  line-height: 1.5;
}

.tooltip-list {
  list-style-type: disc;
  padding-left: var(--spacing-md);
  margin: var(--spacing-sm) 0;
}

.tooltip-list li {
  margin-bottom: var(--spacing-xs);
  color: var(--text-secondary);
}

.tooltip-list li strong {
  color: var(--text-primary);
  font-weight: 600;
}

.tooltip-note {
  margin: var(--spacing-md) 0 0 0;
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-style: italic;
}

/* Estilos para el Modal de Fuentes */
:deep(.n-modal) {
  --n-color: var(--background-white) !important;
  --n-text-color: var(--text-primary) !important;
}

:deep(.n-modal .n-card-header) {
  padding: var(--spacing-md) var(--spacing-lg) !important;
  border-bottom: 1px solid var(--border-color) !important;
}

:deep(.n-modal .n-card-header h3) {
  color: var(--text-primary) !important;
  font-size: 1.2rem !important;
  font-weight: 600 !important;
  margin: 0 !important;
}

:deep(.n-modal .n-card__content) {
  padding: var(--spacing-lg) !important;
}

:deep(.n-modal h3) {
  color: var(--text-primary) !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  margin: var(--spacing-md) 0 var(--spacing-sm) 0 !important;
}

:deep(.n-modal ul) {
  list-style-type: none !important;
  padding: 0 !important;
  margin: 0 0 var(--spacing-md) 0 !important;
}

:deep(.n-modal li) {
  margin-bottom: var(--spacing-md) !important;
  padding-left: var(--spacing-md) !important;
  position: relative !important;
}

:deep(.n-modal li:before) {
  content: "•" !important;
  position: absolute !important;
  left: 0 !important;
  color: var(--primary-color) !important;
}

:deep(.n-modal a) {
  color: var(--primary-color) !important;
  text-decoration: none !important;
  transition: color 0.2s ease !important;
}

:deep(.n-modal a:hover) {
  color: var(--primary-color-dark) !important;
  text-decoration: underline !important;
}

:deep(.n-modal strong) {
  color: var(--text-primary) !important;
  font-weight: 600 !important;
}

.section-title {
  color: var(--text-primary) !important;
  font-size: 1.2rem !important;
  font-weight: 600 !important;
  margin: var(--spacing-xl) 0 var(--spacing-md) 0 !important;
  padding-bottom: var(--spacing-sm) !important;
  border-bottom: 2px solid var(--primary-color) !important;
}

.section-title:first-child {
  margin-top: 0 !important;
}

.source-section {
  background-color: var(--background-light) !important;
  padding: var(--spacing-md) var(--spacing-lg) !important;
  border-radius: var(--border-radius-md) !important;
  margin-bottom: var(--spacing-lg) !important;
}

.source-section strong {
  color: var(--text-primary) !important;
  font-weight: 600 !important;
  display: block !important;
  margin-bottom: var(--spacing-xs) !important;
}

.source-section ul {
  list-style-type: disc !important;
  padding-left: var(--spacing-lg) !important;
  margin: var(--spacing-sm) 0 !important;
}

.source-section li {
  margin-bottom: var(--spacing-xs) !important;
  color: var(--text-secondary) !important;
}

.source-section a {
  color: var(--primary-color) !important;
  text-decoration: none !important;
  transition: color 0.2s ease !important;
  display: inline-block !important;
  margin-top: var(--spacing-sm) !important;
}

.source-section a:hover {
  color: var(--primary-color-dark) !important;
  text-decoration: underline !important;
}

/* Estilos para el layout */
:deep(.n-layout) {
  padding: 0 !important;
  background-color: var(--background-light);
}

.n-layout {
  padding: 0px!important;
  background-color: var(--background-light);
}

:deep(.n-layout-scroll-container) {
  padding: 0 !important;
  background-color: var(--background-light);
}

.x-match-suggestion {
  background-color: var(--background-yellow);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-md);
}

.x-match-suggestion strong {
  color: var(--text-primary);
  display: block;
  margin-bottom: var(--spacing-sm);
}

.x-match-suggestion ul {
  list-style-type: disc;
  padding-left: var(--spacing-lg);
  margin: var(--spacing-sm) 0;
}

.x-match-suggestion ul ul {
  list-style-type: circle;
  margin: var(--spacing-xs) 0;
}

.x-match-suggestion li {
  margin-bottom: var(--spacing-xs);
  color: var(--text-secondary);
}

.x-match-guide {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--border-color);
}

.x-match-guide a {
  color: var(--primary-color);
  text-decoration: none;
}

.x-match-guide a:hover {
  text-decoration: underline;
}
</style>