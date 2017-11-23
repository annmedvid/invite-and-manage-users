import Component from '@ember/component';

const options = ['blue', 'yellow', 'pink', 'green', 'violet'];

export default Component.extend({
	tagName: 'tr',
	classNames: ['table-item'],
	isEditable: false,
	name: '',
	description: '',
	color: '',
	userQuantity: '',
	options,
	selected: '',

	init() {
		this._super(...arguments);
		const quantity = this.users.filter(user => user.data.team === this.item.data.name).length;
		this.set('selected', options.filter(option => this.item.data.color === option)[0]);
		this.set('userQuantity', `${quantity} member${quantity > 1 ? 's' : ''}`);
	},

	actions: {
		updateName(value) {
			this.set('name', value);
		},

		updateDescription(value) {
			this.set('description', value);
		},

		updateColor(value) {
			this.set('selected', value);
			this.set('color', value);
		},

		editItem(item) {
			if (this.isEditable) {
				const params = [];
				['name', 'description', 'color'].forEach(param => {
					if (this[param]) {
						params.push({
							name: param,
							value: this[param],
						})
					}
				});

				this.set('name', '');
				this.set('description', '');
				this.set('color', '');
				this.sendAction('editTeam', {id: item.id, params});
			}
			this.toggleProperty('isEditable');
		},

		deleteItem(item) {
			this.sendAction('deleteTeam', item);
		},
	}
});
