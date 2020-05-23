<template>
	<view>
		<form @submit="submit()">
			<textarea class="textareaStyle" @input='bindTextAreaBlur' show-confirm-bar="false" :value="consultingFeedbackContent" maxlength="500" placeholder="请输入您的问题"/>
		</form>
		<text class="textareaStyleHint">请留下您反馈的内容，限字数500字</text>
		<button @click="submit()" type="primary" class="textareaStyleButton">提交反馈</button>
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
.textareaStyle {
	margin: 0 auto;
	width: 622rpx;
	height: 500rpx;
	border: 1rpx solid #d5d5d5;
	padding: 36rpx 32rpx;
}
.textareaStyleHint {
	text-align: center;
	width: 100%;
	display: block;
	color: #828282;
	font-size: 20rpx;
	line-height: 66rpx;
}
.textareaStyleButton {
	width: 320rpx;
	height: 90rpx;
	text-align: center;
	color: #FFFFFF;
	line-height: 90rpx;
	border-radius: 90rpx;
	margin-top: 30rpx;
}
</style>
