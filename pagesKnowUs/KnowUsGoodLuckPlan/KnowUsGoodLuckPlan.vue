<template>
	<view class="KnowUsGoodLuckPlan">
		<view class="KnowUsGoodLuckPlan_top">
			<image class="KnowUsGoodLuckPlan_top_image" :src="imgUrl + dataFormList.imgs" mode=""></image>
			<text class="KnowUsGoodLuckPlan_top_title">{{dataFormList.title}}</text>
			<text class="KnowUsGoodLuckPlan_top_price">{{dataFormList.scheme_price}}</text>
		</view>
		<view class="KnowUsGoodLuckPlan_border"></view>
		<view class="KnowUsGoodLuckPlan_bottom">
			<text class="KnowUsGoodLuckPlan_bottom_title">- 方案介绍 -</text>
			<text class="KnowUsGoodLuckPlan_bottom_content">
				{{dataFormList.scheme_presentation}}
			</text>
			<text class="KnowUsGoodLuckPlan_bottom_phone">
				經銷商：{{dataFormList.dealer_name}}
				洽詢專線：{{dataFormList.phone}}
			</text>
		</view>
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
		onLoad:function(option) {
			this.dataFormList = JSON.parse(option.item)
		}
	}
</script>

<style lang="less">
.KnowUsGoodLuckPlan {
	.KnowUsGoodLuckPlan_top {
		padding: 30rpx 4.27% 0;
		.KnowUsGoodLuckPlan_top_image {
			width: 100%;
			height: 352rpx;
		}
		.KnowUsGoodLuckPlan_top_title {
			display: block;
			margin-top: 32rpx;
			text-align: center;
			font-size:36rpx;
			font-family:PingFangSC-Medium,PingFang SC;
			font-weight:bold;
			color:rgba(19,31,43,1);
			line-height:80rpx;
			letter-spacing:4rpx;
		}
		.KnowUsGoodLuckPlan_top_price {
			display: block;
			margin-bottom: 32rpx;
			text-align: center;
			font-size:30rpx;
			font-family:PingFangSC-Medium,PingFang SC;
			font-weight:bold;
			color:rgba(251,134,30,1);
			line-height:80rpx;
		}
	}
	.KnowUsGoodLuckPlan_border {
		height:16rpx;
		width: 100%;
		background:rgba(239,239,239,1);
		opacity:0.59;
	}
	.KnowUsGoodLuckPlan_bottom {
		padding: 0 8.53%;
		.KnowUsGoodLuckPlan_bottom_title {
			text-align: center;
			display: block;
			margin-top: 48rpx;
			margin-bottom: 18rpx;
			font-size:36rpx;
			font-family:PingFangSC-Medium,PingFang SC;
			font-weight:bold;
			color:rgba(19,31,43,1);
			line-height:58rpx;
		}
		.KnowUsGoodLuckPlan_bottom_content {
			display: block;
			// text-indent: 3em;
			font-size:28rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(153,153,153,1);
			line-height:61rpx;
		}
		.KnowUsGoodLuckPlan_bottom_phone {
			display: block;
			margin-top: 48rpx;
			margin-bottom: 140rpx;
			font-size:26rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(251,134,30,1);
			line-height:42rpx;
			letter-spacing:2rpx;
		}
	}
}
</style>
