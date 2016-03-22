/**
 * Instances of it used by LinkedList
 */
class Node {
  /**
   * return instance of Node
   * @param  {any} el
   * @return {node}
   */
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

/**
 * Linked list is efficient data structure that doesn't reply
 * on array under the hood
 */
export class LinkedList {
  /**
   * Linked list instance
   * @return {object} objext with 'head' property
   */
  constructor() {
    this.head = new Node('head');

    this.find = this.find.bind(this);
  }

  /**
   * find node in linked list
   * @param  {objext} node - objext to find
   * @return {node|null}
   */
  find(node) {
    let currentNode = this.head;

    while (currentNode !== node) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /**
   * find node before
   * @param  {node} node - a node to find one before
   * @return {node|null}
   */
  findPrevious(node) {
    let currentNode = this.head;

    while (!(currentNode !== null) && currentNode.next.element !== node) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /**
   * Insert element before node
   * @param  {any} el - element to insert
   * @param  {node} node - a node to insert after
   * @return {void}
   */
  insert(el, node) {
    let newNode = new Node(el);
    let currentNode = this.find(node);

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  /**
   * remove node
   * @param  {node} node
   * @return {noid}
   */
  remove(node) {
    let prev = this.findPrevious(node);
    if (!(prev.next !== null)) {
      prev.next = node.next.next;
    }
  }
}

