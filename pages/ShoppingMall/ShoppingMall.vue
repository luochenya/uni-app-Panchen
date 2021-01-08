<template>
	<view class="ShoppingMall">
		<!-- 顶部导航 -->
		<top-navigation :type="1" :backgroundColor="'#68B74D'" :title="'购物商城'" :titleColor="'#FFFFFF'" @returnClick="returnClick"></top-navigation>
		
		<view class="ShoppingMall_search">
			<view class="ShoppingMall_input">
				<image src="../../static/mallImg/search.png" mode="" @click="toSearch()"></image>
				<input type="text" value="" v-model="searchValue" confirm-type="搜寻" @confirm="toSearch()" placeholder="搜寻您需要的商品" />
			</view>
			<!-- 轮播图 -->
			<uni-swiper-dot :info="info" :current="current" field="content" class="ShoppingMall_swiperDto">
				<swiper @change="change" style="height: 224rpx;" autoplay="true" circular="true">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="ShoppingMall_swiper">
							<!-- <image :src="imgUrl + item.imgs" mode=""></image> -->
							<image :src="item" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		
		<scroll-view class="ShoppingMall_title" scroll-x="true">
			<view class="ShoppingMall_title_content" :class="titleActive == index ? 'active' : ''" @click="titleClick(index)" v-for="(item, index) in titleList" :key="index">
				<text>{{item.title}}</text>
				<view v-if="titleActive == index"></view>
			</view>
		</scroll-view>
		
		<view class="ShoppingMall_content">
			<view class="ShoppingMall_content_box" v-for="(item, index) in dataList" :key="index" @click="toDetails(item)">
				<view class="ShoppingMall_content_box_img">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="ShoppingMall_content_box_price">
					<text>￥{{item.price}}</text>
					<image v-if="item.type == 0" src="../../static/mallImg/Collet.png" mode=""></image>
					<image v-if="item.type == 1" src="../../static/mallImg/NotCollet.png" mode=""></image>
				</view>
				<view class="ShoppingMall_content_box_title">
					{{item.title}}
				</view>
				<view class="ShoppingMall_content_box_shoppingCart" @click.stop="addCart()">
					<image src="../../static/mallImg/shoppingCart.png" mode=""></image>
					<text>加入购物车</text>
				</view>
			</view>
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
				titleActive: 0,
				titleList: [
					{
						title: "推荐商品"
					},
					{
						title: "精选推荐"
					},
					{
						title: "机能食品"
					},
					{
						title: "全部商品"
					}
				],
				imgUrl: this.$imgUrl,
				current: 0,
				info: [
					require("../../static/mallImg/banner.png")
				],
				dataList: [
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "310.00",
						type: 0,
						title: "澳洲Swisse斯维诗高强度中老年保健品1",
						OriginalPrice: "680.00",
						inStock: 30,
						Sales: "10000+"
					},
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "310.00",
						type: 1,
						title: "澳洲Swisse斯维诗高强度中老年保健品2",
						OriginalPrice: "680.00",
						inStock: 0,
						Sales: "500+"
					},
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "310.00",
						type: 0,
						title: "澳洲Swisse斯维诗高强度中老年保健品3",
						OriginalPrice: "680.00",
						inStock: 30,
						Sales: "3000+"
					},
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "310.00",
						type: 1,
						title: "澳洲Swisse斯维诗高强度中老年保健品4",
						OriginalPrice: "680.00",
						inStock: 0,
						Sales: "9000+"
					},
					{
						imgUrl: require("../../static/mallImg/ShoppingMall.png"),
						price: "310.00",
						type: 0,
						title: "澳洲Swisse斯维诗高强度中老年保健品5",
						OriginalPrice: "680.00",
						inStock: 30,
						Sales: "500+"
					}
				]
			};
		},
		methods:{
			// 返回上一页
			returnClick() {
				uni.switchTab({
					url: '../member/index'
				})
			},
			change (e) {
				this.current = e.detail.current;
			},
			titleClick(index) {
				this.titleActive = index
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
				uni.navigateTo({
					url: '../../pagesMall/Search/Search?value=' + this.searchValue
				})
			},
			// 商品详情
			toDetails(item) {
				const items = JSON.stringify(item)
				uni.navigateTo({
					url: '../../pagesMall/ProductDetails/ProductDetails?item=' + items
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.ShoppingMall {
	.ShoppingMall_search {
		padding: 20rpx 4.27% 60rpx;
		background: linear-gradient(#68B74D, #88C573, #92CB7F, #FFFFFF);
		.ShoppingMall_input {
			margin-bottom: 20rpx;
			width: 100%;
			height: 80rpx;
			background: #FFFFFF;
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
		.ShoppingMall_swiper {
			width: 100%;
			height: 224rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.ShoppingMall_title {
		padding-left: 4.27%;
		width: 95.73%;
		white-space: nowrap;
		display: flex;
		.ShoppingMall_title_content {
			margin-right: 60rpx;
			display: inline-block;
			text-align: center;
			text {
				font-size: 30rpx;
				font-weight: 400;
				color: #9FA0A2;
				line-height: 56rpx;
			}
			view {
				display: none;
				margin: 6rpx auto;
				width: 60rpx;
				height: 8rpx;
				background: #68B74D;
				border-radius: 4rpx;
			}
		}
		.ShoppingMall_title_content:last-child{
			margin-right: 30rpx;
		}
		.active {
			text {
				font-size: 40rpx;
				font-weight: 500;
				color: #000000;
			}
			view {
				display: block;
			}
		}
	}
	.ShoppingMall_content {
		padding: 30rpx 4.27%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.ShoppingMall_content_box {
			margin-bottom: 40rpx;
			width: 320rpx;
			.ShoppingMall_content_box_img {
				width: 320rpx;
				height: 320rpx;
				padding: 14rpx;
				background: #F6F6F6;
				image {
					max-width: 100%;
					max-height: 100%;
				}
			}
			.ShoppingMall_content_box_price {
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
			.ShoppingMall_content_box_title {
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
			.ShoppingMall_content_box_shoppingCart {
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
}
</style>
