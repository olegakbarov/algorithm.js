/* eslint-disable max-depth */
'use strict';

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a]= arr[b];
  arr[b] = tmp;

  return arr;
}

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

let arr = [4, 5, 2, 9, 7, 5, 8];

bubbleSort(arr);
