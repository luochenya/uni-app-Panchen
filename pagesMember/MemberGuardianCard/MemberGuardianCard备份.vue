<template>
	<view class="MemberGuardianCard">
		<text class="MemberGuardianCard_title">i Doors 守护卡</text>
		
		<view class="MemberGuardianCard_box" v-for="(item, index) in dataFormList" :key="index" @click="toMemberGuardianCardsDetails(item.edm)">
			<view class="MemberGuardianCard_box_top">
				<view class="MemberGuardianCard_box_top_card">
					<image src="../static/image/MemberGuardianCardA.png" mode=""></image>
					{{item.card_name}}
				</view>
				<view class="MemberGuardianCard_box_top_shareIt">
					<image src="../static/image/MemberGuardianCardD.png" mode=""></image>
					分享
				</view>
			</view>
			<view class="MemberGuardianCard_box_bottom">
				<text>{{item.introduction}}</text>
			</view>
		</view>
		
		
		<!-- <view class="MemberGuardianCard_box" @click="toMemberGuardianCardsDetails()">
			<view class="MemberGuardianCard_box_top">
				<view class="MemberGuardianCard_box_top_card">
					<image src="../static/image/MemberGuardianCardA.png" mode=""></image>
					黑金卡
				</view>
				<view class="MemberGuardianCard_box_top_shareIt">
					<image src="../static/image/MemberGuardianCardD.png" mode=""></image>
					分享
				</view>
			</view>
			<view class="MemberGuardianCard_box_bottom">
				生日享网上购物9折优惠，<br />
				回馈点数2倍送，新品上市抢先看
			</view>
		</view>
		<view class="MemberGuardianCard_box demoA" @click="toMemberGuardianCardsDetails()">
			<view class="MemberGuardianCard_box_top">
				<view class="MemberGuardianCard_box_top_card">
					<image src="../static/image/MemberGuardianCardB.png" mode=""></image>
					尊荣VIP
				</view>
				<view class="MemberGuardianCard_box_top_shareIt">
					<image src="../static/image/MemberGuardianCardD.png" mode=""></image>
					分享
				</view>
			</view>
			<view class="MemberGuardianCard_box_bottom">
				生日享网上购物7折优惠，<br />
				回馈点数3倍送，新品上市抢先买
			</view>
		</view>
		<view class="MemberGuardianCard_box demoB" @click="toMemberGuardianCardsDetails()">
			<view class="MemberGuardianCard_box_top">
				<view class="MemberGuardianCard_box_top_card">
					<image src="../static/image/MemberGuardianCardC.png" mode=""></image>
					金钻VIP
				</view>
				<view class="MemberGuardianCard_box_top_shareIt">
					<image src="../static/image/MemberGuardianCardD.png" mode=""></image>
					分享
				</view>
			</view>
			<view class="MemberGuardianCard_box_bottom">
				生日享网上购物2折优惠，<br />
				回馈点数10倍送，新品上市抢先买
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataFormList: []
			};
		},
		onLoad:function(){
			this._getLuckCardList()
		},
		methods:{
			// 获取列表
			_getLuckCardList () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$member.post('Store/get_luck_card_list').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.dataFormList = res.data.data
					} else {
						 uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						 })
					}
				}).catch(err => {
					// console.log(err)
				})
			},
			toMemberGuardianCardsDetails(edm) {
				uni.navigateTo({
					url: '../../pagesMember/MemberGuardianCardsDetails/MemberGuardianCardsDetails?edm=' + edm
				})
			}
		}
	}
</script>

<style lang="less">
.MemberGuardianCard {
	padding: 60rpx 6.4% 0;
	.MemberGuardianCard_title {
		display: block;
		margin-bottom: 48rpx;
		margin-left: 20rpx;
		font-size:32rpx;
		font-family:PingFangSC-Light,PingFang SC;
		font-weight:300;
		color:rgba(130,130,130,1);
		line-height:44rpx;
		letter-spacing:2rpx;
	}
	.MemberGuardianCard_box {
		width: 100%;
		height:356rpx;
		background:rgba(36,37,42,1);
		border-radius:40rpx;
		overflow: hidden;
		margin-bottom: 48rpx;
		.MemberGuardianCard_box_top {
			padding: 0 5.81%;
			height: 120rpx;
			line-height: 120rpx;
			display: flex;
			justify-items: center;
			align-items: center;
			.MemberGuardianCard_box_top_card {
				display: flex;
				justify-items: center;
				align-items: center;
				font-size:34rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
				line-height:48rpx;
				letter-spacing:2rpx;
				image {
					width: 58rpx;
					height: 36rpx;
				}
			}
			.MemberGuardianCard_box_top_shareIt {
				display: flex;
				justify-items: center;
				align-items: center;
				text-align: center;
				margin-left: auto;
				padding: 0 20rpx;
				height:50rpx;
				background:rgba(255,255,255,0.1);
				border-radius:26rpx;
				font-size:28rpx;
				font-family:PingFangSC-Light,PingFang SC;
				font-weight:300;
				color:rgba(255,255,255,1);
				line-height:50rpx;
				image {
					width: 48rpx;
					height: 48rpx;
				}
			}
		}
		.MemberGuardianCard_box_bottom {
			// display: flex;
			// justify-items: center;
			// align-items: center;
			padding: 76rpx 5.81%;
			text-align: center;
			background:rgba(36,37,42,1);
			box-shadow:-328rpx 0px 98rpx 0px rgba(42,40,39,0.5);
			font-size:30rpx;
			font-family:PingFangSC-Light,PingFang SC;
			font-weight:300;
			color:rgba(255,255,255,1);
			line-height:42rpx;
			border-radius:0 0 40rpx 40rpx;
			text {
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				height: 84rpx;
			}
		}
	}
	.MemberGuardianCard_box:nth-child(3n+3) {
		background:rgba(251,134,30,1);
		.MemberGuardianCard_box_bottom {
			background:rgba(251,134,30,1);
			box-shadow:-328rpx 0px 98rpx 0px rgba(247,116,0,1);
		}
	}
	.MemberGuardianCard_box:nth-child(2n+2) {
		background:rgba(104,183,77,1);
		.MemberGuardianCard_box_bottom {
			background:rgba(104,183,77,1);
			box-shadow:-328rpx 0px 98rpx 0px rgba(91,166,65,1);
		}
	}
	// .demoA {
	// 	background:rgba(104,183,77,1);
	// 	.MemberGuardianCard_box_bottom {
	// 		background:rgba(104,183,77,1);
	// 		box-shadow:-328rpx 0px 98rpx 0px rgba(91,166,65,1);
	// 	}
	// }
	// .demoB {
	// 	background:rgba(251,134,30,1);
	// 	.MemberGuardianCard_box_bottom {
	// 		background:rgba(251,134,30,1);
	// 		box-shadow:-328rpx 0px 98rpx 0px rgba(247,116,0,1);
	// 	}
	// }
}
</style>
