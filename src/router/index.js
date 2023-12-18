import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '',
          name: 'Home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "home" */ '../views/LandingPage.vue'),
        },
      ],
    },
    {
      path: '/Booking',
      children: [
        {
          path: '',
          name: 'Booking',
          // route level code-splitting
          // this generates a separate chunk (Booking.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "home" */ '../views/Booking.vue'),
        },
      ],
    },
    {
      path: '/Status',
      children: [
        {
          path: '',
          name: 'Status',
          // route level code-splitting
          // this generates a separate chunk (Status.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "home" */ '../views/Status.vue'),
        },
      ],
    },
    {
      path: '/Pembayaran',
      children: [
        {
          path: '',
          name: 'Pembayaran',
          // route level code-splitting
          // this generates a separate chunk (Pembayaran.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "home" */ '../views/Pembayaran.vue'),
        },
      ],
    },
  ]
})

export default router
