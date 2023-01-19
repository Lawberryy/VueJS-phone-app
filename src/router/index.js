import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/JournalView.vue'
import ContactView from '../views/ContactView'
import ClavierView from '../views/ClavierView'

const routes = [
  {
    path: '/',
    name: 'journal',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    // component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
