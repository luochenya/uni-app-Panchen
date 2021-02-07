<template>
	<view class="quiz">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="title" @returnClick="returnClick"></top-navigation>
		
		<view class="quiz_top">
			<view class="quiz_top_num">
				<text class="quiz_top_num_left">{{num  < 10 ? '0' + num  : num }}</text>
				<text class="quiz_top_num_right">/ {{quizList.length}}</text>
			</view>
			<text class="quiz_top_text">
				{{quizList[num - 1].question}}
			</text>
		</view>
		
		<view class="quiz_bottom">
			<view 
				class="quiz_bottom_button"
				:class="activeList[num - 1] === index ? 'quiz_bottom_button_active' : ''"
				@click="selectClick(index)"
				v-for="(item, index) in quizList[num - 1].answer_content"
				:key="index"
			>
				<text v-if="index == 0">[A]</text>  
				<text v-if="index == 1">[B]</text>  
				<text v-if="index == 2">[C]</text>  
				<text v-if="index == 3">[D]</text>  
				{{item}}
			</view>
			<view class="quiz_bottom_switch">
				<view  v-if="num == 1">
					
				</view>
				<view @click="PreviousQuestion()" v-if="num != 1">
					<image src="../static/image/left.png" mode=""></image>
					<text>上一题</text>
				</view>
				<view @click="NextQuestion()" v-if="num < quizList.length">
					<text>下一题</text>
					<image src="../static/image/right.png" mode=""></image>
				</view>
				<view @click="submit()" v-else>
					<text>我答完了</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 1,
				quizList: [],
				activeList: [],
				title: ""
			}
		},
		onLoad:function(option){
			// uni.setNavigationBarTitle({
			// 	title: option.title
			// })
			this.title = option.title
			this.gettingData(option.id)
		},
		methods: {
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
				})
			},
			// 获取数据
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
						res.data.data.question.forEach(item => {
							this.activeList.push(0)
						})
					} else {
						 uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						 })
					}
				})
			},
			// 选择答案
			selectClick(index) {
				if (this.activeList[this.num-1] == index) {
					return false
				}
				this.activeList.splice(this.num-1, 1, index)
			},
			// 上一题
			PreviousQuestion() {
				if (this.num == 1) {
					return false
				}
				this.num--
			},
			// 下一题
			NextQuestion() {
				if (this.num == this.quizList.length) {
					return false
				}
				this.num++
			},
			// 提交方法
			submit () {
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
			}
		}
	}
</script>

<style lang="less" scoped>
.quiz {
	padding: 20rpx 8% 0;
	.quiz_top {
		width: 100%;
		height: 35vh;
		padding-top: 80rpx;
		.quiz_top_num {
			margin-bottom: 32rpx;
			.quiz_top_num_left {
				font-size: 48rpx;
				font-weight: 600;
				color: #FB861E;
				line-height: 66rpx;
			}
			.quiz_top_num_right {
				margin-left: 20rpx;
				font-size: 28rpx;
				font-weight: 600;
				color: #FB861E;
				line-height: 40rpx;
			}
		}
		.quiz_top_text {
			font-size: 32rpx;
			font-weight: 600;
			color: #24252A;
			line-height: 44rpx;
		}
	}
	.quiz_bottom {
		padding-bottom: 50rpx;
		.quiz_bottom_button {
			margin-bottom: 28rpx;
			padding: 24rpx 52rpx;
			width: 100%;
			background: #F8F8FA;
			border-radius: 44rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #24252A;
			line-height: 42rpx;
			text {
				margin-right: 10rpx;
			}
		}
		.quiz_bottom_button_active {
			color: #FFFFFF;
			background: #68B74D;
		}
		.quiz_bottom_switch {
			margin-top: 120rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			view {
				width: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 30rpx;
				font-weight: 400;
				color: #68B74D;
				line-height: 42rpx;
				image {
					width: 24rpx;
					height: 26rpx;
					margin: 0 12rpx;
				}
			}
		}
	}
}
</style>
