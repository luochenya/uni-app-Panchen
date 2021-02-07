<template>
	<view class="quiz">
		<view class="quiz_box" v-for="(item, index) in quizList" :key="index">
			<view class="quiz_box_title">
				<text class="quiz_box_title_title">
					<text class="quiz_box_title_titles">{{index < 9 ? '0' + (index + 1) : (index +1)}}</text>
					{{item.question}}
				</text>
			</view>
			<radio-group @change="radioChange" :id="index">
				<label class="quiz_box_cintent" v-for="(items, indexs) in item.answer_content" :key="items">
					<view class="quiz_box_cintent_radio">
						<radio color="#88c075" :value="items" :checked="items == item.answer" />
					</view>
					<text class="quiz_box_cintent_text" v-if="items == item.answer">{{items}}</text>
					<text class="quiz_box_cintent_texts" v-else>{{items}}</text>
				</label>
			</radio-group>
		</view>
			
		<button class="quiz_button" @click="submit()" type="primary">我答完了</button>
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
				this.$http.post('System/get_exam_question_details', {id: id}).then(res => {
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
				// for (let i = 0; i < this.quizList.length; i++) {
				// 	console.log(this.quizList[i].answer)
				// }
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
.quiz {
	.quiz_box {
		padding-bottom: 18rpx;
		padding-top: 32rpx;
		border-bottom: 2rpx solid #D8D8D8;
		.quiz_box_title {
			width: 100%;
			padding: 0 4.27%;
			.quiz_box_title_title {
				font-size:30rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
				line-height:64rpx;
				.quiz_box_title_titles {
					display: inline-block;
					width: 70rpx;
					font-size:36rpx;
					font-family:DIN-Black,DIN;
					font-weight:900;
					color:rgba(51,51,51,1);
					line-height:64rpx;
				}
			}
		}
		.quiz_box_cintent {
			padding: 12rpx 4.27%;
			margin-left: 60rpx;
			display: block;
			.quiz_box_cintent_radio {
				display: inline-block;
				transform:scale(0.7);
				font-size: 28rpx;
			}
			.quiz_box_cintent_text {
				font-size:28rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(104,183,77,1);
				line-height:48rpx;
			}
			.quiz_box_cintent_texts {
				font-size:28rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(153,153,153,1);
				line-height:48rpx;
			}
		}
	}
	.quiz_button {
		margin-top: 64rpx;
		margin-bottom: 160rpx;
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
