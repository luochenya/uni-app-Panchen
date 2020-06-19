<template>
	<view class="">
		<top-navigation-bar></top-navigation-bar>
		<view class="member">
			<!-- 轮播图 -->
			<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
				<swiper @change="change" style="height: 344rpx;" autoplay="true" circular="true">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="memberImgStyle">
							<image :src="item.imgUrl" mode=""></image>
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
				<view class="member_style" v-for="(item, index) in novelty" :key="index" @click="toMemberGoodLuckPlan()">
					<image :src="item.imgUrl" mode=""></image>
					<text>{{item.text}}</text>
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
					<image :src="item.imgUrl" mode=""></image>
					<text>{{ item.text }}</text>
				</view>
			</view>
			<!-- video视频 -->
			<image class="member_Image member_video" src="../../static/memberImg/video.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import topNavigationBar from "@/components/top-navigation-bar/top-navigation-bar.vue"
	export default {
		components:{topNavigationBar},
		data() {
			return {
				title: '会员',
				info: [
					{imgUrl: '../../static/memberImg/banner1.png'},
					{imgUrl: '../../static/memberImg/banner1.png'},
					{imgUrl: '../../static/memberImg/banner1.png'}
				],
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
				novelty: [{
					text: '保健专场',
					imgUrl: '../../static/memberImg/NewThings1.png',
				},{
					text: '进口大牌',
					imgUrl: '../../static/memberImg/NewThings2.png',
				},{
					text: '199元任选3件',
					imgUrl: '../../static/memberImg/NewThings3.png',
				}],
				clientFeedbackList: [{
					text:'真的特别特别好，老公总失眠，入睡困难，怕有些促进睡眠的长期吃有副作用，这是一款保健品，不是药，对身体没有副作用，也没有依赖性。',
					imgUrl: '../../static/memberImg/clientFeedback1.png'
				},{
					text:'透過高頻熱能刺激膠原蛋白收縮與更新，達到臉部肌膚緊實、拉提又有彈力恢復年輕肌膚狀態。',
					imgUrl: '../../static/memberImg/clientFeedback2.png'
				},{
					text:'给老公和宝宝买了保健品，效果都不错，应该是正品，喝完了过阵子在买些用，特别满意。',
					imgUrl: '../../static/memberImg/clientFeedback3.png'
				}]
			}
		},
		onLoad:function(option){
			uni.getStorage({
			    key: 'memberInfo',
			    success: function (res) {
					
			    },
				fail:function(res){
					uni.redirectTo({
						url: "../memberLogin/memberLogin"
					})
				}
			});
		},
		methods: {
			change (e) {
				this.current = e.detail.current;
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
			toMemberGoodLuckPlan() {
				uni.navigateTo({
					url: '../../pagesMember/MemberGoodLuckPlan/MemberGoodLuckPlan'
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
	padding: 0 4.27%;
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
			image {
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
	}
	// video视频
	.member_video {
		margin-top: 33.5rpx;
		margin-bottom: 192rpx;
	}
}
</style>
