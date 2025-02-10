import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/HomeSection.vue';
import About from './components/AboutSection.vue';
import Work from './components/WorkSection.vue';
import WorkDesc from './components/WorkDetails.vue';
import Contact from './components/ContactSection.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/work',
    component: Work,
  },
  {
    path: '/work/:workId',
    component: WorkDesc,
  },
  {
    path: '/contact',
    component: Contact,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

const app = createApp(App);
app.use(router);
app.mount('#app');

export default router;
