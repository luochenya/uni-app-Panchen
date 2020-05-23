<template>
	<view>
		<top-navigation-bar></top-navigation-bar>
		<!-- 轮播图 -->
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
		    <swiper @change="change" style="height: 344rpx;" autoplay="true" circular="true">
		        <swiper-item v-for="(item ,index) in info" :key="index">
		            <view class="knowUsImgStyle">
						<image :src="imgUrl + item.imgs" mode=""></image>
		            </view>
		        </swiper-item>
		    </swiper>
		</uni-swiper-dot>
		<!-- 关于公司 -->
		<scroll-view scroll-x="true" style="white-space: nowrap; display: flex">
		  <view class="companyIntroduction" v-for="(item, index) in company" :key="index">
			  <image style="width: 80rpx;height: 80rpx;" :src="item.imgUrl" mode=""></image>
			  <text>{{item.text}}</text>
		  </view>
		</scroll-view>
		
		<!-- 新鲜事 -->
		<text class="novelty_title">新鲜事</text>
		<scroll-view scroll-x="true" style="white-space: nowrap; display: flex">
		  <view class="novelty_style" v-for="(item, index) in novelty" :key="index">
			<image :src="item.imgUrl" mode=""></image>
			<text>{{item.text}}</text>
		  </view>
		</scroll-view>
		
		<!-- 合作伙伴 -->
		<text class="partner_title">合作伙伴</text>
		<scroll-view scroll-x="true" style="white-space: nowrap; display: flex;">
		  <view class="partner" v-for="(item, index) in partner" :key="index">
			<image :src="item.imgUrl" mode=""></image>
		  </view>
		</scroll-view>
		<view class="connection">
			<text @click="ringUp()">移动养生结盟合作专线-178326783</text>
		</view>
	</view>
</template>

<script>
	import topNavigationBar from "@/components/top-navigation-bar/top-navigation-bar.vue"
	export default {
		components: {topNavigationBar},
		data() {
			return {
				imgUrl: this.$imgUrl,
				info: [],
				company: [{
					text: '关于公司',
					imgUrl: '../../static/knowUsImg/rollA.png'
				},{
					text: '理念',
					imgUrl: '../../static/knowUsImg/rollB.png'
				},{
					text: '名人语录',
					imgUrl: '../../static/knowUsImg/rollC.png'
				},{
					text: '荣誉',
					imgUrl: '../../static/knowUsImg/rollD.png'
				},{
					text: '标题',
					imgUrl: '../../static/knowUsImg/rollE.png'
				},{
					text: '内容',
					imgUrl: '../../static/knowUsImg/rollA.png'
				}],
				novelty: [{
					text: '保健专场',
					imgUrl: '../../static/knowUsImg/noveltyA.png',
				},{
					text: '进口大牌',
					imgUrl: '../../static/knowUsImg/noveltyB.png',
				},{
					text: '强身健体',
					imgUrl: '../../static/knowUsImg/noveltyA.png',
				},{
					text: '保健专场',
					imgUrl: '../../static/knowUsImg/noveltyB.png',
				},{
					text: '进口大牌',
					imgUrl: '../../static/knowUsImg/noveltyA.png',
				},{
					text: '强身健体',
					imgUrl: '../../static/knowUsImg/noveltyB.png',
				}],
				partner: [
					{imgUrl: '../../static/knowUsImg/brandA.png'},
					{imgUrl: '../../static/knowUsImg/brandB.png'},
					{imgUrl: '../../static/knowUsImg/brandC.png'},
					{imgUrl: '../../static/knowUsImg/brandA.png'},
					{imgUrl: '../../static/knowUsImg/brandB.png'},
					{imgUrl: '../../static/knowUsImg/brandC.png'}
				],
				current: 0,
				mode: 'default',
			}
		},
		onLoad() {
			this.gettingData()
		},
		methods: {
			gettingData () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('System/get_banner').then(res => {
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
					console.log(err)
				})
			},
			change (e) {
				this.current = e.detail.current;
			},
			// 拨打电话
			ringUp () {
				uni.makePhoneCall({
					phoneNumber: '178326783',
					success: (res) => {
						
					},
					fail: (res) => {
						
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 轮播图
.knowUsImgStyle {
	height: 344rpx;
	width: 684rpx;
	color: #ffffff;
	margin: 0 auto;
	image {
		width: 100%;
		height: 100%;
	}
}
// 关于公司
.companyIntroduction {
	height: 130rpx;
	width: 130rpx;
	margin: 30rpx 0 30rpx 32rpx;
	display: inline-block;
	text-align: center;
	font-size: 22rpx;
	text {
		display: block;
	}
}
// 新鲜事标题
.novelty_title {
	margin-left: 32rpx;
	font-size: 30rpx;
	font-weight: bold;
}
.novelty_style {
	display: inline-block;
	margin: 30rpx 0 30rpx 32rpx;
	position: relative;
	width: 284rpx;
	height: 177rpx;
	text-align: center;
	margin-bottom: 75rpx;
	image {
		width: 100%;
		height: 100%;
	}
	text {
		width: 284rpx;
		height: 60rpx;
		line-height: 60rpx;
		color: #FFFFFF;
		position: absolute;
		left: 0;
		bottom: 0;
		background: red;
		opacity: 0.6;
		border-radius: 12rpx;
	}
}
// 合作伙伴
.partner_title {
	margin-left: 32rpx;
	font-size: 30rpx;
	font-weight: bold;
}
.partner{
	display: inline-block;
	width: 130rpx;
	height: 60rpx;
	margin: 30rpx 32rpx 110rpx;
	image{
		width: 100%;
		height: 100%;
	}
}
// 联系热线
.connection {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 22rpx;
	background-color: #000000;
	color: #929394;
	text-align: center;
}
</style>
