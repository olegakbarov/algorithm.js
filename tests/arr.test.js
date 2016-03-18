import test from 'tape';
import { merge, mergeSort } from '../lib/arr/mergeSort.js';

test('mergeSort', assert => {
  let msg;
  let a = [22, 33, 44, 66, 99, 111];
  let b = [10, 11, 12, 50, 70, 200];
  let res = merge(a,b);
  let expected = [10,11,12,22,33,44,50,66,70,99,111,200];
  msg = 'merge() works properly #1';
  assert.deepEqual(res, expected, msg);

  a = [22, 33, 44,];
  b = [];
  res = merge(a,b);
  expected = [22,33,44];
  msg = 'merge() works properly #2';
  assert.deepEqual(res, expected, msg);

  a = [];
  b = [22, 33, 44,];
  res = merge(a,b);
  expected = [22,33,44];
  msg = 'merge() works properly #2';
  assert.deepEqual(res, expected, msg);
  assert.end();
});

test('Merge', assert => {
  let msg;
  let a = [99, 11, 37, 66, 2, 14, 5, 69];
  let res = mergeSort(a);
  let expected = [2, 5, 11, 14, 37, 66, 69, 99];
  msg = 'mergeSort() works properly #1';
  assert.deepEqual(res, expected, msg);

  assert.end();
});

test('Merge sort performance', assert => {
  let arr = [], i = 0, rounds = 10000000;
  while (i < rounds) {
    arr.push(Math.random() * 1000);
    i++;
  }

  let startedAt = Date.now();
  mergeSort(arr);
  let endedAt = Date.now();
  let elapsedTime = endedAt - startedAt;
  assert.comment(`Merge soft record for ${rounds} rounds: ${elapsedTime} ms`);
  assert.end();
});