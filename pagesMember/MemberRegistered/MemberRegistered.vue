<template>
	<view class="MemberRegistered">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="'会员注册'" @returnClick="returnClick"></top-navigation>
		
		<text class="MemberRegistered_h1">请填写以下注册信息</text>
		<text class="MemberRegistered_h2">欢迎来到泛宸小程序</text>
		<!-- 姓名 -->
		<view class="MemberRegistered_title">
			<image src="../static/image/MemberRegisteredA.png" mode=""></image>
			<text>姓名</text>
		</view>
		<view class="MemberRegistered_input">
			<input v-if="!popupStatus" class="MemberRegistered_inputs" type="text" v-model="name" :placeholder="namePlaceholder" :placeholder-class="nameStatus ? 'phClasss' : 'phClass'" />
			<text v-if="popupStatus" class="MemberRegistered_inputs">{{name}}</text>
			<image v-if="nameStatus" src="../static/image/MemberRegisteredD.png" mode=""></image>
		</view>
		<!-- 电话 -->
		<view class="MemberRegistered_title">
			<image src="../static/image/MemberRegisteredB.png" mode=""></image>
			<text>电话</text>
		</view>
		<view class="MemberRegistered_input">
			<input v-if="!popupStatus" class="MemberRegistered_inputs" type="number" v-model="phone" :placeholder="phonePlaceholder" :placeholder-class="phoneStatus ? 'phClasss' : 'phClass'" />
			<text v-if="popupStatus" class="MemberRegistered_inputs">{{phone}}</text>
			<image v-if="phoneStatus" src="../static/image/MemberRegisteredD.png" mode=""></image>
		</view>
		<!-- 密码 -->
		<view class="MemberRegistered_title">
			<image src="../static/image/MemberRegisteredC.png" mode=""></image>
			<text>密码</text>
		</view>
		<view class="MemberRegistered_input">
			<input v-if="!popupStatus" class="MemberRegistered_inputs" type="text" v-model="passWord" :placeholder="passWordPlaceholder" :placeholder-class="passWordStatus ? 'phClasss' : 'phClass'" />
			<text v-if="popupStatus" class="MemberRegistered_inputs">{{passWord}}</text>
			<image v-if="passWordStatus" src="../static/image/MemberRegisteredD.png" mode=""></image>
		</view>
		<!-- 注册按钮 -->
		<view class="MemberRegistered_button" @click="submit()">
			注册
		</view>
		
		<!-- 注册成功弹窗 -->
		<view class="MemberCreateManager_popup" v-if="popupStatus">
			<view class="MemberCreateManager_popup_box">
				<image class="MemberCreateManager_popup_box_image" src="../static/image/success.png" mode=""></image>
				<text class="MemberCreateManager_popup_box_title">注册成功！</text>
				<text class="MemberCreateManager_popup_box_content">请重新登录</text>
				<view class="MemberCreateManager_popup_box_button" @click="toSkip()">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				popupStatus: false,
				name: '',
				nameStatus: false,
				namePlaceholder: '请输入您的姓名',
				phone: '',
				phoneStatus: false,
				phonePlaceholder: '请输入您的电话号码',
				passWord: '',
				passWordStatus: false,
				passWordPlaceholder: '请输入您的密码',
				PlaceholderNull: '此栏位不得为空'
			};
		},
		watch:{
			name: function() {
				if (!this.name) {
					this.nameStatus = true
					this.namePlaceholder = this.PlaceholderNull
				} else {
					this.nameStatus = false
					this.namePlaceholder = "请输入您的姓名"
				}
			},
			phone: function() {
				if (!this.phone) {
					this.phoneStatus = true
					this.phonePlaceholder = this.PlaceholderNull
				} else {
					this.phoneStatus = false
					this.phonePlaceholder = "请输入您的电话号码"
				}
			},
			passWord: function() {
				if (!this.passWord) {
					this.passWordStatus = true
					this.passWordPlaceholder = this.PlaceholderNull
				} else {
					this.passWordStatus = false
					this.passWordPlaceholder = "请输入您的密码"
				}
			}
		},
		methods:{
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
				})
			},
			toSkip () {
				this.popupStatus = false
				uni.redirectTo({
					url: '../../pages/memberLogin/memberLogin'
				})
			},
			submit () {
				// 判断名字是否为空
				if (!this.name) {
					this.nameStatus = true
					this.namePlaceholder = this.PlaceholderNull
				} else {
					this.nameStatus = false
					this.namePlaceholder = "请输入您的姓名"
				}
				// 判断电话是否为空
				if (!this.phone) {
					this.phoneStatus = true
					this.phonePlaceholder = this.PlaceholderNull
				} else {
					this.phoneStatus = false
					this.phonePlaceholder = "请输入您的电话号码"
				}
				// 判断密码是否为空
				if (!this.passWord) {
					this.passWordStatus = true
					this.passWordPlaceholder = this.PlaceholderNull
				} else {
					this.passWordStatus = false
					this.passWordPlaceholder = "请输入您的密码"
				}
				// 必填都填了执行提交并跳转至登录
				if (this.name && this.phone && this.passWord) { 
					 // 加载动画
					uni.showLoading({
						title: '注册中'
					});
					this.$member.post(
						'Store/register',
						{
							name: this.name,
							password: this.passWord,
							phone: this.phone
						},
					).then(res => {
						// 关闭加载动画
						uni.hideLoading();
						if (res.data.code == 200) {
							this.popupStatus = true
						} else {
							 uni.showToast({
								icon: 'none',
								title: res.data.msg,
								duration: 2000
							 })
						}
					})
				}
			}
		}
	}
</script>

<style lang="less">
.MemberRegistered {
	padding: 70rpx 8%;
	.MemberRegistered_h1 {
		display: block;
		font-size:40rpx;
		font-weight:bold;
		color:rgba(36,37,42,1);
		line-height:56rpx;
	}
	.MemberRegistered_h2 {
		display: block;
		padding-bottom: 60rpx;
		font-size:28rpx;
		color:rgba(210,210,210,1);
		line-height:40rpx;
	}
	.MemberRegistered_title {
		display: flex;
		align-items: center;
		image {
			width: 48rpx;
			height: 48rpx;
		}
		text {
			display: inline-block;
			padding-left: 24rpx;
			font-size:28rpx;
			color:rgba(36,37,42,1);
			line-height:48rpx;
		}
	}
	.MemberRegistered_input {
		margin-bottom: 32rpx;
		position: relative;
		.MemberRegistered_inputs {
			display: block;
			width: calc(100% - 144rpx);
			height: 100rpx;
			padding: 0 72rpx;
			border-bottom: 2rpx solid #EBEBEB;
			font-size:30rpx;
			color:rgba(19,31,43,1);
		}
		.phClass {
			font-size:28rpx;
			color:rgba(210,210,210,1);
		}
		.phClasss {
			font-size:28rpx;
			color:rgba(251,134,30,1);
		}
		image {
			width: 40rpx;
			height: 40rpx;
			position: absolute;
			right: 18rpx;
			bottom: 36rpx;
		}
	}
	.MemberRegistered_button {
		margin: 100rpx 0;
		width: 100%;
		height:88rpx;
		background:rgba(104,183,77,1);
		border-radius:44rpx;
		font-size:36rpx;
		color:rgba(255,255,255,1);
		line-height:88rpx;
		text-align: center;
	}
	.MemberCreateManager_popup {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		justify-items: center;
		align-items: center;
		background:rgba(0,0,0,0.3);
		.MemberCreateManager_popup_box {
			margin: 0 auto;
			width:590rpx;
			height:648rpx;
			background:rgba(255,255,255,1);
			border-radius:24rpx;
			.MemberCreateManager_popup_box_image {
				width: 134rpx;
				height: 134rpx;
				margin: 64rpx auto 32rpx;
				display: block;
			}
			.MemberCreateManager_popup_box_title {
				font-size:40rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:bold;
				color:rgba(19,31,43,1);
				line-height:56rpx;
				display: block;
				text-align: center;
			}
			.MemberCreateManager_popup_box_content {
				display: block;
				text-align: center;
				width: 80%;
				margin: 8rpx auto 48rpx;
				font-size:30rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(130,130,130,1);
				line-height:48rpx;
			}
			.MemberCreateManager_popup_box_button {
				width:320rpx;
				height:88rpx;
				background:rgba(104,183,77,1);
				border-radius:54rpx;
				font-size:30rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:bold;
				color:rgba(255,255,255,1);
				line-height:80rpx;
				text-align: center;
				margin: 0 auto;
			}
		}
	}
}
</style>
