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
				<input class="MemberCreateManager_box_input_input" v-if="!popupStatus" type="text" value="" placeholder="请输入您的姓名" />
				<text class="MemberCreateManager_box_input_input" v-if="popupStatus"></text>
			</view>
			<view class="MemberCreateManager_box_border"></view>
			<view class="MemberCreateManager_box_input">
				<view class="MemberCreateManager_box_input_label">
					<image class="MemberCreateManager_box_input_label_image" src="../static/image/MemberCreateManagerB.png" mode=""></image>
					<text class="MemberCreateManager_box_input_label_text">电话</text>
				</view>
				<input class="MemberCreateManager_box_input_input" v-if="!popupStatus" type="number" value="" placeholder="请输入您的电话" />
				<text class="MemberCreateManager_box_input_input" v-if="popupStatus"></text>
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
				<input class="MemberCreateManager_box_input_input" type="text" value="" v-if="!popupStatus" disabled v-model="Birthday" placeholder="请选择您的出生日" @click="openCalendar()" />
				<text class="MemberCreateManager_box_input_input" v-if="popupStatus">{{Birthday}}</text>
			</view>
		</view>
		<!-- 身高  体重 -->
		<view class="MemberCreateManager_box">
			<view class="MemberCreateManager_box_input">
				<view class="MemberCreateManager_box_input_label">
					<image class="MemberCreateManager_box_input_label_image" src="../static/image/MemberCreateManagerE.png" mode=""></image>
					<text class="MemberCreateManager_box_input_label_text">身高</text>
				</view>
				<input class="MemberCreateManager_box_input_input" type="text" value="" v-if="!popupStatus" placeholder="请输入您的身高" />
				<text class="MemberCreateManager_box_input_input" v-if="popupStatus"></text>
			</view>
			<view class="MemberCreateManager_box_border"></view>
			<view class="MemberCreateManager_box_input">
				<view class="MemberCreateManager_box_input_label">
					<image class="MemberCreateManager_box_input_label_image" src="../static/image/MemberCreateManagerF.png" mode=""></image>
					<text class="MemberCreateManager_box_input_label_text">体重</text>
				</view>
				<input class="MemberCreateManager_box_input_input" type="number" value="" v-if="!popupStatus" placeholder="请输入您的体重" />
				<text class="MemberCreateManager_box_input_input" v-if="popupStatus"></text>
			</view>
		</view>
		<!-- 备注 -->
		<view class="MemberCreateManager_box">
			<view class="MemberCreateManager_box_input">
				<view class="MemberCreateManager_box_input_label">
					<image class="MemberCreateManager_box_input_label_image" src="../static/image/MemberCreateManagerG.png" mode=""></image>
					<text class="MemberCreateManager_box_input_label_text">备注</text>
				</view>
				<textarea class="MemberCreateManager_box_input_textarea" maxlength="-1" v-if="!popupStatus && !calendarStatus" placeholder="请输入您的备注" />
				<text class="MemberCreateManager_box_input_textarea" v-if="popupStatus || calendarStatus"></text>
			</view>
		</view>
		<view class=MemberCreateManager_button @click="submit()">
			提交
		</view>
		
		<uni-calendar :insert="false" :lunar="true" ref="calendar" @close="close" @confirm="confirm" />
		<view class="MemberCreateManager_popup" v-if="popupStatus">
			<view class="MemberCreateManager_popup_box">
				<image class="MemberCreateManager_popup_box_image" src="../static/image/success.png" mode=""></image>
				<text class="MemberCreateManager_popup_box_title">提交成功！</text>
				<text class="MemberCreateManager_popup_box_content">已收到您的需求，本公司将于近日指派专人与您联系</text>
				<view class="MemberCreateManager_popup_box_button" @click="popupStatus = false">确定</view>
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
				Birthday: ''
			};
		},
		methods:{
			statusClick(value) {
				if (value == 1) {
					this.status = true
					this.statuss = false
				} else {
					this.status = false
					this.statuss = true
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
				this.Birthday = e.fulldate
			},
			submit() {
				this.popupStatus = true
			}
		}
	}
</script>

<style lang="less">
.MemberCreateManager {
	padding: 0 4.27%;
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
		margin-bottom: 78rpx;
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
