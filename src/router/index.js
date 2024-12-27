import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/loginView.vue'
import HomeView from '@/views/homeView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path:'/register',
    name:'register',
    component: () => import('@/views/registerView.vue')
  },
  {
    path: '',
    name: 'screen',
    component: import('@/components/screenView.vue'),
    // meta: isAuthenticated=true
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: '/setting',
        name: 'setting',
        component: import('@/views/settingView.vue'),
      },
      {
        path:'/course',
        name:'course',
        component: import("@/views/courseView.vue")
      },
      {
        path: '/about',
        name: 'about',
        component: import("@/views/aboutView.vue")
      },
      {
        path: '/class/:id',
        name: 'class',
        component: import("@/views/videoView.vue")
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,


  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          // Handle back/forward navigation
          resolve({ ...savedPosition, behavior: 'smooth' });
        } else {
          // Default scroll to top
          resolve({ left: 0, top: 0, behavior: 'smooth' });
        }
      }, 500); // Adjust the delay as needed
    });
  },
})
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !localStorage.getItem('token')) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })


export default router
