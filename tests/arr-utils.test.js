import test from 'tape';
import { createMatrix, shuffle } from '../lib/arr/utils.js';

test('[utils] Shuffle', assert => {
  let arr = [1,2,3,5,8,13,21]
  let res = shuffle(arr);

  let msg = 'no items left on initial indexes';

  for (let i = 0; i < arr.length; i++){
    assert.notOk(res[i] !== arr[i], msg);
  }
  assert.end();
});

test('[utils] Matrix', assert => {
  let res = createMatrix(3, 9, 1);
  let expected = [
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1]
  ];

  let msg = 'matrixCreate() works properly';
  assert.deepEqual(res, expected, msg);

  msg = 'valid access via [row][col]';
  assert.deepEqual(1, expected[2][8], msg);
  assert.end();
});
