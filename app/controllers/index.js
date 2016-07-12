import Ember from 'ember';

export default Ember.Controller.extend({
	chartOptions: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true,
				},
			}],
		},
	},
	chartData: Ember.computed('model', function() {
		let counts = {};
		let arr = this.get('model').mapBy('whatIsYourAge');
		for(var i = 0; i< arr.length; i++) {
			    var num = arr[i];
			        counts[num] = counts[num] ? counts[num]+1 : 1;
		}
		let fin = Object.keys(counts).map(val => counts[val]);
		return {
			labels: this.get('model').mapBy('whatIsYourAge').uniq(),
			datasets: [
			{
				label: 'breakdown by age',
				data:fin,
			},
			],
		};
	}),
});
