<template>
	<view>
		<view class="quizStyle" v-for="(item, index) in quizList" :key="index">
			<view class="quizStyleTopic">
				<text><text style="margin-right: 20rpx;">{{index < 9 ? '0' + (index + 1) : (index +1)}}</text>{{item.question}}</text>
			</view>
			<radio-group @change="radioChange" :id="index">
				<label class="quizLabelStyle" v-for="(items, indexs) in item.answer_content" :key="items">
					<view class="quizRadioStyle">
						<radio color="#88c075" :value="items" :checked="items == item.answer" />
					</view>
					<view v-if="items == item.answer" class="quizContentStyles">{{items}}</view>
					<view v-else class="quizContentStyle">{{items}}</view>
				</label>
			</radio-group>
		</view>
		<button @click="submit()" class="quizStyleButton" type="primary">我答完了</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				quizList: []
			}
		},
		onLoad:function(option){
			uni.setNavigationBarTitle({
				title: option.title
			})
			this.gettingData(option.id)
		},
		methods: {
			gettingData(id) {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post(
					'System/get_exam_question_details',
					'\r\n--XXX' +
					'\r\nContent-Disposition: form-data; name="id"' +
					'\r\n' +
					'\r\n' + id +
					'\r\n--XXX--').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.quizList = res.data.data.question
						for (let i = 0; i < res.data.data.question.length; i++) {
							this.quizList[i].answer = this.quizList[i].answer_content[0];
						}
					} else {
						 uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						 })
					}
				})
			},
			// 提交方法
			submit () {
				for (let i = 0; i < this.quizList.length; i++) {
					console.log(this.quizList[i].answer)
				}
				 uni.showToast({
					icon: 'success',
					title: '提交成功',
					duration: 2000,
					success: function () {
						uni.switchTab({
							url: "../../pages/dealer/index"
						})
					}
				 })
			},
			// 赋值
			radioChange: function(evt) {
				let index = evt.currentTarget.id
				let value = evt.target.value
				this.quizList[index].answer = value;
				// for (let i = 0; i < this.quizList[index].answer_content.length; i++) {
				// 	if (this.quizList[index].answer_content[i] === value) {
				// 		this.quizList[index].answer = i+1;
				// 		break;
				// 	}
				// }
			}
		}
	}
</script>

<style lang="less">
.quizStyle {
	padding-top: 50rpx;
	padding-left: 34rpx;
	border-bottom: 2rpx solid #ececec;
	.quizStyleTopic {
		font-size: 30rpx;
		font-weight: bold;
		margin-bottom: 30rpx;
	}
	.quizLabelStyle {
		margin-left: 68rpx;
		display: block;
		height: 72rpx;
		.quizRadioStyle {
			display: inline-block;
			color: #999999;
			transform:scale(0.7);
			font-size: 28rpx;
		}
		.quizContentStyle {
			display: inline-block;
			color: #999999;
			font-size: 26rpx;
		}
		.quizContentStyles {
			display: inline-block;
			color: #88c075;
			font-size: 26rpx;
		}
	}
}
.quizStyleButton {
	margin: 64rpx auto;
	width: 320rpx;
	height: 88rpx;
	color: #FFFFFF;
	line-height: 88rpx;
	font-size: 28rpx;
	border-radius: 88rpx;
}
</style>
