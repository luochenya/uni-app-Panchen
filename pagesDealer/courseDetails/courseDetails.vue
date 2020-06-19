<template>
	<view class="courseDetails">
		<video class="courseDetails_image" v-if="courseList.type == 2" :src="imgUrl + courseList.url" @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
		<image class="courseDetails_image" v-if="courseList.type == 1" :src="imgUrl + courseList.imgs" mode=""></image>
		<text class="courseDetails_title">{{courseList.title}}</text>
		<text class="courseDetails_content">{{courseList.content}}</text>
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
.courseDetails {
	padding: 0 4.27%;
	.courseDetails_image {
		width: 100%;
		height: 352rpx;
	}
	.courseDetails_title {
		display: block;
		text-align: center;
		padding: 48rpx 32rpx 18rpx;
		font-size:36rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:bold;
		color:rgba(19,31,43,1);
		line-height:58rpx;
	}
	.courseDetails_content {
		display: block;
		padding: 0 32rpx;
		text-indent: 2em;
		font-size:28rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
		line-height:62rpx;
	}
}
</style>
