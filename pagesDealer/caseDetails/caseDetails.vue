<template>
	<view>
		<view class="caseDetailsStyle">
			<image class="caseDetailsImg" :src="imgUrl + caseDetailsList.imgs" mode=""></image>
			<view class="caseDetailsTitle">
				<text class="caseDetailsTitleA">{{caseDetailsList.title}}</text>
				<text class="caseDetailsTitleB">{{caseDetailsList.content}}</text>
			</view>
		</view>
		<view class="caseDetailsContent">
			<text>{{caseDetailsList.content}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl,
				caseDetailsList: {}
			}
		},
		onLoad:function(option){
			this.caseDetailsList = JSON.parse(option.items)
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.caseDetailsStyle {
	margin: 20rpx auto;
	width: 684rpx;
	height: 650rpx;
	border-radius: 4rpx;
	border: solid 2rpx #d6d6d6;
	text-align: center;
	.caseDetailsImg {
		width: 240rpx;
		height: 329rpx;
		margin-top: 45rpx;
		margin-bottom: 20rpx;
	}
	.caseDetailsTitle {
		width: 70%;
		margin: 0 auto;
		.caseDetailsTitleA {
			line-height: 60rpx;
			font-weight: bold;
			font-size: 34rpx;
			color: #131f2b;
			display: block;
		}
		.caseDetailsTitleB {
			line-height: 75rpx;
			font-size: 28rpx;
			color: #2f3a44;
			display: block;
		}
	}
}
.caseDetailsContent {
	color: #999999;
	font-size: 26rpx;
	line-height: 52rpx;
	width: 80%;
	margin: 20rpx auto;
	text-indent: 2em;
}
</style>
