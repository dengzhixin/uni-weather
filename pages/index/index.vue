<template>
	<view class="containner">
		<view class="top">
			<view class="title">大坪小学</view>
			<view class="time">12:30pm</view>
			<view class="weather">
				<text class="temperature">14°C</text>
				<image class="weatherIcon" src="../../static/icons/weather_icon_1.svg"></image>
			</view>
			<text class="tip">今天有小雨，出门记得带伞哦</text>
			<view class="canvasBox">
				<canvas canvas-id="canvasTemperature" id="canvasTemperature" class="canvasTemperature" @touchstart="showChart"></canvas>
			</view>
		</view>

		<view class="list">
			<view class="list_item">

				<view class="left">
					<image class="weatherIcon" src="../../static/icons/weather_icon_1.svg"></image>
					<text class="weakday">Wenday</text>
				</view>
				<view class="right">
					<text class="min-temperature">28°C</text>
					<text class="max-temperature">30°C</text>
				</view>
			</view>
			<view class="list_item"></view>
			<view class="list_item"></view>
			<view class="list_item"></view>
			<view class="list_item"></view>
			<view class="list_item"></view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			let that = this
			uni.getLocation({
				type: 'wgs84',
				success(res) {
					console.log(res)
					that.showChart()
				}
			})
			

		},
		methods: {
			showChart() {
				let _self = this
				let chartData = {
					categories: ['星期一', '星期二', '星期三', '星期', '星期二', '星期二'],
					series: [{
						name: 'min',
						data: [22, 23, 25, 26, 28, 26],
						color: '#FFFFFF'
					}, {
						name: 'max',
						data: [30, 31, 32, 29, 29, 30],
						color: '#FFFFFF'
					}]
				}
				let canvasTemperature = new uCharts({
					$this: _self,
					canvasId: 'canvasTemperature',
					type: 'line',
					legend: {
						show: false
					},
					dataLabel: false,
					dataPointShape: false,
					padding:[0,0,0,0],
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						disabled: true,
						disableGrid: true
					},
					yAxis: {
						disabled: true,
						disableGrid: true
					},
					width: uni.upx2px(710),
					height: uni.upx2px(200),
					extra:{
						line:{
							type:'curve'
						}
					}
				});

			}
		}
	}
</script>

<style lang="scss">
	$primary-color:#4c8ce2;
	$light-color:#83c0f3;
	$text-color:#FFFFFF;
	$text--dark-color:#000000;
	$bg-color:#FFFFFF;
	$bg-dark-color:#F6F9FE;

	:not(not) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.containner {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		width: 100vw;
		height: 100vh;
		overflow: hidden;

		.top {
			width: 100%;
			background: linear-gradient($primary-color, $light-color);
			padding: 20rpx;
			text-align: center;
			color: $text-color;

			.title {
				font-size: 20pt;
			}

			.time {
				opacity: 0.6;
				font-size: 14pt;
			}

			.weather {
				display: flex;
				justify-content: space-around;
				align-items: center;

				.temperature {
					font-size: 40pt;
				}

				.weatherIcon {
					width: 300rpx;
					height: 300rpx;
					margin: 30rpx 0;
				}
			}

			.tip {
				font-size: 14pt;
				opacity: 0.6;
			}
			.canvasBox{
				width: 100%;
				height: 160upx;
				overflow: hidden;
				.canvasTemperature {
					width: 100%;
					height: 200upx;
					background-color: rgba(0, 0, 0, 0);
				}
			}
			
			
		}

		.list {
			width: 100%;
			flex: 1;
			overflow-y: scroll;

			.list_item {
				height: 150rpx;
				width: 100%;
				color: $text--dark-color;
				background-color: $bg-color;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx;

				.left {
					display: flex;
					align-items: center;

					.weatherIcon {
						width: 100rpx;
						height: 100rpx;
					}

					.weakday {
						padding-left: 40rpx;
					}
				}

				.right {
					.min-temperature {
						padding-right: 20rpx;
					}
				}


			}

			.list_item:nth-child(2n) {
				background-color: $bg-dark-color;
			}
		}
	}
</style>
