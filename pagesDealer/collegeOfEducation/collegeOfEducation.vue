<template>
	<view class="collegeOfEducation">
		<view class="">
			<image style="width: 100%;height: 300rpx;" src="../static/collegeOfEducationImg/collegeOfEducation.png" mode=""></image>
		</view>
		<view class="recommendedCourse">推荐课程</view>
		<view class="recommendedCourseName" @click="skipCourseDetails(item.id)" v-for="(item, index) in recommendedCourse" :key="index">
			<view class="recommendedCourseTitle">
				<view style="line-height: 90rpx;color: #131f2b;font-size: 34rpx;">{{item.title}}</view>
				<view style="line-height: 80rpx;color: #8f8f8f;font-size: 26rpx;">{{item.created_at}}</view>
			</view>
			<view class="recommendedCourseImg">
				<image :src="imgUrl + item.imgs" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recommendedCourse: [],
				imgUrl: this.$imgUrl
			}
		},
		onLoad:function(option){
			
		},
		mounted() {
			this.gettingData()
		},
		methods: {
			gettingData () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('System/get_courses_list').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.recommendedCourse = res.data.data
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
			// 路径跳转课程详情
			skipCourseDetails (id) {
				uni.navigateTo({
					url: '../courseDetails/courseDetails?id=' + id
				})
			},
		}
	}
</script>

<style lang="less" scoped>
.collegeOfEducation {
	width: 95%;
	margin: 0 auto;
	.recommendedCourse {
		font-size: 30rpx;
		line-height: 70rpx;
		border-bottom: 1rpx solid #ededed;
		margin-top: 20rpx;
	}
	.recommendedCourseName {
		height: 170rpx;
		border-bottom: 1rpx solid #ededed;
		.recommendedCourseTitle {
			display: inline-block;
		}
		.recommendedCourseImg {
			float: right;
			display: inline-block;
			margin: 19rpx;
			image {
				width: 208rpx;
				height: 120rpx;
			}
		}
	}
}
</style>
