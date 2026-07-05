import { createRouter, createWebHistory } from 'vue-router'

function redirectToFirstTab(to) {
  if (!to.query.tab) {
    return { path: to.path, query: { ...to.query, tab: '0' } }
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/application',
    name: 'application',
    component: () => import('../views/DocPage.vue'),
    beforeEnter: [redirectToFirstTab],
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('../views/DocPage.vue'),
  },
  {
    path: '/awards-history',
    name: 'awards-history',
    component: () => import('../views/DocPage.vue'),
    beforeEnter: [redirectToFirstTab],
  },
  {
    path: '/landmark',
    name: 'landmark',
    component: () => import('../views/DocPage.vue'),
  },
  {
    path: '/attachments',
    name: 'attachments',
    component: () => import('../views/DocPage.vue'),
    beforeEnter: [redirectToFirstTab],
  },
  {
    path: '/achievement-video',
    name: 'achievement-video',
    component: () => import('../views/DocPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
