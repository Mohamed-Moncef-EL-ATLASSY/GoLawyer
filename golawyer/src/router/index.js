import { createRouter, createWebHistory } from 'vue-router'

import homepage from '../views/homepage.vue'
import dashboard from '../views/dashboard.vue'
import login from '../views/login.vue'
import signin from '../views/signin.vue'
import showRef from '../views/showRef.vue'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  },
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'signin',
    component: signin
  },
  {
    path: '/',
    name: 'showRef',
    component: showRef
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
