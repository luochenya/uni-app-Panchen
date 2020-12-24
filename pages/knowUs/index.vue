<template>
	<view>
		<top-navigation-bar></top-navigation-bar>
		<view class="knowUs">
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
			<scroll-view scroll-x="true" enable-flex="true" style="white-space: nowrap">
				<view class="companyIntroduction" v-for="(item, index) in company" :key="index" @click="skipClick(item.text)">
					<image style="width: 80rpx;height: 80rpx;" :src="item.imgUrl" mode=""></image>
					<text>{{item.text}}</text>
				</view>
			</scroll-view>
			<!-- 好运方案 -->
			<text class="novelty_title">好运方案</text>
			<scroll-view scroll-x="true" enable-flex="true" style="white-space: nowrap">
				<view class="novelty_style" v-for="(item, index) in novelty" :key="index" @click="toKnowUsGoodLuckPlan(item)">
					<image :src="imgUrl + item.imgs" mode=""></image>
					<text>{{item.title}}</text>
				</view>
			</scroll-view>
			<!-- 合作伙伴 -->
			<text class="partner_title">合作伙伴</text>
			<scroll-view scroll-x="true" enable-flex="true" style="white-space: nowrap">
				<view class="partner" v-for="(item, index) in partner" :key="index">
				<image :src="item.imgUrl" mode=""></image>
				</view>
			</scroll-view>
			<view class="connection">
				<text @click="ringUp()">移动养生结盟合作专线-178326783</text>
			</view>
		</view>
	</view>
</template>

<script>
	import topNavigationBar from "@/components/top-navigation-bar/top-navigation-bar.vue"
	export default {
		components: {topNavigationBar},
		data() {
			return {
				current: 0,
				imgUrl: this.$imgUrl,
				info: [],
				company: [{
					text: '咱们',
					imgUrl: '../../static/knowUsImg/rollA.png'
				},{
					text: '想做的事',
					imgUrl: '../../static/knowUsImg/rollB.png'
				},{
					text: '名人说',
					imgUrl: '../../static/knowUsImg/rollC.png'
				},{
					text: '荣誉',
					imgUrl: '../../static/knowUsImg/rollD.png'
				},{
					text: '健康报',
					imgUrl: '../../static/knowUsImg/rollE.png'
				},{
					text: '问与答',
					imgUrl: '../../static/knowUsImg/rollF.png'
				}],
				novelty: [],
				partner: [
					{imgUrl: '../../static/knowUsImg/brandA.png'},
					{imgUrl: '../../static/knowUsImg/brandB.png'},
					{imgUrl: '../../static/knowUsImg/brandC.png'},
					{imgUrl: '../../static/knowUsImg/brandD.png'}
				],
				mode: 'default',
			}
		},
		onLoad() {
			this._gettingData()
			this._getLuckyScheme()
		},
		methods: {
			_getLuckyScheme () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('Visitor/get_lucky_scheme').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.novelty = res.data.data
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
			toKnowUsGoodLuckPlan(item) {
				var items = JSON.stringify(item)
				uni.navigateTo({
					url: '../../pagesKnowUs/KnowUsGoodLuckPlan/KnowUsGoodLuckPlan?item=' + items
				})
			},
			skipClick(text) {
				if (text == "咱们") {
					uni.navigateTo({
						url: '../../pagesKnowUs/KnowUsCompany/KnowUsCompany'
					})
				} else if (text == "健康报") {
					uni.navigateTo({
						url: '../../pagesKnowUs/KnowUsInternationalNews/KnowUsInternationalNews'
					})
				} else if (text == "名人说") {
					uni.navigateTo({
						url: '../../pagesKnowUs/KnowUsCelebritySays/KnowUsCelebritySays'
					})
				} else if (text == "荣誉") {
					uni.navigateTo({
						url: '../../pagesKnowUs/KnowsUsHonor/KnowsUsHonor'
					})
				} else if (text == "问与答") {
					uni.navigateTo({
						url: '../../pagesKnowUs/KnowUsCommonProblem/KnowUsCommonProblem'
					})
				} else if (text == "想做的事") {
					uni.navigateTo({
						url: '../../pagesKnowUs/KnowUsHealthConcept/KnowUsHealthConcept'
					})
				}
			},
			_gettingData () {
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
					// console.log(err)
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
.knowUs {
	padding: 0 4.27% 200rpx;
		// 轮播图
	.knowUsImgStyle {
		height: 344rpx;
		width: 100%;
		color: #ffffff;
		image {
			width: 100%;
			height: 100%;
		}
	}
	// 关于公司
	.companyIntroduction {
		height: 80rpx;
		width: 80rpx;
		margin: 32rpx 26rpx 0;
		display: inline-block;
		text-align: center;
		font-size: 22rpx;
		text {
			display: block;
		}
	}
	// 好运方案标题
	.novelty_title {
		font-weight: bold;
		font-size:30rpx;
		color:rgba(19,31,43,1);
		margin-bottom: 16rpx;
		margin-top: 60rpx;
		display: block;
	}
	.novelty_style {
		display: inline-block;
		margin-right: 32rpx;
		position: relative;
		width: 284rpx;
		height: 177rpx;
		text-align: center;
		image {
			width: 100%;
			height: 100%;
			border-radius: 4px;
		}
		text {
			width: 284rpx;
			height: 48rpx;
			line-height: 48rpx;
			position: absolute;
			left: 0;
			bottom: 0;
			background:rgba(104,183,77,1);
			border-radius:0px 0px 4px 4px;
			opacity:0.91;
			font-size:26rpx;
			font-weight:bold;
			color:rgba(250,250,250,1);
		}
	}
	// 合作伙伴
	.partner_title {
		font-weight: bold;
		font-size:30rpx;
		color:rgba(19,31,43,1);
		line-height: 48rpx;
		margin-top: 64rpx;
		display: block;
	}
	.partner{
		display: inline-block;
		width: 120rpx;
		height: 88rpx;
		margin-right: 96rpx;
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
}
</style>
