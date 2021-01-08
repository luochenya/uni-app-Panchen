<template>
	<view class="ShoppingCart">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#F8F8FA'" :title="'购物车'" @returnClick="returnClick"></top-navigation>
		
		<!-- 无数据时的购物车 -->
		<view class="ShoppingCart_null" v-if="!dataList || !dataList.length">
			<image src="../../static/mallImg/ShoppingCartNull.png" mode=""></image>
			<text>购物车空无一物</text>
		</view>
		
		<!-- 有数据时的购物车 -->
		<view v-else>
			<view class="ShoppingCart_list">
				<view class="ShoppingCart_list_button" @click="addressClcik()">
					<image src="../../static/mallImg/adds.png" mode=""></image>
					请选择收货地址
				</view>
				<view class="ShoppingCart_list_content">
					<view class="ShoppingCart_list_content_box" v-for="(item, index) in dataList" :key="index">
						<image class="ShoppingCart_list_content_close" @click="openDetele(item)" src="../../static/mallImg/close.png" mode=""></image>
						<view class="ShoppingCart_list_content_img">
							<image :src="item.imgUrl" mode=""></image>
						</view>
						<view class="ShoppingCart_list_content_price">
							<view class="ShoppingCart_list_content_price_title">
								{{item.title}}
							</view>
							<view class="ShoppingCart_list_content_price_operating">
								<view class="price">
									<text class="subtotal">小计：￥{{item.subtotal}}</text>
									<text class="unitPrice">单价：￥{{item.price}}</text>
								</view>
								<view class="operating">
									<image class="less" src="../../static/mallImg/less.png" mode=""></image>
									<text class="num">{{item.num}}</text>
									<image class="add" src="../../static/mallImg/add.png" mode=""></image>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="ShoppingCart_list_operating">
					<view class="ShoppingCart_list_operating_coupon" @click="couponStatus = true">
						<text class="text">优惠券</text>
						<view class="view">
							{{couponTitle}}
							<image src="../../static/mallImg/couponRight.png" mode=""></image>
						</view>
					</view>
					<view class="ShoppingCart_list_operating_input">
						<text class="text">买家留言</text>
						<view class="view">
							<view class="input" v-if="couponStatus || deteleStatus">
								{{leavemessage}}
							</view>
							<input class="input" v-else type="text" v-model="leavemessage" />
							<image v-if="leavemessage" src="../../static/mallImg/close.png" mode="" @click="EmptyInputClick()"></image>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 结算购物车操作 -->
			<view class="ShoppingCart_Settlement">
				<view class="ShoppingCart_Settlement_left">
					总金额
					<text class="ShoppingCart_Settlement_left_text">
						<text>￥</text>
						1240.00
					</text>
				</view>
				<view class="ShoppingCart_Settlement_right" @click="nextClick()">
					下一步
				</view>
			</view>
		</view>
		
		<!-- 优惠卷弹窗 -->
		<view class="ShoppingCart_coupon" v-if="couponStatus" @click="couponStatus = false">
			<view class="ShoppingCart_coupon_box" @click.stop>
				<image class="ShoppingCart_coupon_box_close" @click="couponStatus = false" src="../../static/mallImg/close.png" mode=""></image>
				<view class="ShoppingCart_coupon_box_top">
					<text class="text1">使用优惠券</text>
					<text class="text2">请选择欲使用的优惠券</text>
				</view>
				<!-- 无数据 -->
				<view class="ShoppingCart_coupon_box_null" v-if="!couponList || !couponList.length">
					<view>
						<image src="../../static/mallImg/couponNull.png" mode=""></image>
						<text>尚无优惠券</text>
					</view>
				</view>
				<!-- 有数据 -->
				<view class="ShoppingCart_coupon_box_content" v-else>
					<view class="ShoppingCart_coupon_box_content_list" v-for="(item, index) in couponList" :key="index" @click="couponClick(index)">
						<view class="left">
							<view class="left_radialGradient1"></view>
							<view class="left_radialGradient2"></view>
							<view class="">
								<text>{{item.couponNum}}</text>
								折
							</view>
						</view>
						<view class="right">
							<view class="right_radialGradient1"></view>
							<view class="right_radialGradient2"></view>
							<view class="text">
								{{item.title}}
							</view>
							<image v-if="couponActive != index" src="../../static/mallImg/couponDefault.png" mode=""></image>
							<image v-if="couponActive == index" src="../../static/mallImg/couponSelect.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="ShoppingCart_coupon_box_bottom">
					<view @click="useCoupon()">
						使用
					</view>
				</view>
			</view>
		</view>
	
		<!-- 删除商品弹窗 -->
		<view class="ShoppingCart_delete" v-if="deteleStatus">
			<view class="ShoppingCart_delete_box">
				<image src="../../static/mallImg/ShoppingCartDelete.png" mode=""></image>
				<text class="text1">确定删除</text>
				<text class="text2">删除后，如需此商品，需重新加入购物车</text>
				<view class="view">
					<view class="view_left" @click="deteleStatus = false">
						取消
					</view>
					<view class="view_right" @click="deleteClick()">
						确定
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leavemessage: "",
				dataList: [
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						title: "成年搭长高神器钙片青少年学生个子高钙",
						subtotal: "310.00",
						price: "310.00",
						num: 1
					},
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						title: "成年搭长高神器钙片青少年学生个子高钙11111",
						subtotal: "660.00",
						price: "330.00",
						num: 2
					}
				],
				couponActive: 0,
				couponStatus: false,
				couponTitle: "",
				couponList: [
					{
						couponNum: 9,
						title: "VIP客户9折券"
					},
					{
						couponNum: 7,
						title: "全部商品七折"
					},
					{
						couponNum: 9,
						title: "VIP客户9折券"
					},
					{
						couponNum: 7,
						title: "全部商品七折"
					}
				],
				deteleStatus: false
			}
		},
		methods: {
			// 返回上一页
			returnClick() {
				uni.redirectTo({
					url: '../../pages/ShoppingMall/ShoppingMall'
				})
			},
			// 选择地址
			addressClcik() {
				uni.navigateTo({
					url: '../AddressList/AddressList'
				})
			},
			// 下一步
			nextClick() {
				uni.navigateTo({
					url: '../OrderDetails/OrderDetails'
				})
			},
			// 备注清空
			EmptyInputClick() {
				this.leavemessage = ""
			},
			// 优惠卷选择
			couponClick(index) {
				this.couponActive = index
			},
			// 使用优惠卷
			useCoupon() {
				if (this.couponList.leght < 1) {
					return false
				}
				this.couponStatus = false
				this.couponTitle = this.couponList[this.couponActive].title
			},
			// 打开删除弹窗
			openDetele(item) {
				console.log(item)
				this.deteleStatus = true
			},
			// 确定删除商品
			deleteClick() {
				this.deteleStatus = false
			}
		}
	}
</script>

<style lang="scss">
.ShoppingCart {
	padding: 20rpx 4.27% 0;
	background: #F8F8FA;
	min-height: 100vh;
	padding-bottom: 150rpx;
	.ShoppingCart_null {
		padding-top: 30vh;
		text-align: center;
		width: 100%;
		height: 100%;
		image {
			width: 264rpx;
			height: 220rpx;
		}
		text {
			display: block;
			margin-top: 90rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #24252A;
			line-height: 42rpx;
		}
	}
	.ShoppingCart_list {
		.ShoppingCart_list_button {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 28rpx;
			width: 100%;
			height: 88rpx;
			background: #68B74D;
			border-radius: 46rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 88rpx;
			image {
				width: 32rpx;
				height: 32rpx;
				margin-right: 20rpx;
			}
		}
		.ShoppingCart_list_content {
			width: 100%;
			padding: 0 24rpx;
			background: #FFFFFF;
			border-radius: 8rpx;
			.ShoppingCart_list_content_box {
				padding: 24rpx 0;
				position: relative;
				display: flex;
				border-bottom: 2rpx solid #EFEFEF;
				.ShoppingCart_list_content_close {
					width: 28rpx;
					height: 28rpx;
					position: absolute;
					right: 0;
					top: 28rpx;
				}
				.ShoppingCart_list_content_img {
					margin-right: 16rpx;
					width: 206rpx;
					height: 206rpx;
					background: #F6F6F6;
					display: flex;
					align-items: center;
					justify-content: center;
					image {
						max-width: 100%;
						max-height: 100%;
					}
				}
				.ShoppingCart_list_content_price {
					width: calc(100% - 222rpx);
					.ShoppingCart_list_content_price_title {
						padding-right: 28rpx;
						height: 120rpx;
						font-size: 28rpx;
						font-weight: 400;
						color: #24252A;
						line-height: 40rpx;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						line-clamp: 3;
						-webkit-box-orient: vertical;
					}
					.ShoppingCart_list_content_price_operating {
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						.price {
							width: calc(100% - 160rpx);
							.subtotal {
								display: block;
								font-size: 28rpx;
								font-weight: 600;
								color: #FB861E;
								line-height: 40rpx;
							}
							.unitPrice {
								display: block;
								font-size: 24rpx;
								font-weight: 400;
								color: #9FA0A2;
								line-height: 34rpx;
							}
						}
						.operating {
							display: flex;
							align-items: center;
							padding: 0 20rpx;
							width: 152rpx;
							height: 52rpx;
							background: #F5F6F7;
							border-radius: 26rpx;
							.less {
								width: 18rpx;
								height: 4rpx;
							}
							.num {
								text-align: center;
								width: 76rpx;
								display: block;
								font-size: 26rpx;
								font-weight: 500;
								color: #252427;
								line-height: 36rpx;
							}
							.add {
								width: 18rpx;
								height: 18rpx;
							}
						}
					}
				}
			}
			.ShoppingCart_list_content_box:last-child {
				border-bottom: 0;
			}
		}
		.ShoppingCart_list_operating {
			margin-top: 24rpx;
			padding: 0 24rpx;
			background: #FFFFFF;
			border-radius: 8rpx;
			.ShoppingCart_list_operating_coupon {
				border-bottom: 1px solid #EFEFEF;
				padding: 24rpx 0;
				display: flex;
				justify-content: space-between;
				.text {
					width: 140rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #24252A;
					line-height: 40rpx;
				}
				.view {
					font-size: 28rpx;
					font-weight: 400;
					color: #FF441F;
					line-height: 40rpx;
					display: flex;
					align-items: center;
					image {
						width: 12rpx;
						height: 24rpx;
						margin-left: 20rpx;
					}
				}
			}
			.ShoppingCart_list_operating_input {
				padding: 24rpx 0;
				display: flex;
				justify-content: space-between;
				.text {
					width: 140rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #24252A;
					line-height: 40rpx;
				}
				.view {
					width: calc(100% - 140rpx);
					position: relative;
					.input {
						width: calc(100% - 52rpx);
						padding-right: 52rpx;
						text-align: right;
						position: absolute;
						right: 0;
						top: 0;
						font-size: 28rpx;
						font-weight: 400;
						color: #24252A;
						line-height: 40rpx;
					}
					image {
						position: absolute;
						right: 12rpx;
						top: 8rpx;
						width: 28rpx;
						height: 28rpx;
					}
				}
			}
		}
	}
	.ShoppingCart_Settlement {
		padding: 0 4.27%;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 140rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.ShoppingCart_Settlement_left {
			font-size: 20rpx;
			font-weight: 400;
			color: #24252A;
			line-height: 28rpx;
			.ShoppingCart_Settlement_left_text {
				margin-left: 8rpx;
				font-size: 40rpx;
				font-family: OPPOSans-B, OPPOSans;
				font-weight: normal;
				color: #FB861E;
				line-height: 44rpx;
				text {
					font-size: 28rpx;
				}
			}
		}
		.ShoppingCart_Settlement_right {
			width: 308rpx;
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
	.ShoppingCart_coupon {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		.ShoppingCart_coupon_box {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 760rpx;
			background: #FFFFFF;
			border-radius: 40rpx 40rpx 0px 0px;
			padding: 40rpx 4.27% 0;
			.ShoppingCart_coupon_box_close {
				position: absolute;
				right: 30rpx;
				top: 46rpx;
				height: 32rpx;
				width: 32rpx;
			}
			.ShoppingCart_coupon_box_top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-right: 48rpx;
				margin-bottom: 40rpx;
				.text1 {
					font-size: 32rpx;
					font-weight: 600;
					color: #24252A;
					line-height: 44rpx;
				}
				.text2 {
					font-size: 24rpx;
					font-weight: 400;
					color: #D2D2D2;
					line-height: 44rpx;
				}
			}
			.ShoppingCart_coupon_box_content {
				height: calc(100% - 200rpx);
				overflow-y: scroll;
				.ShoppingCart_coupon_box_content_list {
					margin-bottom: 24rpx;
					width: 100%;
					height: 200rpx;
					display: flex;
					background: #FFFFFF;
					box-shadow: 0px 10rpx 40rpx -2rpx #EFEFEF;
					.left {
						width: 204rpx;
						height: 100%;
						background: #FB861E;
						font-size: 28rpx;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 40rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						position: relative;
						text {
							font-size: 88rpx;
							font-family: OPPOSans-B, OPPOSans;
							font-weight: normal;
							color: #FFFFFF;
							line-height: 140rpx;
						}
						.left_radialGradient1 {
							background:radial-gradient(20rpx at right top, #fff 40rpx, #FB861E 50%);
							position: absolute;
							right: 0;
							top: 0;
							width: 20rpx;
							height: 20rpx;
						}
						.left_radialGradient2 {
							background:radial-gradient(20rpx at right bottom, #fff 40rpx, #FB861E 50%);
							position: absolute;
							right: 0;
							bottom: 0;
							width: 20rpx;
							height: 20rpx;
						}
					}
					.right {
						padding: 40rpx;
						width: calc(100% - 204rpx);
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: space-between;
						position: relative;
						.right_radialGradient1 {
							background:radial-gradient(20rpx at left top, #fff 40rpx, #fff 50%);
							position: absolute;
							left: 0;
							top: 0;
							width: 20rpx;
							height: 20rpx;
						}
						.right_radialGradient2 {
							background:radial-gradient(20rpx at left bottom, #fff 40rpx, #fff 50%);
							position: absolute;
							left: 0;
							bottom: 0;
							width: 20rpx;
							height: 20rpx;
						}
						.text {
							width: calc(100% - 60rpx);
							height: 120rpx;
							font-size: 32rpx;
							font-weight: 400;
							color: #24252A;
							line-height: 40rpx;
							text-overflow: -o-ellipsis-lastline;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 3;
							line-clamp: 3;
							-webkit-box-orient: vertical;
						}
						image {
							width: 52rpx;
							height: 52rpx;
						}
					}
				}
			}
			.ShoppingCart_coupon_box_null {
				height: calc(100% - 200rpx);
				display: flex;
				align-items: center;
				justify-content: center;
				view {
					text-align: center;
					image {
						width: 212rpx;
						height: 220rpx;
					}
					text {
						display: block;
						margin-top: 34rpx;
						font-size: 30rpx;
						font-weight: 400;
						color: #24252A;
						line-height: 42rpx;
					}
				}
			}
			.ShoppingCart_coupon_box_bottom {
				height: 118rpx;
				display: flex;
				align-items: center;
				view {
					width: 100%;
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
	.ShoppingCart_delete {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		.ShoppingCart_delete_box {
			padding: 60rpx;
			width: 590rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			text-align: center;
			image {
				width: 152rpx;
				height: 152rpx;
			}
			.text1 {
				margin: 20rpx 0 14rpx;
				display: block;
				font-size: 40rpx;
				font-weight: 500;
				color: #131F2B;
				line-height: 56rpx;
			}
			.text2 {
				font-size: 26rpx;
				font-weight: 400;
				color: #828282;
				line-height: 36rpx;
			}
			.view {
				margin-top: 60rpx;
				display: flex;
				justify-content: space-between;
				.view_left {
					width: 208rpx;
					height: 88rpx;
					background: rgba(104,183,77,0.2);
					border-radius: 54rpx;
					font-size: 30rpx;
					font-weight: 400;
					color: #68B74D;
					line-height: 88rpx;
				}
				.view_right {
					width: 208rpx;
					height: 88rpx;
					background: #68B74D;
					border-radius: 54rpx;
					font-size: 30rpx;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 88rpx;
				}
			}
		}
	}
}
</style>
