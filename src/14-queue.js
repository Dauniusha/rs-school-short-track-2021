const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.list = new ListNode();
  }

  get size() {
    let elem = this.list;
    let counter = 0;
    while (elem.next !== null) {
      counter++;
      elem = elem.next;
    }
    return counter;
  }

  enqueue(element) {
    let temp = this.list;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = new ListNode(element);
    if (this.list.value === undefined) {
      this.list = this.list.next;
    }
  }

  dequeue() {
    const temp = this.list.value;
    this.list = this.list.next;
    return temp;
  }
}

module.exports = Queue;
