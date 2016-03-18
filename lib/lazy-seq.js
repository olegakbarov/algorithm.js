'use strict';

export class LazySeq {
  constructor(values) {
    this.values = values;
    this._index = 0;
  }

  *[Symbol.iterator]() {
    // wat
  }
}

let lazy = new LazySeq();
console.log(lazy))
