<template>
	<view class="MemberFavoriteProduct">
		<view class="MemberFavoriteProduct_box" v-for="(item, index) in dataList" :key="index" @click="toDetails(item)">
			<view class="MemberFavoriteProduct_img">
				<image :src="item.imgUrl" mode="aspectFill"></image>
			</view>
			<view class="MemberFavoriteProduct_price">
				<text>￥{{item.price}}</text>
				<image src="../static/image/Favorites.png" mode=""></image>
			</view>
			<text class="MemberFavoriteProduct_title">
				{{item.title}}
			</text>
			<view class="MemberFavoriteProduct_shoppingCart">
				<image src="../static/image/shoppingCart.png" mode=""></image>
				加入购物车
			</view>
		</view>
		
		<!-- 空数据组件 -->
		<view class="MemberFavoriteProduct_null" v-if="dataList == [] || dataList.length < 1">
			<image src="../static/image/MemberFavoriteProductNull.png" mode=""></image>
			<text>尚无任何收藏</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "310.00",
						type: 0,
						title: "成年搭长高神器钙片青少年学生个子高钙",
						OriginalPrice: "680.00",
						inStock: 30,
						Sales: "600+"
					},
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "310.00",
						type: 0,
						title: "澳洲Swisse斯维诗高强度中老年保健品2",
						OriginalPrice: "680.00",
						inStock: 0,
						Sales: "1000+"
					},
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "310.00",
						type: 0,
						title: "澳洲Swisse斯维诗高强度中老年保健品3",
						OriginalPrice: "680.00",
						inStock: 30,
						Sales: "10000+"
					},
				]
			};
		},
		methods:{
			// 商品详情
			toDetails(item) {
				console.log(item)
				const items = JSON.stringify(item)
				console.log(items)
				uni.navigateTo({
					url: '../../pagesMall/ProductDetails/ProductDetails?item=' + items
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.MemberFavoriteProduct {
	padding: 20rpx 6.4% 0;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.MemberFavoriteProduct_box {
		width: 306rpx;
		margin-bottom: 50rpx;
		.MemberFavoriteProduct_img {
			padding: 12rpx;
			width: 100%;
			height: 306rpx;
			background: #F6F6F6;
			image {
				max-width: 100%;
				max-height: 100%;
			}
		}
		.MemberFavoriteProduct_price {
			margin: 20rpx 0 16rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			text {
				font-size: 32rpx;
				font-family: OPPOSans-B, OPPOSans;
				font-weight: normal;
				color: #FB861E;
				line-height: 50rpx;
			}
			image {
				width: 32rpx;
				height: 30rpx;
			}
		}
		.MemberFavoriteProduct_title {
			font-size: 28rpx;
			font-family: PingFangTC-Regular, PingFangTC;
			font-weight: 400;
			color: #24252A;
			line-height: 40rpx; 
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.MemberFavoriteProduct_shoppingCart {
			margin-top: 12rpx;
			display: flex;
			align-items: center;
			font-size: 28rpx;
			font-weight: 400;
			color: #9FA0A2;
			line-height: 40rpx;
			text-decoration: underline;
			image {
				margin-right: 4rpx;
				width: 34rpx;
				height: 32rpx;
			}
		}
	}
	
	.MemberFavoriteProduct_null {
		padding-top: 300rpx;
		width: 100%;
		text-align: center;
		image {
			width: 150rpx;
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
</style>
