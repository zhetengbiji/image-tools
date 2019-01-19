<template>
	<view class="content">
		<button @click="chooseImage" type="primary">选择图片</button>
		<view>base64:</view>
		<view class="base64">{{base64}}</view>
		<view v-if="base64">
			<button @click="toPath" type="primary">转为路径</button>
			<view>path:</view>
			<view>{{path}}</view>
		</view>
	</view>
</template>

<script>
	import {
		pathToBase64,
		base64ToPath,
	} from '../../../../index.js'

	export default {
		data() {
			return {
				title: 'Hello',
				base64: '',
				path: ''
			}
		},
		onLoad() {

		},
		methods: {
			chooseImage() {
				uni.chooseImage({
					success: res => {
						pathToBase64(res.tempFilePaths[0])
							.then(base64 => {
								console.log(base64)
								this.base64 = base64
							})
							.catch(error => {
								console.error(error)
							})
					}
				})
			},
			toPath() {
				base64ToPath(this.base64)
					.then(path => {
						console.log(path)
						this.path = path
					})
					.catch(error => {
						console.error(error)
					})
			}
		}
	}
</script>

<style>
	.content {
		padding: 20px;
	}

	.base64 {
		width: 100%;
		word-break: break-all;
		max-height: 200px;
		overflow: hidden;
	}
</style>
