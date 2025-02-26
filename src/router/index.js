// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import CardDetail from '@/views/card/CardDetail.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import HomePage from '@/views/HomePage.vue'
import CategoryPage from '@/views/CategoryPage.vue'
import CardCagegoryList from '@/views/card/CardCagegoryList.vue'

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
    path: '/favorite', // Dynamic route for card details
    name: 'Favorite',
    component: CardCagegoryList,
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
