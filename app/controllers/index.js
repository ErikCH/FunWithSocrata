import Ember from 'ember';

export default Ember.Controller.extend({
	choice: null,
	actions: {
		selectChoice(choice){
			this.set('choice',choice);
		}
	},
	chartOptions: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true,
				},
			}],
		},
	},
	chartData: Ember.computed('model','choice', function() {
		let counts = {};
		let choice = this.get('choice') || 'sharedCommunityGarden';
		let arr = this.get('model').mapBy(choice);
		for(var i = 0; i< arr.length; i++) {
			    var num = arr[i];
			        counts[num] = counts[num] ? counts[num]+1 : 1;
		}
		debugger;
		let fin = [counts['-5'], counts['-4'], counts['-3'], counts['-2'], counts['-1'],
					counts['0'], counts['1'], counts['2'], counts['3'], counts['4'], counts['5']
					];
		return {
			//labels: this.get('model').mapBy('sharedCommunityGarden').uniq(),
			labels: [-5,-4,-3,-2,-1,0,1,2,3,4,5],
			datasets: [
			{
				label:choice,
				data:fin,
			},
			],
		};
	}),
});
