import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model() {
		return RSVP.hash({
			users: this.get('store').findAll('user'),
			teams: this.get('store').findAll('team'),
		});
	}
});
