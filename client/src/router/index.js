import Vue from 'vue'
import VueRouter from 'vue-router'
import Gym from '../views/Gym.vue'
import Restaurant from '../views/Restaurant.vue'
import User from '../views/User.vue'
import AddClient from '../views/AddClient.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'gym',
    component: Gym
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: Restaurant
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/addClient',
    name: 'addClient',
    props: {
      childWindow: true
    },
    component: AddClient
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
