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
    component:()=>import('@/views/menu/Menu'),
    children:[
      {
        path:'sweater',
        name:'sweater',
        component:import('@/views/menu/child/Mcontentmain')
      }
    ]
  },
  {
    path: '/cart',
    component:()=>import('@/views/cart/Cart')
  },
  {
    path: '/my',
    component:()=>import('@/views/my/My')
  },
  {
    path: '/detail/:id',
    component:()=>import('@/views/detail/Detail')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
