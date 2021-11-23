import {  login } from "@/api/auth/auth"
import { getToken, setToken} from "@/utils/auth"

const state={
    token:getToken(),//token
    user:""//用户对象
}

const mutations = {
    SET_TOKEN_STATE: (state, token) => {
      state.token = token;
    }
}
const actions = {
    // 用户登录
    login({ commit }, userInfo) {
      const { name, pass } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: name.trim(), password: pass }).then(response => {
            const { data } = response
            commit("SET_TOKEN_STATE", data.token)
            setToken(data.token)
            resolve()
          }).catch((error) => {
            reject(error)
          })
      })
    },

    // getInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getUserInfo()
    //       .then((response) => {
    //         const { data } = response;
    //         if (!data) {
    //           commit("SET_TOKEN_STATE", "");
    //           commit("SET_USER_STATE", "");
    //           removeToken();
    //           resolve();
    //           reject("Verification failed, please Login again.");
    //         }
    //         commit("SET_USER_STATE", data);
    //         resolve(data);
    //       })
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   })
    // },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
  }