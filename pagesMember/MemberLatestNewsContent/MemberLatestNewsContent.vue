<template>
	<view class="MemberLatestNewsContent">
		<image class="MemberLatestNewsContent_image" src="../static/image/MemberLatestNewsContent.png" mode=""></image>
		<text class="MemberLatestNewsContent_title">营之有道-推荐篇</text>
		<text class="MemberLatestNewsContent_content">
			总部位于浙江杭州，是中国大陆婴童产业的开创者、领跑者及最大规模企业之一，业务方位主要涉及婴儿产品及服务。贝因美的使命是通过持续研发、制造、经营科学安全的孕婴童产品，以及温馨、专业、亲切的母婴服务，以爱的企业精神，帮助中国宝宝和全球儿童健康成长。 
			优质奶源、先进工艺、科学配方是打造奶粉品质的三大关键因素，贝因美三者兼备，建立、实施和不断完善生产管理体系，应用全球领先的生产工艺与专业设备，为中国宝宝提供代表国际先进水平的产品。
		</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataFormList: ""
			};
		},
		onLoad:function(option){
			this.dataFormList = JSON.parse(option.items)
			console.log(JSON.parse(option.items))
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
		text-indent: 2em;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
		line-height:62rpx;
	}
}
</style>
