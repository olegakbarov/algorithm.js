'use strict';

/**
 * In-place shuffles the array using Fisher–Yates algorithm
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @param  {array} array — accepts array of numbers
 * @return {array]}
 */
export function shuffle(array) {
  let m = array.length, t, i;

  while (m) {
    // random index between the unshuffled
    i = Math.floor(Math.random() * m--);

    // swap it with current element
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

/**
 * Creates two-dimetioal matrix,
 * @param  {number} numrows — number of rows
 * @param  {number} numcols — number of columns
 * @param  {any} initial — the value to be populated
 * @return {array} - array of arrays
 */
export function createMatrix(numrows, numcols, initial) {
  let res = [];

  for (let i = 0; i < numrows; i++) {
    let row = [];
    for (let j = 0; j < numcols; j++) {
      row.push(initial);
    }
    res.push(row);
  }

  return res;
}