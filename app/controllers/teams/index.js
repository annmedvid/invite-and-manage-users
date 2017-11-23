import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		editTeam(data) {
			this.get('store').find('team', data.id).then(team => {
				data.params.forEach(param => team.set(param.name, param.value));
				team.save();
			});
		},

		deleteTeam(item) {
			const self = this;
			let confirmation = confirm("Are you sure to delete?");
      if (confirmation) {
				this.get('store')
					.find('team', item.id)
					.then(team => team.destroyRecord())
					.then(() => self.transitionToRoute('teams'));
      }
		},
	}
});
