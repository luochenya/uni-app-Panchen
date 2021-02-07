<template>
	<view class="MemberOrderManagement">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="'订单管理'" @returnClick="returnClick"></top-navigation>
		
		<view class="MemberOrderManagement_top">
			<view :class="form.state == 1 ? 'active' : ''" @click="activeCLick(1)">
				处理中
			</view>
			<view :class="form.state == 2 ? 'active' : ''" @click="activeCLick(2)">
				已发货
			</view>
		</view>
		
		<!-- 空数据组件 -->
		<view class="MemberOrderManagement_null" v-if="dataList.length == 0">
			<image src="../static/image/MemberOrderManagementNull.png" mode=""></image>
			<text v-if="form.state == 1">尚无处理中之订单</text>
			<text v-if="form.state == 2">尚无已发货之订单</text>
		</view>
		
		<view class="MemberOrderManagement_box" v-for="(item, index) in dataList" :key="index">
			<view class="MemberOrderManagement_box_title" @click="statusClick(index)">
				<view class="titleLeft">
					<image v-if="form.state == 1" src="../static/image/MemberOrderManagement1.png" mode=""></image>
					<image v-if="form.state == 2" src="../static/image/MemberOrderManagement2.png" mode=""></image>
					<text>訂單編號：{{item.order_no}}</text>
				</view>
				<view class="titleRight">
					<text v-if="!statusList[index]">{{item.payment}}</text>
					<image :class="statusList[index] ? 'active' : ''" src="../static/image/MemberOrderManagement3.png" mode=""></image>
				</view>
			</view>
			
			<view class="MemberOrderManagement_box_content" v-if="statusList[index]">
				<view class="MemberOrderManagement_box_content_box" v-for="(items, indexs) in item.goods_item" :key="indexs">
					<view class="contentLeft">
						<image :src="imgUrl + items.imgs" mode=""></image>
					</view>
					<view class="contentRight">
						<text class="title1">
							{{items.goods_name}}
						</text>
						<text class="title2">
							单价：{{items.price}}    X {{items.num}}
						</text>
						<text class="title3">
							小计：{{items.total_fee}}
						</text>
					</view>
				</view>
			</view>
			
			<view class="MemberOrderManagement_box_bottom" :class="item.type == 1 ? 'MemberOrderManagement_box_bottom_active' : ''" v-if="statusList[index]">
				<text class="textLeft">合計</text>
				<text class="textRight">{{item.total}}</text>
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
				imgUrl: this.$imgUrl,
				reload: false,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多~',
					contentrefresh: '加载中',
					contentnomore: '已经没有更多啦~'
				},
				total: 0,
				form: {
					offset: 1,
					limit: 10,
					state: 1
				},
				statusList: [],
				dataList: []
			};
		},
		onLoad() {
			this._getOrdersList(1)
		},
		// 监听下拉事件
		onReachBottom() {
			if (this.totalCount > this.dataList.length) {
				this.status = 'loading';
				setTimeout(() => {
					this.form.offset++
					this._getOrdersList(2);//执行的方法
				}, 1000)//这里我是延迟一秒在加载方法有个loading效果，如果接口请求慢的话可以去掉
			} else { //停止加载
				this.status = 'noMore'
			}
		},
		methods: {
			// 获取订单列表
			_getOrdersList (num) {
				 // 加载动画
				 if (num == 1) {
					 uni.showLoading({
					 	title: '加载中',
					 });
				 }
				this.$member.post('Order/get_orders_list', this.form).then(res => {
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
							this.dataList.forEach(item => {
								this.statusList.push(false)
							})
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
			activeCLick(value) {
				this.form.state = value
				this.reload = true
				this._getOrdersList(1)
				// if (value == this.active) {
				// 	return false;
				// }
				// this.active = value
			},
			statusClick(index) {
				this.statusList.splice(index, 1, !this.statusList[index])
			}
		}
	}
</script>

<style lang="scss" scoped>
.MemberOrderManagement {
	padding: 40rpx 4.27% 0;
	min-height: 100vh;
	background: #F8F8FA;
	.MemberOrderManagement_top {
		margin-bottom: 34rpx;
		padding: 10rpx;
		width: 100%;
		height: 80rpx;
		background: #68B74D;
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		view {
			width: 50%;
			height: 60rpx;
			background: #68B74D;
			border-radius: 8rpx;
			line-height: 60rpx;
			text-align: center;
			font-size: 30rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
		.active {
			font-weight: 500;
			color: #68B74D;
			background: #FFFFFF;
		}
	}
	
	.MemberOrderManagement_null {
		padding-top: 200rpx;
		width: 100%;
		text-align: center;
		image {
			width: 318rpx;
			height: 200rpx;
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
	
	.MemberOrderManagement_box {
		margin-bottom: 24rpx;
		padding: 24rpx 20rpx;
		width: 100%;
		background: #FFFFFF;
		border-radius: 8rpx;
		.MemberOrderManagement_box_title {
			display: flex;
			justify-content: space-between;
			.titleLeft {
				display: flex;
				align-items: center;
				image {
					width: 26rpx;
					height: 30rpx;
					margin-right: 16rpx;
				}
				text {
					font-size: 30rpx;
					font-weight: 400;
					color: #24252A;
					line-height: 48rpx;
				}
			}
			.titleRight {
				display: flex;
				align-items: center;
				image {
					width: 20rpx;
					height: 10rpx;
					margin-left: 12rpx;
				}
				text {
					font-size: 30rpx;
					font-family: OPPOSans-B, OPPOSans;
					font-weight: normal;
					color: #FB861E;
					line-height: 48rpx;
				}
				.active {
					transform: rotate(180deg);
				}
			}
		}
		.MemberOrderManagement_box_content {
			margin-top: 40rpx;
			.MemberOrderManagement_box_content_box {
				margin-bottom: 30rpx;
				display: flex;
				.contentLeft {
					margin-right: 16rpx;
					width: 206rpx;
					height: 206rpx;
					padding: 10rpx;
					background: #F6F6F6;
					image {
						max-width: 100%;
						max-height: 100%;
					}
				}
				.contentRight {
					.title1 {
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
					.title2 {
						display: block;
						margin: 8rpx 0 38rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #9FA0A2;
						line-height: 34rpx;
					}
					.title3 {
						font-size: 28rpx;
						font-weight: 600;
						color: #FB861E;
						line-height: 40rpx;
					}
				}
			}
		}
		.MemberOrderManagement_box_bottom {
			padding: 0 40rpx;
			width: 100%;
			height: 96rpx;
			background: #68B74D;
			border-radius: 4rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.textLeft {
				font-size: 34rpx;
				font-weight: 600;
				color: #FFFFFF;
				line-height: 48rpx;
			}
			.textRight {
				font-size: 34rpx;
				font-family: OPPOSans-B, OPPOSans;
				font-weight: normal;
				color: #FFFFFF;
				line-height: 52rpx;
			}
		}
		.MemberOrderManagement_box_bottom_active {
			background: #D2D2D2;
		}
	}
}
</style>
