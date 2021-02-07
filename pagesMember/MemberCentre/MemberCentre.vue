<template>
	<view class="">
		<!-- 顶部导航 -->
		<top-navigation :type="1" :backgroundColor="'#3F3A39'" :title="'会员中心'" :titleColor="'#FFFFFF'" @returnClick="returnClick"></top-navigation>
		
		<view class="MemberCentre">
			<image class="MemberCentre_rightImg" src="../static/image/MemberCentre3.png" mode=""></image>
			<text class="MemberCentre_name">{{dataForm.name}}</text>
			<text class="MemberCentre_phone">{{dataForm.phone}}</text>
			<view class="MemberCentre_box">
				<view class="MemberCentre_box_left">
					<text class="MemberCentre_box_left_title">当前点数</text>
					<view class="MemberCentre_box_left_content">
						<text class="MemberCentre_box_left_content_num">{{dataForm.points}}</text>
						<text class="MemberCentre_box_left_content_text">点</text>
					</view>
				</view>
				<view class="MemberCentre_box_right">
					<image src="../static/image/MemberCentre1.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="MemberCentre_content">
			<view class="MemberCentre_content_view" @click="ToMemberOrderManagement()">
				<view class="">
					<image src="../static/image/MemberCentre5.png" mode=""></image>
				</view>
				<text>订单管理</text>
			</view>
			<view class="MemberCentre_content_view" @click="ToMemberTicketBox()">
				<view class="">
					<image src="../static/image/MemberCentre6.png" mode=""></image>
				</view>
				<text>票卷匣</text>
			</view>
			<view class="MemberCentre_content_view" @click="ToMemberFavoriteProduct()">
				<view class="">
					<image src="../static/image/MemberCentre7.png" mode=""></image>
				</view>
				<text>收藏商品</text>
			</view>
			<view class="MemberCentre_content_view" @click="ToAnalysisReport()">
				<view class="">
					<image src="../static/image/MemberCentre8.png" mode=""></image>
				</view>
				<text>分析报告</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				dataForm: {}
			}
		},
		onLoad() {
			this._getMemberInfo()
		},
		methods: {
			// 获取会员信息
			_getMemberInfo () {
				 // 加载动画
				 uni.showLoading({
					title: '加载中',
				 });
				this.$member.post('Store/get_member_info').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					this.dataForm = res.data.data
				}).catch(err => {
					// console.log(err)
				})
			},
			
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
				})
			},
			ToMemberOrderManagement() {
				uni.navigateTo({
					url: "../MemberOrderManagement/MemberOrderManagement"
				})
			},
			ToMemberTicketBox() {
				uni.navigateTo({
					url: "../MemberTicketBox/MemberTicketBox"
				})
			},
			ToMemberFavoriteProduct() {
				uni.navigateTo({
					url: "../MemberFavoriteProduct/MemberFavoriteProduct"
				})
			},
			ToAnalysisReport() {
				uni.navigateTo({
					url: "../../pagesMall/AnalysisReport/AnalysisReport"
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.MemberCentre {
	padding: 40rpx 4.27% 222rpx;
	margin-bottom: 240rpx;
	position: relative;
	background: linear-gradient(180deg, #3F3A39 0%, #151515 100%);
	.MemberCentre_rightImg {
		position: absolute;
		right: 0;
		top: -100rpx;
		width: 151rpx;
		height: 375rpx;
		z-index: 1000;
	}
	.MemberCentre_name {
		font-size:36rpx;
		font-weight:bold;
		color: #F6F6F6;
		line-height:50rpx;
	}
	.MemberCentre_phone {
		margin-top: 4rpx;
		margin-bottom: 26rpx;
		font-size:30rpx;
		color: #9FA0A2;
		line-height:42rpx;
		letter-spacing:2rpx;
		display: block;
	}
	.MemberCentre_box {
		position: absolute;
		top: 200rpx;
		width:91.34%;
		height:320rpx;
		padding: 48rpx 52rpx;
		background: linear-gradient(315deg, #E6BB94 0%, #FBE3CD 100%);
		box-shadow: 0px 28rpx 96rpx -18rpx rgba(236, 199, 165, 0.5);
		border-radius: 28rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.MemberCentre_box_left {
			.MemberCentre_box_left_title {
				font-size: 30rpx;
				font-weight: 400;
				color: #24252A;
				line-height: 42rpx;
			}
			.MemberCentre_box_left_content {
				margin-top: 70rpx;
				.MemberCentre_box_left_content_num {
					font-size: 84rpx;
					font-family: Futura-Medium, Futura;
					font-weight: bold;
					color: #24252A;
					line-height: 112rpx;
				}
				.MemberCentre_box_left_content_text {
					font-size: 40rpx;
					font-weight: 400;
					color: #24252A;
					line-height: 56rpx;
					letter-spacing: 2rpx;
				}
			}
		}
		.MemberCentre_box_right {
			image {
				width: 186rpx;
				height: 176rpx;
			}
		}
	}
}
.MemberCentre_content {
	width: 100%;
	padding: 0 4.27%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	.MemberCentre_content_view {
		margin-bottom: 50rpx;
		width: 33.33%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		view {
			margin-bottom: 20rpx;
			width: 102rpx;
			height: 102rpx;
			background: linear-gradient(135deg, #F6D9BF 0%, #E6A781 100%);
			box-shadow: 0px 8rpx 20rpx 0px rgba(238, 193, 161, 0.3);
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			image {
				width: 66rpx;
				height: 74rpx;
			}
		}
		text {
			display: block;
			text-align: center;
			width: 100%;
			font-size: 28rpx;
			font-weight: 400;
			color: #24252A;
			line-height: 80rpx;
		}
	}
}
</style>
