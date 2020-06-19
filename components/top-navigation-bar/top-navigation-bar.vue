<template>
	<view>
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<view class="tabNavBar">
			<view class="tabNavBars">
				<image src="../../static/logo.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "topNavigationBar",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>

.status_bar {  
    height: var(--status-bar-height);
    width: 100%;  
    background-color: #FFFFFF;  
}  
.top_view {  
    height: var(--status-bar-height);  
    width: 100%;  
    position: fixed;  
    background-color: #FFFFFF;  
    top: 0;  
    z-index: 999;  
}
.tabNavBar {
	background-color: #FFFFFF;  
	width: 100%;
	height: 100rpx;
	.tabNavBars {
		position: fixed;  
		/* 状态栏的高度 */
		top: var(--status-bar-height);
		z-index: 999;  
		background-color: #FFFFFF;  
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		image {
			width: 70rpx;
			height: 66rpx;
			margin-left: 32rpx;
		}
	}
}
</style>
