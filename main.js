import Vue from 'vue'
import App from './App'
import store from './store'
// 请求
import {http, member} from "@/components/luch-request/index.js"
Vue.prototype.$http = http
Vue.prototype.$member = member
// 头部导航
import topNavigation from "@/components/top-navigation/top-navigation.vue"
// 弹窗
import mpopup from "@/components/xuan-popup/xuan-popup.vue"
// 轮播图
import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
// 验证输入框
import inputBox from '@/components/input-box/input-box'

Vue.component('mpopup',mpopup)
Vue.component('uni-swiper-dot',uniSwiperDot)
Vue.component('input-box',inputBox)
Vue.component('top-navigation',topNavigation)
// 定义全局变量
Vue.prototype.$userBarrageColor = uni.getStorageSync('user').userBarrageColor
Vue.prototype.$imgUrl = 'http://fc.dhkzw.top/'

//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	//挂载
    store
})
app.$mount()
