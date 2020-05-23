<template>
	<view class="caseExclusive">
		<view class="">
			<image style="width: 100%;height: 300rpx" src="../static/caseExclusive/caseExclusive.png" mode=""></image>
		</view>
		<view class="caseExclusiveRecommend">推荐案例</view>
		<view class="caseExclusiveParticulars" @click="spikCaseDetails(item)" v-for="(item, index) in caseExclusive" :key="index">
			<view class="caseExclusiveImg">
				<image :src="imgUrl + item.imgs" mode=""></image>
			</view>
			<view class="caseExclusiveContent">
				<view class="caseExclusiveContentTitle">{{item.title}}</view>
				<view class="caseExclusiveContentSignature">{{item.content}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl,
				caseExclusive: []
			};
		},
		onLoad:function(option){
			this.gettingData()
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
					console.log(err)
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
	width: 95%;
	margin: 0 auto;
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
