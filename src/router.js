import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/add',
    name: 'AddBlog',
    component: () => import('./components/AddBlog.vue')
  },
  {
    path: '/blog/:id',
    name: 'BlogDetails',
    component: () => import('./components/BlogDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
