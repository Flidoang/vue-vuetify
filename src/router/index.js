import { createRouter, createWebHistory } from 'vue-router'

// Dashboard Layout and Views
import DashboardView from '@/views/DashboardView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NewsView from '@/views/NewsView.vue'
import CategoryView from '@/views/CategoryView.vue'
import CategoryDetail from '@/views/CategoryDetail.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

// Public Layout and Views
import PublicLayout from '@/layouts/PublicLayout.vue'
import LandingPageView from '@/views/public/LandingPageView.vue'
import LoginView from '@/views/public/LoginView.vue'
import RegisterView from '@/views/public/RegisterView.vue'
import CategoryPublicView from '@/views/public/CategoryPublicView.vue'

// Error View
import NotFoundView from '@/views/error/NotFoundView.vue'

const login = false // Simulated authentication status

const requireAuth = (to, from, next) => {
  if (!login) {
    alert('You must be logged in to access this page.')
    next({ name: 'Login' })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Dashboard and its children
    {
      path: '/dashboard',
      component: DashboardLayout,
      beforeEnter: requireAuth,
      children: [
        {
          path: 'home',
          name: 'Dashboard',
          component: DashboardView,
        },
        {
          path: 'user-profile',
          name: 'User',
          component: ProfileView,
        },
        {
          path: 'news',
          name: 'News',
          component: NewsView,
        },
        {
          path: 'category',
          name: 'Category',
          component: CategoryView,
        },
        {
          path: 'category/:name',
          name: 'Category-Name',
          component: CategoryDetail,
        },
      ],
    },

    // Public
    {
      path: '/',
      component: PublicLayout,
      children: [
        {
          path: 'LandingPage',
          name: 'Home',
          component: LandingPageView,
        },
        {
          path: 'login',
          name: 'Login',
          component: LoginView,
        },
        {
          path: 'register',
          name: 'Register',
          component: RegisterView,
        },
        {
          path: 'category',
          name: 'CategoryPublic',
          component: CategoryPublicView,
        },
      ],
    },

    // Not Found
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

export default router
