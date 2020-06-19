<template>
	<view class="KnowUsInternationalNews">
		<image class="KnowUsInternationalNews_image" src="../static/image/KnowUsInternationalNews.png" mode=""></image>
		<view class="KnowUsInternationalNews_box" v-for="(item, index) in dataFormList" :key="index" @click="skipClick(item.title)">
			<text class="KnowUsInternationalNews_box_title">{{item.title}}</text>
			<text class="KnowUsInternationalNews_box_content">{{item.times}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataFormList: [{
					title: "有沒有糖尿病 測握力就知道",
					times: "2020/03/02"
				},{
					title: "挑選眼鏡 輕薄、度數對就夠了嗎？",
					times: "2020/02/28"
				},{
					title: "勤洗手作防疫 用的水真乾淨嗎？",
					times: "2020/02/20"
				}]
			};
		},
		methods:{
			skipClick(title) {
				uni.navigateTo({
					url: '../../pagesKnowUs/KnowUsInternationalNewss/KnowUsInternationalNewss?title=' + title
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
