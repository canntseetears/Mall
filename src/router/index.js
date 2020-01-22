import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:()=>import('@/views/home/Home')
  },
  {
    path: '/menu',
    component:()=>import('@/views/menu/Menu')
  },
  {
    path: '/cart',
    component:()=>import('@/views/cart/Cart')
  },
  {
    path: '/my',
    component:()=>import('@/views/my/My')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
