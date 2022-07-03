import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/NewView.vue')
    },
    {
      path: '/',
      name: 'api',
      component: () => import('../views/ApiView.vue')
    },
    {
      path: '/api/:id',
      name: 'moreInfo',
      component: () => import('../views/MoreInfo.vue')
    }
  ]
})

export default router
