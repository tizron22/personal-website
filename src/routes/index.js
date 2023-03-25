const routes = [
  {
    path: '/',
    component: homeView,
    name: 'Home'
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
