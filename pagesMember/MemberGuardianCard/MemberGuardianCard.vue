<template>
	<view class="w-100">
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper card_swiper" @change="is_active" active-class="selected" indicator-active-color="#000" :indicator-dots="false" :autoplay="autoplay" :interval="interval" :duration="duration" circular="ture" current="1" previous-margin="30px"  next-margin="30px">
					<swiper-item v-for="(item, index) in dataFormList" :key="index" @click="toMemberGuardianCardsDetails(item.edm)">
						<view class="swiper-item" :class="active_index==index?'selected':''">
							<image :src="imgUrl + item.imgs" class="wh-100" mode=""></image>
							<view class="card_title_box">
								<!-- <view class="card_title_ico">
									<image src="../static/image/card_bg1_ico.png" class="img-cov" mode=""></image>
								</view> -->
								<text class="card_title_txt">{{item.card_name}}</text>
							</view>
							<view class="card_bottom_box">
								<!-- <text class="card_bottom_box_txt">該等級永久有效</text> -->
							</view>
						</view>
					</swiper-item>
				 </swiper>
			</view>
		</view>
		
		<view class="card_explanation"  v-if="active_index==index" v-for="(item, index) in dataFormList" :key="index">
			<text class="card_explanation_txt">{{item.introduction}}</text>
			
			<!-- <view class="card_btn">
				<image src="../static/image/MemberNutritiousFoodF.png" mode=""></image>
				<text class="card_btn_txt">分享</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataFormList: [],
				active_index:1,
				imgUrl: this.$imgUrl
			};
		},
		 swiper: function (e) {
			 
		  },
		onLoad:function(){
			this._getLuckCardList()
		},
		methods:{
			is_active(e){
				this.active_index = e.detail.current;
			},
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
					console.log(err)
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
	.w-100{
		width: 100%;
		padding-top: 122rpx;
	}
	.h-100{
		height: 100%;
	}
	.wh-100{
		width: 100%;
		height: 100%;
	}
	.card_swiper{
	 height: 320rpx;
	}
	.swiper-item{
		height: 320rpx;
		overflow: hidden;
		border-radius: 20rpx;
		transform: scale(0.9);
		position: relative;
	}
	.selected{
		color:#000;
		transform: scale(1)
	}
	.card_title_box{
		position: absolute;
		top:15%;
		left: 10%;
		display: flex;
		align-items: center;
		.card_title_txt{
			font-size:28rpx;
			color:rgba(255,255,255,1);
			line-height:40rpx;
		}
	}
	.card_bottom_box{
		position: absolute;
		top:75%;
		left: 10%;
		.card_bottom_box_txt{
			font-size:20rpx;
			color:rgba(255,255,255,1);
			line-height:28rpx;
		}
	}
	.card_swiper swiper-item:nth-child(2) .card_title_txt{
		color:rgba(255,224,196,1) !important;
	}
	.card_swiper swiper-item:nth-child(2) .card_bottom_box_txt{
		color:rgba(255,224,196,.5) !important;
	}
	.card_explanation{
		padding: 108rpx 10.4% 0;
		.card_explanation_txt{
			display: block;
			text-align: center;
			font-size:28rpx;
			color:rgba(36,37,42,.7);
			line-height:44rpx;
			height: 88rpx;
			display: block;
		}
	}
	.card_btn{
		margin-top: 321rpx;
		padding: 26rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background:linear-gradient(225deg,rgba(55,56,58,1) 0%,rgba(34,34,32,1) 100%);
		box-shadow:0px 32rpx 64rpx 0px rgba(45,45,45,0.2);
		border-radius:12rpx;
		font-size:30rpx;
		color:rgba(255,255,255,1);
		line-height:42rpx;
		image{
			width: 48rpx;
			height: 48rpx;
		}
	}
</style>
