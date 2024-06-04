import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../views/LoginPage.vue'
import LoginPage from '../views/RegisterPage.vue'

const routes = [
  {
    path: '/',
    component: RegisterPage
  },
  {
    path: '/login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
