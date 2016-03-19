'use strict';

export class List {
  constructor(items) {
    this.data = items;
    this._index = 0;
  }

  toString() {
    return this.data.toString();
  }

  current() {
    return this.data[this._index];
  }

  next() {
    return this.data[this._index++];
  }

  add(el) {
    this.data.push(el);
    this._index = ++this._index;
    return this._index;
  }

  find(el) {
    let ix = this.data.indexOf(el);

    if (ix > 0) {
      return this.data[ix];
    } else {
      return 'No such element in list';
    }
  }

  remove(el) {
    let ix = this.data.indexOf(el);

    if (ix > 0) {
      this.data.splice(ix, 1);
    } else {
      return 'No such element in list';
    }
  }
}