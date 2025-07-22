<script>
	import { onMount, onDestroy } from 'svelte';
	import { Chart, registerables } from 'chart.js';

	Chart.register(...registerables);

	export let chartId = 'chartjs-pie';
	export let title = 'Pie Chart';
	export let labels = [];
	export let data = [];
	export let backgroundColors = [];

	let chartInstance;

	onMount(() => {
		if (typeof window !== 'undefined') {
			const canvas = document.getElementById(chartId);
			if (canvas instanceof HTMLCanvasElement) {
				const ctx = canvas.getContext('2d');
				if (ctx) {
					chartInstance = new Chart(ctx, {
						type: 'pie',
						data: {
							labels,
							datasets: [{
								data,
								backgroundColor: backgroundColors,
								borderWidth: 1
							}]
						},
						options: {
							responsive: true,
							plugins: {
								title: {
									display: true,
									text: title
								},
								legend: {
									position: 'bottom'
								}
							}
						}
					});
				}
			}
		}
	});

	onDestroy(() => {
		if (chartInstance) chartInstance.destroy();
	});
</script>

<style>
.chart-wrapper {
	background-color: rgb(255, 255, 255);
	border-radius: 8px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.571);
	padding: 1rem;
}
canvas {
	width: 100% !important;
	height: auto !important;
}
</style>

<div class="chart-wrapper">
	<canvas id={chartId}></canvas>
</div>