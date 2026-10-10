import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Auth',
      path: '/auth',
      component: () => import('@/view/auth/AuthPage.vue'),
      children: [
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/view/auth/LoginPage.vue'),
        },
        {
          name: 'Register',
          path: 'register',
          component: () => import('@/view/auth/RegisterVue.vue'),
        },
      ],
    },
  ],
})

export default router
