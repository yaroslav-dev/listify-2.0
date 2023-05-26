// Composables
import { createRouter, createWebHistory } from 'vue-router'
import DefaultVue from '@/layouts/default/Default.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
        path: '/signup',
        name: 'Registration',
        component: () => import('@/views/Register.vue'),
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

// const auth = getAuth()
router.beforeEach( (to) => {
  // onAuthStateChanged(auth, (user) => {
  //   if (!user && (to.name != 'Login')) {
  //     router.push({name: 'Login'})
  //   } else if (!user && to.name != 'Registration') {
  //     router.push({name: 'Registration'})
  //   } else if (user && to.name == 'Login') {
  //     router.push({name: 'Home'})
  //   }
  // })

  // const persist = usePersist()

  // let db
  // let transaction
  // let storage: any
  // let res: any

  // const openRequest = indexedDB.open('firebaseLocalStorageDb')
  // openRequest.onsuccess = () => {
  //   db = openRequest.result
  //   transaction = db.transaction('firebaseLocalStorage')
  //   storage = transaction.objectStore('firebaseLocalStorage').getAll()
  //   storage.onsuccess = async () => {
  //     res = await storage.result.find((index: any) => index.value !== '1')
  //     persist.setPersist(res)
  //     if (!res && (to.name != 'Login' , to.name != 'Registration')) {
  //       router.push({name: 'Login'})
  //     }
  //     if (res && to.name == 'Login') {
  //       router.push({name: 'Home'})
  //     }
  //   }
  // }
})

export default router
