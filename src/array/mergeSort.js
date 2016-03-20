'use strict';

export function merge(left, right) {
  /**
   * Utility function that merges two arrays together
   * @param  {Array}
   * @param  {Array}
   * @return {Array}
   */
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

export function mergeSort(items) {
  /**
   * Sorts array by dividing it into smaller arrays
   * and recursively calling itself.
   * @param  {Array}
   * @return {Array}
   */
  if (items.length < 2) {
    return items;
  }

  let middle = Math.floor(items.length / 2);
  let left =  items.slice(0, middle);
  let right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
