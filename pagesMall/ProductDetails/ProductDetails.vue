<template>
	<view class="ProductDetails">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#F6F6F6'" :titleColor="'#FFFFFF'" @returnClick="returnClick"></top-navigation>
		
		<!-- 轮播图 -->
		<uni-swiper-dot :info="info" :current="current" field="content">
			<swiper @change="change" style="height: 580rpx;background: #F6F6F6;" autoplay="true" circular="true">
				<swiper-item v-for="(item ,index) in dataForm.imgs" :key="index">
					<view class="ShoppingMall_swiper">
						<image :src="imgUrl + item" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		
		<view class="ProductDetails_box">
			<view class="ProductDetails_box_title">
				<text>{{dataForm.goods_name}}</text>
				<image v-if="dataForm.is_collect == 1" @click="addWishlist(dataForm.id, 2)" src="../../static/mallImg/Collet.png" mode=""></image>
				<image v-if="dataForm.is_collect == 0" @click="addWishlist(dataForm.id, 1)" src="../../static/mallImg/NotCollet.png" mode=""></image>
			</view>
			<view class="ProductDetails_box_price">
				<text>￥</text>
				{{dataForm.preferential_price}}
			</view>
			<view class="ProductDetails_box_sales">
				<view>
					原价：
					<text>￥{{dataForm.original_cost}}</text>
				</view>
				<view>
					月销 {{dataForm.sales}}
				</view>
			</view>
			<view class="ProductDetails_box_num">
				<text class="ProductDetails_box_num_left">数量</text>
				<view class="ProductDetails_box_num_right">
					<view class="image1" @click="lessClick()">
						<image src="../../static/mallImg/less.png" mode=""></image>
					</view>
					<text>{{num}}</text>
					<view class="image2" @click="addClick()">
						<image src="../../static/mallImg/add.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="ProductDetails_box_details">
				<text>商品详情</text>
				<image :src="imgUrl + dataForm.details_imgs" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="ProductDetails_operating">
			<view class="ProductDetails_operating_shoppingCart" @click="toShoppingCart()">
				<view class="shoppingCartLeft">
					<view v-if="cartCount > 0">{{cartCount > 99 ? '99+' : cartCount}}</view>
					<image src="../../static/mallImg/shoppingCartss.png" mode=""></image>
				</view>
				<text class="shoppingCartRight">购物车</text>
			</view>
			<view class="ProductDetails_operating_operating" v-if="!stockStatus">
				<view class="ProductDetails_operating_join" @click="addCart(dataForm.id)">
					加入购物车
				</view>
				<view class="ProductDetails_operating_buy" @click="addCart(dataForm.id, 1)">
					立即购买
				</view>
			</view>
			<view class="ProductDetails_operating_outOfStock" v-if="stockStatus">
				缺货中
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 1,
				imgUrl: this.$imgUrl,
				current: 0,
				goods_id: "",
				dataForm: {},
				stockStatus: false
			};
		},
		onLoad:function(option){
			this.goods_id = option.id
			this._getGoodsRead()
		},
	    computed: {
			cartCount() {
			    return this.$store.state.cart.cartCount;
			}
	    },
		watch: {
			num: function() {
				if (this.num > this.dataForm.stock) {
					this.stockStatus = true
				} else {
					this.stockStatus = false
				}
			}
		},
		methods:{
			// 获取商品详情
			_getGoodsRead () {
				 // 加载动画
				 uni.showLoading({
					title: '加载中',
				 });
				this.$member.post('Order/get_goods_read', { goods_id: this.goods_id }).then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.dataForm = res.data.data
						if (res.data.stock <= 1) {
							this.stockStatus = true
						} else {
							this.stockStatus = false
						}
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
			// 加入购物车
			addCart(goods_id, type) {
				 uni.showLoading({
					title: '加载中',
				 });
				 const form = {
					 goods_id: goods_id,
					 quantity: this.num
				 }
				this.$member.post('Order/add_cart', form).then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.$store.commit("cart/setCartCount", res.data.data.sum);
						 uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						 })
						 if (type == 1) {
							 uni.redirectTo({
							 	url: "../ShoppingCart/ShoppingCart"
							 })
						 }
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
			// 收藏商品
			addWishlist(goods_id, type) {
				 uni.showLoading({
					title: '加载中',
				 });
				 const form = {
					 goods_id: goods_id,
					 type: type
				 }
				this.$member.post('Order/add_to_wishlist', form).then(res => {
					// 关闭加载动画
					uni.hideLoading();
					uni.showToast({
						icon: 'none',
						title: res.data.msg,
						duration: 2000
					})
					if (res.data.code == 200) {
						if (type == 2) {
							this.dataForm.is_collect = 0
						} else {
							this.dataForm.is_collect = 1
						}
					}
				})
			},
			// 跳转到购物车
			toShoppingCart() {
				uni.redirectTo({
					url: "../ShoppingCart/ShoppingCart"
				})
			},
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
				})
			},
			// 轮播变动
			change (e) {
				this.current = e.detail.current;
			},
			// 减少数量
			lessClick() {
				if (this.num == 1) {
					return false
				}
				this.num--
			},
			// 增加数量
			addClick() {
				this.num++
			}
		}
	}
</script>

<style lang="scss" scoped>
.ProductDetails {
	padding-bottom: 140rpx;
	.ShoppingMall_swiper {
		width: 100%;
		height: 580rpx;
		text-align: center;
		padding-top: 17rpx;
		image {
			max-width: 476rpx;
			max-height: 476rpx;
		}
	}
	.ProductDetails_box {
		padding: 24rpx 4.27% 0;
		.ProductDetails_box_title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			text {
				display: block;
				width: calc(100% - 80rpx);
				font-size: 32rpx;
				font-weight: 600;
				color: #24252A;
				line-height: 48rpx;
			}
			image {
				width: 44rpx;
				height: 40rpx;
				margin-left: 36rpx;
			}
		}
		.ProductDetails_box_price {
			margin: 8rpx 0;
			font-size: 40px;
			font-family: OPPOSans-B, OPPOSans;
			font-weight: normal;
			color: #FB861E;
			line-height: 52px;
			text {
				font-size: 30px;
			}
		}
		.ProductDetails_box_sales {
			display: flex;
			justify-content: space-between;
			align-items: center;
			view {
				font-size: 26rpx;
				font-weight: 400;
				color: #9FA0A2;
				line-height: 36rpx;
				text {
					text-decoration: line-through;
				}
			}
		}
		.ProductDetails_box_num {
			margin: 40rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.ProductDetails_box_num_left {
				font-size: 28rpx;
				font-weight: 400;
				color: #24252A;
				line-height: 40rpx
			}
			.ProductDetails_box_num_right {
				width: 192rpx;
				height: 52rpx;
				background: #F5F6F7;
				border-radius: 26rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.image1 {
					height: 100%;
					display: flex;
					align-items: center;
					padding: 0 20rpx;
					image {
						width: 18rpx;
						height: 4rpx;
					}
				}
				text {
					font-size: 26rpx;
					font-weight: 500;
					color: #252427;
					line-height: 36rpx;
				}
				.image2 {
					height: 100%;
					display: flex;
					align-items: center;
					padding: 0 20rpx;
					image {
						width: 18rpx;
						height: 18rpx;
					}
				}
			}
		}
		.ProductDetails_box_details {
			padding: 40rpx 0;
			border-top: 2rpx solid #EFEFEF;
			text {
				display: block;
				margin-bottom: 20rpx;
				font-size: 32rpx;
				font-weight: 500;
				color: #000000;
				line-height: 44rpx;
			}
			image {
				width: 100%;
				height: auto;
			}
		}
	}
	.ProductDetails_operating {
		padding: 26rpx 4.27%;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 140rpx;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.ProductDetails_operating_shoppingCart {
			width: 80rpx;
			.shoppingCartLeft {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				view {
					position: absolute;
					right: 0;
					top: -6rpx;
					padding: 0 6rpx;
					height: 28rpx;
					background: #FF441F;
					border-radius: 16rpx;
					font-size: 20rpx;
					font-family: OPPOSans-B, OPPOSans;
					font-weight: normal;
					color: #FFFFFF;
					line-height: 28rpx;
				}
				image {
					width: 56rpx;
					height: 48rpx;
				}
			}
			.shoppingCartRight {
				margin-top: 8rpx;
				display: block;
				text-align: center;
				font-size: 20rpx;
				font-weight: 400;
				color: #24252A;
				line-height: 32rpx;
			}
		}
		.ProductDetails_operating_operating {
			display: flex;
			align-items: center;
			.ProductDetails_operating_join {
				width: 248rpx;
				height: 88rpx;
				background: #68B74D;
				border-radius: 54rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 88rpx;
				text-align: center;
			}
			.ProductDetails_operating_buy {
				margin-left: 20rpx;
				width: 248rpx;
				height: 88rpx;
				background: #FB861E;
				border-radius: 54rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 88rpx;
				text-align: center;
			}
		}
		.ProductDetails_operating_outOfStock {
			width: 516rpx;
			height: 88rpx;
			background: #D2D2D2;
			border-radius: 54rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 88rpx;
			text-align: center;
		}
	}
}
</style>
