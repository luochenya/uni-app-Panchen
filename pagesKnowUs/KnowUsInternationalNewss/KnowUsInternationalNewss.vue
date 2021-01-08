<template>
	<view class="KnowUsInternationalNewss">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="'健康报'" @returnClick="returnClick"></top-navigation>
		
		<image class="KnowUsInternationalNewss_image" :src="imgUrl + dataFormList.imgs" mode=""></image>
		<text class="KnowUsInternationalNewss_title">{{dataFormList.title}}</text>
		<text class="KnowUsInternationalNewss_content">
			{{dataFormList.content}}
		</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl,
				dataFormList: {}
			};
		},
		onLoad:function(option){
			this.dataFormList = JSON.parse(option.item)
		},
		methods:{
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
				})
			},
		}
	}
</script>

<style lang="less">
.KnowUsInternationalNewss {
	padding: 20px 4.27% 0;
	.KnowUsInternationalNewss_image {
		width: 100%;
		height: 350rpx;
	}
	.KnowUsInternationalNewss_title {
		display: block;
		margin: 48rpx 0 18rpx;
		text-align: center;
		font-size:36rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:bold;
		color:rgba(19,31,43,1);
		line-height:58rpx;
	}
	.KnowUsInternationalNewss_content {
		display: block;
		padding-bottom: 48rpx;
		// text-indent: 2em;
		font-size:28rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
		line-height:62rpx;
	}
}
</style>
