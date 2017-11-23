import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		editUser(data) {
			this.get('store').find('user', data.id).then(user => {
				data.params.forEach(param => user.set(param.name, param.value));
				user.save();
			});
		},

		deleteUser(item) {
			const self = this;
			let confirmation = confirm("Are you sure to delete?");
      if (confirmation) {
				this.get('store')
					.find('user', item.id)
					.then((user) => user.destroyRecord())
					.then(() => self.transitionToRoute('users'));
      }
		},
	}
});
