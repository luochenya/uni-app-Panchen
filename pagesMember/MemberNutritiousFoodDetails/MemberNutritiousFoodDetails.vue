<template>
	<view class="MemberNutritiousFoodDetails">
		<image class="MemberNutritiousFoodDetails_image" :src="url" @longpress="toSave()" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ""
			};
		},
		onLoad:function(option){
			this.url = this.$imgUrl + option.edm
		},
		methods:{
			toSave() {
				uni.showModal({
					title: '图片保存',
					content: '确定要保存图片吗',
					success: e => {
						if (e['confirm']) {
							this.save();
						}
					}
				});
			},
			save() {
				uni.getImageInfo({
					src: this.url,
					success: function(image) {
						uni.saveImageToPhotosAlbum({
							filePath: image.path,
							success: function() {
								console.log('save success');
								uni.showToast({
									title: '图片保存成功',
									icon: 'none',
									duration: 2200
								});
							}
						});
					}
				});
			}
		}
	}
</script>

<style lang="less">
.MemberNutritiousFoodDetails {
	padding: 60rpx 4.27%;
	.MemberNutritiousFoodDetails_image {
		width: 100%;
		height: 838rpx;
	}
}
</style>
