<template>
	<view class="MemberLatestNews">
		<view class="member">
			<!-- 轮播图 -->
			<uni-swiper-dot :info="info" :current="current" field="content">
				<swiper @change="change" style="height: 344rpx;" autoplay="true" circular="true">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="memberImgStyle">
							<image :src="imgUrl + item.imgs" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="MemberLatestNews_box" v-for="(item, index) in dataFormList" :key="index" @click="toMemberLatestNewsContent(item)">
			<text class="MemberLatestNews_box_title">{{item.title}}</text>
			<text class="MemberLatestNews_box_time">{{item.created_at}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				imgUrl: this.$imgUrl,
				info: '',
				dataFormList: []
			};
		},
		onLoad:function(){
			this._getMembersNewsBannerList()
			this._getMembersNewsList()
		},
		methods: {
			change (e) {
				this.current = e.detail.current;
			},
			// 获取banner图
			_getMembersNewsBannerList () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$member.post('Store/get_members_news_banner_list').then(res => {
					// 关闭加载动画
					uni.hideLoading();
					if (res.data.code == 200) {
						this.info = res.data.data
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
			// 获取列表
			_getMembersNewsList () {
				 // 加载动画
				 uni.showLoading({
					 title: '加载中'
				 });
				this.$member.post('Store/get_members_news_list').then(res => {
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
					// console.log(err)
				})
			},
			toMemberLatestNewsContent(item) {
				var items = JSON.stringify(item)
				uni.navigateTo({
					url: '../../pagesMember/MemberLatestNewsContent/MemberLatestNewsContent?items=' + items 
				})
			}
		}
	}
</script>

<style lang="scss">
.MemberLatestNews {
	padding: 0 4.27%;
	// 轮播图
	.memberImgStyle {
		height: 344rpx;
		width: 100%;
		color: #ffffff;
		margin: 0 auto;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.MemberLatestNews_image {
		width: 100%;
		height: 262rpx;
		margin: 16rpx 0;
	}
	.MemberLatestNews_box {
		width: 100%;
		border-bottom: 2rpx solid #D8D8D8;
		.MemberLatestNews_box_title {
			font-size:30rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(19,31,43,1);
			line-height:48rpx;
			padding: 34rpx 0;
			display: block;
		}
		.MemberLatestNews_box_time {
			display: block;
			font-size:22rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(130,130,130,1);
			line-height:80rpx;
		}
	}
}
</style>
