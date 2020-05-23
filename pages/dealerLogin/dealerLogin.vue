<template>
	<view>
		<view class="loginImgStyle">
			<image src="../../static/logo.png" mode="scaleToFill"></image>	
		</view>
		<view class="loginInputStyle">
			<!-- 用户名 -->
			<view class="loginInputStyleUserName">
				<input class="inputStyle" v-model="userName" type="text" placeholder="请输入用户名" value="" />
				<image class="imgStyle" @click="userNameEmpty()" src="../../static/empty.png" mode=""></image>
			</view>
			<!-- 密码 -->
			<view class="loginInputStyleUserName">
				<input v-if="!passWordShow" class="inputStyle" v-model="passWord" type="text" password placeholder="请输入密码" value="" />
				<image v-if="!passWordShow" class="imgStyles" @click="passWordShowFun()" src="../../static/examine.png" mode=""></image>
				
				<input v-if="passWordShow" class="inputStyle" v-model="passWord" type="text" placeholder="请输入密码" value="" />
				<image v-if="passWordShow" class="imgStyles" @click="passWordShowFun()" src="../../static/examineActive.png" mode=""></image>
			</view>
		</view>
		<button class="register" open-type="getUserInfo" @click="onerification">登入</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				passWordShow: false,
				userName: '',
				passWord: ''
			};
		},
		onLoad:function(option){
			
		},
		methods:{
			// 清空用户名
			userNameEmpty() {
				this.userName = ''
			},
			// 密码显示或者隐藏
			passWordShowFun() {
				this.passWordShow = !this.passWordShow
			},
			 onerification(){
				 if (this.userName == '') {
					 uni.showToast({
					 	icon: 'none',
					 	title: '请输入用户名',
					 	duration: 2000
					 })
				 } else if (this.passWord == '') {
					 uni.showToast({
					 	icon: 'none',
					 	title: '请输入密码',
					 	duration: 2000
					 })
				 } else {
					 // 加载动画
					 uni.showLoading({
						 title: '登录中'
					 });
					this.$http.post(
						'Account/login',
						'\r\n--XXX' +
						'\r\nContent-Disposition: form-data; name="username"' +
						'\r\n' +
						'\r\n' + this.userName +
						'\r\n--XXX' +
						'\r\nContent-Disposition: form-data; name="password"' +
						'\r\n' +
						'\r\n' + this.passWord +
						'\r\n--XXX--').then(res => {
						// 关闭加载动画
						uni.hideLoading();
						if (res.data.code == 200) {
							uni.setStorage({
								key: "userInfo",
								data: res.data.data
							})
							uni.setStorage({
								key: "token",
								data: res.data.data.token
							})
							 uni.showToast({
								icon: 'success',
								title: res.data.msg,
								duration: 2000,
								success: function () {
									uni.switchTab({
										url: "../dealer/index"
									})
								}
							 })
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
.input-box-clear {
	color: #FFFFFF !important;
	width: 37rpx;
	height: 37rpx;
	line-height: 37rpx;
	text-align: center;
	background-color: #fb861e;
	border-radius: 50%;
}
.loginImgStyle {
	width: 358rpx;
	height: 344rpx;
	margin: 0 auto;
	padding-top: 120rpx;
	padding-bottom: 100rpx;
	image {
		width: 358rpx;
		height: 124rpx;
	}
}
.loginInputStyle {
	width: 634rpx;
	margin: 0 auto;
	.loginInputStyleUserName {
		position: relative;
		margin-bottom: 20rpx;
		.inputStyle {
			border-bottom: 1px solid #F5F5F5;
			padding: 0 60rpx 0 40rpx;
			height: 80rpx;
			line-height: 80rpx;
			margin: 0 auto;
			font-size: 28rpx;
			color: #4A4A4A;
			overflow: hidden;
			white-space: nowrap;
		}
		.imgStyle {
			width: 38rpx !important;
			height: 38rpx !important;
			position: absolute;
			right: 20rpx;
			top: 20rpx;
		}
		.imgStyles {
			width: 44rpx !important;
			height: 44rpx !important;
			position: absolute;
			right: 20rpx;
			top: 13rpx;
		}
	}
}
.register {
	width: 634rpx;
	height: 88rpx;
	line-height: 88rpx;
	background-color: #88c057;
	color: #FFFFFF;
	text-align: center;
	margin: 60rpx auto;
	font-size: 32rpx;
	border-radius: 88rpx;
}
</style>
