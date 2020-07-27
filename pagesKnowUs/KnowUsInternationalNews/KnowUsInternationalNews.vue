<template>
	<view class="KnowUsInternationalNews">
		<!-- <image class="KnowUsInternationalNews_image" src="../static/image/KnowUsInternationalNews.png" mode=""></image> -->
		<!-- 轮播图 -->
		<uni-swiper-dot :info="bannerList" :current="current" field="content" :mode="mode">
				<swiper @change="change" autoplay="true" circular="true" class="KnowUsInternationalNews_image">
						<swiper-item v-for="(item ,index) in bannerList" :key="index">
								<view>
									<image :src="imgUrl + item.imgs" mode="" class="KnowUsInternationalNews_image"></image>
								</view>
						</swiper-item>
				</swiper>
		</uni-swiper-dot>
		<view class="KnowUsInternationalNews_box" v-for="(item, index) in dataFormList" :key="index" @click="skipClick(item)">
			<text class="KnowUsInternationalNews_box_title">{{item.title}}</text>
			<text class="KnowUsInternationalNews_box_content">{{item.created_at}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl,
				current: 0,
				bannerList: [],
				dataFormList: []
			};
		},
		mounted() {
			this.getInternationalBanner()
			this.getInternational()
		},
		methods:{
			// 获取banner
			getInternationalBanner () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('Visitor/get_international_banner').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.bannerList = res.data.data
					} else {
						 uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						 })
					}
				})
			},
			// 获取列表
			getInternational () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('Visitor/get_international').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.dataFormList = res.data.data
					} else {
						 uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						 })
					}
				})
			},
			change (e) {
				this.current = e.detail.current;
			},
			skipClick(item) {
				var items = JSON.stringify(item)
				uni.navigateTo({
					url: '../../pagesKnowUs/KnowUsInternationalNewss/KnowUsInternationalNewss?item=' + items
				})
			}
		}
	}
</script>

<style lang="less">
.KnowUsInternationalNews {
	padding: 0 4.27%;
	.KnowUsInternationalNews_image {
		width: 100%;
		height: 262rpx;
	}
	.KnowUsInternationalNews_box:last-child {
		border-bottom: none;
	}
	.KnowUsInternationalNews_box {
		width: 100%;
		padding: 32rpx 0;
		border-bottom: 2rpx solid #D8D8D8;
		.KnowUsInternationalNews_box_title {
			display: block;
			margin-bottom: 34rpx;
			font-size:30rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(19,31,43,1);
			line-height:48rpx;
		}
		.KnowUsInternationalNews_box_content {
			font-size:22rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(130,130,130,1);
			line-height:32rpx;
		}
	}
}
</style>
