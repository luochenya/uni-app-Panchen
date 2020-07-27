import Vue from 'vue'
import App from './App'
// 请求
import {http, member} from "@/components/luch-request/index.js"
Vue.prototype.$http = http
Vue.prototype.$member = member
// 弹窗
import mpopup from "@/components/xuan-popup/xuan-popup.vue"
// 轮播图
import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
// 验证输入框
import inputBox from '@/components/input-box/input-box'

Vue.component('mpopup',mpopup)
Vue.component('uni-swiper-dot',uniSwiperDot)
Vue.component('input-box',inputBox)
// 定义全局变量
Vue.prototype.$userBarrageColor = uni.getStorageSync('user').userBarrageColor
Vue.prototype.$imgUrl = 'http://fc.dhkzw.top/'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
