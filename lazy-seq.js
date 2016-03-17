'use strict';

class LazySeq {
  constructor(values) {
    if (!Array.isArray(values)) throw Error('Provide valid array');
    this.values = values;
    this.index = 0;
  }

  get current() {
    return this.index;
  }

  set current(val) {
    this.index = val;
  }

  next() {
    this.index = ++this.index;
  }

  first() {
    return this.values[0];
  }

  nth(n) {
    return this.values[n - 1];
  }
}

let seq = new LazySeq(['one', 'two', 'three']);

console.log(seq.index);
console.log(seq.next());
console.log(seq.current);
console.log(seq.nth(2));
