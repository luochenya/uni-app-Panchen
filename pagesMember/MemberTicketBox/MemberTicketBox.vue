<template>
	<view class="MemberTicketBox">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#FFFFFF'" :title="'票卷匣'" @returnClick="returnClick"></top-navigation>
		
		<view class="MemberTicketBox_top">
			<view :class="form.state ==1 ? 'active' : ''" @click="activeCLick(1)">
				未使用
			</view>
			<view :class="form.state == 2 ? 'active' : ''" @click="activeCLick(2)">
				已失效
			</view>
		</view>
		
		<!-- 空数据组件 -->
		<view class="MemberTicketBox_null" v-if="dataList.length == 0">
			<image src="../static/image/MemberTicketBoxNull.png" mode=""></image>
			<text v-if="form.state == 1">尚无未使用之票券</text>
			<text v-if="form.state == 2">尚无已失效之票券</text>
		</view>
		
		<view class="MemberTicketBox_content" v-for="(item, index) in dataList" :key="index">
			<view class="MemberTicketBox_content_left">
				<image :src="imgUrl + item.experience_imgs" mode=""></image>
			</view>
			<view class="MemberTicketBox_content_center"></view>
			<view class="MemberTicketBox_content_right">
				<text class="textTitle">{{item.experience_name}}</text>
				<text class="textContent">有效期限：{{item.experience_indate}}</text>
				<view class="button" v-if="form.state == 1" @click="openPopup(item.id)">
					使用
				</view>
				<view class="buttons" v-if="form.state == 2">
					失效
				</view>
			</view>
		</view>
		
		<!-- 弹窗 -->
		<view class="MemberTicketBox_popup" v-if="popupStatus">
			<view class="MemberTicketBox_popup_box">
				<image src="../static/image/MemberTicketBox2.png" mode=""></image>
				<text class="text1">确定使用</text>
				<text class="text2">
					经点击确定，即视同已于门市使用，该卷将立即失效，建议于门市人员协助下点击
				</text>
				<view class="button">
					<view class="buttonLeft" @click="popupStatus = false">取消</view>
					<view class="buttonRight" @click="popupSubmit()">确定</view>
				</view>
			</view>
		</view>
		
		<uni-load-more :status="status" :icon-size="14" :content-text="contentText" v-if="dataList.length > 0" />
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		components:{
			uniLoadMore
		},
		data() {
			return {
				imgUrl: this.$imgUrl,
				reload: false,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多~',
					contentrefresh: '加载中',
					contentnomore: '已经没有更多啦~'
				},
				total: 0,
				form: {
					offset: 1,
					limit: 10,
					state: 1
				},
				popupStatus: false,
				active: 0,
				dataList: [],
				experience_id: ""
			}
		},
		// watch:{
		// 	active:function() {
		// 		this.dataLists = []
		// 		this.dataList.forEach(item => {
		// 			if (item.type == 1 && this.active == 0) {
		// 				this.dataLists.push(item)
		// 			} else if (item.type == 2 && this.active == 1) {
		// 				this.dataLists.push(item)
		// 			}
		// 		})
		// 	}
		// },
		onLoad() {
			// this.dataList.forEach(item => {
			// 	if (item.type == 1) {
			// 		this.dataLists.push(item)
			// 	}
			// })
			this._getMembersExperienceList(1)
		},
		// 监听下拉事件
		onReachBottom() {
			if (this.totalCount > this.dataList.length) {
				this.status = 'loading';
				setTimeout(() => {
					this.form.offset++
					this._getMembersExperienceList(2);//执行的方法
				}, 1000)//这里我是延迟一秒在加载方法有个loading效果，如果接口请求慢的话可以去掉
			} else { //停止加载
				this.status = 'noMore'
			}
		},
		methods: {
			// 获取票卷列表
			_getMembersExperienceList (num) {
				 // 加载动画
				 if (num == 1) {
					 uni.showLoading({
					 	title: '加载中',
					 });
				 }
				this.$member.post('Order/get_members_experience_list', this.form).then(res => {
					// 关闭加载动画
					 if (num == 1) {
						uni.hideLoading();
					}
					if (res.data.code == 200) {
						this.total = res.data.data.total
						this.totalCount = res.data.data.total
						if (res.data.data.total > 0) {
							const dataMap = res.data.data.rows
							this.dataList = this.reload ? dataMap : this.dataList.concat(dataMap);
							this.reload = false;
						} else {
							this.dataList = [];
						}
						if (this.totalCount == this.dataList.length) {
							this.reload = false;
							this.status = 'noMore'
						}
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
			// 返回上一页
			returnClick() {
				uni.navigateBack({
					delta:1
				})
			},
			activeCLick(value) {
				this.form.state = value
				this.form.offset = 1
				this.reload = true
				this._getMembersExperienceList(1)
			},
			openPopup(id) {
				this.popupStatus = true
				this.experience_id = id
			},
			popupSubmit() {
				 // 加载动画
				 uni.showLoading({
					title: '加载中',
				 });
				this.$member.post('Order/use_members_experience', {experience_id: this.experience_id}).then(res => {
					// 关闭加载动画
					uni.hideLoading();
					 uni.showToast({
						icon: 'none',
						title: res.data.msg,
						duration: 2000
					 })
					if (res.data.code == 200) {
						this.popupStatus = false
						this.reload = true
						this._getMembersExperienceList(1)
					}
				}).catch(err => {
					// console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.MemberTicketBox {
	padding: 40rpx 4.27% 0;
	.MemberTicketBox_top {
		margin-bottom: 34rpx;
		padding: 10rpx;
		width: 100%;
		height: 80rpx;
		background: #68B74D;
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		view {
			width: 50%;
			height: 60rpx;
			background: #68B74D;
			border-radius: 8rpx;
			line-height: 60rpx;
			text-align: center;
			font-size: 30rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
		.active {
			font-weight: 500;
			color: #68B74D;
			background: #FFFFFF;
		}
	}
	
	.MemberTicketBox_null {
		padding-top: 200rpx;
		width: 100%;
		text-align: center;
		image {
			width: 212rpx;
			height: 220rpx;
		}
		text {
			display: block;
			margin-top: 34rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #24252A;
			line-height: 42rpx;
		}
	}
	
	.MemberTicketBox_content {
		margin-bottom: 24rpx;
		padding: 20rpx;
		width: 100%;
		height: 200rpx;
		background: #FFFFFF;
		box-shadow: 0px 10rpx 40rpx -2rpx #EFEFEF;
		display: flex;
		.MemberTicketBox_content_left {
			width: 160rpx;
			height: 160rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.MemberTicketBox_content_center {
			height: 100%;
			margin: 0 24rpx;
			border-right: 2rpx dashed #EFEFEF;
		}
		.MemberTicketBox_content_right {
			width: calc(100% - 206rpx);
			.textTitle {
				display: block;
				font-size: 32rpx;
				font-weight: 500;
				color: #24252A;
				line-height: 44rpx;
			}
			.textContent {
				margin: 4rpx 0 14rpx;
				font-size: 24rpx;
				font-weight: 300;
				color: #828282;
				line-height: 34rpx;
			}
			.button {
				margin-left: auto;
				width: 144rpx;
				height: 56rpx;
				background: #68B74D;
				border-radius: 28rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 56rpx;
				text-align: center;
			}
			.buttons {
				margin-left: auto;
				width: 144rpx;
				height: 56rpx;
				background: #F6F6F6;
				border-radius: 28rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #D2D2D2;
				line-height: 56rpx;
				text-align: center;
			}
		}
	}
	
	.MemberTicketBox_popup {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		.MemberTicketBox_popup_box {
			padding: 64rpx;
			width: 80%;
			height: 648rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			text-align: center;
			image {
				width: 152rpx;
				height: 152rpx;
			}
			.text1 {
				margin: 20rpx 0 8rpx;
				display: block;
				font-size: 40rpx;
				font-weight: 500;
				color: #131F2B;
				line-height: 56rpx;
			}
			.text2 {
				text-align: left;
				display: block;
				font-size: 26rpx;
				font-weight: 400;
				color: #828282;
				line-height: 40rpx;
			}
			.button {
				margin-top: 64rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.buttonLeft {
					width: 200rpx;
					height: 88rpx;
					background: rgba(104,183,77,0.2);
					border-radius: 54rpx;
					font-size: 30rpx;
					font-weight: 400;
					color: #68B74D;
					line-height: 88rpx;
					text-align: center;
				}
				.buttonRight {
					width: 200rpx;
					height: 88rpx;
					background: #68B74D;
					border-radius: 54rpx;
					font-size: 30rpx;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 88rpx;
					text-align: center;
				}
			}
		}
	}
}
</style>
