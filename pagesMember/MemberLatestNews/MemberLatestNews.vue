<template>
	<view class="MemberLatestNews">
		<image class="MemberLatestNews_image" src="../static/image/MemberLatestNewsBanner.png" mode=""></image>
		<view class="MemberLatestNews_box" v-for="(item, index) in dataFormList" :key="index" @click="toMemberLatestNewsContent(item)">
			<text class="MemberLatestNews_box_title">{{item.title}}</text>
			<text class="MemberLatestNews_box_time">{{item.time}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataFormList: [{
					title: '试运营阶段，训练营暂时每个用户只开放一个名额试营暂时每个用户只开放一个名额',
					time: '2020/03/02'
				},{
					title: '经过这段时间的努力，肺炎情况得到很大程度的控制，所以我公司决定3月1日正式复工',
					time: '2020/02/28'
				},{
					title: '我公司8大主力产品均已获得美国FDA认证通过',
					time: '2020/02/20'
				}]
			};
		},
		methods: {
			toMemberLatestNewsContent(item) {
				var items = JSON.stringify(item)
				var price = "这里是通往教育学院"
				uni.navigateTo({
					url: '../../pagesMember/MemberLatestNewsContent/MemberLatestNewsContent?items=' + items 
				})
			}
		}
	}
</script>

<style lang="scss">
.MemberLatestNews {
	padding: 0 4.27%;
	.MemberLatestNews_image {
		width: 100%;
		height: 262rpx;
		margin: 16rpx 0;
	}
	.MemberLatestNews_box {
		width: 100%;
		border-bottom: 2rpx solid #D8D8D8;
		.MemberLatestNews_box_title {
			font-size:30rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(19,31,43,1);
			line-height:48rpx;
			padding: 34rpx 0;
			display: block;
		}
		.MemberLatestNews_box_time {
			display: block;
			font-size:22rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(130,130,130,1);
			line-height:80rpx;
		}
	}
}
</style>
