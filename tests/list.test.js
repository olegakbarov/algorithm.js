/* eslint-disable max-statements */
import test from 'tape';
import { List } from '../src/list/list.js';

test('[list] Methods', assert => {
  let list = new List([1,2,3,4,5]);

  let msg = 'list begins from proper item';
  assert.equal(list.current(), 1, msg);

  msg = 'list index changes accordingly to next()';
  list.next();
  assert.equal(list.current(), 2, msg);

  msg = 'front() sets index to correct element';
  list.front();
  assert.equal(list.current(), 1, msg);

  msg = 'end() sets index to correct element';
  list.end();
  assert.equal(list.current(), 5, msg);

  msg = 'find() returns correct item at index';
  let four = list.find(4);
  assert.equal(four, 4, msg);

  msg = 'insert() adds item to specific index';
  list.insert('beer', 3);
  assert.equal(list.toString(), '1,2,beer,4,5', msg);

  msg = 'list index changes accordingly to remove()';
  list.remove(3);
  assert.equal(list.toString(), '1,2,beer,4,5', msg);

  msg = 'contains() checks if element exists in list';
  assert.ok(list.contains('beer'), msg);

  msg = 'clear() deletes all element from instance';
  list.clear();
  assert.equal(list.toString(), '', msg);

  assert.end();
});
