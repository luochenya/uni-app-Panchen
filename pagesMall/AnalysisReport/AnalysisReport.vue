<template>
	<view class="AnalysisReport">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#F8F8FA'" :title="'分析报告'" @returnClick="returnClick"></top-navigation>
		
		<!-- 参数分数 -->
		<view class="AnalysisReport_parameter">
			<view class="AnalysisReport_parameter_top">
				<image class="img" src="../../static/mallImg/AnalysisReport1.png" mode=""></image>
				<view class="box">
					<view>
						<view class="text1">参考分数</view>
						<view class="text2">
							{{reportData.score}}
							<text>分</text>
						</view>
					</view>
				</view>
			</view>
			<view class="AnalysisReport_parameter_content">
				<text class="AnalysisReport_parameter_content_left">最近检测日：</text>
				<text class="AnalysisReport_parameter_content_right">{{userData.lastday}}</text>
			</view>
			<view class="AnalysisReport_parameter_content">
				<text class="AnalysisReport_parameter_content_left">姓名：</text>
				<text class="AnalysisReport_parameter_content_right">{{userData.name}}</text>
			</view>
			<view class="AnalysisReport_parameter_content">
				<text class="AnalysisReport_parameter_content_left">性别：</text>
				<text class="AnalysisReport_parameter_content_right">{{userData.sex}}</text>
			</view>
			<view class="AnalysisReport_parameter_content">
				<text class="AnalysisReport_parameter_content_left">生日：</text>
				<text class="AnalysisReport_parameter_content_right">{{userData.birthday}}</text>
			</view>
			<view class="AnalysisReport_parameter_content">
				<text class="AnalysisReport_parameter_content_left">证件号码：</text>
				<text class="AnalysisReport_parameter_content_right">{{userData.uid}}</text>
			</view>
			<view class="AnalysisReport_parameter_content">
				<text class="AnalysisReport_parameter_content_left">检查日：</text>
				<text class="AnalysisReport_parameter_content_right">{{userData.detectday}}</text>
			</view>
			<view class="AnalysisReport_parameter_content">
				<text class="AnalysisReport_parameter_content_left">建议下次检查日：</text>
				<text class="AnalysisReport_parameter_content_right">{{userData.suggestday}}</text>
			</view>
		</view>
		
		<!-- 十大主要系统 -->
		<view class="AnalysisReport_MainSystem">
			<view class="AnalysisReport_MainSystem_top">您的全身十项主要系统评估分析</view>
			<view class="AnalysisReport_MainSystem_content" v-for="(item, index) in MainSystemList" :key="index">
				<view class="left">
					<image :src="item.image" mode=""></image>
				</view>
				<view class="right">
					<text class="right_title">{{item.title}}</text>
					<text class="right_text">{{item.text}}</text>
				</view>
			</view>
		</view>
		
		<!-- 心率活动 -->
		<view class="AnalysisReport_HeartRateActivity">
			<view class="AnalysisReport_HeartRateActivity_top">其他心率活动系统评估分析</view>
			<view class="AnalysisReport_HeartRateActivity_center">
				<view class="center" v-for="(item, index) in HeartRateActivityList" :key="index">
					<text class="text">{{item.title}}</text>
					<view class="view">
						<image :src="item.image" mode=""></image>
						<text>{{item.text}}</text>
					</view>
				</view>
			</view>
			<view class="AnalysisReport_HeartRateActivity_bottom">
				本报告仅为健康保样参考，不得作为临床诊断用途。
			</view>
		</view>
		
		<!-- 十大熵值 -->
		<view class="AnalysisReport_Entropy" v-for="(item, index) in EntropyList.data" :key="index">
			<view class="AnalysisReport_Entropy_title">
				{{EntropyList.title[0]}}
			</view>
			<view class="AnalysisReport_Entropy_button">
				{{EntropyList.title[1]}}
			</view>
			<view class="AnalysisReport_Entropy_image">
				<image :src="item.report.image" mode=""></image>
				<text>{{item.report.title}}</text>
			</view>
			<view class="AnalysisReport_Entropy_button">
				{{EntropyList.title[2]}}
			</view>
			<view class="AnalysisReport_Entropy_content">
				{{item.report.text}}
			</view>
			<view class="AnalysisReport_Entropy_list" v-for="(items, indexs) in item.factor" :key="indexs">
				<text>{{items.organ}}</text>
				<view>{{items.related}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reportData: {
					score: ''
				},
				userData: {},
				MainSystemList: [],
				HeartRateActivityList: [],
				EntropyList: []
			};
		},
		onLoad() {
			this._getAnalysisReport()
		},
		methods:{
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
				})
			},
			// 获取购物车
			_getAnalysisReport() {
				 uni.showLoading({
					title: '加载中',
				 });
				this.$member.post('Order/analysis_report', {}).then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.reportData = res.data.data.reportData
						this.userData = res.data.data.userData
						this.MainSystemList = res.data.data.tenData
						this.HeartRateActivityList = res.data.data.expressionData
						this.EntropyList = res.data.data.entropyData
					} else {
						 uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						 })
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.AnalysisReport {
		padding: 20rpx 4.27% 0;
		background: #F8F8FA;
		min-height: 100vh;
		padding-bottom: 100rpx;
		.AnalysisReport_parameter {
			padding: 60rpx 40rpx;
			width: 100%;
			background: #FFFFFF;
			border-radius: 16rpx;
			.AnalysisReport_parameter_top {
				margin-bottom: 50rpx;
				height: 328rpx;
			width: 100%;
				position: relative;
				.img {
					// background-image: linear-gradient(153deg, #68B74D 0%, #47972B 95%);
					position: absolute;
					left: calc(50% - 196rpx);
					top: 0;
					width: 382rpx;
					height: 328rpx;
				}
				.box {
					position: absolute;
					left: calc(50% - 196rpx);
					top: 0;
					width: 382rpx;
					height: 328rpx;
					padding-top: 70rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-wrap: wrap;
					.text1 {
						text-align: center;
						font-size: 30rpx;
						font-weight: 400;
						color: #24252A;
						line-height: 42rpx;
					}
					.text2 {
						text-align: center;
						font-size: 88rpx;
						font-family: OPPOSans-H, OPPOSans;
						font-weight: normal;
						color: #68B74D;
						line-height: 140rpx;
						text {
							font-size: 26rpx;
							font-weight: 400;
							color: #68B74D;
							line-height: 36rpx;
						}
					}
				}
			}
			.AnalysisReport_parameter_content {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.AnalysisReport_parameter_content_left {
					font-size: 30rpx;
					font-weight: 400;
					color: #828282;
					line-height: 58rpx;
				}
				.AnalysisReport_parameter_content_right {
					font-size: 30rpx;
					font-weight: 400;
					color: #131F2B;
					line-height: 58rpx;
				}
			}
		}
		.AnalysisReport_MainSystem {
			margin: 24rpx 0;
			padding: 20rpx 30rpx;
			width: 100%;
			background: #FFFFFF;
			border-radius: 16rpx;
			.AnalysisReport_MainSystem_top {
				width: 100%;
				height: 80rpx;
				background: #68B74D;
				border-radius: 10rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 80rpx;
				text-align: center;
			}
			.AnalysisReport_MainSystem_content {
				padding: 20rpx 0;
				border-bottom: 2rpx solid #EFEFEF;
				display: flex;
				align-items: center;
				.left {
					width: 176rpx;
					height: 176rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				.right {
					margin-left: 16rpx;
					width: calc(100% - 160rpx);
					.right_title {
						display: block;
						font-size: 30rpx;
						font-weight: 500;
						color: #24252A;
						line-height: 42rpx;
					}
					.right_text {
						margin-top: 12rpx;
						font-size: 24rpx;
						font-weight: 300;
						color: #828282;
						line-height: 38rpx;
					}
				}
			}
			.AnalysisReport_MainSystem_content:last-child {
				border-bottom: none;
			}
		}
		.AnalysisReport_HeartRateActivity {
			margin: 24rpx 0;
			padding: 20rpx 30rpx;
			width: 100%;
			background: #FFFFFF;
			border-radius: 16rpx;
			.AnalysisReport_HeartRateActivity_top {
				margin-bottom: 28rpx;
				width: 100%;
				height: 80rpx;
				background: #68B74D;
				border-radius: 10rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 80rpx;
				text-align: center;
			}
			.AnalysisReport_HeartRateActivity_center {
				.center {
					padding: 20rpx 0;
					border-bottom: 2rpx solid #EFEFEF;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.text {
						font-size: 30rpx;
						font-weight: 500;
						color: #828282;
						line-height: 42rpx;
					}
					.view {
						display: flex;
						align-items: center;
						image {
							margin-right: 28rpx;
							width: 38rpx;
							height: 38rpx;
						}
						text {
							font-size: 30rpx;
							font-weight: 400;
							color: #24252A;
							line-height: 42rpx;
						}
					}
				}
				.center:last-child {
					border-bottom: none;
				}
			}
			.AnalysisReport_HeartRateActivity_bottom {
				padding: 12rpx 0 26rpx;
				text-align: center;
				font-size: 24rpx;
				font-weight: 300;
				color: #FB861E;
				line-height: 34rpx;
			}
		}
		.AnalysisReport_Entropy {
			margin-top: 24rpx;
			padding: 30rpx;
			width: 100%;
			background: #FFFFFF;
			border-radius: 16rpx;
			.AnalysisReport_Entropy_title {
				font-size: 30rpx;
				font-weight: 500;
				color: #68B74D;
				line-height: 48rpx;
				margin-bottom: 60rpx;
			}
			.AnalysisReport_Entropy_button {
				width: 100%;
				height: 80rpx;
				background: #68B74D;
				border-radius: 10rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 80rpx;
				text-align: center;
			}
			.AnalysisReport_Entropy_image {
				padding: 44rpx 0;
				text-align: center;
				image {
					width: 240rpx;
					height: 240rpx;
				}
				text {
					display: block;
					font-size: 30rpx;
					font-weight: 500;
					color: #24252A;
					line-height: 42rpx;
				}
			}
			.AnalysisReport_Entropy_content {
				padding: 24rpx 0;
				font-size: 24rpx;
				font-weight: 300;
				color: #828282;
				line-height: 40rpx;
			}
			.AnalysisReport_Entropy_list {
				padding: 20rpx 0;
				border-bottom: 2rpx solid #EFEFEF;
				text {
					font-size: 26rpx;
					font-weight: 400;
					color: #828282;
					line-height: 36rpx;
				}
				view {
					margin-top: 8rpx;
					font-size: 26rpx;
					font-weight: bold;
					color: #24252A;
					line-height: 36rpx;
				}
			}
			.AnalysisReport_Entropy_list:last-child {
				border-bottom: none;
			}
		}
	}
</style>
