// Using linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    // O(1)
    return this.top.value;
  }

  push(value) {
    // O(1)
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }
    this.length++;
  }

  pop() {
    // O(1)
    const pointer = this.top;
    this.top = this.top.next;
    this.length--;
    return pointer.value;
  }
}

const myStack = new Stack();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");
console.log(myStack.pop()); // Google
console.log(myStack.peek()); // Udemy
