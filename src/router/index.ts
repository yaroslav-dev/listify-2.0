// Composables
import { createRouter, createWebHistory } from 'vue-router'
import DefaultVue from '@/layouts/default/Default.vue'
import { getCurrentAuth } from './auth';

const routes = [
  {
    path: '/',
    component: DefaultVue,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/timer',
        name: 'Timer',
        component: () => import('@/views/Timer.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/list',
        name: 'List',
        component: () => import('@/views/List.vue'),
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: ':id',
            component: () => import('@/views/List.vue')
          }
        ]
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: '/signup',
        name: 'Registration',
        component: () => import('@/views/Register.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await getCurrentAuth()) {
    return '/login';
  } 
})

export default router
