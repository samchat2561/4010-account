import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Public",
      component: () => import('../views/Layouts/DefaultLayout.vue'),
      redirection: "/",
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
      ],
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('../views/Layouts/AboutLayout.vue'),
      redirect: '/page',
      children: [
        {
          path: '/page/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        }
      ]
    },
    {
      path: '/person',
      name: 'PersonPage',
      component: () => import('../views/Layouts/PersonalLayout.vue'),
      redirect: '/page',
      children: [
        {
          path: '/page/person',
          name: 'person',
          component: () => import('../views/PersonalView.vue'),
        }
      ]
    },
    {
      path: '/admin',
      name: 'DashBoardAdmin',
      component: () => import('../views/Layouts/DashboardLayout.vue'),
      redirect: '/admin',
      children: [
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          component: () => import('../views/DashboardView.vue')
        }
      ]
    },
    {
      path:'/counter',
      name:'counter',
      component:()=>import('../views/CouterView.vue')
    }
  ]
})

export default router
