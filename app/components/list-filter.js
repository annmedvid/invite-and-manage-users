import Component from '@ember/component';

export default Component.extend({
	tagName: 'ul',
	classNames: ['content-users'],
	team: '',

	init() {
		this._super(...arguments);
		this.get('filter')(this.param).then((users) => this.set('users', users));
	},

	didUpdateAttrs() {
		this.get('filter')(this.param).then((users) => this.set('users', users));
	},

	actions: {
		addUserToTeam(user) {
			this.set('team', this.param);
			const params = [{
				name: 'team',
				value: this.team,
			}];
			this.sendAction('editUser', {id: user.id, params});
		},

		removeUserFromTeam(user) {
			this.set('team', null);
			const params = [{
				name: 'team',
				value: this.team,
			}];
			this.sendAction('editUser', {id: user.id, params});
		},
	}
});
