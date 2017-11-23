import Controller from '@ember/controller';

const options = ['blue', 'yellow', 'pink', 'green', 'violet'];

export default Controller.extend({
	team: {},
	options,

	actions: {
		updateColor(value) {
			this.set('team.color', value);
		},

		addTeam() {
			const self = this;
			const team = this.get('team')

			if (team.name && team.description && team.color) {
				const newTeam = this.get('store').createRecord('team', team);
				newTeam.save()
					.then(() => this.set('team', {}))
					.then(() => self.transitionToRoute('teams'));
			}
		},

		onCancel() {
			this.set('team', {});
			this.transitionToRoute('teams');
		},
	},
});
