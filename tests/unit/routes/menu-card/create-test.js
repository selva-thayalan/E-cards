import { module, test } from 'qunit';
import { setupTest } from 'e-cards/tests/helpers';

module('Unit | Route | menu-card/create', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:menu-card/create');
    assert.ok(route);
  });
});
