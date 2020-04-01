import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/team.vue')
  },
  {
    path: '/modpack',
    name: 'ModPack',
    component: () => import('../views/modpack.vue')
  },
  {
    path: '/teamcoolkids',
    name: 'Team Cool Kids',
    component: () => import('../views/teamcoolkids.vue')
  },
  {
    path: '/Topinambour',
    name: 'Topinambour',
    component: () => import('../views/topinambour.vue')
  },
  {
    path: '/P-AZ-per',
    name: 'P-AZ-per',
    component: () => import('../views/pazper.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
