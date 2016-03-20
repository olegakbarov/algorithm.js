/**
 * List data structure.
 * let list = new List([1,2,3])
 */
export class List {
  /**
   * creates instance of list
   * @param  {array} items - array of items to be place into the list
   * @return {List}
   */
  constructor(items) {
    /**
     * @private store
     * @type {array}
     */
    let store = items;

    /**
     * we store current element index in this variable
     * @private index
     * @type {number}
     */
    let index = 0;

    /**
     * @return {String} returns stringified representation
     * of the content of list
     */
    this.toString = () => {
      return store.toString();
    };

    /**
     * @return {Number} return index of current item
     */
    this.current = () => {
      return store[index];
    };

    /**
     * @return {Number}
     */
    this.next = () => {
      return store[index++];
    };

    /**
     * @param {any} el - element to be inserted
     * @param {number} ix - index to append element to
     */
    this.insert = (el, ix) => {
      store.splice(ix - 1, 1, el);
    };

    /**
     * @param {any} el - finds and returns element if it exists in the list
     * @return {Number} returns index of provided element
     */
    this.find = el => {
      let ix = store.indexOf(el);

      if (ix > 0) {
        return store[ix];
      } else {
        return false;
      }
    };

    /**
     * @param {any} el - remove element if it exists in the list
     * @return {Number} returns index of removed element
     */
    this.remove = el => {
      let ix = store.indexOf(el);

      if (ix > 0) {
        store.splice(ix, 1);
      } else {
        return false;
      }
    };
  }
}