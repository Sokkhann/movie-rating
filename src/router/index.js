// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import CardList from '@/views/card/CardList.vue'
import CardDetail from '@/views/card/CardDetail.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import HomePage from '@/views/HomePage.vue'
import CategoryPage from '@/views/CategoryPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/card/:id', // Dynamic route for card details
    name: 'CardDetail',
    component: CardDetail,
  },
  {
    path: '/movie', // Dynamic route for card details
    name: 'Movie',
    component: CardList,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  { path: '/:category', component: CategoryPage, props: true }, // Dynamic category route
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
