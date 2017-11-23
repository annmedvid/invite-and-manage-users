import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model(params) {
		return RSVP.hash({
			team: this.get('store').findRecord('team', params.team_id),
			users: this.get('store').findAll('user'),
		});
	}
});
