const getters = {
  token: state => state.user.token,   // 从state里的user对象里的token取token
  user: state => state.user.user,     // 用户对象
}
export default getters