import { module, test } from 'qunit';
import { setupTest } from 'e-cards/tests/helpers';

module('Unit | Controller | menu-card/create', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:menu-card/create');
    assert.ok(controller);
  });
});
