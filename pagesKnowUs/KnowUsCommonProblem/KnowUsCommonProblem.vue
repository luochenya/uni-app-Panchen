<template>
	<view class="KnowUsCommonProblem">
		<image class="KnowUsCommonProblem_image" src="../static/image/KnowUsCommonProblem.png" mode=""></image>
		<view class="KnowUsCommonProblem_nav">
			<view v-for="(item, index) in faqsClass" :key="index" :class="activeNum == index ? 'active' : ''" @click="activeClick(index)">{{item.class_name}}</view>
		</view>
		<view class="KnowUsCommonProblem_content" v-for="(item,index) in dataFormList" :key="index">
			<text class="KnowUsCommonProblem_content_title">{{item.title}}</text>
			<text class="KnowUsCommonProblem_content_content">{{item.answer}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				class_id: '',
				faqsClass: '',
				activeNum: 0,
				dataFormList: []
			};
		},
		onLoad:function(){
			this._getFaqsClass()
		},
		methods:{
			// 获取问答分类
			_getFaqsClass () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post('Visitor/get_faqs_class').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.faqsClass = res.data.data
						this._getFaqs(res.data.data[0].id)
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
			// 获取问答列表
			_getFaqs (id) {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$http.post(
				'Visitor/get_faqs',
					'\r\n--XXX' +
					'\r\nContent-Disposition: form-data; name="class_id"' +
					'\r\n' +
					'\r\n' + id +
					'\r\n--XXX--'
					).then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.dataFormList = res.data.data
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
			activeClick(num) {
				if (num == this.activeNum) {
					return false
				}
				this.activeNum = num
				this._getFaqs(this.faqsClass[num].id)
			}
		}
	}
</script>

<style lang="less">
.KnowUsCommonProblem {
	padding: 28rpx 4.27% 0;
	.KnowUsCommonProblem_image {
		width: 100%;
		height: 262rpx;
	}
	.KnowUsCommonProblem_nav {
		// display: flex;
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
		view {
			display: inline-block;
			width: 25%;
			height: 56rpx;
			border-radius: 28rpx;
			line-height: 56rpx;
			text-align: center;
			font-size:28rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(19,31,43,1);
		}
		.active {
			background:rgba(104,183,77,1);
			color:rgba(255,255,255,1);
		}
	}
	.KnowUsCommonProblem_content {
		padding: 32rpx 24rpx;
		border-bottom: 2rpx solid #D8D8D8;
		.KnowUsCommonProblem_content_title {
			display: block;
			margin-bottom: 24rpx;
			font-size:32rpx;
			font-family:PingFangSC-Medium,PingFang SC;
			font-weight:bold;
			color:rgba(19,31,43,1);
			line-height:44rpx;
			letter-spacing:2rpx;
		}
		.KnowUsCommonProblem_content_content {
			font-size:28rpx;
			font-family:PingFangSC-Light,PingFang SC;
			font-weight:300;
			color:rgba(130,130,130,1);
			line-height:46rpx;
		}
	}
}
</style>
