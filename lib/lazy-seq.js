'use strict';

export class LazySeq {
  constructor(values) {
    this.values = values;
    this._index = 0;
  }

  *[Symbol.iterator]() {
    let i = 0;
    for(;;) {
      i++;
      yield `azaza ${i}`;
    }
  }
}

let lazy = new LazySeq();
console.log(lazy))
