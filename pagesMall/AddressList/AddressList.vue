<template>
	<view class="AddressList">
		<!-- 顶部导航 -->
		<top-navigation :type="2" :backgroundColor="'#F8F8FA'" :title="'管理收货地址'" @returnClick="returnClick"></top-navigation>
		
		<!-- 无地址列表 -->
		<view class="AddressList_null" v-if="!dataList || !dataList.length">
			<view class="">
				<image src="../../static/mallImg/AddressListNull.png" mode=""></image>
				<text>还没有地址，去添加一个吧</text>
			</view>
		</view>
		<!-- 地址列表 -->
		<view class="AddressList_list" v-for="(item, index) in dataList" :key="index" :class="selectAddrStatus == index ? 'AddressList_listActive' : ''" @click="selectAddrClick(index)">
			<view class="AddressList_list_top">
				<text>{{item.name}}</text>
				<text>{{item.phone}}</text>
			</view>
			<view class="AddressList_list_addr">
				{{item.addr}}
			</view>
			<view class="AddressList_list_bottom">
				<view class="left" @click.stop="defaultAddrClick(index)">
					<image v-if="item.type == 0" src="../../static/mallImg/couponDefault.png" mode=""></image>
					<image v-if="item.type == 1" src="../../static/mallImg/couponSelect.png" mode=""></image>
					默认地址
				</view>
				<view class="right" @click.stop="deleteAddrClick(item)">
					<image src="../../static/mallImg/addrDetele.png" mode=""></image>
					删除
				</view>
			</view>
		</view>
		<!-- 操作按钮 -->
		<view class="AddressList_button">
			<view class="AddressList_button1" @click="addAddress()">
				新增地址
			</view>
			<view class="AddressList_button2" @click="weiAddress()">
				使用微信地址
			</view>
		</view>
		<!-- 删除地址弹窗 -->
		<view class="AddressList_delete" v-if="deteleStatus">
			<view class="AddressList_delete_box">
				<image src="../../static/mallImg/AddrDelete.png" mode=""></image>
				<text class="text1">确定删除</text>
				<text class="text2">如需再次使用地址，需重新新增</text>
				<view class="view">
					<view class="view_left" @click="deteleStatus = false">
						取消
					</view>
					<view class="view_right" @click="deleteClick()">
						确定
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				deteleStatus: false,
				selectAddrStatus: 0,
				dataList: [
					{
						name: "赵霞霞",
						phone: "19983238887",
						addr: "北京市朝阳区奥运村街道洛克时代B座1705",
						type: 1
					},
					{
						name: "赵霞霞",
						phone: "19983238887",
						addr: "北京市朝阳区奥运村街道洛克时代B座1705",
						type: 0
					},
					{
						name: "赵霞霞",
						phone: "19983238887",
						addr: "北京市朝阳区奥运村街道洛克时代B座1705",
						type: 0
					}
				],
				dataForm: {
					name: "",
					phone: "",
					addr: ""
				}
			};
		},
		methods: {
			// 返回上一页
			returnClick() {
				uni.redirectTo({
					url: '../ShoppingCart/ShoppingCart'
				})
			},
			// 选择地址
			selectAddrClick(index) {
				this.selectAddrStatus = index
				this.dataForm = this.dataList[index]
				uni.redirectTo({
					url: '../ShoppingCart/ShoppingCart?data=' + JSON.stringify(this.dataForm)
				})
			},
			// 设置默认地址
			defaultAddrClick(index) {
				if (this.dataList[index].type == 1) {
					return false
				}
				this.dataList.forEach((item, indexs) => {
					this.dataList[indexs].type = 0
				})
				this.dataList[index].type = 1
			},
			// 打开删除弹窗
			deleteAddrClick(item) {
				console.log(item)
				this.deteleStatus = true
			},
			// 确定删除地址
			deleteClick() {
				this.deteleStatus = false
			},
			// 新增地址
			addAddress() {
				uni.navigateTo({
					url: '../AddAddress/AddAddress'
				})
			},
			// 使用微信地址
			weiAddress() {
				let that = this
				uni.chooseAddress({
				  success(res) {
					that.dataForm.name = res.userName
					that.dataForm.phone = res.telNumber
					that.dataForm.addr = res.provinceName + res.cityName + res.countyName + res.detailInfo
					uni.navigateTo({
						url: '../ShoppingCart/ShoppingCart?data=' + JSON.stringify(that.dataForm)
					})
				  }
				})
			}
		}
	}
</script>

<style lang="scss">
.AddressList {
	padding: 20rpx 4.27% 200rpx;
	background: #F8F8FA;
	min-height: 100vh;
	.AddressList_null {
		padding-top: 20vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		view {
			text-align: center;
			image {
				width: 262rpx;
				height: 220rpx;
			}
			text {
				display: block;
				margin-top: 90rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: #24252A;
				line-height: 42rpx;
			}
		}
	}
	.AddressList_list {
		border: 2rpx solid #FFFFFF;
		margin-bottom: 24rpx;
		padding: 28rpx;
		width: 100%;
		background: #FFFFFF;
		border-radius: 16rpx;
		.AddressList_list_top {
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;
			font-weight: 400;
			color: #24252A;
			line-height: 40px;
		}
		.AddressList_list_addr {
			margin: 8rpx 0 20rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #24252A;
			line-height: 40rpx;
		}
		.AddressList_list_bottom {
			padding-top: 20rpx;
			border-top: 2rpx solid #EFEFEF;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 24rpx;
			font-weight: 400;
			color: #9FA0A2;
			line-height: 34rpx;
			.left {
				display: flex;
				align-items: center;
				image {
					margin-right: 12rpx;
					width: 28rpx;
					height: 28rpx;
				}
			}
			.right {
				display: flex;
				align-items: center;
				image {
					margin-right: 8rpx;
					height: 22rpx;
					width: 20rpx;
				}
			}
		}
	}
	.AddressList_listActive {
		border: 2rpx solid #FB861E;
	}
	.AddressList_button {
		padding: 8rpx 4.27%;
		width: 100%;
		background: #F8F8FA;
		position: fixed;
		left: 0;
		bottom: 0;
		.AddressList_button1 {
			width: 100%;
			height: 88rpx;
			background: #68B74D;
			border-radius: 54rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 88rpx;
			text-align: center;
		}
		.AddressList_button2 {
			padding: 28rpx 0;
			font-size: 28rpx;
			font-weight: 400;
			color: #68B74D;
			line-height: 40rpx;
			text-align: center;
			text-decoration: underline;
		}
	}
	.AddressList_delete {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		.AddressList_delete_box {
			padding: 60rpx;
			width: 590rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			text-align: center;
			image {
				width: 136rpx;
				height: 152rpx;
			}
			.text1 {
				margin: 20rpx 0 14rpx;
				display: block;
				font-size: 40rpx;
				font-weight: 500;
				color: #131F2B;
				line-height: 56rpx;
			}
			.text2 {
				font-size: 26rpx;
				font-weight: 400;
				color: #828282;
				line-height: 36rpx;
			}
			.view {
				margin-top: 60rpx;
				display: flex;
				justify-content: space-between;
				.view_left {
					width: 208rpx;
					height: 88rpx;
					background: rgba(104,183,77,0.2);
					border-radius: 54rpx;
					font-size: 30rpx;
					font-weight: 400;
					color: #68B74D;
					line-height: 88rpx;
				}
				.view_right {
					width: 208rpx;
					height: 88rpx;
					background: #68B74D;
					border-radius: 54rpx;
					font-size: 30rpx;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 88rpx;
				}
			}
		}
	}
}
</style>
