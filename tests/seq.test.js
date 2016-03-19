import test from 'tape';
import { Seq } from '../lib/Seq';

test('Seq', assert => {
  let msg;

  let instance = new Seq(['one', 'two', 'three']);
  let first = instance.first();
  let last = instance.last();
  let nth = instance.nth(2);

  msg = 'first() works properly';
  assert.deepEqual(first, 'one', msg);

  msg = 'last() works properly';
  assert.deepEqual(last, 'three', msg);

  msg = 'nth() works properly';
  assert.deepEqual(nth, 'two', msg);
  assert.end();
});