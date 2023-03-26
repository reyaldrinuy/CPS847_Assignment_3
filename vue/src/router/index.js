import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about_us',
      name: 'about us',
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/our_services',
      name: 'our services',
      component: () => import('../views/OurServices.vue')
    },
    {
      path: '/our_customers',
      name: 'our customers',
      component: () => import('../views/OurCustomers.vue')
    }
  ]
})

export default router
