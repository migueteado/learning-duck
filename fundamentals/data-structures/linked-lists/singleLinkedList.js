class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // O(1)
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    // O(1)
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    // O(n)
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.length - 1) {
      this.append(value);
    }
    const newNode = new Node(value);
    const prevNode = this.traverseToIndex(index - 1);
    const nextNode = prevNode.next;
    newNode.next = nextNode;
    prevNode.next = newNode;

    this.length++;
  }

  remove(index) {
    // O(n)
    const prevNode = this.traverseToIndex(index - 1);
    const removedNode = prevNode.next;
    const nextNode = removedNode.next;
    prevNode.next = nextNode;
    this.length--;
  }

  // Reverse list
  reverse() {
    if (!this.head.next) {
      return;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }

  print() {
    // O(n)
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    // O(n)
    let i = 0;
    let currentNode = this.head;
    while (i !== index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(6);
myLinkedList.append(16);
myLinkedList.prepend(9);
myLinkedList.insert(2, 99);
myLinkedList.remove(3);
console.log(myLinkedList.print()); // [ 9, 10, 99, 16 ]
myLinkedList.reverse();
console.log(myLinkedList.print()); // [ 16, 99, 10, 9 ]
