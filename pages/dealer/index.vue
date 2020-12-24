<template>
	<view>
		<top-navigation-bar></top-navigation-bar>
		<view class="dealer">
			<!-- 轮播图 -->
			<uni-swiper-dot :info="info" :current="current" field="content">
					<swiper @change="change" autoplay="true" circular="true" class="dealer_image">
							<swiper-item v-for="(item ,index) in info" :key="index">
									<view class="dealer_image">
										<image :src="imgUrl + item.imgs" mode=""></image>
									</view>
							</swiper-item>
					</swiper>
			</uni-swiper-dot>
			<view class="dealer_box">
				<view class="dealer_box_view1" @click="skipCollegeOfEducation()">
					<text class="dealer_box_view1_title">教育学院</text>
					<text class="dealer_box_view1_content">顾客拓展奖励专项培训···</text>
					<view class="dealer_box_view1_button">查看详情</view>
				</view>
				<view class="dealer_box_view2" @click="skipSpotNews()">
					<text class="dealer_box_view2_title">最新消息</text>
					<image class="dealer_box_view2_image" src="../../static/dealerImg/dealerC.png" mode=""></image>
				</view>
				<view class="dealer_box_view3" @click="skipCaseExclusive()">
					<text class="dealer_box_view3_title">案例分享</text>
					<image class="dealer_box_view3_image" src="../../static/dealerImg/dealerD.png" mode=""></image>
				</view>
				<view class="dealer_box_view4" @click="skipConsultingFeedback()">
					<text class="dealer_box_view4_title">资讯反馈</text>
					<image class="dealer_box_view4_image" src="../../static/dealerImg/dealerE.png" mode=""></image>
				</view>
				<view class="dealer_box_view5" @click="skipKnowledgeTest()">
					<text class="dealer_box_view5_title">知识测验</text>
					<image class="dealer_box_view5_image" src="../../static/dealerImg/dealerF.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import topNavigationBar from "@/components/top-navigation-bar/top-navigation-bar.vue"
	export default {
		components: {topNavigationBar},
		data() {
			return {
				current: 0,
				imgUrl: this.$imgUrl,
				info: []
			}
		},
		onLoad:function(option){
			var that = this
			uni.getStorage({
			    key: 'userInfo',
			    success: function (res) {
						that._getBanner()
			    },
				fail:function(res){
					uni.redirectTo({
						url: "../dealerLogin/dealerLogin"
					})
				}
			});
		},
		methods: {
			change (e) {
				this.current = e.detail.current;
			},
			// 获取banner图
			_getBanner () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('System/get_banner').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.info = res.data.data
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
			// 路径跳转教育学院
			skipCollegeOfEducation () {
				var price = "这里是通往教育学院"
				uni.navigateTo({
					url: '../../pagesDealer/collegeOfEducation/collegeOfEducation?collegeOfEducation=' + price 
				})
			},
			// 路径跳转案例专享
			skipCaseExclusive () {
				var price = "这里是通往案例分享"
				uni.navigateTo({
					url: '../../pagesDealer/caseExclusive/caseExclusive?caseExclusive=' + price
				})
			},
			// 路径跳转最新消息
			skipSpotNews () {
				var price = "这里是通往最新消息"
				uni.navigateTo({
					url: '../../pagesDealer/spotNews/spotNews?spotNews=' + price
				})
			},
			// 路径跳转资讯反馈
			skipConsultingFeedback () {
				var price = "这里是通往资讯反馈"
				uni.navigateTo({
					url: '../../pagesDealer/consultingFeedback/consultingFeedback?consultingFeedback=' + price
				})
			},
			// 路径跳转知识测试
			skipKnowledgeTest () {
				var price = "这里是知识测试"
				uni.navigateTo({
					url: '../../pagesDealer/knowledgeTest/knowledgeTest?knowledgeTest=' + price
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.dealer {
	padding: 0 4.27%;
	.dealer_image {
		width: 100%;
		height: 344rpx;
		margin-bottom: 32rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.dealer_box {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.dealer_box_view1 {
			padding: 32rpx;
			width: 448rpx;
			height: 220rpx;
			border-radius:4rpx;
			background: url(../../static/dealerImg/dealerB.png);
			.dealer_box_view1_title {
				display: block;
				font-size:32rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:bold;
				color:rgba(255,255,255,1);
				line-height:48rpx;
			}
			.dealer_box_view1_content {
				height:32rpx;
				font-size:22rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(255,255,255,1);
				line-height:32rpx;
			}
			.dealer_box_view1_button {
				margin-top: 30rpx;
				width:100rpx;
				height:32rpx;
				text-align: center;
				background:rgba(255,255,255,1);
				font-size:20rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(251,113,30,1);
				line-height:32rpx;
			}
		}
		.dealer_box_view2 {
			width: 208rpx;
			height: 220rpx;
			background:rgba(104,183,77,0.19);
			border-radius:4rpx;
			text-align: center;
			.dealer_box_view2_title {
				display: block;
				margin-top: 30rpx;
				font-size:30rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(104,183,77,1);
				line-height:54rpx;
			}
			.dealer_box_view2_image {
				width: 82rpx;
				height: 82rpx;
			}
		}
		.dealer_box_view3 {
			margin-top: 32rpx;
			width: 208rpx;
			height: 220rpx;
			background:rgba(255,192,63,0.19);
			border-radius:4rpx;
			text-align: center;
			.dealer_box_view3_title {
				display: block;
				margin-top: 30rpx;
				font-size:30rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(255,192,63,1);
				line-height:54rpx;
			}
			.dealer_box_view3_image {
				width: 82rpx;
				height: 82rpx;
			}
		}
		.dealer_box_view4 {
			margin-top: 32rpx;
			width: 208rpx;
			height: 220rpx;
			background:rgba(252,147,64,0.19);
			border-radius:4rpx;
			text-align: center;
			.dealer_box_view4_title {
				display: block;
				margin-top: 30rpx;
				font-size:30rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(252,147,64,1);
				line-height:54rpx;
			}
			.dealer_box_view4_image {
				width: 82rpx;
				height: 82rpx;
			}
		}
		.dealer_box_view5 {
			margin-top: 32rpx;
			width: 208rpx;
			height: 220rpx;
			background:rgba(79,157,235,0.19);
			border-radius:4rpx;
			text-align: center;
			.dealer_box_view5_title {
				display: block;
				margin-top: 30rpx;
				font-size:30rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(79,157,235,1);
				line-height:54rpx;
			}
			.dealer_box_view5_image {
				width: 82rpx;
				height: 82rpx;
			}
		}
	}
}
</style>
