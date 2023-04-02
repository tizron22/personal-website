const routes = [
  {
    path: '/',
    component: homeView,
    name: 'Home'
  },
  {
    path: '/',
    component: loginView,
    name: 'Login'
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
