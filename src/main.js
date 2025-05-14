import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import App from './App.vue';
import WorkDetails from './components/WorkDetails.vue';
import PageLayout from './components/PageLayout.vue';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory('/Portfolio/'),
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
});

createApp(App)
  .use(router)
  .mount('#app');
