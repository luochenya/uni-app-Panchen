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
							<image :src="imgUrl + item.imgs" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		
		<scroll-view class="ShoppingMall_title" scroll-x="true">
			<view class="ShoppingMall_title_content" :class="titleActive == index ? 'active' : ''" @click="titleClick(index)" v-for="(item, index) in titleList" :key="index">
				<text>{{item.class_name}}</text>
				<view v-if="titleActive == index"></view>
			</view>
		</scroll-view>
		
		<view class="ShoppingMall_content">
			<view class="ShoppingMall_content_box" v-for="(item, index) in dataList" :key="index" @click="toDetails(item.id)">
				<view class="ShoppingMall_content_box_img">
					<image :src="imgUrl + item.imgs" mode=""></image>
				</view>
				<view class="ShoppingMall_content_box_price">
					<text>￥{{item.original_cost}}</text>
					<image v-if="item.is_collect == 1" @click.stop="addWishlist(item.id, 2, index)" src="../../static/mallImg/Collet.png" mode=""></image>
					<image v-if="item.is_collect == 0" @click.stop="addWishlist(item.id, 1, index)" src="../../static/mallImg/NotCollet.png" mode=""></image>
				</view>
				<view class="ShoppingMall_content_box_title">
					{{item.goods_name}}
				</view>
				<view class="ShoppingMall_content_box_shoppingCart" @click.stop="addCart(item.id)">
					<image src="../../static/mallImg/shoppingCart.png" mode=""></image>
					<text>加入购物车</text>
				</view>
			</view>
		</view>
		<uni-load-more :status="status" :icon-size="14" :content-text="contentText" v-if="dataList.length > 0" />
		<shopping-cart></shopping-cart>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import shoppingCart from "../../components/shopping-cart/shopping-cart.vue"
	export default {
		components:{
			uniLoadMore,
			shoppingCart
		},
		data() {
			return {
				reload: false,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多~',
					contentrefresh: '加载中',
					contentnomore: '已经没有更多啦~'
				},
				searchValue: "",
				titleActive: 0,
				titleList: [],
				imgUrl: this.$imgUrl,
				current: 0,
				info: [],
				form: {
					goods_name: "",
					class_id: "",
					offset: 1,
					limit: 4
				},
				total: 0,
				dataList: []
			};
		},
		onLoad() {
			this._getGoodsClassList()
			this._getGoodsList(1)
			this._getGoodsBanner()
		},
		// 监听下拉事件
		onReachBottom() {
			if (this.totalCount > this.dataList.length) {
				this.status = 'loading';
				setTimeout(() => {
					this.form.offset++
					this._getGoodsList(2);//执行的方法
				}, 1000)//这里我是延迟一秒在加载方法有个loading效果，如果接口请求慢的话可以去掉
			} else { //停止加载
				this.status = 'noMore'
			}
		},
		methods:{
			// 获取banner图
			_getGoodsBanner () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$member.post('Order/get_goods_banner').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.info = res.data.data
					}
				}).catch(err => {
					// console.log(err)
				})
			},
			// 获取商品分类列表
			_getGoodsClassList () {
				 // 加载动画
				 uni.showLoading({
					title: '加载中',
				 });
				this.$member.post('Order/get_goods_class_list', this.form).then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.titleList = res.data.data
						this.titleList.splice(0, 0, {
							id: '',
							class_name: '全部商品'
						})
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
			// 获取商品列表
			_getGoodsList (num) {
				 // 加载动画
				 if (num == 1) {
					 uni.showLoading({
					 	title: '加载中',
					 });
				 }
				this.$member.post('Order/get_goods_list', this.form).then(res => {
					// 关闭加载动画
					 if (num == 1) {
						uni.hideLoading();
					}
					if (res.data.code == 200) {
						this.total = res.data.data.total
						this.totalCount = res.data.data.total
						if (res.data.data.total > 0) {
							const dataMap = res.data.data.rows
							this.dataList = this.reload ? dataMap : this.dataList.concat(dataMap);
							this.reload = false;
						} else {
							this.dataList = [];
						}
						if (this.totalCount == this.dataList.length) {
							this.reload = false;
							this.status = 'noMore'
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
			// 返回上一页
			returnClick() {
				uni.switchTab({
					url: '../member/index'
				})
			},
			// 轮播图切换
			change (e) {
				this.current = e.detail.current;
			},
			// 商品分类切换
			titleClick(index) {
				this.titleActive = index
				this.form.class_id = this.titleList[index].id
				this.form.offset = 1
				this.reload = true
				this._getGoodsList(1)
			},
			// 加入购物车
			addCart(goods_id) {
				 uni.showLoading({
					title: '加载中',
				 });
				 const form = {
					 goods_id: goods_id,
					 quantity: 1
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
			addWishlist(goods_id, type, index) {
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
							this.dataList[index].is_collect = 0
						} else {
							this.dataList[index].is_collect = 1
						}
					}
				})
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
			toDetails(id) {
				uni.navigateTo({
					url: '../../pagesMall/ProductDetails/ProductDetails?id=' + id
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
