import { createRouter, createWebHistory } from 'vue-router';
import SharedCmApp from '../src/components/SharedCmApp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SharedCmApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;