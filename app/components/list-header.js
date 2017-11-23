import Component from '@ember/component';

export default Component.extend({
	tagName: 'header',
	classNames: ['content-header'],
	hasQuantity: false,

	init() {
		this._super(...arguments);
		if (this.items && this.items.modelName === 'user') {
			let quantity = this.items.content.length;
			this.set('hasQuantity', true);
			this.set('quantity', quantity);
		}
	},

	willUpdate() {
		if (this.items && this.items.modelName === 'user') {
			let quantity = this.items.content.length;
			this.set('hasQuantity', true);
			this.set('quantity', quantity);
		}
	},
});
