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
