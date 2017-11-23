import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByIn(param) {
			if (param !== '') {
				const search = {
					context: 'in',
					team: param
				}
				return this.get('store').query('user', search);
			} else {
				return this.get('store').findAll('user');
			}
		},

		filterByOut(param) {
			if (param !== '') {
				const search = {
					context: 'out',
					team: param
				}
				return this.get('store').query('user', search);
			} else {
				return this.get('store').findAll('user');
			}
		},

		editUser(data) {
			const self = this;
			this.get('store').find('user', data.id).then(user => {
				data.params.forEach(param => user.set(param.name, param.value));
				user.save().then(() => self.target._routerMicrolib.refresh());
			});
		},
	}
});
