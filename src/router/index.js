import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favs',
    name: 'Favs',
    component: () => import('../views/Favs.vue')
  },
  {
    path: '/photo/:id',
    name: 'PhotoPage',
    component: () => import( '../views/PhotoPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
