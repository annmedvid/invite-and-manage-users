
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('team-is-enabled', 'helper:team-is-enabled', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{team-is-enabled inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

