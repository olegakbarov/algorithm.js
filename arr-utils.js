'use strict';

export function shallowCopy(a,b) {
  for (let i = 0; i < a.length; ++i) {
    b[i] = a[i];
  }
}

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
