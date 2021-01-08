<template>
	<view class="AddAddress">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#F8F8FA'" :title="'添加地址'" @returnClick="returnClick"></top-navigation>
		
		<view class="AddAddress_top">
			<view class="view">
				<text>姓名</text>
				<input class="input" v-if="!deteleStatus" type="text" v-model="userName" placeholder="请填写您的姓名" placeholder-class="placeholderClass" />
				<view class="input inputs" v-if="deteleStatus && !userName">请填写您的姓名</view>
				<view class="input"  v-if="deteleStatus && userName">{{userName}}</view>
			</view>
			<view class="view">
				<text>手机号码</text>
				<input class="input" v-if="!deteleStatus" type="number" v-model="phone" placeholder="请输入您的电话" placeholder-class="placeholderClass" />
				<view class="inputinputs" v-if="deteleStatus && !phone">请输入您的电话</view>
				<view class="input"  v-if="deteleStatus && phone">{{phone}}</view>
			</view>
		</view>
		<view class="AddAddress_top">
			<view class="viewss">
				<text class="text_left">所在地区</text>
				<view class="view_right" @click="SelectRegion()">
					<text class="text1" v-if="region">{{region}}</text>
					<text class="text2" v-else>请选择</text>
					<image src="../../static/mallImg/couponRight.png" mode=""></image>
				</view>
			</view>
			<view class="views">
				<text>详细地址</text>
				<textarea class="textarea" v-if="!deteleStatus" v-model="addr" placeholder="请填写您的详细地址" placeholder-class="placeholderClass" />
				<view class="textarea textareas" v-if="deteleStatus && !addr">请填写您的详细地址</view>
				<view class="textarea" v-if="deteleStatus && addr">{{addr}}</view>
			</view>
		</view>
		<view class="AddAddress_select" @click="status = !status">
			<image v-if="!status" src="../../static/mallImg/couponDefault.png" mode=""></image>
			<image v-if="status" src="../../static/mallImg/couponSelect.png" mode=""></image>
			设为默认地址
		</view>
		<view class="AddAddress_button">
			<view>
				确认添加地址
			</view>
		</view>
		<!-- 确认放弃弹窗 -->
		<view class="AddAddress_popup" v-if="deteleStatus">
			<view class="AddAddress_popup_box">
				<image src="../../static/mallImg/AddAddressPopup.png" mode=""></image>
				<text class="text1">确定删除</text>
				<text class="text2">如需再次使用地址，需重新新增</text>
				<view class="view">
					<view class="view_left" @click="deteleStatus = false">
						取消
					</view>
					<view class="view_right" @click="deleteClick()">
						确定
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				deteleStatus: false,
				status: false,
				userName: "",
				phone: "",
				addr: "",
				region: ""
			};
		},
		methods: {
			// 返回上一页
			returnClick() {
				this.deteleStatus = true
			},
			// 确定放弃编辑
			deleteClick() {
				this.deteleStatus = false
				uni.redirectTo({
					url: "../AddressList/AddressList"
				})
			},
			// 选择地址
			SelectRegion() {
				let that = this
				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					success: function (res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						uni.chooseLocation({
							latitude: latitude,
							longitude: longitude,
							success: function (res) {
								that.region = res.address
							}
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss">
.AddAddress {
	padding: 20rpx 4.27% 0;
	background: #F8F8FA;
	min-height: 100vh;
	.AddAddress_top {
		margin-bottom: 32rpx;
		padding: 0 32rpx;
		width: 100%;
		background: #FFFFFF;
		border-radius: 8rpx;
		.view {
			border-bottom: 1px solid #D8D8D8;
			width: 100%;
			padding: 28rpx 0;
			position: relative;
			text {
				font-size: 28rpx;
				font-weight: 400;
				color: #131F2B;
				line-height: 40rpx;
			}
			.input {
				width: calc(100% - 150rpx);
				position: absolute;
				right: 0;
				top: 28rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #24252A;
				line-height: 40rpx;
				text-align: right;
			}
			.inputs {
				color: #D8D8D8;
			}
			/deep/ .placeholderClass {
				color: #D8D8D8;
			}
			view {
				width: calc(100% - 200rpx);
				position: absolute;
				right: 0;
				top: 28rpx;
				font-size: 28rpx;
				font-weight: 400;
				line-height: 40rpx;
				color: #D8D8D8;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				image {
					margin-left: 20rpx;
					width: 12rpx;
					height: 24rpx;
				}
			}
		}
		view:last-child {
			border-bottom: none;
		}
		.viewss {
			border-bottom: 1px solid #D8D8D8;
			width: 100%;
			padding: 28rpx 0;
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			.text_left {
				font-size: 28rpx;
				font-weight: 400;
				color: #131F2B;
				line-height: 40rpx;
			}
			.view_right {
				width: calc(100% - 150rpx);
				font-size: 28rpx;
				font-weight: 400;
				color: #24252A;
				line-height: 40rpx;
				display: flex;
				align-items: flex-start;
				.text2 {
					color: #D8D8D8;
				}
				text {
					display: block;
					width: calc(100% - 32rpx);
					text-align: right;
				}
				image {
					margin-top: 8rpx;
					margin-left: 20rpx;
					width: 12rpx;
					height: 24rpx;
				}
			}
		}
		.views {
			position: relative;
			padding: 28rpx 0;
			height: 136rpx;
			display: flex;
			align-items: flex-start;
			text {
				font-size: 28rpx;
				font-weight: 400;
				color: #131F2B;
				line-height: 40rpx;
			}
			.textarea {
				width: calc(100% - 200rpx);
				height: 80rpx;
				position: absolute;
				right: 0;
				top: 28rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #24252A;
				line-height: 40rpx;
				text-align: right;
			}
			.textareas {
				color: #D8D8D8;
			}
			/deep/ .placeholderClass {
				color: #D8D8D8;
			}
		}
	}
	.AddAddress_select {
		padding-left: 32rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #24252A;
		line-height: 34rpx;
		display: flex;
		align-items: center;
		image {
			width: 28rpx;
			height: 28rpx;
			margin-right: 12rpx;
		}
	}
	.AddAddress_button {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		padding: 20rpx 4.27%;
		view {
			width: 100%;
			height: 88rpx;
			background: #68B74D;
			border-radius: 54rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 88rpx;
			text-align: center;
		}
	}
	.AddAddress_popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		.AddAddress_popup_box {
			padding: 60rpx;
			width: 590rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			text-align: center;
			image {
				width: 136rpx;
				height: 152rpx;
			}
			.text1 {
				margin: 20rpx 0 14rpx;
				display: block;
				font-size: 40rpx;
				font-weight: 500;
				color: #131F2B;
				line-height: 56rpx;
			}
			.text2 {
				font-size: 26rpx;
				font-weight: 400;
				color: #828282;
				line-height: 36rpx;
			}
			.view {
				margin-top: 60rpx;
				display: flex;
				justify-content: space-between;
				.view_left {
					width: 208rpx;
					height: 88rpx;
					background: rgba(104,183,77,0.2);
					border-radius: 54rpx;
					font-size: 30rpx;
					font-weight: 400;
					color: #68B74D;
					line-height: 88rpx;
				}
				.view_right {
					width: 208rpx;
					height: 88rpx;
					background: #68B74D;
					border-radius: 54rpx;
					font-size: 30rpx;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 88rpx;
				}
			}
		}
	}
}
</style>
