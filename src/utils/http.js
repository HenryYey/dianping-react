import * as axios from 'axios'
import helper from './helper'
let qs = require('querystring')


//console.log( process.env.NODE_ENV)
//判断环境提供baseURL，注意要与后台地址一致
let root = process.env.NODE_ENV === 'development'
  // 开发环境api接口
  ?
  `http://localhost:3001/api`
  // 生产环境api接口
  :
  `http://127.0.0.1:3001/api`;
// 引用axios，设置头文件
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 根据 axios api，对请求返回做拦截处理
axios.interceptors.response.use(function (response) {
  if (response.status >= 400 && response.status < 500) {
      // 对返回状态码为 4xx 的请求统一处理
      // 此处统一跳转 404 页面
      window.location.href = decodeURI(`${window.location.protocol}//${window.location.host}/404.html`)
  } else {
    return response
  }
}, function (error) {
    console.log(error)
})

function apiAxios(method, url, params, token) {
  return axios({
    method: method,
    //拼接参数
    url: method === 'GET'|| method === 'DELETE' ? helper.queryString(url,params) : url,
    data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
    baseURL: root,
    timeout: 10000,
    // headers: { Authorization: `Bearer ${token}` },	//jwt
    withCredentials: false
  })
}

// 返回在vue模板中的调用接口
export default {
  // get: function (url, params, token) {
  //   return apiAxios('GET', url, params, token)
  // },
  // post: function (url, params, token) {
  //   return apiAxios('POST', url, params, token)
  // },
  // put: function (url, params, token) {
  //   return apiAxios('PUT', url, params, token)
  // },
  // delete: function (url, params, token) {
  //   return apiAxios('DELETE', url, params, token)
  // },
  get: function (url, params) {
    return apiAxios('GET', url, params)
  },
  post: function (url, params) {
    return apiAxios('POST', url, params)
  },
  put: function (url, params) {
    return apiAxios('PUT', url, params)
  },
  delete: function (url, params) {
    return apiAxios('DELETE', url, params)
  },
}
