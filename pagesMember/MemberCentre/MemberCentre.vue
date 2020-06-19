<template>
	<view class="MemberCentre">
		<image class="MemberCentre_rightImg" src="../static/image/MemberCentre2.png" mode=""></image>
		<image class="MemberCentre_leftImg" src="../static/image/MemberCentre3.png" mode=""></image>
		<text class="MemberCentre_name">王大宝</text>
		<text class="MemberCentre_phone">0912-234-567</text>
		<view class="MemberCentre_box">
			<image class="MemberCentre_box_image" src="../static/image/MemberCentre1.png" mode=""></image>
			<text class="MemberCentre_box_num">500</text>
			<text class="MemberCentre_box_text">点</text>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.MemberCentre {
	padding: 130rpx 4.27% 0;
	position: relative;
	.MemberCentre_leftImg {
		position: absolute;
		left: 0;
		top: 130rpx;
		width: 151rpx;
		height: 375rpx;
	}
	.MemberCentre_rightImg {
		position: absolute;
		right: 0;
		top: -100rpx;
		width: 151rpx;
		height: 375rpx;
	}
	.MemberCentre_name {
		font-size:36rpx;
		font-weight:bold;
		color:rgba(42,40,39,1);
		line-height:50rpx;
		display: block;
		text-align: center;
	}
	.MemberCentre_phone {
		margin-bottom: 55rpx;
		font-size:30rpx;
		color:rgba(130,130,130,1);
		line-height:42rpx;
		letter-spacing:2rpx;
		display: block;
		text-align: center;
	}
	.MemberCentre_box {
		position: relative;
		width:100%;
		height:320rpx;
		background:rgba(36,37,42,1);
		box-shadow:0px 28rpx 94rpx -18rpx rgba(36,37,42,0.62);
		border-radius:16rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		.MemberCentre_box_image {
			width: 109rpx;
			height: 42rpx;
			position: absolute;
			right: 27rpx;
			top: 31rpx;
		}
		.MemberCentre_box_num {
			font-family:Futura-Medium,Futura;
			font-weight:bold;
			color:rgba(253,253,253,1);
			line-height:112rpx;
			font-size:84rpx;
		}
		.MemberCentre_box_text {
			font-size:40rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(253,253,253,1);
			line-height:56rpx;
			letter-spacing:2rpx;
		}
	}
}
</style>
