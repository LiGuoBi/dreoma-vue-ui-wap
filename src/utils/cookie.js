/*
  操作 Token 在 cookie 中的存储
*/
import Cookies from 'js-cookie'
// token
const tokenKey = 'Dreoma--Token'
export function getToken() {
  return Cookies.get(tokenKey)
}
export function setToken(token) {
  return Cookies.set(tokenKey, token)
}
export function removeToken() {
  return Cookies.remove(tokenKey)
}
