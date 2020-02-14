import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'

Vue.use(Router)

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  { path: '/', name: 'welcome', component: page('welcome.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/home', name: 'home', component: page('main.vue') },
  { path: '/main', name: 'main', component: page('main.vue') },
  { path: '/companies/:page', name: 'companies', component: page('companies.vue'), props: route => ({ page: (route.query.page || 1) }) },
  { path: '/company/:id', name: 'company-detail', component: page('company/detail.vue') },
  { path: '/articles', name: 'articles', component: page('main.vue') },
  { path: '/contact', name: 'contact', component: page('contact.vue') },
  { path: '/cities', name: 'cities', component: page('main.vue') },
  { path: '/add_company', name: 'add_company', component: page('main.vue') },
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
