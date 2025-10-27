import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NewsView from '@/views/NewsView.vue'
import CategoryView from '@/views/CategoryView.vue'
import CategoryDetail from '@/views/CategoryDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
    },
    {
      path: '/user-profile',
      name: 'User',
      component: ProfileView,
    },
    {
      path: '/news',
      name: 'News',
      component: NewsView,
    },
    {
      path: '/category',
      name: 'Category',
      component: CategoryView,
    },
    {
      path: '/category/:name',
      name: 'Category-Name',
      component: CategoryDetail,
    },
  ],
})

export default router
