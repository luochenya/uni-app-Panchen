<template>
	<view class="caseExclusive">
		<!-- 轮播图 -->
		<uni-swiper-dot :info="info" :current="current" field="content">
			<swiper @change="change" autoplay="true" circular="true">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="spotNewsImg">
						<image :src="imgUrl + item.imgs" mode="scaleToFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<view class="caseExclusive_title">推荐案例</view>
		<view class="caseExclusive_box">
			<view class="caseExclusive_box_content" @click="spikCaseDetails(item)" v-for="(item, index) in caseExclusive" :key="index">
				<view class="caseExclusive_box_content_image">
					<image :src="imgUrl + item.imgs" mode=""></image>
				</view>
				<view class="caseExclusive_box_content_content">
					<view class="caseExclusive_box_content_content_title">{{item.title}}</view>
					<view class="caseExclusive_box_content_content_content">- {{item.content}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl,
				current: 0,
				info: [],
				caseExclusive: []
			};
		},
		onLoad:function(option){
			this.gettingData()
			this._getSharingBannerList()
		},
		methods: {
			change (e) {
				this.current = e.detail.current;
			},
			// 获取banner图
			_getSharingBannerList () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('System/get_sharing_banner_list').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.info = res.data.data
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
			gettingData () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('System/get_sharing_list').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.caseExclusive = res.data.data
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
			spikCaseDetails (item) {
				var items = JSON.stringify(item)
				uni.navigateTo({
					url: '../caseDetails/caseDetails?items=' + items
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.caseExclusive {
	.spotNewsImg {
		padding: 0 4.27%;
		width: 100%;
		height: 262rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.caseExclusive_title {
		display: block;
		padding: 32rpx 4.27% 16rpx;
		font-size:32rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(19,31,43,1);
		line-height:48rpx;
		border-bottom: 2rpx solid #D8D8D8;
	}
	.caseExclusive_box {
		padding: 4.27%;
		.caseExclusive_box_content {
			padding: 32rpx;
			display: flex;
			justify-content: space-between;
			justify-items: center;
			align-items: center;
			box-shadow:4rpx 14rpx 14rpx -10rpx rgba(239,239,239,0.52);
			border-radius:8rpx;
			.caseExclusive_box_content_image {
				width: 146rpx;
				height: 200rpx;
				margin-right: 16rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.caseExclusive_box_content_content {
				width: 458rpx;
				.caseExclusive_box_content_content_title {
					display: block;
					width: 100%;
					font-size:30rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(51,51,51,1);
					line-height:44rpx;
				}
				.caseExclusive_box_content_content_content {
					font-size:24rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(130,130,130,1);
					line-height:48rpx;
				}
			}
		}
	}
}
.caseExclusiveRecommend {
	font-size: 30rpx;
	line-height: 70rpx;
	border-bottom: 1rpx solid #ededed;
	margin-top: 20rpx;
}
.caseExclusiveParticulars {
	width: 90%;
	margin: 0 auto;
	padding: 20rpx;
	border-bottom: 1rpx solid #fafafa;
	box-shadow:0rpx 14rpx 0rpx 0rpx #fafafa;
	.caseExclusiveImg {
		display: inline-block;
		width: 30%;
		image {
			width: 100%;
			height: 260rpx;
			vertical-align:middle;
		}
	}
	.caseExclusiveContent {
		display: inline-block;
		width: 69%;
		padding-left: 1%;
		.caseExclusiveContentTitle {
			font-size: 34rpx;
			color: #131f2b;
		}
		.caseExclusiveContentSignature {
			font-size: 26rpx;
			color: #8f8f8f;
			line-height: 60rpx;
		}
	}
}
</style>
