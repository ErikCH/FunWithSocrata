import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	   whatIsYourZipCode: attr('number'),
	   howLongHaveYouLivedInReno: attr('string'),
	   areYouARegisteredVoter: attr('string'),
	   whatIsYourAge: attr('string'),
	   sharedCommunityGarden: attr('number'),
	   highSpeedInternet: attr('number'),
	   lowNoiseLevels: attr('number'),
	   proximityToFriendsFamily: attr('number'),
	   publicWiFi: attr('number'),
	   publicArt: attr('number')
});
