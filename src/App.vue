<template>
  <n-config-provider>
    <n-message-provider>
      <n-layout>
        <n-layout-content>
          <n-space vertical size="large" style="padding: 20px">
            <SharedCmApp />
          </n-space>
        </n-layout-content>
      </n-layout>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, NMessageProvider, NLayout, NLayoutContent, NSpace } from 'naive-ui'
import SharedCmApp from './components/SharedCmApp.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style> 