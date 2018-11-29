import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | meta-data-route', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:meta-data-route');
    assert.ok(route);
  });
});
