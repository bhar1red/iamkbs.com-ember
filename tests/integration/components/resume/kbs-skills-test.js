import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('resume/kbs-skills', 'Integration | Component | resume/kbs skills', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{resume/kbs-skills}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#resume/kbs-skills}}
      template block text
    {{/resume/kbs-skills}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
