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

var isAuth = false
router.beforeEach(async (to, from, next) => {
  if (
    to.matched.some((record) => {
      return record.meta.Auth
    })
  ) {
    if (isAuth == true) {
      next()
      return
    }
    try {
      const resAuth = await checkAuth()

      if (resAuth.status != 200) {
        toast.warning('ليس لك الصلاحيه للقيام بهذا العمل')
        window.location.href = '/'
        return
      } else {
        isAuth = true
        next()
        return
      }
    } catch (error) {
      toast.error('حدث خطا غير متوقع')
      window.location.href = '/'
      return
    }
  }
  next()
})

export default router
