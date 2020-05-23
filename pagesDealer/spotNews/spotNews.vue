<template>
	<view>
		<!-- 轮播图 -->
		<uni-swiper-dot :info="info" :current="current" field="content">
			<swiper @change="change" autoplay="true" circular="true">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="spotNewsImg">
						<image :src="item.imgUrl" mode="scaleToFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<view class="spotNewsStyle" v-for="(item, index) in spotNewsList" :key="index">
			<text class="spotNewsStyleTitle">{{item.content}}</text>
			<text class="spotNewsStyleTime">{{item.created_at}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: [{
					imgUrl: '../static/spotNewsImg/spotNewsImgA.png'
				}, {
					imgUrl: '../static/spotNewsImg/spotNewsImgB.png'
				}, {
					imgUrl: '../static/spotNewsImg/spotNewsImgC.png'
				}],
				spotNewsList: [],
				current: 0,
			};
		},
		onLoad:function(option){
			
		},
		mounted() {
			this.gettingData()
		},
		methods: {
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
					console.log(err)
				})
			},
			change (e) {
				this.current = e.detail.current;
			},
		}
	}
</script>

<style lang="less" scoped>
.spotNewsImg {
	width: 686rpx;
	height: 290rpx;
	margin: 16rpx auto;
	image {
		width: 100%;
		height: 100%;
	}
}
.spotNewsStyle {
	height: 218rpx;
	width: 686rpx;
	margin: 0 auto;
	border-bottom: 2px solid #ececec;
	.spotNewsStyleTitle {
		font-size: 28rpx;
		line-height: 54rpx;
		height: 108rpx;
		color: #131f2b;
		display: block;
		padding: 40rpx 0 20rpx;
	}
	.spotNewsStyleTime {
		color: #828282;
		font-size: 20rpx;
		display: block;
	}
}
</style>
