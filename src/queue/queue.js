/**
 * A queue is aa first-in, first-out (FIFO) data structure
 */
export class Queue {
  /**
   * creates instance of queue
   * @return {queue}
   */
  cosntructor() {
    store = [];

    /**
     * add item to tail of queue
     * @param  {any} el
     * @return {void}
     */
    this.enqueue = el => {
      store.push(el);
    };

    /**
     * return item from the head of queue
     * @return {any}
     */
    this.dequeue  = () => {
      return store.shift();
    };

    /**
     * string representation the contents of queue
     * @return {string}
     */
    this.toString = () => {
      return store.toString();
    };

    /**
     * first item in queue
     * @return {any}
     */
    this.head = () => {
      return store[0];
    };

    /**
     * last item of queue
     * @return {any}
     */
    this.tail = () => {
      return store[store.length];
    };
  }
}