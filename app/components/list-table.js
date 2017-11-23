import Component from '@ember/component';

export default Component.extend({
	tagName: 'table',
	classNames: ['content-table'],

	actions: {
		editUser(item) {
			this.sendAction('editUser', item);
		},

		editTeam(item) {
			this.sendAction('editTeam', item);
		},

		deleteUser(item) {
			this.sendAction('deleteUser', item);
		},

		deleteTeam(item) {
			this.sendAction('deleteTeam', item);
		},
	}
});
