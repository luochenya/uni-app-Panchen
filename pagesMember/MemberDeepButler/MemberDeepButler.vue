<template>
	<view class="MemberDeepButler">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="'深度管家介绍'" @returnClick="returnClick"></top-navigation>
		
		<image class="MemberDeepButler_image" src="../static/image/MemberDeepButler.png" mode=""></image>
		<view class="MemberDeepButler_box">
			<text class="MemberDeepButler_title">- 深度管家 -</text>
			<text class="MemberDeepButler_content"> 
				给自己一段安静的时光！让老师带领你认识大自然赋予的能量宝库透过精油、水晶等天然媒介，从身心的沉淀、净化开始，接纳真实的自己，重新注入活泉、养分、正能量你将发现自己由内而外，更健康、更快乐、更有创造力！
				内容多元：全台唯一结合精油、水晶、脉轮与能量的身心疗愈课程身心净化：透过能量的调整及强化，重新找回身心灵的和谐，让思绪更清明精油能量：学习如何将精油应用在日常生活中，随时帮自己或他人梳理纠结的能量
			</text>
			<view class="MemberDeepButler_button" @click="toMemberCreateManager()">
				建立个人健康管理师
			</view>
		</view>
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
			toMemberCreateManager() {
				uni.navigateTo({
					url: '../../pagesMember/MemberCreateManager/MemberCreateManager'
				})
			}
		}
	}
</script>

<style lang="less">
.MemberDeepButler {
	padding: 20rpx 4.27% 140rpx;
	.MemberDeepButler_image {
		width: 100%;
		height: 386rpx;
	}
	.MemberDeepButler_box {
		padding: 0 4.27%;
		.MemberDeepButler_title {
			margin-top: 48rpx;
			margin-bottom: 18rpx;
			display: block;
			text-align: center;
			font-size:36rpx;
			font-family:PingFangSC-Medium,PingFang SC;
			font-weight:bold;
			color:rgba(19,31,43,1);
			line-height:58rpx;
		}
		.MemberDeepButler_content {
			display: block;
			// text-indent: 2em;
			font-size:28rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(153,153,153,1);
			line-height:62rpx;
		}
		.MemberDeepButler_button {
			margin: 48rpx auto 0;
			text-align: center;
			width:390rpx;
			height:88rpx;
			background:rgba(104,183,77,1);
			border-radius:54rpx;
			font-size:30rpx;
			font-family:PingFangSC-Medium,PingFang SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
			line-height:88rpx;
		}
	}
}
</style>
