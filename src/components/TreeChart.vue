<template>
    <svg ref="svg" :width="width" :height="height" class="w-100"></svg>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import * as d3 from 'd3'
  
  const props = defineProps({
    treeData:    { type: Object, required: true },    // JSON jerárquico
    highlightIds:{ type: Array,  default: () => [] }, // ids para resaltar X
    width:       { type: Number, default: 900 },
    height:      { type: Number, default: 500 }
  })
  
  const svg = ref(null)
  
  function draw() {
    // limpiar contenido previo
    const container = d3.select(svg.value)
    container.selectAll('*').remove()
  
    // jerarquía y layout
    const root = d3.hierarchy(props.treeData)
    const layout = d3.tree().size([props.width - 100, props.height])
    layout(root)
  
    // contenedor desplazado para margen izquierdo
    const g = container
      .append('g')
      .attr('transform', 'translate(50,0)')
  
    // enlaces (links)
    g.selectAll('path.link')
      .data(root.links())
      .join('path')
        .attr('class', 'link')
        .attr('d', d3.linkVertical()
          .x(d => d.x)
          .y(d => d.y)
        )
        .attr('stroke', d =>
          props.highlightIds.includes(d.target.data.id) ? 'red' : '#ccc'
        )
        .attr('stroke-width', 2)
        .attr('fill', 'none')
  
    // nodos
    const node = g.selectAll('g.node')
      .data(root.descendants())
      .join('g')
        .attr('class', 'node')
        .attr('transform', d => `translate(${d.x},${d.y})`)
  
    // círculo
    node.append('circle')
        .attr('r', 8)
        .attr('fill', d =>
          props.highlightIds.includes(d.data.id) ? '#fee' : '#fff'
        )
        .attr('stroke', '#333')
        .attr('stroke-width', 1.5)
  
    // etiqueta
    node.append('text')
        .attr('dy', -12)
        .attr('text-anchor', 'middle')
        .text(d => d.data.name)
        .attr('font-size', '0.75rem')
        .attr('pointer-events', 'none')
  }
  
  onMounted(draw)
  watch([() => props.treeData, () => props.highlightIds], draw)
  </script>
  
  <style scoped>
  .link:hover {
    stroke-width: 4;
  }
  .node:hover circle {
    stroke: #007bff;
    stroke-width: 2.5;
  }
  </style>
  