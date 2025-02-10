import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import WorkDesc from './components/WorkDetails.vue';
import HomeSection from './components/HomeSection.vue';

const routes = [
  {
    path: '/',
    component: HomeSection,
  },
  {
    path: '/work/:workId',
    component: WorkDesc,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

export default router;