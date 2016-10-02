/* eslint-disable max-depth */
/* eslint-disable no-unused-vars */
'use strict';

/**
 * Utility function that swaps two items in array
 * @param  {Array} arr
 * @param  {Integer} a
 * @param  {Integer} b
 * @return {Array}
 */
function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a]= arr[b];
  arr[b] = tmp;

  return arr;
}

/**
 * Naive bubbleSort
 * @param  {Array} arr
 * @return {Array}
 */
function bubbleSort(arr) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSorted = false;
      }
    }
  }

  return arr;
}
