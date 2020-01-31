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
        component:()=>import('@/views/menu/child/Msweater')
      },
      {
        path: 'shirt',
        name:'shirt',
        component:()=>import('@/views/menu/child/Mshirt')
      },
      {
        path: 'Tshirt',
        name:'Tshirt',
        component:()=>import('@/views/menu/child/MTshirt')
      },
      {
        path: 'coat',
        name:'coat',
        component:()=>import('@/views/menu/child/Mcoat')
      },
      {
        path: 'pants',
        name:'pants',
        component:()=>import('@/views/menu/child/Mpants')
      },
      {
        path: 'longs',
        name:'longs',
        component:()=>import('@/views/menu/child/Mlongs')
      },
      {
        path: 'kilt',
        name:'kilt',
        component:()=>import('@/views/menu/child/Mkilt')
      },
      {
        path: 'longuette',
        name:'longuette',
        component:()=>import('@/views/menu/child/Mlonguette')
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
