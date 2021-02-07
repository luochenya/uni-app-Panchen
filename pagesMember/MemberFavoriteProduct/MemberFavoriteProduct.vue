<template>
	<view class="">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="'收藏商品'" @returnClick="returnClick"></top-navigation>
		
		<view class="MemberFavoriteProduct">
			<view class="MemberFavoriteProduct_box" v-for="(item, index) in dataList" :key="index" @click="toDetails(item.id)">
				<view class="MemberFavoriteProduct_img">
					<image :src="imgUrl + item.imgs" mode="aspectFill"></image>
				</view>
				<view class="MemberFavoriteProduct_price">
					<text>￥{{item.original_cost}}</text>
					<image @click.stop="addWishlist(item.id, 2, index)" src="../static/image/Favorites.png" mode=""></image>
				</view>
				<text class="MemberFavoriteProduct_title">
					{{item.goods_name}}
				</text>
				<view class="MemberFavoriteProduct_shoppingCart" @click.stop="addCart(item.id)">
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
		
		<uni-load-more :status="status" :icon-size="14" :content-text="contentText" v-if="dataList.length > 0" />
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		components:{
			uniLoadMore
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
					offset: 1,
					limit: 6
				},
				total: 0,
				totalCount: 0,
				imgUrl: this.$imgUrl,
				dataList: []
			};
		},
		onLoad() {
			this._getGoodsCollectList(1)
		},
		// 监听下拉事件
		onReachBottom() {
			if (this.totalCount > this.dataList.length) {
				this.status = 'loading';
				setTimeout(() => {
					this.form.offset++
					this._getGoodsCollectList(2);//执行的方法
				}, 1000)//这里我是延迟一秒在加载方法有个loading效果，如果接口请求慢的话可以去掉
			} else { //停止加载
				this.status = 'noMore'
			}
		},
		methods:{
			// 获取收藏商品列表
			_getGoodsCollectList (num) {
				 // 加载动画
				 if (num == 1) {
					 uni.showLoading({
					 	title: '加载中',
					 });
				 }
				this.$member.post('Order/get_goods_collect_list', this.form).then(res => {
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
						this.reload = true;
						this._getGoodsCollectList(1)
					}
				})
			},
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
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
