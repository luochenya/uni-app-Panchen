<template>
	<view class="KnowUsCelebritySays">
		<view class="KnowUsCelebritySays_box" v-for="(item, index) in dataFormList">
			<image class="KnowUsCelebritySays_box_left" :src="item.imgUrl" mode=""></image>
			<view class="KnowUsCelebritySays_box_right">
				<text class="KnowUsCelebritySays_box_right_title">{{item.title}}</text>
				<text class="KnowUsCelebritySays_box_right_content">- {{item.content}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataFormList: [{
					imgUrl: "../static/image/KnowUsCelebritySaysA.png",
					title: "一天一蘋果 醫生遠離我",
					content: "Steve Jobs"
				},{
					imgUrl: "../static/image/KnowUsCelebritySaysB.png",
					title: "爭辯不過是一場消耗！過好自己的生活，比什麼都重要！",
					content: "林志玲"
				},{
					imgUrl: "../static/image/KnowUsCelebritySaysC.png",
					title: "我特討厭認真工作的人",
					content: "马云"
				}]
			};
		}
	}
</script>

<style lang="less">
.KnowUsCelebritySays {
	height: 100vh;
	padding: 48rpx 4.27%;
	background:rgba(246,246,246,1);
	.KnowUsCelebritySays_box {
		margin-bottom: 48rpx;
		padding: 34rpx 7% 34rpx 2%;
		width: 100%;
		height: 288rpx;
		background:rgba(255,255,255,1);
		border-radius:16rpx;
		display: flex;
		justify-content: space-between;
		.KnowUsCelebritySays_box_left {
			width: 208rpx;
			height: 272rpx;
			margin-top: -50rpx;
		}
		.KnowUsCelebritySays_box_right {
			width: 382rpx;
			.KnowUsCelebritySays_box_right_title {
				font-size:30rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
				line-height:48rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
			}
			.KnowUsCelebritySays_box_right_content {
				display: block;
				margin-top: 18rpx;
				font-size:24rpx;
				font-family:STIXGeneral-Regular,STIXGeneral;
				font-weight:400;
				color:rgba(130,130,130,1);
				line-height:80rpx;
			}
		}
	}
}
</style>
