<template>
	<view class="shoppingCart">
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
