import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
//意思是加载modulse下的user和getters记住访问store的时候，
//就可以用this.$store.dispatch("user/login",this.loginFrom)
//调用user/login异步方法，参数为thisloginFrom
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        user
    },
    getters
})

export default store