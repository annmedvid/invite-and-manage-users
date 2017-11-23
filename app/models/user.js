import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	email: DS.attr(),
	created: DS.attr(),
	enabled: DS.attr(),
	role: DS.attr(),
	team: DS.attr(),
});
