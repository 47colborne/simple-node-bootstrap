import test from 'tape';
import add from '../lib/add';

test('A passing test', (assert) => {
  assert.equal(add(1, 2), 3, 'Returns the sum of the two numbers');
  assert.end();
});

test('A failing test', (assert) => {
  assert.equal(add(1, 2), 4, 'Failing test');
  assert.end();
});
