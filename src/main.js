import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import App from './App.vue';
import WorkDetails from './components/WorkDetails.vue';
import PageLayout from './components/PageLayout.vue';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PageLayout,
    },
    {
      path: '/work/:title',
      component: WorkDetails,
      props: true,
    },
  ],
  scrollBehavior(to) {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
    };
  }
  return { top: 0 };
}

});

createApp(App)
  .use(router)
  .mount('#app');