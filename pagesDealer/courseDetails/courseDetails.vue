<template>
	<view>
		<video v-if="courseList.type == 2" :src="imgUrl + courseList.url" class="myVideo" @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
		<image v-if="courseList.type == 1" :src="imgUrl + courseList.imgs" class="myVideo" mode=""></image>
		<view class="courseTitle">
			{{courseList.title}}
		</view>
		<view class="courseContent">
			{{courseList.content}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl,
				courseList: [],
			}
		},
		onLoad:function(option) {
			this.gettingData(option.id)
		},
		methods: {
			gettingData (id) {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('System/get_courses_details',
						'\r\n--XXX' +
						'\r\nContent-Disposition: form-data; name="id"' +
						'\r\n' +
						'\r\n' + id +
						'\r\n--XXX--').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.courseList = res.data.data
					} else {
						 uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						 })
					}
				}).catch(err => {
					console.log(err)
				})
			},
		}
	}
</script>

<style lang="less" scoped>
.myVideo {
	width: 90%;
	height: 423rpx;
	margin: 0 5%;
}
.courseTitle {
	text-align: center;
	font-weight: bold;
	font-size: 38rpx;
	line-height: 100rpx;
}
.courseContent {
	text-indent: 2em;
	line-height: 58rpx;
	font-size: 30rpx;
	margin: 0 4%;
	color: #999999;
}
</style>
