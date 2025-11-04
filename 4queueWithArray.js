//* Array Imprimentation of Queue
/**
 * * enqueue dequeue peak(first) print
 */

class Queue {
  constructor() {
    this.item = [];
  }

  // O(1)
  isEmpty() {
    return this.item.length === 0;
  }

  // O(1)
  enqueue(item) {
    this.item.push(item);
  }

  // O(n)
  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    this.item.shift();
  }

  // O(1)
  peak() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }
    console.log(this.item[0]);
  }

  // O(n)
  print() {
    console.log('start <- '+ this.item.join(" <- ") + ' <- end');
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(5);
queue.enqueue(3);
queue.peak();
queue.enqueue(1);
queue.enqueue(16);
queue.print();
queue.dequeue();
queue.print();

