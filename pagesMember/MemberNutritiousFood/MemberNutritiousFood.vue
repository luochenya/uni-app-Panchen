<template>
	<view class="MemberNutritiousFood">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="'营养食品'" @returnClick="returnClick"></top-navigation>
		
		<view class="MemberNutritiousFood_box" v-for="(item, index) in dataFormList" :key="index" @click="toDetails(item.edm)">
			<image class="MemberNutritiousFood_box_image" :src="imgUrl + item.imgs" mode=""></image>
			<view class="MemberNutritiousFood_box_view">
				<view class="MemberNutritiousFood_box_view_top">
					<text>{{item.food_name}}</text>
					<view>
						<image class="MemberNutritiousFood_box_view_top_image" src="../static/image/MemberNutritiousFoodD.png" mode=""></image>
						分享
					</view>
				</view>
				<text class="MemberNutritiousFood_box_view_bottom">{{item.introduction}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl,
				dataFormList: []
			};
		},
		onLoad:function(){
			this._getNutritionFoodsList()
		},
		methods:{
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
				})
			},
			// 获取列表
			_getNutritionFoodsList () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$member.post('Store/get_nutrition_foods_list').then(res => {
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
			toDetails(edm) {
				uni.navigateTo({
					url: '../../pagesMember/MemberNutritiousFoodDetails/MemberNutritiousFoodDetails?edm=' + edm
				})
			}
		}
	}
</script>

<style lang="less">
.MemberNutritiousFood {
	padding: 20rpx 4.27% 0;
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
