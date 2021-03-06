import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'

Vue.use(Router)

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  { path: '/', name: 'home', component: page('home.vue') },
  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/company/:id', name: 'company-detail', component: page('company/detail.vue') },
  { path: '/listing/:id', name: 'listing-detail', component: page('company/listing_detail.vue') },
  { path: '/city/:slug?/:page(\\d+)?/:sort?', name: 'city-detail', component: page('cities/detail.vue') },
  { path: '/cities/:page(\\d+)?/', name: 'cities', component: page('cities/index.vue') },
  { path: '/articles', name: 'articles', component: page('article/index.vue') },
  { path: '/article/:slug/', name: 'article-slug', component: page('article/detail.vue') },
  { path: '/companies/:page(\\d+)?/', name: 'companies', component: page('company/companies.vue') },
  { path: '/contact', name: 'contact', component: page('contact.vue') },
  { path: '/privacy', name: 'privacy', component: page('privacy.vue') },
  { path: '/categories', name: 'categories', component: page('categories/index.vue'), props: route => ({ page: (route.query.page || 1) }) },
  { path: '/category/:slug?/:page(\\d+)?/:sort?', name: 'category-slug', component: page('categories/category.vue') },
  { path: '/search/:page?/', name: 'search-page', component: page('search/index.vue'), props: (route) => ({ keyword: route.query.keyword }) },
  { path: '/add_company', name: 'add_company', component: page('auth/login.vue') },
  { path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ] }
]

export function createRouter () {
  return new Router({
    routes,
    scrollBehavior,
    mode: 'history'
  })
}
