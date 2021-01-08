<template>
	<view class="" :style="{height: barHeight + 'px'}">
		<view class="topNavigation" :style="{height: barHeight + 'px',backgroundColor: backgroundColor}">
			<view class="topNavigation_image" @click="returnBtn">
				<image v-if="type == 1" src="../../static/mallImg/topReturns.png" mode=""></image>
				<image v-if="type == 2" src="../../static/mallImg/topReturn.png" mode=""></image>
			</view>
			<view class="topNavigation_title" :style="{color: titleColor}">{{title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			type: Number,
			backgroundColor: String,
			title: String,
			titleColor: String
		},
		data() {
			return {
				menu: this.$menu,
				statusHeight: this.$statusHeight,
				barHeight: this.$barHeight,
			};
		},
		methods:{
			returnBtn() {
				this.$emit('returnClick')
			}
		}
	}
</script>

<style lang="scss">
.topNavigation {
	padding: var(--status-bar-height) 4.27% 0;
    width: 100%;
    // background-color: #FFFFFF;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;
	.topNavigation_image {
		position: absolute;
		left: 4.27%;
		top: var(--status-bar-height);
		width: 5%;
		height: calc(100% - var(--status-bar-height));
		display: flex;
		align-items: center;
		image {
			width: 18rpx;
			height: 36rpx;
		}
	}
	.topNavigation_title {
		font-size: 34rpx;
		font-family: SFProDisplay-Medium, SFProDisplay;
		font-weight: 500;
		color: #000000;
		line-height: 40rpx;
	}
}
</style>
