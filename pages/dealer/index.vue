<template>
	<view>
		<top-navigation-bar></top-navigation-bar>
		<view class="dealer">
			<view class="">
				<image style="width: 100%;height: 300rpx;" src="../../static/dealerImg/dealerA.png" mode=""></image>
			</view>
			<view class="collegeOfEducation">
				<image @click="skipCollegeOfEducation()" style="width: 65%;height: 200rpx;margin-right: 5%;" src="../../static/dealerImg/dealerB.png" mode=""></image>
				<image @click="skipSpotNews()" style="width: 30%;height: 200rpx;" src="../../static/dealerImg/dealerC.png" mode=""></image>
			</view>
			<view class="collegeOfEducation">
				<image @click="skipCaseExclusive()" style="width: 30%;height: 200rpx;" src="../../static/dealerImg/dealerD.png" mode=""></image>
				<image @click="skipConsultingFeedback()" style="width: 30%;height: 200rpx;margin: 0 5%;" src="../../static/dealerImg/dealerE.png" mode=""></image>
				<image @click="skipKnowledgeTest()" style="width: 30%;height: 200rpx;" src="../../static/dealerImg/dealerF.png" mode=""></image>
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
				
			}
		},
		onLoad:function(option){
			uni.getStorage({
			    key: 'userInfo',
			    success: function (res) {
					
			    },
				fail:function(res){
					uni.redirectTo({
						url: "../dealerLogin/dealerLogin"
					})
				}
			});
		},
		onShow:function() {
			
		},
		methods: {
			// 路径跳转教育学院
			skipCollegeOfEducation () {
				var price = "这里是通往教育学院"
				uni.navigateTo({
					url: '../../pagesDealer/collegeOfEducation/collegeOfEducation?collegeOfEducation=' + price 
				})
			},
			// 路径跳转案例专享
			skipCaseExclusive () {
				var price = "这里是通往案例分享"
				uni.navigateTo({
					url: '../../pagesDealer/caseExclusive/caseExclusive?caseExclusive=' + price
				})
			},
			// 路径跳转最新消息
			skipSpotNews () {
				var price = "这里是通往最新消息"
				uni.navigateTo({
					url: '../../pagesDealer/spotNews/spotNews?spotNews=' + price
				})
			},
			// 路径跳转资讯反馈
			skipConsultingFeedback () {
				var price = "这里是通往资讯反馈"
				uni.navigateTo({
					url: '../../pagesDealer/consultingFeedback/consultingFeedback?consultingFeedback=' + price
				})
			},
			// 路径跳转知识测试
			skipKnowledgeTest () {
				var price = "这里是知识测试"
				uni.navigateTo({
					url: '../../pagesDealer/knowledgeTest/knowledgeTest?knowledgeTest=' + price
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.dealer {
	width: 90%;
	margin: 0 auto;
	.collegeOfEducation {
		margin: 30rpx 0;
	}
}
</style>
