import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/JournalView.vue'
import ContactView from '../views/ContactView'
import ClavierView from '../views/ClavierView'
import AddContactView from '../views/AddContactView'

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
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/addcontact',
    name: 'addcontact',
    component: AddContactView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
