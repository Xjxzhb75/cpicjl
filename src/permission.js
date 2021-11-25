import router from './router'
import store from './store'
import getPageTitle from '@/utils/get-page-title'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
import {getToken} from "@/utils/auth"; // progress bar style
//页面加载导航条工具
NProgress.configure({showSpinner: false}) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start()
    // set page title
    document.title = getPageTitle(to.meta.title)
    // determine whether the user has logged in
    const hasToken = getToken();

    if (hasToken) {
        if (to.path === '/') {
            //如果是登录页，还有token那么直接放行
            next()
            NProgress.done()
            }else{
            //有token访问的不是登录页关键字 await 让 JavaScript 引擎等待直到 Store.dispatch 完成在向下进行
            await store.dispatch('user/getInfo')
            next()
             }
            //没有token
            }else if (!to.meta.requireAuth)
                  {
                   next()
                }
             else {
                   next('/')
                   }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
