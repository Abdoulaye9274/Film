import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/login', component: LoginPage, name: 'Login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;