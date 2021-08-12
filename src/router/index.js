import Vue from 'vue'
import VueRouter from 'vue-router'
import RedL from '../views/Red.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Red',
    component: RedL
  },
  {
    path: '/red',
    name: 'Red',
    component: RedL
  },
  {
    path: '/yellow',
    name: 'Yellow',
    component: () => import('../views/Yellow.vue')
  },
  {
    path: '/green',
    name: 'Green',

    component: () => import('../views/Green.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
