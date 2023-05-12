// Composables
import { createRouter, createWebHistory } from 'vue-router'
import DefaultVue from '@/layouts/default/Default.vue'
import { usePersist } from '@/store/persist'

const routes = [
  {
    path: '/',
    component: DefaultVue,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: '/timer',
        name: 'Timer',
        component: () => import('@/views/Timer.vue')
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue')
      },
      {
        path: '/list',
        name: 'List',
        component: () => import('@/views/List.vue'),
        children: [
          {
            path: ':id',
            component: () => import('@/views/List.vue')
          }
        ]
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to) => {
  const persist = usePersist()

  let db
  let transaction
  let storage: any
  let res: any

  const openRequest = indexedDB.open('firebaseLocalStorageDb')
  openRequest.onsuccess = () => {
    db = openRequest.result
    transaction = db.transaction('firebaseLocalStorage')
    storage = transaction.objectStore('firebaseLocalStorage').getAll()
    storage.onsuccess = () => {
      res = storage.result.find((index: any) => index.value !== '1')
      persist.setPersist(res)
      if (!res && to.name !== 'Login') {
        router.push({name: 'Login'})
      }
    }
  }
})

export default router
