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
			<view class="Search_content_box" v-for="(item, index) in dataList" :key="index" @click="toDetails(item.id)">
				<view class="Search_content_box_img">
					<image :src="imgUrl + item.imgs" mode=""></image>
				</view>
				<view class="Search_content_box_price">
					<text>{{item.original_cost}}</text>
					<image v-if="item.is_collect == 1" @click.stop="addWishlist(item.id, 2, index)" src="../../static/mallImg/Collet.png" mode=""></image>
					<image v-if="item.is_collect == 0" @click.stop="addWishlist(item.id, 1, index)" src="../../static/mallImg/NotCollet.png" mode=""></image>
				</view>
				<view class="Search_content_box_title">
					{{item.goods_name}}
				</view>
				<view class="Search_content_box_shoppingCart" @click.stop="addCart(item.id)">
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
				form: {
					goods_name: "",
					class_id: "",
					offset: 1,
					limit: 4
				},
				imgUrl: this.$imgUrl,
				total: 0,
				searchValue: "",
				dataList: []
			};
		},
		onLoad:function(option){
			this.searchValue = option.value
			this._getGoodsList(1)
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
			// 获取商品列表
			_getGoodsList (num) {
				 // 加载动画
				 if (num == 1) {
					 uni.showLoading({
					 	title: '加载中',
					 });
				 }
				this.form.goods_name = this.searchValue
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
				uni.navigateBack({
					delta:1
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
			// 搜寻
			toSearch() {
				if (!this.searchValue) {
					return false
				}
				this.form.offset = 1
				this.reload = true
				this._getGoodsList(1)
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
