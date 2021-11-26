import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),  
    meta: { title: "登录" },
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/Index'), 
    meta: { title: "主页",requireAuth: true },
    redirect:"/exupdata", 
    children:[
      {
      path:'/exupdata',
      name:'Exupdata',
      component:()=>import('@/views/exupdata/Exupdata'),
      meta: { title: "数据上传",requireAuth: true },
      },
      {path:'/databrows',
      name:'Databrows',
      component:()=>import('@/views/databrows/Databrows'),
      meta: { title: "数据浏览",requireAuth: true },
      },
      {path:'/usersetup',
      name:'Usersetup',
      component:()=>import('@/views/usersetup/Usersetup'),
      meta: { title: "用户设置",requireAuth: true },
      }
    ]
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404"),
    meta: { title: "404-NotFound" },
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
  
]

const router = new VueRouter({
  routes
})

export default router
