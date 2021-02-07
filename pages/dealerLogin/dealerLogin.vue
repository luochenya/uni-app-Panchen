<template>
	<view class="dealerLogin">
		<view class="dealerLogin_image">
			<image src="../../static/loginImg/dealerLogin.png" mode="scaleToFill"></image>	
		</view>
		<view class="dealerLogin_box">
			<!-- 用户名 -->
			<view class="dealerLogin_box_inputStyle">
				<image class="dealerLogin_box_inputStyle_show" src="../../static/loginImg/userName.png" mode=""></image>
				<input class="dealerLogin_box_inputStyle_input" v-model="userName" type="text" placeholder="请输入用户名" value="" />
				<image class="dealerLogin_box_inputStyle_close" @click="userNameEmpty()" src="../../static/loginImg/empty.png" mode=""></image>
			</view>
			<!-- 密码 -->
			<view class="dealerLogin_box_inputStyle">
				<image class="dealerLogin_box_inputStyle_show" src="../../static/loginImg/passWord.png" mode=""></image>
				<input class="dealerLogin_box_inputStyle_input" v-if="!passWordShow" v-model="passWord" type="text" password placeholder="请输入密码" value="" />
				<image class="dealerLogin_box_inputStyle_close" v-if="!passWordShow" @click="passWordShowFun()" src="../../static/loginImg/examine.png" mode=""></image>
				
				<input class="dealerLogin_box_inputStyle_input" v-if="passWordShow" v-model="passWord" type="text" placeholder="请输入密码" value="" />
				<image class="dealerLogin_box_inputStyle_close" v-if="passWordShow" @click="passWordShowFun()" src="../../static/loginImg/examineActive.png" mode=""></image>
			</view>
		</view>
		<button class="dealerLogin_button" open-type="getUserInfo" @click="onerification">登入</button>
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
						{
							username: this.userName,
							password: this.passWord,
						},
					).then(res => {
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
.dealerLogin {
	padding: 70rpx 8%;
	.dealerLogin_image {
		width: 400rpx;
		height: 268rpx;
		margin: 0 auto 64rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.dealerLogin_box {
		width: 100%;
		.dealerLogin_box_inputStyle {
			width: 100%;
			position: relative;
			.dealerLogin_box_inputStyle_show {
				width: 48rpx;
				height: 48rpx;
				position: absolute;
				top: 40rpx;
				left: 8rpx;
			}
			.dealerLogin_box_inputStyle_input {
				border-bottom: 2rpx solid #EBEBEB;
				padding: 0 80rpx;
				height:128rpx;
				font-size:30rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(159,160,162,1);
				line-height:128rpx;
			}
			.dealerLogin_box_inputStyle_close {
				width: 48rpx;
				height: 48rpx;
				position: absolute;
				top: 40rpx;
				right: 8rpx;
			}
		}
	}
	.dealerLogin_button {
		margin-top: 56rpx;
		width:100%;
		height:88rpx;
		background:rgba(104,183,77,1);
		border-radius:48rpx;
		font-size:36rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(255,255,255,1);
		line-height:88rpx;
	}
}
</style>
