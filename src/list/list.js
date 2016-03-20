'use strict';

/**
 * List data structure.
 * let list = new List([1,2,3])
 */
export class List {
  constructor(items) {
    this.data = items;
    this._index = 0;
  }

  toString() {
    /**
     * @return {String} returns stringified representation
     * of the content of list
     */
    return this.data.toString();
  }

  current() {
    /**
     * @return {Number} return index of current item
     */
    return this.data[this._index];
  }

  next() {
    /**
     * @return {Number}
     */
    return this.data[this._index++];
  }

  add(el) {
    /**
     * @param {Any}
     * @return {Number} returns index of added element
     */
    this.data.push(el);
    this._index = ++this._index;
    return this._index;
  }

  find(el) {
    /**
     * @param  {Any}
     * @return {Number} returns index of provided element
     */
    let ix = this.data.indexOf(el);

    if (ix > 0) {
      return this.data[ix];
    } else {
      return 'No such element in list';
    }
  }

  remove(el) {
    /**
     * @param  {Any}
     * @return {Number} returns index of removed element
     */
    let ix = this.data.indexOf(el);

    if (ix > 0) {
      this.data.splice(ix, 1);
    } else {
      return 'No such element in list';
    }
  }
}