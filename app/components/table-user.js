import Component from '@ember/component';

const optionsStatus = [
	{
		value: true,
		title: 'Enabled'
	},
	{
		value: false,
		title: 'Disabled'
	}
];

const optionsRole = ['admin', 'helpdesk', 'engineer', 'finance', 'other'];

export default Component.extend({
	tagName: 'tr',
	isEditable: false,
	name: '',
	email: '',
	enabled: '',
	role: '',
	optionsStatus,
	optionsRole,

	init() {
		this._super(...arguments);
		this.set('selectedStatus', optionsStatus.filter(option => this.item.data.enabled === option.value)[0]);
		this.set('selectedRole', optionsRole.filter(option => this.item.data.role === option)[0]);
	},

	actions: {
		updateName(value) {
			this.set('name', value);
		},

		updateEmail(value) {
			this.set('email', value);
		},

		updateEnabled(value) {
			this.set('selectedStatus', value);
			this.set('enabled', value.value);
		},

		updateRole(value) {
			this.set('selectedRole', value);
			this.set('role', value);
		},

		editItem(item) {
			if (this.isEditable) {
				const params = [];
				['name', 'email', 'enabled', 'role'].forEach(param => {
					if (this[param] !== '') {
						params.push({
							name: param,
							value: this[param],
						})
					}
				});

				this.set('name', '');
				this.set('email', '');
				this.set('enabled', '');
				this.set('role', '');
				this.sendAction('editUser', {id: item.id, params});
			}
			this.toggleProperty('isEditable');
		},

		deleteItem(item) {
			this.sendAction('deleteUser', item);
		},
	},
});