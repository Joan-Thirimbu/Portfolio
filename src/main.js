import { createApp } from 'vue';
import * as VueRouter from 'vue-router'
import App from './App.vue';
import WorkDetails from './components/WorkDetails.vue';
import PageLayout from './components/PageLayout.vue';

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/',
        component: PageLayout,
      },
      {
        path: '/work/:workId',
        component: WorkDetails,
        props: true,
      },
    ]
}))

.mount('#app')