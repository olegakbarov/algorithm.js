/**
 * List data structure.
 * let list = new List([1,2,3])
 */
export class List {
  /**
   * creates instance of list
   * @param  {array} items - array of items to be place into the list
   * @return {List}       [description]
   */
  constructor(items) {
    this.data = items;
    this._index = 0;
  }

  /**
   * @return {String} returns stringified representation
   * of the content of list
   */
  toString() {
    return this.data.toString();
  }

  /**
   * @return {Number} return index of current item
   */
  current() {
    return this.data[this._index];
  }

  /**
   * @return {Number}
   */
  next() {
    return this.data[this._index++];
  }

  /**
   * @return {Number} returns index of added element
   */
  add(el) {
    this.data.push(el);
    this._index = ++this._index;
    return this._index;
  }

  /**
   * @return {Number} returns index of provided element
   */
  find(el) {
    let ix = this.data.indexOf(el);

    if (ix > 0) {
      return this.data[ix];
    } else {
      return 'No such element in list';
    }
  }

  /**
   * @return {Number} returns index of removed element
   */
  remove(el) {
    let ix = this.data.indexOf(el);

    if (ix > 0) {
      this.data.splice(ix, 1);
    } else {
      return 'No such element in list';
    }
  }
}