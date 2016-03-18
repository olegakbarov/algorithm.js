'use strict';

/* this merges two sorted arrays */
export function merge(left, right) {
  let il = 0, ir = 0, res = [];

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      res.push(left[il++]);
    } else {
      res.push(right[ir++]);
    }
  }

  return res.concat(left.slice(il)).concat(right.slice(ir));
}

/* this sorts array */
export function mergeSort(items) {
  if (items.length < 2) {
    return items;
  }

  let middle = Math.floor(items.length / 2);
  let left =  items.slice(0, middle);
  let right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
