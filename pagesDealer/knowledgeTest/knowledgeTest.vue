<template>
	<view class="knowledgeTest">
		<view class="knowledgeTest_box" v-for="(item, index) in knowledgeTeseList" :key="index">
			<view class="knowledgeTest_box_backgImage">
				<image :src="backgroundImage" mode=""></image>
			</view>
			<view class="knowledgeTest_boxs">
				<text class="knowledgeTest_boxs_title">{{item.title}}</text>
				<text class="knowledgeTest_boxs_content">共 <text class="knowledgeTest_boxs_content_number">{{item.question.length}}</text> 题</text>
				<button class="knowledgeTest_boxs_button" type="primary" @click="beginTesting(item.id, item.title)">开始测试</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				knowledgeTeseList: [],
				backgroundImage: "../static/image/knowledgeTest.png"
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
					// console.log(err)
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
.knowledgeTest {
	padding: 0 4.27%;
	.knowledgeTest_box {
		width: 100%;
		height: 280rpx;
		position: relative;
		text-align: center;
		margin-bottom: 32rpx;
		.knowledgeTest_box_backgImage {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.knowledgeTest_boxs {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			padding: 20rpx 0;
			.knowledgeTest_boxs_title {
				display: block;
				font-size:40rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:bold;
				color:rgba(19,31,43,1);
				line-height:80rpx;
			}
			.knowledgeTest_boxs_content {
				font-size:28rpx;
				font-family:PingFangSC-Light,PingFang SC;
				font-weight:300;
				color:rgba(19,31,43,1);
				line-height:80rpx;
				.knowledgeTest_boxs_content_number {
					padding: 0 4rpx;
					font-size:48rpx;
					font-family:DIN-Black,DIN;
					font-weight:900;
					color:rgba(19,31,43,1);
				}
			}
			.knowledgeTest_boxs_button {
				width:216rpx;
				height:58rpx;
				background:rgba(104,183,77,1);
				border-radius:36rpx;
				font-size:30rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:bold;
				color:rgba(255,255,255,1);
				line-height:58rpx;
			}
		}
	}
}
</style>
