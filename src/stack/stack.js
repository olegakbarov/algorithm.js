/**
 * Stack, aka "last-in, first-out (LIFO) data structure"
 */
export class Stack {
  /**
   * creates empty stack instance
   * @return {stack}
   */
  constructor() {
    /**
     * private storage of the stack re
     * @type {Array}
     */
    let store = [];

    /**
     * add item on top of stack
     * @param  {any} el
     * @return {void}
     */
    this.add = el => {
      store.push(el);
    };

    /**
     * return top item of the stack
     * @return {any}
     */
    this.next = () => {
      if (store.length > 0) {
        return store.pop();
      } else {
        return false;
      }
    };

    /**
     * peek returns last item without removing it
     * @return {any}
     */
    this.peek = () => {
      return store[store.length - 1];
    };

    /**
     * size of stack
     * @return {number}
     */
    this.size = () => {
      return store.length;
    };

    /**
     * serialize stack to string
     * @return {string}
     */
    this.toString = () => {
      return store.toString();
    };
  }
}