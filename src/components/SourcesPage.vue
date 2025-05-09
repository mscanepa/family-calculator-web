<template>
  <div class="sources-popup" v-if="showPopup">
    <div class="popup-content">
      <button class="close-button" @click="closePopup">&times;</button>
      <h1>Fuentes Usadas en Este Sistema</h1>
      <div class="source-group">
        <h2>Datos Genéticos</h2>
        <div class="source-item">
          <h3>Shared cM Project v4</h3>
          <p class="source-author">Blaine Bettinger</p>
          <p class="source-description">Proporciona rangos de cM para cada tipo de relación</p>
          <a href="https://dnapainter.com/tools/sharedcmv4" target="_blank" class="source-link">
            dnapainter.com/tools/sharedcmv4
          </a>
          <p class="source-usage">Usado para construir relationships.json y los histogramas</p>
        </div>
        <div class="source-item">
          <h3>Probability Curves</h3>
          <p class="source-author">Leah Larkin (The DNA Geek)</p>
          <p class="source-description">Curvas de probabilidad por relación según cM compartidos</p>
          <a href="https://thednageek.com" target="_blank" class="source-link">
            thednageek.com
          </a>
          <p class="source-usage">Usado para probabilidades.json y la interpolación</p>
        </div>
      </div>
      <div class="source-group">
        <h2>Herencia del Cromosoma X</h2>
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
        <h2>Convenciones Genealógicas</h2>
        <div class="source-item">
          <p class="source-description">Códigos de relación estandarizados en genealogía genética</p>
          <p class="source-usage">Usado para la estructura de datos y visualización de relaciones</p>
        </div>
      </div>
      <div class="source-group">
        <h2>Inferencia de Edad y Segmentos</h2>
        <div class="source-item">
          <p class="source-description">Reglas empíricas para análisis:</p>
          <ul class="source-rules">
            <li>Edad esperada ≈ generación × 30 años</li>
            <li>Relación más cercana → más segmentos compartidos</li>
            <li>Tamaño del segmento más grande como indicador secundario</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showPopup = ref(false);

function closePopup() {
  showPopup.value = false;
}
</script>

<style>
.sources-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.source-group {
  margin-bottom: 32px;
}

.source-group h2 {
  color: #1890ff;
  margin-bottom: 16px;
  font-size: 1.5rem;
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

.source-item h3 {
  color: #1890ff;
  margin: 0 0 12px 0;
  font-size: 1.2rem;
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
</style> 