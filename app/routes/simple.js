import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return { someData: 'this is data',
			 otherData: 'more data'}
	}
});
