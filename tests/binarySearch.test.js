/* eslint-disable max-statements */

import test from 'tape';
import { binarySearch } from '../src/array/binarySearch.js';

/**
 * Returns
 * @param  {Ineger} n — number to match critaria
 * @return {bool}
 */
function matchCriteria(n) {
  return Boolean(n % 2 === 0);
}

test('binarySearch', assert => {
  let msg;

  let arr = [13, 17, 21, 23, 24, 26, 44, 88];
  let res = binarySearch(arr, matchCriteria);
  let expected = 6;

  msg = 'binarySearch() works properly #1';
  assert.deepEqual(res, expected, msg);
  assert.end();
});
