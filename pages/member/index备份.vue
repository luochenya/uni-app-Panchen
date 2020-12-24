<template>
	<view class="">
		<top-navigation-bar></top-navigation-bar>
		<view class="member">
			<!-- 轮播图 -->
			<uni-swiper-dot :info="info" :current="current" field="content">
				<swiper @change="change" style="height: 344rpx;" autoplay="true" circular="true">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="memberImgStyle">
							<image :src="imgUrl + item.imgs" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			<!-- 列表展示 -->
			<view class="memberBox">
				<view v-for="(item, index) in functionList" :key="index" @click="skipFunctionList(item.text)">
					<image :src="item.imgUrl" mode=""></image>
					<text>{{item.text}}</text>
				</view>
			</view>
			<!-- 好运方案 -->
			<text class="member_title">好运方案</text>
			<!-- 循环列表 -->
			<scroll-view scroll-x="true" style="white-space: nowrap; display: flex">
				<view class="member_style" v-for="(item, index) in novelty" :key="index" @click="toMemberGoodLuckPlan(item)">
					<image :src="imgUrl + item.imgs" mode=""></image>
					<text>{{item.title}}</text>
				</view>
			</scroll-view>
			<!-- 深度管家 -->
			<text class="member_title">深度管家</text>
			<!-- image图 -->
			<image class="member_Image" src="../../static/memberImg/DeepButler.png" mode="" @click="toMemberDeepButler()"></image>
			<!-- 客户反馈 -->
			<text class="member_title">客户反馈</text>
			<!-- 反馈列表 -->
			<view class="member_list">
				<view v-for="(item, index) in clientFeedbackList" :key="index">
					<image v-if="item.type == 1" class="member_list_image" :src="imgUrl + item.imgs" mode=""></image>
					<text v-if="item.type == 1">{{ item.content }}</text>
					<!-- video视频 -->
					<!-- <video v-if="item.type == 2" class="member_list_video" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" @error="videoErrorCallback" controls></video> -->
					<!-- <video v-if="item.type == 2" class="member_list_video" src="https://v.qq.com/txp/iframe/player.html?vid=t3111t5q7fn" @error="videoErrorCallback" controls></video> -->
					<txv-video v-if="item.type == 2" class="member_list_video" vid="t3111t5q7fn" playerid="t3111t5q7fn"></txv-video>
					<!-- <video v-if="item.type == 2" class="member_list_video" :src="imgUrl + item.url" @error="videoErrorCallback" controls></video> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import topNavigationBar from "@/components/top-navigation-bar/top-navigation-bar.vue"
	export default {
		components:{topNavigationBar},
		data() {
			return {
				current: 0,
				imgUrl: this.$imgUrl,
				title: '会员',
				info: [],
				functionList:[{
					text: '会员中心',
					imgUrl: '../../static/memberImg/functionList1.png'
				},{
					text: '最新消息',
					imgUrl: '../../static/memberImg/functionList2.png'
				},{
					text: '守护卡介绍',
					imgUrl: '../../static/memberImg/functionList3.png'
				},{
					text: '营养食品',
					imgUrl: '../../static/memberImg/functionList4.png'
				},{
					text: '常见问题',
					imgUrl: '../../static/memberImg/functionList5.png'
				}],
				novelty: [],
				clientFeedbackList: []
			}
		},
		onLoad:function(option){
			var that = this
			uni.getStorage({
			    key: 'memberInfo',
			    success: function (res) {
						that._getHomeBanner()
						that._getMembersLuckySchemeList()
						that._getHomeBanner()
			    },
				fail:function(res){
					uni.redirectTo({
						url: "../memberLogin/memberLogin"
					})
				}
			});
		},
		methods: {
			// 视频播放报错
			videoErrorCallback: function(e) {
				// uni.showModal({
				// 	content: e.target.errMsg,
				// 	showCancel: false
				// })
			},
			change (e) {
				this.current = e.detail.current;
			},
			// 获取banner图
			_getHomeBanner () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$member.post('Store/get_home_banner').then(res => {
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
					console.log(err)
				})
			},
			// 获取好运方案列表
			_getMembersLuckySchemeList () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$member.post('Store/get_members_lucky_scheme_list').then(res => {
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
			// 获取客户反馈
			_getHomeBanner () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$member.post('Store/get_feedback_list').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.clientFeedbackList = res.data.data
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
			skipFunctionList(text) {
				if (text == '会员中心') {
					uni.navigateTo({
						url: '../../pagesMember/MemberCentre/MemberCentre'
					})
				}
				if (text == '最新消息') {
					uni.navigateTo({
						url: '../../pagesMember/MemberLatestNews/MemberLatestNews'
					})
				}
				if (text == '守护卡介绍') {
					uni.navigateTo({
						url: '../../pagesMember/MemberGuardianCard/MemberGuardianCard'
					})
				}
				if (text == '营养食品') {
					uni.navigateTo({
						url: '../../pagesMember/MemberNutritiousFood/MemberNutritiousFood'
					})
				}
				if (text == '常见问题') {
					uni.navigateTo({
						url: '../../pagesMember/MemberCommonProblem/MemberCommonProblem'
					})
				}
			},
			toMemberGoodLuckPlan(item) {
				var items = JSON.stringify(item)
				uni.navigateTo({
					url: '../../pagesMember/MemberGoodLuckPlan/MemberGoodLuckPlan?item=' + items
				})
			},
			toMemberDeepButler() {
				uni.navigateTo({
					url: '../../pagesMember/MemberDeepButler/MemberDeepButler'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.member {
	padding: 0 4.27% 198rpx;
	// 轮播图
	.memberImgStyle {
		height: 344rpx;
		width: 100%;
		color: #ffffff;
		margin: 0 auto;
		image {
			width: 100%;
			height: 100%;
		}
	}
	// 列表展示
	.memberBox {
		display: flex;
		justify-content: space-around;
		view {
			width: 20%;
			text-align: center;
			padding-top: 16rpx;
			image {
				width: 76rpx;
				height: 76rpx;
			}
			text {
				display: block;
				width:100%;
				height:48rpx;
				font-size:22rpx;
				color:rgba(130,130,130,1);
			}
		}
	}
	// title标题
	.member_title {
		font-weight: bold;
		font-size:30rpx;
		color:rgba(19,31,43,1);
		margin-bottom: 16rpx;
		margin-top: 48rpx;
		display: block;
	}
	// 循环列表
	.member_style {
		display: inline-block;
		margin-right: 32rpx;
		position: relative;
		width: 284rpx;
		height: 177rpx;
		text-align: center;
		image {
			width: 100%;
			height: 100%;
			border-radius:4px;
		}
		text {
			width: 284rpx;
			height: 48rpx;
			line-height: 48rpx;
			position: absolute;
			left: 0;
			bottom: 0;
			background:rgba(104,183,77,1);
			border-radius:0px 0px 4px 4px;
			opacity:0.91;
			font-size:26rpx;
			font-weight:bold;
			color:rgba(250,250,250,1);
		}
	}
	// image图
	.member_Image {
		width: 100%;
		height: 394rpx;
	}
	// 反馈列表
	.member_list {
		view {
			display: flex;
			justify-content: space-between;
			padding: 32rpx 0;
			border-bottom: 1px solid #D8D8D8;
			.member_list_image {
				width: 240rpx;
				height: 240rpx;
			}
			text {
				display: inline-block;
				width: 384rpx;
				font-size:28rpx;
				color:rgba(130,130,130,1);
				line-height:46rpx;
			}
		}
		// video视频
		.member_list_video {
			width: 100%;
			height: 384rpx;
		}
	}
}
</style>
