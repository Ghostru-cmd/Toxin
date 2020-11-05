var ctx = document.getElementById('room_impress_doughnut').getContext('2d');
ctx.canvas.width = 135;
ctx.canvas.height = 135;
var myChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: [
			'Великолепно',
			'Хорошо', 
			'Удовлетворительно', 
			'Разочарован'
		],
		datasets: [{
			label: 'Dataset 1',
			data: [25, 25, 50, 0],
			backgroundColor: [
				'#BC9CFF',
				'#6FCF97',
				'#FFE39C'
			],
			borderColor: [
				'rgba(255, 255, 255, 1)',
				'rgba(255, 255, 255, 1)',
				'rgba(255, 255, 255, 1)'
			],
			hoverBackgroundColor: [
				'#BC9CFF',
				'#6FCF97',
				'#FFE39C'
			],
			borderWidth: 2,
			weight: 100
		}]
	},
	options: {
		responsive: false,
    	maintainAspectRatio: false,
		cutoutPercentage: 90,
		animation: {
			duration: 0
		},
		legend: {
			display: false,
			position: 'right',
			labels: {
				//fontFamily: '',
				//fontStyle: '',
				//fontSize: '',
				padding: 100,
				fontColor: 'rgba(31, 32, 65, 0.75)',
				usePointStyle: false
			}
		},
		tooltips: {
			enabled: false,
		},
		scales: {
			xAxes: [{
				ticks: {
					display: false
				},
				gridLines: {
					drawBorder: true,
					display: false,
				}
			}],
			yAxes: [{
				ticks: {
					display: false
				},
				gridLines: {
					drawBorder: true,
					display: false,
				}
			}]
		}
	}
		});