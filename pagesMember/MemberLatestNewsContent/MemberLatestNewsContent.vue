<template>
	<view class="MemberLatestNewsContent">
		<image class="MemberLatestNewsContent_image" :src="imgUrl + dataFormList.imgs" mode=""></image>
		<text class="MemberLatestNewsContent_title">{{dataFormList.title}}</text>
		<text class="MemberLatestNewsContent_content">{{dataFormList.content}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl,
				dataFormList: ""
			};
		},
		onLoad:function(option){
			this.dataFormList = JSON.parse(option.items)
		},
	}
</script>

<style lang="scss" scoped>
.MemberLatestNewsContent {
	padding: 0 4.27%;
	.MemberLatestNewsContent_image {
		width: 100%;
		height: 352rpx;
	}
	.MemberLatestNewsContent_title {
		font-size:36rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(19,31,43,1);
		line-height:58rpx;
		display: block;
		text-align: center;
		margin-top: 66rpx;
		margin-bottom: 24rpx;
	}
	.MemberLatestNewsContent_content {
		display: block;
		font-size:28rpx;
		// text-indent: 2em;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
		line-height:62rpx;
	}
}
</style>
