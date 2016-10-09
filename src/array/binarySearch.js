/* eslint-disable max-depth */
'use strict';

/**
 * Searches for first item matching criteria
 * @param  {Array} arr — sorted array of Ints
 * @param  {Function} matchCriteria — returns bool
 * @return {Integer}
 */
export function binarySearch(arr, matchCriteria) {
// function binarySearch(arr, matchCriteria) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right)  / 2);

    if (matchCriteria(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
