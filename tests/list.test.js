import test from 'tape';
import { List } from '../lib/list/list.js';

test('[list] Methods', assert => {
  let list = new List([1,2,3,4,5]);

  let msg = 'list begins from proper item';
  assert.equal(list.current(), 1, msg);

  msg = 'list index changes accordingly to next()';
  list.next();
  assert.equal(list.current(), 2, msg);

  msg = 'list index find() correct item';
  list.remove(3);
  assert.equal(list.toString(), '1,2,4,5', msg);

  msg = 'list index changes accordingly to remove()';
  list.remove(3);
  assert.equal(list.toString(), '1,2,4,5', msg);
  assert.end();
});

