import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/:lang',
      component: Index,
      beforeEnter: (to, _, next) => {
        ['en', 'ru', 'ua'].includes(to.params.lang as string) ? next() : next('/ua');
      }
    },
    {
      path: "/",
      redirect: "/ua"
    }
  ]
})

export default router
