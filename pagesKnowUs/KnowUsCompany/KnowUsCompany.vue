<template>
	<view class="KnowUsCompany">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="'咱们'" @returnClick="returnClick"></top-navigation>
		
		<image class="KnowUsCompany_image" src="../static/image/KnowUsCompany.png" mode=""></image>
		<text class="KnowUsCompany_title">移动养生有限公司</text>
		<text class="KnowUsCompany_content">
			总部位于浙江杭州，是中国大陆婴童产业的开创者、领跑者及最大规模企业之一，业务方位主要涉及婴儿产品及服务。贝因美的使命是通过持续研发、制造、经营科学安全的孕婴童产品，以及温馨、专业、亲切的母婴服务，以爱的企业精神，帮助中国宝宝和全球儿童健康成长。
			优质奶源、先进工艺、科学配方是打造奶粉品质的三大关键因素，贝因美三者兼备，建立、实施和不断完善生产管理体系，应用全球领先的生产工艺与专业设备，为中国宝宝提供代表国际先进水平的产品。
			优质奶源，南、北纬45度是国际公认的“黄金奶源带”。贝因美精选全球黄金奶源带，奶源基地包括“欧洲绿宝石”爱尔兰、“天籁之源”瑞士、“北极天堂”芬兰、“世外桃源”新西兰、“生态王国”澳洲以及“中国奶牛之乡”黑龙江安达。
		</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
.KnowUsCompany {
	padding: 20rpx 4.27% 0;
	.KnowUsCompany_image {
		width: 100%;
		height: 350rpx;
	}
	.KnowUsCompany_title {
		display: block;
		margin: 48rpx 0 18rpx;
		text-align: center;
		font-size:36rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:bold;
		color:rgba(19,31,43,1);
		line-height:58rpx;
	}
	.KnowUsCompany_content {
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
