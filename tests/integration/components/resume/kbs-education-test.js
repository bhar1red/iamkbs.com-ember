import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('resume/kbs-education', 'Integration | Component | resume/kbs education', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{resume/kbs-education}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#resume/kbs-education}}
      template block text
    {{/resume/kbs-education}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
