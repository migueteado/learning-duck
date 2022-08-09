# Linked List

A linked list contains a set of nodes, which have two elements:

1. Value of the data.
2. Pointer to the next node.

The first node is called head, and the last node is called tail. Linked list are null terminated, we know which node is the tail node because it points to null.

```js
// Array
const baskert = ['apples', 'graphes', 'pears'];

// Linked list example (pseudocode).
apples
8947 --> grapes
				 8742 --> pears
									372  --> null
```

### Operations

prepend `O(1)`, append `O(1)`, lookup `O(n)`, insert `O(n)`, delete `O(n)`.

# Types

## Single

Usual linked list, described above.

- [Single Linked List Implementation](singleLinkedList.js)

## Doubly

A doubly linked list contains a set of nodes, which have three elements:

1. Value of the data.
2. Pointer to the next node.
3. Pointer to the previous node.

The first node is called head, and the last node is called tail. Linked list are null terminated, we know which node is the tail node because its next value points to null.

Doubly linked list require more memory but can reduce the execution time by allowing you to traverse both onwards and backwards in your list.

- [Doubly Linked List Implementation](doublyLinkedList.js)

## Single vs Doubly

Single is simpler and requires less memory, but if you lose the head you will have lost all the data. But it cannot be traversed back to front.

Doubly requires more memory but you can traverse it in every direction. Better for searching.

# Pros & Cons

### Pros

Fast insertion, fast deletion, ordered, flexible size.

### Cons

Slow lookup, requires more memory.

# Pointers

A pointer is a reference to a space in memory:

```js
/* Stores the object in memory and creates a variable
 ** that points to that space in memory
 */
const obj1 = { a: true };

// Creates a new variables with the same pointer reference
const obj2 = obj1;
obj2.a = "it changed";

console.log(obj1); // { a: "it changed" }
console.log(obj2); // { a: "it changed" }

// Deletes the pointer
delete obj1;

console.log(obj1.a); // undefined
console.log(obj2.a); // { a: "it changed" }

/* Garbage collector only frees the space in memory that is not used.
 ** Since obj2 is still pointing to that space in memory the data is
 ** still available.
 */
```

\*\* _In high level programming language usually memory is automatically handled with something called garbage collector, this frees the spaces in memory which contain data that is not going to be used anymore._
