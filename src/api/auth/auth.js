import request from '@/utils/request'


//登录
export function login(data){
    
    return request({
        url:'/user/login',
        method:'post',
        data
    })
}
//
export function getUserInfo() {
    return request({
      url: '/user/info',
      method: 'get'
    })
  }

  export function logout() {
    return request({
      url: '/user/logout'
    })
  }


  export function getMoveRouter(){
    return request({
      url:'/user/getMoveRouter',
      method:'get',
      })
  }