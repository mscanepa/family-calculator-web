import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import { createPinia } from 'pinia'
import i18n from './i18n'
import './style.css'

const app = createApp(App)

app.use(naive)
app.use(createPinia())
app.use(i18n)

app.mount('#app')
