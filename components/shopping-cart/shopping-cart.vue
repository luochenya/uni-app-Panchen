<template>
	<view class="shoppingCart" @click="toShoppingCart()">
		<image src="../../static/mallImg/shoppingCarts.png" mode=""></image>
		<view v-if="cartCount > 0">{{cartCount > 99 ? '99+' : cartCount}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
	    computed: {
			cartCount() {
			    return this.$store.state.cart.cartCount;
			}
	    },
		created() {
			this._getCart()
		},
		methods: {
			toShoppingCart() {
				uni.navigateTo({
					url: '../../pagesMall/ShoppingCart/ShoppingCart'
				})
			},
			// 获取购物车
			_getCart() {
				 uni.showLoading({
					title: '加载中',
				 });
				this.$member.post('Order/get_cart', {}).then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.$store.commit("cart/setCartCount", res.data.data.sum);
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

<style lang="scss" scoped>
.shoppingCart {
	position: fixed;
	right: 20rpx;
	bottom: 10vh;
	width: 108rpx;
	height: 108rpx;
	image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: #FFFFFF;
		box-shadow: 0 0 20px 0 rgba(210,210,210,0.50);
	}
	view {
		position: absolute;
		right: 0;
		top: 0;
		height: 32rpx;
		min-width: 32rpx;
		background: #FF441F;
		border-radius: 16rpx;
		padding: 0 8rpx;
		text-align: center;
		font-size: 22rpx;
		font-family: OPPOSans-B, OPPOSans;
		font-weight: normal;
		color: #FFFFFF;
		line-height: 32rpx;
	}
}
</style>
