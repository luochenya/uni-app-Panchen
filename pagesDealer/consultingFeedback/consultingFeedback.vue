<template>
	<view class="consultingFeedback">
		<form @submit="submit()">
			<textarea class="consultingFeedback_textarea" @input='bindTextAreaBlur' show-confirm-bar="false" :value="consultingFeedbackContent" maxlength="500" placeholder="请输入您的问题"/>
		</form>
		<text class="consultingFeedback_title">请留下您反馈的内容，限字数500字</text>
		<button @click="submit()" type="primary" class="consultingFeedback_button">提交反馈</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				consultingFeedbackContent: ''
			};
		},
		onLoad:function(option){
			
		},
		methods: {
			bindTextAreaBlur:function(e){
				this.consultingFeedbackContent = e.detail.value
			},
			submit () {
				if (!this.consultingFeedbackContent) {
					uni.showToast({
						icon: 'none',
						title: '反馈内容不能为空！',
						duration: 2000
					})
					return false;
				}
				 // 加载动画
				 uni.showLoading({
					 title: '提交中'
				 });
				this.$http.post(
					'System/sub_information',
					'\r\n--XXX' +
					'\r\nContent-Disposition: form-data; name="question"' +
					'\r\n' +
					'\r\n' + this.consultingFeedbackContent +
					'\r\n--XXX--'
					).then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						 uni.showToast({
							icon: 'success',
							title: '提交成功',
							duration: 2000,
							success: function() {
								uni.switchTab({
									url: "../../pages/dealer/index"
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
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="less">
.consultingFeedback {
	padding: 0 4.27%;
	.consultingFeedback_textarea {
		padding: 24rpx 32rpx;
		width: 100%;
		height:560rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 20rpx 202rpx -126rpx rgba(19,31,43,0.67);
		border:2rpx solid rgba(130,130,130,0.33);
	}
	.consultingFeedback_title {
		display: block;
		text-align: center;
		margin-top: 8rpx;
		margin-bottom: 64rpx;
		font-size:20rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(130,130,130,1);
		line-height:48rpx;
	}
	.consultingFeedback_button {
		width:320rpx;
		height:88rpx;
		background:rgba(104,183,77,1);
		border-radius:54rpx;
		font-size:30rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		line-height:88rpx;
	}
}
</style>
