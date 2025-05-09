import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SourcesPage from '../components/SourcesPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sources',
    name: 'Sources',
    component: SourcesPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 