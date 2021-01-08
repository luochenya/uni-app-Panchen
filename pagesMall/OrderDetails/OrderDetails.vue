<template>
	<view class="OrderDetails">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#F8F8FA'" :title="'订单详情'" @returnClick="returnClick"></top-navigation>
		
		<view class="OrderDetails_top">
			<image class="OrderDetails_top_image" src="../../static/mallImg/OrderDetails.png" mode=""></image>
			<view class="OrderDetails_top_view1">
				收件人信息
			</view>
			<view class="OrderDetails_top_view2">
				赵霞霞
				<text>19983238887</text>
			</view>
			<view class="OrderDetails_top_view3">
				北京市朝阳区奥运村街道洛克时代B座1705
			</view>
		</view>
		<view class="OrderDetails_content">
			<view class="OrderDetails_content_top">
				商品信息
			</view>
			<view class="OrderDetails_content_box" v-for="(item, index) in orderList" :key="index">
				<view class="left">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="right">
					<view class="right_title">
						{{item.title}}
					</view>
					<view class="right_num">
						X{{item.num}}
					</view>
					<view class="right_price">
						￥{{item.price}}
					</view>
				</view>
			</view>
			<view class="OrderDetails_content_bottom">
				<text class="left">合計</text>
				<view class="right">
					￥
					<text>930.00</text>
				</view>
			</view>
		</view>
		<view class="OrderDetails_button">
			<view class="left" @click="PreviousClick()">
				上一步
			</view>
			<view class="right" @click="WeChatPay()">
				微信支付
			</view>
		</view>
		<!-- 订单成功弹窗 -->
		<view class="OrderDetails_popup" v-if="popupStatus">
			<view class="OrderDetails_popup_box">
				<image class="image" src="../../static/mallImg/orderSuccess.png" mode=""></image>
				<text class="text1">订单成立</text>
				<text class="text2">该订单已成立，可至会员中心查看订单情形，如有问题亦可洽讯客服人员协助处理</text>
				<view class="button">
					<view @click="closePopup()">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				popupStatus: false,
				orderList: [
					{
						imgUrl: require('../../static/mallImg/ShoppingMall.png'),
						title: "成年搭长高神器钙片青少年学生个子高钙",
						num: 1,
						price: "310.00"
					},
					{
						imgUrl: require('../../static/mallImg/ShoppingMall.png'),
						title: "澳洲Swisse斯维诗高强度中老年保健品",
						num: 2,
						price: "620.00"
					}
				]
			};
		},
		methods: {
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
				})
			},
			// 上一步
			PreviousClick() {
				uni.navigateTo({
					url: '../ShoppingCart/ShoppingCart'
				})
			},
			// 微信支付
			WeChatPay() {
				this.popupStatus = true
			},
			// 订单成立弹窗确认
			closePopup() {
				this.popupStatus = false
			}
		}
	}
</script>

<style lang="scss">
.OrderDetails {
	padding: 20rpx 4.27% 200rpx;
	background: #F8F8FA;
	min-height: 100vh;
	.OrderDetails_top {
		margin-bottom: 24rpx;
		padding: 28rpx;
		position: relative;
		width: 100%;
		background: #68B74D;
		border-radius: 16rpx;
		.OrderDetails_top_image {
			position: absolute;
			right: 28rpx;
			top: 28rpx;
			width: 62rpx;
			height: 62rpx;
		}
		.OrderDetails_top_view1 {
			font-size: 32rpx;
			font-weight: 600;
			color: #FFFFFF;
			line-height: 44rpx;
		}
		.OrderDetails_top_view2 {
			margin: 24rpx 0 8rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 40rpx;
			text {
				margin-left: 20rpx;
			}
		}
		.OrderDetails_top_view3 {
			font-size: 28rpx;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 40rpx;
			opacity: 0.5;
		}
	}
	.OrderDetails_content {
		padding: 0 24rpx;
		width: 100%;
		background: #FFFFFF;
		border-radius: 16rpx;
		.OrderDetails_content_top {
			padding: 28rpx 0 24rpx;
			font-size: 32rpx;
			font-weight: 600;
			color: #68B74D;
			line-height: 44rpx;
		}
		.OrderDetails_content_box {
			margin-bottom: 30rpx;
			display: flex;
			justify-content: space-between;
			.left {
				width: 206rpx;
				height: 206rpx;
				background: #F6F6F6;
				image {
					max-width: 100%;
					max-height: 100%;
				}
			}
			.right {
				width: calc(100% - 222rpx);
				.right_title {
					font-size: 28rpx;
					font-weight: 400;
					color: #24252A;
					line-height: 40rpx;
					height: 80rpx;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.right_num {
					margin: 8rpx 0 38rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #9FA0A2;
					line-height: 34rpx;
				}
				.right_price {
					font-size: 28rpx;
					font-family: OPPOSans-B, OPPOSans;
					font-weight: normal;
					color: #FB861E;
					line-height: 44rpx;
				}
			}
		}
		.OrderDetails_content_bottom {
			border-top: 1px solid #EFEFEF;
			padding: 40rpx 36rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				font-size: 26rpx;
				font-weight: 400;
				color: #24252A;
				line-height: 36rpx;
			}
			.right {
				font-size: 28rpx;
				font-family: OPPOSans-B, OPPOSans;
				font-weight: normal;
				color: #FB861E;
				line-height: 44rpx;
				text {
					font-size: 34rpx;
				}
			}
		}
	}
	.OrderDetails_button {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 128rpx;
		padding: 20rpx 4.27%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #F8F8FA;
		.left {
			width: 318rpx;
			height: 88rpx;
			background: rgba(104,183,77,0.2);
			border-radius: 27px;
			font-size: 30rpx;
			font-weight: 400;
			color: #68B74D;
			line-height: 88rpx;
			text-align: center;
		}
		.right {
			width: 318rpx;
			height: 88rpx;
			background: #68B74D;
			border-radius: 27px;
			font-size: 30rpx;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 88rpx;
			text-align: center;
		}
	}
	.OrderDetails_popup {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		.OrderDetails_popup_box {
			padding: 64rpx;
			width: 590rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			text-align: center;
			.image {
				width: 134rpx;
				height: 134rpx;
			}
			.text1 {
				margin: 32rpx 0;
				display: block;
				font-size: 40rpx;
				font-weight: 500;
				color: #131F2B;
				line-height: 56rpx;
			}
			.text2 {
				display: block;
				font-size: 30rpx;
				font-weight: 400;
				color: #828282;
				line-height: 48rpx;
				text-align: left;
			}
			.button {
				margin-top: 36rpx;
				display: flex;
				justify-content: center;
				view {
					width: 320rpx;
					height: 88rpx;
					background: #68B74D;
					border-radius: 54rpx;
					font-size: 30rpx;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 88rpx;
					text-align: center;
				}
			}
		}
	}
}
</style>
