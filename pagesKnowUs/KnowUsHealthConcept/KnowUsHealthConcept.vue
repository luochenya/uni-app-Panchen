<template>
	<view class="KnowUsHealthConcept">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="'想做的事'" @returnClick="returnClick"></top-navigation>
		
		<image class="KnowUsHealthConcept_image" src="../static/image/KnowUsHealthConcept.png" mode=""></image>
		<text class="KnowUsHealthConcept_title">年輕·活力·健康</text>
		<text class="KnowUsHealthConcept_content">
			健康管理要擬訂目標，決定目標之前，要對自己健康狀況做個普查，例如高血壓、糖尿病、癌症篩檢等，並把普查結果鍵入電腦檔案，以安全管理的概念管理自己的健康資料。另外在自己個人電腦內，建立信息資料(informatics)檔，只要與自己設定管理的健康知識有關，特別是有實証醫學意義的，就丟到此處，慢慢地即可建立起屬於個人的「健康檔案」。信息資料內容包括與自己健康有關的，家人罹患的疾病相關的資料。
			譬如，建議50歲以上的人，就可以開始執行個人健康管理計畫，採指標管理，例如定期量血壓、血糖、測膽固醇、做腫瘤指標篩檢、做心電圖檢測等，以便可以實際掌握自己的健康狀況。「每一個人的健康狀況不一樣，所以健康管理要個別化」，像我是糖尿病患者，就得特別注意血糖，而且將屆65歲，已步入老年，因此對於老年人好發的高血壓、癌症等，就要特別預防。
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
.KnowUsHealthConcept {
	padding: 20rpx 4.27% 0;
	.KnowUsHealthConcept_image {
		width: 100%;
		height: 350rpx;
	}
	.KnowUsHealthConcept_title {
		display: block;
		margin: 48rpx 0 18rpx;
		text-align: center;
		font-size:36rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:bold;
		color:rgba(19,31,43,1);
		line-height:58rpx;
	}
	.KnowUsHealthConcept_content {
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
