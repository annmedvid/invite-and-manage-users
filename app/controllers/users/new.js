import Controller from '@ember/controller';

const options = ['admin', 'helpdesk', 'engineer', 'finance', 'other'];

export default Controller.extend({
	user: {},
	options,

	actions: {
		updateRole(value) {
			this.set('user.role', value);
		},

		inviteUser() {
			const self = this;
			const user = this.get('user');

			if (user.email && user.role) {
				const newUser = this.get('store').createRecord('user', user);
				newUser.save()
					.then(() => this.set('user', {}))
					.then(() => self.transitionToRoute('users'));
			}
		},

		onCancel() {
			this.set('user', {});
			this.transitionToRoute('users');
		},
	},
});
