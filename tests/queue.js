/* eslint-disable max-statements */
import test from 'tape';
import { Queue } from '../src/queue/queue.js';

test('[Queue] methods', assert => {
  let queue = new Queue();
  let msg = 'empty when created';
  assert.ok(queue.empty(), msg);

  msg = 'enque works fine';
  queue.enqueue('bazinga');
  assert.equals(queue.head(), 'bazinga', msg);

  assert.end();
});