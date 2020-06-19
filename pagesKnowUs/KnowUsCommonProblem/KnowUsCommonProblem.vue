<template>
	<view class="KnowUsCommonProblem">
		<image class="KnowUsCommonProblem_image" src="../static/image/KnowUsCommonProblem.png" mode=""></image>
		<view class="KnowUsCommonProblem_nav">
			<view :class="activeNum == 1 ? 'active' : ''" @click="activeClick(1)">购物</view>
			<view :class="activeNum == 2 ? 'active' : ''" @click="activeClick(2)">积分</view>
			<view :class="activeNum == 3 ? 'active' : ''" @click="activeClick(3)">合作</view>
			<view :class="activeNum == 4 ? 'active' : ''" @click="activeClick(4)">其他</view>
		</view>
		<view class="KnowUsCommonProblem_content" v-for="(item,index) in dataFormList" :key="index">
			<text class="KnowUsCommonProblem_content_title">{{item.title}}</text>
			<text class="KnowUsCommonProblem_content_content">{{item.content}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeNum: 1,
				dataFormList: [{
					title: '如何付款呢？',
					content: '联系经销商后，确认物品，双方谈妥交易方式即可。'
				},{
					title: '怎么知道自己有没有符合优惠价？',
					content: '于产品介绍中，有提及相关资格，也可以直接洽询经销商协助。'
				},{
					title: '有可能接到公司来电说明付款失败吗？',
					content: '不可能，本公司不会主动致电给用户，如收到相关电话切勿轻易相信，如遇财物损失，本公司概不负责。'
				}],
				dataFormListD: [{
					title: '如何付款呢？',
					content: '联系经销商后，确认物品，双方谈妥交易方式即可。'
				},{
					title: '怎么知道自己有没有符合优惠价？',
					content: '于产品介绍中，有提及相关资格，也可以直接洽询经销商协助。'
				},{
					title: '有可能接到公司来电说明付款失败吗？',
					content: '不可能，本公司不会主动致电给用户，如收到相关电话切勿轻易相信，如遇财物损失，本公司概不负责。'
				}],
				
				dataFormListA: [{
					title: '如何付款呢？A',
					content: '联系经销商后，确认物品，双方谈妥交易方式即可。A'
				},{
					title: '怎么知道自己有没有符合优惠价？A',
					content: '于产品介绍中，有提及相关资格，也可以直接洽询经销商协助。A'
				},{
					title: '有可能接到公司来电说明付款失败吗？A',
					content: '不可能，本公司不会主动致电给用户，如收到相关电话切勿轻易相信，如遇财物损失，本公司概不负责。A'
				}],
				dataFormListB: [{
					title: '如何付款呢？B',
					content: '联系经销商后，确认物品，双方谈妥交易方式即可。B'
				},{
					title: '怎么知道自己有没有符合优惠价？B',
					content: '于产品介绍中，有提及相关资格，也可以直接洽询经销商协助。B'
				},{
					title: '有可能接到公司来电说明付款失败吗？B',
					content: '不可能，本公司不会主动致电给用户，如收到相关电话切勿轻易相信，如遇财物损失，本公司概不负责。B'
				}],
				dataFormListC: [{
					title: '如何付款呢？C',
					content: '联系经销商后，确认物品，双方谈妥交易方式即可。C'
				},{
					title: '怎么知道自己有没有符合优惠价？C',
					content: '于产品介绍中，有提及相关资格，也可以直接洽询经销商协助。C'
				},{
					title: '有可能接到公司来电说明付款失败吗？C',
					content: '不可能，本公司不会主动致电给用户，如收到相关电话切勿轻易相信，如遇财物损失，本公司概不负责。C'
				}],
				
			};
		},
		methods:{
			activeClick(num) {
				this.activeNum = num
				if (num == 1) {
					this.dataFormList = this.dataFormListD
				} else if (num == 2) {
					this.dataFormList = this.dataFormListA
				} else if (num == 3) {
					this.dataFormList = this.dataFormListB
				} else if (num == 4) {
					this.dataFormList = this.dataFormListC
				}
			}
		}
	}
</script>

<style lang="less">
.KnowUsCommonProblem {
	padding: 28rpx 4.27% 0;
	.KnowUsCommonProblem_image {
		width: 100%;
		height: 262rpx;
	}
	.KnowUsCommonProblem_nav {
		display: flex;
		justify-content: space-between;
		view {
			width: 25%;
			height: 56rpx;
			border-radius: 28rpx;
			line-height: 56rpx;
			text-align: center;
			font-size:28rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(19,31,43,1);
		}
		.active {
			background:rgba(104,183,77,1);
			color:rgba(255,255,255,1);
		}
	}
	.KnowUsCommonProblem_content {
		padding: 32rpx 24rpx;
		border-bottom: 2rpx solid #D8D8D8;
		.KnowUsCommonProblem_content_title {
			display: block;
			margin-bottom: 24rpx;
			font-size:32rpx;
			font-family:PingFangSC-Medium,PingFang SC;
			font-weight:bold;
			color:rgba(19,31,43,1);
			line-height:44rpx;
			letter-spacing:2rpx;
		}
		.KnowUsCommonProblem_content_content {
			font-size:28rpx;
			font-family:PingFangSC-Light,PingFang SC;
			font-weight:300;
			color:rgba(130,130,130,1);
			line-height:46rpx;
		}
	}
}
</style>
