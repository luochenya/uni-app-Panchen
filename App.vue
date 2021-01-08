<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			uni.getSystemInfo({//获取手机的状态栏高度单位px
				success: function(e) {
					Vue.prototype.$statusHeight = e.statusBarHeight;
					let menu = wx.getMenuButtonBoundingClientRect();//获取获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。（top表示上边框到手机顶部的距离 bottom是下边框到手机顶部的距离）
					Vue.prototype.$menu = menu;
					Vue.prototype.$barHeight = menu.bottom + menu.top - e.statusBarHeight;
				}
			})
		},
		onShow: function() {
			
		},
		onHide: function() {
			uni.switchTab({
				url: "./pages/knowUs/index"
			})
			uni.removeStorage({
				key: "userInfo"
			})
			uni.removeStorage({
				key: "memberInfo"
			})
		},
		onError: function() {
			console.debug()
		}
	}
</script>

<style>
/*每个页面公共css */
/* 共用css样式 */
@import './common/uni.css';
/* 共用css样式-nvue */
@import './common/uni-nvue.css';
/* 去除scroll-view的默认滚动条 */
::-webkit-scrollbar{
  width: 0;
  height: 0;
  color: transparent;
}
</style>
