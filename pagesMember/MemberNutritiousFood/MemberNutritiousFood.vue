<template>
	<view class="MemberNutritiousFood">
		<view class="MemberNutritiousFood_box" v-for="(item, index) in dataFormList" :key="index">
			<image class="MemberNutritiousFood_box_image" :src="item.imageUrl" mode=""></image>
			<view class="MemberNutritiousFood_box_view">
				<view class="MemberNutritiousFood_box_view_top">
					<text>{{item.title}}</text>
					<view>
						<image class="MemberNutritiousFood_box_view_top_image" src="../static/image/MemberNutritiousFoodD.png" mode=""></image>
						分享
					</view>
				</view>
				<text class="MemberNutritiousFood_box_view_bottom">{{item.content}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataFormList: [{
					imageUrl: '../static/image/MemberNutritiousFoodA.png',
					title: '维生素A',
					content: '来自美国拥有百年历史的知名大厂营养原料维他命。'
				},{
					imageUrl: '../static/image/MemberNutritiousFoodB.png',
					title: '维生素C',
					content: '天然萃取高吸收综合维他命通过众多国际认证最安全、安心的保健食品。'
				},{
					imageUrl: '../static/image/MemberNutritiousFoodC.png',
					title: '综合维他命',
					content: '由植物制成天然萃取的维他命来源，选择真正天然成分的营养补充品。'
				}]
			};
		}
	}
</script>

<style lang="less">
.MemberNutritiousFood {
	padding: 0 4.27%;
	.MemberNutritiousFood_box {
		padding: 40rpx 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 2rpx solid #D8D8D8;
		.MemberNutritiousFood_box_image {
			width: 220rpx;
			height: 220rpx;
		}
		.MemberNutritiousFood_box_view {
			width: 420rpx;
			.MemberNutritiousFood_box_view_top {
				display: flex;
				text {
					font-size:32rpx;
					font-family:PingFangSC-Medium,PingFang SC;
					font-weight:bold;
					color:rgba(19,31,43,1);
					line-height:44rpx;
					letter-spacing:2rpx;
				}
				view {
					margin-left: auto;
					display: flex;
					justify-items: center;
					align-items: center;
					padding: 0 20rpx;
					height:48rpx;
					background:rgba(130,130,130,0.1);
					border-radius:26rpx;
					font-size:26rpx;
					font-family:PingFangSC-Light,PingFang SC;
					font-weight:300;
					color:rgba(130,130,130,1);
					line-height:48rpx;
					.MemberNutritiousFood_box_view_top_image {
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
			.MemberNutritiousFood_box_view_bottom {
				display: block;
				margin-top: 32rpx;
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
