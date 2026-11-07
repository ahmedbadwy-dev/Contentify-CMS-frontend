import { createRouter, createWebHistory } from 'vue-router'
import { checkAuth } from '@/view/admin/actions/checkAuth'
import { useToast } from 'vue-toastification'

const toast = useToast()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Auth',
      path: '/',
      component: () => import('@/view/auth/AuthPage.vue'),
      children: [
        {
          name: 'Login',
          path: '/',
          component: () => import('@/view/auth/LoginPage.vue'),
        },
        {
          name: 'Register',
          path: 'register',
          component: () => import('@/view/auth/RegisterVue.vue'),
        },
      ],
    },
    {
      name: 'Admin',
      path: '/admin',
      component: () => import('@/view/admin/AdminPage.vue'),
      redirect: { name: 'Dashboard' },
      meta: { Auth: true },
      children: [
        {
          name: 'Dashboard',
          path: 'dashboard',
          component: () => import('@/view/admin/DashboardPage.vue'),
        },
        {
          name: 'Create-Post',
          path: 'crate-post',
          component: () => import('@/view/admin/Create-PostPage.vue'),
        },
        {
          name: 'Post-List',
          path: 'post-list',
          component: () => import('@/view/admin/Post-ListPage.vue'),
        },
      ],
    },
  ],
})

router.beforeEach(async (to) => {
  const requiresAuth = to.matched.some((record) => record.meta.Auth)
  if (!requiresAuth) return true

  try {
    const resAuth = await checkAuth()
    if (resAuth.status === 200) return true

    toast.warning('ليس لك الصلاحيه للقيام بهذا العمل')
    return { name: 'Login' }
  } catch {
    toast.error('حدث خطا غير متوقع')
    return { name: 'Login' }
  }
})

export default router
