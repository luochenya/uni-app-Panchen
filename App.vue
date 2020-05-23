<script>
	export default {
		onLaunch: function() {
			
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
