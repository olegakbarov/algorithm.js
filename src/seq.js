'use strict';

/**
 * Seq represents a possibly endless sequence of entities
 */
export class Seq {
  /**
   * creates instance of Seq
   * @param  {array} values - accepts array of values
   * @return {Seq}
   */
  constructor(values) {
    if (!Array.isArray(values)) throw Error('Provide valid array');
    this.values = values;
    this._index = 0;
  }

  /**
   * @return {Any} item of sequence with current index
   */
  get current() {
    return this.values[this._index];
  }

  /**
   * @return {Number} Sets current item to @param
   */
  set current(val) {
    this._index = val;
  }

  /**
   * @return {Any}
   */
  next() {
    return this.values[++this._index];
  }

  /**
   * @return {Any}
   */
  first() {
    return this.values[0];
  }

  /**
   * @return {Any}
   */
  last() {
    return this.values[this.values.length - 1];
  }

  /**
   * @return {Any}
   */
  nth(n) {
    return this.values[n - 1];
  }
}
