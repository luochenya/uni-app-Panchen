<template>
	<view>
		<view class="knowledgeTeseStyle" v-for="(item, index) in knowledgeTeseList" :key="index">
			<view class="knowledgeTeseStyleBacImg">
				<image :src="backgroundImage" mode=""></image>
			</view>
			<text class="knowledgeTeseStyleTitle">{{item.title}}</text>
			<text class="knowledgeTeseStyleContent">共 <text class="knowledgeTeseStyleNumber">{{item.question.length}}</text> 题</text>
			<button type="primary" @click="beginTesting(item.id, item.title)" class="knowledgeTeseStyleButton">开始测试</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				knowledgeTeseList: [],
				backgroundImage: "../../static/knowUsImg/nCarouselA.png"
			};
		},
		onLoad:function(option){
			
		},
		mounted() {
			this.gettingData()
		},
		methods: {
			gettingData () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('System/get_exam_question_list').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.knowledgeTeseList = res.data.data
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
			},
			beginTesting (id, title) {
				uni.navigateTo({
					url: "../quiz/quiz?id=" + id + '&title=' + title
				})
			}
		}
	}
</script>

<style lang="less">
.knowledgeTeseStyle {
	width: 686rpx;
	height: 280rpx;
	margin: 16rpx auto;
	background-color: rgba(238,238,238,0.5);
	border-radius: 15rpx;
	text-align: center;
	position: relative;
	.knowledgeTeseStyleBacImg {
		position: absolute;
		left: 0;
		top: 0;
		width: 686rpx;
		height: 280rpx;
		opacity: 0.2;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.knowledgeTeseStyleTitle {
		padding-top: 45rpx;
		font-size: 38rpx;
		font-weight: bold;
		line-height: 60rpx;
		display: block;
	}
	.knowledgeTeseStyleNumber {
		font-size: 38rpx;
		font-weight: bold;
		line-height: 60rpx;
		margin: 0 5rpx;
	}
	.knowledgeTeseStyleContent {
		font-size: 26rpx;
		line-height: 50rpx;
		display: block;
	}
	.knowledgeTeseStyleButton {
		margin-top: 15rpx;
		width: 216rpx;
		height: 58rpx;
		color: #FFFFFF;
		line-height: 58rpx;
		font-size: 28rpx;
		border-radius: 58rpx;
	}
}
</style>
