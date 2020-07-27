<template>
	<view class="MemberCreateManager">
		<image class="MemberCreateManager_image" src="../static/image/MemberCreateManager.png" mode=""></image>
		<!-- 姓名  电话 -->
		<view class="MemberCreateManager_box">
			<view class="MemberCreateManager_box_input">
				<view class="MemberCreateManager_box_input_label">
					<image class="MemberCreateManager_box_input_label_image" src="../static/image/MemberCreateManagerA.png" mode=""></image>
					<text class="MemberCreateManager_box_input_label_text">姓名</text>
				</view>
				<input class="MemberCreateManager_box_input_input" v-if="!popupStatus" type="text" v-model="name" placeholder="请输入您的姓名" />
				<text class="MemberCreateManager_box_input_input" v-if="popupStatus">{{name}}</text>
			</view>
			<view class="MemberCreateManager_box_border"></view>
			<view class="MemberCreateManager_box_input">
				<view class="MemberCreateManager_box_input_label">
					<image class="MemberCreateManager_box_input_label_image" src="../static/image/MemberCreateManagerB.png" mode=""></image>
					<text class="MemberCreateManager_box_input_label_text">电话</text>
				</view>
				<input class="MemberCreateManager_box_input_input" v-if="!popupStatus" type="number" v-model="phone" placeholder="请输入您的电话" />
				<text class="MemberCreateManager_box_input_input" v-if="popupStatus">{{phone}}</text>
			</view>
		</view>
		<!-- 性别  出生日 -->
		<view class="MemberCreateManager_box">
			<view class="MemberCreateManager_box_input">
				<view class="MemberCreateManager_box_input_label">
					<image class="MemberCreateManager_box_input_label_image" src="../static/image/MemberCreateManagerC.png" mode=""></image>
					<text class="MemberCreateManager_box_input_label_text">性别</text>
				</view>
				<view class="MemberCreateManager_box_input_rideo">
					<view class="MemberCreateManager_box_input_rideo_view" @click="statusClick(1)">
						<image class="MemberCreateManager_box_input_rideo_view_image" v-if="status" src="../static/image/MemberCreateManagerTrue.png" mode=""></image>
						<image class="MemberCreateManager_box_input_rideo_view_image" v-if="!status" src="../static/image/MemberCreateManagerFalse.png" mode=""></image>
						男
					</view>
					<view class="MemberCreateManager_box_input_rideo_view" @click="statusClick(2)">
						<image class="MemberCreateManager_box_input_rideo_view_image" v-if="statuss" src="../static/image/MemberCreateManagerTrue.png" mode=""></image>
						<image class="MemberCreateManager_box_input_rideo_view_image" v-if="!statuss" src="../static/image/MemberCreateManagerFalse.png" mode=""></image>
						女
					</view>
				</view>
			</view>
			<view class="MemberCreateManager_box_border"></view>
			<view class="MemberCreateManager_box_input">
				<view class="MemberCreateManager_box_input_label">
					<image class="MemberCreateManager_box_input_label_image" src="../static/image/MemberCreateManagerD.png" mode=""></image>
					<text class="MemberCreateManager_box_input_label_text">出生日</text>
				</view>
				<input class="MemberCreateManager_box_input_input" type="text" v-if="!popupStatus" disabled v-model="birthday" placeholder="请选择您的出生日" @click="openCalendar()" />
				<text class="MemberCreateManager_box_input_input" v-if="popupStatus">{{birthday}}</text>
			</view>
		</view>
		<!-- 身高  体重 -->
		<view class="MemberCreateManager_box">
			<view class="MemberCreateManager_box_input">
				<view class="MemberCreateManager_box_input_label">
					<image class="MemberCreateManager_box_input_label_image" src="../static/image/MemberCreateManagerE.png" mode=""></image>
					<text class="MemberCreateManager_box_input_label_text">身高</text>
				</view>
				<input class="MemberCreateManager_box_input_input" v-if="!popupStatus" type="number" v-model="stature" placeholder="请输入您的身高" />
				<text class="MemberCreateManager_box_input_input" v-if="popupStatus">{{stature}}</text>
			</view>
			<view class="MemberCreateManager_box_border"></view>
			<view class="MemberCreateManager_box_input">
				<view class="MemberCreateManager_box_input_label">
					<image class="MemberCreateManager_box_input_label_image" src="../static/image/MemberCreateManagerF.png" mode=""></image>
					<text class="MemberCreateManager_box_input_label_text">体重</text>
				</view>
				<input class="MemberCreateManager_box_input_input" v-if="!popupStatus" type="number" v-model="weight" placeholder="请输入您的体重" />
				<text class="MemberCreateManager_box_input_input" v-if="popupStatus">{{weight}}</text>
			</view>
		</view>
		<!-- 备注 -->
		<view class="MemberCreateManager_box">
			<view class="MemberCreateManager_box_input">
				<view class="MemberCreateManager_box_input_label">
					<image class="MemberCreateManager_box_input_label_image" src="../static/image/MemberCreateManagerG.png" mode=""></image>
					<text class="MemberCreateManager_box_input_label_text">备注</text>
				</view>
				<textarea class="MemberCreateManager_box_input_textarea" maxlength="-1" v-if="!popupStatus && !calendarStatus" v-model="remark" placeholder="请输入您的备注" />
				<text class="MemberCreateManager_box_input_textarea" v-if="popupStatus || calendarStatus">{{remark}}</text>
			</view>
		</view>
		<view class=MemberCreateManager_button @click="submit()">
			提交
		</view>
		
		<uni-calendar :insert="false" :lunar="false" ref="calendar" :end-date="dataTime" @close="close" @confirm="confirm" />
		<view class="MemberCreateManager_popup" v-if="popupStatus">
			<view class="MemberCreateManager_popup_box">
				<image class="MemberCreateManager_popup_box_image" src="../static/image/success.png" mode=""></image>
				<text class="MemberCreateManager_popup_box_title">提交成功！</text>
				<text class="MemberCreateManager_popup_box_content">已收到您的需求，本公司将于近日指派专人与您联系</text>
				<view class="MemberCreateManager_popup_box_button" @click="toSkip()">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				popupStatus: false,
				calendarStatus: false,
				status: true,
				statuss: false,
				name: '',
				phone: '',
				sex: '男',
				birthday: '',
				stature: '',
				weight: '',
				remark: '',
				dataTime: ''
			};
		},
		mounted() {
			this.dataTime = this.getNowFormatDate()
		},
		methods:{
			// 获取当前时间
			getNowFormatDate() {
				var date = new Date();
				var seperator1 = "-";
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var strDate = date.getDate();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				var currentdate = year + seperator1 + month + seperator1 + strDate;
				return currentdate;
			},
			toSkip() {
				this.popupStatus = false
				uni.redirectTo({
					url: '../MemberDeepButler/MemberDeepButler'
				})
			},
			statusClick(value) {
				if (value == 1) {
					this.status = true
					this.statuss = false
					this.sex = '男'
				} else {
					this.status = false
					this.statuss = true
					this.sex = '女'
				}
			},
			openCalendar () {
				this.$refs.calendar.open();
				this.calendarStatus = true;
			},
			close() {
				this.calendarStatus = false
			},
			confirm(e) {
				this.birthday = e.fulldate
			},
			submit() {
				if (this.name == '') {
					uni.showToast({
						icon: 'none',
						title: '姓名不能为空',
						duration: 1000
					})
					return false
				}
				if (this.phone == '') {
					uni.showToast({
						icon: 'none',
						title: '电话不能为空',
						duration: 1000
					})
					return false
				}
				if (this.birthday == '') {
					uni.showToast({
						icon: 'none',
						title: '出生日不能为空',
						duration: 1000
					})
					return false
				}
				if (this.stature == '') {
					uni.showToast({
						icon: 'none',
						title: '身高不能为空',
						duration: 1000
					})
					return false
				}
				if (this.weight == '') {
					uni.showToast({
						icon: 'none',
						title: '体重不能为空',
						duration: 1000
					})
					return false
				}
					 // 加载动画
					uni.showLoading({
						title: '提交中'
					});
					this.$member.post(
						'Store/insert_steward_material',
						'\r\n--XXX' +
						'\r\nContent-Disposition: form-data; name="name"' +
						'\r\n' +
						'\r\n' + this.name +
						'\r\n--XXX' +
						'\r\nContent-Disposition: form-data; name="phone"' +
						'\r\n' +
						'\r\n' + this.phone +
						'\r\n--XXX' +
						'\r\nContent-Disposition: form-data; name="sex"' +
						'\r\n' +
						'\r\n' + this.sex +
						'\r\n--XXX' +
						'\r\nContent-Disposition: form-data; name="birthday"' +
						'\r\n' +
						'\r\n' + this.birthday +
						'\r\n--XXX' +
						'\r\nContent-Disposition: form-data; name="stature"' +
						'\r\n' +
						'\r\n' + this.stature +
						'\r\n--XXX' +
						'\r\nContent-Disposition: form-data; name="weight"' +
						'\r\n' +
						'\r\n' + this.weight +
						'\r\n--XXX' +
						'\r\nContent-Disposition: form-data; name="remark"' +
						'\r\n' +
						'\r\n' + this.remark +
						'\r\n--XXX--').then(res => {
						// 关闭加载动画
						uni.hideLoading();
						if (res.data.code == 200) {
							this.popupStatus = true
						} else {
							 uni.showToast({
								icon: 'none',
								title: res.data.msg,
								duration: 2000
							 })
						}
					})
			}
		}
	}
</script>

<style lang="less">
.MemberCreateManager {
	padding: 0 4.27% 78rpx;
	background:rgba(248,248,250,1);
	.MemberCreateManager_popup {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		justify-items: center;
		align-items: center;
		background:rgba(0,0,0,0.3);
		.MemberCreateManager_popup_box {
			margin: 0 auto;
			width:590rpx;
			height:648rpx;
			background:rgba(255,255,255,1);
			border-radius:24rpx;
			.MemberCreateManager_popup_box_image {
				width: 134rpx;
				height: 134rpx;
				margin: 64rpx auto 32rpx;
				display: block;
			}
			.MemberCreateManager_popup_box_title {
				font-size:40rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:bold;
				color:rgba(19,31,43,1);
				line-height:56rpx;
				display: block;
				text-align: center;
			}
			.MemberCreateManager_popup_box_content {
				display: block;
				width: 80%;
				margin: 32rpx auto 64rpx;
				font-size:30rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(130,130,130,1);
				line-height:48rpx;
			}
			.MemberCreateManager_popup_box_button {
				width:320rpx;
				height:88rpx;
				background:rgba(104,183,77,1);
				border-radius:54rpx;
				font-size:30rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:bold;
				color:rgba(255,255,255,1);
				line-height:80rpx;
				text-align: center;
				margin: 0 auto;
			}
		}
	}
	.MemberCreateManager_image {
		width: 100%;
		height: 234rpx;
		margin-bottom: 32rpx;
	}
	.MemberCreateManager_box {
		margin-bottom: 32rpx;
		width: 100%;
		min-height:192rpx;
		background:rgba(255,255,255,1);
		box-shadow:4rpx 14rpx 14rpx -10rpx rgba(239,239,239,0.52);
		border-radius:8rpx;
		.MemberCreateManager_box_border {
			height: 2rpx;
			width: 91.47%;
			background: #D8D8D8;
			margin: 0 auto;
		}
		.MemberCreateManager_box_input {
			width: 100%;
			min-height:96rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.MemberCreateManager_box_input_label {
				height: 96rpx;
				display: flex;
				justify-items: center;
				align-items: center;
				width: 40%;
				.MemberCreateManager_box_input_label_image {
					width: 50rpx;
					height: 50rpx;
					margin: 0 20rpx;
				}
				.MemberCreateManager_box_input_label_text {
					display: block;
					font-size:28rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(19,31,43,1);
					line-height:96rpx;
				}
			}
			.MemberCreateManager_box_input_input {
				width: 45%;
				padding-right: 32rpx;
				height: 96rpx;
			}
			.MemberCreateManager_box_input_rideo {
				width: 45%;
				display: flex;
				justify-content: space-around;
				padding-right: 32rpx;
				height: 96rpx;
				.MemberCreateManager_box_input_rideo_view {
					display: flex;
					justify-items: center;
					align-items: center;
					.MemberCreateManager_box_input_rideo_view_image {
						width: 28rpx;
						height: 28rpx;
						margin-right: 6rpx;
					}
				}
			}
			.MemberCreateManager_box_input_textarea {
				display: block;
				width: 90%;
				padding: 20rpx;
				height: 113rpx;
				margin: 0 auto 20rpx;
				background:rgba(248,248,250,1);
				border-radius:4rpx;
			}
		}
	}
	.MemberCreateManager_button {
		margin-top: 54rpx;
		// margin-bottom: 78rpx; 
		height:88rpx;
		width: 100%;
		background:rgba(104,183,77,1);
		border-radius:54rpx;
		font-size:30rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		line-height:88rpx;
		text-align: center;
	}
}
</style>
