// Using arrays
class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    // O(1)
    return this.data[this.data.length - 1];
  }

  push(value) {
    // O(1)
    this.data.push(value);
  }

  pop() {
    // O(1)
    return this.data.pop();
  }
}

const myStack = new Stack();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");
console.log(myStack.pop()); // Google
console.log(myStack.peek()); // Udemy
