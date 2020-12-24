<template>
	<view class="spotNews">
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
		<view class="spotNews_box" v-for="(item, index) in spotNewsList" :key="index">
			<text class="spotNews_box_title">{{item.content}}</text>
			<text class="spotNews_box_content">{{item.created_at}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl,
				info: [],
				current: 0,
				spotNewsList: [],
			};
		},
		onLoad:function(option){
			
		},
		mounted() {
			this.gettingData()
			this._getNewsBannerList()
		},
		methods: {
			// 获取banner图
			_getNewsBannerList () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('System/get_news_banner_list').then(res => {
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
				this.$http.post('System/get_news_list').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.spotNewsList = res.data.data
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
			change (e) {
				this.current = e.detail.current;
			},
		}
	}
</script>

<style lang="less" scoped>
.spotNews {
	padding: 0 4.27%;
	.spotNewsImg {
		width: 100%;
		height: 262rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.spotNews_box {
		padding: 20rpx 0;
		width: 100%;
		height: 220rpx;
		border-bottom: 4rpx solid #D8D8D8;
		.spotNews_box_title {
			display: block;
			margin-bottom: 20rpx;
			height: 100rpx;
			font-size:30rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(19,31,43,1);
			line-height:48rpx;
		}
		.spotNews_box_content {
			font-size:22rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(130,130,130,1);
			line-height:40rpx;
		}
	}
}
</style>
