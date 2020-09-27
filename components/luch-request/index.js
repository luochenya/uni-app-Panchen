import Request from './request'

const member = new Request()
member.setConfig((config) => { /* 设置全局配置 */
  config.baseUrl = 'https://fc.dhkzw.top/api/'
  config.header = {
    ...config.header
  }
  // config.custom = { auth: true }
  return config
})

member.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
  config.header = {
    ...config.header,
		token: uni.getStorageSync("tokens") ? uni.getStorageSync("tokens") : ''
  }
  // if (config.custom.auth) {
  //   config.header.token = 'token'
  // }
  /*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
  return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
member.validateStatus = (statusCode) => {
  return statusCode === 200
}

member.interceptor.response((response) => { /* 请求之后拦截器 */
  if (response.data.code == 201 || response.data.code == 202 || response.data.code == 203) { // 服务端返回的状态码等于202（token失效)，清空token并重新登录
	  uni.removeStorage({
			key:'memberInfo',
			success:function() {
				// console.log(' 移除成功')　　　　　　-----获取成功后移除key 中的内容
			}
		})
		uni.removeStorage({
			key:'tokens',
			success:function() {
				// console.log(' 移除成功')　　　　　　-----获取成功后移除key 中的内容
			}
		})
	  uni.redirectTo({ url: "../../pages/dealerLogin/dealerLogin" });
  }
  return response
}, (response) => { // 请求错误做点什么
  return response
})

const http = new Request()

http.setConfig((config) => { /* 设置全局配置 */
  config.baseUrl = 'https://fc.dhkzw.top/api/' /* 根域名不同 */
  config.header = {
    ...config.header,
    token: 1
  }
  return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
http.validateStatus = (statusCode) => {
  return statusCode === 200
}

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
  config.header = {
    ...config.header,
		token: uni.getStorageSync("token") ? uni.getStorageSync("token") : ''
  }
  return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
  // if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
  //   return Promise.reject(response)
  // }
  if (response.data.code == 201 || response.data.code == 202 || response.data.code == 203) { // 服务端返回的状态码等于202（token失效)，清空token并重新登录
	  uni.removeStorage({
	  	key:'userInfo',
	  	success:function() {
	  		// console.log(' 移除成功')　　　　　　-----获取成功后移除key 中的内容
	  	}
	  })
		uni.removeStorage({
			key:'token',
			success:function() {
				// console.log(' 移除成功')　　　　　　-----获取成功后移除key 中的内容
			}
		})
	  uni.redirectTo({ url: "../../pages/dealerLogin/dealerLogin" });
  }
  // if (response.config.custom.verification) { // 演示自定义参数的作用
  //   return response.data
  // }
  return response
}, (response) => { // 请求错误做点什么
  return response
})

export {
  http,
  member
}
