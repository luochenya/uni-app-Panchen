<template>
	<view class="courseDetails">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="'课程详情'" @returnClick="returnClick"></top-navigation>
		
		<!-- <video class="courseDetails_image" v-if="courseList.type == 2" :src="courseList.url" @error="videoErrorCallback" controls></video> -->
		<txv-video class="courseDetails_image" v-if="courseList.type == 2" :vid="courseList.url" :playerid="courseList.url"></txv-video>
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
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
				})
			},
			// 视频播放报错
			videoErrorCallback: function(e) {
				// uni.showModal({
				// 	content: e.target.errMsg,
				// 	showCancel: false
				// })
			},
			// url切割
			getCaption(obj) {
				var index = obj.lastIndexOf("vid=");
				obj = obj.substring(index + 4, obj.length);
				return obj;
			},
			gettingData (id) {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('System/get_courses_details', { id: id }).then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.courseList = res.data.data
						if (res.data.data.type == 2) {
							this.courseList.url = this.getCaption(res.data.data.url)
						}
						// console.log(this.courseList)
					} else {
						 uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						 })
					}
				}).catch(err => {
					// console.log(err)
				})
			},
		}
	}
</script>

<style lang="less" scoped>
.courseDetails {
	padding: 20rpx 4.27% 0;
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
		// text-indent: 2em;
		font-size:28rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
		line-height:62rpx;
	}
}
</style>
