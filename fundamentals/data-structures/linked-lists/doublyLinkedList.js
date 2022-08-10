class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    // O(1)
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    // O(n) - Actually O(n/2) which is translated to O(n) but theoretically better
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.length - 1) {
      this.append(value);
    }
    const newNode = new Node(value);
    const prevNode = this.traverseToIndex(index - 1);
    const nextNode = prevNode.next;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;

    this.length++;
  }

  remove(index) {
    // O(n) - Actually O(n/2) which is translated to O(n) but theoretically better
    const prevNode = this.traverseToIndex(index - 1);
    const removedNode = prevNode.next;
    const nextNode = removedNode.next;
    nextNode.prev = prevNode;
    prevNode.next = nextNode;
    this.length--;
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
    const middle = this.length / 2;
    let currentNode;
    if (index - middle > 0) {
      let i = this.length - 1;
      currentNode = this.tail;
      while (i !== index) {
        currentNode = currentNode.prev;
        i--;
      }
    } else {
      let i = 0;
      currentNode = this.head;
      while (i !== index) {
        currentNode = currentNode.next;
        i++;
      }
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
