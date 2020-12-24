<template>
	<view class="collegeOfEducation">
			<!-- 轮播图 -->
			<uni-swiper-dot :info="novelty" :current="current" field="content">
					<swiper @change="change" autoplay="true" circular="true">
							<swiper-item v-for="(item ,index) in novelty" :key="index">
									<view>
										<image :src="imgUrl + item.imgs" mode="" class="collegeOfEducation_image"></image>
									</view>
							</swiper-item>
					</swiper>
			</uni-swiper-dot>
		<view class="collegeOfEducation_title">推荐课程</view>
		<view class="collegeOfEducation_box" @click="skipCourseDetails(item.id)" v-for="(item, index) in recommendedCourse" :key="index">
			<view class="collegeOfEducation_box_content">
				<view class="collegeOfEducation_box_content_title">{{item.title}}</view>
				<view class="collegeOfEducation_box_content_times">{{item.created_at}}</view>
			</view>
			<image class="collegeOfEducation_box_image" :src="imgUrl + item.imgs" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recommendedCourse: [],
				current: 0,
				imgUrl: this.$imgUrl,
				novelty: []
			}
		},
		onLoad:function(option){
			
		},
		mounted() {
			this.gettingData()
			this._getCoursesBannerList()
		},
		methods: {
			change (e) {
				this.current = e.detail.current;
			},
			// 获取banner图
			_getCoursesBannerList () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('System/get_courses_banner_list').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.novelty = res.data.data
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
					// console.log(err)
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
	padding: 0 4.27%;
	.collegeOfEducation_image {
		width: 100%;
		height: 262rpx;
	}
	.collegeOfEducation_title {
		display: block;
		margin-top: 20rpx;
		padding-bottom: 16rpx;
		font-size:32rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(19,31,43,1);
		line-height:48rpx;
		border-bottom: 2rpx solid #D8D8D8;
	}
	.collegeOfEducation_box {
		padding: 32rpx 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 2rpx solid #D8D8D8;
		.collegeOfEducation_box_content {
			width: 446rpx;
			height: 130rpx;
			.collegeOfEducation_box_content_title {
				font-size:30rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(19,31,43,1);
				line-height:54rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
			.collegeOfEducation_box_content_times {
				display: block;
				margin-top: 40rpx;
				font-size:22rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(130,130,130,1);
				line-height:32rpx;
			}
		}
		.collegeOfEducation_box_image {
			width: 208rpx;
			height: 130rpx;
		}
		// height: 170rpx;
		// border-bottom: 1rpx solid #ededed;
		// .recommendedCourseTitle {
		// 	display: inline-block;
		// }
		// .recommendedCourseImg {
		// 	float: right;
		// 	display: inline-block;
		// 	margin: 19rpx;
		// 	image {
		// 		width: 208rpx;
		// 		height: 120rpx;
		// 	}
		// }
	}
}
</style>
