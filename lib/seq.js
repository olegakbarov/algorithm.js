'use strict';

export class Seq {
  constructor(values) {
    if (!Array.isArray(values)) throw Error('Provide valid array');
    this.values = values;
    this._index = 0;
  }

  get current() {
    return this.values[this._index];
  }

  set current(val) {
    this._index = val;
  }

  next() {
    return this.values[++this._index];
  }

  first() {
    return this.values[0];
  }

  last() {
    return this.values[this.values.length - 1];
  }

  nth(n) {
    return this.values[n - 1];
  }
}
