<template>
	<view class="KnowsUsHonor">
		<view class="KnowsUsHonor_box" v-for="(item, index) in dataFormList">
			<image class="KnowsUsHonor_box_left" :src="item.imgUrl" mode=""></image>
			<view class="KnowsUsHonor_box_right">
				<text class="KnowsUsHonor_box_right_title">{{item.title}}</text>
				<text class="KnowsUsHonor_box_right_content">{{item.content}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataFormList: [{
					imgUrl: "../static/image/KnowsUsHonorA.png",
					title: "原汁德國農業金牌獎",
					content: "Sanddorn 100%有機 沙棘原汁德國農業金牌獎"
				},{
					imgUrl: "../static/image/KnowsUsHonorB.png",
					title: "原汁德國農業金牌獎",
					content: "Sanddorn 100%有機 沙棘原汁德國農業金牌獎"
				},{
					imgUrl: "../static/image/KnowsUsHonorC.png",
					title: "原汁德國農業金牌獎",
					content: "Sanddorn 100%有機 沙棘原汁德國農業金牌獎"
				},{
					imgUrl: "../static/image/KnowsUsHonorD.png",
					title: "原汁德國農業金牌獎",
					content: "Sanddorn 100%有機 沙棘原汁德國農業金牌獎"
				}]
			};
		}
	}
</script>

<style lang="less">
.KnowsUsHonor {
	padding: 0 4.27%;
	.KnowsUsHonor_box:last-child {
		border-bottom: none;
	}
	.KnowsUsHonor_box {
		padding: 32rpx 0;
		width: 100%;
		border-bottom: 2rpx solid #D8D8D8;
		display: flex;
		.KnowsUsHonor_box_left {
			display: block;
			width: 180rpx;
			height: 180rpx;
		}
		.KnowsUsHonor_box_right {
			width: 510rpx;
			padding-left: 32rpx;
			padding-right: 16rpx;
			.KnowsUsHonor_box_right_title {
				display: block;
				margin-bottom: 26rpx;
				font-size:32rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:bold;
				color:rgba(19,31,43,1);
				line-height:44rpx;
				letter-spacing:2rpx;
			}
			.KnowsUsHonor_box_right_content {
				font-size:28rpx;
				font-family:PingFangSC-Light,PingFang SC;
				font-weight:300;
				color:rgba(130,130,130,1);
				line-height:46rpx;
			}
		}
	}
}
</style>
