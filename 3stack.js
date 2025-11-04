//* Stack
/**
 * * push pop peak print
 */

class Stack {
  constructor() {
    this.item = [];
  }

  // O(1)
  isEmpty() {
    return this.item.length === 0;
  }

  // O(1)
  push(item) {
    this.item.push(item);
  }

  // O(1)
  pop() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }
    this.item.pop();
  }

  // O(1)
  peak() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }
    console.log(this.item[this.item.length - 1]);
  }

  // O(n)
  print() {
    console.log(this.item.join(" <- "));
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(5);
stack.push(3);
stack.push(2);
stack.push(7);
stack.print();
stack.pop();
stack.peak();
