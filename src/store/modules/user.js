//用之前必须引入进来，要不无法使用，切记！往往忽略，使用前一定先引入！
import {  login,getUserInfo } from "@/api/auth/auth"
import { getToken, setToken} from "@/utils/auth"
//定义全局数据，一个是Tonken，一个user对象
const state={
    token:getToken(),//token
    user:""//用户对象
}

const mutations = {
    SET_TOKEN_STATE: (state, token) => {
      state.token = token;
    },
    SET_USER_STATE: (state, user) => {
      state.user = user;
    },
}
//actions 定义的是异步方法，mutations不能使用异步方法为state赋值，所以要用actions
const actions = {
    // 用户登录userInfo是个object，里边有name和pass两个变量 commit是向mutations提交数据的意思
    login({ commit }, userInfo) {
      const { name, pass } = userInfo
      //Es6写法Promise实际是两个异步操作的嵌套，先执行login这个异步操作，等等操作结果，如果成功那么就执行resolve否则执行reject固定格式
      return new Promise((resolve, reject) => {
        //调用login传两个参数请求数据
        login({ username: name.trim(), password: pass }).then(response => {
          //后台将数据发回赋值给变量data，  
          const { data } = response
          //通过commit提交给mutatios，修改token的值并保存在state中
            commit("SET_TOKEN_STATE", data.token)
            //通过工具类auth.js里的setToken方法将token在保存在cookies中一份
            setToken(data.token)
            resolve()
          }).catch((error) => {
            reject(error)
          })
      })
    },

    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((response) => {
            console.log(response)
            const { data } = response
            
            if (!data) {
              commit("SET_TOKEN_STATE", "");
              commit("SET_USER_STATE", "");
              removeToken();
              resolve();
              reject("Verification failed, please Login again.");
            }
            commit("SET_USER_STATE", data);
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      })
    },
};
export default {
    namespaced: true,//可以使用模块名+模块属性方式访问，比如这里处理的都是用户的state，其它页面访问的时候就可以从模块名user加异步方法login访问到
    state,
    mutations,
    actions,
  };