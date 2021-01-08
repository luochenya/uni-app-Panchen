<template>
	<view class="Search">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="'搜寻'" @returnClick="returnClick"></top-navigation>
		
		<view class="Search_input">
			<image src="../../static/mallImg/search.png" mode="" @click="toSearch()"></image>
			<input type="text" value="" v-model="searchValue" confirm-type="搜寻" @confirm="toSearch()" placeholder="搜寻您需要的商品" />
		</view>
		<!-- 有数据 -->
		<view class="Search_content">
			<view class="Search_content_box" v-for="(item, index) in dataList" :key="index">
				<view class="Search_content_box_img">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="Search_content_box_price">
					<text>{{item.price}}</text>
					<image v-if="item.type == 0" src="../../static/mallImg/Collet.png" mode=""></image>
					<image v-if="item.type == 1" src="../../static/mallImg/NotCollet.png" mode=""></image>
				</view>
				<view class="Search_content_box_title">
					{{item.title}}
				</view>
				<view class="Search_content_box_shoppingCart" @click="addCart()">
					<image src="../../static/mallImg/shoppingCart.png" mode=""></image>
					<text>加入购物车</text>
				</view>
			</view>
		</view>
		
		<!-- 空数据 -->
		<view class="Search_null" v-if="dataList.length == 0">
			<image src="../../static/mallImg/SearchNull.png" mode=""></image>
			<text>查无商品</text>
		</view>
		
		<shopping-cart></shopping-cart>
	</view>
</template>

<script>
	import shoppingCart from "../../components/shopping-cart/shopping-cart.vue"
	export default {
		components:{
			shoppingCart
		},
		data() {
			return {
				searchValue: "",
				dataList: [
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "￥310.00",
						type: 0,
						title: "澳洲Swisse斯维诗高强度中老年保健品"
					},
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "￥310.00",
						type: 1,
						title: "澳洲Swisse斯维诗高强度中老年保健品"
					},
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "￥310.00",
						type: 0,
						title: "澳洲Swisse斯维诗高强度中老年保健品"
					},
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "￥310.00",
						type: 1,
						title: "澳洲Swisse斯维诗高强度中老年保健品"
					},
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "￥310.00",
						type: 0,
						title: "澳洲Swisse斯维诗高强度中老年保健品"
					}
				]
			};
		},
		onLoad:function(option){
			this.searchValue = option.value
		},
		methods:{
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
				})
			},
			// 加入购物车
			addCart() {
				this.$store.commit("cart/setCartCount", 99);
			},
			// 搜寻
			toSearch() {
				if (!this.searchValue) {
					return false
				}
				if (this.searchValue == 666666) {
					this.dataList = []
				} else {
					this.dataList = [
						{
							imgUrl: require("../../static/mallImg/ShoppingMall.png"),
							price: "￥310.00",
							type: 0,
							title: "澳洲Swisse斯维诗高强度中老年保健品"
						},
						{
							imgUrl: require("../../static/mallImg/ShoppingMall.png"),
							price: "￥310.00",
							type: 1,
							title: "澳洲Swisse斯维诗高强度中老年保健品"
						},
						{
							imgUrl: require("../../static/mallImg/ShoppingMall.png"),
							price: "￥310.00",
							type: 0,
							title: "澳洲Swisse斯维诗高强度中老年保健品"
						},
						{
							imgUrl: require("../../static/mallImg/ShoppingMall.png"),
							price: "￥310.00",
							type: 1,
							title: "澳洲Swisse斯维诗高强度中老年保健品"
						},
						{
							imgUrl: require("../../static/mallImg/ShoppingMall.png"),
							price: "￥310.00",
							type: 0,
							title: "澳洲Swisse斯维诗高强度中老年保健品"
						}
					]
				}
			}
		}
	}
</script>

<style lang="scss">
.Search {
	padding: 20rpx 4.27% 0;
	.Search_input {
		margin-bottom: 40rpx;
		width: 100%;
		height: 80rpx;
		background: #FFFFFF;
		box-shadow: 0px 16rpx 40rpx 0px rgba(210, 210, 210, 0.5);
		border-radius: 16rpx;
		position: relative;
		input {
			padding-left: 60rpx;
			padding-right: 40rpx;
			width: calc(100% - 100rpx);
			height: 100%;
			background: #FFFFFF;
			border-radius: 16rpx;
		}
		image {
			position: absolute;
			top: 28rpx;
			left: 24rpx;
			width: 24rpx;
			height: 24rpx;
		}
	}
	.Search_content {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.Search_content_box {
			margin-bottom: 40rpx;
			width: 320rpx;
			.Search_content_box_img {
				width: 320rpx;
				height: 320rpx;
				padding: 14rpx;
				background: #F6F6F6;
				image {
					max-width: 100%;
					max-height: 100%;
				}
			}
			.Search_content_box_price {
				margin: 12rpx 0;
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
			.Search_content_box_title {
				font-size: 28rpx;
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
			.Search_content_box_shoppingCart {
				margin-top: 12rpx;
				display: flex;
				align-items: center;
				image {
					width: 34rpx;
					height: 32rpx;
				}
				text {
					margin-left: 8rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #9FA0A2;
					line-height: 40rpx;
					text-decoration: underline;
				}
			}
		}
	}
	.Search_null {
		padding-top: 200rpx;
		text-align: center;
		image {
			width: 282rpx;
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
}
</style>
