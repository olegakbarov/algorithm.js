'use strict';

/* expects obeject */
export function shallowCopy(a,b) {
  for (let i = 0; i < a.length; ++i) {
    b[i] = a[i];
  }
}

/* expects array */
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

/* expects 3 integers */
export function createMatrix(numrows, numcols, initial) {
  let res = [];

  for (let i = 0; i < numrows; i++) {
    let row = [];
    for (let j = 0; j < numcols; j++) {
      row.push(initial);
    }
    res.push(row)
  }

  return res;
}